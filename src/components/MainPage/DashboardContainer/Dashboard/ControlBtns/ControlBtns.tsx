import React, { FC } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { commonState } from '../../../../../store/atoms'
import './ControlBtns.css'

interface ControlBtnsProps {
  onStart: () => void
  onStop: () => void
  onPause: () => void
  onDone: () => void
  isStart: boolean
}

export const ControlBtns: FC<ControlBtnsProps> = ({ onStart, onStop, onPause, onDone, isStart }) => {
  const { timerRunning, timerOnPause } = useRecoilValue(commonState)

  return (
    <ButtonGroup className='mb-xl-5'>
  
      {
        timerRunning 
        ? <Button 
              variant='success' 
              className='btn-green me-3'
              style={{ width: 145 }} 
              onClick={onPause}
            >
              {timerOnPause ? 'Продолжить' : 'Пауза'}
          </Button>

        : <Button 
            variant='success' 
            className='btn-green me-3'
            style={{ width: 145 }} 
            onClick={onStart}
          >
            Старт
          </Button>    
      }

      {
        timerOnPause 
          ? <Button 
              variant='outline-danger'
              className='btn-red-outline'
              style={{ width: 138 }}
              onClick={onDone}
            >
              Сделано
            </Button>

          : <Button 
              variant='outline-danger'
              className='btn-red-outline'
              style={{ width: 138 }}
              disabled={!isStart}
              onClick={onStop}
            >
              Стоп
            </Button>
      }
  
    </ButtonGroup>
  )
}
