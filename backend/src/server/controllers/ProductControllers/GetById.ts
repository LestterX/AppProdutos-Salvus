import { Response, Request } from 'express'
import { ProductProviders } from '../../database/providers/ProductProviders'
import { ServerResponses } from '../../shared/ServerResponses'
const serverResponses = new ServerResponses()

export const GetProductByIdController = async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
    const errors: Array<string> = []
    const product = await ProductProviders.GetByIdProvider(req.params.id)
    if (!product) { errors.push('Theres is no data related to this id') }
    if (product instanceof Error) { errors.push }
    if (errors.length >= 1) {
        return await serverResponses.internalServerError(res, {
            message: 'An error occurred',
            errors,
        })
    }
    return await serverResponses.ok(res, {
        message: 'Product found successfully',
        product
    })
}