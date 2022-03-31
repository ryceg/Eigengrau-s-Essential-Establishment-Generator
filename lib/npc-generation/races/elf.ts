import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

export const elf: RaceTrait = {
  muscleMass: 9,
  bmiModifier: 703,
  ageTraits: {
    'ageDescriptors': [
      [1000, 'ancient'],
      [900, 'incredibly elderly'],
      [800, 'vulnerably elderly'],
      [750, 'withered'],
      [700, 'elderly'],
      [650, 'weathered'],
      [600, 'aged'],
      [550, 'old'],
      [500, 'middle aged'],
      [450, 'middle aged'],
      [400, 'early middle aged'],
      [370, 'adult'],
      [350, 'mid thirties'],
      [320, 'earlyish three hundreds'],
      [300, 'prime adult aged'],
      [250, 'young adult'],
      [200, 'youthful adult'],
      [180, 'relatively young'],
      [150, 'surprisingly young'],
      [120, 'barely ten dozen years old'],
      [100, 'barely adult aged'],
      [80, 'young'],
      [60, 'youngster'],
      [40, 'adolescent'],
      [30, 'prepubescent'],
      [20, 'child'],
      [15, 'young child'],
      [10, 'toddler'],
      [0, 'newborn']
    ],
    'elderly': {
      baseAge: 650,
      ageModifier: () => dice(3, 50)
    },
    'settled adult': {
      baseAge: 450,
      ageModifier: () => dice(3, 75)
    },
    'young adult': {
      baseAge: 100,
      ageModifier: () => dice(4, 75)
    },
    'child': {
      baseAge: 10,
      ageModifier: () => dice(4, 20)
    }
  },
  genderTraits: {
    entity: {},
    nonbinary: {

    },
    woman: {
      firstName: ['Adria', 'Ahinar', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Arara', 'Baelitae', 'Bethrynna', 'Birel', 'Caelynn', 'Chaedi', 'Claira', 'Dara', 'Drusilia', 'Elama', 'Enna', 'Faral', 'Felosial', 'Hatae', 'Ielenia', 'Ilanis', 'Irann', 'Jarsali', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Maiathah', 'Malquis', 'Meriele', 'Mialee', 'Myathethil', 'Naivara', 'Quelenna', 'Quillathe', 'Ridaro', 'Sariel', 'Shanairla', 'Shava', 'Silaqui', 'Sumnes', 'Theirastra', 'Thiala', 'Tiaathque', 'Traulam', 'Vadania', 'Valanthe', 'Valna', 'Xanaphia'],
      beardProbability: 0,
      baseHeight: 61,
      baseWeight: 90,
      heightModifier: () => dice(2, 10),
      weightModifier: () => dice(1, 4)
    },
    man: {
      firstName: ['Adran', 'Aelar', 'Aerdeth', 'Ahvain', 'Aramil', 'Arannis', 'Aust', 'Azaki', 'Beiro', 'Berrian', 'Caeldrim', 'Carric', 'Dayereth', 'Dreali', 'Efieril', 'Eiravel', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis', 'Naal', 'Nutae', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae', 'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis'],
      beardProbability: 25,
      baseHeight: 62,
      baseWeight: 100,
      heightModifier: () => dice(2, 10),
      weightModifier: () => dice(1, 4)
    }
  },
  lastName: ['Aloro', 'Amakiir', 'Amastacia', 'Ariessus', 'Arnuanna', 'Berevan', 'Caerdonel', 'Caphaxath', 'Casilltenirra', 'Cithreth', 'Dalanthan', 'Eathalena', 'Erenaeth', 'Ethanasath', 'Fasharash', 'Firahel', 'Floshern', 'Galanodel', 'Goltorah', 'Hanali', 'Holimion', 'Horineth', 'Iathrana', 'temnr', 'lranapha', 'Koehlanna', 'Lathalas', 'Liadon', 'Meliamne', 'Mellerelel', 'Mystralath', 'Nalio', 'Netyoive', 'Ofandrus', 'Ostoroth', 'Othronus', 'Qualanthri', 'Raethran', 'Rothenel', 'Selevarun', 'Siannodel', 'Suithrasas', 'Sylvaranth', 'Teinithra', 'Tiltathana', 'Wasanthi', 'Withrethin', 'Xiloscient', 'Xistsrith', 'Yaeldrin'],
  eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
  raceWords: {
    raceName: 'elf',
    racePlural: 'elves',
    raceSingular: 'elf',
    raceAdjective: 'elfish',
    raceLanguage: 'Elvish'
  },
  knownLanguages: ['Common', 'Elvish'],
  beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Darkvision': "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    'Keen Senses': 'You have proficiency in the Perception skill.',
    'Fey Ancestry': "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    'Trance': "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is 'trance') While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
    'Elf Weapon Training': 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
    'Cantrip': 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.'
  }
}
