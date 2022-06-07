import { Task } from '../../store/atoms'

export const changeCurPomodor = (state: Task[]) => (currentElem: Task) => {
  const currentPomodor = currentElem.currentPomodor + 1
  const done = currentPomodor > currentElem.pomodors ? true : false

  const newElem = { ...currentElem, currentPomodor, done }

  const { id } = currentElem
  const index = state.findIndex(el => el.id === id)
  const newTasks = [...state]

  if(newElem) {
    newTasks.splice(index, 1, newElem)
  }

  return newTasks
}