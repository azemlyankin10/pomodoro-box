import React from 'react'
import { Icon, EIcons } from '../../../../utils/ui/Icon/Icon'
import './Menu.css'

export const Menu = () => (
  <button 
    className="ms-auto border-0 bg-transparent"
  >
    <Icon name={EIcons.dropdown} width='26' height='6' viewBox='0 0 26 6' />
  </button>
)
