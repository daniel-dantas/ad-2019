import express, { Request, Response, json } from 'express'
import Mongo from './database/Mongo'
import Routes from './routes'
import Cors from 'cors'

const app = express()
app.set('port', process.env.PORT || 8000);

Mongo.connect()

const cors: any = Cors()

app.use(cors)
app.use(json())
app.use(Routes)

app.get('/', (req: Request, res: Response) => {
  res.send({
    name: 'ad-2019-API',
    version: '1.0.0',
    author: {
      name: 'Daniel Dantas',
      email: 'daniel.dantas.developer@gmail.com'
    }
  })
})

app.listen(app.get('port'), () => {
  console.log(`Server is open in port ${app.get('port')}`)
})