import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { UserMinus } from 'phosphor-react';
import { DELETE_STUDENT } from '../graphql/Mutations';
import { GET_ALL_STUDENTS } from '../graphql/Queries'


function ListOfAllStudents() {

const { data } = useQuery(GET_ALL_STUDENTS)
const [deleteStudent, { error }] = useMutation(DELETE_STUDENT);


  return (
    <main>
      {data && data.getAllStudents.map((student: any) => {

        return (
          <div className='flex flex-row'>
            <div className='list rounded-bl-lg' >
              {student.name}
            </div>
            <div className='list'>
              {student.email}
            </div>
            <div className='list justify-between flex'>
              {student.cpf}

              <button className='bg-red-700 pl-2 pr-2 rounded-r-md border-l-2 border-white text-gray-100 hover:bg-red-900 transition-colors'
                
                onClick={() => {
                  deleteStudent({ variables: { id: student.id } }), window.location.reload();
                }}
              >
                <UserMinus size={28} />
              </button>
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default ListOfAllStudents;