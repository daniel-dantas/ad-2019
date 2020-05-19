import NodeMailer from 'nodemailer'

export default NodeMailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'ezequiel.robel@ethereal.email',
    pass: 'SVMrQ9cTGnyJ5fR2E3'
  }
})

