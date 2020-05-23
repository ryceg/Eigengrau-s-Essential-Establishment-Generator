setup.merchantMission = function (town, mission) {
  switch (mission.difficulty) {
    case 'easy':
      mission.readout = [
        `collect a package from the ${town.type} gates, which have been held up by a bureaucratic city official.`,
        "collect a package from the nearest village, where they're caught up in some small-town superstition.",
        'collect a shipment from a relatively nearby city, where there was a severe mix-up with the shipments.',
        'collect some payment from one of the stores to the north, which must be paid off from their mortgage.'
      ].random()
      break
    case 'medium':
      mission.readout = [
        `a recent venture with a ${['supplier', 'rival', 'local official'].random()} has turned out bad, delaying the processing of materials.`,
        'a trade blockade has to be resolved.',
        'a thieves’ guild is targeting us, but may be convinced to look somewhere else.',
        'a master is using materials frivolously, you must go out to harvest a sufficient replacement amount.',
        'a city official is giving us trouble, and needs to get off our backs.'
      ].random()
      break
    case 'hard':
      mission.readout = [
        "An ancient dwarven stronghold's forges has some valuable materials that we need.",
        "I need you to capture a beast, which lives a couple days' travel from here in a quaint pasture— in the wilder parts of the forest.",
        "There's a rare material that we need that's on a faraway island, which is rumored to have cannibals and foul magicks.",
        "There's a mystic mirage that manifests in a desert for twenty minutes once every century. It'll be happening in a couple weeks, and I want it explored."
      ].random()
      break
  }

  return mission
}
