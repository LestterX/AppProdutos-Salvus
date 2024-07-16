import { useState } from "react"
import { SearchContext } from "./SearchContext"


export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchFilter, setSearchFilter] = useState('')
    const [searchLimit, setSearchLimit] = useState(7)
    const [searchPage, setSearchPage] = useState(1)
    const [searchOrderBy, setSearchOrderBy] = useState<'asc' | 'desc'>('asc')
    return (
        <SearchContext.Provider value={{searchFilter, setSearchFilter, searchLimit, setSearchLimit, searchPage, setSearchPage, searchOrderBy, setSearchOrderBy}}>
            {children}
        </SearchContext.Provider>
    )
}