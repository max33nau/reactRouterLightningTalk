import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router' // uses es6 transpiler

// Previous branch
// import Pets from './components/Pets'
// import Stores from './components/Stores'
// import App from './components/App'
//
// render((
//   <Router history={hashHistory}>
//     <Route path='/' component={App}/>
//     <Route path='/pets' component={Pets}/>
//     <Route path='/stores' component={Stores}/>
//   </Router >
// ), document.getElementById('myApp'))


/* Now we will make a attempt at nesting our routes so that our component App is at
the top level and shows on every page */

/* React things of nested routes as boxes inside boxes. For example our App component will
be the biggest box and then our Pets and Stores component will go inside that box and so on .. */

import Pets from './components/Pets'
import Stores from './components/Stores'
import App from './components/App'

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}> // Pets and Stores are now children of App, inside the box
      <Route path='/pets' component={Pets}/>
      <Route path='/stores' component={Stores}/>
    </Route>

  </Router >
), document.getElementById('myApp'))


/* There is one final step we have to do, and that is to make sure to render the children
 inside of App component. As you can see this is a nice thing about react routers because
 we can develop and render our components and independent applications and you can put them
 all together pretty easily  */
