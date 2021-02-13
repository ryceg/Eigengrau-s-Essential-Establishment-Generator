$(document).on(':dialogopened', function () {
  if ($('#ui-dialog-body').hasClass('settings')) {
    setup.addSettingButton({
      target: 'showbiomegeneration',
      name: 'pantheon',
      description: 'Choose a pantheon to use.',
      buttonDescription: 'Open pantheon settings'
    },
    setup.openDialog({
      header: 'Pantheon Setup',
      passage: 'ImportPantheon',
      rerender: true
    }))
  }
})
