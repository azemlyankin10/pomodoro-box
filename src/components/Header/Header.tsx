import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { EIcons, Icon } from '../../utils/ui/Icon/Icon'
import './Header.css'

export const Header = () => (
  <div className="header">
    <Container>
      <Nav 
        defaultActiveKey="/" 
        as="div"
        className='justify-content-between align-items-center'
      >
        <Nav.Link 
          href="/" 
          className='d-flex align-items-center ps-0'
        >
          <Icon 
            name={EIcons.tomato} 
            size={40} 
            viewBox='0 0 40 40' 
            className='me-2'
          />
          <span className='fs-5 nav-color'>
            Pomodoro_box
          </span>
        </Nav.Link>
        <Nav.Link 
          href="/stats" 
          className='d-flex align-items-center pe-0'
        >
          <Icon 
            name={EIcons.stats} 
            size={16} 
            viewBox='0 0 16 16' 
            className='me-2'
          />
          <span className='fs-6 nav-color'>
            Статистика
          </span>
        </Nav.Link>
      </Nav>
    </Container>
  </div>
)

