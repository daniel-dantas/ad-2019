import React, { useState } from 'react'

import PersonType from '../../types/PersonType'


import { MDBContainer, MDBRow, MDBBtn } from 'mdbreact'
import SectionList from '../../components/SectionList'

import OperationModal from '../../components/OperationsModal'

import './styles.css'

const Home: React.FC = () => {

  const [people, setPeople] = useState<PersonType[]>([
    {name: 'Daniel', email: 'das@fd', _id: 'da'},
    {name: 'Dalina', email: 'dsda@daasd', _id: 'das'}
  ])

  return (
    <>
      <MDBContainer>
        <SectionList people={people} />
        <MDBRow center>
          <MDBBtn color='blue' className='draw-button-home'>Realizar Sorteio</MDBBtn>
        </MDBRow>
      </MDBContainer>
      <OperationModal type='new'/>
    </>
  )
}

export default Home