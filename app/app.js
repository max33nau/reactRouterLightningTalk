import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router' // uses es6 transpiler

// angular comparison
/* import angular from 'angular' ;
import angularRoute from 'angular-route'; */

/* as we know angular apps building blocks are directives,
directive with a view are called components, we can interact
components to other components within our app by giving the input
and output properties (controllers/$scope) */

/* how is react different, react using components where data is only
passed between the two using "props". Props are values specified in a
HTML0like XML syntax call JSX for representing the DOM components. The way
react manipulates the DOM is when a component receives a state change, it create
a virtual DOM which acts as a in-meory rpepresentation of what the browser is showing.
Then it creates a new version of the virtual DOM with the state changes and compares i
the original and only makes the minimal changes required when re-rendering itself. */

// React Router is a component

// render(<Router/>, document.getElementById('myApp')) this will do nothing though because
// we have to configure it

// angular comparison
/* const app = angular.module('myApp', [angularRoute]); */


// So instead of using a App as our top component we will be using a Router
render((
  <Router history={hashHistory}> // hashHistory manages the routing history with the hash portion of the url
    <Route path='/' component={App}/> // App component has not been defined yet
  </Router >
), document.getElementById('myApp'))

// angular comparsion
// app.config(['$routeProvider' function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       template: '<myApp />'
//     });
//   }]);
