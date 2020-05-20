import API from './config/api'
import PersonType from '../types/PersonType'


interface readResponse {
  size: number,
  people: PersonType[]
}

export default class PersonService {

  public static async read () : Promise<readResponse>{
    return await API.get('/person').then(response => {
      return response.data
    })
  }

  public static async create(person: PersonType) : Promise<PersonType>{
    return await API.post('/person', person).then(response => {
      return response.data
    }).catch(err => {
      return null
    })
  }

  public static async update(person: PersonType) : Promise<PersonType>{
    return await API.put('/person', person).then(response => {
      return response.data
    }).catch(err => {
      console.log('entrou aqui: '+err)
    })
  }

  public static async delete(id: string){
    return await API.delete('/person', {headers: {
      _id: id
    }}).then(response => {
      return true
    }).catch(response => {
      return false
    })
  }

}