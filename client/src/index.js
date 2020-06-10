import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import AuthState from './context/auth/AuthState'

import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://localhost:4000/'
    })
  })



ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);

