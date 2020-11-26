import { ThresholdTable } from '../src/rollFromTable'
import { dice } from '../src/dice'

export type RaceName = 'dragonborn' | 'dwarf' | 'elf' | 'gnome' | 'half-elf' | 'halfling' | 'half-orc' | 'human' | 'tiefling' | 'goblin' | 'orc'

interface RaceTrait {
  probability: number
  muscleMass: number
  bmiModifier: number
  // TODO: code in orc as a viable "race"
  viableBreedingPartners?: string[]
  ageTraits: Record<AgeName, AgeTrait> & {
    ageDescriptors: ThresholdTable
  }
  genderTraits: Record<GenderName, GenderTrait>
  lastName: string[]
  eyes: string[]
  raceWords: {
    raceName: string,
    racePlural: string,
    raceSingular: string,
    raceAdjective: string,
    raceLanguage: string
  },
  knownLanguages: string[]
  beard: string[]
  abilities: Record<string, string>
}

export type AgeName = 'elderly' | 'settled adult' | 'young adult' | 'child'

interface AgeTrait {
  baseAge: number
  ageModifier(): number
}

export type GenderName = 'man' | 'woman'

interface GenderTrait {
  firstName: string[]
  beardProbability: number
  baseHeight: number
  baseWeight: number
  heightModifier(): number
  weightModifier(): number
}

