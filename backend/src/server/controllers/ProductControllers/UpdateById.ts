import { Response, Request } from 'express'
import { ProductProviders } from '../../database/providers/ProductProviders'
import { ServerResponses } from '../../shared/ServerResponses'
import { ProductUpdate } from '../../database/models/Product/update-product'
const serverResponses = new ServerResponses()

interface IBodyProps extends Omit<ProductUpdate, 'id'> { }

export const UpdateProductController = async (req: Request<{ id: string }, {}, IBodyProps>, res: Response): Promise<Response> => {
    const updatedProduct = await ProductProviders.UpdateByIdProvider(req.params.id, req.body)
    if (updatedProduct instanceof Error) {
        return await serverResponses.internalServerError(res, {
            message: 'An error occurred',
            errors: {
                default: updatedProduct.message
            },
        })
    }
    return await serverResponses.ok(res, {
        message: 'Product updated successfully',
        updatedProduct
    })
}