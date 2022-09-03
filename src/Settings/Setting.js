document.cookie = 'SameSite=Strict'
Config.cleanupWikifierOutput = true
Config.history.maxStates = 1

$(document).on(':dialogopened', function () {
  if ($('#ui-dialog-body').hasClass('settings')) {
    setup.addSettingButton({
      target: 'showbiomegeneration',
      name: 'pantheon',
      description: 'Choose a pantheon to use.',
      buttonDescription: 'Open pantheon settings'
    },
    () => setup.openDialog({
      header: 'Pantheon Setup',
      passage: 'EditPantheon',
      rerender: true
    })
    )
    setup.addSettingButton({
      target: 'darkmode',
      name: 'tutorial',
      description: 'Run the tutorial again.',
      buttonDescription: 'Open tutorial'
    },
    () => {
      Engine.play('Tutorial')
      Dialog.close()
    }
    )
    setup.addSettingButton({
      target: 'tutorial',
      name: 'patreon',
      description: patreonContent(),
      buttonDescription: buttonName()
    },
    () => {
      if (isPatron()) {
        return window.open('https://www.patreon.com/join/eigengrausgenerator?', 'Patreon')
      } else {
        setup.openDialog({
          header: 'Patreon Content',
          passage: 'ImportPatreon',
          rerender: true
        })
      }
    }
    )
    setup.addSettingButton({
      target: 'pantheon',
      name: 'customImages',
      description: 'Add custom images.',
      buttonDescription: 'Open Image Importer'
    },
    () => {
      if (isPatron()) {
        setup.openDialog({
          header: 'Import Images',
          passage: 'CustomImages',
          rerender: true
        })
      } else {
        setup.openDialog({
          header: 'Patreon Content',
          passage: 'ImportPatreon',
          rerender: true
        })
      }
    }
    )
  }
})

function buttonName () {
  if (isPatron()) return 'Visit Patreon page'
  return 'Enter Code'
}

function isPatron () {
  if (State.metadata.get('patreonPass') === State.variables._) return true
  return false
}

function patreonContent () {
  if (lib.isLocalCopy()) return 'Patreon content is unlocked because you are running a local copy.'
  if (isPatron()) return 'Patreon content is unlocked.'
  return 'Patreon content is not currently unlocked.'
}

Setting.addHeader('Content Settings')

Setting.addToggle('darkMode', {
  label: 'Dark Mode?',
  onInit: settingDarkMode,
  onChange: settingDarkMode,
  default: window.matchMedia('(prefers-color-scheme: dark)').matches
})

Setting.addToggle('showBiomeGeneration', {
  label: 'Edit biome before generation?',
  desc: 'If you want to specify the biome and demographics before town creation, enable this.',
  onChange: settingShowBiomeGeneration
})

Setting.addToggle('showCelsius', {
  label: 'Show celsius?'
})

Setting.addToggle('showMetric', {
  label: 'Show metric?'
})

Setting.addToggle('silverStandard', {
  label: 'Silver Standard?',
  desc: 'This is based off the popular homebrew rule where money is divided by ten, so the silver is the standard, reserving gold for kings, making it feel truly like a treasure.'
})

Setting.addToggle('disableNSFW', {
  label: 'Disable NSFW content?',
  desc: 'Disables NSFW content such as brothels and slaves from being generated (please report any errant NSFW that gets through the filter). Restart to apply.',
  onChange: settingDisableNSFW
})

Setting.addToggle('ignoreGender', {
  label: 'Ignore gender?',
  desc: 'If you would rather NPCs not be limited in the professions that they take due to sexism, enable this.',
  onChange: settingIgnoreGender
})

Setting.addToggle('ignoreRace', {
  label: 'Ignore race?',
  desc: 'If you would rather NPCs not have racial stereotyping, enable this (this is only used for deity selection).',
  onChange: settingIgnoreRace
})

Setting.addToggle('displayTwoColumns', {
  label: 'Display two columns?',
  desc: 'Display as two columns, like a book?',
  onChange: settingDisplayTwoColumns
})

Setting.addToggle('hideAds', {
  label: 'Hide ads?',
  desc: 'This is free, open-source software. Please consider supporting us- this option is available to give people a cleaner interface (for streaming, etc.).',
  onChange: settingHideAds
})

Setting.addToggle('disableAnalytics', {
  label: 'Disable analytics?',
  desc: 'We just use analytics to know how many people use the site, and what they find useful- nothing sinister, we swear!',
  onChange: settingDisableAnalytics
})

