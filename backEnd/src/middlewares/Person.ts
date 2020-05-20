import { Request, Response, NextFunction } from 'express'
import { PersonType } from '../models/Person'

export default function (req: Request, res: Response, next: NextFunction) {
    
  const method = req.method
  const { name, email, _id } = req.body as PersonType
  
  if(method === 'POST'){

    if(!name || !email){
      return res.status(400).send({message: 'The request body is poorly formatted, the default is { name, email }'})
    }

    next()

  } else if (method === 'DELETE'){

    const { _id } = req.headers

    if(!_id){
      return res.status(400).send({message: 'The request body is poorly formatted, the default is { _id }'})
    }

    next()

  }else if(method === 'PUT'){

    if( !_id || !name || !email ){
      return res.status(400).send({message: 'The request body is poorly formatted, the default is { _id ,name, email }'})
    }

    next()
  }else{
    next()
  }
  
}