import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { settingsState, timerControlState } from '../../../store/atoms'
import { RangeComponent } from '../../../utils/ui/Range/Range'


export const ShortBreakRange = () => {
  const [settingState, setSettingState] = useRecoilState(settingsState)
  const setTimerControlState = useSetRecoilState(timerControlState)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeHandler = (e: any) => {
    setSettingState({ ...settingState, shortBreak: e.target.value })
    setTimerControlState((state) => {
      return { ...state, leftTime: 0 }
    })
  }

  return (
    <RangeComponent 
      title='Время короткого перерыва'
      value={settingState.shortBreak}
      onChange={onChangeHandler} 
      min={1}
      max={15}
    />
  )
}

