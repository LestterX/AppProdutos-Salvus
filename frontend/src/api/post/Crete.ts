import axios from "axios";

const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:3000"


export const Create = async (data: { name: string, price: string, description: string }) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/products`, data, { method: 'POST' },)
        return response
    } catch (error) {
        console.log('An error occurred for GetAll');
    }
}