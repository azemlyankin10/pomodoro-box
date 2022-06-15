import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { settingsState, showToastsState } from '../../store/atoms'
import { ToastComponent } from '../../utils/ui/Toasts/Toast'

import './Layout.css'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isToast, setIsToast] = useRecoilState(showToastsState)
  const { darkMode } = useRecoilValue(settingsState)

  useEffect(() => {
    setTimeout(() => {
      setIsToast({ ...isToast, delete: false })
    }, 2000)
  }, [isToast.delete])

  useEffect(() => {
    darkMode 
      ? document.body.classList.add('dark') 
      : document.body.classList.remove('dark')
  }, [darkMode])

  return (
    <div className={`layout ${darkMode ? 'dark' : ''}`}>

      { children }
      
      {isToast.delete && <ToastComponent body='Удаление прошло успешно' />}

    </div>
  )
}

