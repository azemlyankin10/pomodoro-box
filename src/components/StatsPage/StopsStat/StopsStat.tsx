import React from 'react'
import { useRecoilValue } from 'recoil'
import { getCurrentDayState } from '../../../store/selectors'
import './StopsStat.css'


export const StopsStat = () => {
  const { stops } = useRecoilValue(getCurrentDayState)
  return (
    <div className={`stopsStat p-4 ${!stops || stops < 1 ? 'lost' : ''}`}>
      <h3 className='fs-4 mb-2 stopsStat__text'>Остановки</h3>
      <p className='fs-big m-0 stopsStat__text'>{stops}</p>
    </div>
  )
}

