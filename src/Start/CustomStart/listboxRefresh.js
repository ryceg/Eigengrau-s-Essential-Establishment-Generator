$('body').on('change', '.auto-update select', () => {
  const { terrain, location } = State.variables.tempTown
  switch (passage()) {
    case 'BiomeGeneration':
    case 'BiomeGenerationRefresh':
      State.variables.listboxes = {
        terrain: Object.keys(lib.terrain),
        location: Object.keys(lib.terrain[terrain].location),
        vegetation: ['thick', 'lush', 'sparse', 'desolate'],
        origin: lib.terrain[terrain].location[location].origin,
        primaryCrop: lib.townData.misc.primaryCrop,
        primaryExport: lib.townData.misc.primaryExport,
        season: Object.keys(lib.terrain.temperate.weather.season),
        economicIdeology: lib.economicPairs,
        politicalIdeology: lib.politicalIdeologyPairs,
        politicalSource: ['absolute monarchy', 'constitutional monarchy', 'republic', 'anarchy']
      }
      break
    case 'NPCProfileEdit':
  }

  $(document).trigger(':liveupdate')
})

$(document).on(':passageend', () => {
  lib.addTippyAccessibility()
  tippy('.tip')
})
