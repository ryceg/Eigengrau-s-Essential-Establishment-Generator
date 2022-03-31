import { Tavern } from './_common'
import { closestMatch } from '../src/closestMatch'
import { random } from '../src/random'

export function tavernSleep (tavern: Tavern) {
  const sleepData = [
    {
      restfulness: 90,
      sleepEasy: 2,
      note: "You unsurprisingly get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 90,
      sleepEasy: 0,
      note: "You get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 90,
      sleepEasy: -2,
      note: "You surprisingly get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 80,
      sleepEasy: 2,
      note: "You unsurprisingly get a great night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 80,
      sleepEasy: 0,
      note: "You get a great night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 80,
      sleepEasy: -2,
      note: "You surprisingly get a great night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 70,
      sleepEasy: 2,
      note: "You unsurprisingly get a good night's sleep, and awake feeling refreshed"
    },
    {
      restfulness: 70,
      sleepEasy: 0,
      note: "You get a good night's sleep, and awake feeling refreshed"
    },
    {
      restfulness: 70,
      sleepEasy: -2,
      note: "You surprisingly get a good night's sleep, and awake feeling refreshed"
    },
    {
      restfulness: 50,
      sleepEasy: 2,
      note: `You get an alright night's sleep, which is disappointing considering the quality of ${tavern.name}, but you awake feeling reasonably refreshed`
    },
    {
      restfulness: 50,
      sleepEasy: 0,
      note: "You get an alright night's sleep, and awake feeling reasonably refreshed"
    },
    {
      restfulness: 50,
      sleepEasy: -2,
      note: `You get an alright night's sleep despite the poor quality of ${tavern.name}, but you awake feeling reasonably refreshed`
    },
    {
      restfulness: 30,
      sleepEasy: 2,
      note: `You get an awful night's sleep, which is disappointing considering the quality of ${tavern.name}, and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful`
    },
    {
      restfulness: 30,
      sleepEasy: 0,
      note: "You get an awful night's sleep, and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful"
    },
    {
      restfulness: 30,
      sleepEasy: -2,
      note: `You get an awful night's sleep, which is unsurprising considering the quality of ${tavern.name}, and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful`
    },
    {
      restfulness: 10,
      sleepEasy: 2,
      note: "The night seems to go on forever, and you just can't get to sleep, despite the comforts provided. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
    },
    {
      restfulness: 10,
      sleepEasy: 0,
      note: "The night seems to go on forever, and you just can't get to sleep. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
    },
    {
      restfulness: 10,
      sleepEasy: -2,
      note: "The night seems to go on forever, and you just can't get to sleep, probably due to the conditions that you were expected to sleep in. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
    }
  ]

  let restfulness = random(1, 100)
  let sleepEasy = 0

  if (tavern.wealth === 'kingly') {
    restfulness += 30
    sleepEasy += 3
  } else if (tavern.wealth === 'aristocratic') {
    restfulness += 15
    sleepEasy += 2
  } else if (tavern.wealth === 'wealthy') {
    restfulness += 7
    sleepEasy += 1
  } else if (tavern.wealth === 'modest') {
    restfulness -= 2
  } else if (tavern.wealth === 'poor') {
    restfulness -= 5
    sleepEasy -= 2
  } else {
    restfulness -= 10
    sleepEasy -= 3
  }

  if (tavern.roll.cleanliness > 90) {
    restfulness += 30
  } else if (tavern.roll.cleanliness > 80) {
    restfulness += 15
    sleepEasy += 3
  } else if (tavern.roll.cleanliness > 70) {
    restfulness += 5
    sleepEasy += 2
  } else if (tavern.roll.cleanliness > 60) {
    restfulness += 3
    sleepEasy += 1
  } else if (tavern.roll.cleanliness > 50) {
    restfulness -= 2
  } else if (tavern.roll.cleanliness > 40) {
    restfulness -= 5
  } else if (tavern.roll.cleanliness > 30) {
    restfulness -= 10
    sleepEasy -= 1
  } else if (tavern.roll.cleanliness > 20) {
    restfulness -= 15
    sleepEasy -= 2
  } else {
    restfulness -= 20
    sleepEasy -= 3
  }

  if (tavern.roll.bedCleanliness > 90) {
    restfulness += 30
    sleepEasy += 4
  } else if (tavern.roll.bedCleanliness > 80) {
    restfulness += 15
    sleepEasy += 3
  } else if (tavern.roll.bedCleanliness > 70) {
    restfulness += 5
    sleepEasy += 2
  } else if (tavern.roll.bedCleanliness > 60) {
    restfulness += 3
    sleepEasy += 1
  } else if (tavern.roll.bedCleanliness > 50) {
    restfulness -= 2
  } else if (tavern.roll.bedCleanliness > 40) {
    restfulness -= 5
  } else if (tavern.roll.bedCleanliness > 30) {
    restfulness -= 10
    sleepEasy -= 1
  } else if (tavern.roll.bedCleanliness > 20) {
    restfulness -= 15
    sleepEasy -= 2
  } else {
    restfulness -= 20
    sleepEasy -= 3
  }

  let sleepOutput = closestMatch(sleepData, 'note', 'restfulness', 'sleepEasy', restfulness, sleepEasy)

  sleepOutput += ` ${getWakeUpByType(tavern)}.`

  return sleepOutput
}

/**
 * @param {Tavern} tavern
 * @returns {string}
 */
function getWakeUpByType (tavern: Tavern) {
  switch (tavern.tavernType) {
    case 'brothel':
      return 'in spite of the whores moaning'
    case 'gambling den':
      return 'in spite of the commotion whenever something interesting happened at the gambling tables'
  }
  return ''
}
