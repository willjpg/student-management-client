import { useQuery } from "@apollo/client";
import { MagnifyingGlass, PaperPlaneRight } from "phosphor-react";
import { GET_BY_NAME } from "../graphql/Queries";
import { Logo } from "./Logo";

function SearchBar() {

    const { data } = useQuery(GET_BY_NAME)
    // const [name, setName] = useState("");


    return (
        <main className='flex justify-center items-center mt-16 flex-col'>
            <div className=''>
                <div className="flex-row mt-5 flex border w-[500px] border-gray-200 rounded-full hover:bg-white">
                    <div className="p-3">
                        <MagnifyingGlass size={28} />
                    </div>
                    <input
                        className=" w-[600px] border-white"
                        placeholder='Pesquisar aluno...'
                        type="search"
                        onChange={() => {

                        }}
                    />
                    <button className="bg-green-500 rounded-r-full text-white pl-2 pr-2 hover:bg-slate-800 transition-colors">
                    <PaperPlaneRight size={28} />
                    </button>
                </div>

            </div>



        </main>
    )
}

export default SearchBar;