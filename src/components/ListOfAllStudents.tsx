import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_STUDENTS } from '../graphql/Queries'


function ListOfAllStudents() {

    const { data } = useQuery(GET_ALL_STUDENTS)
    return (
        <div className=''>
            {data && data.getAllStudents.map((student: any) => {

                return (
                    <div className='w-[220px] h-[28px] bg-gray-200 rounded-bl-lg mt-2  pl-2'>
                        <div >
                            {student.name}
                        </div>

                    </div>
                )

            })}
        </div>
    )
}

export default ListOfAllStudents;