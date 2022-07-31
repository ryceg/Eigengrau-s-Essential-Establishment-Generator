import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { assert } from '../src/utils'
import { Town } from './_common'

export function getTownArcana (town: Town): string {
  const roll = town.roll.arcana
  const magocracyThresholds: ThresholdTable = [
    [90, `Magic is reserved for the ruling class of mages, who govern ${town.name}. Those found practicing magic without a license are considered to be undermining the council of wizards' authority.`],
    [80, `Magic is reserved only for the ruling class of mages and those who manage to procure a license, which is an intentionally confusing affair of different forms that need signatures from the council of wizards that govern ${town.name}.`],
    [70, `Magic is typically only for the ruling class of mages who govern ${town.name}. Those who cast spells within ${town.name} are seen as politicians more than awe-inspiring heroes.`],
    [60, `Magic is not codified into the laws, though the wizard council that governs ${town.name} have instructed the local guards would be more likely to treat it as a threat rather than not.`],
    [50, 'Magic has not been codified into the laws by the wizard council to keep the powers that allow them to rule to be open to all.'],
    [40, `Magic is not codified into the laws as anything specific, though the wizard council that governs ${town.name} have instructed the local guards would be more likely to treat it as a threat rather than not.`],
    [30, `Magic is treated with suspicion, and the wizard council that governs ${town.name} treat anybody practicing magic as a threat to their rule.`],
    [20, `Magic is treated with suspicion and fear, and the people of ${town.name} trust only the wizard council with magic.`],
    [10, `Those that do not sit on the wizard council that governs ${town.name} are not permitted to cast magic. It is coded into law as a restricted activity.`],
    [0, `Magic is outlawed. Only the wizards that govern ${town.name} are permitted to cast any spells beyond a cantrip level.`]
  ]

  const regularThresholds: ThresholdTable = [
    [90, "Magic is reserved only for those with a license, which is a relatively simple form to fill out, stating what type of magic you wish to practice, your contact details, a non-refundable bond to cover public liability, and whether it's for commercial or personal use."],
    [80, "Magic is reserved only for those with a license, which is a relatively simple form to fill out, stating what type of magic you wish to practice, a public liability bond, and whether it's for commercial or personal use."],
    [70, 'Magic is typically reserved for those with a license. There is some magic, but is mostly for personal use, and sometimes commercial.'],
    [60, 'Magic is not codified into the laws, though the local guards would be more likely to treat it as a threat rather than not.'],
    [50, 'Magic has not been codified into the laws.'],
    [40, 'Magic is not codified into the laws as anything specific, though the local guards would be more likely to treat it as a threat rather than not.'],
    [30, 'Magic is treated with suspicion, and guards look for any excuse to put a magic user away behind bars.'],
    [20, 'Magic is treated with extreme suspicion, and is coded into law as a restricted activity.'],
    [10, 'Magic is reviled by the guards, and they look for any excuse to put away a magic user. It is coded into law as a restricted activity, so they have an easy time of doing it, too.'],
    [0, 'Magic is outlawed, and guards look for any excuse to put away anyone that looks like a magic user. It is coded into law as a tightly restricted activity.']
  ]

  const result = getRolledFromTable(town.politicalIdeology === 'magocracy' ? magocracyThresholds : regularThresholds, roll)
  assert(typeof result === 'string')
  return result
}
