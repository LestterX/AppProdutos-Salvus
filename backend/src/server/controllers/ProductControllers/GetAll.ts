import { Response, Request, query } from 'express'
import { ProductProviders } from '../../database/providers/ProductProviders'
import { ServerResponses } from '../../shared/ServerResponses'
import { ProductSearchQueriesProps } from '../../shared/product-search-queries'
const serverResponses = new ServerResponses()

export const GetAllProductsController = async (req: Request<{}, {}, {}, ProductSearchQueriesProps>, res: Response): Promise<Response> => {
    const products = await ProductProviders.GetAllProvider({ filter: req.query.filter || '', limit: req.query.limit || 7, page: req.query.page || 1, orderBy: req.query.orderBy || 'asc' })
    const productsCountByFilter = await ProductProviders.countProvider(req.query.filter)

    const errors: Array<String> = []
    if (products instanceof Error) { errors.push(products.message) }
    if (productsCountByFilter instanceof Error) { errors.push(productsCountByFilter.message) }

    if (errors.length >= 1) {
        return await serverResponses.internalServerError(res, {
            message: 'An error occurred',
            errors
        })
    }

    res.setHeader('access-control-expose-headers', 'x-total-count')
    res.setHeader('x-total-count', String(productsCountByFilter))

    return await serverResponses.ok(res, {
        message: 'Products found successfully',
        xTotalCount: productsCountByFilter,
        products
    })
}