import { FormEvent, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { MagnifyingGlass, PaperPlaneRight } from "phosphor-react";
import { GET_BY_NAME } from "../graphql/Queries";



function SearchBar() {
  const [searchStudent, { data }] = useLazyQuery(GET_BY_NAME)
  const [name, setName] = useState("");


  async function handleStudent(event: FormEvent) {
    event?.preventDefault();


    if (name !== '') {
      await searchStudent({
        variables: {
          name,

        }
      })
    }
  }


  return (
    <main className='flex justify-center items-center mt-3 flex-col'>

      <form onSubmit={handleStudent}
        className=" flex-row mt-4 flex border w-[500px] border-gray-200 rounded-full hover:bg-white">
        <div className="p-3">
          <MagnifyingGlass size={28} />
        </div>
        <input
          className=" w-[600px] border-white outline-none pr-1 hover:bg-white"
          placeholder='Pesquisar aluno...'
          type="search"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button className="bg-green-500 rounded-r-full text-white pl-2 pr-2 hover:bg-slate-800 transition-colors">
          <PaperPlaneRight size={28} />
        </button>
      </form>

      <div className="overflow-auto h-[110px] max-h-[110px] mt-1">
        {data && data.getByName.map((student: any) => {
          return (

            <div className="flex flex-row mr-2 ml-10 ">
              <div className="list rounded-bl-lg">
                {student.name}
              </div>
              <div className="list">
                {student.email}
              </div>
              <div className="list">
                {student.cpf}
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default SearchBar;