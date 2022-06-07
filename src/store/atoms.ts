import { atom } from 'recoil'
import { localStorageEffect, sessionStorageEffect } from './effects'

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
}

export const commonState = atom<CommotState>({
  key: 'commonState',
  default: {
    completedTasks: 0,
    timerRunning: false,
    timeoutRunning: false
  },
  effects: [
    sessionStorageEffect('commonState'),
  ]
})