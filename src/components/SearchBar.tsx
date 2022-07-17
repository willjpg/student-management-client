import { useQuery } from "@apollo/client";
import { MagnifyingGlass } from "phosphor-react";
import { GET_BY_NAME } from "../graphql/Queries";
import { Logo } from "./Logo";

function SearchBar() {

    const { data } = useQuery(GET_BY_NAME)
    // const [name, setName] = useState("");
    

    return (
        <div className='flex justify-center items-center mt-16 flex-col'>
                <Logo />
                    <div className=''>
                        <div className="flex-row flex border border-gray-400 rounded-full hover:bg-white">
                            <MagnifyingGlass size={32} />

                            <input
                                className=" w-[600px] border-white"
                                placeholder='nome'
                                type="text"
                                onChange={() => {
                                    
                                }}
                            />
                            <button className="bg-black rounded-r-full text-white pl-2 pr-2">
                                pesquisar
                            </button>
                        </div>

                    </div>
                

          
        </div>
    )
}

export default SearchBar;