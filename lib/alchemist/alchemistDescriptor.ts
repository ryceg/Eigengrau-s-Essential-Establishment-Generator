import { closestMatch } from '../src/closestMatch'
import { NPC } from '../npc-generation/_common'
import { articles } from '../src/articles'
import { random } from '../src/random'
import { alchemistData } from './alchemistData'
import { Alchemist } from './_common'

export function getAlchemistIntroduction (alchemist: Alchemist, npc: NPC): string {
  const parts = []

  parts.push(`You enter ${alchemist.name}, ${articles.output(getAlchemistDescriptor(alchemist))}.`)

  parts.push(closestMatch(alchemistData.get.lookAround(alchemist), 'note', 'cleanliness', 'wealth', alchemist.roll.cleanliness, alchemist.roll.wealth))

  parts.push(`There is a chemist behind the shop counter currently ${random(npc.idle)}.`)

  return parts.join(' ')
}

function getAlchemistDescriptor (alchemist: Alchemist): string {
  const structure = alchemist.structure

  if (typeof structure === 'undefined') {
    throw new Error('Can not get descriptor for alchemist without structure.')
  }

  return `${structure.material.wealth} ${structure.material.noun} ${alchemist.wordNoun} with ${articles.output(structure.roof.verb)} roof`
}
