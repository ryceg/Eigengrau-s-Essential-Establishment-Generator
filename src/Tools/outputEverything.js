setup.outputEverything = () => {
  const output = {
    start: setup.textify('Start'),
    town: setup.textify('TownOutput')
  }
  return JSON.stringify(output)
}

setup.textify = (passageTitle, currentPassage) => {
  if (currentPassage) State.variables.currentPassage = currentPassage
  State.temporary.isTextOutput = true
  const temp = Util.escape($('<div />').wiki(Story.get(passageTitle).processText()).html())
  return temp
}
