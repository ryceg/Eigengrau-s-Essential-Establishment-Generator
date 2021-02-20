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
