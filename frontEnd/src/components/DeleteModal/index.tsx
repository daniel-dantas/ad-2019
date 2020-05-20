import React, { useState } from 'react';
import { MDBIcon, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact';

import './styles.css'

interface Props {
    actionConfirm ?: Function
}

const DeleteModal: React.FC<Props> = ({ actionConfirm }) => {
  const [modalActive, setModalActive] = useState(false)

  const toggle = () => {
      setModalActive(!modalActive)
  }

  const confirmAction = async () => {
      if(actionConfirm){
        actionConfirm()
      }
  }

  return (
      <>
          <button className='btn-modal-exclusion orange' onClick={toggle}><MDBIcon icon='trash-alt' className='modal-icon-trash'/></button>
          <MDBModal className='modal-exclusion' isOpen={modalActive} toggle={toggle}>
              <MDBModalHeader toggle={toggle}>Exclusão</MDBModalHeader>
              <MDBModalBody>
                  Deseja realmente excluir essa pessoa?
              </MDBModalBody>
              <div className='modal-footer-exclusion'>
                  <button className='cancel-button-exclusion' onClick={toggle}>Cancelar</button>
                  <button className='confirm-button-exclusion' onClick={confirmAction}>Confirmar</button>
              </div>
          </MDBModal>
      </>
  )

}

export default DeleteModal;