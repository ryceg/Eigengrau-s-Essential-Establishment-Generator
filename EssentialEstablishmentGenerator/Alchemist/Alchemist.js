import { createAlchemist } from './js/createAlchemist'
import { set, get } from '../../src/engine/story'

export function Alchemist () {
  set('$alchemist', createAlchemist(get('$town')))
}
