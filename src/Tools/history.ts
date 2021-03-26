import { addGtagEvent } from './addGtagEvent'

// uses State.variables.history
export const history = (object: any, passageName: string, linkDescription: string) => {
  addToHistory(object, passageName, linkDescription)
  // window.location.search = `${passageName}=${object.key}`
  addGtagEvent()
}

/**
 * Adds to the history
 * @param {any} object
 * @param {string} passageName
 * @param {string} linkDescription
 */
function addToHistory (object: any, passageName: string, linkDescription: string) {
  const history = State.variables.history as any[]
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
