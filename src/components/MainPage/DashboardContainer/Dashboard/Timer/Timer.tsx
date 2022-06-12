import React, { FC, useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import Countdown, { zeroPad } from 'react-countdown'
import { useRecoilState } from 'recoil'
import { commonState } from '../../../../../store/atoms'
import './Timer.css'

interface Timer {
  time: number
  start: boolean
  stop?: boolean
  pause?: boolean
  addPomodoro?: () => void
  timerComplete: () => void
}

export const Timer: FC<Timer> = ({ time, start, stop, pause, addPomodoro, timerComplete }) => {
  const ref = useRef<Countdown>(null)
  const [_commonState, setCommonState] = useRecoilState(commonState)
  const { timeoutRunning, timerRunning, timerOnPause, leftTime } = _commonState

  let timeForTimer =  Date.now() + time * 60 * 1000
  if(leftTime > 1000) timeForTimer = Date.now() + leftTime
  const [currentTime] = useState(timeForTimer)


  useEffect(() => {
    if(start) ref.current?.start()
    if(stop) ref.current?.stop()
    if(pause) ref.current?.pause()
  }, [start, stop, pause])

  return (
    <div className={`${timerRunning && !timerOnPause ? 'red-timer' : ''} d-flex align-items-center px-3`}>
      <Countdown 
        date={currentTime} 
        renderer={renderer}
        autoStart={leftTime > 1000 && !timerOnPause}
        onComplete={() => { setCommonState({ ..._commonState, leftTime: 0 }), timerComplete() }}
        onPause={(a) => console.log(a)}
        onStop={() => { setCommonState({ ..._commonState, leftTime: 0 }) }}
        onTick={({total}) => { setCommonState({ ..._commonState, leftTime: total }) }}
        ref={ref}
      />
      {!timeoutRunning && (
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


function renderer({ hours, minutes, seconds }: { hours: number, minutes: number, seconds: number }) {
  const time = hours < 1 
    ? `${zeroPad(minutes)}:${zeroPad(seconds)}`
    : `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`
  
  return (
    <span 
      className='fw-light me-3 fs-timer'
    >
      {time}
    </span>   
  )
}