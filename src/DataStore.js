var ChatGenerator = require('./ChatGenerator')
var DateFormatter = require('./DateFormatter')

/**
 * Helper to get unique items from array with specific key
 */
var getUniques = function(array,key) {
  var flags = [], output = [], l = array.length, i;
  for( i=0; i<l; i++) {
    if( flags[array[i][key]]) continue;
    flags[array[i][key]] = true;
    output.push(array[i][key]);
  }
  return output
}

/**
 * Handles the app message data
 */
var DataStore = {
  messages : [],
  threads : [],
  listener : null,

  /**
   * Generate messages and sort them into threads
   */
  init: function() {
    this.messages = ChatGenerator.generateMessagesAndThreads(25,25)
    this.messages.sort( function(a,b){
      return b.timestamp - a.timestamp
    })

    var threadIds = getUniques(this.messages,'threadId')

    for (var i=0,thread;thread = threadIds[i];i++) {
      var threadMessages = this.messages.slice().filter(function(v){
        return v.threadId == thread
      })
      threadMessages.sort( function(a,b){
        return a.timestamp - b.timestamp
      })

      var authors = getUniques(threadMessages,'author')

      var thread = {
        id: thread,
        title: authors.filter(function(v){
          return v !== 'You'
        }).join(', '),
        messages: threadMessages,
        date: DateFormatter.format(threadMessages[threadMessages.length-1].timestamp)
      }
      this.threads.push(thread)
    }

  },

  /**
   * Post a new message
   */
  postMessage: function(message) {
    this.messages.push( message )
    //console.log(this.messages)

    for (var i=0,thread;thread=this.threads[i];i++) {
      if (thread.id === message.threadId) {
        thread.messages.push( message )
        thread.date = DateFormatter.format(message.timestamp)
        this.threads.splice(0,0,this.threads.splice(i,1)[0])
        break
      }
    }
  },

  /**
   * Returns thread list for ChatList
   */
  getListData: function() {
    return this.threads
  },

  /**
   * Returns thread data for ChatDetails
   */
  getMessageData: function(threadId) {
    return this.threads.filter( function(v) {
      return v.id === threadId
    })[0]
  }  
}

DataStore.init()

module.exports = DataStore