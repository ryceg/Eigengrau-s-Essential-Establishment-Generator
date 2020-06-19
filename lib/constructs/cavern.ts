import { random } from '../src/random'
import { getUUID } from '../src/utils'
import { ConstructUtils, Construct } from './_common'

interface Cavern extends Construct<'cavern'> {
  entrance: string
  landmark: string
  feature: string
  walls: string
  ceiling: string
  hazards: string
}

export const cavern: ConstructUtils<Cavern> = {
  create: base => ({
    $uuid: getUUID(),
    $type: 'cavern',
    entrance: random(data.entrance),
    landmark: random(data.landmark),
    feature: random(data.feature),
    walls: random(data.walls),
    ceiling: random(data.ceiling),
    hazards: random(data.hazards),
    ...base
  }),
  readout: cavern => {
    return `The ${cavern.$type} entrance is ${cavern.entrance}. As you enter, you see ${cavern.landmark}, and ${cavern.feature}. The walls are ${cavern.walls}, and the ceiling above is ${cavern.ceiling}.`
  }
}

const data = {
  entrance: ['wide and tall, letting much daylight into the entry chamber', 'a wide sinkhole', 'an easy to spot, narrow passage', 'a steep, slippery sloped tunnel', 'a man-made tunnel', 'a collapsed tunnel, impassable without excavation', 'marked with several warning signs', 'hidden by some boulders', 'hidden by a waterfall', 'hidden by a rocky overhang', 'hidden by a hillock', 'hidden by a briar patch', 'hidden by a curtain of moss', 'hidden by some enormous ancient tree roots', 'hidden by some overgrown vines', 'up a cliff face', 'down a deep hole', 'in an underwater tunnel'],
  landmark: ['a trickle of water flowing down the walls and across the floor', 'an underground lake of potable water', 'a pool of stagnant water', 'a natural bridge over a chasm', 'a narrow chasm with walls close enough to climb between', 'a deep chasm with no bottom in sight', 'a shaft in the ceiling with no light coming from it', 'a shaft in the ceiling with dim light coming from it', 'a group of stalagmites arranged in a circle', 'an arrangement of two large stalactites and two large stalagmites, reminiscent of fangs in a yawning mouth', 'a pair of natural columns', 'a large stalactite that has broken off from the ceiling and fallen to the floor', 'an array of many small stalactites spreading across the ceiling', 'a damp wall covered in soft mold', 'a recess in the wall, covered in slimy mold', 'a large patch of glowing fungus', 'a large patch of small mushrooms', 'a group of enormous mushrooms', 'a large cavern with a strong echo', 'a claustrophobic tunnel with a low ceiling'],
  feature: ['a cache of abandoned, decrepit mining equipment', 'some old dry bones', 'many bones underfoot', 'evidence of a recent encampment', 'an enormous spider web', 'a wide slippery patch of mold on the floor', 'the clatter of rocks falling', 'loose stones underfoot', 'an unstable ceiling', 'a distant sound—a scream, hammers at work, footsteps, or drums', 'the name of a previous traveler carved into a wall', 'several ancient runes carved into the wall'],
  walls: ['slightly damp', 'dripping wet', 'slick with mold', 'covered in soft fungi', 'dry as a bone', 'rough and dry', 'dry and smooth', 'jagged', 'pockmarked', 'crumbling, with loose bits flaking off', 'crumbling, with large chunks falling off at a touch', 'covered in an unidentifiable slime'],
  ceiling: ['uncomfortably close to your head', 'covered in stalactites (watch your head!)', 'smooth as glass', 'rough and jagged', 'connected to the floor by natural columns', 'so high it’s difficult to see'],
  hazards: ['a colony of poisonous mushrooms', 'a patch of toxic mold', 'the ceiling caves in', 'several rocks tumble down a sloped wall', 'the floor is very slippery', 'your foot misses the floor as you step into a pit or chasm']
}
