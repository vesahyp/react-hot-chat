
var React = require('react')
var ReactPropTypes = React.PropTypes;

/**
 * Thread entry in ChatList
 */
var Chat = React.createClass({
  
  propTypes: {
    date: React.PropTypes.string,
    latest: React.PropTypes.string,
    recipient: React.PropTypes.string
  },
  
  render: function() {
    return (
      <div className="chat">
        <span className="chatRecipient">
          {this.props.recipient}
        </span>
        <span className="chatLatest">
          {this.props.latest}
        </span>
        <span className="chatDate">
          {this.props.date}
        </span>
      </div>
    );
  }
})

module.exports = Chat
