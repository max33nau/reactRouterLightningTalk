import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router' // uses es6 transpiler

// import Pets from './components/Pets'
// import Stores from './components/Stores'
//
// render((
//   <Router history={hashHistory}>
//     <Route path='/' component={App}/>
//     <Route path='/pets' component={Pets}/>
//     <Route path='/stores' component={Stores}/>
//   </Router >
// ), document.getElementById('myApp'))


/* Now we will add our top component App which will provide links to our other
routes within our page */
import Pets from './components/Pets'
import Stores from './components/Stores'
import App from './components/App'

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}/>
    <Route path='/pets' component={Pets}/>
    <Route path='/stores' component={Stores}/>
  </Router >
), document.getElementById('myApp'))

// angular comparsion

// import pets from './components/Pets'
// import stores from './components/Stores'
//import appComponent from './components/App'

// pets(app);
// stores(app);
// appComponent(app);

// app.config(['$routeProvider' function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       template: '<app-component />'
//     });
//     .when('/pets', {
//       template: '<pets />
//     });
//     .when('/stores', {
//       template: '<stores />
//     });
//   }]);
