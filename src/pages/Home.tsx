import CreateStudent from "../components/CreateStudent";
import ListOfAllStudents from "../components/ListOfAllStudents";
import { Logo } from "../components/Logo";
import SearchBar from "../components/SearchBar";



export function Home() {


  return (
    <>
      <main className='flex justify-center' >
        <div className=' flex align-middle justify-center flex-col'>
          <div className="flex justify-center items-center mt-12 flex-col">
            <Logo />
            <h1>
              Sistema de Gestão de Alunos
            </h1>
          </div>
          <SearchBar />
          <CreateStudent />

          <div className='ml-12 flex flex-row overflow-auto pr-5 max-h-[240px]'>
            <ListOfAllStudents />
          </div>
        </div>
      </main>
    </>
  )

}