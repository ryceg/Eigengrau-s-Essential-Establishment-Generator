import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

// source: Pathfinder 2e
// for details, see https://2e.aonprd.com/Ancestries.aspx?ID=20
// ratfolk names from: https://kidadl.com/baby-names/inspiration/ratfolk-names-and-last-names-with-meanings-for-your-characters

export const ratfolk: RaceTrait = {
  muscleMass: 9,
  bmiModifier: 703,
  ageTraits: {
    'ageDescriptors': [
      [65, 'ancient'],
      [60, 'incredibly elderly'],
      [58, 'vulnerably elderly'],
      [55, 'withered'],
      [53, 'elderly'],
      [50, 'weathered'],
      [48, 'aged'],
      [45, 'old'],
      [43, 'middle aged'],
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
      firstName: [
        'Chagdin',
        'Creccot',
        'Dreg',
        'Drez',
        'Glannat',
        'Gnin',
        'Irkac',
        'Jercohk',
        'Knicdahk',
        'Kot',
        'Krat',
        'Mec',
        'Sarcon',
        'Scrak',
        'Skerdihl',
        'Skrec',
        'Trenihl',
        'Zar',
        'Zerrir',
        'Zris'
      ],
      beardProbability: 0,
      baseHeight: 43,
      baseWeight: 55,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    woman: {
      firstName: [
        'Apple',
        'Ben',
        'Bessel',
        'Cloudy',
        'Ember',
        'Fhar',
        'Fres',
        'Frost',
        'Ghegge',
        'Jasper',
        'Jix',
        'Kitch',
        'Kubi',
        'Mifihm',
        'Nana',
        'Nech',
        'Nehm',
        'Rissi',
        'Russet',
        'Sif',
        'Telli',
        'Thikka',
        'Urchin',
        'Veil',
        'Vhezzem',
        'Yarn',
        'Ziruhm',
        'Zitch'
      ],
      beardProbability: 0,
      baseHeight: 43,
      baseWeight: 50,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    man: {
      firstName: [
        'Chigveg',
        'Djir',
        'Dolf',
        'Drer',
        'Grim',
        'Jan',
        'Knoz',
        'Lefty',
        'Moon',
        'Ninnec',
        'Ondam',
        'Pearl',
        'Rerdahl',
        'Rikkan',
        'Scengeq',
        'Sehl',
        'Shadow',
        'Skavvag',
        'Skivven',
        'Tamoq',
        'Timoc',
        'Twister',
        'Wax'
      ],
      beardProbability: 0,
      baseHeight: 45,
      baseWeight: 55,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(3, 6)
    }
  },
  lastName: [
    'Caskstride',
    'Deadstar',
    'Fogsky',
    'Fordreamer',
    'Havenbraid',
    'Mourntrack',
    'Oatsnarl',
    'Solidhorn',
    'Sternlance',
    'Warbreath'
  ],
  eyes: ['green', 'blue', 'gray', 'aqua', 'purple', 'gold', 'yellow', 'amber', 'brown', 'dark brown', 'hazel', 'red', 'blood red', 'dark red', 'black'],
  raceWords: {
    raceName: 'ratfolk',
    racePlural: 'ratfolk',
    raceSingular: 'ratfolk',
    raceAdjective: 'ratfolkin',
    raceLanguage: 'Ysoki'
  },
  knownLanguages: ['Common', 'Ratfolk'],
  beard: ['scraggly beard', 'long, flowing beard', 'goatee', 'goatee that seems to be trying to level up into a beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Low-Light Vision': 'Accustomed to life underground, you have superior vision in dim conditions. You can see in dim light as though it were bright light, so you ignore the concealed condition due to dim light.'
  }
}
