
setup.renderWeather = function (town, biome, weather) {
  console.log('Rendering weather...')
  // console.log(weather)

  // if weather is undefined, call the createWeather function
  if (!weather) {
    weather = setup.createWeather(town, biome)
  }
  weather.precipitationLevel = Math.clamp(weather.precipitationLevel, 1, 4)
  weather.precipitationIntensity = Math.clamp(weather.precipitationIntensity, 1, 4)
  // console.log(weather)
  biome = biome || town.terrain

  // tempVariationRoll
  const tempVariationRoll = random(0, 100)

  const tempVariationKeys = Object.keys(setup.townData.terrain[biome].weather.tempVariation).reverse()
  const intKeys = []

  // interpret the key for each tempVariation object as an integer
  for (const key of tempVariationKeys) {
    intKeys.push(parseInt(key))
  }

  // find one that's equal or lesser than tempVariationRoll to use as the final key
  const finalKey = intKeys.find(function (key) {
    if (tempVariationRoll >= key) {
      console.log({ key })
      return key
    }
  }) || 0
  console.log('2')
  if (weather.timer.temperature < 1) {
    console.log('Timer for temperature has run out. Rolling temp timer!')
    console.log({ weather, finalKey })
    weather.timer.temperature = Math.trunc((setup.townData.terrain[biome].weather.tempVariation[finalKey].temperatureTimer || random(24, 48)) / 8)
    console.log({ weather })
    // finalKey = intKeys.find(function (key) {
    //   if (tempVariationRoll >= key) {
    //     console.log('key is: ' + key)
    //     return key
    //   }
    // })
  }
  console.log('3')
  const tempVariation = (setup.townData.terrain[biome].weather.tempVariation[finalKey].temperature || setup.townData.terrain['temperate'].weather.tempVariation[finalKey].temperature)
  console.log('tempVariation: ' + tempVariation)

  weather.temperature = (setup.townData.terrain[biome].weather.season[weather.season].baseTemp || setup.townData.terrain['temperate'].weather['spring'].baseTemp) + tempVariation - random(-2, 2)
  console.log('weather temp: ' + weather.temperature)

  if (weather.timer.precipitation < 1) {
    console.log('Resetting precipitation timer...')
    weather.roll.precipitation = random(1, 100)
    weather.precipitation = setup.weather.precipitationLevel[weather.precipitationLevel](weather)
  }

  if (weather.precipitation === true && weather.temperature <= 32) {
    console.log('Rolling on the freezing table...')
    weather.roll.precipitationIntensity = random(1, 100)
    setup.weather.precipitationIntensity[weather.precipitationIntensity].freezing(weather)
  } else if (weather.precipitation === true) {
    console.log('Rolling on the raining table...')
    weather.roll.precipitationIntensity = random(1, 100)
    setup.weather.precipitationIntensity[weather.precipitationIntensity].raining(weather)
  } else {
    console.log('Clear day!')
    weather.precipitation = 'no precipitation'
    weather.timer.precipitation = random(1, 8)
  }
  console.log('5')
  if (weather.timer.cloud < 1) {
    console.log('Resetting cloud timer...')
    weather.roll.cloud = random(1, 100)
    setup.weather.precipitationIntensity[weather.precipitationIntensity].cloud(weather)
  }

  weather.readout.precipitation = setup.weather.precipitationDescriptors[weather.precipitation].seededrandom()
  if (weather.precipitation !== 'no precipitation' && weather.timer.precipitation > 18) {
    weather.readout.precipitation += ". It doesn't look like it'll be clearing up today"
  } else if (weather.precipitation !== 'no precipitation' && weather.timer.precipitation > 12) {
    weather.readout.precipitation += ". It doesn't look like it'll be clearing up soon"
  } else if (weather.precipitation !== 'no precipitation' && weather.timer.precipitation <= 2) {
    weather.readout.precipitation += ". It's clearing up pretty quickly, though"
  }
  weather.readout.cloud = setup.weather.cloudIntensityDescriptors[weather.cloudIntensity].seededrandom()

  console.log('Rendering temperature...')
  for (const array of setup.weather.temperatureDescriptors) {
    // console.log(array)
    if (weather.temperature >= array[0]) {
      weather.readout.temperature = '<span class=tip title=' + JSON.stringify(setup.toCelsius(weather.temperature) + ', to be precise.') + '><b>' + array[1] + '</b></span><<run setup.tippy("span")>>'
      break
    }
  }
  weather.readout.full = "It's " + weather.readout.temperature + '. ' + weather.readout.cloud.toUpperFirst() + ', and ' + weather.readout.precipitation + '. '
  console.log(weather)
}
