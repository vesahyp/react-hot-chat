
var React = require('react')
var ReactPropTypes = React.PropTypes;

/**
 * Chat file upload button
 */
var ChatUploadButton = React.createClass({

  propTypes: {
    onUpload: React.PropTypes.func
  },

  /**
   * Handle photo button click
   */
  handlePhotos: function() {
    var upload = React.findDOMNode(this._upload)
    upload.click()
  },

  /**
   * Handle input file change. Post image if type of image
   */
  handleFileChange: function() {

    var self = this

    var upload = React.findDOMNode(this._upload)
    var files = upload.files
    for (var i = 0, file; file = files[i]; i++) {
      
      if (!file.type.match('image.*')) {
        continue;
      }
      var reader = new FileReader();
      reader.onload = (function(f) {

        return function(e) {
          self.props.onUpload( {image: e.target.result} )
        }

      })(file)
      reader.readAsDataURL(file)
    }
    upload.value = ''
  },

  render: function() {
    return (
      <a className="messageButton" onClick={this.handlePhotos}>
        <input className="messageFileUpload" type="file" accept="image/*" onChange={this.handleFileChange} ref={(ref) => this._upload = ref}/>
        {this.props.children}
      </a>
    )
  }
})

module.exports = ChatUploadButton
