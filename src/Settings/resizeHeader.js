// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = scrollFunction

function scrollFunction () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('passage-header').classList.add('overlay')
    if (document.getElementById('last-link')) document.getElementById('last-link').style.visibility = 'hidden'
    const title = document.getElementById('page-title')
    title.classList.remove('invis-title')
    title.classList.add('big-title')
  } else {
    document.getElementById('passage-header').classList.remove('overlay')
    if (document.getElementById('last-link')) document.getElementById('last-link').style.visibility = 'visible'
    const title = document.getElementById('page-title')
    title.classList.remove('big-title')
    title.classList.add('invis-title')
  }
}
