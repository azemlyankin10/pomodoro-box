import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { commonState } from '../../../store/atoms'
import { ToastComponent } from '../Toasts/Toast'
import './Layout.css'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [_commonState, setCommonState] = useRecoilState(commonState)

  useEffect(() => {
    setTimeout(() => {
      setCommonState({ ..._commonState, successDeleteTaskToast: false })
    }, 2000)
  }, [_commonState.successDeleteTaskToast])

  return (
    <div className="layout">

      { children }
      
      {_commonState.successDeleteTaskToast && (
        <ToastComponent />
      )}

    </div>
  )
}

