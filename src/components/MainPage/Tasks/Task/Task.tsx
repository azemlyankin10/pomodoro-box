import React, { FC, useEffect, useRef } from 'react'
import { FormControl, ListGroup, Stack } from 'react-bootstrap'
import { useTaskState } from '../../../../utils/state/hooks/useTaskState'
import { Menu } from './Menu/Menu'

interface TaskProps {
  value: string 
  pomodors: number
  id: string
  done: boolean
  edit: boolean
}

export const Task: FC<TaskProps> = ({ value, pomodors, id, done, edit }) => {
  const [changeTaskState] = useTaskState()
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {

    function move() {
      if (ref.current) {
        if (ref.current.value) {
          changeTaskState(id, { edit: false, value: ref.current.value })
        } else {
          ref.current.focus()
        }
      }
    }

    function inputFocusOut() {
      move()
    }

    function pressEnter(e: KeyboardEvent) {
      if(e.code === 'Enter') {
        move()
      }
    }

    if(ref.current) {
      ref.current.focus()
      ref.current.value = value
      ref.current.addEventListener('focusout', inputFocusOut)
      document.addEventListener('keydown', pressEnter)
    }

    return () => {
      if(ref.current) {
        ref.current.removeEventListener('focusout', inputFocusOut)
        document.removeEventListener('keydown', pressEnter)
      }
    }
  }, [edit])

  const classDone = done ? 'done' : ''
  return (
    <ListGroup.Item
      as='li'
      className={`rounded-0 border-end-0 border-start-0 px-0 py-3 ${classDone} task`}
      key={id}
    >
      <Stack direction="horizontal" gap={3}>
        <span className="pomodors fw-light border rounded-circle px-2">{pomodors}</span>
        {
          !edit 
            ? <div className="value fw-light">{value}</div>
            : <FormControl ref={ref} />
        }
        <Menu id={id} />
      </Stack>
    </ListGroup.Item> 
  )
}

