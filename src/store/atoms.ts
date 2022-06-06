import { atom } from 'recoil'
import { localStorageEffect } from './effects'

export const inputTextState = atom({
  key: 'inputText',
  default: '', 
  effects: [
    localStorageEffect('inputText'),
  ]
})

type task = {
  value: string
  time: number
  priority: number
}

export const tasksState = atom({
  key: 'tasks',
  default: [] as task[],
  effects: [
    localStorageEffect('tasks'),
  ]
})

