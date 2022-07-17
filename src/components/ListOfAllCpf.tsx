import { useQuery, useMutation } from '@apollo/client'
import React from 'react'
import { GET_ALL_STUDENTS } from '../graphql/Queries'
import { DELETE_STUDENT } from '../graphql/Mutations'
import { UserMinus } from 'phosphor-react'




function AllCpf() {

  const { data } = useQuery(GET_ALL_STUDENTS)


  const [deleteStudent, { error }] = useMutation(DELETE_STUDENT);




  return (
    <div className=''>
      {data && data.getAllStudents.map((student: any) => {

        return (
          <div className='w-[220px] h-[28px] items-stretch rounded-r-md bg-gray-200 -lg mt-2  pl-2'>

            <div className='justify-between flex'>
              {student.cpf}
              <button className='bg-red-700 pl-2 pr-2 rounded-r-md border-l-2 border-white text-gray-100 hover:bg-red-900 transition-colors'
                onClick={() => {
                  deleteStudent({ variables: { id: student.id } });
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