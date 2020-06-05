setup.createAlchemistName = chemistFirstName => {
  const alchemistNameRoll = dice(1, 5)
  let name
  switch (alchemistNameRoll) {
    case 1:
      name = `The ${setup.alchemist.name.adjective.random()} ${setup.alchemist.name.noun.random()}`
      break
    case 2:
      name = `${chemistFirstName} and ${setup.alchemist.name.adjective.random()}`
      // name = `The ${setup.alchemist.name.adjective.random()} ${setup.alchemist.name.noun.random()}`
      break
    case 3:
      name = `The ${setup.alchemist.name.noun.random()} and ${setup.alchemist.name.adjective.random()}`
      break
    case 4:
      name = `The ${setup.alchemist.name.adjective.random()} ${setup.alchemist.name.rider.random()}`
      break
    case 5:
      name = `${setup.alchemist.name.adjective.random()} ${setup.alchemist.name.noun.random()}`
      break
    default:
      name = `The ${setup.alchemist.name.adjective.random()} Alchemist`
  }
  return name
}
