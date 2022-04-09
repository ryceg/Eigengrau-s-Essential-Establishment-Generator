import { random } from './random'
import { dice } from './dice'
import { ThresholdTable } from './rollFromTable'

export interface Weather {
  temperature: number
  tempVariation: number
  currentSeason: string
  timer: {
    precipitation: number
    cloud: number
    temperature: number
  }
  roll: {
    precipitationIntensity: number
    precipitation: number
    cloud: number
  }
  precipitation: string | false
  precipitationLevel: number
  precipitationIntensity: number
  cloudIntensity: string
}

export const weather = {
  precipitationIntensity: {
    1: {
      cloud (weather: Weather) {
        if (weather.roll.cloud > 85) {
          weather.cloudIntensity = 'overcast'
          weather.timer.cloud = random(8, 12)
        } else if (weather.roll.cloud > 70) {
          weather.cloudIntensity = 'medium clouds'
          weather.timer.cloud = random(8, 16)
        } else if (weather.roll.cloud > 50) {
          weather.cloudIntensity = 'light clouds'
          weather.timer.cloud = random(6, 10)
        } else if (weather.roll.cloud <= 50 && weather.precipitation === false) {
          weather.cloudIntensity = 'clear'
          weather.timer.cloud = dice(3, 6)
        } else {
          weather.cloudIntensity = 'light clouds'
          weather.timer.cloud = dice(2, 12)
        }
      },
      freezing (weather: Weather) {
        if (weather.roll.precipitationIntensity > 75) {
          weather.precipitation = 'light snow'
          weather.timer.precipitation = dice(2, 12)
        } else if (weather.roll.precipitationIntensity > 60) {
          weather.precipitation = 'light snow'
          weather.timer.precipitation = dice(1, 4)
        } else if (weather.roll.precipitationIntensity > 50) {
          weather.precipitation = 'light snow'
          weather.timer.precipitation = 1
        } else if (weather.roll.precipitationIntensity > 40) {
          weather.precipitation = 'medium fog'
          weather.timer.precipitation = random(1, 4)
        } else if (weather.roll.precipitationIntensity > 20) {
          weather.precipitation = 'light fog'
          weather.timer.precipitation = random(1, 8)
        } else if (weather.roll.precipitationIntensity <= 20) {
          weather.precipitation = 'light snow'
          weather.timer.precipitation = random(1, 6)
        }
      },
      raining (weather: Weather) {
        if (weather.roll.precipitationIntensity > 90) {
          weather.precipitation = 'light rain'
          weather.timer.precipitation = 1
        } else if (weather.roll.precipitationIntensity > 60) {
          weather.precipitation = 'light rain'
          weather.timer.precipitation = dice(1, 4)
        } else if (weather.roll.precipitationIntensity > 50) {
          weather.precipitation = 'drizzle'
          weather.timer.precipitation = dice(2, 12)
        } else if (weather.roll.precipitationIntensity > 40) {
          weather.precipitation = 'drizzle'
          weather.timer.precipitation = random(1, 4)
        } else if (weather.roll.precipitationIntensity > 20) {
          weather.precipitation = 'medium fog'
          weather.timer.precipitation = random(1, 6)
        } else if (weather.roll.precipitationIntensity <= 20) {
          weather.precipitation = 'light fog'
          weather.timer.precipitation = random(1, 8)
        }
      }
    },
    2: {
      cloud (weather: Weather) {
        if (weather.roll.cloud > 85) {
          weather.cloudIntensity = 'overcast'
          weather.timer.cloud = random(8, 12)
        } else if (weather.roll.cloud > 70) {
          weather.cloudIntensity = 'medium clouds'
          weather.timer.cloud = random(8, 16)
        } else if (weather.roll.cloud > 50) {
          weather.cloudIntensity = 'light clouds'
          weather.timer.cloud = random(6, 10)
        } else if (weather.roll.cloud <= 50 && weather.precipitation === false) {
          weather.cloudIntensity = 'clear'
          weather.timer.cloud = random(8, 12)
        } else {
          weather.cloudIntensity = 'light clouds'
          weather.timer.cloud = random(6, 10)
        }
      },
      freezing (weather: Weather) {
        if (weather.roll.precipitationIntensity > 90) {
          weather.precipitation = 'medium snow'
          weather.timer.precipitation = dice(2, 12)
        } else if (weather.roll.precipitationIntensity > 50) {
          weather.precipitation = 'medium snow'
          weather.timer.precipitation = dice(1, 8)
        } else if (weather.roll.precipitationIntensity > 30) {
          weather.precipitation = 'heavy fog'
          weather.timer.precipitation = random(1, 4)
        } else if (weather.roll.precipitationIntensity > 20) {
          weather.precipitation = 'medium fog'
          weather.timer.precipitation = random(1, 4)
        } else if (weather.roll.precipitationIntensity > 10) {
          weather.precipitation = 'medium fog'
          weather.timer.precipitation = random(1, 8)
        } else if (weather.roll.precipitationIntensity <= 10) {
          weather.precipitation = 'medium snow'
          weather.timer.precipitation = random(1, 6)
        }
      },
      raining (weather: Weather) {
        if (weather.roll.precipitationIntensity > 90) {
          weather.precipitation = 'rain'
          weather.timer.precipitation = dice(1, 4)
        } else if (weather.roll.precipitationIntensity > 70) {
          weather.precipitation = 'rain'
          weather.timer.precipitation = dice(2, 12)
        } else if (weather.roll.precipitationIntensity > 35) {
          weather.precipitation = 'rain'
          weather.timer.precipitation = random(1, 4)
        } else if (weather.roll.precipitationIntensity > 20) {
          weather.precipitation = 'heavy fog'
          weather.timer.precipitation = random(1, 4)
        } else if (weather.roll.precipitationIntensity > 10) {
          weather.precipitation = 'medium fog'
          weather.timer.precipitation = random(1, 12)
        } else if (weather.roll.precipitationIntensity <= 10) {
          weather.precipitation = 'medium fog'
          weather.timer.precipitation = random(1, 8)
        }
      }
    },
    3: {
      cloud (weather: Weather) {
        if (weather.roll.cloud > 35) {
          weather.cloudIntensity = 'extremely overcase'
          weather.timer.cloud = random(8, 12)
        } else if (weather.roll.cloud > 10) {
          weather.cloudIntensity = 'thick clouds'
          weather.timer.cloud = random(8, 16)
        } else if (weather.roll.cloud <= 10) {
          weather.cloudIntensity = 'heavy clouds'
          weather.timer.cloud = random(6, 10)
        }
      },
      freezing (weather: Weather) {
        if (weather.roll.precipitationIntensity > 90) {
          weather.precipitation = 'heavy snow'
          weather.timer.precipitation = dice(1, 6)
        } else if (weather.roll.precipitationIntensity > 60) {
          weather.precipitation = 'medium snow'
          weather.timer.precipitation = dice(1, 8)
        } else if (weather.roll.precipitationIntensity > 20) {
          weather.precipitation = 'light snow'
          weather.timer.precipitation = dice(2, 12)
        } else if (weather.roll.precipitationIntensity > 10) {
          weather.precipitation = 'heavy fog'
          weather.timer.precipitation = dice(2, 6)
        } else if (weather.roll.precipitationIntensity <= 10) {
          weather.precipitation = 'medium fog'
          weather.timer.precipitation = random(1, 6)
        }
      },
      raining (weather: Weather) {
        if (weather.roll.precipitationIntensity > 90) {
          weather.precipitation = 'thunderstorm'
          weather.timer.precipitation = dice(1, 3)
        } else if (weather.roll.precipitationIntensity > 85) {
          weather.precipitation = 'thunderstorm'
          weather.timer.precipitation = 1
        } else if (weather.roll.precipitationIntensity > 70) {
          weather.precipitation = 'heavy rain'
          weather.timer.precipitation = dice(1, 8)
        } else if (weather.roll.precipitationIntensity > 50) {
          weather.precipitation = 'heavy rain'
          weather.timer.precipitation = dice(2, 12)
        } else if (weather.roll.precipitationIntensity > 20) {
          weather.precipitation = 'heavy rain'
          weather.timer.precipitation = dice(1, 12)
        } else if (weather.roll.precipitationIntensity > 10) {
          weather.precipitation = 'heavy fog'
          weather.timer.precipitation = dice(2, 6)
        } else if (weather.roll.precipitationIntensity <= 10) {
          weather.precipitation = 'heavy fog'
          weather.timer.precipitation = random(1, 6)
        }
      }
    },
    4: {
      cloud (weather: Weather) {
        if (weather.roll.cloud > 35) {
          weather.cloudIntensity = 'extremely overcast'
          weather.timer.cloud = random(8, 12)
        } else if (weather.roll.cloud > 10) {
          weather.cloudIntensity = 'thick clouds'
          weather.timer.cloud = random(8, 16)
        } else if (weather.roll.cloud <= 10) {
          weather.cloudIntensity = 'heavy clouds'
          weather.timer.cloud = random(6, 10)
        }
      },
      freezing (weather: Weather) {
        if (weather.roll.precipitationIntensity > 90) {
          weather.precipitation = 'heavy snow'
          weather.timer.precipitation = dice(2, 12)
        } else if (weather.roll.precipitationIntensity > 50) {
          weather.precipitation = 'heavy snow'
          weather.timer.precipitation = dice(1, 8)
        } else if (weather.roll.precipitationIntensity > 10) {
          weather.precipitation = 'heavy snow'
          weather.timer.precipitation = dice(1, 4)
        } else if (weather.roll.precipitationIntensity > 5) {
          weather.precipitation = 'heavy fog'
          weather.timer.precipitation = dice(2, 6)
        } else if (weather.roll.precipitationIntensity <= 5) {
          weather.precipitation = 'heavy fog'
          weather.timer.precipitation = random(1, 7)
        }
      },
      raining (weather: Weather) {
        if (weather.roll.precipitationIntensity > 95) {
          weather.precipitation = 'thunderstorm'
          weather.timer.precipitation = dice(1, 6)
        } else if (weather.roll.precipitationIntensity > 80) {
          weather.precipitation = 'thunderstorm'
          weather.timer.precipitation = dice(1, 3)
        } else if (weather.roll.precipitationIntensity > 60) {
          weather.precipitation = 'heavy snow'
          weather.timer.precipitation = dice(2, 6)
        } else if (weather.roll.precipitationIntensity > 30) {
          weather.precipitation = 'heavy fog'
          weather.timer.precipitation = dice(2, 12)
        } else if (weather.roll.precipitationIntensity > 10) {
          weather.precipitation = 'heavy rain'
          weather.timer.precipitation = dice(2, 6)
        } else if (weather.roll.precipitationIntensity > 5) {
          weather.precipitation = 'heavy fog'
          weather.timer.precipitation = dice(2, 6)
        } else if (weather.roll.precipitationIntensity <= 5) {
          weather.precipitation = 'heavy fog'
          weather.timer.precipitation = random(1, 8)
        }
      }
    }
  },
  precipitationLevel: {
    1: (weather: Weather) => weather.roll.precipitation >= 95,
    2: (weather: Weather) => weather.roll.precipitation >= 85,
    3: (weather: Weather) => weather.roll.precipitation >= 70,
    4: (weather: Weather) => weather.roll.precipitation >= 40,
    5: (weather: Weather) => weather.roll.precipitation >= 5
  },
  precipitationDescriptors: {
    'no precipitation': [
      "it's a fine day",
      "it's a fair day",
      "it's a nice day out"
    ],
    'light fog': [
      "there's a light fog, although it doesn't obscure much",
      "there's a fresh fog which hazes the view slightly",
      "there's a light fog dusting the horizon"
    ],
    'medium fog': [
      "there's a bit of fog that obscures the horizon a little",
      "there's some fog on the horizon",
      "there's a decent bit of fog"
    ],
    'heavy fog': [
      "there's a heavy fog, which obscures everything further than some fifty feet ahead of you",
      "there's a thick fog looming in the air",
      "it's extremely foggy, and it's difficult to see things further than fifty feet ahead of you",
      "there's a thick blanket of fog which covers the area"
    ],
    'light rain': [
      "there's a light rain falling from the few clouds that are in the sky",
      "there's a slight bit of rain falling from the sky",
      "there's a gentle patter of rain falling down"
    ],
    'drizzle': [
      "there's a steady drizzle streaming down",
      "there's a bit of a drizzle of rain",
      "there's a steady drizzle going"
    ],
    'rain': [
      "it's currently raining",
      "it's raining at the moment",
      "there's some rain at the moment"
    ],
    'heavy rain': [
      "there's a heavy rain going at the moment",
      "there's a steady and quite heavy drizzle of rain going on at the moment",
      "there's a heavy downpour, which seems to have no end in sight"
    ],
    'light snow': [
      "there's a light dusting of snow covering the ground, and you see some flakes falling down",
      "it's snowing- just a little bit, but enough to make a satisfying crunch underneath your feet",
      "it's currently snowing lightly, with a cool breeze carrying the snowflakes a fair distance"
    ],
    'medium snow': [
      "it's snowing, bringing the unique silence that comes with a dusting of snow on everything",
      "it's currently snowing",
      'You can see your breath, and the crunch of snow underfoot is satisfying'
    ],
    'heavy snow': [
      "it's snowing quite heavily at the moment, and trekking through the snow is a little difficult",
      'the heavy snowfall makes movement a little difficult. The wind which carries the snow is freezing cold, and stings your eyes'
    ],
    'thunderstorm': [
      'the ominous booms of thunder go off in the distance',
      "there's a flash of bright, white light, and several seconds later, there's a low boom in the distance"
    ]
  },
  cloudIntensityDescriptors: {
    'extremely overcast': [
      'above your heads, there is not a bit of sky not covered by the dark clouds',
      'you cannot see the sky for the thick blanket of cloudcover'
    ],
    'overcast': [
      'it is overcast',
      'stratus clouds hang overhead, resembling a thick fog clinging to the horizon, instead of the ground'
    ],
    'thick clouds': [
      'a sheet of dark, threatening clouds are on the horizon',
      'a dark blanket of clouds cover the sky, blotting out the sun'
    ],
    'heavy clouds': [
      'dark nimbostratus clouds cover the horizon, looming threateningly',
      'a dark blanket of clouds cover the sky, blotting out the sun'
    ],
    'medium clouds': [
      'there are low, puffy, dark grey clumps of clouds in the sky',
      'there are some clouds similar to the wool of a sheep floating abovehead',
      'the clouds in the sky overhead have a similar resemblance to the scales of a mackerel fish'
    ],
    'light clouds': [
      "there's a couple clouds in the sky",
      'there are a couple cumulonimbus clouds lazily drifting across the sky',
      "there are a couple clouds, but it's not quite overcast"
    ],
    'none': [
      "there's not a cloud in sight",
      "there aren't any clouds in the sky",
      'there are no clouds on the horizon',
      'there are no clouds in the sky'
    ]
  },
  temperatureDescriptors: [
    [200, 'impossibly hot'],
    [120, 'unliveably hot'],
    [105, 'dangerously hot'],
    [110, 'painfully hot'],
    [100, 'extremely hot'],
    [95, 'swelteringly hot'],
    [90, 'very hot'],
    [85, 'quite hot'],
    [80, 'quite warm'],
    [75, 'pleasant and warm'],
    [70, 'quite pleasant'],
    [65, 'nice and pleasant'],
    [60, 'pleasant and cool'],
    [55, 'cool'],
    [50, 'rather cool'],
    [45, 'nice and brisk'],
    [40, 'brisk'],
    [35, 'quite brisk'],
    [30, 'chilly'],
    [25, 'freezing'],
    [20, 'quite cold'],
    [15, 'rather cold'],
    [10, 'very cold'],
    [5, 'extremely cold'],
    [0, 'extremely cold'],
    [-5, 'bitterly cold'],
    [-10, 'painfully cold']
  ] as ThresholdTable
}
