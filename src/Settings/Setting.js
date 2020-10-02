/* global Setting State */
Setting.addHeader('Content Settings')

if (State.metadata.get('ignoreGender') !== settings.ignoreGender) {
  settings.ignoreGender = State.metadata.get('ignoreGender')
}

if (State.metadata.get('showTutorial') !== settings.showTutorial) {
  settings.showTutorial = State.metadata.get('showTutorial')
}

if (State.metadata.get('showBiomeGenerationSettings') !== settings.showBiomeGenerationSettings) {
  settings.showBiomeGenerationSettings = State.metadata.get('showBiomeGenerationSettings')
}

if (State.metadata.get('forceOneColumn') !== settings.forceOneColumn) {
  settings.forceOneColumn = State.metadata.get('forceOneColumn')
}

if (settings.forceOneColumn) {
  jQuery('html').addClass('force-one-column')
}

const settingShowTutorial = function () {
  const showTutorial = State.metadata.get('showTutorial')
  if (settings.showTutorial !== showTutorial) {
    State.metadata.set('showTutorial', settings.showTutorial)
  }
}

const settingIgnoreGender = function () {
  const ignoreGender = State.metadata.get('ignoreGender')
  if (settings.ignoreGender !== ignoreGender) {
    State.metadata.set('ignoreGender', settings.ignoreGender)
    State.variables.town.ignoreGender = settings.ignoreGender
  }
}

const settingshowBiomeGenerationSettings = function () {
  const showBiomeGenerationSettings = State.metadata.get('showBiomeGenerationSettings')
  if (settings.showBiomeGenerationSettings !== showBiomeGenerationSettings) {
    State.metadata.set('showBiomeGenerationSettings', settings.showBiomeGenerationSettings)
  }
}

const settingHideAds = function () {
  if (settings.hideAds === true) {
    settings.hideAds = true
  } else {
    settings.hideAds = false
  }
}

const settingForceOneColumn = function () {
  const forceOneColumn = State.metadata.get('forceOneColumn')
  if (settings.forceOneColumn !== forceOneColumn) {
    State.metadata.set('forceOneColumn', settings.forceOneColumn)
  }
  if (settings.forceOneColumn) {
    jQuery('html').addClass('force-one-column')
  } else {
    jQuery('html').removeClass('force-one-column')
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

Setting.addToggle('showBiomeGenerationSettings', {
  label: '<span id="sliders" class="tip dotted" title="If you want to specify the biome and demographics before town creation, enable this.">Show town biome prompt upon restart?</span>',
  onChange: settingshowBiomeGenerationSettings
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
  onChange: settingIgnoreGender
})

Setting.addToggle('forceOneColumn', {
  label: '<span id="oneColumn" class="tip dotted" title="Force one column for larger screens.">Force one column?</span>',
  desc: 'Force one column for larger screens',
  onChange: settingForceOneColumn
})

Setting.addToggle('hideAds', {
  label: '<span id="ads" class="tip dotted" title="This is free, open-source software. Please consider supporting us- this option is available to give people a cleaner interface (for streaming, etc.).">Hide ads?</span>',
  onInit: false,
  onChange: settingHideAds
})

Setting.save()
