setup.tippy = function (selector) {
  addEventListener('load', function () {
    tippy(selector)
  })
  // I'm really not sure why it doesn't work without the delay here.
  setTimeout(() => tippy(selector), 10)
}

setup.createTippy = readout => {
  // to be used when you want to wrap a tippy around something i.e. you know what you're doing
  // note the lack of a closing span
  return `<span class="tip" title=${JSON.stringify(readout)}><<run setup.tippy("span.tip")>>`
}

setup.createTippyWord = (tippy, word) => {
  // assumes that the first argument was created using the createTippy function
  // note the two closing spans to accomodate this
  return `${tippy}<span class="dotted">${word}</span></span>`
}

setup.createTippyFull = (readout, word) => {
  // the function that should be used most of the time.
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
