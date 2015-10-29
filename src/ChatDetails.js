
var React = require('react')
var ReactPropTypes = React.PropTypes;
var MessageList = require('./MessageList')
var MessageForm = require('./MessageForm')

/**
 * Thread details page
 */
var ChatDetails = React.createClass({

  propTypes: {
    data: React.PropTypes.object,
    onPostMessage: React.PropTypes.func
  },

  hide: function() {
    this.setState( {hidden: true} )
  },

  show: function() {
    this.setState( {hidden: false} )
  },

  getInitialState: function() {
    return {hidden: true}
  },  
  
  render: function() {
    return (
      <div className={this.state.hidden ? "chatDetails chatDetailsHidden" : "chatDetails"}>
        <MessageList data={this.props.data}/>
        <MessageForm threadId={this.props.data ? this.props.data.id : null} onPostMessage={this.props.onPostMessage} />
      </div>
    );
  }

});

module.exports = ChatDetails
