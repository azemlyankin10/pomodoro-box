import React from 'react'
import './Layout.css'

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="layout">
    { children }
  </div>
)

