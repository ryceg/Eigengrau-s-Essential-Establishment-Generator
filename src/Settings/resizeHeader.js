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
  return (
    document.body.scrollTop > amount ||
    document.documentElement.scrollTop > amount
  )
}

window.addEventListener('scroll', scrollFunction)

$(document.documentElement).attr('lang', 'en')

$(document.body).append('<div class="background-image" />')

window.funBadgeClick = function (e) {
  e.src = lib.createBadgeSrc(lib.random(lib.badges.fun))
  $(document).trigger(':liveupdate')
}

window.onpopstate = function () {
  if (window.history.state) {
    /** @type {number} */
    const historyLength = State.variables.history.length
    const index = historyLength - 2
    if (historyLength > 1) {
      if (State.variables.history[index].key) {
        State.variables.currentPassage.key = State.variables.history[index].key
        Engine.play(State.variables.history[index].passageName)
        State.variables.history.length -= 1
      } else {
        State.variables.history.length = 0
        Engine.play('Start')
      }
      if (!hasBeenNotifiedOfNoForwards() && !State.temporary.noforwards) {
        $(document).trigger({
          type: ':notify',
          message:
            'Unfortunately, due to browser limitations, the forwards button does not work- it can only go backwards! Sorry for the inconvenience.',
          time: false,
          classes: false
        })
        State.temporary.noforwards = true
      }
      $(document).trigger(':liveupdate')
    }
  }

  function hasBeenNotifiedOfNoForwards () {
    const number = recall('noForwardsAllowed', 0)
    if (number >= 3) {
      return true
    } else {
      memorize('noForwardsAllowed', number + 1)
      return false
    }
  }
}
