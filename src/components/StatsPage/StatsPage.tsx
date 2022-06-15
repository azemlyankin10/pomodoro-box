import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BarChart } from './BarChart/BarChart'
import { CountPomodorsStat } from './CountPomodorsStat/CountPomodorsStat'
import { FocusStat } from './FocusStat/FocusStat'
import { OneDayActivityStat } from './OneDayActivityStat/OneDayActivityStat'
import { PauseStat } from './PauseStat/PauseStat'
import { StatHeader } from './StatHeader/StatHeader'
import './StatsPage.css'
import { StopsStat } from './StopsStat/StopsStat'

export const StatsPage = () => (
  <main className='py-5 mt-xl-3'>
    <Container>
      <Row className='mb-4'>
        <StatHeader />
      </Row>

      <Row>
        <Col lg={3} >
          <Container fluid className='p-0 m-0'>
            <Row>
              <Col lg={12} md={6} className='mb-3'>
                <OneDayActivityStat/>
              </Col>
              <Col lg={12} md={6} className='mb-3'>
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
        <Col md={12} lg={4} className='order-md-3 order-lg-1 mt-md-3 mt-lg-0 mb-3 mb-md-0'>
          <FocusStat/>
        </Col>

        <Col md={6} lg={4} className='order-md-1 order-lg-2 mb-3 mb-md-0'>
          <PauseStat/>
        </Col>

        <Col md={6} lg={4} className='order-md-2 order-lg-3'>
          <StopsStat/>
        </Col>
      </Row>
    </Container>
  </main>
)