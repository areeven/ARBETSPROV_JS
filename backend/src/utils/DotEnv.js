import dotenv from 'dotenv'

dotenv.config()

export const port = process.env.SERVER_PORT
export const environment = process.env.ENV_NODE
export const dbName = process.env.DB_NAME
export const colName = process.env.COLLECTION_NAME