import express, { json } from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT ?? 3000

export const initApp = () => {
  app.use(json())
  app.disable('x-powered-by')
  app.options('*')

  app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
  })

  app.listen(PORT, () => {
    console.log(`App listening On: http://localhost:${PORT}`)
  })
}
