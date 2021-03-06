import React, { useState, useEffect } from 'react'

import PersonType from '../../types/PersonType'

import { MDBModal, MDBModalHeader, MDBModalBody, MDBIcon, MDBBtn } from 'mdbreact'

import { FaPlus } from 'react-icons/fa'

import './styles.css'
import PersonService from '../../services/PersonService'

interface Props {
    type ?: string,
    person ?: PersonType,
    modifyChange: Function
}

const OperationsModal: React.FC<Props> = ({ type, person, modifyChange }) => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [modalActive, setModalActive] = useState(false)

    const isEmptyStates = () => {
        return !name.length || !email.length
    }

    useEffect(() => {
        if(type !== 'new' && person){
            setName(person?.name)
            setEmail(person?.email)
        }
    }, [person, type])

    const toggle = () => {
        setModalActive(!modalActive)
    }

    const handleForm = async (e: React.FormEvent) => {
        e.preventDefault()

        if (type === 'new'){
            const response = PersonService.create({
                name,
                email
            })

            if(response){
                modifyChange(await response)
            }

            setName('')
            setEmail('')

        }else if ( type === 'edit' && person ){
            const response = await PersonService.update({
                _id: person._id,
                name,
                email
            })

            if(response){
                modifyChange(await response)
            }

        }

        toggle()

    }

    return (
        <>   
            {type === 'new' ? (
                <MDBBtn className='btn-add-person' color='dark' onClick={toggle}>
                    <FaPlus className='icon-add-plus'/> Adicionar
                </MDBBtn>
            ) : (
                <MDBBtn className='btn-edit-person' color='purple' onClick={toggle}>
                    <MDBIcon icon='edit' className='icon-edit-link'/>
                </MDBBtn>
            )}
            
            <MDBModal className='modal-exclusion' isOpen={modalActive} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>{type === 'new' ? 'Nova pessoa' : 'Editando pessoa' }</MDBModalHeader>
                <form onSubmit={handleForm}>
                    <MDBModalBody>
                        
                        <input
                            className='form-control operations-control'
                            placeholder='Nome da pessoa'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <input
                            className='form-control operations-control'
                            type="email"
                            placeholder='Email da pessoa'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        
                    </MDBModalBody>
                    <div className='modal-footer-exclusion'>
                        {isEmptyStates() ? (
                            <MDBBtn className='confirm-button-exclusion' disabled color='green' type='submit'>Salvar</MDBBtn>
                        ) : (
                            <MDBBtn className='confirm-button-exclusion' color='green' type='submit'>Salvar</MDBBtn>
                        )}
                    </div>
                </form>
            </MDBModal>
        </>
    )

}

export default OperationsModal