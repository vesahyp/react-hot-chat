
/**
 * Helper to format timestamps
 */
var DateFormatter = {
  format: function(timestamp) {
    var timestamp = new Date(timestamp)
    var dateparts = timestamp.toDateString().split(' ')
    var timesince = (Date.now()-timestamp)/(1000*60*60*24)
    return timesince < 1 ? ('0'+timestamp.getHours()).substr(-2) + ':' + ('0'+timestamp.getMinutes()).substr(-2) : (timesince < 7 ? dateparts[0] : dateparts[1]+'.'+dateparts[2])
  }
}

module.exports = DateFormatter