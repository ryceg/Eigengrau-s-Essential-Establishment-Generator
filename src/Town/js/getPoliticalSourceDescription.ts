import { Town } from '@lib'

/**
 * Is not currently in `lib` because it uses the `setup.profile` function.
 * Needs to be updated whenever there's a political source added.
 * @returns {string} Description including profiles
 */
export const getPoliticalSourceDescription = (town: Town) => {
  const leaderKey = town.leader.key
  const rulerKey = town?.ruler?.key || leaderKey
  const data = {
    'absolute monarchy': {
      autocracy: `${town.leader.title.toUpperFirst()} ${setup.profile(leaderKey)} is the supreme ruler, and all laws and affairs are governed by the crown's will.`,
      default: `${town.ruler?.title.toUpperFirst() || 'The ruler'} ${setup.profile(rulerKey)} is technically the head of state, but affairs are handled by a parliamentary consisting of ${town.leaderType}, the head of whom is ${town.leader.title} ${setup.profile(leaderKey)}.`
    },
    'constitutional monarchy': {
      autocracy: `${town.ruler?.title.toUpperFirst() || 'The ruler'} ${setup.profile(rulerKey)} is technically the head of state, but affairs are handled by the prime minister, ${setup.profile(leaderKey)}, who controls all executive decisions.`,
      default: `${town.ruler?.title.toUpperFirst() || 'The ruler'} ${setup.profile(rulerKey)} is the head of state, but affairs are handled by ${town.leaderType}, the head of whom is ${town.leader.title} ${setup.profile(leaderKey)}.`
    },
    'republic': `Affairs are handled by ${town.leaderType}, the head of whom is ${town.leader.title} ${setup.profile(leaderKey)}`,
    'anarchy': `None take responsibility for the stewardship of ${town.name}, but ${town.leaderType} hold the best semblance of order, the head of whom is ${town.leader.title} ${setup.profile(leaderKey)}.`
  }

  if (town._politicalSource === 'absolute monarchy' || town._politicalSource === 'constitutional monarchy') {
    if (town.politicalIdeology === 'autocracy') {
      return data[town._politicalSource].autocracy
    } else {
      return data[town._politicalSource].default
    }
  } else {
    return data[town._politicalSource]
  }
}
