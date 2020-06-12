import server from '../src/server'
import { expect } from 'chai'
import 'mocha'
import { agent as request } from 'supertest'
import { createConnection, Connection } from 'typeorm'

describe('Products API test', async () => {
  let connection: Connection

  before(async () => {
    connection = await createConnection()
  })

  after(async () => {
    server.close()
    return await connection.close()
  })

  it('Should return all products', async () => {
    const res = await request(server).get('/products')
    expect(res.status).to.equal(200)
    expect(res.body).to.be.an('object')
    expect(res.body.success).to.be.true
    expect(res.body.products).to.be.an('array')
  })

  it('Should return not found error', async () => {
    const res = await request(server).get('/products/1000')
    expect(res.status).to.equal(404)
    expect(res.body).to.be.an('object')
    expect(res.body.success).to.be.false
  })
})
