setup.tippy = function (selector) {
  addEventListener('load', function () {
    tippy(selector)
  })
}

setup.createTippy = readout => {
  return `<span class="tip" title=${JSON.stringify(readout)}><<run setup.tippy("span")>>`
}

setup.createTippyWord = (tippy, text) => {
  return `${tippy}<span class="dotted">${text}</span></span>`
}

setup.createFullTippyFull = (readout, text) => {
  return setup.createTippyWord(setup.createTippy(readout), text)
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
