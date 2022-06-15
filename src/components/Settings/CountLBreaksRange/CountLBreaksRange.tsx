import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { settingsState, timerControlState } from '../../../store/atoms'
import { RangeComponent } from '../../../utils/ui/Range/Range'


export const CountLBreaksRange = () => {
  const [settingState, setSettingState] = useRecoilState(settingsState)
  const setTimerControlState = useSetRecoilState(timerControlState)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeHandler = (e: any) => {
    setSettingState({ ...settingState, countBreak: e.target.value })
    setTimerControlState((state) => {
      return { ...state, leftTime: 0 }
    })
  }

  return (
    <RangeComponent 
      title='Частота длинных перерывов'
      value={settingState.countBreak}
      onChange={onChangeHandler} 
      min={2}
      max={6}
    />
  )
}

