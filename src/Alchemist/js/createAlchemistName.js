setup.createAlchemistName = chemistFirstName => {
  return [
      `The ${lib.alchemistData.name.adjective.random()} ${lib.alchemistData.name.noun.random()}`,
      `${chemistFirstName} and ${lib.alchemistData.name.adjective.random()}`,
      `The ${lib.alchemistData.name.noun.random()} and ${lib.alchemistData.name.adjective.random()}`,
      `The ${lib.alchemistData.name.adjective.random()} ${lib.alchemistData.name.rider.random()}`,
      `${lib.alchemistData.name.adjective.random()} ${lib.alchemistData.name.noun.random()}`,
      `The ${lib.alchemistData.name.adjective.random()} Alchemist`
  ].random()
}
