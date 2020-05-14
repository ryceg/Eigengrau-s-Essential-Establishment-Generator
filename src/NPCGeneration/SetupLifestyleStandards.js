setup.lifestyleTables = {
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

setup.homeBiases = {
  aristocratic: 40,
  wealthy: 20,
  comfortable: 10,
  modest: 0,
  poor: -10,
  squalid: -20,
  wretched: -40
}

setup.homeTable = [
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

setup.createlifestyleStandards = function (town, npc) {
  console.groupCollapsed(`Creating living standards for ${npc.name}`)
  const isCurrently = [
    'has been',
    'has recently been',
    'is',
    'is currently'
  ].seededrandom()
  const isHaving = [
    'has been having',
    'has recently had',
    'is having',
    'is currently having'
  ].seededrandom()
  const desc = setup.findProfession(town, npc)
  const tippy = `<span id=` + JSON.stringify(npc.firstName) + ` class=tip title=` + JSON.stringify(desc.description.toUpperFirst()) + `><span class="dotted">` + npc.dndClass + `</span></span>`

  const wageVarianceNotes = [
    [-25, isCurrently + ' impossibly unsuccessful as'],
    [-18, isCurrently + ' incredibly unsuccessful as'],
    [-12, isCurrently + ' unsuccessful as'],
    [-8, isCurrently + ' somewhat unsuccessful as'],
    [-5, isCurrently + ' slightly unsuccessful as'],
    [0, 'is'],
    [5, [
      isCurrently + ' mildly successful as',
      isHaving + ' mild success as'
    ].seededrandom()],
    [8, [
      isCurrently + ' reasonably successful as',
      isHaving + ' reasonable success as'
    ].seededrandom()],
    [8, [
      isCurrently + ' modestly successful as',
      isHaving + ' modest success as'
    ].seededrandom()],
    [12, [
      isCurrently + ' successful as',
      isHaving + ' success as'
    ].seededrandom()],
    [12, [
      isCurrently + ' fabulously successful as',
      isHaving + ' fabulous success as'
    ].seededrandom()],
    [25, [
      isCurrently + ' extremely successful as',
      isHaving + ' extreme success as'
    ].seededrandom()]
  ]
  const note = wageVarianceNotes.find(function (desc) {
    return desc[0] >= npc.roll.wageVariation(town)
  }) + ' ' + setup.articles.output(tippy)
  npc.professionSuccess = (npc.firstName + ' ' + note[1] + '' || wageVarianceNotes[5][1])
  console.groupEnd()
  return npc
}

setup.createFamilyLifestyle = function (marriage) {
  const lifestyle = setup.rollFromTable(
    setup.lifestyleTables[marriage.socialClass], 100)

  const home = setup.rollFromTable(
    setup.homeTable, 100, setup.homeBiases[marriage.lifestyle])

  return Object.assign(marriage, { lifestyle, home })
}
