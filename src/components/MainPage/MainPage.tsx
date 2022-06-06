import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IntroductionList } from './IntroductionList/IntroductionList'
import { FormComponent } from './Form/Form'
import './MainPage.css'
import { Tasks } from './Tasks/Tasks'
import { Dashboard } from './Dashboard/Dashboard'

export const MainPage = () => (
  <Container>
    <Row>
      <Col>

        <IntroductionList />
        <FormComponent />
        <Tasks />

      </Col>
      <Col>
        
        <Dashboard />

      </Col>
    </Row>
  </Container>
)

