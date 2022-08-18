import React from 'react'
import { useRecoilValue } from 'recoil'
import { getCurrentDayState } from '../../../store/selectors'
import { humanTime } from '../../../utils/js/humanTime'
import './OneDayActivityStat.css'

export const OneDayActivityStat = () => {
  const { workTime: { time, day } } = useRecoilValue(getCurrentDayState)

  return (
    <div className='oneDayActivityStat bg-grey-1 h-100 p-4'>
      <h3 className='fs-5 mb-3 oneDayActivityStat__text'>{day}</h3>
      <p className='oneDayActivityStat__text'>
        {
          time || time > 0 
        ? (<>Вы работали над задачами в течение <span className='text-danger'>{humanTime(time, 'day')}</span></>)
        : <>Нет данных</>
        }
      </p>
    </div>
  )
}

