import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

export const dwarf: RaceTrait = {
  muscleMass: 11,
  bmiModifier: 500,
  ageTraits: {
    'ageDescriptors': [
      [400, 'ancient'],
      [300, 'ancient'],
      [250, 'incredibly elderly'],
      [200, 'vulnerably elderly'],
      [190, 'withered'],
      [180, 'elderly'],
      [170, 'weathered'],
      [160, 'aged'],
      [150, 'old'],
      [140, 'middle aged'],
      [80, 'middle aged'],
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
      baseAge: 197,
      ageModifier: () => dice(3, 50)
    },
    'settled adult': {
      baseAge: 50,
      ageModifier: () => dice(3, 50)
    },
    'young adult': {
      baseAge: 15,
      ageModifier: () => dice(4, 8)
    },
    'child': {
      baseAge: 4,
      ageModifier: () => dice(3, 6)
    }
  },
  genderTraits: {
    woman: {
      firstName: ['Anbera', 'Artin', 'Audhild', 'Balifra', 'Barbena', 'Bardryn', 'Bolhild', 'Dagnal', 'Dafifi', 'Delre', 'Diesa', 'Hdeth', 'Eridred', 'Falkrann', 'Fallthra', 'Finelien', 'Gillydd', 'Gunnloa', 'Gurdis', 'Helgret', 'Helja', 'Hihna', 'Illde', 'Jarana', 'Kathra', 'Kilia', 'Kristryd', 'Liftrasa', 'Marastyr', 'Mardred', 'Morana', 'Nalaed', 'Nora', 'Nurkara', 'Orifi', 'Ovina', 'Riswynn', 'Sannl', 'Therlin', 'Thodris', 'Torbera', 'Tordrid', 'Torgga', 'Urshar', 'Valida', 'Vistra', 'Vonana', 'Werydd', 'Whurdred', 'Yurgunn'],
      beardProbability: 20,
      baseHeight: 43,
      baseWeight: 120,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    man: {
      firstName: ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Beloril', 'Brottor', 'Dain', 'Dalgal', 'Darrak', 'Delg', 'Duergath', 'Dworic', 'Eberk', 'Einkil', 'Elaim', 'Erias', 'Fallond', 'Fargrim', 'Gardain', 'Garur', 'Gimgen', 'Gimurt', 'Harbek', 'Kildrak', 'Kilvar', 'Morgran', 'Morkral', 'Nalral', 'Nordak', 'Nuraval', 'Oloric', 'Olunt', 'Orsik', 'Oskar', 'Rangfim', 'Reirak', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Thradal', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Urain', 'Veit', 'Vonbin', 'Vondal', 'Whurbin'],
      beardProbability: 96,
      baseHeight: 45,
      baseWeight: 150,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    entity: {},
    nonbinary: {
      firstName: ['Adzin', 'Dorn', 'Dorft']
    }
  },
  lastName: ['Aranore', 'Balderk', 'Battlehammer', 'Bigtoe', 'Bloodkith', 'Bofdarm', 'Brawnanvil', 'Brazzik', 'Broodfist', 'Burrowfound', 'Caebrek', 'Daerdahk', 'Dankil', 'Daraln', 'Deepdelver', 'Durthane', 'Eversharp', 'FaHack', 'Fire-forge', 'Foamtankard', 'Frostbeard', 'Glanhig', 'Goblinbane', 'Goldfinder', 'Gorunn', 'Graybeard', 'Hammerstone', 'Helcral', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Morigak', 'Orcfoe', 'Rakankrak', 'RubyEye', 'Rumnaheim', 'Silveraxe', 'Silverstone', 'Steelfist', 'Stoutale', 'Strakeln', 'Strongheart', 'Thrahak', 'Torevir', 'Torunn', 'Trollbleeder', 'Trueanvil', 'Trueblood', 'Ungart'],
  eyes: ['yellow', 'amber', 'brown', 'dark brown', 'hazel', 'green', 'blue', 'gray', 'brown', 'dark brown', 'hazel', 'green', 'blue', 'gray', 'aqua'],
  raceWords: {
    raceName: 'dwarf',
    racePlural: 'dwarves',
    raceSingular: 'dwarf',
    raceAdjective: 'dwarven',
    raceLanguage: 'Dwarven'
  },
  knownLanguages: ['Common', 'Dwarvish'],
  beard: ['scraggly beard', 'long, flowing beard', 'well-groomed beard going down to his chest', 'goatee', 'goatee that seems to be trying to level up into a beard', 'well-loved beard, with ornamental beads woven into it', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Darkvision': "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    'Dwarven Resilience': 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
    'Dwarven Combat Training': 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
    'Tool Proficiency': "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
    'Stonecunning': 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
    'Dwarven Toughness': 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
  }
}
