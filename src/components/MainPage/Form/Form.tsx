import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { editTaskState, inputTextState, Task, tasksState } from '../../../store/atoms'
import { genarateRandomString } from '../../../utils/js/generatyid'
import './Form.css'

export const FormComponent = () => {
  const [value, setValue] = useRecoilState(inputTextState)
  const [tasks, setTasks] = useRecoilState(tasksState)
  // const [editValue, setEditValue] = useRecoilState(editTaskState)
  const [disableBtn, setDisableBtn] = useState(false)

  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(!value) setDisableBtn(true)
    else setDisableBtn(false)
  }, [value])

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)    
  }

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setTasks(tasks.concat([
      { 
        value, 
        time: 25, 
        pomodors: 1, 
        currentPomodor: 1, 
        done: false, 
        id: genarateRandomString() 
      }
    ]))
    setValue('')
  }

  return (
    <Form onSubmit={formSubmit} className='mb-4'>

      <Form.Group className="mb-3">
        <Form.Control 
          placeholder="Название задачи" 
          className='form-input'
          value={value}
          onChange={inputHandler}
          ref={ref}
        />
      </Form.Group>

      <Button 
        type="submit"
        variant="success"
        className='btn-green'
        disabled={disableBtn}
        style={{ width: 173 }}
      >
        Добавить
      </Button>

    </Form>
  )
}



// let newElem
// if (oparation === 'plus') {
//   newElem = { ...currentElem, pomodors: currentElem.pomodors + 1 }
// } else if (oparation === 'minuse' && currentElem.pomodors > 0) {
//   newElem = { ...currentElem, pomodors: currentElem.pomodors - 1 }
// }

// if(newElem && newElem.currentPomodor > newElem.pomodors) {
//   newElem = { ...newElem, done: true }
// } else if (newElem && newElem.currentPomodor <= newElem.pomodors) {
//   newElem = { ...newElem, done: false }
// }

// const { id } = currentElem
// const index = state.findIndex(el => el.id === id)
// const newTasks = [...state]

// if(newElem) {
//   newTasks.splice(index, 1, newElem)
// }

// return newTasks