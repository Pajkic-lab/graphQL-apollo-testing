import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

import AuthState from './context/auth/AuthState'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/',
  })
});


ReactDOM.render(
  <React.StrictMode>
   <ApolloProvider client={client}>
     <AuthState>
       <App />
    </AuthState>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

