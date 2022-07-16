import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_STUDENT } from '../graphql/Mutations';

function CreateStudent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");

    const [createStudent, { error }] = useMutation(CREATE_STUDENT);




    return (
        <div className=' flex align-middle justify-center'>
        <div className='createStudent flex'>
          <input
            placeholder='name'
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
            className='text-white hover:bg-gray-700'
            onClick={() => {
              createStudent({
                variables: { name: name, email: email, cpf: cpf },
              });
            }}
          >
            Adicionar Aluno
          </button>

        </div>

      </div>
    )
}
    export default CreateStudent;
