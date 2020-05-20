import React, { useState } from 'react';
import { MDBIcon, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn } from 'mdbreact';

import './styles.css'
import PersonType from '../../types/PersonType';

interface Props {
    person: PersonType
}

const DeleteModal: React.FC<Props> = ({ person }) => {
  const [modalActive, setModalActive] = useState(false)

  const toggle = () => {
      setModalActive(!modalActive)
  }

  const confirmAction = async () => {
      
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