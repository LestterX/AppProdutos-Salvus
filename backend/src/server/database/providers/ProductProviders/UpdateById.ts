import { PrismaClient, Product } from "@prisma/client"
import { ProductUpdate } from "../../models/Product/update-product"
const prisma = new PrismaClient()

export const UpdateByIdProvider = async (id: string, productUpdateDTO: ProductUpdate): Promise<Error | Product> => {
    try {
        const updatedProduct = await prisma.product.update({ where: { id }, data: productUpdateDTO })
        return updatedProduct
    } catch (error) {
        console.log('An Error occurred during product update \n', error)
        return new Error('An Error occurred during product update')
    }
}