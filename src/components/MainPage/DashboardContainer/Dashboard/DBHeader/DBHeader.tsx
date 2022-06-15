import React, { FC } from 'react'
import { Stack } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { timerControlState } from '../../../../../store/atoms'
import './DBHeader.css'

interface DBHeaderProps {
  taskName: string
  index: number
}

export const DBHeader: FC<DBHeaderProps> = ({ taskName, index }) => {
  const { isTaskRun, isPause } = useRecoilValue(timerControlState)

  return (
    <Stack 
      direction="horizontal" 
      className={`${isTaskRun ? 'bg-danger' : 'bg-grey'} ${ isPause ? 'bg-green' : '' } px-3 px-sm-5 py-3`}
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

