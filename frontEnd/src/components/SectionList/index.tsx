import React, { useState, useEffect } from 'react'

import PersonType from '../../types/PersonType'

import './styles.css'
import { MDBCard, MDBCardHeader, MDBCardBody, MDBRow, MDBCol } from 'mdbreact'

import DeleteModal from '../DeleteModal'
import OperationsModal from '../OperationsModal'

interface Props {
  people: PersonType[]
}

const SectionList: React.FC<Props> = ({ people }) => {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<PersonType[]>([])


  useEffect(() => {
    if(search.length){
      setFilter(people.filter(person => {
        return person.name.toLowerCase().startsWith(search.toLowerCase())
      }))
    }else{
      setFilter(people.slice(0, people.length))
    }
  }, [people, search])

  return (
    <>
      <MDBRow center>
        <MDBCol size='12'>
          <MDBCard border="light" className="m-3 card-content-sectionList">
          <MDBCardHeader>
            <input
              className='form-control'
              placeholder='Procurar pessoa...'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </MDBCardHeader>
          <MDBCardBody className='body-card-section'>
            <div className="card-item-container">
              {filter.map(person => (
                <MDBRow key={person?._id} center className='section-person-list'>
                  <MDBCol md='4'>{person.name}</MDBCol>
                  <MDBCol md='4'>{person.email}</MDBCol>
                  <MDBCol md='4'>
                    <OperationsModal type='edit'/>
                    <DeleteModal />
                  </MDBCol>
                </MDBRow>
              ))}
            </div>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  )
}

export default SectionList