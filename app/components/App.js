import { Link } from 'react-router'
import React from 'react'
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
