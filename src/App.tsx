import React from 'react';
import {ApolloProvider } from '@apollo/client'
import './App.css'
import { client } from './lib/apollo'
import { BrowserRouter } from 'react-router-dom';
import {Router} from './Router'


function App() {
  
  return (
    <>
      <ApolloProvider client={client} >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App
