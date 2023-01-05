import gql from 'graphql-tag';

export const LOGIN_USER = gql
  `
mutation login($email: String!, $password: String!) {
login(email: $email, password:$password){
    token {
      user{
        _id
        username
      }
    }
}
}`;

export const ADD_USER = gql
  `
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      user {
        _id
        email
        username
      }
        token
    }
}`;

export const SAVE_BOOK = gql
  `
mutation saveBook($saveThisBook: BookInput!) {
  saveBook (bookToSave: $saveThisBook) {
    _id
    username
    emil
    bookCount
    savedBooks {
      _id
      bookId
      authors
      image
      link
      title
      description
    }
  }
}
`;

export const REMOVE_BOOK = gql
  `
mutation deleteBook($bookId: ID!) {
  deleteBook(bookId: $bookId) {
    _id
    username
    email
    bookcount
    savedBooks {
      _id
      bookId
      authors
      image
      link
      title
      description
    }
  }
}
`;