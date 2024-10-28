import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>NAVBAR</h1>
      {children}
    </div>
  )
}
