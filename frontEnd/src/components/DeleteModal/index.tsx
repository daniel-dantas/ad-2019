import React, { useState } from 'react';
import { MDBIcon, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn } from 'mdbreact';

import './styles.css'
import PersonType from '../../types/PersonType';
import PersonService from '../../services/PersonService';

interface Props {
    person: PersonType,
    modifyChange: Function
}

const DeleteModal: React.FC<Props> = ({ person, modifyChange }) => {
  const [modalActive, setModalActive] = useState(false)

  const toggle = () => {
      setModalActive(!modalActive)
  }

  const confirmAction = async () => {
      
    if(person._id){
        const response = await PersonService.delete(person._id)

        if(response){
            modifyChange(person._id)
        }


    }

    toggle()

  }

  return (
      <>
          <MDBBtn className='btn-modal-exclusion' color='orange' onClick={toggle}><MDBIcon icon='trash-alt' className='modal-icon-trash'/></MDBBtn>
          <MDBModal className='modal-exclusion' isOpen={modalActive} toggle={toggle}>
              <MDBModalHeader toggle={toggle}>Exclusão</MDBModalHeader>
              <MDBModalBody>
                  Deseja realmente excluir essa pessoa?
              </MDBModalBody>
              <div className='modal-footer-exclusion'>
                  <MDBBtn className='cancel-button-exclusion' color='red' onClick={toggle}>Cancelar</MDBBtn>
                  <MDBBtn className='confirm-button-exclusion' color='green' onClick={confirmAction}>Confirmar</MDBBtn>
              </div>
          </MDBModal>
      </>
  )

}

export default DeleteModal;