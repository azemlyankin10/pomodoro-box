import React, { FC } from 'react'
import { Stack } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { commonState } from '../../../../../store/atoms'
import './DBHeader.css'

interface DBHeaderProps {
  taskName: string
  index: number
}

export const DBHeader: FC<DBHeaderProps> = ({ taskName, index }) => {
  const { timerRunning, timerOnPause } = useRecoilValue(commonState)

  return (
    <Stack 
      direction="horizontal" 
      className={`${timerRunning ? 'bg-danger' : 'bg-grey'} ${ timerOnPause ? 'bg-green' : '' } px-3 px-sm-5 py-3`}
      gap={2}
    >
      <span className="text-light fw-bold">
        { taskName }
      </span>
      <span className="text-light fw-bold ms-auto">
        {`Помидор ${index}`}
      </span>
    </Stack>
  )
}

