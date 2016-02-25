import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router' // uses es6 transpiler

// Currently this doesn't do anything except create our initial router setup
// render((
//   <Router history={hashHistory}>
//     <Route path='/' component={App}/>
//   </Router >
// ), document.getElementById('myApp'))

import Pets from './components/Pets'
import Stores from './components/Stores'

render((
  <Router history={hashHistory}>
    <Route path='/' component={myApp}/>
    <Route path='/pets' component={Pets}/>
    <Route path='/stores' component={Stores}/>
  </Router >
), document.getElementById('myApp'))


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
