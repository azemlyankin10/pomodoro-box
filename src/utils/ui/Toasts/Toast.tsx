import React from 'react'
import { Toast } from 'react-bootstrap'
import { createPortal } from 'react-dom'
import { Icon, EIcons } from '../Icon/Icon'


export const ToastComponent = () => {

  const node = document.querySelector('#modal-root')
  if(!node) return null
  return createPortal((
    <Toast className="d-inline-block m-3 position-fixed bottom-0 end-0">
      <Toast.Header closeButton={false}>
        <Icon name={EIcons.tomato} size={15} viewBox='0 0 40 40' />
        <strong className="me-auto ms-2">Pomodoro_box</strong>
      </Toast.Header>
      <Toast.Body>
        Удаление прошло успешно
      </Toast.Body>
    </Toast>
  ), node)
}