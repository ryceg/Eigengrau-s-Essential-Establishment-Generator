
setup.textify = function (passageName, currentPassage) {
  if (currentPassage) State.variables.currentPassage = currentPassage
  State.temporary.isTextOutput = true
  const raw = Story.get(passageName).processText()
  const $offshore = $('<div />')
  $offshore.wiki(raw)
  $offshore.find('button').remove()
  return `${Util.escape($offshore.html())}`
}

setup.outputEverything = () => {
  const output = {
    start: setup.textify('Start'),
    town: setup.textify('TownOutput'),
    buildings: {},
    factions: {},
    npcs: {}
  }
  for (const building of State.variables.town.buildings) {
    output.buildings[building.key] = setup.textify(building.passageName, building)
  }
  for (const faction of Object.keys(State.variables.town.factions)) {
    output.factions[State.variables.town.factions[faction].key] = setup.textify(State.variables.town.factions[faction].passageName, State.variables.town.factions[faction])
  }

  for (const npc of Object.keys(State.variables.npcs)) {
    output.npcs[State.variables.npcs[npc].key] = setup.textify(State.variables.npcs[npc].passageName, State.variables.npcs[npc])
  }
  const json = JSON.stringify(output)
  updateClipboard(json)
  return json
}

$(document).on(':passageinit', function () {
  const params = new URL(document.location).searchParams
  const key = params.get('export')
  if (key) {
    // const obj = setup.findViaKey(key)
    Engine.play('BlankOutput', true)
    // $('#everything').text(setup.textify(obj.passageName, obj))
  }
})

setup.copyText = () => {
  const copyText = document.querySelector('#everything')
  navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
    if (result.state === 'granted' || result.state === 'prompt') {
      updateClipboard(copyText)
    }
  })
}

function updateClipboard (copyText) {
  navigator.clipboard.writeText(copyText).then(function () {
    /* clipboard successfully set */
  }, function () {
    /* clipboard write failed */
  })
}
