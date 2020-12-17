setup.exportAsHtml = function (passageName, currentPassage) {
  if (currentPassage) State.variables.currentPassage = currentPassage
  State.temporary.isTextOutput = true
  const raw = Story.get(passageName).processText()
  let $offshore = $('<div />')
  $offshore.wiki(raw)
  $offshore = setup.removeElement($offshore, '.interactive-only')
  $offshore = setup.autoclicker($offshore)
  $offshore = setup.linkreplaceReplace($offshore)
  $offshore = setup.linkappendReplace($offshore)
  $offshore = setup.clickAndRemoveLink($offshore)
  $offshore = setup.removeElement($offshore, 'button')
  $offshore = setup.removeElement($offshore, '#illustration')
  $offshore = setup.removeElement($offshore, '#paper')
  $offshore = setup.removeElement($offshore, '.error-view')
  $offshore = setup.removeElement($offshore, '.interactive-only')
  // if you need to escape the characters, you can use ${Util.escape($offshore.html())}
  return `${$offshore.html()}`
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
  const link = $offshore.find('.click-and-remove-link').find('a').trigger('click')
  const bold = `<b>${link.text()}</b>`
  link.replaceWith(bold)
  return $offshore
}

setup.linkreplaceReplace = ($offshore) => {
  $offshore.find('.macro-linkreplace').trigger('click')
  $offshore.find('.macro-linkreplace-insert').children().unwrap()
  return $offshore
}

setup.linkappendReplace = ($offshore) => {
  $offshore.find('.macro-linkappend').trigger('click').children().unwrap()
  $offshore.find('.macro-linkappend-insert').children().unwrap()
  $offshore.find('.macro-linkappend-in').children().unwrap()
  return $offshore
}
