import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation } from '@apollo/client'
import { CREATE_STUDENT } from './graphql/Mutations'

import './App.css'
import { client } from './lib/apollo'
import CreateStudent from './components/CreateStudent';



function App() {

  return (
    <>
    <ApolloProvider client={client} >
      <CreateStudent/>
    </ApolloProvider>
    </>
  );
}

export default App
