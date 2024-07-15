import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const countProvider = async (filter: string = ''): Promise<Error | number> => {
    try {
        const count = await prisma.product.count({
            where: {
                name: { contains: filter },
            }
        })
        return count
    } catch (error) {
        console.log('An error occurred during count calculation');
        return new Error('An error occurred during count calculation')
    }
}