import { atom } from 'recoil'
import { SelectValue } from '../components/StatsPage/StatHeader/Select/Select'
import { localStorageEffect, sessionStorageEffect } from './effects'


type Settings = {
  pomodoroTime: number
  shortBreak: number
  longBreak: number
  countBreak: number
  notification: boolean
}

export const settingsState = atom<Settings>({
  key: 'settings',
  default: {
    pomodoroTime: 25,
    shortBreak: 5,
    longBreak: 30,
    countBreak: 4,
    notification: true
  },
})

export type Task = {
  id: string
  value: string
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


export type CommotState = {
  completedTasks: number
  timerRunning: boolean
  timeoutRunning: boolean
  timerOnPause: boolean
  successDeleteTaskToast: boolean
  leftTime: number
}

export const commonState = atom<CommotState>({
  key: 'commonState',
  default: {
    completedTasks: 0,
    timerRunning: false,
    timeoutRunning: false,
    timerOnPause: false,
    successDeleteTaskToast: false,
    leftTime: 0
  },
  effects: [
    sessionStorageEffect('commonState'),
  ]
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
  default: new Date().getDay() - 1 === -1 ? 6 : new Date().getDay() - 1
})

export const rangeWeekState = atom({
  key: 'rangeWeek',
  default: 'week' as SelectValue
})