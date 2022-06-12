import { selector } from 'recoil'
import { getWeek } from '../utils/js/getArrOfDays'
import { commonState, dayState, rangeWeekState, settingsState, statsState, Task, tasksState } from './atoms'

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

export const getSettingsData = selector({
  key: 'getSettings',
  get: ({get}) => {
    const state = get(settingsState)

    return { 
      pomodoroTime: state.pomodoroTime,
      shortBreak: state.shortBreak,
      longBreak: state.longBreak,
      countBreak: state.countBreak,
      notification: state.notification
    }
  }
})


export const getTimeout = selector({
  key: 'getTimeout',
  get: ({get}) => {
    const state = get(commonState)
    const settings = get(getSettingsData)    
    if(state.completedTasks < settings.countBreak) return settings.shortBreak
    return settings.longBreak
  }
})

export const getStatByDays = selector({
  key: 'getStat',
  get: ({get}) => {
    const state = get(statsState)
    const range = get(rangeWeekState)

    const workTime = getWeek(state.workTime as [], range).map(el => (
      el.reduce((acc, n) => {
        if(n && n.total) {        
          return acc + n.total
        }
        return acc
      }, 0)
    ))
    

    const pauses = getWeek(state.pauses as [], range).map(el => {
      const ms = el.reduce((acc, n) => {
        if(n && n.timeMs) {        
          return acc + n.timeMs
        }
        return acc
      }, 0)

      return Math.round(ms > 0 ? ms / 60000 : 0) 
    })    
    
    
    const stops = getWeek(state.stops as [], range).map(a => a.filter(b => b !== undefined).length)
    
    const pomodors = getWeek(state.pomodors as [], range).map(a => a.filter(b => b !== undefined).length)


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