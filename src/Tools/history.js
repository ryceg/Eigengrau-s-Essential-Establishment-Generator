// uses State.variables.history
setup.history = (object, passageName, linkDescription) => {
  addToHistory(object, passageName, linkDescription)
  // window.location.search = `${passageName}=${object.key}`
  setup.addGtagEvent()
}

/**
 * Adds to the history
 * @param {any} object
 * @param {string} passageName
 * @param {string} linkDescription
 */
function addToHistory (object, passageName, linkDescription) {
  const history = State.variables.history
  passageName = passageName || object.passageName
  linkDescription = linkDescription || object.linkDescription || object.name
  object.objectType = object.objectType || object.passageName
  const key = object.parentKey || object.key || passageName
  if (history.length > 0 && history.last().data.key === key) return
  if (Array.isArray(history)) {
    history.push({
      data: {
        key,
        objectType: object.objectType,
        passageName,
        linkDescription
      },
      passageName,
      linkDescription
    })
  }
}
