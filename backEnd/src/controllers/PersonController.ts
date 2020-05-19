import Person, { PersonType } from '../models/Person'
import { Request, Response } from 'express'

export default class PersonController {

  public static async create (req: Request, res: Response){

    const person: PersonType = req.body

    Person.create(person).then(person => {
      return res.status(200).send(person)
    }).catch(err => {
      return res.status(400).send({message: 'Person already registered'})
    })

  }

  public static async read (req: Request, res: Response){

    const people = await Person.find() as PersonType[]

    return res.status(200).send({
      size: people.length,
      people: people
    })

  }

  public static async update (req: Request, res: Response){

    const person: PersonType = req.body

    Person.updateOne({_id: person._id}, person).then(response => {
      return res.status(200).send(response)
    }).catch(err => {
      return res.status(400).send({message: 'There is no person with this id'})
    })

  }

  public static async delete (req: Request, res: Response){

    const { _id } = req.body as PersonType

    Person.deleteOne({_id}).then(() => {
      return res.status(200).send({message: 'This person was successfully deleted'})
    }).catch(err => {
      return res.status(400).send({message: 'There is no person with this id'})
    })

  }

}
