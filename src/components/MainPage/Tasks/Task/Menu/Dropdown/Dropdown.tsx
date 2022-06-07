import React, { FC } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Icon, EIcons } from '../../../../../../utils/ui/Icon/Icon'
import './Dropdown.css'

interface DropdownProps {
  disableDecrement: boolean
  onIncrement: () => void
  onDecrement: () => void
  onEdit: () => void
  onDelete: () => void
}

export const Dropdown: FC<DropdownProps> = ({ disableDecrement, onIncrement, onDecrement, onEdit, onDelete }) => {
  const disableClass = disableDecrement ? 'dropdown-elem-disabled' : ''
  return (
    <div className='dropdown-container px-2 py-2'>
      <ListGroup as='ul' className='w-100'>

        <ListGroup.Item as='li' className='p-0 border-0 mb-2'>
          <button className='bg-transparent border-0 d-flex align-items-center' onClick={onIncrement}>
            <Icon name={EIcons.plus} size={17} viewBox='0 0 16 16' />
            <span className='fw-light fs-6 ms-1 text-grey'>Увеличить</span>
          </button>
        </ListGroup.Item>

        <ListGroup.Item as='li' className='p-0 border-0 mb-2'>
          <button disabled={disableDecrement} className={`bg-transparent border-0 d-flex align-items-center ${disableClass}`} onClick={onDecrement}>
            <Icon name={EIcons.minus} size={17} viewBox='0 0 16 16' />
            <span className='fw-light fs-6 ms-1 text-grey'>Уменьшить</span>
          </button>
        </ListGroup.Item>

        <ListGroup.Item as='li' className='p-0 border-0 mb-2'>
          <button className='bg-transparent border-0 d-flex align-items-center' onClick={onEdit}>
            <Icon name={EIcons.pen} size={17} viewBox='0 0 14 14' />
            <span className='fw-light fs-6 ms-1 text-grey'>Редактировать</span>
          </button>
        </ListGroup.Item>

        <ListGroup.Item as='li' className='p-0 border-0'>
          <button className='bg-transparent border-0 d-flex align-items-center' onClick={onDelete}>
            <Icon name={EIcons.trash} width='17' height='20' viewBox='0 0 12 14' />
            <span className='fw-light fs-6 ms-1 text-grey'>Удалить</span>
          </button>
        </ListGroup.Item>

      </ListGroup>
    </div>
  )
}