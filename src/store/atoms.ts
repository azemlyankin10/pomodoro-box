import { atom } from 'recoil'
import { localStorageEffect } from './effects'

export const inputTextState = atom({
  key: 'inputText',
  default: '', 
  effects: [
    localStorageEffect('inputText'),
  ]
})

export type Task = {
  id: string
  value: string
  time: number
  pomodors: number
  currentPomodor: number
  done: boolean
  edit: boolean
}

export const tasksState = atom<Task[]>({
  key: 'tasks',
  default: [],
  effects: [
    localStorageEffect('tasks'),
  ]
})

export const editTaskState = atom({
  key: 'editTask',
  default: {}
})


export type CommotState = {
  completedTasks: number
  timerRunning: boolean
  timeoutRunning: boolean
  timerOnPause: boolean
  successDeleteTaskToast: boolean
}

export const commonState = atom<CommotState>({
  key: 'commonState',
  default: {
    completedTasks: 0,
    timerRunning: false,
    timeoutRunning: false,
    timerOnPause: false,
    successDeleteTaskToast: false
  }
})


export const statsState = atom({
  key: 'stats',
  default: {
    workTime: [] as { total: number, date: string }[],
    stops: [] as string[],
    pomodors: [] as string[],
    pauses: [] as { timeMs: number, date: string }[]
  },
  effects: [
    localStorageEffect('stats'),
  ]
})

export const dayState = atom({
  key: 'day',
  default: new Date().getDay() - 1
})