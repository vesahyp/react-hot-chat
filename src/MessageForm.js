
var React = require('react')
var ReactPropTypes = React.PropTypes;
var DataStore = require('./DataStore')

var ChatButton = require('./ChatButton')
var ChatUploadButton = require('./ChatUploadButton')
var ChatTextArea = require('./ChatTextArea')

/**
 * Footer that contains controls for sending messages
 */
var MessageForm = React.createClass({

  propTypes: {
    threadId: React.PropTypes.string,
    onPostMessage: React.PropTypes.func
  },
  
  /**
   * Post a new message to DataStore. Notify ChatApp via onPostMessage
   * (TODO: use flux?)
   */
  postMessage: function(message) {
    var messagedata = {
      messageId: 'message_'+Date.now(),
      threadId: this.props.threadId,
      author: 'You',
      text: message.text,
      image: message.image,
      timestamp: Date.now(),
    }
    DataStore.postMessage(messagedata)
    this.props.onPostMessage()
  },

  /**
   * Handle 'send' button click. Post the message if something is written,
   * then reset textarea.
   */
  handleSend: function(e) {
    //var text = React.findDOMNode(this._text).value.trim();
    //if (!text) return;

    this.postMessage( {text:this.refs.textarea.state.value} )
    this.refs.textarea.clear()

    this.refs.send.hide()
  },

  /**
   * Handle emoticon button, add :)
   */
  handleEmoticon: function(e) {
    e.preventDefault()
    this.refs.textarea.append( ':)' )
    this.refs.send.show()
  },

  showSend: function() {
    this.refs.send.show()
  },

  hideSend: function() {
    this.refs.send.hide()
  },

  componentDidMount: function() {
    this.refs.send.hide()
  },

  render: function() {
    return (
      <div className="messageForm">
        <ChatTextArea hideSend={this.hideSend} showSend={this.showSend} ref="textarea"/>
        <div className="messageFormButtons">
          <ChatUploadButton onUpload={this.postMessage} href="#">photos</ChatUploadButton>&nbsp;
          <ChatButton onClick={this.handleEmoticon} href="#"><img src="media/Laugh.png"/></ChatButton>&nbsp;
          <ChatButton onClick={this.handleSend} ref="send" href="#">send</ChatButton>
        </div>
      </div>
    );
  }
});

module.exports = MessageForm
