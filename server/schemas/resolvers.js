const { User, Book } = require('../models');
const { AuthErr } = require('apollo-server-express');
const { Auth } = require('../utils/auth');


const resolvers = {
  Query: {

    me: async (parent, args, data) => {
      if (data.user) {
        const userData = await User.findOne({ _id: data.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthErr(' Please Log in! ')
    },
  },
  Mutation: {
    newUser: async (parent, args) => {
      const user = await User.create(args);
      const token = Auth(user);
      return { user, token };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthErr(' Username or Password incorect')
      }
      const verifiedPassword = await user.isVerifiedPassword(password);
      if (!verifiedPassword) {
        throw new AuthErr(' Username or Password incorect');
      }
      const token = Auth(user);
      return { token, user };
    },
    saveBook: async (parent, { newBook }, data) => {
      if (data.user) {
        const updateUser = await User.findByIdAndUpdate(
          { _id: data.user._id },
          { $push: { savedBooks: newBook } },
          { new: true }
        );
        return updateUser;
      }
      throw new AuthErr(' Please Log in! ')
    },
    deleteBook: async (parent, { bookId }, data) => {
      if (data.user) {
        const updateUser = await User.findByIdAndUpdate(
          { _id: data.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updateUser;
      }
      throw new AuthErr(' Please Log in! ')
    },
  },
};

module.exports = resolvers;
