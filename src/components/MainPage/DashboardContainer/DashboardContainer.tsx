import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { commonState } from '../../../store/atoms'
import { getCurrentTask, getTimeout } from '../../../store/selectors'
import { EIcons, Icon } from '../../../utils/ui/Icon/Icon'
import { Dashboard } from './Dashboard/Dashboard'
import useSound from 'use-sound'
import soundSuccess from '../../../utils/sound/success-sound-effect.mp3'
import soundTimeout from '../../../utils/sound/timoutover.mp3'
import { useTaskState } from '../../../utils/state/hooks/useTaskState'
import { currentDone } from '../../../utils/state/currentDone'
import { useStatsState } from '../../../utils/state/hooks/useStatsState'

export const DashboardContainer = () => {
  const [tick, setTick] = useState(false)
  const [stop, setStop] = useState(false)
  const [pause, setPause] = useState(false)
  const [state, setState] = useRecoilState(commonState)
  const timeout = useRecoilValue(getTimeout)
  const task = useRecoilValue(getCurrentTask)  
  const [playSuccess] = useSound(soundSuccess)
  const [playTimeoutOver] = useSound(soundTimeout)
  const [changeTaskState] = useTaskState()
  const { addStopStat, addWorkTimeStat, addPomodorStat, pauseStat } = useStatsState()
  if(!task) return <Empty />

  const onStart = () => {
    setState({ ...state, timerRunning: true, timeoutRunning: false })
    setTick(true)
    setStop(false)
    setPause(false)
  }

  const onStop = () => {
    setState({ ...state, timerRunning: false, timeoutRunning: false, timerOnPause: false })
    setTick(false)
    setStop(true)
    setPause(false)
    // add stats
    addStopStat()
  }

  const onPause = () => {
    setState({ ...state, timerOnPause: !pause })
    setPause(!pause)
    setTick(!tick)
    setStop(false)

    // add stats
    pauseStat()
  }

  const onDone = () => {
    const pomodors = task.curTask.currentPomodor
    changeTaskState(task.curTask.id, {pomodors, done: true})
    onStop()
  }

  const addPomodoro = () => {    
    changeTaskState(task.curTask.id, {pomodors: task.curTask.pomodors + 1})
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

    // add stats
    addWorkTimeStat(task.curTask.time)
  }  

  const onCompleteTimeout = () => {
    setState({ ...state, timerRunning: false, timeoutRunning: false })
    const currentPomodor = task.curTask.currentPomodor + 1
    const done = currentDone(currentPomodor, task.curTask.pomodors)
    changeTaskState(task.curTask.id, {currentPomodor, done})
    playTimeoutOver()

    // add stats
    addPomodorStat()
  }

  const { curTask: { value, currentPomodor, time }, index } = task
  return (
    <Dashboard
      taskName={value}
      currentPomodor={currentPomodor}
      index={index}
      time={.3}
      isStart={tick}
      isStop={stop}
      isPause={pause}
      onStart={onStart}
      onStop={onStop}
      onPause={onPause}
      onDone={onDone}
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