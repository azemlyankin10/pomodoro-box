import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import { Header } from './Header/Header'
import { MainPage } from './MainPage/MainPage'
import { ThemeProvider } from 'react-bootstrap'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../utils/ui/Layout/Layout'
import { StatsPage } from './StatsPage/StatsPage'

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
          <Layout>
            <Header />
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/stats' element={<StatsPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
