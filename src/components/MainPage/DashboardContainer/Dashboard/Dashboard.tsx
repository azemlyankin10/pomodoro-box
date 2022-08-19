import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { ControlBtns } from './ControlBtns/ControlBtns'
import './Dashboard.css'
import { DBHeader } from './DBHeader/DBHeader'
import { Timer } from './Timer/Timer'

interface Dashboard {
  taskName: string
  currentPomodor: number
  index: number
  time: number
  onStart: () => void
  onStop: () => void
  onPause: () => void
  onDone: () => void
  addPomodoro: () => void
  timerComplete: () => void
  isTimeout: boolean
  timeoutTime: number
  onTimeoutComplete: () => void
  onSkipPause: () => void
}

export const Dashboard: FC<Dashboard> = ({ 
  taskName, 
  currentPomodor, 
  index, 
  time, 
  onStart, 
  onStop,
  onPause, 
  onDone,
  addPomodoro, 
  timerComplete,
  isTimeout,
  timeoutTime,
  onTimeoutComplete,
  onSkipPause
}) => (
  <>
    {!isTimeout && (
      <div className="dashboard">

        <DBHeader taskName={taskName} index={currentPomodor}  />

        <div className="bg-grey-1 d-flex justify-content-center align-items-center">
          <div className='d-flex flex-column align-items-center my-5'>
            <Timer 
              time={time} 
              addPomodoro={addPomodoro} 
              timerComplete={timerComplete}    
            />
            <p className="d-flex align-items-center mb-4 dashboard-taskName">
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
            />
          </div>
        </div>

      </div>
    )}
    {isTimeout && (
      <DashboardTimout 
        timeoutTime={timeoutTime}
        onTimeoutComplete={onTimeoutComplete}
        onSkipPause={onSkipPause}
      />
    )}
  </>
  
)

type DashboardTimout = {
  timeoutTime: number
  onTimeoutComplete: () => void
  onSkipPause: () => void
}

export const DashboardTimout:FC<DashboardTimout> = ({ timeoutTime, onTimeoutComplete, onSkipPause }) => {

  return (
    <div className="bg-grey-1 d-flex justify-content-center align-items-center">
      <div className='d-flex flex-column align-items-center my-5'>
        <Timer 
          time={timeoutTime} 
          timerComplete={onTimeoutComplete}  
        />
        <p className="d-flex align-items-center mb-4">
          Пора отдохнуть!
        </p>
        <Button
          variant='outline-danger'
          className='btn-red-outline'
          style={{ width: 138 }}
          onClick={onSkipPause}
        >
          Пропустить
        </Button>
      </div>
    </div>
  )
}

