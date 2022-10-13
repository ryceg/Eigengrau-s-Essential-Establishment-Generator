import { GoodsAndService } from '../goodsAndServices'
import { Building } from 'lib/buildings/_common'
import { Town } from 'lib/town/_common'
import { BuildingOpts } from 'lib/buildings/BuildingToCreate'
import { assertBuildingExists } from '../assertBuildingExists'

interface CobblerData extends GoodsAndService {
  name: GoodsAndService['name'] & {
    adjectivePerson: string[]
  }
}

export const cobbler: CobblerData = {
  create (town: Town, building: Building, opts?: BuildingOpts) {
    assertBuildingExists(building)

    const typeData = cobbler

    building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts?.npc })
    lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
    building.name ||= opts?.building?.name || typeData.name.function(town, building)

    building.notableFeature ??= lib.random(typeData.notableFeature)
    building.specialty ??= lib.random(typeData.specialty)
    building.localImage = 'cobbler-illustration'
    building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}.`
    return building
  },
  name: {
    function (town: Town, building: Building) {
      const nameRoot = cobbler.name
      const noun = lib.random(nameRoot.noun)
      const wordNoun = lib.random(nameRoot.wordNoun)
      const adjective = lib.random(nameRoot.adjective)
      const townName = town.name
      const roadName = town.roads[building.road].name
      const unique = lib.random(nameRoot.unique) || `The ${townName} ${wordNoun}`
      const namesake = building?.associatedNPC || lib.createNamesake(town)
      return lib.toTitleCase(lib.random([
        `The ${adjective} ${noun}`,
        `The ${townName} ${wordNoun}`,
        `The ${roadName} ${wordNoun}`,
        `${namesake.firstName}'s ${wordNoun}`,
        `${lib.random(nameRoot.adjectivePerson)} ${namesake.firstName}'s ${wordNoun}`,
        `${namesake.lastName}'s Shoe Repair`,
        unique
      ]))
    },
    unique: [
      'Shoes and More',
      'The Heeler',
      'Shoes Rescued',
      'The Cobblers Closet',
      'Old Soles',
      'Sole Provider',
      'Heel to Toe',
      'Shoes, Shoes, and more Shoes',
      'Foot First',
      'Lace It',
      'Heels for Walking',
      'Just for Kicks',
      'Heels and Feels',
      'Shoe Secret',
      'Solestruck',
      'Taps',
      'Up the Heel',
      'Boots',
      'Killer Heels',
      'Down the Sole',
      'Happy Feet',
      'Shoe Magic',
      'The Boot',
      'Tipsy Taps',
      'Stilettos',
      'Perfect Pair',
      'New Steps',
      'Foot by Foot',
      'Paired Perfect',
      'Splendid Shoes',
      'Suited Shoes',
      'A Foor Ahead',
      'Clogged Up',
      'Pretty Pumps',
      'Save Your Sole'
    ],
    noun: [
      'shoe',
      'heel',
      'stiletto',
      'boot',
      'bootstrap',
      'laces',
      'loafer',
      'slipper',
      'clog',
      'sole',
      'sandal'
    ],
    adjective: [
      'colorful',
      'brilliant',
      'radiant',
      'vibrant',
      'dirty',
      'polished',
      'weathered',
      'leathery',
      'happy',
      'cheery',
      'waxed',
      'crafty',
      'red'
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
      'crafty'
    ],
    wordNoun: [
      'cobblers',
      'cobbler shop',
      'shoemaker shop',
      'cordwainer shop',
      'shoe store',
      'boot shop'
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
    name: 'cobbler',
    opts: {
      profession: 'cobbler',
      hasClass: false,
      idle: [
        // There is a cobbler currently _______
        'helping a customer try on a nice pair of leather boots',
        'hammering at the sole of a shoe',
        'fitting an insole into a large boot',
        'lacing up a fine looking pair of shoes',
        'shining up a dirty pair of dress shoes',
        'waxing some thick, leathery boots',
        'prying the heel off a shoe with a thin piece of metal',
        'repairing the damaged eyelet on a shoe',
        'sewing up a hole at the toe of a large boot',
        'carving a new heel for an expensive looking pair of stilettos',
        'replacing the sole on a very colorful pair of shoes',
        'trying to press out the wrinkles on a rough looking boot',
        'shining up a new pair of shoes',
        'adjusting shoes on a shelf to one side of the store',
        'starting to knod off in a corner of the room',
        'chatting with a customer about proper footwear care',
        'reading a book titled "A Guide to Saving Soles"',
        'using a large wooden block to stretch the inside of a pair of pointed shoes',
        'applying a thick coating of shoe polish to a pair of dirty boots',
        'wrapping some heavy leather around a shoe form',
        'sewing together two parts of a new shoe',
        'measuring a customers foot size for a proper fitting',
        'dying a new pair of shoes a deep, rich brown',
        'rummaging through a box full of shoe laces',
        'working on a pair of expensive looking high heels',
        'ripping crooked seams out of the side of a poorly made dress shoe'
      ]
    }
  },
  goods: [
    {
      summary: 'short boots',
      cost: 10,
      description: 'A pair of barely ankle height boots made of some kind of leather'
    },
    {
      summary: 'high boots',
      cost: 15,
      description: 'A tall pair of thick leather boots'
    },
    {
      summary: 'heeled shoes',
      cost: 10,
      description: 'A fine looking pair of shoes with a thick heel on the back'
    },
    {
      summary: 'dress shoes',
      cost: 25,
      description: 'A fancy looking pair of shoes made to wear to formal events'
    },
    {
      summary: 'shoe repair',
      cost: 5,
      type: 'service',
      description: 'Repair services for shoes or boots of any kind within reason'
    }
  ],
  type: 'cobblers',
  notableFeature: [
    // you notice _______
    'quite a few large hides of leather hanging from a back wall with shoe patterns drawn onto them',
    'a large variety of wooden shoe forms hanging from pegs on a wall',
    'a large window display full of exclusively thigh-high black boots',
    'boxes and boxes of different colored shoelaces stacked up in one corner of the shop',
    'a sign reading "free foot measurements" set up at the shop counter',
    'one of the store shelves is brimming with nothing but different kinds of shoe polishes',
    'a large jar on the counter labeled "homemade boot wax"; the substance inside is yellowish and creamy looking',
    'there are almost no shoes out on display',
    'the shop appears to only make fancy pointed dress shoes',
    'an incredibly large variety of shoes are on display',
    'several unfinished shoes strewn across a table in the back of the shop',
    'a large selection of boot soles sitting on small shelves behind the counter',
    "there are so many shoes in the shop that it's hard to move, there are even shoes hanging from the ceilings",
    'a great many different shoe patterns tacked to one wall',
    'a large book filled with sketches of shoes with the label "Custom Shoes; Made to Order" on the front',
    'several finely made paintings of shoes hanging on different walls',
    'a shoe made entirely of gold sitting on a plinth in the middle of the store',
    'several large boots hanging from racks on the ceiling',
    'an assortment of well made cobbler tools hung up in the back of the store',
    'several strange looking machines in the back of the store used for making and stretching shoes',
    'a large vat of dye behind the counter',
    'a cozy looking fireplace on the far side of the shop',
    'a collection of different threads arranged neatly in small cubbies in the wall'
  ],
  specialty: [
    // the cobblers is known for _______
    'making thick hide boots',
    'the interesting colors they dye their shoes',
    'giving good prices on repairs for adventurers',
    'giving decent repair prices',
    'giving discounts on new pairs of shoes if you trade in your current pair',
    'their incredible craftsmanship',
    'the shoddy craftsmanship their cobbler produces',
    'the unique style of their dress shoes',
    'giving free foot measurements every first Tuesday of the month',
    'sourcing only the finest leather for their shoes',
    'using magical tiny creatures to repair shoes',
    'often working with artisans to create high art shoes',
    'being frequented by nobles of the area',
    'making shoes that they gaurantee will last a lifetime',
    'working with a local warlock to enchant every pair of shoes they produce',
    'charging ridiculously high prices',
    'repairing any shoe or boot in only a single day',
    'the handcrafted heels on their boots',
    'mostly making shoes for women',
    'mostly doing repairs on shoes',
    'the assortment of homemade shoe polishes they produce',
    'giving excellent tips on keeping your shoes healthy',
    'the charity work they do around town giving shoes to the shoeless',
    'having once made a pair of shoes for a local ruler'
  ]
}
