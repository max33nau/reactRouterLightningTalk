import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router' // uses es6 transpiler
import Pets from './components/Pets'
import Stores from './components/Stores'
import App from './components/App'
import Type from './components/Type'

/* Dealing with params in react router
lets add a type to our pet url so it will be /pets/:type
the paramameters are avaialable to route components with
this.props.params.[name] so in our case [name] will be type*/

// Previous Branch
//render((
//   <Router history={hashHistory}>
//     <Route path='/' component={App}>
//       <Route path='/pets' component={Pets}/>
//       <Route path='/stores' component={Stores}/>
//     </Route>
//
//   </Router >
// ), document.getElementById('myApp'))

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/pets' component={Pets}/>
      <Route path='/pets/:type' component={Type}/> // now lets add some links in our pet.js
      <Route path='/stores' component={Stores}/>
    </Route>

  </Router >
), document.getElementById('myApp'))

/* now lets nest the pets/:type route */

// render((
//   <Router history={hashHistory}>
//     <Route path='/' component={App}>
//       <Route path='/pets' component={Pets}>
//           <Route path='/pets/:type' component={Type}/> /* make sure to render the children in Pets.js */
//       </Route>
//       <Route path='/stores' component={Stores}/>
//     </Route>
//
//   </Router >
// ), document.getElementById('myApp'))
