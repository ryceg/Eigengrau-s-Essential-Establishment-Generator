import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

export const goblin: RaceTrait = {
  muscleMass: 9,
  bmiModifier: 703,
  ageTraits: {
    'ageDescriptors': [
      [100, 'ancient'],
      [90, 'incredibly elderly'],
      [70, 'vulnerably elderly'],
      [65, 'withered'],
      [60, 'elderly'],
      [55, 'weathered'],
      [53, 'aged'],
      [50, 'old'],
      [45, 'middle aged'],
      [40, 'middle aged'],
      [35, 'early middle aged'],
      [20, 'adult'],
      [18, 'prime adult aged'],
      [16, 'young adult'],
      [15, 'youthful adult'],
      [14, 'relatively young'],
      [13, 'surprisingly young'],
      [12, 'barely adult aged'],
      [11, 'youngster'],
      [8, 'adolescent'],
      [7, 'prepubescent'],
      [3, 'child'],
      [2, 'young child'],
      [1, 'toddler'],
      [0, 'newborn']
    ],
    'elderly': {
      baseAge: 50,
      ageModifier: () => dice(3, 4)
    },
    'settled adult': {
      baseAge: 30,
      ageModifier: () => dice(3, 10)
    },
    'young adult': {
      baseAge: 20,
      ageModifier: () => dice(4, 5)
    },
    'child': {
      baseAge: 5,
      ageModifier: () => dice(3, 4)
    }
  },
  genderTraits: {
    entity: {},
    nonbinary: {

    },
    woman: {
      firstName: [
        'Quiss',
        'Wawa',
        'Spork',
        'Turnaround',
        'Barfknees',
        'Knifey',
        'Cowshout',
        'Spank',
        'Stumpy',
        'Backwater',
        'Crowlaw',
        'Clockwind',
        'Burtlan',
        'Smee',
        'Macintosh',
        'Sexpants',
        'Crab',
        'Muckman',
        'Dirtwallow',
        'Crooknose',
        'Beetlepocket',
        'Sticky',
        'Vraaz',
        'Vick',
        'Brackish',
        'Pondjohn',
        'Waxmuncher',
        'Wicklicker',
        'Candleear',
        'Grimm',
        'Portho',
        'Odo',
        'Fleshgutter',
        'Slugsnatcher',
        'Milksalt',
        'Stewslosh',
        'Cast Iron',
        'Dutch',
        'Squirrelskinner',
        'Froggrope',
        'Topsyturvy',
        'Lardmouth',
        'Thighflayer',
        'Sinew',
        'Hypotenoose',
        'Gallow'
      ],
      beardProbability: 0,
      baseHeight: 43,
      baseWeight: 50,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    man: {
      firstName: [
        'Boblin',
        'Borkle',
        'Marrow',
        'Tododon',
        'Sparkmack',
        'Svish',
        'Mogglewog',
        'Bendigo',
        'Jare',
        'Peacho',
        'Lock',
        'Shock',
        'Barrel',
        'Snik',
        'Snak',
        'Gordo',
        'Nipmonger',
        'Riddle',
        'Spip',
        'Kaa',
        'Bonegrundle',
        'Yaxmax',
        'Tamborine',
        'Riggity',
        'Fishspleen',
        'Bladder Dan',
        'Mumblemorg',
        'Piss Jar',
        'Kettle',
        'Gnogin',
        'Eee',
        'Rattrap',
        'Bigsmalls',
        'Pork',
        'Fwip',
        'Gong',
        'Zaza',
        'Meeg',
        'Meeg Two',
        'Meeg Three',
        'Spud',
        'Uvano',
        'Pingpang',
        'Bowel',
        'Ham',
        'Gritgrash',
        'Countbean',
        'Sap Sam',
        'Leek Leek',
        'Bwob',
        'Parsnip Jr.',
        'Parsnip Sr,',
        'Fat Cat',
        'Eyemasher'
      ],
      beardProbability: 24,
      baseHeight: 45,
      baseWeight: 55,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(3, 6)
    }
  },
  lastName: [
    'Blackbug',
    'Dizkat',
    'Fatbrag',
    'Mousebones',
    'Bloodbug',
    'Bickdig',
    'Moutgat',
    'Gutmouse',
    'Morkdog',
    'Digbit',
    'Ziktag',
    'Zotpot',
    'Zitpit',
    'Zoop',
    'Zoopoop',
    'Mazz',
    'Mazztazz',
    'Morkdork',
    'Gork',
    'Flork',
    'Hork',
    'Dork',
    'Zork',
    'Lork',
    'Dikzat',
    'Zokdit'
  ],
  eyes: ['yellow', 'amber', 'brown', 'dark brown', 'hazel', 'red', 'blood red', 'dark red'],
  raceWords: {
    raceName: 'goblin',
    racePlural: 'goblins',
    raceSingular: 'goblin',
    raceAdjective: 'goblinoid',
    raceLanguage: 'Goblin'
  },
  knownLanguages: ['Common', 'Goblin'],
  beard: ['scraggly beard', 'long, flowing beard', 'goatee', 'goatee that seems to be trying to level up into a beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    Darkvision: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
  }
}
