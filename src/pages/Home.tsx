import CreateStudent from "../components/CreateStudent";
import AllCpf from "../components/ListOfAllCpf";
import AllEmail from "../components/ListOfAllEmail";
import ListOfAllStudents from "../components/ListOfAllStudents";
import { Logo } from "../components/Logo";
import SearchBar from "../components/SearchBar";

export function Home() {


  return (
    <>
      <main className='flex justify-center' >
        <div className=' flex align-middle justify-center flex-col'>
          <div className="flex justify-center items-center mt-16 flex-col">
            <Logo />
            <h1>Sistema de Gestão de Alunos</h1>
          </div>
          <SearchBar />
          <CreateStudent />

          <div className='ml-12 flex flex-row overflow-auto pr-5 max-h-[260px]'>
            <ListOfAllStudents />
            <AllEmail />
            <AllCpf />
          </div>
        </div>
      </main>
    </>
  )

}