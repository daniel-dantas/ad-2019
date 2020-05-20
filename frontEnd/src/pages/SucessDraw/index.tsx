import React from 'react'

import { useHistory } from 'react-router-dom'

import './styles.css'
import { MDBBtn } from 'mdbreact'

const SucessDraw: React.FC = () => {

  const history = useHistory()

  const clickButtonBack = () => {
    history.push('/')
  }

  return (
    <div id="sucessDraw">
      <h3>Sorteio realizado com sucesso!</h3>
      <span>Foi enviado um email para cada pessoa com seu devido amigo secreto.</span>
      <MDBBtn color='green' onClick={clickButtonBack} className='btn-back-sucess'>
        Voltar para a home
      </MDBBtn>
    </div>
  )
}
export default SucessDraw