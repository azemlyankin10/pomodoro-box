import React, { useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { editTaskState, Task, tasksState } from '../../../../../store/atoms'
import { changePomodors } from '../../../../../utils/state/changePomodors'
import { Icon, EIcons } from '../../../../../utils/ui/Icon/Icon'
import { Dropdown } from './Dropdown/Dropdown'
import './Menu.css'

export const Menu = ({ id }: { id: string }) => {
  const [tasks, setTasks] = useRecoilState(tasksState)
  const editTask = useSetRecoilState(editTaskState)
  const [open, setOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState({} as Task) 
  const [disableDecrement, setDisableDecrement] = useState(false)

  useEffect(() => {
    const task = tasks.find(el => el.id === id) as Task
    if(task && task.pomodors <= 1 || task.done) {
      setDisableDecrement(true)
    } else {
      setDisableDecrement(false)
    }
    setCurrentTask(task)
  }, [tasks, open])

  const onIncrement = () => {
    if(currentTask) {
      setTasks(changePomodors('plus')(tasks)(currentTask as Task))
    }
  }

  const onDecrement = () => {
    if(currentTask && !currentTask.done) {
      setTasks(changePomodors('minuse')(tasks)(currentTask as Task))
    }
  }

  const onEdit = () => {
    editTask(currentTask)
  }

  const onDelete = () => {
    const newTasks = tasks.filter(el => el.id !== id)
    setTasks(newTasks)
  }

  return (
    <div className='ms-auto position-relative'>
      <button 
        className=" border-0 bg-transparent"
        onClick={() => { setOpen(!open) }}
      >
        <Icon name={EIcons.dropdown} width='26' height='6' viewBox='0 0 26 6' />
      </button>
      {open && (
        <Dropdown
          disableDecrement={disableDecrement}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </div>
  )
}