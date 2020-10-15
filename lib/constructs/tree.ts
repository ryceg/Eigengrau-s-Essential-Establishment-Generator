import { getUUID, keys } from '../src/utils'
import { random } from '../src/random'
import { Construct, ConstructUtils } from './_common'

export interface Tree extends Construct<'tree'> {
  species: string
  size: string
  feature: string
  biome?: keyof typeof biomes
}

export const tree: ConstructUtils<Tree> = {
  create: base => {
    const biome = biomes[base?.biome || random(keys(biomes))]

    return {
      $uuid: getUUID(),
      $type: 'tree',
      species: random(biome.species),
      size: random(biome.size),
      feature: random(biome.feature),
      ...base
    }
  },
  readout: tree => {
    return `The ${tree.species} tree is ${tree.size} ${tree.feature}`
  }
}

const biomes = {
  forest: {
    species: ['oak', 'oak', 'oak', 'pine', 'maple', 'birch', 'ash', 'elm', 'fir', 'spruce', 'sycamore', 'alder', 'cypress', 'yew'],
    // a tree that is _______
    size: [
      'positively huge.',
      'as thick as a barrel.',
      'so tall that you have to crane your neck back to see the top of it.',
      'at least a hundred years old, with an impressive number of branches.',
      'huge, even compared to the other trees in the forest.',
      'as thick as a man, and twice as tall.',
      'half as thick as a man. It looks somewhat weedy.',
      'comparatively young; many of the other trees nearby are taller.',
      'little more than a stump, save for one limb which keeps its tree status.',
      'rather tall, but not very thick; it sways in the wind in such a way that it makes you a little uncomfortable.',
      'barely as tall as a man; this was relatively recently planted, and has not had time to grow.'
    ],
    feature: [
      'Near the base, one can see some initials have been etched into the bark.',
      'It is slightly stunted; you can see some burn marks on it.',
      'It is slightly mangled, with a couple limbs missing.',
      'It has some scratch marks near the base of it.',
      'It looks like it has been used as a scratching post for a large creature.',
      'There are some feasome looking claw marks halfway up the trunk.'
    ]
  },
  mountain: {
    species: ['oak', 'oak', 'oak', 'pine', 'maple', 'birch', 'ash', 'elm', 'fir', 'spruce', 'sycamore', 'alder', 'cypress', 'yew'],
    // a tree that is _______
    size: [
      'positively huge',
      'as thick as a barrel.',
      'so tall that you have to crane your neck back to see the top of it.',
      'at least a hundred years old, with an impressive number of branches.',
      'huge, even compared to the other trees on this side of the mountain.',
      'as thick as a man, and twice as tall.',
      'half as thick as a man. It looks somewhat weedy.',
      'comparatively young; many of the other trees nearby are taller.',
      'slightly stunted; you can see some burn marks on it.',
      'slightly mangled, with a couple limbs missing.',
      'little more than a stump, save for one limb which keeps its tree status.',
      'rather tall, but not very thick; it sways in the wind in such a way that it makes you a little uncomfortable.',
      'barely as tall as a man; this was relatively recently planted, and has not had time to grow.'
    ],
    feature: [
      'Near the base, one can see some initials have been etched into the bark.',
      'It is slightly stunted; you can see some burn marks on it.',
      'It is slightly mangled, with a couple limbs missing.',
      'It has some scratch marks near the base of it.',
      'It looks like it has been used as a scratching post for a large creature.',
      'There are some feasome looking claw marks halfway up the trunk.',
      'You can see some marks where climbing gear had been forced into the tree a long time ago.',
      'You can see some bird has made this tree its home.',
      'The crunch of egg shells under foot tell you that this was once home to a bird nest.'
    ]
  },
  desert: {
    species: ['oak', 'oak', 'oak', 'pine', 'maple', 'birch', 'ash', 'elm', 'fir', 'spruce', 'sycamore', 'alder', 'cypress', 'yew'],
    // a tree that is _______
    size: [
      'as thick as a barrel.',
      'so tall that you have to crane your neck back to see the top of it.',
      'at least a hundred years old, with an impressive number of branches.',
      'huge, but even more impressive with no other trees in sight.',
      'as thick as a man, and twice as tall.',
      'half as thick as a man. It looks somewhat weedy due to the poor conditions that it has been growing in.',
      'comparatively young; it looks to have been planted by a traveler.',
      'little more than a stump, save for one limb which keeps its tree status.',
      'rather tall, but not very thick; it sticks out like a sore thumb against the flat horizon.',
      'barely as tall as a man; this was relatively recently planted, and has had neither the time nor water to grow.'
    ],
    feature: [
      'Near the base, one can see some initials have been etched into the bark.',
      'It is slightly stunted; you can see some burn marks on it.',
      'There are some nasty scorch marks on the side of it.',
      'It is slightly mangled, with a couple limbs missing.',
      'It has some scratch marks near the base of it.',
      'It looks like it has been used as a scratching post for a large creature.',
      'There are some feasome looking claw marks halfway up the trunk.',
      'You can see some marks where climbing gear had been forced into the tree a long time ago for a better view of the horizon.',
      'You can see some bird has made this tree its home.',
      'The crunch of egg shells under foot tell you that this was once home to a bird nest.'
    ]
  },
  plains: {
    species: ['oak', 'oak', 'oak', 'pine', 'maple', 'birch', 'ash', 'elm', 'fir', 'spruce', 'sycamore', 'alder', 'cypress', 'yew'],
    // a tree that is _______
    size: [
      'as thick as a barrel.',
      'so tall that you have to crane your neck back to see the top of it.',
      'at least a hundred years old, with an impressive number of branches.',
      'huge, even compared to the other trees on the horizon.',
      'as thick as a man, and twice as tall.',
      'half as thick as a man. It looks somewhat weedy.',
      'comparatively young; it looks to have been planted by a traveler.',
      'little more than a stump, save for one limb which keeps its tree status.',
      'rather tall, but not very thick; it sways in the wind in such a way that it makes you a little uncomfortable.',
      'barely as tall as a man; this was relatively recently planted, and has not had time to grow.'
    ],
    feature: [
      'Near the base, one can see some initials have been etched into the bark.',
      'It is slightly stunted; you can see some burn marks on it.',
      'It is slightly mangled, with a couple limbs missing.',
      'It has some scratch marks near the base of it.',
      'It looks like it has been used as a scratching post for a large creature.',
      'There are some feasome looking claw marks halfway up the trunk.',
      'You can see some marks where climbing gear had been forced into the tree a long time ago.',
      'You can see some bird has made this tree its home.',
      'The crunch of egg shells under foot tell you that this was once home to a bird nest.'
    ]
  }
}
