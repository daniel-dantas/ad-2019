import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>

      <Route path='*' component={NotFound}/>
    </Switch>
  )
}

export default Routes