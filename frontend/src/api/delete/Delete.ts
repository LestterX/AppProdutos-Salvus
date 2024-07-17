import axios from "axios";

const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:3000"


export const Delete = async (id: string | undefined) => {
    try {
        const response = await axios.delete(`${BACKEND_URL}/products/${id}`, {
            method: 'DELETE',
        })
        return response
    } catch (error) {
        console.log('An error occurred for Delete');
    }
}