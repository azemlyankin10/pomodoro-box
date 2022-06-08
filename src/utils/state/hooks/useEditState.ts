import { useRecoilState } from 'recoil'
import { tasksState } from '../../../store/atoms'

export const useEditState = () => {
  const [tasks, setTasks] = useRecoilState(tasksState)


  const changeEditState = (id: string, edit: boolean, value?: string) => {
    const copyTasks = [...tasks]
    const index = copyTasks.findIndex(el => el.id === id)
    const newTask = !value ? { ...copyTasks[index], edit } : { ...copyTasks[index], value, edit }
    copyTasks.splice(index, 1, newTask)
    setTasks(copyTasks)
  }

  return [changeEditState]
}