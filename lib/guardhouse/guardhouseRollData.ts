import { constrainRecord } from '../src/constrainRecord'
import { ThresholdTable } from '../src/rollFromTable'

interface RollData {
  description: string
  preceding: string
  rolls?: ThresholdTable
}

export const guardhouseRollData = constrainRecord<RollData>()({
  wealth: {
    description: 'How well are they funded?',
    preceding: 'Guardhouse Wealth:',
    rolls: [
      [95, 'kingly'],
      [80, 'aristocratic'],
      [70, 'wealthy'],
      [60, 'comfortable'],
      [50, 'modest'],
      [25, 'poor'],
      [15, 'squalid'],
      [0, 'destitute']
    ]
  },
  size: {
    description: 'How large is it?',
    preceding: 'Guardhouse Size:',
    rolls: [
      [95, 'cavernous'],
      [80, 'huge'],
      [70, 'quite large'],
      [60, 'large'],
      [50, 'spacious'],
      [40, 'average sized'],
      [30, 'somewhat cramped'],
      [20, 'small'],
      [10, 'tiny'],
      [0, 'extremely cramped']
    ]
  },
  cleanliness: {
    description: 'How clean is the guardhouse? What about the cells?',
    preceding: 'Guardhouse:',
    /** @example `The guardhouse is ______` */
    rolls: [
      [90, 'fastidious- even the prisoner cells are clean.'],
      [70, 'very tidy. The prisoner cells are in pretty good condition, and quite liveable.'],
      [60, 'tidy, although the cells are in need of a sweeping.'],
      [50, 'reasonably tidy, though the cells have the occasional rat.'],
      [40, 'somewhat messy, with the worst of it concentrated in the cells, which are in need of a deep clean.'],
      [30, 'rather messy- especially the cells, which are positively disgusting.'],
      [20, 'very messy, and the cells are even worse, with a fecal aroma wafting out.'],
      [10, 'in dire need of a cleaner; blood spatters have seeped in, and the cells are filthy.'],
      [0, 'apparently a crime scene in itself, with blood stains everywhere. The cells must be unimaginably bad.']
    ]
  },
  expertise: {
    description: 'How well trained are the guards?',
    preceding: 'Guardhouse Training:',
    /** @example `The guards are _____` */
    rolls: [
      [80, 'consummate professionals'],
      [70, 'professional'],
      [60, 'reasonably professional'],
      [50, 'as professional as one could expect'],
      [40, 'mostly professional, though the occasional bad eggs causes a public scandal now and then'],
      [30, 'not exactly known for their professionalism'],
      [20, 'not very professional, and are known for not being very good at their jobs'],
      [10, 'basically amateurs, with no real procedures or trainings'],
      [0, 'basically playing dress-ups, with virtually no interest in actual policing']
    ]
  },
  reputation: {
    description: 'Is it known for applying the law equally, or is it a crime den?',
    preceding: 'Guardhouse Reputation:'
  },
  magic: {
    description: 'How likely is it to find magic here?',
    preceding: 'Guardhouse Magic:'
  },
  activity: {
    description: 'How busy is the store?',
    preceding: 'Guardhouse Activity:'
  }
})
