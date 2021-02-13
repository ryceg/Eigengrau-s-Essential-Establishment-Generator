export const openPantheonDialogue = () => {
  Dialog.setup('Pantheon Setup')
  Dialog.wiki(Story.get('ImportPantheon').processText())
  Dialog.open()
}

$(document).on(':dialogopened', function () {
  if ($('#ui-dialog-body').hasClass('settings')) {
    setup.addSettingButton({
      target: 'showbiomegeneration',
      name: 'pantheon',
      description: 'Choose a pantheon to use.',
      buttonDescription: 'Open pantheon settings'
    },
    openPantheonDialogue)
  }
})
