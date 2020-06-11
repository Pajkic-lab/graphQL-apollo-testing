import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import AuthState from './context/auth/AuthState'
import TodoState from './context/todo/TodoState'

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
      <TodoState>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </TodoState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);

