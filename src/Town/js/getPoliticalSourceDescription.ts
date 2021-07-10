import { Town } from '@lib'

/**
 * Is not currently in `lib` because it uses the `setup.profile` function.
 * Needs to be updated whenever there's a political source added.
 * @returns {string} Description including profiles
 */
export const getPoliticalSourceDescription = (town: Town) => {
  const data = {
    'absolute monarchy': {
      autocracy: `${town.leader.title.toUpperFirst()} ${setup.profile(town.leader.key)} is the supreme ruler, and all laws and affairs are governed by the crown's will.`,
      default: `${town.ruler?.title.toUpperFirst()} ${setup.profile(town.ruler.key)} is technically the head of state, but affairs are handled by a parliamentary consisting of ${town.leaderType}, the head of whom is ${town.leader.title} ${setup.profile(town.leader.key)}.`
    },
    'constitutional monarchy': {
      autocracy: `${town.ruler?.title.toUpperFirst()} ${setup.profile(town.ruler.key)} is technically the head of state, but affairs are handled by the prime minister, ${setup.profile(town.leader.key)}, who controls all executive decisions.`,
      default: `${town.ruler?.title.toUpperFirst()} ${setup.profile(town.ruler.key)} is the head of state, but affairs are handled by ${town.leaderType}, the head of whom is ${town.leader.title} ${setup.profile(town.leader.key)}.`
    },
    'republic': `Affairs are handled by ${town.leaderType}, the head of whom is ${town.leader.title} ${setup.profile(town.leader.key)}`,
    'anarchy': `None take responsibility for the stewardship of ${town.name}, but ${town.leaderType} hold the best semblance of order, the head of whom is ${town.leader.title} ${setup.profile(town.leader.key)}.`
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
