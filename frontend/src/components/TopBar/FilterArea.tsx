import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

function FilterArea() {
    const { searchLimit, setSearchLimit } = useContext(SearchContext)
    const onLimtInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = Number(e.target.value)
        setSearchLimit(valor)
    }
    return (
        <input value={searchLimit} onChange={(e) => { onLimtInputChange(e) }} placeholder="Filtro: 7" type="number" name="limit" id="limit" min={7} max={100} className="h-10 w-20" />
    );
}

export default FilterArea;