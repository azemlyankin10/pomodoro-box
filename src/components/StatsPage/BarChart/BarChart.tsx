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
import { Bar, getDatasetAtEvent, getElementAtEvent } from 'react-chartjs-2'
import { humanTime } from '../../../utils/js/humanTime'
import { useRecoilValue } from 'recoil'
import { getStatByDays } from '../../../store/selectors'

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
      right: 50,
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

  const onClick = (e: any) => {
    if(ref.current)
      console.log(getElementAtEvent(ref.current, e))
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

// getWeek(workTime as [])
