import { GoodsAndService } from '../goodsAndServices'
import { Building } from 'lib/buildings/_common'
import { Town } from 'lib/town/_common'
import { createNamesake } from '@lib'
import { BuildingOpts } from 'lib/buildings/BuildingToCreate'
import { assertBuildingExists } from '../assertBuildingExists'

interface FletcherData extends GoodsAndService {
  name: GoodsAndService['name'] & {
    adjectivePerson: string[]
  }
}

export const fletcher: FletcherData = {
  create (town: Town, building: Building, opts?: BuildingOpts) {
    assertBuildingExists(building)

    const typeData = fletcher

    building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts?.npc })
    lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
    building.name ||= opts?.building?.name || typeData.name.function(town, building)

    building.notableFeature ??= lib.random(typeData.notableFeature)
    building.specialty ??= lib.random(typeData.specialty)
    building.localImage = 'fletcher-illustration'
    building.tippyDescription = `A ${building.type} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}.`
    return building
  },
  name: {
    function (town: Town, building: Building) {
      const nameRoot = fletcher.name
      const noun = lib.random(nameRoot.noun)
      const wordNoun = lib.random(nameRoot.wordNoun)
      const adjective = lib.random(nameRoot.adjective)
      const townName = town.name
      const roadName = town.roads[building.road].name
      const namesake = building?.associatedNPC || createNamesake(town)
      const unique = lib.random(nameRoot.unique) || `The ${townName} ${wordNoun}`
      return lib.toTitleCase(lib.random([
        `The ${adjective} ${noun}`,
        `The ${townName} ${wordNoun}`,
        `The ${roadName} ${wordNoun}`,
        `${namesake.firstName}'s ${wordNoun}`,
        `${lib.random(nameRoot.adjectivePerson)} ${namesake.firstName}'s ${wordNoun}`,
        `${namesake.lastName}'s ${noun}`,
        unique
      ]))
    },
    unique: [
      "The Hunter's Mark",
      'Straight Arrow Company',
      'The Snapped String',
      'The Bound Accuracy',
      'True Strike Fletcher',
      "Bullseye's",
      'The Fletching Wretch',
      'The Feathered Fool',
      'Wooden It Be Nice',
      'The Oak and Sinew',
      'Fledgling Fletcher',
      'Fishtail Fletchings',
      'The Shivering Quiver'
    ],
    noun: [
      'arrow',
      'arrow head',
      'bow',
      'point',
      'quiver',
      'oak',
      'bodkin',
      'broadhead',
      'feather',
      'string',
      'target',
      'shot'
    ],
    adjective: [
      'fast',
      'quick',
      'fleet',
      'sleek',
      'steadfast',
      'strong',
      'mighty',
      'rickety',
      'flying',
      'sringy',
      'thick',
      'magic',
      'noble'
    ],
    adjectivePerson: [
      'cheery',
      'happy',
      'hopeful',
      'morning',
      'magical',
      'sassy',
      'friendly',
      'sleepy',
      'drowsy',
      'peaceful',
      'sad',
      'loud',
      'angry',
      'dopey',
      'fat',
      'stoic',
      'colorful',
      'silly',
      'big',
      'slim',
      'steady'
    ],
    wordNoun: [
      'fletcher',
      'bowyer',
      'bow and arrow shop',
      'hunting store',
      'hunting supplier',
      'bow shop',
      'arrow shop'
    ]
  },
  PassageFormat: () => [
    // each array string will be a new line.
    // this will be evaluated by SugarCube; use *SugarCube syntax* for functions.
    `You ${['enter', 'walk into', 'open the door to', 'come inside', 'step through the door of', 'come off the street into'].random()} ${[
      '$building.name, $building.structure.descriptor.',
      '$building.structure.descriptor called $building.name.'
    ].random()} You notice $building.notableFeature.`,
    '',
    'This $building.wordNoun is known for $building.specialty. There is a <<profile $building.associatedNPC $building.associatedNPC.descriptor>> currently <<print $building.associatedNPC.idle.random()>>. <<print $building.associatedNPC.heshe.toUpperFirst()>> welcomes you, and asks what you are after.',
    '<<goods $building setup.goodsAndServices[$building.type].goods>>'
  ],
  profession: {
    name: 'fletcher',
    opts: {
      profession: 'fletcher',
      hasClass: false,
      idle: [
        // name is currently _______
        'bending a longbow over and stringing it up',
        'carefully finding the balance point of an arrow',
        'peering down the shaft of an arrow with one eye, checking its straightness',
        'absentmindedly fiddling with a small iron arrowhead',
        'leaning back in his chair with an arrow balanced on his nose',
        'testing the draw weight of a massive heavy bow',
        'aggressively sharpening the head of an arrow',
        'lazily spinning an arrow between his fingers',
        'gently attaching the fletchings to an arrow',
        'applying a leather covering to the grip of a bow',
        'reading a book on crossbow mechanisms',
        'putting some final decorations on a fancy longbow',
        'skillfully attaching an arrowhead to its shaft',
        'carrying in a recent shipment of lumber',
        'bending an arrow to test its strength',
        'intensely focusing on an arrow, searching for cracks in the wood',
        'intensely focusing on a bow, searching for cracks in the wood'
      ]
    }
  },
  goods: [
    {
      summary: '20 arrows',
      cost: 100,
      description: 'A bundle of 20 standard arrows.'
    },
    {
      summary: '10 silvered arrows',
      cost: 10050,
      description: 'Ten arrows plated with silver to bypass weapon immunities. Good for vampires and lycanthropes.',
      exclusions (town: Town, building: Building) {
        return town.population > 2000 && building.roll.wealth > 60
      }
    },
    {
      summary: '20 bolts',
      cost: 100,
      description: 'A bundle of 20 standard crossbow bolts.'
    },
    {
      summary: '10 silvered bolts',
      cost: 10050,
      description: 'Ten bolts plated with silver to bypass weapon immunities. Good for vampires and lycanthropes.',
      exclusions (town: Town, building: Building) {
        return town.population > 2000 && building.roll.wealth > 60
      }
    },
    {
      summary: '50 blowgun needles',
      cost: 100,
      description: 'A bundle of 50 blowgun needles.'
    },
    {
      summary: '20 sling bullets',
      cost: 4,
      description: 'Small lead bullets used with a sling to bludgeon enemies.'
    },
    {
      summary: 'shortbow',
      cost: 2500,
      description: 'A simple lightweight bow with low draw weight. Easy to use, but limited in range.'
    },
    {
      summary: 'longbow',
      cost: 5000,
      description: 'A large bow with a high draw weight. Requires some practice to use, but has double the range of a shortbow.'
    },
    {
      summary: 'blowgun',
      cost: 1000,
      description: 'A lightweight ranged weapon with little damage. It is often used to deliver poisons.'
    },
    {
      summary: 'sling',
      cost: 10,
      description: 'A simple and light ranged weapon, used to hurl lead bullets at enemies.'
    },
    {
      summary: 'light crossbow',
      cost: 2500,
      description: 'A lightweight crossbow, comparable in range to a shortbow. Slow to reload, but packs a punch.'
    },
    {
      summary: 'hand crossbow',
      cost: 7500,
      description: 'A specialized crossbow that can be wielded with one hand in exchange for less power and shorter range.'
    },
    {
      summary: 'heavy crossbow',
      cost: 5000,
      description: 'A hefty crossbow. Slow to reload and lacks the range of a longbow, but hits hard.'
    },
    {
      summary: 'dart',
      cost: 5,
      description: 'A simple throwing dart.'
    },
    {
      summary: 'quiver',
      cost: 100,
      description: 'A quiver to hold 20 arrows.'
    },
    {
      summary: 'case, crossbow bolt',
      cost: 100,
      description: 'A case to hold 20 crossbow bolts.'
    },
    {
      summary: "woodcarver's tools",
      cost: 100,
      description: 'A common set of tools used for woodcarving.'
    }
  ],
  type: 'fletcher',
  notableFeature: [
    // you notice _______
    'there are feathers floating around the room.',
    'there are pieces of feather strewn about on the floor.',
    'the smell of fresh cut wood permeates the air.',
    'an arrow on display with an array of colorful feathers.',
    'a large bear pelt hung proudly on the wall behind the counter.',
    'a collection of deer antlers mounted across the wall furthest from you.',
    'the faint smell of beer filling the air.',
    'the building is kept very warm by a crackling fireplace.',
    'the room is quiet and peaceful.',
    'a diagram of different arrowheads and their uses.',
    'the wall is lined with intricately painted bows.',
    'a large variety of woods stacked behind the counter.',
    'a pretty oak and steel crossbow in a glass case marked "old reliable."',
    'a frame on the wall that contains an arrow split in two by another arrow.',
    'the muffled barks of a hunting dog in another room.',
    'a sack of feathers lying on the floor behind the counter.',
    'a massive ballista bolt on display above the counter.',
    'a wall covered in pelts from an array of animals, from a skunk to a bear.',
    'a target on the far wall with 5 arrows no more than an inch from the bullseye',
    'shavings of wood scattered on the floor near the counter.',
    'a large selection of woods displayed on the wall for customers to choose from.'
  ],
  specialty: [
    // the fletcher is known for _______
    'excellent and quick service.',
    'giving the best hunting tips.',
    'knowing the best places to find game.',
    'gossiping about local drama.',
    'giving a free lesson with every bow purchase.',
    'providing the most affordable products around.',
    'giving the fastest service in town.',
    'always serving with a smile.',
    'having the sharpest arrows in town.',
    'crafting arrows that always hit their mark.',
    'their extremely strong and reliable arrows.',
    'creating an arrow that can pierce clean through a hog.',
    'their quivers that keep arrows from falling out when on the move.',
    'their bowstrings that never snap.',
    'crafting tough and reliable bows that rarely break.',
    'offering a free quiver of arrows with every bow purchase.',
    'making the heaviest bows on the continent.',
    'inventing a bow with added sights.',
    'creating the fastest reloading crossbow.',
    'designing a custom bow for a local noble.',
    'supplying the local militia with quality bows.',
    'stringing all their bows a little too tight.',
    'being capable of making a longbow that even a goliath would struggle to draw back.',
    'making powerful arrows that have a side effect of breaking more often.'
  ]
}
