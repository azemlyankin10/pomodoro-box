import React, { FC, useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import Countdown, { zeroPad } from 'react-countdown'
import { useRecoilState } from 'recoil'
import { timerControlState } from '../../../../../store/atoms'

import './Timer.css'


interface Timer {
  time: number
  addPomodoro?: () => void
  timerComplete: () => void
}

export const Timer: FC<Timer> = ({ time, addPomodoro, timerComplete }) => {
  const ref = useRef<Countdown>(null)
  const [timerControl, setTimerControl] = useRecoilState(timerControlState)
  const { isPlay, isTaskRun, isStop, isPause, leftTime, isTimeoutRun } = timerControl

  const timeForTimer = Date.now() + time * 60 * 1000
  const [currentTime, setCurrentTime] = useState(leftTime > 1000 ? Date.now() + leftTime : timeForTimer)

  const [isSec, setIsSec] = useState(true)
  

  useEffect(() => {
    if(isPlay) ref.current?.start()
    if(isStop) ref.current?.stop()
    if(isPause) ref.current?.pause()
  }, [isPlay, isStop, isPause])

  return (
    <div className={`${isPlay && isTaskRun ? 'red-timer' : ''} d-flex align-items-center px-3`}>
      <Countdown 
        date={currentTime} 
        renderer={({ hours, minutes, seconds }) => {
          const time = hours < 1 
            ? `${zeroPad(minutes)}:${zeroPad(seconds)}`
            : `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`
          return (
            <div 
              className='fw-light me-3 fs-timer'
            >
              {time}
            </div>   
          )
        }}
        autoStart={isTimeoutRun || leftTime > 1000 && isPlay }
        onComplete={() => { 
          setTimerControl({ ...timerControl, leftTime: 0 }), 
          timerComplete() 
        }}
        onPause={(a) => console.log(a)}
        onStop={() => { 
          setCurrentTime(timeForTimer), 
          setTimerControl({ ...timerControl, leftTime: 0 })
        }}
        onTick={({total}) => { 
          setTimerControl({ ...timerControl, leftTime: total }) 

          setIsSec(!isSec)
        }}
        ref={ref}
      />
      {!isTimeoutRun && (
        <Button 
          className='btn-grey-round fs-4 px-3'
          onClick={addPomodoro}
        >
          +
        </Button>
      )}
    </div>
  )
}





