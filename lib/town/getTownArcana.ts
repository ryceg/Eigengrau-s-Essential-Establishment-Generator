import { Town } from './_common'

export function getTownArcana (town: Town): string {
  const roll = town.roll.arcana

  if (town.politicalIdeology === 'magocracy') {
    if (roll > 90) return `Magic is reserved for the ruling class of mages, who govern ${town.name}. Those found practicing magic without a license are considered to be undermining the council of wizards' authority.`
    if (roll > 80) return `Magic is reserved only for the ruling class of mages and those who manage to procure a license, which is an intentionally confusing affair of different forms that need signatures from the council of wizards that govern ${town.name}.`
    if (roll > 70) return `Magic is typically only for the ruling class of mages who govern ${town.name}. Those who cast spells within ${town.name} are seen as politicians more than awe-inspiring heroes.`
    if (roll > 60) return `Magic is not codified into the laws, though the wizard council that governs ${town.name} have instructed the local guards would be more likely to treat it as a threat rather than not.`
    if (roll > 50) return 'Magic has not been codified into the laws by the wizard council to keep the powers that allow them to rule to be open to all.'
    if (roll > 40) return `Magic is not codified into the laws as anything specific, though the wizard council that governs ${town.name} have instructed the local guards would be more likely to treat it as a threat rather than not.`
    if (roll > 30) return `Magic is treated with suspicion, and the wizard council that governs ${town.name} treat anybody practicing magic as a threat to their rule.`
    if (roll > 20) return `Magic is treated with suspicion and fear, and the people of ${town.name} trust only the wizard council with magic.`
    if (roll > 10) return `Those that do not sit on the wizard council that governs ${town.name} are not permitted to cast magic. It is coded into law as a restricted activity.`
    return `Magic is outlawed. Only the wizards that govern ${town.name} are permitted to cast any spells beyond a cantrip level.`
  } else {
    if (roll > 90) return "Magic is reserved only for those with a license, which is a relatively simple form to fill out, stating what type of magic you wish to practice, your contact details, a non-refundable bond to cover public liability, and whether it's for commercial or personal use."
    if (roll > 80) return "Magic is reserved only for those with a license, which is a relatively simple form to fill out, stating what type of magic you wish to practice, a public liability bond, and whether it's for commercial or personal use."
    if (roll > 70) return 'Magic is typically reserved for those with a license. There is some magic, but is mostly for personal use, and sometimes commercial.'
    if (roll > 60) return 'Magic is not codified into the laws, though the local guards would be more likely to treat it as a threat rather than not.'
    if (roll > 50) return 'Magic has not been codified into the laws.'
    if (roll > 40) return 'Magic is not codified into the laws as anything specific, though the local guards would be more likely to treat it as a threat rather than not.'
    if (roll > 30) return 'Magic is treated with suspicion, and guards look for any excuse to put a magic user away behind bars.'
    if (roll > 20) return 'Magic is treated with extreme suspicion, and is coded into law as a restricted activity.'
    if (roll > 10) return 'Magic is reviled by the guards, and they look for any excuse to put away a magic user. It is coded into law as a restricted activity, so they have an easy time of doing it, too.'
    return 'Magic is outlawed, and guards look for any excuse to put away anyone that looks like a magic user. It is coded into law as a tightly restricted activity.'
  }
}
