import { random } from '../src/random'
import { getUUID } from '../src/utils'
import { Construct, ConstructUtils } from './_common'

interface Cheese extends Construct<'cheese'> {
  colour: string
  texture: string
  taste: string
  smell: string
  cost: number
}

export const cheese: ConstructUtils<Cheese> = {
  create: base => ({
    $uuid: getUUID(),
    $type: 'cheese',
    colour: random(data.colours),
    texture: random(data.textures),
    taste: random(data.tastes),
    smell: random(data.smells),
    cost: random(data.costs),
    ...base
  }),
  readout: cheese => {
    return `This cheese is ${cheese.colour}. It smells ${cheese.smell}. The taste is ${cheese.taste}, with a texture that is ${cheese.texture}.`
  }
}

const data = {
  colours: ['pale grey, with dark flecks', 'bright yellow', 'warm yellow', 'spotty yellow', 'pale yellow', 'light green', 'light greenish-yellow', 'white, with blue spots', 'white, with a purple rind', 'yellow, with a black waxy rind', 'dark, almost brown'],
  textures: ['crumbly, with a texture similar to plaster', 'rubbery, and squeaks while you eat it', 'rubbery, and squeaks rather disconcertingly while you eat it', 'crumbly, with bits going everywhere', 'somewhat rubbery', 'somewhat stringy', 'slightly stringy', 'rubbery, like a piece of leather that has been soaking in some greasy sludge', 'soft and spongey, with the occassional... crunch', 'soft, springy, and moist', 'gooey', 'moist and delicious', 'almost liquid once you bite through the rind', 'rock hard', 'mildly grainy', 'slippery', 'melted and gooey'],
  tastes: ['sharp', 'sharp and salty', 'somewhat bland', 'inoffensively mild', "salty, like a cow's salt-lick", 'rich and creamy', 'creamy, with hints of oak', 'strong, slightly salty, and extremely more-ish', 'smokey, with hints of rum', 'smokey, with hints of chili', 'salty, but immediately the spice from the peppers takes over', "bitter, with the rind tasting somewhere between a burnt log and dead bug, but the taste isn't entirely unpleasant", "a warm and smooth creaminess which envelopes your taste buds like a mother's embrace", 'entirely bland', 'incredibly and painfully sour', 'somehow meaty', 'earthy and buttery, like sautéed mushrooms', 'like it has bits of berries mixed in'],
  smells: ["pungent, as if it was the result of somebody's terrible diet decisions", 'somewhat sweet, with a heady aroma', 'like the ass of a cow in cheese form', "like the best parts of a farm's stable", 'like freshly baled hay', 'like freshly cut grass', 'like a lemon tree', 'like fresh cream', 'like a rotting corpse', 'like a roast duck filled with spices', 'like a delicious slice of bread toasted over a fire', 'like a slice of bread left in the fire far too long', 'smoky and savory', "like a halfling's sweaty foot", 'like an open sewer'],
  costs: [1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 9, 10, 10, 10, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
}
