import { Alchemist } from './_common'

export function getAlchemistDescriptor (alchemist: Alchemist) {
  const structure = alchemist.structure

  if (typeof structure === 'undefined') {
    throw new Error('Can not get descriptor for alchemist without structure.')
  }

  return `${structure.material.wealth} ${structure.material.noun} ${alchemist.wordNoun} with ${lib.articles.output(structure.roof.verb)} roof`
}
