import { PrismaClient, Product } from "@prisma/client"
import { ProductUpdateDTO } from "../../../shared/DTOs/ProductsDTOs/update-product.dto"
const prisma = new PrismaClient()

export const UpdateByIdProvider = async (id: string, productUpdateDTO: ProductUpdateDTO): Promise<Error | Product> => {
    try {
        const updatedProduct = await prisma.product.update({ where: { id }, data: productUpdateDTO })
        return updatedProduct
    } catch (error) {
        console.log('An Error occurred during product update \n', error)
        return new Error('An Error occurred during product update')
    }
}