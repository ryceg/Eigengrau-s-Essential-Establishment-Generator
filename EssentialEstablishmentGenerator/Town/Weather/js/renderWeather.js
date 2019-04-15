/* global setup random */
setup.renderWeather = function (town, biome, weather) {
  console.log('Rendering weather...')
  // console.log(weather)
  if (!weather) {
    weather = setup.createWeather(town, biome)
  }
  weather.precipitationLevel = Math.clamp(weather.precipitationLevel, 1, 4)
  weather.precipitationIntensity = Math.clamp(weather.precipitationIntensity, 1, 4)
  // weather.precipitationIntensity.clamp(1, 4)
  // weather.precipitationLevel.clamp(1, 4)
  // console.log(weather)
  biome = biome || town.terrain

  var tempVariationKeys = Object.keys(setup.townData.terrain[biome].weather.tempVariation).reverse()
  var intKeys = []
  var finalKey

  tempVariationKeys.forEach(function (key) {
    intKeys.push(parseInt(key))
  })
  finalKey = intKeys.find(function (key) {
    if (weather.tempVariation >= key) {
      return key
    }
  })
  console.log('2')
  if (weather.timer.temperature < 1) {
    weather.tempVariation = random(1, 100)
    weather.timer.temperature = 0 + Math.trunc(setup.townData.terrain[biome].weather.tempVariation[finalKey].temperatureTimer / 8)
    finalKey = intKeys.find(function (key) {
      if (weather.tempVariation >= key) {
        console.log('key is: ' + key)
        return key
      }
    })
  }
  console.log('3')
  var tempVariation = (setup.townData.terrain[biome].weather.tempVariation[finalKey].temperature || setup.townData.terrain['temperate'].weather.tempVariation[finalKey].temperature)
  console.log('tempVariation: ' + tempVariation)

  weather.temperature = (setup.townData.terrain[biome].weather[weather.season].baseTemp || setup.townData.terrain['temperate'].weather['spring'].baseTemp) + tempVariation - random(-2, 2)

  console.log('weather temp: ' + weather.temperature)
console.log('4')
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

  weather.readout.precipitation = setup.weather.precipitationDescriptors[weather.precipitation].random()
  if (weather.precipitation !== 'no precipitation' && weather.timer.precipitation > 18) {
    weather.readout.precipitation += ". It doesn't look like it'll be clearing up today"
  } else if (weather.precipitation !== 'no precipitation' && weather.timer.precipitation > 12) {
    weather.readout.precipitation += ". It doesn't look like it'll be clearing up soon"
  } else if (weather.precipitation !== 'no precipitation' && weather.timer.precipitation <= 2) {
    weather.readout.precipitation += ". It's clearing up pretty quickly, though"
  }
  weather.readout.cloud = setup.weather.cloudIntensityDescriptors[weather.cloudIntensity].random()

  console.log('Rendering temperature...')
  for (var array of setup.weather.temperatureDescriptors) {
    // console.log(array)
    if (weather.temperature >= array[0]) {
      weather.readout.temperature = '<span class=tip title=' + JSON.stringify(setup.toCelsius(weather.temperature) + ', to be precise.') + '><b>' + array[1] + '</b></span><<run setup.tippy("span")>>'
      break
    }
  }
  weather.readout.full = "It's " + weather.readout.temperature + '. ' + weather.readout.cloud.toUpperFirst() + ', and ' + weather.readout.precipitation + '. '
  console.log(weather)
}
