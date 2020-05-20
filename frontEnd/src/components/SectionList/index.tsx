import React, { useState, useEffect } from 'react'

import PersonType from '../../types/PersonType'

import './styles.css'
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBIcon } from 'mdbreact'

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
        <MDBCol md='10'>
          <input
            className='form-control search-section-list'
            placeholder='Procurar pessoa...'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <MDBCard border="gray" className="card-content-sectionList">
          
            
          <MDBCardBody className='body-card-section'>
            
            {!people.length || !filter.length ? (
                <div className='empty-people-section'>
                  {!people.length ? (
                    <>
                      <MDBIcon icon='frown' className='icon-empty'/>
                      <span>Você ainda não possui ninguém cadastrado!</span>
                    </>
                  ) : (
                    <>
                      <MDBIcon icon='frown' className='icon-empty' />
                      <span>Pessoa não encontrada!</span> 
                    </>
                  )}
                </div>
            ) : (
              <div className="card-item-container">
                {filter.map(person => (
                  <MDBRow key={person?._id} center className='section-person-list'>
                    <MDBCol md='4'>{person.name}</MDBCol>
                    <MDBCol md='4'>{person.email}</MDBCol>
                    <MDBCol md='4'>
                      <OperationsModal type='edit' person={person}/>
                      <DeleteModal person={person}/>
                    </MDBCol>
                  </MDBRow>
                ))}
              </div>
            )}
            
          </MDBCardBody>
          </MDBCard>
          <p className='warning-text'>Obs.: Um amigo secreto só pode ser realizado se houver mais de 3 pessoas e um numero par de pessoas.</p>
        </MDBCol>
      </MDBRow>
    </>
  )
}

export default SectionList