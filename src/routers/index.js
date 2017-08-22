import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from '../App'


const routes = (
<Router>
  <Route path="/" component={App}/>
</Router>
)

export default routes;
