import Mongoose from 'mongoose'

export default class Mongo {
  
  public static connect() {
    Mongoose.connect('mongodb+srv://daniel-dantas:meubanco@ad-2019-yicid.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log(`MongoDB is working!`)
    }).catch(err => {
      console.log(`Error starting mongo: ${err}`)
    })
  }

}
