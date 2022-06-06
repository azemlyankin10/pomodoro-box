import React from 'react'
import { ListGroup, Stack } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { tasksState } from '../../../store/atoms'
import { genarateRandomString } from '../../../utils/js/generatyid'
import { Menu } from './Menu/Menu'
import './Tasks.css'


export const Tasks = () => {
  const tasks = useRecoilValue(tasksState)
  console.log(tasks)
  const fullTime = tasks.reduce((a, b) => a + (b.time || 0), 0)
  
  return (
    <div className="tasks">
      <ListGroup as='ul' className='mb-3'>
        {tasks.map(({ value, priority }) => (
          <ListGroup.Item
          as='li'
          className='rounded-0 border-end-0 border-start-0 px-0 py-3'
          key={genarateRandomString()}
        >
          <Stack direction="horizontal" gap={3}>
    
            <span className="fw-light border rounded-circle px-2">{priority}</span>
            <div className="fw-light">{value}</div>
            <Menu />
    
          </Stack>
        </ListGroup.Item> 
        ))}
      </ListGroup>
      <span className='text-secondary fs-6'>
        {`${fullTime} мин`}
      </span>
    </div>
  )
}

