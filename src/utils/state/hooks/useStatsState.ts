import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { statsState } from '../../../store/atoms'
import { day_month_year } from '../../js/day_month_year'

export const useStatsState = () => {
  const [stat, setStat] = useRecoilState(statsState)
  const [pause, setPause] = useState({
    isPause: false,
    time: 0
  })

  const addStopStat = () => {
    const copyStops = [ ...stat.stops ]
    const stops = copyStops.concat(day_month_year(new Date()))
    setStat({ ...stat, stops })
  }

  const addWorkTimeStat = (total: number) => {
    const copyWorkTime = [ ...stat.workTime ]
    const workTime = copyWorkTime.concat({ total, date: day_month_year(new Date()) })
    setStat({ ...stat, workTime })
  }

  const addPomodorStat = () => {
    const copyPomodors = [ ...stat.pomodors ]
    const pomodors = copyPomodors.concat(day_month_year(new Date()))
    setStat({ ...stat, pomodors })
  }

  const pauseStat = () => {
    setPause({ isPause: true, time: Date.now() })
    if(pause.isPause && pause.time) {
      const copyPauses = [ ...stat.pauses ]
      const pauses = copyPauses.concat({ timeMs: Date.now() - pause.time, date: day_month_year(new Date()) })
      setStat({ ...stat, pauses })
      setPause({ isPause: false, time: 0 })
    }
  }

  return { addStopStat, addWorkTimeStat, addPomodorStat, pauseStat }
}


