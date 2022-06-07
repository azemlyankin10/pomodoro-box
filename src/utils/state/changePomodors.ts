import { Task } from '../../store/atoms'

export const changePomodors = (oparation: 'plus' | 'minuse') => (state: Task[]) => (currentElem: Task) => {
  let newElem
  if (oparation === 'plus') {
    newElem = { ...currentElem, pomodors: currentElem.pomodors + 1 }
  } else if (oparation === 'minuse' && currentElem.pomodors > 0) {
    newElem = { ...currentElem, pomodors: currentElem.pomodors - 1 }
  }

  if(newElem && newElem.currentPomodor > newElem.pomodors) {
    newElem = { ...newElem, done: true }
  } else if (newElem && newElem.currentPomodor <= newElem.pomodors) {
    newElem = { ...newElem, done: false }
  }

  const { id } = currentElem
  const index = state.findIndex(el => el.id === id)
  const newTasks = [...state]

  if(newElem) {
    newTasks.splice(index, 1, newElem)
  }

  return newTasks
}