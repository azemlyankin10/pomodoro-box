import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import { Header } from './Header/Header'
import { Layout } from './Layout/Layout'
import { MainPage } from './MainPage/MainPage'
import { ThemeProvider } from 'react-bootstrap'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
            </Routes>
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
