setup.createAlchemistName = chemistFirstName => {
  return [
      `The ${setup.alchemist.name.adjective.random()} ${setup.alchemist.name.noun.random()}`,
      `${chemistFirstName} and ${setup.alchemist.name.adjective.random()}`,
      `The ${setup.alchemist.name.noun.random()} and ${setup.alchemist.name.adjective.random()}`,
      `The ${setup.alchemist.name.adjective.random()} ${setup.alchemist.name.rider.random()}`,
      `${setup.alchemist.name.adjective.random()} ${setup.alchemist.name.noun.random()}`,
      `The ${setup.alchemist.name.adjective.random()} Alchemist`
  ].random()
}
