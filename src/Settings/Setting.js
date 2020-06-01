/* global Setting State */
Setting.addHeader('Content Settings')

const settingShowTutorial = function () {
  const showTutorial = State.metadata.get('showTutorial')
  if (settings.showTutorial !== showTutorial) {
    State.metadata.set('showTutorial', settings.showTutorial)
  }
}

const settingHideAds = function () {
  if (settings.hideAds === true) {
    settings.hideAds = true
  } else {
    settings.hideAds = false
  }
}

Setting.addToggle('showTutorial', {
  label: 'Show tutorial?',
  onChange: settingShowTutorial
})

Setting.addToggle('showCelsius', {
  label: 'Show celsius?'
})

Setting.addToggle('showMetric', {
  label: 'Show metric?'
})

Setting.addToggle('showSliders', {
  label: '<span id="sliders" class="tip dotted" title="If you would like to change the output of buildings, enable this. Warning: feature is in beta.">Show sliders?</span>',
  onInit: false
})

Setting.addToggle('silverStandard', {
  label: '<span id="silver" class="tip dotted" title="This is based off the popular homebrew rule where money is divided by ten, so the silver is the standard, reserving gold for kings, making it feel truly like a treasure.">Silver Standard?</span>'
})

Setting.addToggle('ignoreGender', {
  label: '<span id="gender" class="tip dotted" title="If you would rather NPCs not be limited in the professions that they take due to sexism, enable this.">Ignore gender inequality?</span>',
  onInit: false
})

Setting.addToggle('hideAds', {
  label: '<span id="ads" class="tip dotted" title="This is free, open-source software. Please consider supporting us- this option is available to give people a cleaner interface (for streaming, etc.).">Hide ads?</span>',
  onInit: false,
  onChange: settingHideAds
})

Setting.save()
