import { Town } from './_common'
import { getPolice } from './getPolice'

export function townRender (town: Town) {
  console.log(`Rendering ${town.name}...`)

  town.roll.guardFunding = 0

  town.wealth = getTownWealth(town)
  const police = getPolice(town.factions)
  console.log(police)
  switch (police.type) {
    case 'guards':
      if (town.roll.military > 90) {
        town.roll.guardFunding += 60
      } else if (town.roll.military > 80) {
        town.roll.guardFunding += 50
      } else if (town.roll.military > 70) {
        town.roll.guardFunding += 40
      } else if (town.roll.military > 60) {
        town.roll.guardFunding += 30
      } else if (town.roll.military > 50) {
        town.roll.guardFunding += 30
      } else if (town.roll.military > 40) {
        town.roll.guardFunding += 25
      } else if (town.roll.military > 30) {
        town.roll.guardFunding += 25
      } else if (town.roll.military > 20) {
        town.roll.guardFunding += 15
      } else if (town.roll.military <= 20) {
        town.roll.guardFunding += 10
      }
      break
    default:
      if (town.roll.military > 90) {
        town.roll.guardFunding += 60
      } else if (town.roll.military > 80) {
        town.roll.guardFunding += 50
      } else if (town.roll.military > 70) {
        town.roll.guardFunding += 40
      } else if (town.roll.military > 60) {
        town.roll.guardFunding += 30
      } else if (town.roll.military > 50) {
        town.roll.guardFunding += 30
      } else if (town.roll.military > 40) {
        town.roll.guardFunding += 25
      } else if (town.roll.military > 30) {
        town.roll.guardFunding += 25
      } else if (town.roll.military > 20) {
        town.roll.guardFunding += 15
      } else if (town.roll.military <= 20) {
        town.roll.guardFunding += 10
      }
  }

  switch (town.politicalIdeology) {
    case 'kleptocracy':
      break
    default:
      if (town.roll.law > 90) {
        town.roll.guardFunding += 25
      } else if (town.roll.law > 80) {
        town.roll.guardFunding += 20
      } else if (town.roll.law > 70) {
        town.roll.guardFunding += 15
      } else if (town.roll.law > 60) {
        town.roll.guardFunding += 15
      } else if (town.roll.law > 50) {
        town.roll.guardFunding += 15
      } else if (town.roll.law > 40) {
        town.roll.guardFunding += 10
      } else if (town.roll.law > 30) {
        town.roll.guardFunding += 10
      } else if (town.roll.law > 20) {
        town.roll.guardFunding += 5
      }
  }

  switch (town.politicalIdeology) {
    case 'magocracy':
      if (town.roll.arcana > 90) {
        town.roll.guardFunding += 15
        town.arcana = `Magic is reserved for the ruling class of mages, who govern ${town.name}. Those found practicing magic without a license are considered to be undermining the council of wizards' authority.`
      } else if (town.roll.arcana > 80) {
        town.roll.guardFunding += 10
        town.arcana = `Magic is reserved only for the ruling class of mages and those who manage to procure a license, which is an intentionally confusing affair of different forms that need signatures from the council of wizards that govern ${town.name}.`
      } else if (town.roll.arcana > 70) {
        town.roll.guardFunding += 5
        town.arcana = `Magic is typically only for the ruling class of mages who govern ${town.name}. Those who cast spells within ${town.name} are seen as politicians more than awe-inspiring heroes.`
      } else if (town.roll.arcana > 60) {
        town.arcana = `Magic is not codified into the laws, though the wizard council that governs ${town.name} have instructed the local guards would be more likely to treat it as a threat rather than not.`
      } else if (town.roll.arcana > 50) {
        town.arcana = 'Magic has not been codified into the laws by the wizard council to keep the powers that allow them to rule to be open to all.'
      } else if (town.roll.arcana > 40) {
        town.arcana = `Magic is not codified into the laws as anything specific, though the wizard council that governs ${town.name} have instructed the local guards would be more likely to treat it as a threat rather than not.`
      } else if (town.roll.arcana > 30) {
        town.arcana = `Magic is treated with suspicion, and the wizard council that governs ${town.name} treat anybody practicing magic as a threat to their rule.`
      } else if (town.roll.arcana > 20) {
        town.roll.guardFunding += 5
        town.arcana = `Magic is treated with suspicion and fear, and the people of ${town.name} trust only the wizard council with magic.`
      } else if (town.roll.arcana > 10) {
        town.roll.guardFunding += 10
        town.arcana = `Those that do not sit on the wizard council that governs ${town.name} are not permitted to cast magic. It is coded into law as a restricted activity.`
      } else if (town.roll.arcana <= 10) {
        town.roll.guardFunding += 25
        town.arcana = `Magic is outlawed. Only the wizards that govern ${town.name} are permitted to cast any spells beyond a cantrip level.`
      }
      break
    default:
      if (town.roll.arcana > 90) {
        town.arcana = "Magic is reserved only for those with a license, which is a relatively simple form to fill out, stating what type of magic you wish to practice, your contact details, a non-refundable bond to cover public liability, and whether it's for commercial or personal use."
      } else if (town.roll.arcana > 80) {
        town.arcana = "Magic is reserved only for those with a license, which is a relatively simple form to fill out, stating what type of magic you wish to practice, a public liability bond, and whether it's for commercial or personal use."
      } else if (town.roll.arcana > 70) {
        town.arcana = 'Magic is typically reserved for those with a license. There is some magic, but is mostly for personal use, and sometimes commercial.'
      } else if (town.roll.arcana > 60) {
        town.arcana = 'Magic is not codified into the laws, though the local guards would be more likely to treat it as a threat rather than not.'
      } else if (town.roll.arcana > 50) {
        town.arcana = 'Magic has not been codified into the laws.'
      } else if (town.roll.arcana > 40) {
        town.arcana = 'Magic is not codified into the laws as anything specific, though the local guards would be more likely to treat it as a threat rather than not.'
      } else if (town.roll.arcana > 30) {
        town.arcana = 'Magic is treated with suspicion, and guards look for any excuse to put a magic user away behind bars.'
      } else if (town.roll.arcana > 20) {
        town.arcana = 'Magic is treated with extreme suspicion, and is coded into law as a restricted activity.'
      } else if (town.roll.arcana > 10) {
        town.arcana = 'Magic is reviled by the guards, and they look for any excuse to put away a magic user. It is coded into law as a restricted activity, so they have an easy time of doing it, too.'
      } else if (town.roll.arcana <= 10) {
        town.arcana = 'Magic is outlawed, and guards look for any excuse to put away anyone that looks like a magic user. It is coded into law as a tightly restricted activity.'
      }
  }

  return town
}

function getTownWealth (town: Town) {
  const roll = town.roll.wealth

  if (roll > 95) return 'kingly'
  if (roll > 90) return 'aristocratic'
  if (roll > 80) return 'wealthy'
  if (roll > 70) return 'comfortable'
  if (roll > 30) return 'modest'
  if (roll > 25) return 'poor'
  return 'squalid'
}
