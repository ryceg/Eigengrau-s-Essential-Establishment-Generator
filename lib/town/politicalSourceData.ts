import { PoliticalIdeology } from './townData'
import { Town } from './_common'

interface Republic {
  politicalIdeology: PoliticalIdeology[]
  politicalSourceDescription: (town: Town) => string
  description: string
}
interface Monarchy {
  politicalIdeology: PoliticalIdeology[]
  autocracy: {
    politicalSourceDescription: (town: Town) => string
    description: string
  }
  default: {
    politicalSourceDescription: (town: Town) => string
    description: string
  }
}

export type PoliticalSource =
|'absolute monarchy'
|'constitutional monarchy'
|'republic'
|'anarchy'

export const politicalSourceData: {
  'absolute monarchy': Monarchy
  'constitutional monarchy': Monarchy
  republic: Republic
  anarchy: Republic
} = {
  'absolute monarchy': {
    politicalIdeology: ['autocracy', 'autocracy', 'autocracy', 'meritocracy', 'democracy', 'kleptocracy', 'magocracy', 'militocracy', 'oligarchy', 'sophocracy', 'theocracy', 'technocracy'],
    autocracy: {
      politicalSourceDescription: (town: Town) => `${town.leader.title.toUpperFirst()} <<profile ${town.leader.key}>> is the supreme ruler, and all laws and affairs are governed by the crown's will.`,
      description: 'The crown holds both supreme executive and judicial powers.'
    },
    default: {
      politicalSourceDescription: (town: Town) => `${town.ruler?.title.toUpperFirst()} <<profile ${town?.ruler?.key}>> is technically the head of state, but affairs are handled by a parliamentary consisting of ${town.leaderType}, the head of whom is ${town.leader.title} <<profile ${town.leader.key}>>.`,
      description: 'The crown holds supreme judicial power, but the executive power is held by a parliamentary.'
    }
  },
  'constitutional monarchy': {
    politicalIdeology: ['autocracy', 'autocracy', 'meritocracy', 'democracy', 'democracy', 'democracy', 'kleptocracy', 'magocracy', 'militocracy', 'oligarchy', 'sophocracy', 'theocracy', 'technocracy'],
    autocracy: {
      politicalSourceDescription: (town: Town) => `${town.ruler?.title.toUpperFirst()} <<profile ${town?.ruler?.key}>> is technically the head of state, but affairs are handled by the prime minister, <<profile ${town.leader.key}>>, who controls all executive decisions.`,
      description: 'The crown holds supreme judicial powers, but executive power is held by the prime minister.'
    },
    default: {
      politicalSourceDescription: (town: Town) => `${town.ruler?.title.toUpperFirst()} <<profile ${town?.ruler?.key}>> is the head of state, but affairs are handled by ${town.leaderType}, the head of whom is ${town.leader.title} <<profile ${town.leader.key}>>.`,
      description: 'The crown holds supreme judicial power, but day to day affairs are held by parliament.'
    }
  },
  'republic': {
    politicalIdeology: ['meritocracy', 'meritocracy', 'democracy', 'democracy', 'democracy', 'democracy', 'kleptocracy', 'magocracy', 'militocracy', 'oligarchy', 'sophocracy', 'theocracy', 'technocracy'],
    politicalSourceDescription: (town: Town) => `Affairs are handled by ${town.leaderType}, the head of whom is ${town.leader.title} <<profile ${town.leader.key}>>`,
    description: 'An elected body of representatives wield the powers of government.'
  },
  'anarchy': {
    politicalIdeology: ['meritocracy', 'meritocracy', 'democracy', 'democracy', 'democracy', 'democracy', 'kleptocracy', 'magocracy', 'militocracy', 'oligarchy', 'sophocracy', 'theocracy', 'technocracy'],
    politicalSourceDescription: (town: Town) => `None take responsibility for the stewardship of ${town.name}, but ${town.leaderType} hold the best semblance of order, the head of whom is ${town.leader.title} <<profile ${town.leader.key}>>.`,
    description: 'No formal political system exists.'
  }
}
