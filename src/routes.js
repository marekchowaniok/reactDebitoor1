import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Overview from './containers/Overview'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Overview}/>

  </Route>
)