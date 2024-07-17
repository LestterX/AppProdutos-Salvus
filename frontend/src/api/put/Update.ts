import axios from "axios";
import { Product } from "../../models/ProductModel";

const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:3000"


export const Update = async (id: string | undefined, data: Product) => {
    try {
        const response = await axios.put(`${BACKEND_URL}/products/${id}`, data, {
            method: 'PUT',
        })
        return response
    } catch (error) {
        console.log('An error occurred for Update');
    }
}