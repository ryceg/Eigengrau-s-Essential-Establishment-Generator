setup.religiosity = [
  // npc.name is a _______
  [0, 'broken heretic'],
  [10, 'outspoken cynic'],
  [20, 'critical student'],
  [30, 'cautious listener'],
  [40, 'open-minded seeker'],
  [50, 'casual observer'],
  [60, 'quiet true believer'],
  [70, 'outspoken believer'],
  [80, 'conspicuously faithful'],
  [90, 'unshakingly devoted'],
  [100, 'fanatical true believer']
]

setup.createReligiosity = function (town, npc) {
  npc.roll.religiosity = Math.fairmath(dice(2, 40) + 10, (town.roll.religiosity - 50))

  npc.religion = {}
  npc.religion.strength = function (npc) {
    setup.religiosity.find(function (i) {
      return setup.religiosity[i][0] >= npc.roll.religiosity
    })
  }
}
