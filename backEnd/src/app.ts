import express, { Request, Response, json } from 'express'
import Mongo from './database/Mongo'
import Routes from './routes'
import Cors from 'cors'

const app = express()

const PORT = 8000

Mongo.connect()

app.use(json())
app.use(Routes)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my life typescript')
})

app.listen(PORT, () => {
  console.log(`Server is open in port ${PORT}`)
})