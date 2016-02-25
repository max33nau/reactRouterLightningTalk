import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2> {this.props.params.type} </h2>
      </div>
    )
  }
})
