import { atom } from 'recoil'
import { SelectValue } from '../components/StatsPage/StatHeader/Select/Select'
import { localStorageEffect, sessionStorageEffect } from './effects'


type Settings = {
  pomodoroTime: number
  shortBreak: number
  longBreak: number
  countBreak: number
  notification: boolean
  darkMode: boolean
}

export const settingsState = atom<Settings>({
  key: 'settings',
  default: {
    pomodoroTime: 25,
    shortBreak: 3,
    longBreak: 30,
    countBreak: 4,
    notification: true,
    darkMode: false
  },
  effects: [
    localStorageEffect('settings'),
  ]
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


type TimerControl = {
  isPlay: boolean
  isTaskRun: boolean
  isTimeoutRun: boolean
  isPause: boolean
  isStop: boolean
  leftTime: number
  completedTimes: number
}

export const timerControlState = atom<TimerControl>({
  key: 'timerControl',
  default: {
    isPlay: false,
    isTaskRun: false,
    isTimeoutRun: false,
    isPause: false,
    isStop: false,
    leftTime: 0,
    completedTimes: 0
  },
  effects: [
    sessionStorageEffect('timerControl'),
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

export const showToastsState = atom({
  key: 'showToasts',
  default: {
    delete: false,
    success: false
  }
})