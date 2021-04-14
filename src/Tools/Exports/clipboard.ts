export const copyText = (jsonText: JSON) => {
  if (!jsonText) jsonText = State.variables.outputEverything as JSON
  updateClipboard(jsonText)
}

function updateClipboard (copyText: JSON) {
  navigator.clipboard.writeText(copyText).then(function () {
    $('#notify').trigger(':notify', { message: 'Copied to the clipboard successfully!' })
  }, function () {
    $('#notify').trigger(':notify', { message: 'Copy to the clipboard failed!' })
  })
}
