import React from 'react'
import { useRecoilValue } from 'recoil'
import { getCurrentDayState } from '../../../store/selectors'
import { humanTime } from '../../../utils/js/humanTime'
import './PauseStat.css'


export const PauseStat = () => {
  const { pauses } = useRecoilValue(getCurrentDayState)

  return (
    <div className={`pauseStat p-4 ${!pauses || pauses < 1 ? 'lost' : ''}`}>
      <h3 className='fs-4 mb-2 pauseStat__text'>Время на паузе</h3>
      <p className='fs-big m-0 pauseStat__text'>{humanTime(pauses, 'pause')}</p>
    </div>
  )
}

