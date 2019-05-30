const random = array => {}
const either = array => {}
const linkappend = (title, text) => {}

/**
 * @param {*} story - Holds all shared story information.
 */
export function ChemistTalk (story) {
  const { chemist, brew } = story

  const inspectBrew = `Looking inside the ${brew.vesselType}, you see a ${brew.liquidDescription} bubbling away`

  return `${chemist.firstName} looks ${random(chemist.currentMood)}, and idly shifts a box of ${either(chemist.ingredients)} as ${chemist.heshe} talks. The ${chemist.raceNote} ${random(chemist.chitchat)} as you peruse the shop. ${chemist.firstName} tells you that ${chemist.heshe} is working on a ${brew.potionPurpose}, and points to the ${linkappend(`${brew.containerDescription}.`, inspectBrew)}.`
}
