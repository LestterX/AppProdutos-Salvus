import { ChangeEvent, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

function TopBar() {
    const {setSearchFilter} = useContext(SearchContext)
    
    const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSearchFilter(event.target.value)
    }
    return (
        <>
            <section className="flex justify-center items-center h-full gap-4">
                <input onChange={handleInputSearch} type="text" name="" id="" />
                <button >Enviar</button>
            </section>
        </>
    );
}

export default TopBar;