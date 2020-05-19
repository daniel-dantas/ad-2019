import { Schema, model, Document } from 'mongoose'

interface PersonType extends Document{
  name: string,
  email: string,
  friend ?: PersonType | null,
}

const PersonScheema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  friend: {
    type: Schema.Types.ObjectId,
    ref: 'Person',
    required: false
  }
})

export default model('Person', PersonScheema)
export {
  PersonType
}