/**
 * When the user scrolls down from the top of the document,
 * update the style of the passage header.
 */
function scrollFunction () {
  const passageHeader = document.getElementById('passage-header')

  if (isScrolledOver(50)) {
    passageHeader.classList.add('scrolled')
  } else {
    passageHeader.classList.remove('scrolled')
  }
}

/**
 * @param {number} amount
 */
function isScrolledOver (amount) {
  return document.body.scrollTop > amount || document.documentElement.scrollTop > amount
}

window.addEventListener('scroll', scrollFunction)

$(document.documentElement).attr('lang', 'en')

$('<span id="badge" />')
  // eslint-disable-next-line function-call-context/call-in-function
  .wiki(lib.createBadge(lib.badges.fun.random(), { imgArgs: 'style=width:100%' }))
  .ariaClick(function () {
    $(this).empty().wiki(lib.createBadge(lib.badges.fun.random(), { imgArgs: 'style=width:100%' }))
  })
  .appendTo('#fun-container')

$(document.body).append('<div class="background-image" />')

window.onpopstate = function () {
  if (window.history.state) {
    const historyLength = State.variables.history.length
    if (historyLength >= 1) {
      const index = getIndexOfCurrentHistory(State.variables.history, window.history.state) - 1
      State.variables.currentPassage.key = State.variables.history[index].data.key
      Engine.play(State.variables.history[index].data.passageName)
      // window.history.replaceState(State.variables.history[index].data, State.variables.history[index].passageName)
      State.variables.history.length -= 1
    } else if (historyLength === 0) {
      State.variables.history.length = 0
      Engine.play('Start')
    }
    $(document).trigger(':liveupdate')
  }
}

/**
 * @param {import("../Tools/history").HistoryItem[]} history
 * @param {import("../Tools/history").HistoryItem[]} state
 * @returns {number}
 */
function getIndexOfCurrentHistory (history, state) {
  /**
   * @type {number}
   */
  const index = history.findIndex(item => {
    return state.data.key === item.data.key
  })
  if (index === -1) return history.length
  return index
}
