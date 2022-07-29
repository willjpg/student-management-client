import { useMutation } from '@apollo/client';
import { UserPlus } from 'phosphor-react';
import React, { FormEvent, useState } from 'react'
import { CREATE_STUDENT } from '../graphql/Mutations';



function CreateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const [createStudent, { error }] = useMutation(CREATE_STUDENT);


  async function handleStudent(event: FormEvent) {
    event?.preventDefault();


    if (name.trim() !== '' && email.trim() !== '' && cpf.trim() !== '') {
      await createStudent({
        variables: {
          name,
          email,
          cpf
        }
      })
      window.location.reload()
    }

  }

  return (

    <div className='flex justify-center items-center mt-3 flex-col'>

      <div>
        <h2 className='font-bold text-xl'>Adicionar Aluno</h2>
      </div>

      <form className='flex ml-6' onSubmit={handleStudent}>
        <input
          placeholder='Nome'
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <input
          placeholder='E-mail'
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          placeholder='CPF'
          type="text"
          pattern="\d{3}.\d{3}.\d{3}-\d{2}"
          onChange={(event) => {
            setCpf(event.target.value);
          }}
        />

        <button
          className='text-white w-16 text-2xl h-8 mt-2 mb-2 pl-4 rounded-md  bg-green-400 hover:bg-gray-700 transition-colors'

        >
          <UserPlus size={32} />
        </button>
      </form>

    </div>

  )
}
export default CreateStudent;
