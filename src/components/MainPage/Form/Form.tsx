import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { tasksState } from '../../../store/atoms'
import { genarateRandomString } from '../../../utils/js/generatyid'
import './Form.css'

export const FormComponent = () => {
  const [tasks, setTasks] = useRecoilState(tasksState)
  const [disableBtn, setDisableBtn] = useState(false)
  const [value, setValue] = useState('')

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
        pomodors: 1, 
        currentPomodor: 1, 
        done: false, 
        id: genarateRandomString(),
        edit: false,
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