export const raceTraits: Record<RaceName, RaceTrait> = {
  'dragonborn': {
    probability: 1,
    muscleMass: 11,
    bmiModifier: 650,
    ageTraits: {
      'ageDescriptors': [
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
        baseAge: 50,
        ageModifier: () => dice(3, 10)
      },
      'settled adult': {
        baseAge: 20,
        ageModifier: () => dice(3, 10)
      },
      'young adult': {
        baseAge: 13,
        ageModifier: () => dice(2, 4)
      },
      'child': {
        baseAge: 4,
        ageModifier: () => dice(3, 4)
      }
    },
    genderTraits: {
      woman: {
        firstName: ['Akra', 'Aasathra', 'Antrara', 'Arava', 'Biri', 'Blendaeth', 'Burana', 'Chassath', 'Daar', 'Dentratha', 'Doudra', 'Driindar', 'Eggren', 'Farideh', 'Findex', 'Furrele', 'Gesrethe', 'Gilkass', 'Harann', 'Havilar', 'Hethress', 'Hillanot', 'Jaxi', 'Jezean', 'Jheri', 'Kadana', 'Kava', 'Koflnn', 'Megren', 'Mijira', 'Mishann', 'Nala', 'Nuthra', 'Perra', 'Pogranix', 'Pyxrin', 'Quespa', 'Raiann', 'Rezena', 'Ruloth', 'Saphara', 'Savaran', 'Sora', 'Surina', 'Synthrin', 'Tatyan', 'Thava', 'Uadflt', 'Vezera', 'Zykrofl'],
        beardProbability: 100,
        baseHeight: 60,
        baseWeight: 130,
        heightModifier: () => dice(2, 8),
        weightModifier: () => dice(2, 6)
      },
      man: {
        firstName: ['Adrex', 'Arjhan', 'Azzakh', 'Balasar', 'Baradad', 'Bharash', 'Bidreked', 'Dadalan', 'Dazzazn', 'Direcris', 'Donaar', 'Fax', 'Gargax', 'Ghesh', 'Gorbundus', 'Greethen', 'Heskan', 'Hirrathak', 'Illdrex', 'Kaladan', 'Kerkad', 'Kiirith', 'Kriv', 'Maagog', 'Medrash', 'Mehen', 'Mozikth', 'Mreksh', 'Mugrunden', 'Nadarr', 'Nithther', 'Norkruuth', 'Nykkan', 'Pandjed', 'Patrin', 'Pijjink', 'Quarethon', 'Rathkran', 'Rhogar', 'Rivaan', 'Sethrekar', 'Shamash', 'Shedinn', 'Srorthen', 'Tarhun', 'Torinn', 'Trynnicus', 'Valorean', 'Vrondiss', 'Zedaar'],
        beardProbability: 90,
        baseHeight: 62,
        baseWeight: 160,
        heightModifier: () => dice(2, 8),
        weightModifier: () => dice(2, 6)
      }
    },
    lastName: ['Akambheryliiax', 'Argenthrixus', 'Baharoosh', 'Beryntolthropal', 'Bhenkumbyrznaax', 'Caavylteradyn', 'Chumbyxirinnish', 'Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Dhyrktelonis', 'Ebynichtomonis', 'Esstyrlynn', 'Fharngnarthnost', 'Ghaallixirn', 'Grrrmmballhyst', 'Gygazzylyshrift', 'Hashphronyxadyn', 'Hshhsstoroth', 'lmbixtellrhyst', 'Jerynomonis', 'Jharthraxyn', 'Kerrhylon', 'Kimbatuul', 'Lhamboldennish', 'Linxakasendalor', 'Mohradyllion', 'Mystan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Orexijandilin', 'Pfaphnyrennish', 'Phrahdrandon', 'Pyraxtallinost', 'Qyxpahrgh', 'Raghthroknaar', 'Shestendeliath', 'Skaarzborroosh', 'Sumnarghthrysh', 'Tiammanthyilish', 'Turnuroth', 'Umbyrphrael', 'Vangdondalor', 'Verthisathurgiesh', 'Wiwyrholdalphiax', 'Wystongjiir', 'Xephyrbahnor', 'Yarjerit', 'Zzzxaaxthroth'],
    eyes: ['yellow', 'amber', 'yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'aqua', 'red', 'purple', 'gold', 'gold'],
    raceWords: {
      raceName: 'dragonborn',
      racePlural: 'drakes',
      raceSingular: 'dragonborn',
      raceAdjective: 'draconian',
      raceLanguage: 'Draconic'
    },
    knownLanguages: ['Common', 'Draconic'],
    beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
    abilities: {
      'Draconic Ancestry': "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table. (Player's Handbook p. 34)",
      'Breath Weapon': "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.,,When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.,,After you use your breath weapon, you can't use it again until you complete a short or long rest.",
      'Damage Resistance': 'You have resistance to the damage type associated with your draconic ancestry.'
    }
  },
  'dwarf': {
    probability: 2,
    muscleMass: 11,
    bmiModifier: 500,
    ageTraits: {
      'ageDescriptors': [
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
        beardProbability: 80,
        baseHeight: 43,
        baseWeight: 120,
        heightModifier: () => dice(2, 4),
        weightModifier: () => dice(2, 6)
      },
      man: {
        firstName: ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Beloril', 'Brottor', 'Dain', 'Dalgal', 'Darrak', 'Delg', 'Duergath', 'Dworic', 'Eberk', 'Einkil', 'Elaim', 'Erias', 'Fallond', 'Fargrim', 'Gardain', 'Garur', 'Gimgen', 'Gimurt', 'Harbek', 'Kildrak', 'Kilvar', 'Morgran', 'Morkral', 'Nalral', 'Nordak', 'Nuraval', 'Oloric', 'Olunt', 'Orsik', 'Oskar', 'Rangfim', 'Reirak', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Thradal', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Urain', 'Veit', 'Vonbin', 'Vondal', 'Whurbin'],
        beardProbability: 4,
        baseHeight: 45,
        baseWeight: 150,
        heightModifier: () => dice(2, 4),
        weightModifier: () => dice(2, 6)
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
  },
  'elf': {
    probability: 2,
    muscleMass: 9,
    bmiModifier: 703,
    ageTraits: {
      'ageDescriptors': [
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
      woman: {
        firstName: ['Adria', 'Ahinar', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Arara', 'Baelitae', 'Bethrynna', 'Birel', 'Caelynn', 'Chaedi', 'Claira', 'Dara', 'Drusilia', 'Elama', 'Enna', 'Faral', 'Felosial', 'Hatae', 'Ielenia', 'Ilanis', 'Irann', 'Jarsali', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Maiathah', 'Malquis', 'Meriele', 'Mialee', 'Myathethil', 'Naivara', 'Quelenna', 'Quillathe', 'Ridaro', 'Sariel', 'Shanairla', 'Shava', 'Silaqui', 'Sumnes', 'Theirastra', 'Thiala', 'Tiaathque', 'Traulam', 'Vadania', 'Valanthe', 'Valna', 'Xanaphia'],
        beardProbability: 100,
        baseHeight: 61,
        baseWeight: 90,
        heightModifier: () => dice(2, 10),
        weightModifier: () => dice(1, 4)
      },
      man: {
        firstName: ['Adran', 'Aelar', 'Aerdeth', 'Ahvain', 'Aramil', 'Arannis', 'Aust', 'Azaki', 'Beiro', 'Berrian', 'Caeldrim', 'Carric', 'Dayereth', 'Dreali', 'Efieril', 'Eiravel', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis', 'Naal', 'Nutae', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae', 'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis'],
        beardProbability: 75,
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
  },
  'gnome': {
    probability: 1,
    muscleMass: 10,
    bmiModifier: 703,
    ageTraits: {
      'ageDescriptors': [
        [400, 'vulnerably elderly'],
        [360, 'withered'],
        [320, 'elderly'],
        [280, 'weathered'],
        [230, 'aged'],
        [180, 'old'],
        [130, 'middle aged'],
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
        baseAge: 200,
        ageModifier: () => dice(3, 100)
      },
      'settled adult': {
        baseAge: 40,
        ageModifier: () => dice(3, 75)
      },
      'young adult': {
        baseAge: 18,
        ageModifier: () => dice(2, 10)
      },
      'child': {
        baseAge: 6,
        ageModifier: () => dice(2, 6)
      }
    },
    genderTraits: {
      woman: {
        firstName: ['Abalaba', 'Bimpnottin', 'Breena', 'Buvvie', 'Callybon', 'Caramip', 'Carlin', 'Cumpen', 'Dalaba', 'Donella', 'Duvamil', 'Ella', 'Ellyjoybell', 'Ellywick', 'Enidda', 'Lilli', 'Loopmottin', 'Lorilla', 'Luthra', 'Mardnab', 'Meena', 'Menny', 'Mumpena', 'Nissa', 'Numba', 'Nyx', 'Oda', 'Oppah', 'Orla', 'Panana', 'Pynfle', 'Quilla', 'Ranala', 'Reddlepop', 'Roywyn', 'Salanop', 'Shamil', 'Sifiress', 'Symma', 'Tana', 'Tenena', 'Tervaround', 'Tippletoe', 'Ulia', 'Unvera', 'Veloptima', 'Virra', 'Waywocket', 'Yebe', 'Zanna'],
        beardProbability: 98,
        baseHeight: 35,
        baseWeight: 30,
        heightModifier: () => dice(2, 4),
        weightModifier: () => dice(1, 1)
      },
      man: {
        firstName: ['Alston', 'Alvyn', 'Anverth', 'Arumawann', 'Bilbron', 'Boddynock', 'Brocc', 'Burgell', 'Cockaby', 'Crampernap', 'Dabbledob', 'Delebean', 'Dimble', 'Eberdeb', 'Eldon', 'Erky', 'Fablen', 'Fibblestib', 'Fonkin', 'Frouse', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'lgden', 'Jabble', 'Jebeddo', 'Kellen', 'Kipper', 'Namfoodle', 'Oppleby', 'Orryn', 'Paggen', 'PaHabar', 'Pog', 'Qualen', 'Ribbles', 'Rimple', 'Roondar', 'Sappw', 'Seebo', 'Senteq', 'Sindri', 'Umpen', 'Warryn', 'Wiggens', 'Wobbles', 'Wrenn', 'Zaffrab', 'Zook'],
        beardProbability: 37,
        baseHeight: 36,
        baseWeight: 35,
        heightModifier: () => dice(2, 10),
        weightModifier: () => dice(1, 1)
      }
    },
    lastName: ['Albaratie', 'Bafflestone', 'Beren', 'Boondiggles', 'Cobblelob', 'Daergel', 'Dunben', 'Fabblestabble', 'Fapplestamp', 'Fiddlefen', 'Folkor', 'Garrick', 'Gimlen', 'Glittergern', 'Gobblefirn', 'Gummen', 'Horcusporcus', 'Humplebumple', 'Ironhide', 'Leffery', 'Lingenhall', 'Loofollue', 'Maekkelferce', 'Miggledy', 'Munggen', 'Murnig', 'Musgraben', 'Nackle', 'Ningel', 'Nopenstallen', 'Nucklestamp', 'Offund', 'Oomtrowl', 'Pilwicken', 'Pingun', 'Quillsharpener', 'Raulnor', 'Reese', 'Rofierton', 'Scheppen', 'Shadowcloak', 'Silverthread', 'Sympony', 'Tarkelby', 'Timbers', 'Turen', 'Umbodoben', 'Waggletop', 'Welber', 'Wildwander'],
    eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
    raceWords: {
      raceName: 'gnome',
      racePlural: 'gnomes',
      raceSingular: 'gnome',
      raceAdjective: 'gnomish',
      raceLanguage: 'Gnomish'
    },
    knownLanguages: ['Common', 'Gnomish'],
    beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
    abilities: {
      'Darkvision': "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      'Gnome Cunning': 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
      "Artificer's Lore": 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.',
      'Tinker': "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.,,When you create a device, choose one of the following options:,,Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.,,Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.,,Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
    }
  },
  'goblin': {
    probability: 1,
    muscleMass: 9,
    bmiModifier: 703,
    ageTraits: {
      'ageDescriptors': [
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
        beardProbability: 4,
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
  },
  'half-elf': {
    probability: 2,
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
      woman: {
        firstName: ['Abigayl', 'Aebria', 'Aeobreia', 'Breia', 'Aedria', 'Aodreia', 'Dreia', 'Aeliya', 'Aliya', 'Aella', 'Aemilya', 'Aemma', 'Aemy', 'Amy', 'Ami', 'Aeria', 'Arya', 'Aeva', 'Aevelyn', 'Evylann', 'Alaexa', 'Alyxa', 'Alina', 'Aelina', 'Aelinea', 'Allisann', 'Allysann', 'Alyce', 'Alys', 'Alysea', 'Alyssia', 'Aelyssa', 'Amelya', 'Maelya', 'Andreya', 'Aendrea', 'Arianna', 'Aryanna', 'Arielle', 'Aryell', 'Ariella', 'Ashlena', 'Aurora', 'Avaery', 'Avyrie', 'Bella', 'Baella', 'Brooklinea', 'Bryanna', 'Brynna', 'Brinna', 'Caemila', 'Chloe', 'Chloeia', 'Claira', 'Clayre', 'Clayra', 'Delyla', 'Dalyla', 'Elisybeth', 'Aelisabeth', 'Ellia', 'Ellya', 'Elyana', 'Eliana', 'Eva', 'Falyne', 'Genaesis', 'Genaesys', 'Gianna', 'Jianna', 'Janna', 'Graece', 'Grassa', 'Haenna', 'Hanna', 'Halya', 'Harperia', 'Peria', 'Hazyl', 'Hazel', 'Jasmyne', 'Jasmine', 'Jocelyne', 'Joceline', 'Celine', 'Kaelia', 'Kaelya', 'Kathryne', 'Kathrine', 'Kayla', 'Kaila', 'Kymber', 'Kimbera', 'Layla', 'Laylanna', 'Leia', 'Leya', 'Leah', 'Lilia', 'Lylia', 'Luna', 'Maedisa', 'Maelania', 'Melania', 'Maya', 'Mya', 'Myla', 'Milae', 'Naomi', 'Naome', 'Natalya', 'Talya', 'Nathylie', 'Nataliae', 'Thalia', 'Nicola', 'Nikola', 'Nycola', 'Olivya', 'Alivya', 'Penelope', 'Paenelope', 'Pynelope', 'Rianna', 'Ryanna', 'Ruby', 'Ryla', 'Samaentha', 'Samytha', 'Sara', 'Sarah', 'Savannia', 'Scarletta', 'Sharlotta', 'Caerlotta', 'Sophya', 'Stella', 'Stylla', 'Valentyna', 'Valerya', 'Valeria', 'Valia', 'Valea', 'Victorya', 'Vilettia', 'Ximena', 'Imaena', 'Ysabel', 'Zoe', 'Zoeia', 'Zoea', 'Zoesia'],
        beardProbability: 100,
        baseHeight: 61,
        baseWeight: 90,
        heightModifier: () => dice(2, 8),
        weightModifier: () => dice(2, 4)
      },
      man: {
        firstName: ['Adran', 'Aelar', 'Aerdeth', 'Ahvain', 'Aramil', 'Arannis', 'Aust', 'Azaki', 'Beiro', 'Berrian', 'Caeldrim', 'Carric', 'Dayereth', 'Dreali', 'Efieril', 'Eiravel', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis', 'Naal', 'Nutae', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae', 'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis'],
        beardProbability: 57,
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
  },
  'halfling': {
    probability: 1,
    muscleMass: 9,
    bmiModifier: 703,
    ageTraits: {
      'ageDescriptors': [
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
      woman: {
        firstName: ['Alain', 'Andry', 'Anne', 'Bella', 'Blossom', 'Bree', 'Callie', 'Chenna', 'Cora', 'Dee', 'Dell', 'Eida', 'Eran', 'Euphamia', 'Georgina', 'Gynnie', 'Harriet', 'Jasmine', 'Jillian', 'Jo', 'Kithri', 'Lavinia', 'Lidda', 'Maegan', 'Marigold', 'Merla', 'Myria', 'Nedda', 'Nikki', 'Nora', 'Olivia', 'Paela', 'Pearl', 'Pennie', 'Philomena', 'Portia', 'Robbie', 'Rose', 'Saral', 'Seraphina', 'Shaena', 'Stacee', 'Tawna', 'Thea', 'Trym', 'Tyna', 'Vani', 'Verna', 'Wella', 'Willow'],
        beardProbability: 100,
        baseHeight: 30,
        baseWeight: 25,
        heightModifier: () => dice(2, 4),
        weightModifier: () => dice(1, 1)
      },
      man: {
        firstName: ['Alton', 'Ander', 'Bernie', 'Bobbin', 'Cade', 'Callus', 'Corrin', 'Dannad', 'Danniel', 'Eddie', 'Egart', 'Eldon', 'Errich', 'Fildo', 'Finnan', 'Franklin', 'Garret', 'Garth', 'Gilbert', 'Gob', 'Harol', 'Igor', 'Jasper', 'Keith', 'Kevin', 'Lazam', 'Lerry', 'Lindal', 'Lyle', 'Merric', 'Mican', 'Milo', 'Morrin', 'Nebin', 'Nevil', 'Osborn', 'Ostran', 'Oswalt', 'Perrin', 'Poppy', 'Reed', 'Roscoe', 'Sam', 'Shardon', 'Tye', 'Ulmo', 'Wellby', 'Wendel', 'Wenner', 'Wes'],
        beardProbability: 87,
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
  },
  'half-orc': {
    probability: 1,
    muscleMass: 12,
    bmiModifier: 600,
    viableBreedingPartners: ['human', 'orc', 'half-elf', 'half-orc'],
    ageTraits: {
      'ageDescriptors': [
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
        baseAge: 57,
        ageModifier: () => dice(3, 6)
      },
      'settled adult': {
        baseAge: 45,
        ageModifier: () => dice(3, 6)
      },
      'young adult': {
        baseAge: 15,
        ageModifier: () => dice(3, 12)
      },
      'child': {
        baseAge: 3,
        ageModifier: () => dice(3, 4)
      }
    },
    genderTraits: {
      woman: {
        firstName: ['Arha', 'Baggi', 'Bendoo', 'Bilga', 'Brakka', 'Creega', 'Drenna', 'Ekk', 'Emen', 'Engong', 'Fistula', 'Gaaki', 'Gorga', 'Grai', 'Greeba', 'Grigi', 'Gynk', 'Hrathy', 'Huru', 'Ilga', 'Kabbarg', 'Kansif', 'Lagazi', 'Lexre', 'Murgen', 'Murook', 'Myev', 'Nagarette', 'Neega', 'Nella', 'Nogu', 'Oolah', 'Ootah', 'Ovak', 'Ownka', 'Puyet', 'Reeza', 'Shautha', 'Silgre', 'Sutha', 'Tagga', 'Tawar', 'Tomph', 'Ubada', 'Vanchu', 'Vola', 'Volen', 'Vorka', 'Yevelda', 'Zagga'],
        beardProbability: 100,
        baseHeight: 53,
        baseWeight: 150,
        heightModifier: () => dice(2, 10),
        weightModifier: () => dice(2, 6)
      },
      man: {
        firstName: ['Argran', 'Braak', 'Brug', 'Cagak', 'Dench', 'Dorn', 'Dren', 'Druuk', 'Feng', 'Gell', 'Gnarsh', 'Grurnbar', 'Gubrash', 'Hagren', 'Henk', 'Hogar', 'Holg', 'Imsh', 'Karash', 'Karg', 'Keth', 'Korag', 'Krusk', 'Lubash', 'Megged', 'Mhurren', 'Mhflord', 'Morg', 'Nil', 'Nybarg', 'Odorr', 'Ohr', 'Rendar', 'Resh', 'Ront', 'Rrath', 'Sark', 'Scrag', 'Sheggen', 'Shump', 'Tanglar', 'Tarak', 'Thrag', 'Thokk', 'Trag', 'Ugarth', 'Varg', 'Vilberg', 'Yurk', 'Zed'],
        beardProbability: 60,
        baseHeight: 58,
        baseWeight: 110,
        heightModifier: () => dice(2, 10),
        weightModifier: () => dice(2, 6)
      }
    },
    lastName: ['Gultch', 'Goresmasher', 'Karaktoth', 'Krokk', 'Bogdoth', 'Bracka', 'Dargakk', 'Darknath', "Gul'Tchanth", 'Prathka', 'Rathkann', 'Rangakk'],
    eyes: ['yellow', 'amber', 'orange', 'brown', 'hazel', 'yellow', 'amber', 'orange', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red'],
    raceWords: {
      raceName: 'half-orc',
      racePlural: 'half-orcs',
      raceSingular: 'half-orc',
      raceAdjective: 'orcish',
      raceLanguage: 'Orcish'
    },
    knownLanguages: ['Common', 'Orc'],
    beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
    abilities: {
      'Darkvision': "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      'Menacing': 'You gain proficiency in the Intimidation skill.',
      'Relentless Endurance': "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
      'Savage Attacks': "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
    }
  },
  'human': {
    probability: 6,
    muscleMass: 10,
    bmiModifier: 703,
    viableBreedingPartners: ['human', 'elf', 'orc', 'half-elf', 'half-orc', 'tiefling'],
    ageTraits: {
      'ageDescriptors': [
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
      woman: {
        beardProbability: 100,
        baseHeight: 53,
        baseWeight: 85,
        heightModifier: () => dice(2, 10),
        weightModifier: () => dice(2, 4),
        firstName: ['Abigayl', 'Aebria', 'Aeobreia', 'Breia', 'Aedria', 'Aodreia', 'Dreia', 'Aeliya', 'Aliya', 'Aella', 'Aemilya', 'Aemma', 'Aemy', 'Amy', 'Ami', 'Aeria', 'Arya', 'Aeva', 'Aevelyn', 'Evylann', 'Alaexa', 'Alyxa', 'Alina', 'Aelina', 'Aelinea', 'Allisann', 'Allysann', 'Alyce', 'Alys', 'Alysea', 'Alyssia', 'Aelyssa', 'Amelya', 'Maelya', 'Andreya', 'Aendrea', 'Arianna', 'Aryanna', 'Arielle', 'Aryell', 'Ariella', 'Ashlena', 'Aurora', 'Avaery', 'Avyrie', 'Bella', 'Baella', 'Brooklinea', 'Bryanna', 'Brynna', 'Brinna', 'Caemila', 'Chloe', 'Chloeia', 'Claira', 'Clayre', 'Clayra', 'Delyla', 'Dalyla', 'Elisybeth', 'Aelisabeth', 'Ellia', 'Ellya', 'Elyana', 'Eliana', 'Eva', 'Falyne', 'Genaesis', 'Genaesys', 'Gianna', 'Jianna', 'Janna', 'Graece', 'Grassa', 'Haenna', 'Hanna', 'Halya', 'Harperia', 'Peria', 'Hazyl', 'Hazel', 'Jasmyne', 'Jasmine', 'Jocelyne', 'Joceline', 'Celine', 'Kaelia', 'Kaelya', 'Kathryne', 'Kathrine', 'Kayla', 'Kaila', 'Kymber', 'Kimbera', 'Layla', 'Laylanna', 'Leia', 'Leya', 'Leah', 'Lilia', 'Lylia', 'Luna', 'Maedisa', 'Maelania', 'Melania', 'Maya', 'Mya', 'Myla', 'Milae', 'Naomi', 'Naome', 'Natalya', 'Talya', 'Nathylie', 'Nataliae', 'Thalia', 'Nicola', 'Nikola', 'Nycola', 'Olivya', 'Alivya', 'Penelope', 'Paenelope', 'Pynelope', 'Rianna', 'Ryanna', 'Ruby', 'Ryla', 'Samaentha', 'Samytha', 'Sara', 'Sarah', 'Savannia', 'Scarletta', 'Sharlotta', 'Caerlotta', 'Sophya', 'Stella', 'Stylla', 'Valentyna', 'Valerya', 'Valeria', 'Valia', 'Valea', 'Victorya', 'Vilettia', 'Ximena', 'Imaena', 'Ysabel', 'Zoe', 'Zoeia', 'Zoea', 'Zoesia']
      },
      man: {
        beardProbability: 27,
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
  },
  'tiefling': {
    probability: 1,
    muscleMass: 10,
    bmiModifier: 703,
    viableBreedingPartners: ['human', 'tiefling'],
    ageTraits: {
      'ageDescriptors': [
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
      woman: {
        firstName: ['Akta', 'Anakis', 'Armara', 'Astaro', 'Aym', 'Azza', 'Beleth', 'Bryseis', 'Bune', 'Criella', 'Damaia', 'Decarabia', 'Ea', 'Gadreel', 'Gomory', 'Hecat', 'Ishte', 'Jezebeth', 'Kali', 'Kalista', 'Kasdeya', 'Lerissa', 'Lilith', 'Makaria', 'Manea', 'Markosian', 'Mastema', 'Namnah', 'Nemem', 'Nija', 'Orianna', 'Osah', 'Phelaia', 'Prosperine', 'Purah', 'Pyra', 'Pyranna', 'Ronobe', 'Ronwe', 'Seddit', 'Seere', 'Sekhmet', 'Semyaza', 'Shava', 'Shax', 'Sorath', 'Uzza', 'Vapula', 'Vepar', 'Verin'],
        beardProbability: 100,
        baseHeight: 54,
        baseWeight: 85,
        heightModifier: () => dice(2, 8),
        weightModifier: () => dice(2, 4)
      },
      man: {
        firstName: ['Abad', 'Ahrun', 'Akwmn', 'Anmon', 'Andram', 'Astar', 'Bmam', 'Barakas', 'Bathin', 'Cann', 'Chem', 'Chner', 'Cressel', 'Danmkos', 'Ekmnon', 'Euron', 'Fennz', 'Forcas', 'Habor', 'Iados', 'Kauon', 'Leucs', 'Manmen', 'Mantus', 'Marbas', 'Melech', 'Merihim', 'Modean', 'Mordai', 'Mormo', 'Morthos', 'Nicor', 'Nirgel', 'Oriax', 'Paynon', 'Pelaios', 'Purson', 'Qemud', 'Raam', 'Rimmon', 'Sammal', 'Skamos', 'Tethren', 'Thamuz', 'Therai', 'Valafar', 'Vassago', 'Xappan', 'Zepar', 'Zephan'],
        beardProbability: 60,
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
}
