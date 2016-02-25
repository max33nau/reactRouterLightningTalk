import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router' // uses es6 transpiler

// Currently this doesn't do anything except create our initial router setup
// render((
//   <Router history={hashHistory}>
//     <Route path='/' component={App}/>
//   </Router >
// ), document.getElementById('myApp'))

/* Lets add some components and create some paths so we can show where we are headed
 We will create two components called Pets and Stores, react uses capitalization for
 components so it won't get confused with HTML content, we will also set our paths to
 be  /pets and /stores*/

import Pets from './components/Pets'
import Stores from './components/Stores'

render((
  <Router history={hashHistory}>
    <Route path='/' component={myApp}/>
    <Route path='/pets' component={Pets}/>
    <Route path='/stores' component={Stores}/>
  </Router >
), document.getElementById('myApp'))

// Now if we go to browser we will see stores and pets showing up on the screen when
// we go to those urls

// angular comparsion

// import pets from './components/Pets'
// import stores from './components/Stores'

// pets(app);
// stores(app);

// app.config(['$routeProvider' function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       template: '<myApp />'
//     });
//     .when('/pets', {
//       template: '<pets />
//     });
//     .when('/stores', {
//       template: '<stores />
//     });
//   }]);
