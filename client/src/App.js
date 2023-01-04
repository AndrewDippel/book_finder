import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: { authorization: token ? `bearer ${token}` : '' }
    })
  },
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <switch>
            <route exact path='/' component={SearchBooks} />
            <route exact path='/saved' component={SavedBooks} />
            <route render={() => <h1 className='display-2'>Page Does Not Exist</h1>} />
          </switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
