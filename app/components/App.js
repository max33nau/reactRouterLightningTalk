/* Right now our App has no way to get to those paths we setup
with out entering them in the browser so in our top component we
App we will add the Links to the routes. */

import { Link } from 'react-router' // built in Link component,
// similar to HTML <a> </a> tags
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router</h1>
        <ul role="nav">
          <li><Link to="/pets">Pets</Link></li>
          <li><Link to="/stores">Stores</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

// Now our user interface looks something like this
// // at /pets
// <App>
//   <Pets />
// </App>
//
// // at /stores
// <App>
//   <Stores/>
// </App>
