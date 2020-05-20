import React from 'react'

import { MDBContainer, MDBRow, MDBBtn } from 'mdbreact'
import SectionList from '../../components/SectionList'

import OperationModal from '../../components/OperationsModal'

import './styles.css'

const Home: React.FC = () => {
  return (
    <>
      <MDBContainer>
        <SectionList />
        <MDBRow center>
          <MDBBtn color='blue'>Realizar Sorteio</MDBBtn>
        </MDBRow>
      </MDBContainer>
      <OperationModal type='new'/>
    </>
  )
}

export default Home