import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"

export const GetAll = async (searchFilter?: string, searchLimit?:number, searchPage?:number, searchOrderBy?: string) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/products?filter=${searchFilter}&limit=${searchLimit}&page=${searchPage}&orderBy=${searchOrderBy}`, {
            method: 'GET',
        })
        return response
    } catch (error) {
        console.log('An error occurred for GetAll');
    }
}