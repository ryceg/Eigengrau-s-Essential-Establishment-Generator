/**
 * TODO: Describe why we do this.
 */
$('body').on('change', '.auto-update select', () => {
  const { terrain, location } = State.variables.tempTown

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

  $(document).trigger(':liveupdate')
})
