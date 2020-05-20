import React, { useState } from 'react'

import PersonType from '../../types/PersonType'


import { MDBContainer, MDBRow, MDBBtn } from 'mdbreact'
import SectionList from '../../components/SectionList'

import OperationModal from '../../components/OperationsModal'

import './styles.css'

const Home: React.FC = () => {

  const [people, setPeople] = useState<PersonType[]>([
    {name: 'Daniel', email: 'das@fd'},
    {name: 'Dalina', email: 'dsda@daasd'}
  ])

  return (
    <>
      <MDBContainer>
        <SectionList people={people} />
        <MDBRow center>
          <MDBBtn color='blue'>Realizar Sorteio</MDBBtn>
        </MDBRow>
      </MDBContainer>
      <OperationModal type='new'/>
    </>
  )
}

export default Home