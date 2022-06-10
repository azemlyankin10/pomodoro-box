import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { commonState, Task, tasksState } from '../../../../../store/atoms'
import { currentDone } from '../../../../../utils/state/currentDone'
import { useTaskState } from '../../../../../utils/state/hooks/useTaskState'
import { Icon, EIcons } from '../../../../../utils/ui/Icon/Icon'
import { DeleteModal } from '../../../../../utils/ui/Modals/DeleteModal'
import './Menu.css'

export const Menu = ({ id }: { id: string }) => {
  const [tasks, setTasks] = useRecoilState(tasksState)
  const [_commotState, createToast] = useRecoilState(commonState)
  const [currentTask, setCurrentTask] = useState({} as Task) 
  const [disableDecrement, setDisableDecrement] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [changeTaskState] = useTaskState()


  useEffect(() => {
    const task = tasks.find(el => el.id === id) as Task
    if(task && task.pomodors <= 1 || task.done) {
      setDisableDecrement(true)
    } else {
      setDisableDecrement(false)
    }
    setCurrentTask(task)
  }, [tasks])

  const onIncrement = () => {
    if(currentTask) {
      const pomodors = currentTask.pomodors + 1
      const done = currentDone(currentTask.currentPomodor, pomodors)
      changeTaskState(id, {pomodors, done})
    }
  }

  const onDecrement = () => {
    if(currentTask && !currentTask.done) {
      const pomodors = currentTask.pomodors - 1
      const done = currentDone(currentTask.currentPomodor, pomodors)
      changeTaskState(id, {pomodors, done})
    }
  }

  const onEdit = () => {
    changeTaskState(id, {edit: true})
  }

  const onDelete = () => {
    setIsModal(!isModal)
  }

  const disableClass = disableDecrement ? 'dropdown-elem-disabled' : ''

  return (
    <Dropdown className="ms-auto d-inline mx-2 menu" autoClose="outside">
      <Dropdown.Toggle id="dropdown-autoclose-outside" variant="secondary" className='menu__btn'>
        <Icon name={EIcons.dropdown} width='26' height='6' viewBox='0 0 26 6' />
      </Dropdown.Toggle>

      <Dropdown.Menu as='ul' className='menu__dropdown'>
        <Dropdown.Item as='li' className='p-0'>
          <button className='bg-transparent border-0 d-flex align-items-center px-3 py-1 menu__elem-btn' onClick={onIncrement}>
            <Icon name={EIcons.plus} size={17} viewBox='0 0 16 16' />
            <span className='fw-light fs-6 ms-1 text-grey'>Увеличить</span>
          </button>
        </Dropdown.Item>

        <Dropdown.Item as='li' className='p-0'>
           <button disabled={disableDecrement} className={`bg-transparent border-0 d-flex align-items-center px-3 py-1 menu__elem-btn ${disableClass}`} onClick={onDecrement}>
            <Icon name={EIcons.minus} size={17} viewBox='0 0 16 16' />
            <span className='fw-light fs-6 ms-1 text-grey'>Уменьшить</span>
          </button>
        </Dropdown.Item>

        <Dropdown.Item as='li' className='p-0'>
          <button className='bg-transparent border-0 d-flex align-items-center px-3 py-1 menu__elem-btn' onClick={onEdit}>
            <Icon name={EIcons.pen} size={17} viewBox='0 0 14 14' />
            <span className='fw-light fs-6 ms-1 text-grey'>Редактировать</span>
          </button>
        </Dropdown.Item>

        <Dropdown.Item as='li' className='p-0'>
          <button className='bg-transparent border-0 d-flex align-items-center px-3 py-1 menu__elem-btn' onClick={onDelete}>
            <Icon name={EIcons.trash} width='17' height='20' viewBox='0 0 12 14' />
            <span className='fw-light fs-6 ms-1 text-grey'>Удалить</span>
            <DeleteModal
              show={isModal}
              onHide={() => setIsModal(false)}
              onDelete={() => { 
                setTasks(tasks.filter(el => el.id !== id)) 
                createToast({ ..._commotState, successDeleteTaskToast: true })
              }}
            />
          </button>
        </Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>
  )
}

