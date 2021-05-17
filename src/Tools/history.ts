import { addGtagEvent } from './addGtagEvent'

// uses State.variables.history
export const history = (object: any, passageName: string, linkDescription: string) => {
  addToHistory(object, passageName, linkDescription)
  // window.location.search = `${passageName}=${object.key}`
  addGtagEvent()
}

export interface HistoryItem {
    data: {
      key: string
      objectType: string
      passageName: string
      linkDescription: string
    }
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
  const SVhistory = State.variables.history as HistoryItem[]
  object.objectType = object.objectType || object.passageName
  const key = object.parentKey || object.key || object.name || passageName
  const state = {
    data: {
      key,
      objectType: object.objectType,
      passageName,
      linkDescription
    },
    passageName,
    linkDescription
  }
  if (SVhistory.length > 0 && SVhistory.last().data.key === key) return
  if (Array.isArray(SVhistory)) {
    SVhistory.push(state)
  }

  window.history.pushState(state, passageName)
  // window.location.search = key
}
