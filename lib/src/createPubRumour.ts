import { random } from './random'

export function createPubRumour () {
  const origin = random([
    'a child',
    'a fat merchant',
    'a priest',
    'a sailor',
    'a soldier',
    'a magician',
    'a noble',
    'a rogue',
    'a crazy monk',
    'a drunken farmer',
    'the butcher',
    'the tailor'
  ])

  const complication = random(getComplications(origin))
  const discovery = random(getDiscoveries(complication))
  const result = random(getResults(discovery))

  const opening = random([
    'Did you hear?',
    'Did you hear the news?',
    'Did you hear about the news?',
    'Did you hear?'
  ])

  return `${opening} ${origin.toUpperFirst()} ${complication} and discovered ${discovery}, and now ${result}`
}

function getComplications (origin: string): string[] {
  if (origin === 'a child') {
    return [
      "got drunk off his dad's grog",
      'got washed out to sea',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'saw a ghost',
      'was sleepwalking',
      'walked off into the forest',
      'stole a loaf of bread from the hermit'
    ]
  }

  if (origin === 'a fat merchant') {
    return [
      'got drunk',
      'got washed out to sea',
      'went to an auction',
      'went to buy out a competitor in the next town over',
      'went to discuss trade terms in the next town over',
      'went to find a better horse for his cart',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  if (origin === 'a priest') {
    return [
      'got drunk off the sacramental wine',
      'got washed out to sea',
      'was seen in bed with the barmaid $barmaid.name',
      'was seen in the brothel',
      'accidentally made a pilgrimage to the wrong temple',
      'accidentally made a pilgrimage to the wrong god',
      'accidentally made a sacrifice to the wrong god',
      'accidentally blessed people with regular water instead of holy water',
      'got stuck on a runaway horse',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'saw a ghost',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  if (origin === 'a sailor') {
    return [
      'got drunk',
      'got drunk',
      'got really drunk',
      'got washed out to sea',
      'got washed out to sea',
      'got washed out to sea',
      'got washed out to sea',
      'went to an auction',
      'tried to abandon his ship',
      'tried to sneak one of the whores onboard his ship',
      'tried to woo the barmaid, $barmaid.name',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  if (origin === 'a soldier') {
    return [
      'got drunk',
      'got drunk',
      'got really drunk',
      'got washed out to sea',
      'went to an auction',
      'accidentally stabbed a guy',
      'accidentally insulted the lord',
      'tried to cheat one of the whores',
      'tried to woo the barmaid, $barmaid.name',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  if (origin === 'a magician') {
    return [
      'got drunk',
      'got drunk',
      'got really drunk',
      'got washed out to sea',
      'went to an auction',
      'tried to cast a tricky spell',
      'tried to show off in front of the barmaid, $barmaid.name',
      'tried to woo the barmaid, $barmaid.name',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'tried to perform an old magic spell',
      'tried to cast a spell way above his abilities',
      'found a magic item',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  if (origin === 'a noble') {
    return [
      'got drunk',
      'got drunk',
      'got really drunk',
      'got washed out to sea',
      'went to an auction',
      'was seen in the brothel',
      'tried to buy out a merchant in the next town over',
      "tried to buy the Lord's horse from the stablemaster behind his back",
      'tried to woo the barmaid, $barmaid.name',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  if (origin === 'a rogue') {
    return [
      'got drunk',
      'got drunk',
      'got really drunk',
      'got washed out to sea',
      'went to an auction',
      'accidentally stabbed a guy',
      'stabbed the wrong guy',
      'stole something from the lord',
      'accidentally insulted the lord',
      'tried to cheat one of the whores',
      'tried to woo the barmaid, $barmaid.name',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  if (origin === 'a crazy monk') {
    return [
      'got drunk',
      'got drunk',
      'got really drunk',
      'brewed something really strong',
      'got washed out to sea',
      'tried to woo the barmaid, $barmaid.name',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  if (origin === 'a drunken farmer') {
    return [
      'got drunk',
      'got drunk',
      'got really drunk',
      'brewed something really strong',
      'got washed out to sea',
      'tried to woo the barmaid, $barmaid.name',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  if (origin === 'the butcher') {
    return [
      'got drunk',
      'got drunk',
      'got really drunk',
      'was cutting up meat and found something weird',
      'was cutting up meat and found something weird',
      'was cutting up meat and found something weird',
      'was cutting up a cow which came alive',
      'got washed out to sea',
      'tried to woo the barmaid, $barmaid.name',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  if (origin === 'the tailor') {
    return [
      'got drunk',
      'got drunk',
      'got really drunk',
      'tried to circumcize a noble while he was taking his measurements',
      'got washed out to sea',
      'tried to woo the barmaid, $barmaid.name',
      'got stuck on a runaway horse',
      'found an old well',
      'disappeared for 3 days',
      'found an old tomb',
      'met a weird stranger',
      'found a magic item',
      'was sleepwalking',
      'walked off into the forest'
    ]
  }

  return ['got drunk']
}

function getDiscoveries (complication: string): string[] {
  if (complication === 'got drunk') {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a treasure map',
      'a villain thought dead, returned to life',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (complication === 'got really drunk') {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a treasure map',
      'a villain thought dead, returned to life',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane',
      'a really good reason to not drink so much'
    ]
  }

  if (complication === 'got washed out to sea') {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a treasure map',
      'a villain thought dead, returned to life',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane',
      'a type of goblin with fins'
    ]
  }

  if (complication === 'got stuck on a runaway horse') {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a treasure map',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane',
      'saddles exist for a reason'
    ]
  }

  if (complication === 'found an old well') {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a treasure map',
      'a villain thought dead, returned to life',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a bucket'
    ]
  }

  if (complication === 'disappeared for 3 days') {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a treasure map',
      'a villain thought dead, returned to life',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (complication === 'found an old tomb') {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a sleeping monster',
      'a treasure map',
      'a villain thought dead, returned to life',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (complication === 'met a weird stranger') {
    return [
      'a new venereal disease',
      'a cursed item',
      'a treasure map',
      'it was actually three midgets in a trench coat',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (complication === 'found a magic item') {
    return [
      'a new disease',
      'it was cursed',
      'a sleeping monster',
      'swords are sharp',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (complication === 'tried to woo the barmaid, $barmaid.name') {
    return [
      'a new disease',
      'a cursed item',
      'swords are sharp',
      'it was actually three midgets in a trench coat',
      'a new venereal disease',
      'a sleeping monster',
      'a treasure map',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (
    complication ===
    'tried to circumcize a noble while he was taking his measurements'
  ) {
    return [
      'a cursed item',
      'a sleeping monster',
      'a treasure map',
      'swords are sharp',
      'swords are sharp',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (complication === 'was cutting up meat and found something weird') {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a sleeping monster',
      'a treasure map',
      'a really good reason to not drink so much',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (complication === 'brewed something really strong') {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a sleeping monster',
      'a treasure map',
      'a really good reason to not drink so much',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (
    complication ===
    "tried to buy the Lord's horse from the stablemaster behind his back"
  ) {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a sleeping monster',
      'a treasure map',
      'swords are sharp',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom'
    ]
  }

  if (complication === 'tried to cheat one of the whores') {
    return [
      'a new disease',
      'a new venereal disease',
      'a cursed item',
      'a sleeping monster',
      'a sleeping monster',
      'a treasure map',
      'swords are sharp',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (complication === 'tried to cast a tricky spell') {
    return [
      'a new disease',
      'a cursed item',
      'a sleeping monster',
      'a really good reason to stop drinking so much',
      'a treasure map',
      'a villain thought dead, returned to life',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  if (complication === 'was seen in the brothel') {
    return [
      'a new disease',
      'a cursed item',
      'a new venereal disease',
      'a sleeping monster',
      'a sleeping monster',
      'a treasure map',
      'a villain thought dead, returned to life',
      'a book of secrets',
      'a key to a vast fortune',
      'a supressed truth about the ruling kingdom',
      'a door to another plane'
    ]
  }

  return [
    'a new disease',
    'a cursed item',
    'a sleeping monster',
    'a sleeping monster',
    'a treasure map',
    'a villain thought dead, returned to life',
    'a book of secrets',
    'a key to a vast fortune',
    'a supressed truth about the ruling kingdom',
    'a door to another plane'
  ]
}

function getResults (discovery: string): string[] {
  if (discovery === 'a new disease') {
    return [
      'people are disappearing!',
      'people are sick!',
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      'my bum itches!',
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  if (discovery === 'swords are sharp') {
    return [
      'people are disappearing!',
      'people are sick!',
      "there's blood everywhere!",
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  if (discovery === 'a new venereal disease') {
    return [
      'people are disappearing!',
      'people are sick!',
      "there's blood everywhere!",
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      'my bum itches!',
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  if (discovery === 'a cursed item') {
    return [
      'people are disappearing!',
      'people are sick!',
      "if you don't tell ten other people about this in ten days, you'll die!",
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      'my bum itches!',
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  if (discovery === 'a sleeping monster') {
    return [
      'people are disappearing!',
      "if you don't tell ten other people about this in ten days, you'll die!",
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  if (discovery === 'a treasure map') {
    return [
      'people are disappearing!',
      'people are sick!',
      "I'm looking for a shovel!",
      "I'm trying to get in on the action!",
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  if (discovery === 'a villain thought dead, returned to life') {
    return [
      'people are disappearing!',
      'people are sick!',
      "if you don't tell ten other people about this in ten days, you'll die!",
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  if (discovery === 'a book of secrets') {
    return [
      'people are disappearing!',
      'people are sick!',
      "if you don't tell ten other people about this in ten days, you'll die!",
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      'the word on the street is that the priest was sleeping with $barmaid.name!',
      'they found out about my hemmorhoids!',
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  if (discovery === 'a key to a vast fortune') {
    return [
      'people are disappearing!',
      'people are sick!',
      "if you don't tell ten other people about this in ten days, you'll die!",
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      "we're just looking for a lock!",
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  if (discovery === 'a supressed truth about the ruling kingdom') {
    return [
      'people are disappearing!',
      'people are sick!',
      "there's blood everywhere!",
      "if you don't tell ten other people about this in ten days, you'll die!",
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  if (discovery === 'a door to another plane') {
    return [
      'people are disappearing!',
      'people are sick!',
      "there's blood everywhere!",
      "if you don't tell ten other people about this in ten days, you'll die!",
      'the king has decreed strange new laws!',
      'the temple has issued strange new tenets!',
      'the sun might not come back up!',
      'my bum itches!',
      'people are having bad dreams every night!',
      'people are unable to sleep!',
      'people are afraid to come outside!'
    ]
  }

  return [
    'people are disappearing!',
    'people are sick!',
    "if you don't tell ten other people about this in ten days, you'll die!",
    'the king has decreed strange new laws!',
    'the temple has issued strange new tenets!',
    'the sun might not come back up!',
    'people are having bad dreams every night!',
    'people are unable to sleep!',
    'people are afraid to come outside!'
  ]
}
