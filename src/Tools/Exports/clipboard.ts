export const copyText = (jsonText: string) => {
  if (!jsonText) jsonText = State.variables.outputEverything as string
  updateClipboard(jsonText)
}

function updateClipboard (copyText: string) {
  navigator.clipboard.writeText(copyText).then(function () {
    $(document).trigger({
      type: ':notify',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      message: 'Copied to the clipboard successfully!',
      time: false,
      classes: false
    })
  }, function () {
    $(document).trigger({
      type: ':notify',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      message: 'Copy to the clipboard failed :(',
      time: false,
      classes: false
    })
  })
}
