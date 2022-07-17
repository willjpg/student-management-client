import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_ALL_STUDENTS } from '../graphql/Queries'


function ListOfAllStudents() {

    const { data } = useQuery(GET_ALL_STUDENTS)
    return (
        <div className=''>
            {data && data.getAllStudents.map((student: any) => {

                return (
                    <div className='list rounded-bl-lg'>
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