import * as express from 'express'
import { ProductsRouter } from './routes/products'
import ErrorHandler from './middleware/ErrorHandler'
import { join } from 'path'
import * as cors from 'cors'

//Express initialization
const app = express()

//CORS
app.use(cors())

//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Static Files
app.use('/files', express.static(join(__dirname, '../files')))

//Routers
app.use('/products', ProductsRouter)

//Error Handler
app.use(ErrorHandler)

//Listen
const server = app.listen(1500, () => {
  console.log('App running at port 1500')
})

export default server
