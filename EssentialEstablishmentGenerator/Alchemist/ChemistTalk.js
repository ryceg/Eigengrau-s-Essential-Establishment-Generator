import { randomValue } from '../../src/engine/rolls'
import { get } from '../../src/engine/story'

const linkappend = (title, text) => {}

export function ChemistTalk () {
  const $chemist = get('$chemist')
  const $brew = get('$brew')

  const inspectBrew = `Looking inside the ${$brew.vesselType}, you see a ${$brew.liquidDescription} bubbling away`

  return `${$chemist.firstName} looks ${randomValue($chemist.currentMood)}, and idly shifts a box of ${randomValue($chemist.ingredients)} as ${$chemist.heshe} talks. The ${$chemist.raceNote} ${randomValue($chemist.chitchat)} as you peruse the shop. ${$chemist.firstName} tells you that ${$chemist.heshe} is working on a ${$brew.potionPurpose}, and points to the ${linkappend(`${$brew.containerDescription}.`, inspectBrew)}.`
}
