import React, { FC } from 'react'
import { ListGroup, Stack } from 'react-bootstrap'
import { Menu } from './Menu/Menu'
import './Task.css'

interface TaskProps {
  value: string 
  pomodors: number
  id: string
  done: boolean
}

export const Task: FC<TaskProps> = ({ value, pomodors, id, done }) => {
  const classDone = done ? 'done' : ''

  return (
    <ListGroup.Item
      as='li'
      className={`rounded-0 border-end-0 border-start-0 px-0 py-3 ${classDone}`}
      key={id}
    >
      <Stack direction="horizontal" gap={3}>
        <span className="pomodors fw-light border rounded-circle px-2">{pomodors}</span>
        <div className="value fw-light">{value}</div>
        <Menu id={id} />
      </Stack>
    </ListGroup.Item> 
  )
}

