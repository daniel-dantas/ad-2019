import { Request, Response } from 'express'

import Draw from '../utils/Draw'
import Person, { PersonType } from '../models/Person'

export default class DrawController {

  public static async create(req: Request, res: Response){

    const people = await Person.find() as PersonType[]

    const missingPeople = people.slice(0, people.length)

    people.map(async person => {

      let friend = Draw.next(missingPeople)

      while(person._id === friend._id){
        missingPeople.push(friend)
        friend = Draw.next(missingPeople)
      }

      person.friend = friend._id

      await Person.updateOne({_id: person._id}, person)

    })

    return res.status(200).send({message: 'Friends drawn!'})

  }

}

