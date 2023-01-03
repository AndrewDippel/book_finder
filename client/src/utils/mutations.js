import gql from 'graphql-tag';

export const LOGIN_USER = gql
  `
mutation loginUser($email: String!, $password: String!) {
login(email: $email, password:$password){
    tokenuser {
        _id
    }
}
}`;

export const ADD_USER = gql
  `
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
        user {
            _idusername
            emailbookcount
            savedBooks {
                Authors
                bookId
                image
                link
                title
                description
            }
        }
        token
    }
}`;

export const SAVE_BOOK = gql
  `
mutation saveBook($input: savedBooks!) {
  saveBook (input: $input) {
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

export const DELETE_BOOK = gql
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