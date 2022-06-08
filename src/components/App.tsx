import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import { Header } from './Header/Header'
import { Layout } from './Layout/Layout'
import { MainPage } from './MainPage/MainPage'
import { ThemeProvider } from 'react-bootstrap'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      >
        <Layout>
          <Header />
          <MainPage />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
