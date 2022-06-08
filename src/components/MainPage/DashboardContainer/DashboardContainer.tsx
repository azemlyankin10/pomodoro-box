import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { commonState, tasksState } from '../../../store/atoms'
import { getCurrentTask, getTimeout } from '../../../store/selectors'
import { changeCurPomodor } from '../../../utils/state/changeCurPomodor'
import { changePomodors } from '../../../utils/state/changePomodors'
import { EIcons, Icon } from '../../../utils/ui/Icon/Icon'
import { Dashboard } from './Dashboard/Dashboard'
import useSound from 'use-sound'
import soundSuccess from '../../../utils/sound/success-sound-effect.mp3'
import soundTimeout from '../../../utils/sound/timoutover.mp3'

export const DashboardContainer = () => {
  const [tick, setTick] = useState(false)
  const [stop, setStop] = useState(false)
  const [tasks, setTasks] = useRecoilState(tasksState)
  const [state, setState] = useRecoilState(commonState)
  const timeout = useRecoilValue(getTimeout)
  const task = useRecoilValue(getCurrentTask)  
  const [playSuccess] = useSound(soundSuccess)
  const [playTimeoutOver] = useSound(soundTimeout)
  if(!task) return <Empty />

  const onStart = () => {
    setState({ ...state, timerRunning: true, timeoutRunning: false })
    setTick(true)
    setStop(false)
  }

  const onStop = () => {
    setState({ ...state, timerRunning: false, timeoutRunning: false })
    setTick(false)
    setStop(true)
  }

  const addPomodoro = () => {    
    setTasks(changePomodors('plus')(tasks)(task.curTask))
  }

  const onComplete = () => {
    const completedTasks = state.completedTasks >= 4
      ? 0
      : state.completedTasks + 1 
    setState({ 
      ...state, 
      timerRunning: false, 
      timeoutRunning: true, 
      completedTasks
    })
    setTick(false)
    setStop(true)
    playSuccess()
  }  

  const onCompleteTimeout = () => {
    setState({ ...state, timerRunning: false, timeoutRunning: false })
    setTasks(changeCurPomodor(tasks)(task.curTask))
    playTimeoutOver()
  }

  const { curTask: { value, currentPomodor, time }, index } = task
  return (
    <Dashboard
      taskName={value}
      currentPomodor={currentPomodor}
      index={index}
      time={time}
      isStart={tick}
      isStop={stop}
      onStart={onStart}
      onStop={onStop}
      addPomodoro={addPomodoro}
      timerComplete={onComplete}
      timeout={state.timeoutRunning} 
      timeoutTime={timeout} 
      isTimeoutStart={state.timeoutRunning} 
      timerTimeoutComplete={onCompleteTimeout}
    />
  )  
}


function Empty() {
  return (
    <div className='px-5 py-5 bg-grey-1'>
      <p className='text-center'>
        <Icon name={EIcons.tomato} size={60} viewBox='0 0 40 40' />
        <span className='d-block mt-3 fs-2'>Добавьте задачу!</span>
      </p>
    </div>
  )
}