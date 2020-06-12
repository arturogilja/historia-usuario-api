import { Router } from 'express'
import * as h from 'express-async-handler'
import { getAllProducts, getProduct } from '../controllers/ProductController'

const ProductsRouter = Router()
ProductsRouter.route('/').get(h(getAllProducts))
ProductsRouter.route('/:id').get(h(getProduct))

export { ProductsRouter }
