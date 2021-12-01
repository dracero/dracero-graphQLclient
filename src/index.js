import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Module from './pages/module';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Module path="/" />
  </ApolloProvider>,
  document.getElementById('root')
);
