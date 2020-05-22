setup.tippy = function (selector) {
  addEventListener('load', function () {
    tippy(selector)
  })
  setTimeout(() => tippy(selector), 10)
}

setup.createTippy = readout => {
  return `<span class="tip" title=${JSON.stringify(readout)}><<run setup.tippy("span.tip")>>`
}

setup.createTippyWord = (tippy, word) => {
  return `${tippy}<span class="dotted">${word}</span></span>`
}

setup.createTippyFull = (readout, word) => {
  return `<span class="tip dotted" title=${JSON.stringify(readout)}>${word}<<run setup.tippy("span.tip")>></span>`
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
