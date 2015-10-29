
var React = require('react')
var ChatList = require('./ChatList')
var ChatDetails = require('./ChatDetails')
var DataStore = require('./DataStore')

/**
 * Chat application. Handles page and data changes.
 */
var ChatApp = React.createClass({

  /**
   * Shows ChatList and hides ChatDetails pages.
   */
  showChatList: function() {

    //var chatDetails = React.findDOMNode(this.refs.chatDetails)
    //chatDetails.classList.add( 'chatDetailsHidden' )

    //var chatList = React.findDOMNode(this.refs.chatList)
    //chatList.classList.remove('chatListHidden')

    var back = React.findDOMNode(this.refs.back)
    back.classList.add( 'backHidden' )


    this.refs.chatDetails.hide()
    this.refs.chatList.show()
    //this.refs.back.hide()
  },

  /**
   * Shows ChatDetails page, hides ChatList page. 
   */
  showChatDetails: function() {
    //var chatDetails = React.findDOMNode(this.refs.chatDetails)
    //chatDetails.classList.remove('chatDetailsHidden')

    //var chatList = React.findDOMNode(this.refs.chatList)
    //chatList.classList.add( 'chatListHidden' )

    var back = React.findDOMNode(this.refs.back)
    back.classList.remove( 'backHidden' )

    this.refs.chatDetails.show()
    this.refs.chatList.hide()

  },

  /**
   * Handles data change when a chat thread is selected from ChatList
   * @param {object} chat
   */
  onChooseChat: function(chat) {
    this.setState( {list: DataStore.getListData(), thread: chat} )
    this.showChatDetails()
  },

  /**
   * Update state from DataStore when new message is posted.
   */
  onPostMessage: function() {
    this.setState( {list: DataStore.getListData(), thread: this.state.thread ? DataStore.getMessageData(this.state.thread.id) : null } )
  },

  componentDidMount: function() {
    this.showChatList()

    var splash = React.findDOMNode(this.refs.splash)
    setTimeout( function() {
      splash.classList.add( 'splashHidden' )
    },1000)
  },

  getInitialState: function() {
    return {drawsplash: true, list: DataStore.getListData(), thread: null}
  },

  render: function() {
    return (
      <div className="app">
        <ChatList ref="chatList" threads={this.state.list} onChooseChat={this.onChooseChat} />
        <ChatDetails ref="chatDetails" data={this.state.thread} onPostMessage={this.onPostMessage} />
        <header className="appHeader">
          <a className="buttonBack" ref="back" onClick={this.showChatList} href="#">&lt;</a>
          <img className="logo" src="media/logo.svg"/>
          <span className="appTitle">chat</span>
        </header>
        <div className="splash" ref="splash">
          <img className="splashImage" src="media/logo.svg"/>
        </div>
      </div>
    );
  }
})

module.exports = ChatApp
