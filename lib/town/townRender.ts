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
        town.military = 'The guard is extremely strict, with citizens being forced to carry licenses, identification papers, and travel permits. The local guard, <<profile $town.guard>>, is extremely well armed, and brutality is commonplace.'
      } else if (town.roll.military > 80) {
        town.roll.guardFunding += 50
        town.military = 'The guards are very strict, with citizens being forced to carry licenses and travel permits. The local guard, <<profile $town.guard>>, is well armed, and brutality is common.'
      } else if (town.roll.military > 70) {
        town.roll.guardFunding += 40
        town.military = 'There is a strong policing presence, with citizens seeking to live in the city being forced to undergo background checks. The local guard, <<profile $town.guard>>, is well armed, and brutality is not unheard of.'
      } else if (town.roll.military > 60) {
        town.roll.guardFunding += 30
        town.military = "There's a decent policing presence, and citizens know better than to step out of line, as <<profile $town.guard>> are armed. Despite this, brutality is rare, and citizens with nothing to hide have nothing to fear."
      } else if (town.roll.military > 50) {
        town.roll.guardFunding += 30
        town.military = `There is a policing presence in ${town.name}, but it is more for outside intruders rather than the population inside. Citizens are expected to follow the laws, and those that do have nothing to fear from <<profile $town.guard>>.`
      } else if (town.roll.military > 40) {
        town.roll.guardFunding += 25
        town.military = `The policing presence in ${town.name} is somewhat smaller than one would expect for its size. The local guard, <<profile $town.guard>>, are seen as friends and drinking buddies, rather than horrible tyrants.`
      } else if (town.roll.military > 30) {
        town.roll.guardFunding += 25
        town.military = `The policing presence in ${town.name} is more of a militia; some of the members of <<profile $town.guard>> are part time, and there is little need for the use of force outside of intruders.`
      } else if (town.roll.military > 20) {
        town.roll.guardFunding += 15
        town.military = `The policing presence in ${town.name} is a militia; most of the guards of <<profile $town.guard>> are part time, and there is little need for the use of force. Citizens act with honesty, and have no need for 24/7 guards.`
      } else if (town.roll.military <= 20) {
        town.roll.guardFunding += 10
        town.military = `The policing presence in ${town.name} is a militia; the guards of <<profile $town.guard>> are part time, and there is rarely any need for the use of force. Law breakers are judged by community tribunals.`
      }
      break
    default:
      if (town.roll.military > 90) {
        town.roll.guardFunding += 60
        town.military = `The policing carried out by ${police.name} is extremely strict, with citizens being forced to carry licenses, identification papers, and travel permits. <<profile $town.guard>> control the $town.type, and are extremely well armed, with brutality being commonplace.'`
      } else if (town.roll.military > 80) {
        town.roll.guardFunding += 50
        town.military = `${police.name} are very strict, with citizens being forced to carry licenses and travel permits. The law is enforced by <<profile $town.guard>>, who are well armed, and brutality is common.'`
      } else if (town.roll.military > 70) {
        town.roll.guardFunding += 40
        town.military = `There is a strong guard presence enacted by ${police.name}, with citizens seeking to live in the city being forced to undergo background checks. <<profile $town.guard>> are well armed, and brutality is not unheard of.'`
      } else if (town.roll.military > 60) {
        town.roll.guardFunding += 30
        town.military = "There's a decent guard presence, and citizens know better than to step out of line, as <<profile $town.guard>> are armed. Despite this, brutality is rare, and citizens with nothing to hide have nothing to fear."
      } else if (town.roll.military > 50) {
        town.roll.guardFunding += 30
        town.military = `There is a guard presence in ${town.name}, but it is more for outside intruders rather than the population inside. Citizens are expected to follow the laws, and those that do have nothing to fear from <<profile $town.guard>>, who take care of policing matters.`
      } else if (town.roll.military > 40) {
        town.roll.guardFunding += 25
        town.military = `The guard presence in ${town.name} is somewhat smaller than one would expect for its size, perhaps due in part because law enforcement is carried out by <<profile $town.guard>>, who are seen as friends and drinking buddies, rather than horrible tyrants.`
      } else if (town.roll.military > 30) {
        town.roll.guardFunding += 25
        town.military = `The guard presence in ${town.name} is small, and policing is carried out by <<profile $town.guard>>. There is usually little need for the use of force outside of intruders.`
      } else if (town.roll.military > 20) {
        town.roll.guardFunding += 15
        town.military = `The guard presence in ${town.name} is a militia; policing is carried out by <<profile $town.guard>>, and there is little need for the use of force. Citizens act with honesty, and have no need for 24/7 guards.`
      } else if (town.roll.military <= 20) {
        town.roll.guardFunding += 10
        town.military = `The guard presence in ${town.name} is a militia; policing is carried out by <<profile $town.guard>>, and there is rarely any need for the use of force. Law breakers are judged by community tribunals.`
      }
  }

  switch (town.politicalIdeology) {
    case 'kleptocracy':
      if (town.roll.law > 90) {
        town.law = `Law in ${town.name} is completely one sided. Those that breach the complex and codified list of laws and do not have the protection of the Thieves' Guild can expect hard labor, incarceration, or public execution. The Thieves' Guild controls the law, and have free reign as a result.`
      } else if (town.roll.law > 80) {
        town.law = `Law in ${town.name} is totally one sided. Those that breach the complex list of laws and do not have the protection of the Thieves' Guild can expect hard labor, incarceration, or sometimes, even public execution. The Thieves' Guild controls the law, and have free reign as a result.`
      } else if (town.roll.law > 70) {
        town.law = `Law in ${town.name} is very much in favour of the Thieves' Guild that runs the town. Their political power renders them virtually immune to the law, and criminals fear them more than the judicial system.`
      } else if (town.roll.law > 60) {
        town.law = `Law in ${town.name} is in favour of the Thieves' Guild that runs the town. Their political power renders them largely above the law, and criminals fear them more than the judicial system.`
      } else if (town.roll.law > 50) {
        town.law = `Law in ${town.name} is in favour of the Thieves' Guild that run the kleptocratic government. Their political power renders them mostly the law, and crime is rampant.`
      } else if (town.roll.law > 40) {
        town.law = `Law in ${town.name} is slack, perhaps intentionally so- the Thieves' Guild that control the government would not be above bending the laws in their favour.`
      } else if (town.roll.law > 30) {
        town.law = `Law in ${town.name} is quite slack as a result of a kleptocratic government. Those not aligned with the Thieves' Guild can expect harsh fines for crime.`
      } else if (town.roll.law > 20) {
        town.law = `Law in ${town.name} is almost non existant for the members of the kleptocratic government that controls ${town.name}. For the common people, though, one can expect to lose a hand for stealing a loaf of bread without paying your Guild membership fees.`
      } else if (town.roll.law <= 20) {
        town.law = `Law in ${town.name} is basically non existant for the Thieves' Guild members that control the government. Common folk can lose a hand or their head for stealing a loaf of bread without paying their Guild membership fees, though.`
      }
      break
    default:
      if (town.roll.law > 90) {
        town.roll.guardFunding += 25
        town.law = `Law in ${town.name} is overwhelmingly punitive, and those that breach the complex and codified list of laws can expect hard labor, incarceration, or public execution. Crime is seen as a stain, which cannot be erased, and only through retribution can it be redeemed.`
      } else if (town.roll.law > 80) {
        town.roll.guardFunding += 20
        town.law = `Law in ${town.name} is extremely punitive, and those that breach the complex list of laws can expect hard labor, incarceration, or sometimes public execution. Crime is an ugly stain on humanity, to be punished wherever possible.`
      } else if (town.roll.law > 70) {
        town.roll.guardFunding += 15
        town.law = `Law in ${town.name} is very much punitive based, and those that breach the laws can expect hard labor, incarceration, or sometimes public execution. Crime is an ugly stain on humanity, to be punished.`
      } else if (town.roll.law > 60) {
        town.roll.guardFunding += 15
        town.law = `Law in ${town.name} is punitive based, and those that breach the laws can expect hard labor, incarceration, fines, or, in some instances, public execution. Crime is an ugly stain on humanity, to be removed wherever possible.`
      } else if (town.roll.law > 50) {
        town.roll.guardFunding += 15
        town.law = `Law in ${town.name} is punitive, and those that breach the laws can expect hard labor, incarceration, fines, or, in rare instances, execution.`
      } else if (town.roll.law > 40) {
        town.roll.guardFunding += 10
        town.law = `Law in ${town.name} is somewhat reform-based, and those that breach the laws can expect hard labor, incarceration, or fines. The death penalty is typically reserved for traitors to the state.`
      } else if (town.roll.law > 30) {
        town.roll.guardFunding += 10
        town.law = `Law in ${town.name} is reform-based, and those that breach the laws can expect incarceration, fines, or going to an asylum for reform. The death penalty is reserved only for traitors to the state.`
      } else if (town.roll.law > 20) {
        town.roll.guardFunding += 5
        town.law = `Law in ${town.name} is reform-based, and those that breach the laws can expect incarceration, fines, asylums, or work-release programs to provide them with the chance to not become a recidivist. The death penalty is reserved only for traitors to the state.`
      } else if (town.roll.law <= 20) {
        town.law = `Law in ${town.name} is reform-based, and those that breach the laws can expect fines, penalties, or work-release programs to provide them with the best possible chance to not become a recidivist.`
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
