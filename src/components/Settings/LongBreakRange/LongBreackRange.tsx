import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { settingsState, timerControlState } from '../../../store/atoms'
import { RangeComponent } from '../../../utils/ui/Range/Range'


export const LongBreakRange = () => {
  const [settingState, setSettingState] = useRecoilState(settingsState)
  const setTimerControlState = useSetRecoilState(timerControlState)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeHandler = (e: any) => {
    setSettingState({ ...settingState, longBreak: e.target.value })
    setTimerControlState((state) => {
      return { ...state, leftTime: 0 }
    })
  }

  return (
    <RangeComponent 
      title='Время длинного перерыва'
      value={settingState.longBreak}
      onChange={onChangeHandler} 
      min={15}
      max={60}
      step={5}
    />
  )
}

