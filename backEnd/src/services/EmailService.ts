import { PersonType } from '../models/Person'

import Transport from '../config/TransportNodeMailer'

export default class EmailService {
  
  public static async send(person: PersonType) {

    await Transport.sendMail({
      from: `secretfrienddraw@mail.com`,
      to: person.email,
      subject: 'Descubra quem é seu amigo secreto!',
      html: `
        ${person.name} seu amigo secreto é ${person?.friend?.name}
      `
    })

  }

}

