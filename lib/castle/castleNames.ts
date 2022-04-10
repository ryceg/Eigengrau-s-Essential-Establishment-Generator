
interface CastleNameData {
  unique: string[]
  wordNouns: string[]
  nouns: string[]
  adjectives: string[]
  morphemes: {
    prefix: string[]
    suffix: string[]
  }
}

export const castleNames: CastleNameData = {
  unique: [
    'Falkerstone Hold',
    'Eastcairn Stronghold',
    'Wray Castle',
    'Dorgoil Palace',
    'The Fortress',
    'Castle Urrghh',
    'Darkmere Palace',
    'Guardswatch',
    'Humblerock Castle',
    'Evering Place',
    'Axiom Towers',
    'Cliffhaven Keep',
    'The Rock',
    'Dragonspire'
  ],
  wordNouns: [
    'keep',
    'castle',
    'fort',
    'fortress',
    'stronghold',
    'citadel',
    'hold'
  ],
  nouns: [
    'oak',
    'knight',
    'stone',
    'iron',
    'apple',
    'blood',
    'fire',
    'stain',
    'steel',
    'ruby',
    'river',
    'lake',
    'lamb',
    'dock',
    'cliff',
    'valor'
  ],
  adjectives: [
    'far',
    'strong',
    'high',
    'long',
    'broad',
    'brave',
    'proud',
    'dark'
  ],
  morphemes: {
    prefix: [
      'dyn',
      'latry',
      'erg',
      'di',
      'dem',
      'iso',
      'mid',
      'pre',
      'phil',
      'tel',
      'glen',
      'bre',
      'dal',
      'kin',
      'ern'
    ],
    suffix: [
      'borough',
      'crest',
      'worth',
      'buruh',
      'burg',
      'dur',
      'by',
      'ston',
      'gwyn',
      'ley',
      'ham',
      'dale',
      'burn',
      'haven',
      'bury',
      'ford',
      'stead',
      'wick',
      'ton'
    ]
  }
}
