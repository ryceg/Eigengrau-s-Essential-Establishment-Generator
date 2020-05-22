setup.tippy = function (selector) {
  addEventListener('load', function () {
    tippy(selector)
  })
}

setup.createTippy = readout => {
  return `<span class="tip" title=${JSON.stringify(readout)}><<run setup.tippy("span")>>`
}

setup.createTippyWord = (tippy, word) => {
  return `${tippy}<span class="dotted">${word}</span></span>`
}

setup.createFullTippyFull = (readout, word) => {
  return setup.createTippyWord(setup.createTippy(readout), word)
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
