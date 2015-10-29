var React = require('react')
var ReactPropTypes = React.PropTypes;

/**
 * Chat button
 */
var ChatButton = React.createClass({

  propTypes: {
    onClick: React.PropTypes.func
  },

  hide: function() {
    this.setState( {hidden: true} )
  },

  show: function() {
    this.setState( {hidden: false} )
  },

  getInitialState: function() {
    return {hidden: false}
  },

  render: function() {
    return (
      <a className={(this.state.hidden ? "messageButton messageSendButtonHidden" : "messageButton")} onClick={this.props.onClick}>
        {this.props.children}
      </a>
    )
  }
})

module.exports = ChatButton
