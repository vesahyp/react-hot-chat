
var React = require('react')
var ReactPropTypes = React.PropTypes;
var Message = require('./Message')

/**
 * List of messages in ChatDetails
 */
var MessageList = React.createClass({

  propTypes: {
    data: React.PropTypes.object
  },

  /**
   * Scroll to bottom of messagelist
   */
  scrollToBottom: function() {
    var messageList = React.findDOMNode(this.refs.messageList)
    setTimeout( function() {
      messageList.scrollTop = messageList.scrollHeight;
    },100)
  },
  
  componentDidUpdate: function() {
    this.scrollToBottom();
  },

  /**
   * Map data.messages to Message components
   */
  render: function() {
    var messages = this.props.data ? this.props.data.messages.map(function(message,index,arr){
      return (
        <Message key={index} timestamp={message.timestamp} author={message.author} showAuthor={index == 0 || arr[index].author != arr[index-1].author ? true : false} image={message.image}>
          {message.text}
        </Message>
      );
    }) : null;

    return (
      <div ref="messageList" className="messageList">
        {messages}
      </div>
    );
  }
});

module.exports = MessageList
