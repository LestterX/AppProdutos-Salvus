import { ChangeEvent, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import CreateForm from "../CreateForm/CreateForm";

function TopBar() {
    const {setSearchFilter} = useContext(SearchContext)
    
    const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSearchFilter(event.target.value)
    }
    return (
        <>
            <section className="flex justify-center items-center w-full max-w-5xl mx-auto my-0 h-full gap-4">
                <input onChange={handleInputSearch} autoFocus type="text" name="" id="" className="w-full h-10" />
                <CreateForm />
            </section>
        </>
    );
}

export default TopBar;