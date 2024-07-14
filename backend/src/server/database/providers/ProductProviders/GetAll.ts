import { PrismaClient, Product } from "@prisma/client";
import { ProductSearchQueriesDTO } from "../../../shared/DTOs/product-search-queries.dto"
const prisma = new PrismaClient()

export const GetAllProvider = async (productSearchQueriesDTO: ProductSearchQueriesDTO): Promise<Error | Array<Product>> => {
    const {filter = '', limit = 7, page = 1, orderBy = 'asc'} = productSearchQueriesDTO //Remover e passar valores padrão pelo controller
    try {
        const products: Array<Product> = await prisma.product.findMany({
            where: {name: { contains: filter }},
            take: limit,
            skip: (page - 1) * limit,
            orderBy: {
                name: orderBy,
            },
        })
        const productsCount = await prisma.product.count()
        return products
    } catch (error) {
        console.log('An Error occurred during products search', error);
        return new Error('An Error occurred during products search')        
    }
}