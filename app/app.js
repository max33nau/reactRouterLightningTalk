import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router' // uses es6 transpiler
import Pets from './components/Pets'
import Stores from './components/Stores'
import App from './components/App'

// Lets take a look at the link component
render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/pets' component={Pets}/>
      <Route path='/stores' component={Stores}/>
    </Route>

  </Router >
), document.getElementById('myApp'))
