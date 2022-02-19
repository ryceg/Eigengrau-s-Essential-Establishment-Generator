import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

export const halfElf: RaceTrait = {
  muscleMass: 10,
  bmiModifier: 703,
  viableBreedingPartners: ['human', 'elf', 'half-elf', 'half-orc'],
  ageTraits: {
    'ageDescriptors': [
      [220, 'positively ancient'],
      [200, 'ancient'],
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
      baseAge: 150,
      ageModifier: () => dice(3, 10)
    },
    'settled adult': {
      baseAge: 50,
      ageModifier: () => dice(3, 50)
    },
    'young adult': {
      baseAge: 20,
      ageModifier: () => dice(3, 10)
    },
    'child': {
      baseAge: 6,
      ageModifier: () => dice(3, 4)
    }
  },
  genderTraits: {
    entity: {},
    nonbinary: {

    },
    woman: {
      firstName: ['Abigayl', 'Aebria', 'Aeobreia', 'Breia', 'Aedria', 'Aodreia', 'Dreia', 'Aeliya', 'Aliya', 'Aella', 'Aemilya', 'Aemma', 'Aemy', 'Amy', 'Ami', 'Aeria', 'Arya', 'Aeva', 'Aevelyn', 'Evylann', 'Alaexa', 'Alyxa', 'Alina', 'Aelina', 'Aelinea', 'Allisann', 'Allysann', 'Alyce', 'Alys', 'Alysea', 'Alyssia', 'Aelyssa', 'Amelya', 'Maelya', 'Andreya', 'Aendrea', 'Arianna', 'Aryanna', 'Arielle', 'Aryell', 'Ariella', 'Ashlena', 'Aurora', 'Avaery', 'Avyrie', 'Bella', 'Baella', 'Brooklinea', 'Bryanna', 'Brynna', 'Brinna', 'Caemila', 'Chloe', 'Chloeia', 'Claira', 'Clayre', 'Clayra', 'Delyla', 'Dalyla', 'Elisybeth', 'Aelisabeth', 'Ellia', 'Ellya', 'Elyana', 'Eliana', 'Eva', 'Falyne', 'Genaesis', 'Genaesys', 'Gianna', 'Jianna', 'Janna', 'Graece', 'Grassa', 'Haenna', 'Hanna', 'Halya', 'Harperia', 'Peria', 'Hazyl', 'Hazel', 'Jasmyne', 'Jasmine', 'Jocelyne', 'Joceline', 'Celine', 'Kaelia', 'Kaelya', 'Kathryne', 'Kathrine', 'Kayla', 'Kaila', 'Kymber', 'Kimbera', 'Layla', 'Laylanna', 'Leia', 'Leya', 'Leah', 'Lilia', 'Lylia', 'Luna', 'Maedisa', 'Maelania', 'Melania', 'Maya', 'Mya', 'Myla', 'Milae', 'Naomi', 'Naome', 'Natalya', 'Talya', 'Nathylie', 'Nataliae', 'Thalia', 'Nicola', 'Nikola', 'Nycola', 'Olivya', 'Alivya', 'Penelope', 'Paenelope', 'Pynelope', 'Rianna', 'Ryanna', 'Ruby', 'Ryla', 'Samaentha', 'Samytha', 'Sara', 'Sarah', 'Savannia', 'Scarletta', 'Sharlotta', 'Caerlotta', 'Sophya', 'Stella', 'Stylla', 'Valentyna', 'Valerya', 'Valeria', 'Valia', 'Valea', 'Victorya', 'Vilettia', 'Ximena', 'Imaena', 'Ysabel', 'Zoe', 'Zoeia', 'Zoea', 'Zoesia'],
      beardProbability: 0,
      baseHeight: 61,
      baseWeight: 90,
      heightModifier: () => dice(2, 8),
      weightModifier: () => dice(2, 4)
    },
    man: {
      firstName: ['Adran', 'Aelar', 'Aerdeth', 'Ahvain', 'Aramil', 'Arannis', 'Aust', 'Azaki', 'Beiro', 'Berrian', 'Caeldrim', 'Carric', 'Dayereth', 'Dreali', 'Efieril', 'Eiravel', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis', 'Naal', 'Nutae', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae', 'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis'],
      beardProbability: 43,
      baseHeight: 62,
      baseWeight: 110,
      heightModifier: () => dice(2, 8),
      weightModifier: () => dice(2, 4)
    }
  },
  lastName: ['Alder', 'Ash', 'Ashdown', 'Atwood', 'Barnes', 'Becker', 'Berry', 'Briar', 'Briggs', 'Brock', 'Brook', 'Bundy', 'Burnside', 'Burroughs', 'Bush', 'Butcher', 'Butler', 'Clay', 'Court', 'Cox', 'Croft', 'Cross', 'Crump', 'Dale', 'Deane', 'Delaney', 'Dike', 'Dodd', 'Ford', 'Forrest', 'Fox', 'Freeman', 'Garside', 'Gorsuch', 'Graves', 'Green', 'Greeves', 'Gross', 'Grove', 'Grover', 'Hall', 'Hawthorne', 'Hazel', 'Head', 'Heather', 'Hill', 'Holley', 'Holmes', 'Holt', 'Homer', 'Hooke', 'Hope', 'House', 'Howe', 'Hume', 'Hyde', 'Johnston', 'Kaye', 'Keats', 'Kerry', 'Kirk', 'Lamb', 'Layne', 'Lea', 'Lowell', 'March', 'Marsh', 'Marshal', 'Martin', 'May', 'Millerchip', 'Mills', 'Moore', 'Newby', 'Paine', 'Paxton', 'Perrin', 'Pike', 'Pitt', 'Preacher', 'Provost', 'Purple', 'Ridge', 'Rock', 'Rose', 'Rowen', 'Sangster', 'Sellers', 'Shaw', 'Short', 'Thorne', 'Underwood', 'Walsh', 'Wells', 'West', 'Whitney', 'Wilde', 'Wood', 'Wragge', 'Wynne'],
  eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
  raceWords: {
    raceName: 'half-elf',
    racePlural: 'half-elves',
    raceSingular: 'half-elf',
    raceAdjective: 'elfish',
    raceLanguage: 'Elven'
  },
  knownLanguages: ['Common', 'Elvish'],
  beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Darkvision': "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    'Fey Ancestry': "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    'Skill Versatility': 'You gain proficiency in two skills of your choice.',
    'Languages': 'You can speak, read, and write Common, Elvish, and one extra language of your choice.'
  }
}
