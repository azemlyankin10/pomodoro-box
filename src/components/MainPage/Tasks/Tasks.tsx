import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { tasksState } from '../../../store/atoms'
import { Task } from './Task/Task'
import './Tasks.css'


export const Tasks = () => {
  const tasks = useRecoilValue(tasksState)
  const fullTime = tasks.reduce((a, b) => a + (b.time || 0), 0)

  const sortTasks = [...tasks].sort((a) => {
    if(a?.done === true) return 1
    if(a?.done === false) return -1
    return 0
  })
  
  return (
    <div className="tasks">
      <ListGroup as='ul' className='mb-3'>
        {sortTasks.map(({ value, pomodors, id, done }) => (
          <Task 
            key={id}
            value={value} 
            pomodors={pomodors} 
            id={id} 
            done={done}            
          />
        ))}
      </ListGroup>
      {fullTime > 0 && (
        <span className='text-secondary fs-6'>
          {`${fullTime} мин`}
        </span>
      )}
    </div>
  )
}

