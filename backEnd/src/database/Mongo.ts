import Mongoose from 'mongoose'

export default class Mongo {
  
  public static connect() {
    Mongoose.connect('mongodb://localhost/ad-2019-dev-daniel', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log(`MongoDB is working!`)
    }).catch(err => {
      console.log(`Error starting mongo: ${err}`)
    })
  }

}
