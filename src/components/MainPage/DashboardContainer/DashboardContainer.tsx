import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { settingsState, timerControlState } from '../../../store/atoms'
import { getCurrentTask, getTimeout } from '../../../store/selectors'
import { EIcons, Icon } from '../../../utils/ui/Icon/Icon'
import { Dashboard, DashboardTimout } from './Dashboard/Dashboard'
import useSound from 'use-sound'
import soundSuccess from '../../../utils/sound/success-sound-effect.mp3'
import soundTimeout from '../../../utils/sound/timoutover.mp3'
import { useTaskState } from '../../../utils/state/hooks/useTaskState'
import { currentDone } from '../../../utils/state/currentDone'
import { useStatsState } from '../../../utils/state/hooks/useStatsState'
import { sendNotification } from '../../../utils/js/notification'

export const DashboardContainer = () => {
  const [timerControl, setTimerControl] = useRecoilState(timerControlState)
  const timeout = useRecoilValue(getTimeout)
  const { pomodoroTime, notification, countBreak } = useRecoilValue(settingsState)
  const task = useRecoilValue(getCurrentTask)  
  const [playSuccess] = useSound(soundSuccess)
  const [playTimeoutOver] = useSound(soundTimeout)
  const [changeTaskState] = useTaskState()
  const { addStopStat, addWorkTimeStat, addPomodorStat, pauseStat } = useStatsState()


  const onStart = () => {
    setTimerControl({ 
      ...timerControl,  
      isPlay: true,
      isTaskRun: true,
      isStop: false
    })
  }

  const onStop = () => {
    setTimerControl({
      ...timerControl,  
      isPlay: false,
      isTaskRun: false,
      isStop: true,
    })

    // add stats
    addStopStat()
  }

  const onPause = () => {
    setTimerControl({ 
      ...timerControl, 
      isPlay: !timerControl.isPlay,
      isPause: !timerControl.isPause,
      isStop: false
    })

    // add stats
    pauseStat()
  }

  const onTimeoutComplete = () => {
    setTimerControl({ 
      ...timerControl,  
      isPlay: false,
      isTaskRun: false,
      isStop: false,
      isTimeoutRun: false
    })
    if(notification) {
      playTimeoutOver()
    }

    sendNotification('Перерыв окончен!', {
      body: 'Можно приступать к выполнению следующего помидора',
    })

    // add stats
    addPomodorStat()
  }

  const onSkipPause = () => {
    setTimerControl({
      ...timerControl,
      isPlay: false,
      isTaskRun: false,
      isTimeoutRun: false,
      isPause: false,
      isStop: false,
      leftTime: 0,
    })
  }

  if(!task && timerControl.isTimeoutRun) {
    return <DashboardTimout timeoutTime={timeout} onTimeoutComplete={onTimeoutComplete} onSkipPause={onSkipPause}/>
  }
  if(!task) return <Empty />

  const onDone = () => {
    setTimerControl({ 
      ...timerControl,
      isPlay: false,
      isTaskRun: false,
      isPause: !timerControl.isPause,
      leftTime: 0 
    })
    const pomodors = task.curTask.currentPomodor
    changeTaskState(task.curTask.id, {pomodors, done: true})
  }

  const addPomodoro = () => {    
    changeTaskState(task.curTask.id, {pomodors: task.curTask.pomodors + 1})
  }

  const onComplete = () => {
    const completedTimes = timerControl.completedTimes >= countBreak
      ? 0
      : timerControl.completedTimes + 1 

    setTimerControl({ 
    ...timerControl, 
      isTaskRun: false,
      isTimeoutRun: true,
      isStop: false,
      completedTimes
    })
    const currentPomodor = task.curTask.currentPomodor + 1
    const done = currentDone(currentPomodor, task.curTask.pomodors)
    changeTaskState(task.curTask.id, {currentPomodor, done})
    if(notification) {
      playSuccess()
    }

    sendNotification('Помидор завершен!', {
      body: 'Сделайте перерыв, прежде чем начать новый помидор',
    })

    // add stats
    addWorkTimeStat(pomodoroTime)
  }  

  const { curTask: { value, currentPomodor }, index } = task

  return (
    <Dashboard
      taskName={value}
      currentPomodor={currentPomodor}
      index={index}
      time={pomodoroTime} 
      onStart={onStart}
      onStop={onStop}
      onPause={onPause}
      onDone={onDone}
      addPomodoro={addPomodoro}
      timerComplete={onComplete}
      isTimeout={timerControl.isTimeoutRun}
      timeoutTime={timeout}
      onTimeoutComplete={onTimeoutComplete}
      onSkipPause={onSkipPause}
    />
  )  
}


function Empty() {
  return (
    <div className='px-5 py-5 bg-grey-1'>
      <p className='text-center'>
        <Icon name={EIcons.tomatoSmile} size={80} viewBox='0 0 115 115' />
        <span className='d-block mt-3 fs-2 text-dark'>Добавьте задачу!</span>
      </p>
    </div>
  )
}