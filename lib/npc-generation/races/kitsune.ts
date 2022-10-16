import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

// race source: Pathfinder 2e
// for details, see https://2e.aonprd.com/Ancestries.aspx?ID=38
// https://kidadl.com/baby-names/inspiration/kitsune-names-for-your-character

export const kitsune: RaceTrait = {
  muscleMass: 9,
  bmiModifier: 703,
  ageTraits: {
    'ageDescriptors': [
      [110, 'ancient'],
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
      ageModifier: () => dice(3, 4)
    },
    'settled adult': {
      baseAge: 30,
      ageModifier: () => dice(3, 10)
    },
    'young adult': {
      baseAge: 15,
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
        'Aisiri',
        'Akemi',
        'Ashinsen',
        'Chinatsu',
        'Dawn',
        'Domino',
        'Gina',
        'Haruhi',
        'Ikumi',
        'Kaeya',
        'Katsumi',
        'Kimiko',
        'Kiyoshi',
        'Minoru',
        'Nariyama',
        'Tadao',
        'Takumi',
        'Zenkichi'
      ],
      beardProbability: 0,
      baseHeight: 61,
      baseWeight: 90,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    woman: {
      firstName: [
        'Akela',
        'Akira',
        'Azula',
        'Chimera',
        'Haruhi',
        'Himani',
        'Kai',
        'Kirin',
        'Kotori',
        'Lynx',
        'Megumi',
        'Mia',
        'Michelle',
        'Naoki',
        'Primrose',
        'Suki',
        'Usagi',
        'Ushi',
        'Victoria',
        'Yoko'
      ],
      beardProbability: 0,
      baseHeight: 62,
      baseWeight: 100,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    man: {
      firstName: [
        'Asako',
        'Ayako',
        'Chane',
        'Chiko',
        'Chili',
        'Chrom',
        'Chuang',
        'Kalinda',
        'Kiyoshi',
        'Mario',
        'Michiko',
        'Mikel',
        'Mizuchi',
        'Nadi',
        'Namba',
        'Natsume',
        'Nittaya',
        'Nozomi',
        'Orochi',
        'Yayoi'
      ],
      beardProbability: 25,
      baseHeight: 62,
      baseWeight: 100,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(3, 6)
    }
  },
  lastName: [
    'Bemei',
    'Dai',
    'Fumio',
    'Hisashi',
    'Hyosuki',
    'Jun',
    'Kin',
    'Kou',
    'Makato',
    'Masanori',
    'Masayoshi',
    'Michi',
    'Mokei',
    'Nimiaki',
    'Nonabu',
    'Ryuu',
    'Toshiaki',
    'Tsuneo',
    'Tsuyoshi',
    'Yuki'
  ],
  eyes: ['green', 'blue', 'gray', 'aqua', 'purple', 'gold', 'yellow', 'amber', 'brown', 'dark brown', 'hazel', 'red', 'blood red', 'dark red', 'black'],
  raceWords: {
    raceName: 'kitsune',
    racePlural: 'kitsune',
    raceSingular: 'kitsune',
    raceAdjective: 'kitsunein',
    raceLanguage: 'Common'
  },
  knownLanguages: ['Common'],
  beard: ['scraggly beard', 'long, flowing beard', 'goatee', 'goatee that seems to be trying to level up into a beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Low-Light Vision': 'Accustomed to life underground, you have superior vision in dim conditions. You can see in dim light as though it were bright light, so you ignore the concealed condition due to dim light.',
    'Change Shape': "You transform into a specific alternate form determined by your heritage. If your heritage doesn't list a form, your alternate form is a tailless form, which is a common Medium humanoid ancestry prevalent where you grew up (typically human). This form is the same age and body type as your true form and has roughly analogous physical traits, such as hair color. Using Change Shape counts as creating a disguise for the Impersonate use of Deception. You lose any unarmed Strikes you gained from a kitsune heritage or ancestry feat in this form. You can remain in your alternate form indefinitely, and you can shift back to your true kitsune form by using this action again."
  }
}
