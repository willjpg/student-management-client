import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_STUDENTS } from '../graphql/Queries'


function AllEmail() {

    const { data } = useQuery(GET_ALL_STUDENTS)
    return (
        <div className=''>
            {data && data.getAllStudents.map((student: any) => {

                return (
                    <div className='list'>

                        <div className=''>{student.email}
                        </div>

                    </div>
                )

            })}
        </div>
    )
}

export default AllEmail;