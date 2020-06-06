import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Route exact component={LandingPage} />
      </BrowserRouter>
    </div>
  )
}

export default App

