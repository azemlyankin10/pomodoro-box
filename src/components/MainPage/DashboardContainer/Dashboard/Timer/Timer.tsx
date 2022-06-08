import React, { FC, useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import Countdown, { zeroPad } from 'react-countdown'
import { useRecoilValue } from 'recoil'
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
  const { timeoutRunning, timerRunning, timerOnPause } = useRecoilValue(commonState)
  const [currentTime] = useState(Date.now() + time * 60 * 1000)

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
        autoStart={false}
        onComplete={timerComplete}
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