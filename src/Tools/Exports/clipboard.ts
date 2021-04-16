export const copyText = (jsonText: string) => {
  if (!jsonText) jsonText = State.variables.outputEverything as string
  updateClipboard(jsonText)
}

function updateClipboard (copyText: string) {
  navigator.clipboard.writeText(copyText).then(function () {
    $('#notify').trigger(':notify', { message: 'Copied to the clipboard successfully!' })
  }, function () {
    $('#notify').trigger(':notify', { message: 'Copy to the clipboard failed!' })
  })
}
