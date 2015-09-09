import React from 'react'

export default React.createClass({
  displayName: 'MessagePage',

  propTypes: {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string
  },

  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>

        <p>{this.props.body}</p>
      </div>
    )
  }
})
