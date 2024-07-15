import { PrismaClient, Product } from "@prisma/client"
const prisma = new PrismaClient()

export const DeleteByIdProvider = async (id: string): Promise<Error | Product> => {
    try {
        const deletedProduct = await prisma.product.delete({ where: { id } })
        return deletedProduct
    } catch (error) {
        console.log('An Error occurred during product update \n', error)
        return new Error('An Error occurred during product delete')
    }
}