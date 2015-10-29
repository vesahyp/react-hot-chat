
var React = require('react')
var ReactPropTypes = React.PropTypes;
var Chat = require('./Chat')
var DataStore = require('./DataStore')

/**
 * List of chat threads
 */
var ChatList = React.createClass({

  propTypes: {
    threads: ReactPropTypes.array.isRequired
  },

  /**
   * Pass chosen thread to ChatApp
   */
  onChooseChat: function(i) {
    this.props.onChooseChat( this.props.threads[i] )
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

  /**
   * Map threads to Chat components
   */
  render: function() {    
    var chats = this.props.threads.map(function(chat,index){
      var lines = chat.messages[chat.messages.length-1].text ? chat.messages[chat.messages.length-1].text.split('\n') : ['<image>']
      var text = lines[0]

      return (
        <div className="chatContainer" key={index}>
          <a href="#" onClick={this.onChooseChat.bind(this,index)}>
            <Chat key={index} date={chat.date} latest={text} recipient={chat.title} />
          </a>
        </div>
      )
    },this)
    return(
      <div className={this.state.hidden ? "chatList chatListHidden" : "chatList"}>
        {chats}
      </div>
    );
  }
})

module.exports = ChatList