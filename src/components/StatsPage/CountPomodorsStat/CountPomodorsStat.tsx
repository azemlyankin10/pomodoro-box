import React from 'react'
import { useRecoilValue } from 'recoil'
import { getCurrentDayState } from '../../../store/selectors'
import { EIcons, Icon } from '../../../utils/ui/Icon/Icon'
import './CountPomodorsStat.css'


export const CountPomodorsStat = () => {
  const { pomodors } = useRecoilValue(getCurrentDayState)


  return (
    <div className="countPomodorsStat bg-grey-1 d-flex flex-column h-100">
      {
        pomodors || pomodors > 0 
          ? (
            <>
              <div className='p-2 pt-lg-4 pt-md-5 pb-0 d-flex justify-content-center align-items-center h-auto'>
                <Icon name={EIcons.tomato} size={80} viewBox='0 0 40 40' />
                <span className='text-grey ms-3 fs-4 mt-1'>х {pomodors}</span>
              </div>
              <div className='bg-danger mt-auto'>
                <p className='text-light text-center m-0 p-2 fs-5 countPomodorsStat__text'>{pomodors} помидора</p>
              </div>
            </>
          )
          : (
            <div className='p-2 pt-lg-4 pt-md-5 pb-0 d-flex justify-content-center align-items-center h-auto'>
              <Icon name={EIcons.tomatoSmile} size={115} viewBox='0 0 115 115' />
            </div>
          )
      }

    </div>
  )
}

