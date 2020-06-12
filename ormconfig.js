require('reflect-metadata')
const dotenv = require('dotenv')
const { resolve, join } = require('path')
dotenv.config({ path: resolve(__dirname, './local.env') })

let entitiesDir = ''
if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'dev') entitiesDir = join(__dirname, `./src/entities/**/*.ts`)
else entitiesDir = join(__dirname, `./build/src/entities/**/*.js`)

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: process.env.DB_LOGGING === 'true',
  entities: [entitiesDir],
  migrations: [`${__dirname}/build/src/migration/**/*.js`],
  subscribers: [`${__dirname}/build/src/subscriber/**/*.js`],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
}
