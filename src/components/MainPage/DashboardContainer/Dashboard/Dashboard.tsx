import React, { FC } from 'react'
import { ControlBtns } from './ControlBtns/ControlBtns'
import './Dashboard.css'
import { DBHeader } from './DBHeader/DBHeader'
import { Timer } from './Timer/Timer'

interface Dashboard {
  taskName: string
  currentPomodor: number
  index: number
  time: number
  isStart: boolean
  isStop: boolean
  isPause: boolean
  onStart: () => void
  onStop: () => void
  onPause: () => void
  onDone: () => void
  addPomodoro: () => void
  timerComplete: () => void
  timeout: boolean
  timeoutTime: number
  isTimeoutStart: boolean
  timerTimeoutComplete: () => void
}

export const Dashboard: FC<Dashboard> = ({ 
  taskName, 
  currentPomodor, 
  index, 
  time, 
  isStart, 
  isStop, 
  isPause,
  onStart, 
  onStop,
  onPause, 
  onDone,
  addPomodoro, 
  timerComplete,
  timeout,
  timeoutTime,
  isTimeoutStart,
  timerTimeoutComplete
}) => (
  <div className="dashboard">

    <DBHeader taskName={taskName} index={currentPomodor}  />

    <div className="bg-grey-1 d-flex justify-content-center align-items-center">
      <div className='d-flex flex-column align-items-center my-5'>
        {!timeout && (
          <>
            <Timer 
              time={time} 
              start={isStart} 
              stop={isStop}
              pause={isPause}
              addPomodoro={addPomodoro} 
              timerComplete={timerComplete}    
            />
            <p className="d-flex align-items-center mb-4">
              <span className='text-grey'>
                Задача {index} -&nbsp;
              </span>
            {taskName}
            </p>

            <ControlBtns
              onStart={onStart}
              onStop={onStop}
              onPause={onPause}
              onDone={onDone}
              isStart={isStart}
            />
          </>  
        )}
        {timeout && (
          <>
            <Timer 
              time={timeoutTime} 
              start={isTimeoutStart} 
              timerComplete={timerTimeoutComplete}    
            />
            <p className="d-flex align-items-center mb-4">
              Пора отдохнуть!
            </p>
          </>
        )}
      </div>
    </div>

  </div>
)
