/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react'
import './BarChart.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, getElementAtEvent } from 'react-chartjs-2'
import { humanTime } from '../../../utils/js/humanTime'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getStatByDays } from '../../../store/selectors'
import { dayState } from '../../../store/atoms'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options: any = {
  maintainAspectRatio: false,
  responsive: true,
  events: ['click'],
  
  layout: {
    padding: {
      top: 0,
      right: 10,
      bottom: 10,
      left: 20
    }
  },
  scales: {
    y: {
      position: 'right',
      ticks: {
        color: '#333',
        padding: 20,
        font: {
          size: '12',
        },
        callback: (value: number, index: number, values: any) => {
          if(index === 2 || index === 4 || index === 6 || index === 8) 
            return humanTime(values[index].value, 'graph') 
          
          
        }
      },
    },
    x: {
      grid: {
        display: false,
      },
    }
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false
    },
  },
}

const plugins:any = [{
  beforeDraw(chart: any, _: any, options:any) {
    const {ctx} = chart
    ctx.fillStyle = '#F4F4F4'
    ctx.fillRect(0, 0, chart.width, chart.height)
    ctx.restore()
  }
}]

const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']



export const BarChart = () => {
  const ref = useRef(null)
  const { workTime } = useRecoilValue(getStatByDays)
  const setDay = useSetRecoilState(dayState)

  const onClick = (e: any) => {
    if(ref.current) {
      const el = getElementAtEvent(ref.current, e)
      if(el[0] && el[0].index) {
        const day = el[0].index
        setDay(day)
      }
    }
   
  }

  const data = {
    labels,
    datasets: [
      {
        data: workTime,
        backgroundColor: 'rgba(234, 138, 121, 1)',
      }
    ],
  }

  return (
    <div className='barChart m-0'>
      <Bar options={options} data={data} plugins={plugins} ref={ref} onClick={onClick}/>
    </div>
  )
}