if (State.metadata.get('ignoreGender') !== settings?.ignoreGender) {
  settings.ignoreGender = State.metadata.get('ignoreGender')
}

if (State.metadata.get('disableAnalytics') !== settings.disableAnalytics) {
  settings.disableAnalytics = State.metadata.get('disableAnalytics')
  window['ga-disable-UA-119249239-1'] = settings.disableAnalytics
}

if (State.metadata.get('showBiomeGeneration') !== settings.showBiomeGeneration) {
  settings.showBiomeGeneration = State.metadata.get('showBiomeGeneration')
}

if (State.metadata.get('disableNSFW') !== settings.disableNSFW) {
  settings.disableNSFW = State.metadata.get('disableNSFW')
}

if (State.metadata.get('displayTwoColumns') !== settings.displayTwoColumns) {
  settings.displayTwoColumns = State.metadata.get('displayTwoColumns')
}

if (settings.displayTwoColumns) {
  jQuery('html').addClass('two-columns')
}

Setting.save()
function settingIgnoreGender () {
  const ignoreGender = State.metadata.get('ignoreGender')
  if (settings.ignoreGender !== ignoreGender) {
    State.metadata.set('ignoreGender', settings.ignoreGender)
    State.variables.town.ignoreGender = settings.ignoreGender
  }
  notifyOfNeedToRestart()
}

function settingIgnoreRace () {
  const ignoreRace = State.metadata.get('ignoreRace')
  if (settings.ignoreRace !== ignoreRace) {
    State.metadata.set('ignoreRace', settings.ignoreRace)
    State.variables.town.ignoreRace = settings.ignoreRace
  }
  notifyOfNeedToRestart()
}

function settingShowBiomeGeneration () {
  const showBiomeGeneration = State.metadata.get('showBiomeGeneration')
  if (settings.showBiomeGeneration !== showBiomeGeneration) {
    State.metadata.set('showBiomeGeneration', settings.showBiomeGeneration)
  }
  setup.addGtagEvent({
    event_category: 'customise biome',
    event_action: 'clicked',
    event_label: 'customised in settings'
  })
  notifyOfNeedToRestart()
}

function settingDisableNSFW () {
  const disableNSFW = State.metadata.get('disableNSFW')
  if (settings.disableNSFW !== disableNSFW) {
    State.metadata.set('disableNSFW', settings.disableNSFW)
    State.variables.town.disableNSFW = settings.disableNSFW
  }
  setup.addGtagEvent({
    event_category: 'customise biome',
    event_action: 'clicked',
    event_label: 'customised in settings'
  })
  notifyOfNeedToRestart()
}

function settingHideAds () {
  if (settings.hideAds === true) {
    settings.hideAds = true
    setup.addGtagEvent({
      event_category: 'hide ads',
      event_action: 'clicked',
      event_label: 'customised in settings'
    })
  } else {
    settings.hideAds = false
  }
}

function settingDisableAnalytics () {
  const disableAnalytics = State.metadata.get('disableAnalytics')
  if (settings.disableAnalytics !== disableAnalytics) {
    State.metadata.set('disableAnalytics', settings.disableAnalytics)
    window['ga-disable-UA-119249239-1'] = settings.disableAnalytics
  }
}

function settingDisplayTwoColumns () {
  const displayTwoColumns = State.metadata.get('displayTwoColumns')
  if (settings.displayTwoColumns !== displayTwoColumns) {
    State.metadata.set('displayTwoColumns', settings.displayTwoColumns)
  }
  addClass('html', settings.displayTwoColumns, 'two-columns')
  if (window.visualViewport.width < 767 && settings.displayTwoColumns) {
    $(document).trigger({
      type: ':notify',
      message: 'Unfortunately, two column formatting looks awful on small screens; increase your viewport in order for this to have an effect.',
      time: 5000,
      classes: false
    })
  }
}

function addClass (targetElement, setting, className) {
  const element = jQuery(targetElement)
  if (setting) {
    element.addClass(className)
  } else {
    element.removeClass(className)
  }
}

function settingDarkMode () {
  addClass('html', settings.darkMode, 'dark')
}
Setting.save()

function notifyOfNeedToRestart () {
  $(document).trigger({
    type: ':notify',
    message: 'These changes will not take effect until you restart.',
    time: false,
    classes: false
  })
}
