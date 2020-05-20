import React from 'react'

import './styles.css'
import { MDBCard, MDBCardHeader, MDBCardBody, MDBRow, MDBCol } from 'mdbreact'

import DeleteModal from '../DeleteModal'
import OperationsModal from '../OperationsModal'

const SectionList: React.FC = () => {
  return (
    <>
      <MDBRow center>
        <MDBCol size='12'>
          <MDBCard border="light" className="m-3 card-content-sectionList">
          <MDBCardHeader>Pessoas na lista de sorteio!</MDBCardHeader>
          <MDBCardBody className='body-card-section'>
            <div className="card-item-container">
              <MDBRow center className='section-person-list'>
                <MDBCol md='4'>Pessoa 1</MDBCol>
                <MDBCol md='4'>Email 1</MDBCol>
                <MDBCol md='4'>
                  <OperationsModal type='edit'/>
                  <DeleteModal />
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  )
}

export default SectionList