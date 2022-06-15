import React, { FC } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { timerControlState } from '../../../../../store/atoms'
import './ControlBtns.css'

interface ControlBtnsProps {
  onStart: () => void
  onStop: () => void
  onPause: () => void
  onDone: () => void
}

export const ControlBtns: FC<ControlBtnsProps> = ({ onStart, onStop, onPause, onDone }) => {
  const { isPlay, isPause, isTaskRun } = useRecoilValue(timerControlState)

  return (
    <ButtonGroup className='mb-xl-5'>

      {!isPlay && !isTaskRun && (
        <Button 
            variant='success' 
            className='btn-green me-3'
            style={{ width: 145 }} 
            onClick={onStart}
          >
            Старт
        </Button>  
      )}

      {isTaskRun && (
        <Button 
          variant='success' 
          className='btn-green me-3'
          style={{ width: 145 }} 
          onClick={onPause}
        >
          {isPause ? 'Продолжить' : 'Пауза'}
        </Button>
      )}

      {!isPause && (
        <Button 
          variant='outline-danger'
          className='btn-red-outline'
          style={{ width: 138 }}
          disabled={!isPlay}
          onClick={onStop}
        >
          Стоп
        </Button>
      )}

      {isPause && (
        <Button 
          variant='outline-danger'
          className='btn-red-outline'
          style={{ width: 138 }}
          onClick={onDone}
        >
          Сделано
        </Button>
      )}

    </ButtonGroup>
  )
}
