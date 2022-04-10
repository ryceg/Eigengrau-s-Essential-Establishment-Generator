/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Building, NPC, Town } from '@lib'
import { createNPC } from '../../NPCGeneration/createNPC'

export const createBartender = (town: Town, tavern: Building, opts: Partial<NPC> = {}): NPC => {
  const bartender = createNPC(town, {
    owner: lib.random(['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'manager', 'manager', 'acting manager']),
    profession: lib.random(['bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'rogue', 'ranger', 'paladin', 'sorcerer', 'warlock', 'wizard']),
    ...opts
  })

  lib.assign(bartender, {
    greeting: [
      'nods at you',
      'welcomes you warmly',
      'smiles and greets you',
      'raises a hand with a wave',
      `sizes you up, before ${bartender.heshe} nods at you`,
      'checks you out for just a moment before smiling at you'],
    idle: [
      `polishing a glass with ${bartender.hisher} hands`,
      'reading a newspaper which says <<print lib.newspaper.random()>>',
      'pouring a drink for a customer',
      'taking an order from a customer',
      'taking an order from a customer',
      'talking with a customer',
      `picking ${bartender.hisher} nose`,
      `scratching ${bartender.hisher}${['buttocks', 'bum', 'nose', 'chin'].random()}`,
      `playing a card game by ${bartender.himherself}`,
      'checking the stock levels of the beer on tap',
      'shouting into the kitchen, annoyed',
      'yelling instructions into the kitchen',
      'leaning against a stool, surveying the work of one of the barmaids',
      'pouring a beer from one of the taps',
      'zoned out staring at a wall',
      'lighting some candles on the bar',
      'handing a customer their food',
      'barking orders at one of the barmaids',
      'breaking up a fight in front of the bar']
  })

  if (tavern) {
    lib.createReciprocalRelationship(town, tavern, bartender, {
      relationship: 'owner',
      reciprocalRelationship: 'business'
    })
  }

  return bartender
}
