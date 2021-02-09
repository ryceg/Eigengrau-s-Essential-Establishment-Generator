export const pantheonSetup = () => {
  Dialog.setup('Pantheon Setup')
  Dialog.wiki(Story.get('ImportPantheon').processText())
  Dialog.open()
}

$(document).on(':dialogopened', function () {
  if ($('#ui-dialog-body').hasClass('settings')) {
    $('#setting-body-showtutorial').parent('div').prepend(
      $(document.createElement('div'))
        .append('Choose a pantheon to use.')
    )
  }
})
