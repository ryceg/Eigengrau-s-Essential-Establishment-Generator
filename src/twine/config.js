/***********************************************************************************************************************

  config.js

  Copyright © 2013–2018 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
  Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/

// Helper errors.
function _throwHistoryModeError () {
  return new Error(
    'Config.history.mode has been deprecated and is no longer used by SugarCube, please remove it from your code'
  )
}

function _throwHistoryTrackingError () {
  return new Error(
    'Config.history.tracking has been deprecated, use Config.history.maxStates instead'
  )
}

/*
  Config API static object.
*/
const Config = Object.seal({
  /*
      General properties.
    */
  debug: false,
  addVisitedLinkClass: false,
  cleanupWikifierOutput: false,
  loadDelay: 0,

  /*
      State history properties.
    */
  history: Object.seal({
    controls: true,
    maxStates: 100,

    // Die if deprecated `Config.history` properties are accessed.
    // TODO: Remove these.
    get mode () {
      throw _throwHistoryModeError()
    },
    set mode (_) {
      throw _throwHistoryModeError()
    },
    get tracking () {
      throw _throwHistoryTrackingError()
    },
    set tracking (_) {
      throw _throwHistoryTrackingError()
    }
  }),

  /*
      Macros properties.
    */
  macros: Object.seal({
    ifAssignmentError: true,
    maxLoopIterations: 1000
  }),

  /*
      Navigation properties.
    */
  navigation: Object.seal({
    override: undefined
  }),

  /*
      Passages properties.
    */
  passages: Object.seal({
    descriptions: undefined,
    displayTitles: false,
    nobr: false,
    start: undefined, // NOTE: Set by `Story.load()`.
    transitionOut: undefined
  }),

  /*
      Saves properties.
    */
  saves: Object.seal({
    autoload: undefined,
    autosave: undefined,
    id: 'untitled-story',
    isAllowed: undefined,
    onLoad: undefined,
    onSave: undefined,
    slots: 8,
    version: undefined
  }),

  /*
      UI properties.
    */
  ui: Object.seal({
    stowBarInitially: 800,
    updateStoryElements: true
  }),

  /*
      Transition properties.
    */
  transitionEndEventName: (() => {
    const teMap = new Map([
      ['transition', 'transitionend'],
      ['MSTransition', 'msTransitionEnd'],
      ['WebkitTransition', 'webkitTransitionEnd'],
      ['MozTransition', 'transitionend']
    ])
    const keys = [...teMap.keys()]
    const el = document.createElement('div')

    for (let i = 0; i < keys.length; ++i) {
      if (el.style[keys[i]] !== undefined) {
        return teMap.get(keys[i])
      }
    }

    return ''
  })()
})

/*
  Module Exports.
*/
export default Config
