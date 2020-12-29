export const tippy = function (selector: string) {
  addEventListener('load', function () {
    tippy(selector)
  })
  // I'm really not sure why it doesn't work without the delay here.
  setTimeout(() => tippy(selector), 10)
}

const tip = tippy('[title]')

tippy.browser.onUserInputChange = (type: string) => {
  const method = type === 'touch' ? 'disable' : 'enable'
  for (const tooltip of tip.tooltips) {
    tooltip[method]()
  }
}

$(document).on(':passageend', function () {
  tippy('.tip')
})
