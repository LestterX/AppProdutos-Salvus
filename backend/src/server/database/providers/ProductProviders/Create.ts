import {PrismaClient, Product} from '@prisma/client'
import { ProductCreate } from '../../models/Product/create-product'
const prisma = new PrismaClient()

export const CreateProvider = async (productCreateDTO: ProductCreate): Promise<Error | Product> => {
    try {
        const newProduct = await prisma.product.create({ data: productCreateDTO })
        return newProduct
    } catch (error) {
        console.log('An Error occurred during product create \n', error)
        return new Error('An Error occurred during product create')
    }
}