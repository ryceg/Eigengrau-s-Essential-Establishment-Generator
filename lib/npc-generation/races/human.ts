import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

export const human: RaceTrait = {
  muscleMass: 10,
  bmiModifier: 703,
  viableBreedingPartners: ['human', 'elf', 'orc', 'half-elf', 'half-orc', 'tiefling'],
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
      baseAge: 65,
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
      beardProbability: 0,
      baseHeight: 53,
      baseWeight: 85,
      heightModifier: () => dice(2, 10),
      weightModifier: () => dice(2, 4),
      firstName: ['Abigayl', 'Aebria', 'Aeobreia', 'Breia', 'Aedria', 'Aodreia', 'Dreia', 'Aeliya', 'Aliya', 'Aella', 'Aemilya', 'Aemma', 'Aemy', 'Amy', 'Ami', 'Aeria', 'Arya', 'Aeva', 'Aevelyn', 'Evylann', 'Alaexa', 'Alyxa', 'Alina', 'Aelina', 'Aelinea', 'Allisann', 'Allysann', 'Alyce', 'Alys', 'Alysea', 'Alyssia', 'Aelyssa', 'Amelya', 'Maelya', 'Andreya', 'Aendrea', 'Arianna', 'Aryanna', 'Arielle', 'Aryell', 'Ariella', 'Ashlena', 'Aurora', 'Avaery', 'Avyrie', 'Bella', 'Baella', 'Brooklinea', 'Bryanna', 'Brynna', 'Brinna', 'Caemila', 'Chloe', 'Chloeia', 'Claira', 'Clayre', 'Clayra', 'Delyla', 'Dalyla', 'Elisybeth', 'Aelisabeth', 'Ellia', 'Ellya', 'Elyana', 'Eliana', 'Eva', 'Falyne', 'Genaesis', 'Genaesys', 'Gianna', 'Jianna', 'Janna', 'Graece', 'Grassa', 'Haenna', 'Hanna', 'Halya', 'Harperia', 'Peria', 'Hazyl', 'Hazel', 'Jasmyne', 'Jasmine', 'Jocelyne', 'Joceline', 'Celine', 'Kaelia', 'Kaelya', 'Kathryne', 'Kathrine', 'Kayla', 'Kaila', 'Kymber', 'Kimbera', 'Layla', 'Laylanna', 'Leia', 'Leya', 'Leah', 'Lilia', 'Lylia', 'Luna', 'Maedisa', 'Maelania', 'Melania', 'Maya', 'Mya', 'Myla', 'Milae', 'Naomi', 'Naome', 'Natalya', 'Talya', 'Nathylie', 'Nataliae', 'Thalia', 'Nicola', 'Nikola', 'Nycola', 'Olivya', 'Alivya', 'Penelope', 'Paenelope', 'Pynelope', 'Rianna', 'Ryanna', 'Ruby', 'Ryla', 'Samaentha', 'Samytha', 'Sara', 'Sarah', 'Savannia', 'Scarletta', 'Sharlotta', 'Caerlotta', 'Sophya', 'Stella', 'Stylla', 'Valentyna', 'Valerya', 'Valeria', 'Valia', 'Valea', 'Victorya', 'Vilettia', 'Ximena', 'Imaena', 'Ysabel', 'Zoe', 'Zoeia', 'Zoea', 'Zoesia']
    },
    man: {
      beardProbability: 40,
      baseHeight: 58,
      baseWeight: 120,
      heightModifier: () => dice(2, 10),
      weightModifier: () => dice(2, 4),
      firstName: ['Aaryn', 'Aaro', 'Aarus', 'Abramus', 'Abrahm', 'Abyl', 'Abelus', 'Adannius', 'Adanno', 'Aedam', 'Adym', 'Adamus', 'Aedrian', 'Aedrio', 'Aedyn', 'Aidyn', 'Aelijah', 'Elyjah', 'Aendro', 'Androe', 'Aenry', 'Hynroe', 'Hynrus', 'Aethan', 'Aethyn', 'Aevan', 'Evyn', 'Evanus', 'Alecks', 'Alyx', 'Alexandyr', 'Xandyr', 'Alyn', 'Alaen', 'Andrus', 'Aendrus', 'Anglo', 'Aenglo', 'Anglus', 'Antony', 'Antonyr', 'Astyn', 'Astinus', 'Axelus', 'Axyl', 'Benjamyn', 'Benjamyr', 'Braidyn', 'Brydus', 'Braddeus', 'Brandyn', 'Braendyn', 'Bryus', 'Bryne', 'Bryn', 'Branus', 'Caeleb', 'Caelyb', 'Caerlos', 'Carlus', 'Cameryn', 'Camerus', 'Cartus', 'Caertero', 'Charlus', 'Chaerles', 'Chyrles', 'Christophyr', 'Christo', 'Chrystian', 'Chrystan', 'Connorus', 'Connyr', 'Daemian', 'Damyan', 'Daenyel', 'Danyel', 'Davyd', 'Daevo', 'Dominac', 'Dylaen', 'Dylus', 'Elius', 'Aeli', 'Elyas', 'Helius', 'Helian', 'Emilyan', 'Emilanus', 'Emmanus', 'Emynwell', 'Ericus', 'Eryc', 'Eryck', 'Ezekius', 'Zeckus', 'Ezekio', 'Ezrus', 'Yzra', 'Gabrael', 'Gaebriel', 'Gael', 'Gayl', 'Gayel', 'Gaeus', 'Gavyn', 'Gaevyn', 'Goshwa', 'Joshoe', 'Graysus', 'Graysen', 'Gwann', 'Ewan', 'Gwyllam', 'Gwyllem', 'Haddeus', 'Hudsyn', 'Haesoe', 'Haesys', 'Haesus', 'Handus', 'Handyr', 'Hantus', 'Huntyr', 'Haroldus', 'Haryld', 'Horgus', 'Horus', 'Horys', 'Horyce', 'Hosea', 'Hosius', 'Iaen', 'Yan', 'Ianus', 'Ivaen', 'Yvan', 'Jaecoby', 'Jaecob', 'Jaeden', 'Jaedyn', 'Jaeremiah', 'Jeremus', 'Jasyn', 'Jaesen', 'Jaxon', 'Jaxyn', 'Jaxus', 'Johnus', 'Jonus', 'Jonaeth', 'Jonathyn', 'Jordus', 'Jordyn', 'Josaeth', 'Josephus', 'Josaeus', 'Josayah', 'Jovanus', 'Giovan', 'Julyan', 'Julyo', 'Jyck', 'Jaeck', 'Jacus', 'Kaevin', 'Kevyn', 'Vinkus', 'Laevi', 'Levy', 'Levius', 'Landyn', 'Laendus', 'Leo', 'Leonus', 'Leonaerdo', 'Leonyrdo', 'Lynardus', 'Lincon', 'Lyncon', 'Linconus', 'Logaen', 'Logus', 'Louis', 'Lucius', 'Lucae', 'Lucaen', 'Lucaes', 'Lucoe', 'Lucus', 'Lyam', 'Maeson', 'Masyn', 'Maetho', 'Mathoe', 'Matteus', 'Matto', 'Maxus', 'Maximus', 'Maximo', 'Maxymer', 'Mychael', 'Mygwell', 'Miglus', 'Mythro', 'Mithrus', 'Naemo', 'Naethyn', 'Nathanus', 'Naethynel', 'Nicholaes', 'Nycholas', 'Nicholys', 'Nicolus', 'Nolyn', 'Nolanus', 'Olivyr', 'Alivyr', 'Olivus', 'Oscarus', 'Oscoe', 'Raen', 'Ryn', 'Robertus', 'Robett', 'Bertus', 'Romyn', 'Romanus', 'Ryderus', 'Ridyr', 'Samwell', 'Saemuel', 'Santegus', 'Santaegus', 'Sybasten', 'Bastyen', 'Tago', 'Aemo', 'Tagus', 'Theodorus', 'Theodus', 'Thaeodore', 'Thomys', 'Thomas', 'Tommus', 'Tylus', 'Tilyr', 'Uwyn', 'Oewyn', 'Victor', 'Victyr', 'Victorus', 'Vincynt', 'Vyncent', 'Vincentus', 'Wyttus', 'Wyaett', 'Xavius', 'Havius', 'Xavyer', 'Yago', 'Tyago', 'Tyego', 'Ysaac', 'Aisaac', 'Ysaiah', 'Aisiah', 'Siahus', 'Zacharus', 'Zachar', 'Zachaery']
    }
  },
  lastName: ['Alder', 'Ash', 'Ashdown', 'Atwood', 'Barnes', 'Becker', 'Berry', 'Briar', 'Briggs', 'Brock', 'Brook', 'Bundy', 'Burnside', 'Burroughs', 'Bush', 'Butcher', 'Butler', 'Clay', 'Court', 'Cox', 'Croft', 'Cross', 'Crump', 'Dale', 'Deane', 'Delaney', 'Dike', 'Dodd', 'Ford', 'Forrest', 'Fox', 'Freeman', 'Garside', 'Gorsuch', 'Graves', 'Green', 'Greeves', 'Gross', 'Grove', 'Grover', 'Hall', 'Hawthorne', 'Hazel', 'Head', 'Heather', 'Hill', 'Holley', 'Holmes', 'Holt', 'Homer', 'Hooke', 'Hope', 'House', 'Howe', 'Hume', 'Hyde', 'Johnston', 'Kaye', 'Keats', 'Kerry', 'Kirk', 'Lamb', 'Layne', 'Lea', 'Lowell', 'March', 'Marsh', 'Marshal', 'Martin', 'May', 'Millerchip', 'Mills', 'Moore', 'Newby', 'Paine', 'Paxton', 'Perrin', 'Pike', 'Pitt', 'Preacher', 'Provost', 'Purple', 'Ridge', 'Rock', 'Rose', 'Rowen', 'Sangster', 'Sellers', 'Shaw', 'Short', 'Thorne', 'Underwood', 'Walsh', 'Wells', 'West', 'Whitney', 'Wilde', 'Wood', 'Wragge', 'Wynne'],
  eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
  raceWords: {
    raceName: 'human',
    racePlural: 'humans',
    raceSingular: 'person',
    raceAdjective: 'human',
    raceLanguage: 'Common'
  },
  knownLanguages: ['Common'],
  beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Ability Score': 'Increase Two different ability scores of your choice increase by 1.',
    'Skills': 'You gain proficiency in one skill of your choice.',
    'Feat': 'You gain one feat of your choice.'
  }
}
