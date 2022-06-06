import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { inputTextState, tasksState } from '../../../store/atoms'
import './Form.css'

export const FormComponent = () => {
  const [value, setValue] = useRecoilState(inputTextState)
  const [tasks, setTasks] = useRecoilState(tasksState)
  const [disableBtn, setDisableBtn] = useState(false)

  useEffect(() => {
    if(!value) setDisableBtn(true)
    else setDisableBtn(false)
  }, [value])

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)    
  }

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const newTask = tasks.concat([{ value, time: 25, priority: 1 }])
    setTasks(newTask)
    setValue('')
  }

  return (
    <Form onSubmit={formSubmit}>

      <Form.Group className="mb-3">
        <Form.Control 
          placeholder="Название задачи" 
          className='form-input'
          value={value}
          onChange={inputHandler}
        />
      </Form.Group>

      <Button 
        type="submit"
        variant="success"
        className='form-btn'
        disabled={disableBtn}
      >
        Добавить
      </Button>

    </Form>
  )
}