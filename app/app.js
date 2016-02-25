import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router' // uses es6 transpiler
import Pets from './components/Pets'
import Stores from './components/Stores'
import App from './components/App'
import Type from './components/Type'
import Home from './components/Home'

/* Right now if we go to localhost://8080/#/ there is just nothing so lets add a home page using
the IndexRoute component react router provides */
render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/pets' component={Pets}>
        <Route path='/pets/:type' component={Type}/>
      </Route>
      <Route path='/stores' component={Stores}/>
    </Route>

  </Router >
), document.getElementById('myApp'))

/* IndexRoute basically acts the the .otherwise() in the angular $routeProvider kind of,
it is rendered if none of the children urls have a match in App or if it matches its parents
url perfectly it will be rendered which in this case is '/' kind of think of it as a server looking
for index.html, the same is going on here if the parents url is matched it will look for IndexRoute */
