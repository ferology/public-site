import React, { useState, useEffect } from 'react'
import AppRouter from './components/Router'
import PasswordProtection from './components/PasswordProtection'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is already authenticated (stored in sessionStorage)
  useEffect(() => {
    const authStatus = sessionStorage.getItem('portfolio_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleAuthenticate = (status) => {
    setIsAuthenticated(status)
    if (status) {
      sessionStorage.setItem('portfolio_authenticated', 'true')
    } else {
      sessionStorage.removeItem('portfolio_authenticated')
    }
  }

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticate={handleAuthenticate} />
  }

  return <AppRouter />
}

export default App

