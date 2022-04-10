import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

export const tiefling: RaceTrait = {
  muscleMass: 10,
  bmiModifier: 703,
  viableBreedingPartners: ['human', 'tiefling'],
  ageTraits: {
    'ageDescriptors': [
      [100, 'ancient'],
      [90, 'incredibly elderly'],
      [80, 'vulnerably elderly'],
      [75, 'withered'],
      [70, 'elderly'],
      [65, 'weathered'],
      [60, 'aged'],
      [55, 'old'],
      [50, 'middle aged'],
      [45, 'middle aged'],
      [40, 'early middle aged'],
      [37, 'adult'],
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
      baseAge: 70,
      ageModifier: () => dice(3, 10)
    },
    'settled adult': {
      baseAge: 40,
      ageModifier: () => dice(3, 10)
    },
    'young adult': {
      baseAge: 18,
      ageModifier: () => dice(3, 12)
    },
    'child': {
      baseAge: 4,
      ageModifier: () => dice(3, 4)
    }
  },
  genderTraits: {
    entity: {},
    nonbinary: {

    },
    woman: {
      firstName: ['Akta', 'Anakis', 'Armara', 'Astaro', 'Aym', 'Azza', 'Beleth', 'Bryseis', 'Bune', 'Criella', 'Damaia', 'Decarabia', 'Ea', 'Gadreel', 'Gomory', 'Hecat', 'Ishte', 'Jezebeth', 'Kali', 'Kalista', 'Kasdeya', 'Lerissa', 'Lilith', 'Makaria', 'Manea', 'Markosian', 'Mastema', 'Namnah', 'Nemem', 'Nija', 'Orianna', 'Osah', 'Phelaia', 'Prosperine', 'Purah', 'Pyra', 'Pyranna', 'Ronobe', 'Ronwe', 'Seddit', 'Seere', 'Sekhmet', 'Semyaza', 'Shava', 'Shax', 'Sorath', 'Uzza', 'Vapula', 'Vepar', 'Verin'],
      beardProbability: 0,
      baseHeight: 54,
      baseWeight: 85,
      heightModifier: () => dice(2, 8),
      weightModifier: () => dice(2, 4)
    },
    man: {
      firstName: ['Abad', 'Ahrun', 'Akwmn', 'Anmon', 'Andram', 'Astar', 'Bmam', 'Barakas', 'Bathin', 'Cann', 'Chem', 'Chner', 'Cressel', 'Danmkos', 'Ekmnon', 'Euron', 'Fennz', 'Forcas', 'Habor', 'Iados', 'Kauon', 'Leucs', 'Manmen', 'Mantus', 'Marbas', 'Melech', 'Merihim', 'Modean', 'Mordai', 'Mormo', 'Morthos', 'Nicor', 'Nirgel', 'Oriax', 'Paynon', 'Pelaios', 'Purson', 'Qemud', 'Raam', 'Rimmon', 'Sammal', 'Skamos', 'Tethren', 'Thamuz', 'Therai', 'Valafar', 'Vassago', 'Xappan', 'Zepar', 'Zephan'],
      beardProbability: 40,
      baseHeight: 58,
      baseWeight: 120,
      heightModifier: () => dice(2, 8),
      weightModifier: () => dice(2, 4)
    }
  },
  lastName: ['Amarzian', 'Carnago', 'Domarien', 'Iscitan', 'Meluzan', 'Menetrian', 'Paradas', 'Romazi', 'Sarzan', 'Serechor', 'Shadowhorn', 'Szereban', 'Torzalan', 'Trelenus', 'Trevethor', 'Tryphon', 'Vadu', 'Vrago'],
  eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray', 'violet red', 'aquamarine', 'deep blue', 'spring green', 'sea green', 'emerald green'],
  raceWords: {
    raceName: 'tiefling',
    racePlural: 'tieflings',
    raceSingular: 'tiefling',
    raceAdjective: 'devilish',
    raceLanguage: 'Infernal'
  },
  knownLanguages: ['Common', 'Infernal'],
  beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Darkvision': "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    'Hellish Resistance': 'You have resistance to fire damage.',
    'Infernal Legacy': 'You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell; you must finish a long rest in order to cast the spell again using this trait. Once you reach 5th level, you can also cast the darkness spell; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells.'
  }
}
