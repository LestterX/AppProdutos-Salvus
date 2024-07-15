import { Response, Request } from 'express'
import { ProductProviders } from '../../database/providers/ProductProviders'
import { ServerResponses } from '../../shared/ServerResponses'
const serverResponses = new ServerResponses()

export const DeleteProductByIdController = async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
    const product = await ProductProviders.GetByIdProvider(req.params.id)
    if (!product) {
        return await serverResponses.internalServerError(res, {
            message: 'Not found',
            errors: {
                default: 'This product does not exists'
            }
        })
    }
    const deletedProduct = await ProductProviders.DeleteByIdProvider(req.params.id)
    if (deletedProduct instanceof Error) {
        return await serverResponses.internalServerError(res, {
            message: 'An error occurred',
            errors: {
                default: deletedProduct.message
            },
        })
    }
    return await serverResponses.ok(res, {
        message: 'Product deleted successfully',
        deletedProduct
    })
}