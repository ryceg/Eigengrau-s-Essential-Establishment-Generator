import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

export const halfling: RaceTrait = {
  muscleMass: 9,
  bmiModifier: 703,
  ageTraits: {
    'ageDescriptors': [
      [230, 'ancient'],
      [200, 'incredibly elderly'],
      [180, 'vulnerably elderly'],
      [150, 'withered'],
      [130, 'elderly'],
      [110, 'weathered'],
      [100, 'aged'],
      [90, 'old'],
      [80, 'middle aged'],
      [60, 'middle aged'],
      [50, 'early middle aged'],
      [40, 'adult'],
      [35, 'mid thirties'],
      [32, 'earlyish thirties'],
      [30, 'prime adult aged'],
      [26, 'young adult'],
      [24, 'youthful adult'],
      [22, 'relatively young'],
      [20, 'surprisingly young'],
      [19, 'nineteen year old'],
      [18, 'barely adult aged'],
      [17, 'late teenager'],
      [16, 'teenager'],
      [15, 'young teenager'],
      [14, 'adolescent'],
      [12, 'prepubescent'],
      [10, 'child'],
      [8, 'young child'],
      [6, 'toddler'],
      [0, 'newborn']
    ],
    'elderly': {
      baseAge: 65,
      ageModifier: () => dice(3, 10)
    },
    'settled adult': {
      baseAge: 30,
      ageModifier: () => dice(3, 10)
    },
    'young adult': {
      baseAge: 16,
      ageModifier: () => dice(2, 12)
    },
    'child': {
      baseAge: 4,
      ageModifier: () => dice(2, 6)
    }
  },
  genderTraits: {
    entity: {},
    nonbinary: {

    },
    woman: {
      firstName: ['Alain', 'Andry', 'Anne', 'Bella', 'Blossom', 'Bree', 'Callie', 'Chenna', 'Cora', 'Dee', 'Dell', 'Eida', 'Eran', 'Euphamia', 'Georgina', 'Gynnie', 'Harriet', 'Jasmine', 'Jillian', 'Jo', 'Kithri', 'Lavinia', 'Lidda', 'Maegan', 'Marigold', 'Merla', 'Myria', 'Nedda', 'Nikki', 'Nora', 'Olivia', 'Paela', 'Pearl', 'Pennie', 'Philomena', 'Portia', 'Robbie', 'Rose', 'Saral', 'Seraphina', 'Shaena', 'Stacee', 'Tawna', 'Thea', 'Trym', 'Tyna', 'Vani', 'Verna', 'Wella', 'Willow'],
      beardProbability: 0,
      baseHeight: 30,
      baseWeight: 25,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(1, 1)
    },
    man: {
      firstName: ['Alton', 'Ander', 'Bernie', 'Bobbin', 'Cade', 'Callus', 'Corrin', 'Dannad', 'Danniel', 'Eddie', 'Egart', 'Eldon', 'Errich', 'Fildo', 'Finnan', 'Franklin', 'Garret', 'Garth', 'Gilbert', 'Gob', 'Harol', 'Igor', 'Jasper', 'Keith', 'Kevin', 'Lazam', 'Lerry', 'Lindal', 'Lyle', 'Merric', 'Mican', 'Milo', 'Morrin', 'Nebin', 'Nevil', 'Osborn', 'Ostran', 'Oswalt', 'Perrin', 'Poppy', 'Reed', 'Roscoe', 'Sam', 'Shardon', 'Tye', 'Ulmo', 'Wellby', 'Wendel', 'Wenner', 'Wes'],
      beardProbability: 15,
      baseHeight: 32,
      baseWeight: 25,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(1, 1)
    }
  },
  lastName: ['Appleblossom', 'Bigheart', 'Brightmoon', 'Brushgather', 'Cherrycheeks', 'Copperkettle', 'Deephollow', 'Elderberry', 'Fastfoot', 'Fastrabbit', 'Glenfellow', 'Goldfound', 'Goodbarrel', 'Goodearth', 'Goodbottle', 'Greenleaf', 'High-hill', 'Hilltopple', 'Hogcollar', 'Honeypot', 'Jamjar', 'Kettlewhistle', 'Leagallow', 'littlefoot', 'Nimblefingers', 'Porridgepot', 'Quickstep', 'Reedfellow', 'Shadowquick', 'Silvereyes', 'Smoothhands', 'Stonebridge', 'Stoutbridge', 'Stoutman', 'Strongbones', 'Sunmeadow', 'Swiftwhistle', 'Tallfellow', 'Tealeaf', 'Tenpenny', 'Thistletop', 'Thorngage', 'Tosscobble', 'Underbough', 'Underfoot', 'Warmwater', 'Whispermouse', 'Wildcloak', 'Wildheart', 'Wiseacre'],
  eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
  raceWords: {
    raceName: 'halfling',
    racePlural: 'hobbits',
    raceSingular: 'halfling',
    raceAdjective: 'halfling',
    raceLanguage: 'Halfling'
  },
  knownLanguages: ['Common', 'Halfling'],
  beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Lucky': 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
    'Brave': 'You have advantage on saving throws against being frightened.',
    'Halfling': 'Nimbleness You can move through the space of any creature that is of a size larger than yours.',
    'Naturally Stealthy': 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
  }
}
