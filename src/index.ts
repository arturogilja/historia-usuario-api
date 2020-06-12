import 'reflect-metadata'
import { createConnection } from 'typeorm'

load()
async function load() {
  //Database conection
  await createConnection()
  const app = require('./server')
}
