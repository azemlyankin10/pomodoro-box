import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { commonState, tasksState } from '../../../store/atoms'
import { getCurrentTask, getTimeout } from '../../../store/selectors'
import { changeCurPomodor } from '../../../utils/state/changeCurPomodor'
import { changePomodors } from '../../../utils/state/changePomodors'
import { EIcons, Icon } from '../../../utils/ui/Icon/Icon'
import { Dashboard } from './Dashboard/Dashboard'

export const DashboardContainer = () => {
  const [tick, setTick] = useState(false)
  const [stop, setStop] = useState(false)
  const [tasks, setTasks] = useRecoilState(tasksState)
  const [state, setState] = useRecoilState(commonState)
  const timeout = useRecoilValue(getTimeout)
  const task = useRecoilValue(getCurrentTask)  
  if(!task) return <Empty />

  const onStart = () => {
    setState({ ...state, timerRunning: true, timeoutRunning: false })
    setTick(true)
    setStop(false)
    setTimeout(() => { console.log(state) }, 1000)
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
    setState({ ...state, timerRunning: false, timeoutRunning: true })
    setTick(false)
    setStop(true)
  }

  const onCompleteTimeout = () => {
    setState({ ...state, timerRunning: false, timeoutRunning: false })
    setTasks(changeCurPomodor(tasks)(task.curTask))
  }

  const { curTask: { value, currentPomodor, time }, index } = task
  return (
    <Dashboard
      taskName={value}
      currentPomodor={currentPomodor}
      index={index}
      // time={curTask.time}
      time={0.05} // delete
      isStart={tick}
      isStop={stop}
      onStart={onStart}
      onStop={onStop}
      addPomodoro={addPomodoro}
      timerComplete={onComplete}
      timeout={state.timeoutRunning} 
      timeoutTime={0.1} 
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