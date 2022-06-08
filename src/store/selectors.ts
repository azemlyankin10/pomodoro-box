import { selector } from 'recoil'
import { commonState, Task, tasksState } from './atoms'

export const getCurrentTask = selector({
  key: 'getCurrentTasks',
  get: ({get}) => {
    const tasks = get(tasksState)
    const curTask = tasks.find(el => el.done === false) as Task
    const index = tasks.indexOf(curTask) + 1
    
    if(!curTask) return null
    return { curTask, index }
  }
})

export const getTimeout = selector({
  key: 'getTimeout',
  get: ({get}) => {
    const state = get(commonState)    
    if(state.completedTasks < 4) return 15
    return 30
  }
})