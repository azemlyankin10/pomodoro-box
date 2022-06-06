import React from 'react'
import { Stack } from 'react-bootstrap'
import './Dashboard.css'
import { Timer } from './Timer/Timer'


export const Dashboard = () => (
  <div className="dashboard">
    <Stack 
      direction="horizontal" 
      className='bg-grey px-5 py-3' 
      gap={2}>
      <span className="text-light fw-bold">
        Сверстать сайт 
      </span>
      <span className="text-light fw-bold ms-auto">
        Помидор 1
      </span>
    </Stack>
    <div className="bg-grey-1 d-flex justify-content-center align-items-center">
      <div className=''>
        <Timer />
      </div>
    </div>
  </div>
)

