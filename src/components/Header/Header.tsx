import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
        <Link
          to='/'
          className='d-flex align-items-center ps-0 text-decoration-none'
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
        </Link>
        <Link
          to='/stats'
          className='d-flex align-items-center pe-0 text-decoration-none'
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
        </Link>
      </Nav>
    </Container>
  </div>
)

