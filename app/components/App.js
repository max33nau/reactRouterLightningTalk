import { Link } from 'react-router'
import React from 'react'

// Previous Branch
// export default React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>React Router</h1>
//         <ul role="nav">
//           <li><Link activeStyle={{ color: 'red' }} to="/pets">Pets</Link></li>
//           //<li><Link activeClassName='active' to="/pets">Pets</Link></li>
//           <li><Link activeStyle={{ color: 'red' }} to="/stores">Stores</Link></li>
//           //<li><Link activeClassName='active' to="/stores">Stores</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })

import NavLink from './NavLink'
export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router</h1>
        <ul role="nav">
          <li><NavLink to="/pets">Pets</NavLink></li>
          <li><NavLink to="/stores">Stores</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
