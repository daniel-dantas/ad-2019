import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SucessDraw from './pages/SucessDraw'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/sucess' component={SucessDraw}/>

      <Route path='*' component={NotFound}/>
    </Switch>
  )
}

export default Routes