function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const outputInfo = {
    hanQuotes: ["It’s not my fault.", "Never tell me the odds!", "Great, kid. Don’t get cocky.", "It’s not wise to upset a Wookiee.", "Hokey religions and ancient weapons are no match for a good blaster at your side, kid.", "You know, sometimes I amaze even myself.", "What good is a reward if you ain’t around to use it? Besides, attacking that battle station is not my idea of courage. It’s more like, suicide.", "You like me because I’m a scoundrel. There aren’t enough scoundrels in your life.", "Let’s get one thing straight. I take orders from just one person: me.", "Boring conversation anyway.", "Fly casual.", "Uh, we had a slight weapons malfunction, but uh…everything’s perfectly all right now. We’re fine. We’re all fine here now, thank you. How are you?", "I’m out of it for a little while, and everyone gets delusions of grandeur!"],
    obiWanQuotes: ["In my experience there is no such thing as luck.", "Be mindful of your thoughts, they betray you.", "If you strike me down, I shall become more powerful than you can possibly imagine.", "I have the high ground.", "Use the Force.", "If you define yourself by the power to take life, the desire to dominate, to possess…then you have nothing.", "Hello there!", "These aren’t the droids you’re looking for.", "Who is more foolish? The fool or the fool who follows him?", "Remember… the Force will be with you. Always.", "You’re going to find that many of the truths we cling to depend greatly on our own point of view.", "The truth is often what we make of it; you heard what you wanted to hear, believed what you wanted to believe."],
    yodaQuotes: ["Do. Or do not. There is no try.", "You must unlearn what you have learned.", "The greatest teacher, failure is.", "Fear is the path to the dark side.", "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.", "Once you start down the dark path, forever will it dominate your destiny. Consume you, it will.", "Feel the Force!", "Size matters not. Look at me. Judge me by my size, do you?", "Control, control, you must learn control!", "In the end, cowards are those who follow the dark side.", "Difficult to see. Always in motion is the future.", "Adventure. Heh. Excitement. Heh. A Jedi craves not these things. You are reckless.", "Many of the truths that we cling to depend on our point of view.", "When you look at the dark side, careful you must be. For the dark side looks back.", "Your path you must decide.", "If no mistake you have made, losing you are. A different game you should play."]
  }
  
  // Store the quotes in an array
  let adviceToOutput = []
  
  // Iterate over the object
  for(let prop in outputInfo) {
    let optionIndex = generateRandomNumber(outputInfo[prop].length)
  
    // use the object's properties to customize the message being added to adviceToOutput  
    switch(prop) {
      case 'hanQuotes':
        adviceToOutput.push(`Han Solo thinks: "${outputInfo[prop][optionIndex]}".`)
        break
      case 'obiWanQuotes':
        adviceToOutput.push(`Obi Wan Kenobi thinks: "${outputInfo[prop][optionIndex]}".`)
        break
      case 'yodaQuotes':
        adviceToOutput.push(`Yoda thinks: "${outputInfo[prop][optionIndex]}".`)
        break
      default:
        adviceToOutput.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    const formatted = adviceToOutput.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(adviceToOutput);