const lifestyleTables = {
  'aristocracy': [
    [5, 'comfortable'],
    [15, 'wealthy'],
    [80, 'aristocratic']
  ],
  'nobility': [
    [5, 'modest'],
    [30, 'comfortable'],
    [60, 'wealthy'],
    [5, 'aristocratic']
  ],
  'commoner': [
    [5, 'poor'],
    [45, 'modest'],
    [45, 'comfortable'],
    [5, 'wealthy']
  ],
  'peasantry': [
    [5, 'squalid'],
    [60, 'poor'],
    [30, 'modest'],
    [5, 'comfortable']
  ],
  'paupery': [
    [5, 'wretched'],
    [75, 'squalid'],
    [15, 'poor'],
    [5, 'modest']
  ],
  'indentured servitude': [
    [95, 'wretched'],
    [5, 'squalid']
  ]
}

const homeBiases = {
  aristocratic: 40,
  wealthy: 20,
  comfortable: 10,
  modest: 0,
  poor: -10,
  squalid: -20,
  wretched: -40
}

const homeTable = [
  [0, 'on the streets'], // unreachable without biases
  [20, 'a rundown shack'],
  [10, 'no real permanent address'],
  [5, 'a village in the middle of the wilderness'],
  [5, 'an encampment'],
  [10, 'an apartment in a rundown neighborhood'],
  [20, 'a small house'],
  [20, 'a large house'],
  [20, 'a mansion'],
  [40, 'a palace'] // unreachable without biases
]

setup.createLifestyleStandards = function (town, npc) {
  console.groupCollapsed(`Creating living standards for ${npc.name}`)
  const isCurrently = [
    'has been',
    'has recently been',
    'is',
    'is currently'
  ].random()
  const isHaving = [
    'has been having',
    'has recently had',
    'is having',
    'is currently having'
  ].random()
  const desc = lib.findProfession(town, npc)

  // if (!desc.description) {
  //   console.error(`Missing description for ${desc}`)
  //   let tippy = npc.dndClass || npc.profession
  // } else {
  const tippy = `<span id=${JSON.stringify(npc.firstName)} class=tip title=${JSON.stringify(desc.description.toUpperFirst())}><span class="dotted">${npc.profession || npc.dndClass}</span></span>`
  // }

  const wageVarianceNotes = [
    [-25, `${isCurrently} impossibly unsuccessful as`],
    [-18, `${isCurrently} incredibly unsuccessful as`],
    [-12, `${isCurrently} unsuccessful as`],
    [-8, `${isCurrently} somewhat unsuccessful as`],
    [-5, `${isCurrently} slightly unsuccessful as`],
    [0, 'is'],
    [5, [
      `${isCurrently} mildly successful as`,
      `${isHaving} mild success as`
    ].random()],
    [8, [
      `${isCurrently} reasonably successful as`,
      `${isHaving} reasonable success as`
    ].random()],
    [8, [
      `${isCurrently} modestly successful as`,
      `${isHaving} modest success as`
    ].random()],
    [12, [
      `${isCurrently} successful as`,
      `${isHaving} success as`
    ].random()],
    [12, [
      `${isCurrently} fabulously successful as`,
      `${isHaving} fabulous success as`
    ].random()],
    [25, [
      `${isCurrently} extremely successful as`,
      `${isHaving} extreme success as`
    ].random()]
  ]
  const note = wageVarianceNotes.find(desc => {
    return desc[0] >= npc.roll.wageVariation(town)
  })
  // TODO: line 119 sometimes returns undefined
  npc.professionSuccess = `${npc.firstName} ${note[1] || wageVarianceNotes[5][1]} ${lib.articles.find(npc.profession)} ${tippy}`
  console.groupEnd()
  return npc
}

setup.createFamilyLifestyle = function (marriage) {
  const lifestyle = lib.rollFromTable(lifestyleTables[marriage.socialClass], 100)

  const home = lib.rollFromTable(homeTable, 100, homeBiases[marriage.lifestyle])

  return Object.assign(marriage, { lifestyle, home })
}
