import React, { FC, useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap'
import Countdown, { zeroPad } from 'react-countdown'
import { useRecoilValue } from 'recoil'
import { commonState } from '../../../../../store/atoms'
import './Timer.css'

interface Timer {
  time: number
  start: boolean
  stop?: boolean
  addPomodoro?: () => void
  timerComplete: () => void
}

export const Timer: FC<Timer> = ({ time, start, stop, addPomodoro, timerComplete }) => {
  const ref = useRef<Countdown>(null)
  const { timeoutRunning } = useRecoilValue(commonState)
  useEffect(() => {
    if(start) ref.current?.start()
    if(stop) ref.current?.stop()
  }, [start, stop])

  return (
    <div className="d-flex align-items-center px-3">
      <Countdown 
        date={Date.now() + time * 60 * 1000} 
        renderer={renderer}
        autoStart={false}
        onStart={() => console.log('start')}
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