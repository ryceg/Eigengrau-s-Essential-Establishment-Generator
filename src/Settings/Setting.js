document.cookie = 'SameSite=Strict'
Config.cleanupWikifierOutput = true

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

Setting.addToggle('showCelsius', {
  label: 'Show celsius?'
})

Setting.addToggle('showMetric', {
  label: 'Show metric?'
})

Setting.addToggle('showBiomeGeneration', {
  label: 'Edit biome before generation?',
  desc: 'If you want to specify the biome and demographics before town creation, enable this.',
  onChange: settingShowBiomeGeneration
})

Setting.addToggle('showSliders', {
  label: 'Show sliders?',
  desc: 'If you would like to change the variables of buildings, enable this. Warning: feature is in beta.'
})

Setting.addToggle('silverStandard', {
  label: 'Silver Standard?',
  desc: 'This is based off the popular homebrew rule where money is divided by ten, so the silver is the standard, reserving gold for kings, making it feel truly like a treasure.'
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

Setting.addToggle('forceOneColumn', {
  label: 'Force one column?',
  desc: 'Force one column for larger screens.',
  onChange: settingForceOneColumn
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

if (State.metadata.get('ignoreGender') !== settings.ignoreGender) {
  settings.ignoreGender = State.metadata.get('ignoreGender')
}

if (State.metadata.get('showTutorial') !== settings.showTutorial) {
  settings.showTutorial = State.metadata.get('showTutorial')
}

if (State.metadata.get('disableAnalytics') !== settings.disableAnalytics) {
  settings.disableAnalytics = State.metadata.get('disableAnalytics')
  window['ga-disable-UA-119249239-1'] = settings.disableAnalytics
}

if (State.metadata.get('showBiomeGeneration') !== settings.showBiomeGeneration) {
  settings.showBiomeGeneration = State.metadata.get('showBiomeGeneration')
}

if (State.metadata.get('forceOneColumn') !== settings.forceOneColumn) {
  settings.forceOneColumn = State.metadata.get('forceOneColumn')
}

if (settings.forceOneColumn) {
  jQuery('html').addClass('force-one-column')
}

function settingIgnoreGender () {
  const ignoreGender = State.metadata.get('ignoreGender')
  if (settings.ignoreGender !== ignoreGender) {
    State.metadata.set('ignoreGender', settings.ignoreGender)
    State.variables.town.ignoreGender = settings.ignoreGender
  }
}

function settingIgnoreRace () {
  const ignoreRace = State.metadata.get('ignoreRace')
  if (settings.ignoreRace !== ignoreRace) {
    State.metadata.set('ignoreRace', settings.ignoreRace)
    State.variables.town.ignoreRace = settings.ignoreRace
  }
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

function settingForceOneColumn () {
  const forceOneColumn = State.metadata.get('forceOneColumn')
  if (settings.forceOneColumn !== forceOneColumn) {
    State.metadata.set('forceOneColumn', settings.forceOneColumn)
  }
  addOneColumn()
}

function addOneColumn () {
  if (settings.forceOneColumn) {
    jQuery('html').addClass('force-one-column')
  } else {
    jQuery('html').removeClass('force-one-column')
  }
}

function settingDarkMode () {
  const $html = jQuery('html')

  if (settings.darkMode) {
    $html.addClass('dark')
  } else {
    $html.removeClass('dark')
  }
}
Setting.save()
