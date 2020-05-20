import API from './config/api'

export default class PersonDrawService {

  public static async draw(){
    return await API.get('/draw').then(response => {
      return true
    }).catch(err => {
      return false
    })
  }

}