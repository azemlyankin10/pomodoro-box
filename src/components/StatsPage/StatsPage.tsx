import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { statsState } from '../../store/atoms'
import { getStatByDays } from '../../store/selectors'
import { getWeek } from '../../utils/js/getArrOfDays'
import { getUnicArr } from '../../utils/js/getUnicArr'
import { BarChart } from './BarChart/BarChart'
import { CountPomodorsStat } from './CountPomodorsStat/CountPomodorsStat'
import { FocusStat } from './FocusStat/FocusStat'
import { OneDayActivityStat } from './OneDayActivityStat/OneDayActivityStat'
import { PauseStat } from './PauseStat/PauseStat'
import { StatHeader } from './StatHeader/StatHeader'
import './StatsPage.css'
import { StopsStat } from './StopsStat/StopsStat'

export const StatsPage = () => {

  const { pauses, pomodors, stops, workTime } = useRecoilValue(getStatByDays)

  // console.log(pauses)
  console.log('pomodors', pomodors)
  console.log('stops', stops)
  // console.log(workTime)
  

  return (
    <main className='py-5 mb-5 mt-xl-3'>
      <Container>
        <Row className='mb-4'>
          <StatHeader />
        </Row>
  
        <Row>
          <Col lg={3} >
            <Container fluid className='p-0 m-0'>
              <Row>
                <Col lg={12} className='mb-3'>
                  <OneDayActivityStat/>
                </Col>
                <Col lg={12} className='mb-3'>
                  <CountPomodorsStat/>
                </Col>
              </Row>
            </Container>
          </Col>
  
          <Col lg={9} className='mb-3'>
            <BarChart/>
          </Col>
        </Row>
  
        <Row>
          <Col lg={4}>
            <FocusStat/>
          </Col>
  
          <Col lg={4}>
            <PauseStat/>
          </Col>
  
          <Col lg={4}>
            <StopsStat/>
          </Col>
        </Row>
      </Container>
    </main>
  )
}