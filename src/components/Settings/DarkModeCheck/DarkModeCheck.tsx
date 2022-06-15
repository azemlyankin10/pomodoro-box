import React from 'react'
import Form from 'react-bootstrap/Form'
import { useRecoilState } from 'recoil'
import { settingsState } from '../../../store/atoms'

export const DarkModeCheck = () => {
  const [settingState, setSettingState] = useRecoilState(settingsState)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeHandler = (e: any) => {
    setSettingState({ ...settingState, darkMode: e.target.checked })
  }

  return (
    <Form.Group className='mb-3'>
      <Form.Check 
        className='custom-check'
        type="switch"
        id="custom-switch"
        label='Тёмная тема'
        checked={settingState.darkMode}
        onChange={onChangeHandler}
      />
    </Form.Group>
  )
}
