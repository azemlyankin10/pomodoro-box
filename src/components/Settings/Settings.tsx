import React, { useState } from 'react'
import { Button, Form, Offcanvas } from 'react-bootstrap'
import { EIcons, Icon } from '../../utils/ui/Icon/Icon'
import { CountLBreaksRange } from './CountLBreaksRange/CountLBreaksRange'
import { DarkModeCheck } from './DarkModeCheck/DarkModeCheck'
import { LongBreakRange } from './LongBreakRange/LongBreackRange'
import { NotificationCheck } from './notificationCheck/notificationCheck'
import './Settings.css'
import { ShortBreakRange } from './ShortBreakRange/ShortBreakRange'
import { TaskTimeRange } from './TaskTimeRange/TaskTimeRange'


const Settings = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button 
        variant="light" 
        onClick={handleShow}
        className='position-fixed bottom-0 end-0 m-3 m-lg-5 bg-transparent border-0'
      >
        <Icon name={EIcons.settings} size={40} viewBox='0 0 512 512' />
      </Button>
  
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Настройки</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>

            <TaskTimeRange />

            <ShortBreakRange />

            <LongBreakRange />

            <CountLBreaksRange />

            <NotificationCheck />

            <DarkModeCheck />

            <Button 
              variant='secondary' 
              className='d-flex align-items-center'
              onClick={() => { window.location.reload() }}
            >
              <Icon name={EIcons.refresh} size={16} viewBox='0 0 80 80' className='me-2'/>
              Обновить настройки
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Settings


