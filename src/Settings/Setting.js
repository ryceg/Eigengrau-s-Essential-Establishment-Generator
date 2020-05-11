/* global Setting State Config */
Setting.addHeader('Content Settings')

Setting.addToggle('showSliders', {
  label: 'Show sliders?',
  onInit: false
})

const settingShowTutorial = function () {
  if (settings.showTutorial) {
    Config.passages.start = 'Start'
  } else {
    Config.passages.start = 'Welcome'
  }
}

const settingHideAds = function () {
  if (!settings.hideAds) {
    State.variables.ads = false
    $.wiki('<<remember $hideAds = false>>')
  } else {
    State.variables.ads = true
    $.wiki('<<remember $hideAds = true>>')
  }
}

Setting.addToggle('showTutorial', {
  label: 'Show tutorial?',
  onChange: settingShowTutorial,
  onInit: settingShowTutorial
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
  onInit: settingHideAds,
  onChange: settingHideAds
})

// var settingPatreonContentHandler = function () {
//   if (Setting.patreonContent) {
//     State.variables.bartender = State.variables.Birchbottom
//   } else {
//     State.variables.bartender = State.variables.backupBartender
//   }
// }

// Setting.addToggle('patreonContent', {
//   label: 'Show Patreon content?',
//   onInit: settingPatreonContentHandler,
//   onChange: settingPatreonContentHandler
// })

Setting.save()
