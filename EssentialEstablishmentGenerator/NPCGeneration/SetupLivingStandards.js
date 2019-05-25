setup.createLivingStandards = function (town, npc) {
  // eslint-disable-next-line no-unused-vars
  const profession = setup.findProfession(town, npc)
  setup.livingStandards = [
    [1000, 'aristocratic'],
    [400, 'wealthy'],
    [200, 'comfortable'],
    [100, 'modest'],
    [20, 'poor'],
    [10, 'squalid'],
    [0, 'wretched']
  ]

  npc.finances.wageVariation = (dice(10, 10) - 55)
  const wageVarianceNotes = [
    [-25, 'unbelievably unsuccessful as a ' + npc.profession],
    [-12, 'unsuccessful as a ' + npc.profession],
    [-5, 'somewhat unsuccessful as a ' + npc.profession],
    [0, ''],
    [5, 'mildly successful as a ' + npc.profession],
    [12, 'successful as a ' + npc.profession],
    [25, 'extremely successful as a ' + npc.profession]
  ]
  const note = wageVarianceNotes.find(function (desc) {
    return desc[0] <= npc.finances.wageVariation
  })
  console.log(note)
  // if (note !== '') {
  //   npc.note.push(npc.firstName + ' ' + [
  //     'has been',
  //     'has recently been',
  //     'is',
  //     'is currently'
  //   ].seededrandom() +
  //       note + '.')
  // }

  setup.addPercentage = function (target, integer) {
    return target / 100 * integer
  }

  // eslint-disable-next-line no-unused-vars
  const townVariance = ((town.roll.wealth - 50) / 5)

  /* Object.defineProperty(npc.finances.grossIncome, {
    get: setup.addPercentage(
      setup.addPercentage(profession.dailyWage, npc.finances.wageVariation),
      townVariance)
  })
  Object.defineProperty(npc.finances.livingStandard, {
    get: setup.livingStandards.find(function (desc) {
      return desc[0] <= npc.finances.grossIncome
    })
  }) */

  return npc
}
