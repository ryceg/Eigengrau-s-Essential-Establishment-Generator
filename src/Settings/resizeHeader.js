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

// Adds tippyAccessibility on passage finish to ensure that no tip is left behind.
$(document).on(':passagedisplay', function (ev) {
  lib.addTippyAccessibility()
})
