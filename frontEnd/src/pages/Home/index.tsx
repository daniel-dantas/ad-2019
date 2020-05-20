import React, { useState, useEffect } from 'react'

import PersonType from '../../types/PersonType'


import { MDBContainer, MDBRow, MDBBtn } from 'mdbreact'
import SectionList from '../../components/SectionList'

import OperationModal from '../../components/OperationsModal'

import './styles.css'
import PersonService from '../../services/PersonService'
import { useHistory } from 'react-router-dom'
import PersonDrawService from '../../services/PersonDrawService'

const Home: React.FC = () => {

  const [people, setPeople] = useState<PersonType[]>([])
  const [change, setChange] = useState<PersonType>({} as PersonType)

  const history = useHistory()

  useEffect(() => {
    PersonService.read().then(response => {
      setPeople(response.people)
    })
  }, [change])

  const actionDrawButton = async ( ) => {
    
    const response = await PersonDrawService.draw()

    if(response){
      history.push('/sucess')
    }

  }

  const verify = () => {
    return (people.length > 3) && !(people.length%2)
  }

  return (
    <>
      <MDBContainer>
        <SectionList people={people} modifyChange={setChange} />
        <MDBRow center>
          {verify() ? (
           <MDBBtn color='blue' onClick={actionDrawButton} className='draw-button-home'>Realizar Sorteio</MDBBtn>
          ) : (
            <MDBBtn color='blue' disabled onClick={actionDrawButton} className='draw-button-home'>Realizar Sorteio</MDBBtn>
          )}
        </MDBRow>
      </MDBContainer>
      <OperationModal type='new' modifyChange={setChange}/>
    </>
  )
}

export default Home