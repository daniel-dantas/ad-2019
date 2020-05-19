import { PersonType } from '../models/Person'

export default class Draw {

  private static shuffle (array: any[]){

    let currentIndex = array.length
    let randomIndex, temporaryValue = 0

    while (currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  public static async next (people: PersonType[]){

    return this.shuffle(people).pop()

  }


}

