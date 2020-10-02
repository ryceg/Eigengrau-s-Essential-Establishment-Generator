$('body').on('change', '.auto-update select', function (ev) {
  State.variables.listboxes = {
    terrain: Object.keys(lib.terrain),
    location: Object.keys(lib.terrain[State.variables.tempTown.terrain].location),
    vegetation: ['thick', 'lush', 'sparse', 'desolate'],
    origin: lib.terrain[State.variables.tempTown.terrain].location[State.variables.tempTown.location].origin,
    primaryCrop: lib.townData.misc.primaryCrop,
    primaryExport: lib.townData.misc.primaryExport,
    season: Object.keys(lib.terrain.temperate.weather.season),
    economicIdeology: { feudalist: 'feudalism', capitalist: 'capitalism', syndicalist: 'syndicalism', communist: 'communism', primitivist: 'primitivism' },
    politicalIdeology: { autocratic: 'autocracy', meritocratic: 'meritocracy', democratic: 'democracy', kleptocratic: 'kleptocracy', magocratic: 'magocracy', militocratic: 'militocracy', oligarchic: 'oligarchy', sophocratic: 'sophocracy', theocratic: 'theocracy', technocratic: 'theocracy' },
    politicalSource: ['absolute monarchy', 'constitutional monarchy', 'republic', 'anarchy']
  }
  $(document).trigger(':liveupdate')
})
