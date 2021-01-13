/* eslint-disable @typescript-eslint/ban-ts-comment */
export const tippy = (selector: string) => {
  addEventListener('load', () => {
    tippy(selector)
  })
  // I'm really not sure why it doesn't work without the delay here.
  setTimeout(() => tippy(selector), 10)
}

const tip = tippy('[title]')
// @ts-ignore I don't know how to fix this error, but it works. Trust me.
tippy.browser.onUserInputChange = (type: string) => {
  const method = type === 'touch' ? 'disable' : 'enable'
  // @ts-ignore This one too.
  for (const tooltip of tip.tooltips) {
    tooltip[method]()
  }
}

$(document).on(':passageend', function () {
  tippy('.tip')
})
