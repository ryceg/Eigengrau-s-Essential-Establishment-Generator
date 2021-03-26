import { Town } from './_common'
import { getPolice } from './getPolice'

export function townRender (town: Town) {
  console.log(`Rendering ${town.name}...`)

  town.roll.guardFunding = 0

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
      } else if (town.roll.arcana > 80) {
        town.roll.guardFunding += 10
      } else if (town.roll.arcana > 70) {
        town.roll.guardFunding += 5
      } else if (town.roll.arcana > 20) {
        town.roll.guardFunding += 5
      } else if (town.roll.arcana > 10) {
        town.roll.guardFunding += 10
      } else if (town.roll.arcana <= 10) {
        town.roll.guardFunding += 25
      }
  }

  return town
}

export function getTownWealth (roll: number) {
  if (roll > 95) return 'kingly'
  if (roll > 90) return 'aristocratic'
  if (roll > 80) return 'wealthy'
  if (roll > 70) return 'comfortable'
  if (roll > 30) return 'modest'
  if (roll > 25) return 'poor'
  return 'squalid'
}
