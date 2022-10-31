import { ThresholdTable } from '../src/rollFromTable'
type TownRollData = {
  tooltip: string
  preceding: string
  isHidden?: boolean
  rolls?: ThresholdTable | [number, string, string][]
}
export const rollDataTooltips: Record<string, TownRollData | {
  man: TownRollData
  woman: TownRollData
}> = {
  equality: {
    man: {
      tooltip: 'How sexist is the society here?',
      preceding: 'Totally sexist and oppressive -- Bastion of equality',
      rolls: [
        [90, 'egalitarian', "Gender is totally irrelevant to one's place in society here."],
        [80, 'egalitarian', "Gender is irrelevant to one's place in society here."],
        [70, 'egalitarian', 'It is a relatively egalitarian society, although men are expected to be the primary breadwinners.'],
        [60, 'egalitarian-ish', 'It is supposedly egalitarian society, though women face barriers socially and economically if they do not conform.'],
        [40, 'patriarchal', 'It is largely a patriarchal society. Women are pressured to conform socially, but not legally.'],
        [40, 'patriarchal', 'Women are oppressed, and do not enjoy many of the social liberties afforded to men.'],
        [20, 'patriarchal', 'Men occupy most positions of authority.'],
        [0, 'overwhelmingly patriarchal', 'Almost all positions of authority are occupied by men.']
      ]
    },
    woman: {
      tooltip: 'How sexist is the society here?',
      preceding: 'Totally sexist and oppressive -- Bastion of equality',
      rolls: [
        [90, 'egalitarian', "Gender is totally irrelevant to one's place in society here."],
        [80, 'egalitarian', "Gender is irrelevant to one's place in society here."],
        [70, 'egalitarian', 'Femininity is celebrated, and women enjoy equal opportunities here.'],
        [50, 'matriarchal', 'Women have cooler heads than men, and are therefore the heads of households here.'],
        [40, 'matriarchal', 'The brawn of men is utilised where necessary, but men are largely kept at home.'],
        [20, 'matriarchal', 'Women occupy most positions of authority.'],
        [0, 'overwhelmingly matriarchal', 'Almost all positions of authority are occupied by women.']
      ]
    }
  },
  wealth: {
    tooltip: 'How wealthy is the town?',
    preceding: 'Dirt poor -- Fabulously wealthy',
    rolls: [
      [95, 'kingly'],
      [80, 'aristocratic'],
      [70, 'wealthy'],
      [60, 'comfortable'],
      [50, 'modest'],
      [25, 'poor'],
      [15, 'squalid'],
      [0, 'destitute']
    ] as ThresholdTable
  },
  size: {
    tooltip: 'How much land is covered?',
    isHidden: true,
    preceding: 'Tiny -- Sprawling'
  },
  reputation: {
    tooltip: 'How well known is this town?',
    preceding: 'Virtually unheard of -- Known throughout the region',
    isHidden: true
  },
  religiosity: {
    tooltip: 'How religious are they here?',
    preceding: 'Atheistic -- Extremely Religious'
  },
  diversity: {
    isHidden: true,
    tooltip: 'How diverse is the population?',
    preceding: 'Monoracial -- Totally diverse'
  },
  economics: {
    tooltip: 'How free is the market, and how many regulations are there?',
    preceding: 'Free Trade -- Regulated trade:'
  },
  welfare: {
    tooltip: 'How do they treat their less fortunate citizens?',
    preceding: 'Indifferent welfare -- Benevolent Welfare:'
  },
  military: {
    tooltip: 'How heavy is the armed presence here?',
    preceding: 'Relaxed military -- Strict military:'
  },
  law: {
    tooltip: 'How do they treat law-breakers here?',
    preceding: 'Reform-based law -- Punishment-based law:'
  },
  arcana: {
    tooltip: 'How is magic seen here? Slide to the left for magic to be seen less favourably, keep it in the middle for the government to have no opinion, and slide it to the right for a more regulated magic.',
    preceding: 'Restricted magic -- Regulated magic:'
  },
  magic: {
    tooltip: 'How common is it for a peasant to see magic here?',
    preceding: 'Gritty low-magic -- Magic is commonplace',
    isHidden: true
  },
  sin: {
    tooltip: 'How much of a culture of crime is there?',
    preceding: 'Squeaky clean -- Wretched hive of scum and villainy'
  },
  genderMakeup: {
    tooltip: 'What percentage of the population does the \'dominant\' gender make up?',
    preceding: 'Gender makeup (percentage of people that are the dominant gender):'
  },
  guardFunding: {
    tooltip: 'How much funding is put towards keeping the peace here?',
    preceding: 'Next to no funding -- Well funded',
    isHidden: true
  }
}
