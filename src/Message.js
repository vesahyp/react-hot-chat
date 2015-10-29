
var React = require('react')
var ReactPropTypes = React.PropTypes;
var DateFormatter = require('./DateFormatter')

/**
 * Helper for escaping special chars
 */
function RegExpEscape(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
 * Replace map emoticon patterns to images
 */
function replaceEmoticons(text) {
  var emots = {
    ':)': 'media/Laugh.png',
    ':(': 'media/Cry.png',
    ':p': 'media/Cool.png',
    '=)': 'media/Laugh.png',
    '=(': 'media/Cry.png',
    '=p': 'media/Cool.png',
  }

  var result = text;
  var emotcode;
  var regex;

  for (emotcode in emots) {
    regex = new RegExp(RegExpEscape(emotcode), 'gi');
    result = result.replace(regex, function(match) {
      var pic = emots[match.toLowerCase()];

      if (pic != undefined) {
        return '<img src="' + pic + '"/>';
      } else {
        return match;
      }
    });
  }

  return result;    
}

/**
 * A message in MessageList
 */
var Message = React.createClass({

  propTypes: {
    timestamp: ReactPropTypes.number.isRequired,
    author: React.PropTypes.string,
    showAuthor: React.PropTypes.bool,
    image: React.PropTypes.string
  },

  /**
   * Replace emoticons and newlines in message content
   */
  rawMarkup: function() {
    return { __html: this.props.children ? replaceEmoticons(this.props.children).replace(/\r?\n|\r/g,'<br>') : '' }
  },
  render: function() {
    return(
      <div className="message">
        {this.props.showAuthor ?
        <span className="messageAuthor">
          {this.props.author}
        </span>
        : null}
        <div className="messageContainer">
          <div className={this.props.author === 'You' ? 'messageContentYou' : 'messageContent'}>
            {this.props.image ? <img className="messageImage" src={this.props.image}/> : null}
            <div className="messageTextContent" dangerouslySetInnerHTML={this.rawMarkup()}/>
          </div>
          <span className="messageTime">
            {DateFormatter.format(this.props.timestamp)}
          </span>
        </div>
      </div>
    );
  }
});

module.exports = Message
