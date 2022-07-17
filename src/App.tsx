import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation } from '@apollo/client'
import { CREATE_STUDENT } from './graphql/Mutations'

import './App.css'
import { client } from './lib/apollo'
import CreateStudent from './components/CreateStudent';
import ListOfAllStudents from './components/ListOfAllStudents';
import AllEmail from './components/ListOfAllEmail';
import AllCpf from './components/ListOfAllCpf';
import SearchBar from './components/SearchBar';



function App() {

  return (
    <>
      <ApolloProvider client={client} >
        <div className='flex justify-center' >
        <div className=' flex align-middle justify-center flex-col'>
          <SearchBar/>
          <CreateStudent />
          
        <div className='ml-12 flex flex-row overflow-auto over pr-5 max-h-[400px]'>  
          <ListOfAllStudents />
          <AllEmail/>
          <AllCpf/>
          </div>
        </div>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App
