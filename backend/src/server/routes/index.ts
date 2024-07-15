import { ProductControllers } from '../controllers/ProductControllers'
import { Request, Response } from 'express'
import { Router } from 'express'
const router = Router()

router.get('/', (req: Request, res: Response) => { return res.status(200).send('<h1>Server is healthy...</h1>') })

router.post('/products', ProductControllers.CreateProductController)
router.get('/products', ProductControllers.GetAllProductsController)
router.get('/products/:id', ProductControllers.GetProductByIdController)
router.put('/products/:id', ProductControllers.UpdateProductController)
router.delete('/products/:id', ProductControllers.DeleteProductByIdController)

export { router }