import React, { useState } from 'react';
import { MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from 'mdbreact';

import { FaPlus } from 'react-icons/fa'

import './styles.css'

interface Props {
    type ?: string 
}

const OperationsModal: React.FC<Props> = ({ type }) => {
  const [modalActive, setModalActive] = useState(false)

  const toggle = () => {
      setModalActive(!modalActive)
  }

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault()

  }

  return (
      <>   
        {type === 'new' ? (
            <button className='btn-add-person red' onClick={toggle}>
                <FaPlus className='icon-add-plus'/> Adicionar
            </button>
        ) : (
            <button className='btn-edit-person purple' onClick={toggle}>
                <MDBIcon icon='edit' className='icon-edit-link'/>
            </button>
        )}
          
          <MDBModal className='modal-exclusion' isOpen={modalActive} toggle={toggle}>
            <MDBModalHeader toggle={toggle}>{type === 'new' ? 'Nova pessoa' : 'Edidanto pessoa' }</MDBModalHeader>
              <form onSubmit={handleForm}>
                <MDBModalBody>
                    
                    <input
                        className='form-control operations-control'
                        placeholder='Nome da pessoa'
                    />

                    <input
                        className='form-control operations-control'
                        type="email"
                        placeholder='Email da pessoa'
                    />
                    
                </MDBModalBody>
                <div className='modal-footer-exclusion'>
                    <button className='cancel-button-exclusion' onClick={toggle}>Cancelar</button>
                    <button className='confirm-button-exclusion' type='submit'>Salvar</button>
                </div>
              </form>
          </MDBModal>
      </>
  )

}

export default OperationsModal;