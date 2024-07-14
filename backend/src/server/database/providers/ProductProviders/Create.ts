import {PrismaClient, Product} from '@prisma/client'
import { ProductCreateDTO } from '../../../shared/DTOs/ProductsDTOs/create-product.dto'
const prisma = new PrismaClient()

export const CreateProvider = async (productCreateDTO: ProductCreateDTO): Promise<Error | Product> => {
    try {
        const newProduct = await prisma.product.create({ data: productCreateDTO })
        return newProduct
    } catch (error) {
        console.log('An Error occurred during product \n', error)
        return new Error('An Error occurred during product create')
    }
}