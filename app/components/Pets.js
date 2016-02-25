import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h3> Pets </h3>
        <ul>
          <li> <Link to='/pets/monkey'> Monkey </Link> </li>
          <li> <Link to='/pets/dog'> Dog </Link> </li>
          <li> <Link to='/pets/hippo'> Hippo </Link> </li>
        </ul>

      </div>
    )
  }
})

//  {this.props.children}
