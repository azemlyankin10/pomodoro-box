import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { tasksState } from '../../../store/atoms'
import { humanTime } from '../../../utils/js/humanTime'
import { Task } from './Task/Task'
import './Tasks.css'


export const Tasks = () => {
  const tasks = useRecoilValue(tasksState)
  const fullTime = tasks.reduce((a, b) => {
    const time = b.time * b.pomodors
    return a + time
  }, 0)
  

  const sortTasks = [...tasks].sort((a) => {
    if(a?.done === true) return 1
    if(a?.done === false) return -1
    return 0
  })
  
  return (
    <div className="tasks">
      <ListGroup as='ul' className='mb-3'>
        {sortTasks.map(({ value, pomodors, id, done, edit }) => (
          <Task 
            key={id}
            value={value} 
            pomodors={pomodors} 
            id={id} 
            done={done}
            edit={edit}  
          />
        ))}
      </ListGroup>
      {fullTime > 0 && (
        <span className='text-secondary fs-6'>
          {humanTime(fullTime)}
        </span>
      )}
    </div>
  )
}

