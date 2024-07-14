import { PrismaClient, Product } from "@prisma/client";
import { ProductSearchQueriesProps } from "../../../shared/product-search-queries"
const prisma = new PrismaClient()

export const GetAllProvider = async (productSearchQueriesProps: ProductSearchQueriesProps): Promise<Error | Array<Product>> => {
    let { filter, limit, page, orderBy} = productSearchQueriesProps
    
    try {
        const products: Array<Product> = await prisma.product.findMany({
            where: { name: { contains: filter } },
            take: limit ? limit : 7,
            skip: ((page ? page : 1) - 1) * (limit ? limit : 7),
            orderBy: {
                name: orderBy,
            },
        })
        return products
    } catch (error) {
        console.log('An Error occurred during products search', error);
        return new Error('An Error occurred during products search')
    }
}