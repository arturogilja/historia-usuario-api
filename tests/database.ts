import { expect } from 'chai'
import 'mocha'
import { createConnection, Connection } from 'typeorm'

describe('Database connection', async () => {
  let connection: Connection

  before(async () => {
    connection = await createConnection()
  })

  after(async () => {
    return await connection.close()
  })

  it('Should connect to database', async () => {
    expect(connection.isConnected).to.be.true
  })

  it('Should have registered entities', async () => {
    expect(connection.entityMetadatas).to.be.an('array')
    expect(connection.entityMetadatas).to.not.be.empty
  })

  it('Should not be pendant migrations', async () => {
    expect(await connection.showMigrations()).to.not.be.true
  })
})
