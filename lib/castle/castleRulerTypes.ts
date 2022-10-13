
import { NPC } from '../npc-generation/_common'

interface CastleRulerType {
  type: string
  probability?: number
  lookingFor?: string[]
  acquisitionMethod?: string
  base: Partial<NPC>
}

export const castleRulerTypes: CastleRulerType[] = [
  {
    type: 'a noble',
    probability: 150,
    base: {
      socialClass: 'aristocracy'
    }
  },
  {
    type: 'urchins who occupied a ruined castle, slowly rebuilding it',
    lookingFor: [
      'some help with a very large bit of stone which collapsed',
      'a way to decipher architect plans which are in a different language'
    ],
    acquisitionMethod: 'abandoned for many years until the urchins began to rebuild it',
    base: {
      ageStage: 'child',
      profession: 'urchin'
    }
  },
  {
    type: 'a rich and ambitious merchant who styles themselves a noble',
    lookingFor: [
      'somebody to show off in front of',
      'an exotic creature to show off at the next ball',
      'an impressive date to a high-class event',
      'a mecenary band to protect a large caravan of goods being sent to another town'
    ],
    acquisitionMethod: 'bought the castle as a way of showing off',
    base: {
      profession: 'merchant',
      socialClass: 'nobility'
    }
  },
  {
    type: 'the state, the castle is placed on the border to defend against invaders',
    lookingFor: [
      'a tactician able to improve the defenses',
      'a couple soldiers able to help withstand a forthcoming siege',
      'some laborers to help dig moats around the area',
      'a new blacksmith to forge better weapons for the local guard'
    ],
    acquisitionMethod: 'built as a tactical vantage point',
    base: {
      profession: 'general'
    }
  },
  {
    type: 'the people, after they rose up against an unjust ruler',
    lookingFor: [
      'a new form of governing that is fairer to all',
      'a creative way to punish their former ruler',
      'the best way to properly partition rooms to all the townsfolk'
    ],
    acquisitionMethod: "wrested from its previous owner's control in a bloody revolt",
    base: {
      profession: 'prime minister',
      socialClass: 'peasantry'
    }
  },
  {
    type: 'a third child who inherited it after both their siblings died in the war',
    base: {
      ageStage: 'child'
    }
  },
  {
    type: 'a holy monastic order who were given a castle by a faithful prince',
    lookingFor: [
      'a sign that they are in their gods favour',
      'a holy relic',
      'an ancient holy tome',
      'an architect to help design a new chapel for the building',
      'a way to bring in more followers'
    ],
    acquisitionMethod: 'gifted to the order by a prince as a show of his faith',
    base: {
      profession: 'cardinal'
    }
  },
  {
    type: 'a holy order guarding something in the basement',
    lookingFor: [
      'a way to better contain whatever lies beneath the castle',
      'an excuse to escape from the castle',
      'new ways to protect their secrets'
    ],
    acquisitionMethod: 'built as a tactical vantage point',
    base: {
      profession: 'cardinal'
    }
  },
  {
    type: 'a lonely abandoned child of nobility, exiled into a castle on the edge of the kingdom',
    lookingFor: [
      'a friend',
      'someone to explain why nobody visits',
      'a visit from their parents'
    ],
    base: {
      ageStage: 'child'
    }
  },
  {
    type: 'a knight, guarding the border from something deep in the wilderness',
    lookingFor: [
      'someone to help hunt the thing',
      'someone to kill the creature',
      'assistance in repairing the defenses'
    ],
    base: {
      profession: 'knight'
    }
  },
  {
    type: 'an adventuring party who found a cursed keep with the symbol of a golden knight, questing to break the curse',
    lookingFor: [
      'an excuse to get out of the castle',
      'someone to pawn the castle off to',
      'a way to escape',
      'a way to break the curse of the keep'
    ],
    acquisitionMethod: 'found abandoned',
    base: {
      profession: 'paladin'
    }
  },
  {
    type: 'a family descended from a dragon who took the shape of a human',
    base: {
      note: 'Has dragon heritage.'
    }
  },
  {
    type: 'a banished prince, given a castle with the absolute minimum staff',
    lookingFor: [
      'some way to regain lost honour',
      'someone to have dinner with',
      'an interesting conversation to liven up an otherwise dull life',
      'a way to amass more funds and grow their realm',
      'a way to regain their honor'
    ],
    base: {
      profession: 'exile',
      background: 'noble',
      socialClass: 'aristocracy'
    }
  },
  {
    type: 'a bastard child who killed the legitimate heir, living in fear of being uncovered',
    lookingFor: [
      'the one person that knows the truth',
      'someone to kill off those that threaten to uncover the truth',
      'someone they can confide their sins to'
    ],
    base: {
      note: 'Killed the legitimate heir.'
    }
  },
  {
    type: 'an untrained bastard child who inherited the castle from their old and heirless parent',
    lookingFor: [
      'someone to train with',
      'an advisor to help manage affairs'
    ],
    base: {
      note: 'Inherited the castle.'
    }
  },
  {
    type: 'a band of magical fey, casting illusions to make people think the castle is full of people',
    lookingFor: [
      'trouble',
      'fun',
      'ways to cause even more mischief',
      'ways to reassure the folk that they mean no harm'
    ],
    acquisitionMethod: 'captured by the fey a long time ago',
    base: {
      note: 'Is actually a fey'
    }
  },
  {
    type: 'a band of raiders, hired by a lord to extort even more money out of people',
    lookingFor: [
      'the latest in torture methods',
      'treasure',
      'ways to extort even more money',
      'new ways to terrorize the local peasants'
    ],
    acquisitionMethod: 'brutally taken from the hands of the lord that previously owned it by force',
    base: {
      profession: 'bandit'
    }
  },
  {
    type: 'a band of deserters who captured the castle and have started styling themselves as nobles',
    lookingFor: [
      'a pardon from their general',
      'company to have dinner with',
      'somebody to impress',
      'recognition from the real local nobility',
      'respect from neighboring rulers'
    ],
    acquisitionMethod: 'taken over in the dead of night',
    base: {
      profession: 'deserter'
    }
  },
  {
    type: 'a garrison of soldiers who were part of a war that ended a long time ago but managed to keep hold of the castle',
    lookingFor: [
      'a change of posting',
      'something to liven up the place',
      'sparring partners',
      'reinforcements from their long fallen kingdom'
    ],
    acquisitionMethod: 'a tactical vantage in a long-since ended war',
    base: {
      profession: 'general'
    }
  },
  {
    type: 'a king and his court, frozen in time after angering a powerful magical being',
    lookingFor: [
      'a way to ensure that the being does not come after him again',
      'weapons to defend himself with',
      'magic users able to return him to his time',
      'someone that died long ago',
      'ways to recruit more demons into their keep'
    ],
    base: {
      gender: 'man',
      profession: 'king'
    }
  },
  {
    type: 'a demon and their retinue, disguising themselves as human, plotting to take over the kingdom',
    lookingFor: [
      'ways to corrupt the church',
      'ways to cause havoc',
      'someone to have for dinner'
    ],
    base: {
      note: 'Is actually a demon.'
    }
  },
  {
    type: 'a wizard, calling herself a lord, who created the castle with her magic',
    lookingFor: [
      'the latest in magical textbooks',
      'magical test subjects',
      'someone to tell her whether she is going mad',
      'other magic users to discuss magical studies with',
      'the local nobility to finally come to one of her magical balls'
    ],
    acquisitionMethod: 'created by a wizard',
    base: {
      profession: 'wizard',
      gender: 'woman'
    }
  },
  {
    type: 'a strange man who found the castle - it has followed him ever since',
    lookingFor: [
      'a way to get rid of the castle',
      'some way to escape the castle',
      'a way to legitimise his ownership of the castle',
      'a way to get the castle to stay put'
    ],
    acquisitionMethod: 'not always there, appearing several years ago',
    base: {
      gender: 'man'
    }
  },
  {
    type: 'a young orphan girl who wandered into the castle. Its previous owners all died until she was the only one left, and now she is the de facto ruler, and lives in luxury, served by various magical beings',
    lookingFor: [
      'someone to play with',
      'someone that is able to heal her cat, Tibbles',
      'a new servant'
    ],
    base: {
      ageStage: 'child',
      gender: 'woman'
    }
  },
  {
    type: 'an author, gifted a magical quill, and all that they write comes into being',
    lookingFor: [
      'some inspiration',
      'a good idea for a new novel',
      'a refill of the magic ink',
      'a way to undo a past mistake'
    ],
    acquisitionMethod: 'created by magic',
    base: {
      profession: 'writer',
      note: 'Owns a magical quill. It is not clear whether the magical properties come from the quill or the owner.'
    }
  },
  {
    type: 'the court fool, gifted the castle by a mad king',
    lookingFor: [
      'some juggling balls which were lost a long time ago',
      'some way to ensure that the next king does not take the castle back',
      'someone to test jokes out on',
      'someone to actually take him seriously'
    ],
    base: {
      profession: 'clown',
      gender: 'man'
    }
  }
]
