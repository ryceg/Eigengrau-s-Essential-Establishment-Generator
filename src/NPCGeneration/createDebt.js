// uses setup.createRelationship and setup.createNPC so can't be translated.
setup.createDebt = (town, npc) => {
  console.groupCollapsed(`${npc.name} is in debt!`)
  /** @description expressed in copper! Assumed to be negative (often is not, though!) */
  const profit = lib.npcProfit(town, npc)
  /** @description expressed in copper */
  const grossIncome = lib.npcGrossIncome(town, npc)
  /** @description typically a floating point, ~0.2 */
  const debtRate = Math.abs(profit / grossIncome)
  /** @description usually 3-10 */
  const cashLiquidity = Math.abs(grossIncome / profit)
  console.log({
    profit,
    grossIncome,
    debtRate,
    cashLiquidity
  })
  // TODO a lot of the maths in here is really fucky. Someone with an economics degree please save me.
  if (npc.wealth > (cashLiquidity * grossIncome)) {
    console.log(`${npc.name} has too much cash (${npc.wealth}), and is losing some of that to pay debts.`)
    npc.wealth *= 1 - debtRate
  }

  if (profit < -40) {
    const debtor = findDebtor(town, npc, 'moneylender') || createDebtor(town)
    setup.createRelationship(town, npc, debtor, 'debtor', 'creditor')
    npc.finances.creditors[debtor.key] = Math.round(cashLiquidity * grossIncome)
    debtor.finances.debtors[npc.key] = npc.finances.creditors[debtor.key]
  }

  if (profit < -300 || lib.socialClass[npc.socialClass].key <= 3) {
    const predatoryDebtor = findDebtor(town, npc, 'predatory debtor') || createDebtor(town)
    setup.createRelationship(town, npc, predatoryDebtor, 'predatory debtor', 'creditor')
    npc.finances.creditors[predatoryDebtor.key] = Math.round(cashLiquidity * grossIncome * (random(1) + random(2, 4)))
    predatoryDebtor.finances.debtors[npc.key] = npc.finances.creditors[predatoryDebtor.key]
  }

  console.groupEnd()
}

/**
 * @param {Town} town
 * @param {NPC} npc
 * @param {string} type
 */
function findDebtor (town, npc, type) {
  const profession = town.professions[type]

  if (profession && profession.population > 0) {
    return Object.values(State.variables.npcs).find(otherNPC => {
      return otherNPC.profession === type && otherNPC.key !== npc.key
    })
  }
}

/**
 * @param {Town} town
 * @returns {NPC}
 */
function createDebtor (town) {
  return setup.createNPC(town, {
    professionSector: 'crime',
    isShallow: true
  })
}
