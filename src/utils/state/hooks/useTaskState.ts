import { useRecoilState } from 'recoil'
import { tasksState } from '../../../store/atoms'

export const useTaskState = () => {
  const [tasks, setTasks] = useRecoilState(tasksState)


  const changeTaskState = (id: string, state: object) => {
    const copyTasks = [...tasks]
    const index = copyTasks.findIndex(el => el.id === id)
    const newTask = { ...copyTasks[index], ...state }
    copyTasks.splice(index, 1, newTask)
    setTasks(copyTasks)
  }

  return [changeTaskState]
}