import { addGtagEvent } from './addGtagEvent'

// uses State.variables.history
export const history = (object: any, passageName = object.passageName, linkDescription = object.linkDescription || object.name) => {
  addToHistory(object, passageName, linkDescription)
  // window.location.search = `${passageName}=${object.key}`
  addGtagEvent()
}

export interface HistoryItem {
      key?: string
      objectType?: string
      passageName: string
      linkDescription: string
}

/**
 * Adds to the history
 */
function addToHistory (
  object: any,
  passageName = object.passageName,
  linkDescription = object.linkDescription || object.name) {
  const SVhistory = State.variables.history
  const objectType = object.objectType || null
  const key = object.parentKey || object.key || null
  const state: HistoryItem = {
    key,
    objectType,
    passageName,
    linkDescription
  }
  if (SVhistory.length > 0 && SVhistory.last()?.linkDescription === linkDescription) return
  if (Array.isArray(SVhistory)) {
    SVhistory.push(state)
  }

  window.history.pushState(state, passageName)
  window.location.hash = key || passageName
}
