setup.npcGrossIncome = (town, npc) => {
  // TODO add hobbies
  console.log(`Returning ${npc.name}'s gross income...`)
  const profession = lib.findProfession(town, npc)
  return Math.round(lib.calcPercentage(profession.dailyWage, (npc.roll.wageVariation(town), (town.roll.wealth - 50) / 3)))
}

setup.npcNetIncome = (town, npc) => {
  console.log(`Returning ${npc.name}'s net income...`)
  return Math.round(lib.calcPercentage(setup.npcGrossIncome(town, npc), -setup.npcTaxRate(town, npc)))
}

setup.npcLifestyleStandard = (town, npc) => {
  console.log(`Returning ${npc.name}'s lifestyle standard...`)
  const income = setup.npcNetIncome(town, npc)
  for (const lifestyleStandard of Object.values(lib.lifestyleStandards)) {
    if (income >= lifestyleStandard.incomeThreshold) {
      return lifestyleStandard
    }
  }
}

setup.npcLifestyleExpenses = (town, npc) => {
  console.log(`Returning ${npc.name}'s lifestyle expenses...`)
  const income = setup.npcGrossIncome(town, npc)
  return Math.round(income * (setup.npcLifestyleStandard(town, npc).dailyWagePercentage / 100))
}

setup.npcTotalLifestyleExpenses = (town, npc) => {
  return Math.round(setup.npcLifestyleExpenses(town, npc) + setup.npcLifestyleStandard(town, npc).incomeThreshold)
}

setup.npcProfit = (town, npc) => {
  console.log(`Returning ${npc.name}'s profit...`)
  return Math.round(setup.npcNetIncome(town, npc) - setup.npcTotalLifestyleExpenses(town, npc))
}
