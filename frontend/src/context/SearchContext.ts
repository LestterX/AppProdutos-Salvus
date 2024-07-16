/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, Dispatch, SetStateAction } from "react";

export const SearchContext = createContext<{
    searchFilter: string 
    setSearchFilter: Dispatch<SetStateAction<string>>

    
    searchLimit: number 
    setSearchLimit: Dispatch<SetStateAction<number>>

    
    searchPage: number 
    setSearchPage: Dispatch<SetStateAction<number>>

    
    searchOrderBy: string 
    setSearchOrderBy: Dispatch<SetStateAction<'asc' | 'desc'>>
}>({
    searchFilter: '',
    setSearchFilter: () => {},

    
    searchLimit: 7,
    setSearchLimit: () => {},

    
    searchPage: 1,
    setSearchPage: () => {},

    
    searchOrderBy: '',
    setSearchOrderBy: () => {},
})
