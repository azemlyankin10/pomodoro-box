import React from 'react'
import { useRecoilValue } from 'recoil'
import { getCurrentDayState } from '../../../store/selectors'
import './FocusStat.css'


export const FocusStat = () => {
  const { workTime, pauses } = useRecoilValue(getCurrentDayState)

  const focus = 100 - (pauses / workTime.time * 100)  

  return (
    <div className={`focusStat p-4 ${!focus || focus < 1 ? 'lost' : ''}`}>
      <h3 className='fs-4 mb-2 focusStat__text'>Фокус</h3>
      <p className='fs-big m-0 focusStat__text'>{focus > 0 ? focus.toFixed(1) : 0}%</p>
    </div>
  )
  
}
