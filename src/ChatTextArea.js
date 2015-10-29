
var React = require('react')
var ReactPropTypes = React.PropTypes;

/**
 * Chat text area
 */
var ChatTextArea = React.createClass({

  propTypes: {
  },

  /**
   * Handle changes in textarea
   */
  handleInput: function(e) {
    this.setState( {value: e.target.value} )
  },

  /**
   * Append text to textarea
   */
  append: function(text) {
    this.setState( {value: this.state.value+text})

    var text = React.findDOMNode( this._text )
    text.setSelectionRange( text.value.length,text.value.length )
    text.focus()    
  },

  /**
   * Clear textarea
   */
  clear: function() {
    this.setState( {value: ''})
  },

  getInitialState: function() {
    return {value: ''};
  },

  /**
   * Show/hide send button
   */
  componentDidUpdate: function() {
    if (this.state.value.length > 0) {
      this.props.showSend()
    } else {
      this.props.hideSend()
    }
  },

  render: function() {
    return (
      <div className="messageFormContainer">
        <div className="messageFormTextarea">
          <textarea onChange={this.handleInput} value={this.state.value} placeholder="write message.." ref={(ref) => this._text = ref}></textarea>
          <div className="textarea-size" ref="textAreaSize">{this.state.value+'\n'}</div>
        </div>
      </div>
    )
  }
})

module.exports = ChatTextArea
