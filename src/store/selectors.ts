import { selector } from 'recoil'
import { getWeek } from '../utils/js/getArrOfDays'
import { commonState, dayState, statsState, Task, tasksState } from './atoms'

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
    if(state.completedTasks < 4) return .1
    return 30
  }
})

export const getStatByDays = selector({
  key: 'getStat',
  get: ({get}) => {
    const state = get(statsState)

    const workTime = getWeek(state.workTime as []).map(el => (
      el.reduce((acc: number, n: any) => {
        if(n && n.total) {        
          return acc + n.total
        }
        return acc
      }, 0)
    ))

    const pauses = getWeek(state.pauses as []).map(el => {
      const ms = el.reduce((acc: number, n: any) => {
        if(n && n.timeMs) {        
          return acc + n.timeMs
        }
        return acc
      }, 0)

      return Math.round(ms > 0 ? ms / 60000 : 0) 
    })


    const stops = getWeek(state.stops as []).map(el => el[0] !== undefined ? el.length : 0)

    const pomodors = getWeek(state.pomodors as []).map(el => el[0] !== undefined ? el.length : 0)


    return { workTime, stops, pomodors, pauses }
  }
})


export const getCurrentDayState = selector({
  key: 'getCurrentDayState',
  get: ({get}) => {
    const days = ['Понедельник', 'Вторник', 'Среда', 'Черверг', 'Пятница', 'Суббота', 'Воскресенье']
    const day = get(dayState)
    const { workTime, stops, pomodors, pauses } = get(getStatByDays)

    return { 
      workTime: {
        time: workTime[day],
        day: days[day]
      },
      stops: stops[day],
      pomodors: pomodors[day],
      pauses: pauses[day]
    }
  }
})