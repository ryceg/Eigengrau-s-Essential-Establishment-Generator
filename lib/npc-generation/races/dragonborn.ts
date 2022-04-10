import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

export const dragonborn: RaceTrait = {
  muscleMass: 11,
  bmiModifier: 650,
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
    entity: {},
    nonbinary: {

    },
    woman: {
      firstName: ['Akra', 'Aasathra', 'Antrara', 'Arava', 'Biri', 'Blendaeth', 'Burana', 'Chassath', 'Daar', 'Dentratha', 'Doudra', 'Driindar', 'Eggren', 'Farideh', 'Findex', 'Furrele', 'Gesrethe', 'Gilkass', 'Harann', 'Havilar', 'Hethress', 'Hillanot', 'Jaxi', 'Jezean', 'Jheri', 'Kadana', 'Kava', 'Koflnn', 'Megren', 'Mijira', 'Mishann', 'Nala', 'Nuthra', 'Perra', 'Pogranix', 'Pyxrin', 'Quespa', 'Raiann', 'Rezena', 'Ruloth', 'Saphara', 'Savaran', 'Sora', 'Surina', 'Synthrin', 'Tatyan', 'Thava', 'Uadflt', 'Vezera', 'Zykrofl'],
      beardProbability: 0,
      baseHeight: 60,
      baseWeight: 130,
      heightModifier: () => dice(2, 8),
      weightModifier: () => dice(2, 6)
    },
    man: {
      firstName: ['Adrex', 'Arjhan', 'Azzakh', 'Balasar', 'Baradad', 'Bharash', 'Bidreked', 'Dadalan', 'Dazzazn', 'Direcris', 'Donaar', 'Fax', 'Gargax', 'Ghesh', 'Gorbundus', 'Greethen', 'Heskan', 'Hirrathak', 'Illdrex', 'Kaladan', 'Kerkad', 'Kiirith', 'Kriv', 'Maagog', 'Medrash', 'Mehen', 'Mozikth', 'Mreksh', 'Mugrunden', 'Nadarr', 'Nithther', 'Norkruuth', 'Nykkan', 'Pandjed', 'Patrin', 'Pijjink', 'Quarethon', 'Rathkran', 'Rhogar', 'Rivaan', 'Sethrekar', 'Shamash', 'Shedinn', 'Srorthen', 'Tarhun', 'Torinn', 'Trynnicus', 'Valorean', 'Vrondiss', 'Zedaar'],
      beardProbability: 10,
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
}
