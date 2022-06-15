import React, { FC } from 'react'
import { Button, CloseButton, Modal } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { useSound } from 'use-sound'
import './DeleteModal.css'
import trashSound from '../../sound/trash.mp3'
import { settingsState } from '../../../store/atoms'

interface DeleteModal {
  show: boolean
  onHide: () => void
  onDelete: () => void
}

export const DeleteModal:FC<DeleteModal> = ({ show, onHide, onDelete}) => {
  const { notification } = useRecoilValue(settingsState)
  const [deleteSound] = useSound(trashSound)
  

  return (
    <Modal
      show={show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='deleteModal'
    >
      <Modal.Header className='border-0 pb-1 pt-4'>
        <CloseButton 
          className='position-absolute' 
          style={{ top: 15, right: 15 }} 
        />
  
        <Modal.Title 
          id="contained-modal-title-vcenter" 
          className='fs-5 mx-auto'
        >
          Удалить задачу?
        </Modal.Title>
  
      </Modal.Header>
  
      <Modal.Footer className='border-0 flex-column'>
  
        <Button 
          className='btn-danger rounded-0 px-4' 
          onClick={() => {
            notification && deleteSound()
            onDelete()
          }}
        >
          Удалить
        </Button>
  
        <Button 
          variant="light" 
          className='bg-transparent border-0 p-0 text-decoration-underline text-grey' 
          onClick={onHide}
        >
          Отмена
        </Button>
      </Modal.Footer>
  
    </Modal>
  )
}



