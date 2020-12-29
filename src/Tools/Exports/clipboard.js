setup.copyText = () => {
  const jsonText = State.variables.outputEverything
  updateClipboard(jsonText)
}

function updateClipboard (copyText) {
  navigator.clipboard.writeText(copyText).then(function () {
    setup.notify('Copied to the clipboard successfully!')
  }, function () {
    setup.notify('Copy to the clipboard failed!')
  })
}
