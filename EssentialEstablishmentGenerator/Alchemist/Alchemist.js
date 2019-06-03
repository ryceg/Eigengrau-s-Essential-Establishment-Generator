import { createAlchemist } from './js/createAlchemist'
import story from '../../src/engine/story'

export function Alchemist () {
  story.set('alchemist', createAlchemist(story.get('town')))
}
