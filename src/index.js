window.setup = {}

require('./extensions')
require('./scripting')

window.version = {
  title: 'SugarCube',
  major: 2,
  minor: 19
}

window.Macro = {
  add () { }
}

window.Setting = {
  addHeader () { },
  addToggle () { },
  save () { }
}

function requireAll (requires) {
  return requires.keys().map(requires)
}

requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.js$/))
requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.css$/))
