import { Link } from 'react-router'
import React from 'react'

// The Link component is different from a <a> </a> tag because it knows if its
// path is active or not
// Previous Branch
// export default React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>React Router</h1>
//         <ul role="nav">
//           <li><Link to="/pets">Pets</Link></li>
//           <li><Link to="/stores">Stores</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router</h1>
        <ul role="nav">
          <li><Link activeStyle={{ color: 'red' }} to="/pets">Pets</Link></li>

          <li><Link activeStyle={{ color: 'red' }} to="/stores">Stores</Link></li>

        </ul>
        {this.props.children}
      </div>
    )
  }
})
//<li><Link activeClassName='active' to="/pets">Pets</Link></li>
//<li><Link activeClassName='active' to="/stores">Stores</Link></li>

/* Now not all our links in our page we want to know if they are active or not,
we also don't want to have to keep adding a active style on every nav link so lets
just create our own NavLink component */
