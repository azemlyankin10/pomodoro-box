import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IntroductionList } from './IntroductionList/IntroductionList'
import { FormComponent } from './Form/Form'
import './MainPage.css'
import { Tasks } from './Tasks/Tasks'
import { DashboardContainer } from './DashboardContainer/DashboardContainer'

export const MainPage = () => (
  <Container className='py-5 mt-xl-5'>
    <Row>
      <Col 
        xs={12} 
        xl={6}
        className='order-xl-2 mb-5 mb-xl-0'
      >

        <DashboardContainer />

      </Col>
      <Col 
        xs={12} 
        xl={6}
        className='order-xl-1'
      >

        <IntroductionList />
        <FormComponent />
        <Tasks />

      </Col>
    </Row>
  </Container>
)

