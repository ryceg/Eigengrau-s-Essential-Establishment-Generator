import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

export const lizardfolk: RaceTrait = {
  muscleMass: 12,
  bmiModifier: 600,
  viableBreedingPartners: ['lizardfolk'],
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
      baseAge: 60,
      ageModifier: () => dice(3, 10)
    },
    'settled adult': {
      baseAge: 30,
      ageModifier: () => dice(3, 15)
    },
    'young adult': {
      baseAge: 15,
      ageModifier: () => dice(3, 6)
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
      firstName: ['Achuak', 'Aesthyr', 'Athear', 'Caesin', 'Darastrix', 'Edar', 'Irhtos', 'Isk', 'Jhank', 'Kepesk', 'Kethend', 'Kosj', 'Kothar', 'Mirik', 'Othokent', 'Throden', 'Usk', 'Ulhar', 'Vignar', 'Vorel'],
      beardProbability: 0,
      baseHeight: 65,
      baseWeight: 200,
      heightModifier: () => dice(2, 10),
      weightModifier: () => dice(2, 6)
    },
    man: {
      firstName: ['Achuak', 'Aryte', 'Arytiss', 'Baeshra', 'Darastrix', 'Garurt', 'Jhank', 'Kepesk', 'Korth', 'Kosj', 'Litrix', 'Mirik', 'Othokent', 'Sauriv', 'Thurkear', 'Usk', 'Valignat', 'Vargach', 'Verthica', 'Vutha', 'Vyth'],
      beardProbability: 0,
      baseHeight: 65,
      baseWeight: 210,
      heightModifier: () => dice(2, 10),
      weightModifier: () => dice(2, 6)
    }
  },
  lastName: [''],
  eyes: ['yellow'],
  raceWords: {
    raceName: 'lizardfolk',
    racePlural: 'lizardfolk',
    raceSingular: 'lizardfolk',
    raceAdjective: 'lizardfolk',
    raceLanguage: 'Draconic'
  },
  knownLanguages: ['Common', 'Draconic'],
  beard: [''],
  abilities: {
    'Cunning Artisan': "As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as leatherworker's tools.",
    'Hold Breath': 'You can hold your breath for up to 15 minutes at a time.',
    "Hunter's Lore": 'You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival.',
    'Natural Armor': "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
    'Hungry Jaws': "In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your Constitution modifier, and you can't use this trait again until you finish a short or long rest."
  }
}
