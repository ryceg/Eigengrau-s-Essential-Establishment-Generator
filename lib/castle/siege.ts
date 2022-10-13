
interface SiegeData {
  name: {
    prefixes: string[]
    adjectives: string[]
    nouns: string[]
  }
  causedBy: string[]
  length: string[]
  event: string[]
  result: {
    invadersWin: string[]
    castleWin: string[]
    other: string[]
  }
}

export const siege: SiegeData = {
  name: {
    prefixes: [
      'The Siege of',
      'The Sacking of',
      'The Battle of',
      'The Massacre of',
      'The Invasion of',
      'The Razing of'
    ],
    adjectives: [
      'Bloody',
      'Battered',
      'Ruined',
      'Red',
      'Broken'
    ],
    nouns: [
      'Walls',
      'Gates',
      'Halls',
      'Fields',
      'Siege',
      'Massacre'
    ]
  },
  causedBy: [
    'a minor disagreement which spiraled out of hand',
    'a foreign nation wanting to gain a foothold',
    'a political disaster',
    'the murder of a noble at a feast',
    'a broken promise of marriage',
    'a warlord intent on conquering all in his path'
  ],
  length: [
    'seven long, bloody years',
    'three months',
    'two months',
    'a terrible month',
    'a horrible, dreary winter',
    'a swelteringly hot summer',
    'longer than anyone had expected',
    'a bloody two weeks',
    'just short of a fortnight',
    "for a month, followed by a week's ceasefire, which then broke into more violence",
    'half a year',
    'a winter',
    'a summer',
    'the best crop months of the year, decimating the local economy',
    'long enough for babies to have been born',
    'long enough for babes to have known nothing but the siege',
    'for too long',
    'far too long'
  ],
  event: [
    'a noble committed suicide in despair',
    'the peasants ate sawdust',
    'all of the pigs were eaten',
    'the nobles stole all the meat',
    'the peasants resorted to eating the horses',
    'a masterwork sword was crafted',
    'a composer wrote their greatest symphony',
    'the sky turned pink',
    'the rain turned red',
    "there wasn't a single drop of rain",
    'powerful wizards shot lightning bolts at each other',
    'a huge war machine was constructed to breach the walls',
    'a terrible beast began to prey on the invaders',
    'a dragon took interest in the conflict',
    'the invaders found themselves running out of food',
    'the chickens were set on fire and shot out at the invaders',
    'rotten eggs were pelted from the parapets',
    'fantastic bombs were created and lobbed from the keep',
    'a baby was born',
    'a noble girl got pregnant mysteriously',
    'all of the gold in the treasury went missing',
    'a plague ran rampant through the castle'
  ],
  result: {
    invadersWin: [
      'the invaders were victorious, and killed everyone inside',
      'the invaders won, breaking through the gates after a continuous 43 hour siege',
      'the provisions ran out, leaving the castle without any option but to surrender',
      'the castle ran out of food. They surrendered once the peasants started to cannibalise',
      'key players were killed in action, resulting in the invaders no longer being interested in attacking, leaving the castle be',
      'defenses of the castle were breached. It is rumoured that they were sabotaged',
      'the gates were breached, and the invaders took no survivors'
    ],
    castleWin: [
      "the castle's walls held, breaking the spirit of the invaders",
      'the castle was overrun, and surrendered',
      'the castle caught fire, resulting in their prompt surrender',
      'the invaders had a mutiny in their ranks, breaking the siege',
      "others came to the defender's aid, resulting in a resounding victory",
      'the invading army was called to aid another siege, leaving the castle alone',
      'a midnight covert ops killed off the invading leadership'
    ],
    other: [
      'the peasants revolted, uprising against the nobles yet still somehow managing to win the siege',
      'the nobles bartered a truce',
      'a truce was struck after hours of negotiation',
      'a stalemate became apparent, both sides having sustained heavy casualties',
      'it was a Pyrrhic victory for the invaders',
      'it was a Pyrrhic victory for the defenders',
      'a third army joined the fray, easily defeating both weary armies',
      'a hit squad of elite soldiers from another country killed the enemy leadership in exchange for coin',
      'a monster that fed on the bodies of the fallen forced a truce to be bartered in order for both sides to survive'
    ]
  }
}
