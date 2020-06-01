/* global Setting State */
Setting.addHeader('Content Settings')

Setting.addToggle('showSliders', {
  label: 'Show sliders?',
  onInit: false
})

const settingShowTutorial = function () {
  const showTutorial = State.metadata.get('showTutorial')
  if (settings.showTutorial !== showTutorial) {
    State.metadata.set('showTutorial', settings.showTutorial)
  }
}

const settingHideAds = function () {
  if (!settings.hideAds) {
    State.variables.data.hideAds = false
    $.wiki('<<remember $data.hideAds = false>>')
  } else {
    State.variables.data.hideAds = true
    $.wiki('<<remember $data.hideAds = true>>')
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

Setting.addToggle('silverStandard', {
  label: 'Silver Standard?'
})

Setting.addToggle('hideAds', {
  label: 'Hide ads?',
  onInit: false,
  onChange: settingHideAds
})

Setting.addToggle('ignoreGender', {
  label: 'Ignore gender inequality?',
  onInit: false
})

Setting.save()
