
setup.textify = function (passageName, currentPassage) {
  if (currentPassage) State.variables.currentPassage = currentPassage
  State.temporary.isTextOutput = true
  const raw = Story.get(passageName).processText()
  let $offshore = $('<div />')
  $offshore.wiki(raw)
  $offshore = setup.autoclicker($offshore)
  $offshore = setup.linkreplaceReplace($offshore)
  $offshore = setup.linkappendReplace($offshore)
  $offshore = setup.clickAndRemoveLink($offshore)
  $offshore = setup.removeElement($offshore, 'button')
  $offshore = setup.removeElement($offshore, '.interactive-only')
  $offshore = setup.removeElement($offshore, '.error-view')

  return `${Util.escape($offshore.html())}`
}

setup.removeElement = function ($offshore, element) {
  $offshore.find(element).remove()
  return $offshore
}

setup.autoclicker = function ($offshore) {
  $offshore.find('.autoclick').trigger('click').unwrap()
  return $offshore
}

setup.clickAndRemoveLink = ($offshore) => {
  $offshore.find('.click-and-remove-link')
    .trigger('click')
    .wrapInner('<b></b>')
    .children('b')
    .unwrap().unwrap()
  return $offshore
}

setup.linkreplaceReplace = ($offshore) => {
  $offshore.find('.macro-linkreplace').trigger('click')
  $offshore.find('.macro-linkreplace-insert').children().unwrap()
  return $offshore
}

setup.linkappendReplace = ($offshore) => {
  $offshore.find('.macro-linkappend').trigger('click')
  $offshore.find('.macro-linkappend-insert').children().unwrap()
  return $offshore
}

setup.outputEverything = () => {
  const output = {
    start: setup.textify('Start'),
    town: setup.textify('TownOutput'),
    buildings: {},
    factions: {},
    NPCs: {}
  }
  for (const building of State.variables.town.buildings) {
    output.buildings[building.key] = {
      name: building.name,
      key: building.key,
      output: setup.textify(building.passageName, building)
    }
  }
  for (const faction of Object.values(State.variables.town.factions)) {
    output.factions[faction.key] = {
      name: faction.name,
      key: faction.key,
      output: setup.textify(faction.passageName, faction)
    }
  }

  for (const npc of Object.values(State.variables.npcs)) {
    output.NPCs[npc.key] = {
      name: npc.name,
      key: npc.key,
      output: setup.textify(npc.passageName, npc)
    }
  }
  const json = JSON.stringify(output)
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
  const jsonText = State.variables.outputEverything
  updateClipboard(jsonText)
}

function updateClipboard (copyText) {
  navigator.clipboard.writeText(copyText).then(function () {
    setup.notify('Copied to the clipboard successfully!')
  }, function () {
    setup.notify('Copy to the clipboard failed!')
  })
}
