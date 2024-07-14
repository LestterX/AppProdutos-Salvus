import { Response, Request } from 'express'
import { ProductProviders } from '../../database/providers/ProductProviders'
import { ServerResponses } from '../../shared/ServerResponses'
const serverResponses = new ServerResponses()

export const GetProductByIdController = async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
    const product = await ProductProviders.GetByIdProvider(req.params.id)
    if (product instanceof Error) {
        return await serverResponses.internalServerError(res, {
            message: 'An error occurred',
            errors: {
                default: product.message
            },
        })
    }
    return await serverResponses.created(res, {
        message: 'Product found successfully',
        product
    })
}