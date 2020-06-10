import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import MainPage from './components/MainPage'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={LandingPage} />
        <Switch>
          <PrivateRoute exact path='/mainpage' component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

