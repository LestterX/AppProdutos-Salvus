import { Response, Request } from 'express'
import { ProductProviders } from '../../database/providers/ProductProviders'
import { ProductCreate } from '../../database/models/Product/create-product'
import { ServerResponses } from '../../shared/ServerResponses'
const serverResponses = new ServerResponses()

interface IBodyProps extends Omit<ProductCreate, 'id'> { }

export const CreateProductController = async (req: Request<{}, {}, IBodyProps>, res: Response): Promise<Response> => {
    if (!req.body.name || !req.body.description || !req.body.price) {
        return await serverResponses.badRequest(res, {
            message:'You need to send NAME, DESCRIPTION and PRICE',
            dataReceived: req.body,
        })
    }
    const newProduct = await ProductProviders.CreateProvider(req.body)
    if (newProduct instanceof Error) {
        return await serverResponses.internalServerError(res, {
            message: 'Product already exists',
            errors: {
                default: newProduct.message
            },
        })
    }
    return await serverResponses.created(res, {
        message: 'Product created successfully',
        newProduct
    })
}