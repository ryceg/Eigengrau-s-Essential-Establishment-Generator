/** @type {[number, string][]} */
const socialClasses = [
  [195, 'aristocracy'],
  [95, 'aristocracy'],
  [80, 'nobility'],
  [60, 'commoner'],
  [20, 'peasantry'],
  [10, 'paupery'],
  [0, 'indentured servitude']
]

const socialClassArray = [
  'indentured servitude',
  'paupery',
  'peasantry',
  'commoner',
  'nobility',
  'aristocracy'
]

const socialClassKeys = {
  'aristocracy': 5,
  'nobility': 4,
  'commoner': 3,
  'peasantry': 2,
  'paupery': 1,
  'indentured servitude': 0
}

// TODO: concatenate these four arrays and objects into one object.
// too lazy to do it right now. Sorry.
setup.socialClass = {
  'aristocracy': {
    landRate: 3, // landRate is a multiple
    lifestyle: ['aristocratic'],
    // this will be more interesting when the relationships are no longer just key pairs
    relationships: (npc, otherNpc) => [
      {
        relationship: 'fellow wine lover',
        description: `${npc.firstName} introduced ${otherNpc.firstName} to the delightful world of merlots and other delectable alcohols.`
      },
      {
        relationship: 'auction house competitor',
        description: `${npc.firstName} and ${otherNpc.firstName} are constantly finding themselves bidding over the same items..`
      },
      {
        relationship: 'dinner guest',
        description: `${npc.firstName} had ${otherNpc.firstName} as a dinner guest many moons ago, and ${otherNpc.heshe} quickly returned the favour.`
      },
      {
        relationship: 'art lover',
        description: `${npc.firstName} and ${otherNpc.firstName} frequently attend art exhibits and plays together.`
      }
    ]
  },
  'nobility': {
    landRate: 2,
    lifestyle: ['aristocratic', 'wealthy', 'comfortable'],
    relationships: (npc, otherNpc) => [
      {
        relationship: 'fellow wine lover',
        description: `${npc.firstName} introduced ${otherNpc.firstName} to the delightful world of merlots and other delectable alcohols.`
      },
      {
        relationship: 'liesure game competitor',
        description: `${npc.firstName} and ${otherNpc.firstName} are friendly rivals in liesure games such as golf and boules.`
      },
      {
        relationship: 'dinner guest',
        description: `${npc.firstName} had ${otherNpc.firstName} as a dinner guest many moons ago, and ${otherNpc.heshe} quickly returned the favour.`
      },
      {
        relationship: 'art lover',
        description: `${npc.firstName} and ${otherNpc.firstName} frequently attend art exhibits and plays together.`
      }
    ]
  },
  'commoner': {
    landRate: 1,
    lifestyle: ['comfortable', 'modest', 'poor'],
    relationships: (npc, otherNpc) => [
      {
        relationship: 'fellow wine lover',
        description: `${npc.firstName} introduced ${otherNpc.firstName} to the delightful world of merlots and other delectable alcohols.`
      },
      {
        relationship: 'fellow cat owner',
        description: `${npc.firstName} and ${otherNpc.firstName} are both cat owners, which they bond over.`
      },
      {
        relationship: 'dinner guest',
        description: `${npc.firstName} had ${otherNpc.firstName} as a dinner guest many moons ago, and ${otherNpc.heshe} quickly returned the favour.`
      },
      {
        relationship: 'play lover',
        description: `${npc.firstName} and ${otherNpc.firstName} frequently attend plays together.`
      }
    ]
  },
  'peasantry': {
    landRate: 0.5,
    lifestyle: ['modest', 'poor', 'squalid'],
    relationships: (npc, otherNpc) => [
      {
        relationship: 'fellow peasant',
        description: `${npc.firstName} and ${otherNpc.firstName} share little in common, save for their poor financial circumstances and low social class.`
      },
      {
        relationship: 'same landlord',
        description: `${npc.firstName} and ${otherNpc.firstName} have the same landlord.`
      }
    ]
  },
  'paupery': {
    landRate: 0,
    lifestyle: ['poor', 'squalid', 'wretched'],
    relationships: (npc, otherNpc) => [
      {
        relationship: 'fellow wretch',
        description: `${npc.firstName} and ${otherNpc.firstName} occasionally help each other out, pooling their resources to scrounge together a meagre stew.`
      },
      {
        relationship: 'same landlord',
        description: `${npc.firstName} and ${otherNpc.firstName} have the same landlord.`
      }
    ]
  },
  'indentured servitude': {
    landRate: 0,
    lifestyle: ['squalid', 'wretched'],
    relationships: (npc, otherNpc) => [
      {
        relationship: 'fellow slave',
        description: `${npc.firstName} helped ${otherNpc.firstName} learn the ropes, and stop ${otherNpc.hisher} feet from bleeding so much.`
      }
    ]
  }
}

setup.createSocialClass = function (town, npc) {
  console.log('Creating social class...')
  if (npc.socialClass) {
    return
  }

  const profession = lib.findProfession(town, npc)

  npc.roll = npc.roll || {}
  npc.roll.socialClass = npc.roll.socialClass || profession.socialClassRoll() || 40 + lib.dice(8, 6)

  console.log({ npc })
  console.log(`Social class not predefined. Searching for the social class of a ${npc.profession}...`)
  // If .socialClass is defined in the professions.js, then that's all dandy.
  if (profession.socialClass) {
    npc.socialClass = profession.socialClass
    return
  }

  // Otherwise, just roll some dice.
  console.log(`Unidentified profession- ${npc.profession} does not exist in townData.professions!`)
  const array = socialClasses.find(([threshold]) => {
    return threshold <= npc.roll.socialClass
  })

  if (array) {
    npc.socialClass = array[1]
    return
  }

  console.log(`Failed to set a social class that matched the roll of ${npc.roll.socialClass} for ${npc.name}.`)
  npc.socialClass = socialClasses[random(0, socialClasses.length - 1)]
}

/**
 * Introduce modifiers for adult family members.
 * @type {[number, number][]}
 */
const adultSocialMobilityTable = [
  [6, -2],
  [18, -1],
  [60, 0],
  [14, 1],
  [2, 2]
]

setup.relativeSocialClass = function (npcClass) {
  let classIndex = socialClassKeys[npcClass]
  if (classIndex < 0) classIndex = 3

  const delta = lib.rollFromTable(adultSocialMobilityTable, 100)

  const newIndex = Math.clamp(classIndex + delta, 0, socialClassArray.length - 1)
  return socialClassArray[newIndex]
}

setup.familySocialClass = function (marriage) {
  if (marriage.parents.length === 0) {
    if (marriage.children.length === 0) {
      return 'commoner'
    }
    return State.variables.npcs[marriage.children[0]].socialClass
  }

  const classArray = marriage.parents.map(key =>
    socialClassKeys[State.variables.npcs[key].socialClass]
  )
  const mean = Math.round(classArray.reduce((a, b) => a + b) / classArray.length)
  return socialClassArray[mean]
}
