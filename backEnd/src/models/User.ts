import { Schema, model, Document } from 'mongoose'

interface UserType extends Document{
  name: string,
  email: string,
  friend ?: UserType
}

const UserSchema = new Schema({
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
    ref: 'User',
    required: false
  }
})

export default model('User', UserSchema)
export {
  UserType
}