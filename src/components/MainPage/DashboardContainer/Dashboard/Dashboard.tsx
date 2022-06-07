import React, { FC } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
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
  onStart: () => void
  onStop: () => void
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
  onStart, 
  onStop, 
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
              addPomodoro={addPomodoro} 
              timerComplete={timerComplete}    
            />
            <p className="d-flex align-items-center mb-4">
            <span className='text-grey'>
              Задача {index} -&nbsp;
            </span>
            {taskName}
            </p>

            <ButtonGroup className='mb-xl-5'>

            <Button 
              variant='success' 
              className='btn-green me-3'
              style={{ width: 145 }} 
              onClick={onStart}
              disabled={isStart}
            >
              Старт
            </Button>

            <Button 
              variant='outline-danger'
              className='btn-red-outline'
              style={{ width: 138 }}
              disabled={!isStart}
              onClick={onStop}
            >
              Стоп
            </Button>

            </ButtonGroup>
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
