
/**
 * Emoticons to add to generated messages
 */
var emots = [
  ':)',
  ':(',
  ':p',
]

/**
 * User names to be used
 */
var users = [
  'Elly Mcveigh',
  'Marti Minick',
  'Heriberto Renteria',
  'Jenniffer Eldred',
  'Myrtle Yochum',
  'Inez Moulden',
  'Enrique Currence',
  'Virgie Desrosiers',
  'Darron Touchton',
  'Yesenia Jeffries',
  'Madelene Schuman',
  'Omar Wrigley',
  'Luise Petrosino',
  'Celesta Batista',
  'Cara Gulotta',
  'Deborah Greenwalt',
  'Aja Leday',
  'Helena Bronk',
  'Marylynn Wickwire',
  'Ute Brackin'
]

/**
 * Sentences to form messages
 */
var sentences = [
  'Check back tomorrow; I will see if the book has arrived.',
  'The book is in front of the table.',
  'She wrote him a long letter, but he didn\'t read it.',
  'She did not cheat on the test, for it was not the right thing to do.',
  'Writing a list of random sentences is harder than I initially thought it would be.',
  'She folded her handkerchief neatly.',
  'They got there early, and they got really good seats.',
  'Sixty-Four comes asking for bread.',
  'Tom got a small piece of pie.',
  'We have a lot of rain in June.',
  'The body may perhaps compensates for the loss of a true metaphysics.',
  'Please wait outside of the house.',
  'Wow, does that work?',
  'The quick brown fox jumps over the lazy dog.',
  'She only paints with bold colors; she does not like pastels.',
  'Lets all be unique together until we realise we are all the same.',
  'Hurry!',
  'Don\'t step on the broken glass.',
  'We need to rent a room for our party.',
  'How was the math test?',
  'Joe made the sugar cookies; Susan decorated them.',
  'This is a Japanese doll.',
  'Cats are good pets, for they are clean and are not noisy.',
  'She was too short to see over the fence.',
  'He didn’t want to go to the dentist, yet he went anyway.',
  'This is the last random sentence I will be writing and I am going to stop mid-sent',
  'Is it free?',
  'When I was little I had a car door slammed shut on my hand. I still remember it quite vividly.',
  'Should we start class now, or should we wait for everyone to get here?',
  'Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.',
  'The river stole the gods.',
  'Someone I know recently combined Maple Syrup & buttered Popcorn thinking it would taste like caramel popcorn. It didn’t and they don’t recommend anyone else do it either.',
  'If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds.',
  'He told us a very exciting adventure story.',
  'The stranger officiates the meal.',
  'Wednesday is hump day, but has anyone asked the camel if he’s happy about it?',
  'The sky is clear; the stars are twinkling.',
  'He said he was not there yesterday; however, many people saw him there.',
  'It was getting dark, and we weren’t there yet.',
  'The clock within this blog and the clock on my laptop are 1 hour different from each other.',
  'I currently have 4 windows open up… and I don’t know why.',
  'I checked to make sure that he was still alive.',
  'I will never be this young again. Ever. Oh damn… I just got older.',
  'I am never at home on Sundays.',
  'She did her best to help him.',
  'Everyone was busy, so I went to the movie alone.',
  'I\'d rather be a bird than a fish.',
  'I want more detailed information.',
  'I think I will buy the red car, or I will lease the blue one.',
  'What was the person thinking when they discovered cow’s milk was fine for human consumption… and why did they do it in the first place!?',
  'If I don’t like something, I’ll stay away from it.',
  'The waves were crashing on the shore; it was a lovely sight.',
  'There was no ice cream in the freezer, nor did they have money to go to the store.',
  'I really want to go to work, but I am too sick to drive.',
  'He turned in the research paper on Friday; otherwise, he would have not passed the class.',
  'Two seats were vacant.',
  'I am counting my calories, yet I really want dessert.',
  'Last Friday in three week’s time I saw a spotted striped blue worm shake hands with a legless lizard.',
  'She always speaks to him in a loud voice.',
  'She borrowed the book from him many years ago and hasn\'t yet returned it.',
  'Let me help you with your baggage.',
  'Rock music approaches at high velocity.',
  'The shooter says goodbye to his love.',
  'I want to buy a onesie… but know it won’t suit me.',
  'If the Easter Bunny and the Tooth Fairy had babies would they take your teeth and leave chocolate for you?',
  'The old apple revels in its authority.',
  'A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.',
  'Christmas is coming.',
  'The memory we used to share is no longer coherent.',
  'Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.',
  'I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.',
  'The lake is a long way from here.',
  'I often see the time 11:11 or 12:34 on clocks.',
  'We have never been to Asia, nor have we visited Africa.',
  'Yeah, I think it\'s a good environment for learning English.',
  'I love eating toasted cheese and tuna sandwiches.',
  'She advised him to come back at once.',
  'I hear that Nancy is very pretty.',
  'The mysterious diary records the voice.',
  'I would have gotten the promotion, but my attendance wasn’t good enough.',
  'Abstraction is often one floor above you.',
  'Malls are great places to shop; I can find everything I need under one roof.',
  'She works two jobs to make ends meet; at least, that was her reason for not having time to join us.',
  'If Purple People Eaters are real… where do they find purple people to eat?',
  'I am happy to take your donation; any amount will be greatly appreciated.',
  'Where do random thoughts come from?',
  'A song can make or ruin a person’s day if they let it get to them.',
  'Mary plays the piano.',
  'There were white out conditions in the town; subsequently, the roads were impassable.',
  'He ran out of money, so he had to stop playing poker.',
  'A glittering gem is not enough.',
  'Italy is my favorite country; in fact, I plan to spend two weeks there next year.',
  'My Mum tries to be cool by saying that she likes all the same things that I do.'
]

/**
 * Helper to combine a specific amount of items from an array into a string
 */
var randomElements = function(array,amount) {
  var rv = ''
  for (var i=0;i<amount;i++) {
    if (i > 0) rv += '\n'
    rv += array[Math.floor(Math.random()*array.length)]
  }
  return rv
}

/**
 * Helper to form random sentences
 */
var randomSentences = function(amount) {
  var rv = ''
  for (var i=0;i<amount;i++) {
    if (i > 0) rv += '\n'
    rv += sentences[Math.floor(Math.random()*sentences.length)]
    if (Math.random() > 0.75) rv += randomElements(emots,1)
  }
  return rv  
}

/**
 * Helper to get an integer between min (incl) and max (excl)
 */
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Generates threads and messages into them
 */
var ChatGenerator = {
  generateMessagesAndThreads: function(amount,threadcount) {

    var messages = []
    var threads = []

    for (var i=0;i<threadcount;i++) {
      threads.push({
        id: i,
        participants: randomElements(users,getRandomInt(1,4)).split('\n').concat('You')
      })
    }

    for (var n=0,thread; thread=threads[n];n++) {
      for (var i=0;i<getRandomInt(1,amount);i++) {
        var who = i == 0 ? 0 : thread.participants.length
        var message = {
          messageId: 'message_'+i,
          threadId: 'thread_'+thread.id,
          author: thread.participants[getRandomInt(0,who)],
          text: randomSentences(getRandomInt(1,4)),
          image: null,
          timestamp: Date.now()-getRandomInt(10000,86400000*14),
        }
        messages.push(message)
      }
    }

    return messages;
  },
}

module.exports = ChatGenerator
