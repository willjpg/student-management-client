import { useQuery, useMutation } from '@apollo/client'
import React, { useReducer } from 'react'
import { GET_ALL_STUDENTS } from '../graphql/Queries'
import { DELETE_STUDENT } from '../graphql/Mutations'
import { PencilSimpleLine, UserMinus } from 'phosphor-react'



function AllCpf() {

  const { data } = useQuery(GET_ALL_STUDENTS)
  const [ignored, forceUpdate] = useReducer(x => x - 1, 0);

  const [deleteStudent, { error }] = useMutation(DELETE_STUDENT);




  return (
    <div className=''>
      {data && data.getAllStudents.map((student: any) => {

        return (
          <div className='list rounded-r-md'>

            <div className='justify-between flex'>
              {student.cpf}
              
               
                <button className='bg-red-700 pl-2 pr-2 rounded-r-md border-l-2 border-white text-gray-100 hover:bg-red-900 transition-colors'
                  onClick={() => {
                    deleteStudent({ variables: { id: student.id } }), forceUpdate();
                  }}
                >
                  <UserMinus size={28} />
                </button>
              
            </div>

          </div>
        )

      })}
    </div>
  )
}

export default AllCpf;