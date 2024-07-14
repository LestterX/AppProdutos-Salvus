import { PrismaClient, Product } from "@prisma/client"
const prisma = new PrismaClient()

export const GetByIdProvider = async (id: string): Promise<Error | Product | null> => {
    try {
        const product = await prisma.product.findFirst({ where: { id } })
        return product
    } catch (error) {
        console.log('An Error occurred during product update \n', error)
        return new Error('An Error occurred during product update')
    }
}