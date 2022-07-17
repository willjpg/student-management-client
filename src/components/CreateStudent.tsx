import { useMutation } from '@apollo/client';
import { PlusCircle, UserPlus } from 'phosphor-react';
import React, { useState } from 'react'
import { CREATE_STUDENT } from '../graphql/Mutations';

function CreateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const [createStudent, { error }] = useMutation(CREATE_STUDENT);




  return (

    <div className='flex justify-center items-center flex-col'>
      <div>
      <h1 className='font-bold text-xl'>Adicionar Aluno</h1>
      </div>
      <div className='createStudent flex'>
        <input
          placeholder='nome'
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <input
          placeholder='e-mail'
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          placeholder='cpf'
          type="text"
          onChange={(event) => {
            setCpf(event.target.value);
          }}
        />

        <button
          className='text-white w-16 text-2xl h-8 mt-2 mb-2 pl-4 rounded-md bg-green-500 hover:bg-gray-700 transition-colors'
          onClick={() => {
            createStudent({
              variables: { name: name, email: email, cpf: cpf },
            });
          }}
        >
          <UserPlus size={32} />
        </button>

      </div>
    </div>

  )
}
export default CreateStudent;
