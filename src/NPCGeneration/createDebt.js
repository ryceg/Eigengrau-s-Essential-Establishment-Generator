setup.createDebt = (town, npc) => {
  console.groupCollapsed(`${npc.name} is in debt!`)
  const profit = setup.npcProfit(town, npc) // expressed in copper! Assumed to be negative (often is not, though!)
  const grossIncome = setup.npcGrossIncome(town, npc) // expressed in copper!
  const debtRate = Math.abs(profit / grossIncome) // typically a floating point, ~0.2
  const cashLiquidity = Math.abs(grossIncome / profit) // usually 3-10
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
    const debtor = findOrCreateDebtor(town, npc)
    setup.createRelationship(town, npc, debtor, 'debtor', 'creditor')
    npc.finances.creditors[debtor.key] = Math.round(cashLiquidity * grossIncome)
    debtor.finances.debtors[npc.key] = npc.finances.creditors[debtor.key]
  }

  if (profit < -300 || setup.socialClass[npc.socialClass].key <= 3) {
    const predatoryDebtor = findOrCreatePredatoryDebtor(town, npc)
    setup.createRelationship(town, npc, predatoryDebtor, 'predatory debtor', 'creditor')
    npc.finances.creditors[predatoryDebtor.key] = Math.round(cashLiquidity * grossIncome * (random(1) + random(2, 4)))
    predatoryDebtor.finances.debtors[npc.key] = npc.finances.creditors[predatoryDebtor.key]
  }

  console.groupEnd()
}

/**
 * @param {Town} town
 * @param {NPC} npc
 */
function findOrCreateDebtor (town, npc) {
  const found = Object.values(State.variables.npcs).find(otherNPC => {
    return otherNPC.profession === 'moneylender' && otherNPC.key !== npc.key
  })
  return found || setup.createNPC(town, { profession: 'moneylender', isShallow: true })
}

/**
 * @param {Town} town
 * @param {NPC} npc
 */
function findOrCreatePredatoryDebtor (town, npc) {
  const found = Object.values(State.variables.npcs).find(otherNPC => {
    return otherNPC.profession === 'loan shark' && otherNPC.key !== npc.key
  })
  return found || setup.createNPC(town, { profession: 'loan shark', isShallow: true })
}
