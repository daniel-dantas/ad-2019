import { Request, Response } from 'express'

import Draw from '../utils/Draw'
import Person, { PersonType } from '../models/Person'
import EmailService from '../services/EmailService'

export default class DrawController {

  public static async create(req: Request, res: Response){

    const people = await Person.find() as PersonType[]

    if (people.length < 4 || people.length % 2 ){
      return res.status(404).send({message: 'To carry out the draw, the number of participants must be above three and even!'})
    }

    const friendsList = people.slice(0, people.length)

    await people.map(async person => {

      let friend = Draw.next(friendsList)

      if(friend._id === person._id){
        let mySelf = friend
        friend = Draw.next(friendsList)
        friendsList.push(mySelf)
      }

      person.friend = friend

      await Person.updateOne({_id: person._id}, person)
      await EmailService.send(person)
    })

    return res.status(200).send({message: 'Friends drawn!'})

  }

}

