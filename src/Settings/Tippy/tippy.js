setup.tippy = function (selector) {
  addEventListener('load', function () {
    tippy(selector)
  })
  // I'm really not sure why it doesn't work without the delay here.
  setTimeout(() => tippy(selector), 10)
}

const tip = tippy('[title]')

tippy.browser.onUserInputChange = type => {
  const method = type === 'touch' ? 'disable' : 'enable'
  for (const tooltip of tip.tooltips) {
    tooltip[method]()
  }
}

$(document).on(':passageend', function (ev) {
  tippy('.tip')
})
