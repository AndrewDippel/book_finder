const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    bookId: String
    authors:[String]
    description: String
    title: String
    image: String
    link: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: Id!
    user: User
  }

  type InputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    DeleteBook(bookId: Id!): User
  }
`;

module.exports = typeDefs;