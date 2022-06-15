import React from 'react'
import { Select } from './Select/Select'
import './StatHeader.css'

export const StatHeader = () => (
  <div className='d-flex align-items-center flex-wrap flex-md-nowrap'>
    <h2 className='w-100 statHeader__title'>
      Ваша активность
    </h2>
    <div className='ms-md-auto'>
      <Select 
        elems={[
          { value: 'week', text: 'Эта неделя' }, 
          { value: 'lastweek', text: 'Прошедшая неделя' }, 
          { value: '2weekago', text: '2 недели назад' },
        ]}
      />
    </div>
  </div>
)
