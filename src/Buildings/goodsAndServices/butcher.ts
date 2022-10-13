import { GoodsAndService } from '../goodsAndServices'
import { Building } from 'lib/buildings/_common'
import { Town } from 'lib/town/_common'
import { createNamesake, random } from '@lib'
import { BuildingOpts } from 'lib/buildings/BuildingToCreate'
import { assertBuildingExists } from '../assertBuildingExists'

interface ButcherData extends GoodsAndService {
  name: GoodsAndService['name'] & {
    adjectivePerson: string[]
  }
}

export const butcher: ButcherData = {
  create (town: Town, building: Building, opts?: BuildingOpts) {
    assertBuildingExists(building)

    const typeData = butcher

    building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts?.npc })
    lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
    building.name ||= opts?.building?.name || typeData.name.function(town, building)

    building.notableFeature ??= lib.random(typeData.notableFeature)
    building.specialty ??= lib.random(typeData.specialty)
    building.localImage = 'butcher-illustration'
    building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}.`
    return building
  },
  name: {
    function (town: Town, building: Building) {
      const nameRoot = butcher.name
      const noun = lib.random(nameRoot.noun)
      const wordNoun = lib.random(nameRoot.wordNoun)
      const adjective = lib.random(nameRoot.adjective)
      const townName = town.name
      const roadName = town.roads[building.road].name
      const unique = lib.random(nameRoot.unique) || `The ${townName} ${wordNoun}`
      const namesake = building?.associatedNPC || createNamesake(town)
      return lib.toTitleCase(random([
        `The ${adjective} ${noun}`,
        `The ${townName} ${wordNoun}`,
        `The ${roadName} ${wordNoun}`,
        `${namesake.firstName}'s ${wordNoun}`,
        `${random(nameRoot.adjectivePerson)} ${namesake.firstName}'s ${wordNoun}`,
        unique
      ]))
    },
    unique: [
      'A Cut Above',
      "Packin' Meat",
      'Fresh Meat',
      'Nice to Meat You',
      'High Steaks',
      'Meat n Greet',
      "Carne Val's",
      'Choice Cuts',
      'From Meat to You',
      'The Chop Shop',
      'Meating Place',
      'Slabbed',
      'Meat Street',
      'The Prime Cut',
      'Top Chop',
      'A Cut Above the Rest',
      'The Meat Grinder',
      'Fantastic Flesh',
      'The Strip Club',
      'No Misteak'
    ],
    noun: [
      'strip',
      'chop',
      'cut',
      'rib',
      'roast',
      'steak',
      'pork',
      'veal',
      'slab',
      'cleaver',
      'cutting board',
      'ham',
      'turkey',
      'boar',
      'cow',
      'pig',
      'brisket',
      'tenderloin',
      'flank'
    ],
    adjective: [
      'fatty',
      'juicy',
      'tasty',
      'thick',
      'thin',
      'angry',
      'choice',
      'bloody',
      'wild',
      'prime',
      'marbled',
      'raw'
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
      'slim'
    ],
    wordNoun: [
      'butchers',
      'butcher shop',
      'meat shop',
      'meat market'
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
    name: 'butcher',
    opts: {
      profession: 'butcher',
      hasClass: false,
      idle: [
        // There is a butcher currently _______
        'thinly slicing some meats',
        'hanging a large slab of meat from a hook',
        'sharpening a fine looking cleaver',
        'mopping up some red juices on the floor',
        'stuffing some sausages',
        'sawing off a thick cut of meat',
        'tying up a roast',
        'wrapping up some meat for another customer',
        'salting a large spread of different meats',
        'showing a customer some of the different roast options',
        'reading a book on exotic animal meat',
        'hanging a few dead chickens upside down from the rafters',
        'starting to doze off in a corner of the shop',
        'weighing out some meat for another customer',
        'seasoning a fine looking roast',
        'sliding a tray full of cuts of meat into a large clay smoker',
        're-arranging some different cuts of meat on a shelf',
        'wiping down an old looking cutting board',
        'coming out from a large freezer in the back of the building',
        'grinding up some meat in a large meat grinder'
      ]
    }
  },
  goods: [
    {
      summary: 'chicken',
      cost: 30,
      description: 'A full chicken, defeatheread and ready to cook.'
    },
    {
      summary: 'sausage',
      cost: 20,
      description: "A large sausage; it is unclear what it's stuffed with."
    },
    {
      summary: 'prime roast',
      cost: 40,
      description: 'A juicy looking roast tied with a butcher knot.'
    },
    {
      summary: 'sliced ham',
      cost: 30,
      description: 'Thin cut slices of ham perfect for a meal.'
    },
    {
      summary: 'smoked bacon',
      cost: 20,
      description: 'Bacon that has been smoked, which lasts longer.'
    },
    {
      summary: 'bacon',
      cost: 14,
      description: 'A pound of bacon.'
    },
    {
      summary: 'beef',
      cost: 5,
      description: 'A pound of uncured, raw beef.'
    },
    {
      summary: 'beef, corned',
      cost: 12,
      description: 'Salt-cured brisket of beef.'
    },
    {
      summary: 'beef, sausage',
      cost: 5,
      description: 'Offal that has been put in entrail casings.'
    },
    {
      summary: 'beef, sausage, dried',
      cost: 13,
      description: 'Offal that has been put in entrail casings, dried to last longer.'
    },
    {
      summary: 'beef, smoked',
      cost: 22,
      description: 'A pound of cured beef that has been smoked to last longer.'
    },
    {
      summary: 'fish',
      cost: 2,
      description: 'A pound of uncured, raw fish.'
    },
    {
      summary: 'fish, salted',
      cost: 8,
      description: 'A pound of fish that has been salted to last longer.'
    },
    {
      summary: 'ham, sugar cured, 12 pounds',
      cost: 125,
      description: 'A sugar-cured haunch of ham. Only available in bulk due to the expense of sugar.'
    },
    {
      summary: 'lamb',
      cost: 4,
      description: 'A pound of uncured, raw lamb.'
    },
    {
      summary: 'pork',
      cost: 2,
      description: 'A pound of uncured, raw pork.'
    },
    {
      summary: 'pork, sausage',
      cost: 2,
      description: 'Offal that has been put in entrail casings.'
    },
    {
      summary: 'pork, sausage, dried',
      cost: 5,
      description: 'Offal that has been put in entrail casings, dried to last longer.'
    },
    {
      summary: 'pork, smoked',
      cost: 17,
      description: 'A pound of cured pork that has been smoked to last longer.'
    },
    {
      summary: 'pork, chops',
      cost: 4,
      description: 'A pound of pork chops.'
    },
    {
      summary: 'pork, salted',
      cost: 12,
      description: 'A pound of cured pork that has been salted heavily to last longer.'
    },
    {
      summary: 'salt, pound',
      cost: 5,
      description: 'A pound of salt.'
    },
    {
      summary: 'venison',
      cost: 3,
      description: 'A pound of uncured, raw venison.'
    },
    {
      summary: 'venison, sausage',
      cost: 3,
      description: 'Offal that has been put in entrail casings.'
    },
    {
      summary: 'venison, sausage, dried',
      cost: 5,
      description: 'Offal that has been put in entrail casings, dried to last longer.'
    },
    {
      summary: 'venison, smoked',
      cost: 6,
      description: 'A pound of cured venison that has been smoked to last longer.'
    }
  ],
  type: 'butchers',
  notableFeature: [
    // you notice _______
    'several large hunks of meat hanging from hooks in the ceiling',
    'a large glass case full of different roasts',
    'a large oaken butcher table with a cleaver stuck into it',
    'a big set of brass weighing scales behind the counter',
    'several sacks of salt stacked up near the entrance',
    'an assortment of sausage links hanging from the ceiling',
    'a rather large puddle of blood near the counter',
    'a big crate full of chicken feathers behind the counter',
    'strange sculptures made of animal bones on the walls',
    'a small rack on the counter is selling necklaces made of animal teeth',
    'the shop is full of live chickens',
    'the store is nearly spotless despite working with bloody meat all day',
    'several buckets of blood sitting on tables behind the counter',
    'a large, eyeless pig head sitting on the counter',
    'a sign in the window that reads "Huge sale on ham hocks, today only!"',
    'an open barrel filled with pigs feet against one wall; a sign sticking out has "Sale!" painted on it in bright red letters',
    'several jars full of eyes floating in a murky liquid on a shelf behind the counter',
    'several jars sitting on the counter labeled "pickled pig tongue"',
    'a huge silver meat grinder mounted to a table in the back of the shop',
    'a large collection of knives hanging above a table behind the counter',
    'several rabbits and ducks strung up from the ceiling',
    'a large shelf with different jars full of spice rubs',
    "a bargain bin full of old chicken's feet",
    'A large sign by the counter that reads "Beef tongue half off!"'
  ],
  specialty: [
    // the butchers is known for _______
    'their prime cuts of meat',
    'the high quality sausages they make',
    'the interesting ways they tie their roasts',
    'the questionable quality of their meat',
    'always having some unlabeled cheap cuts of meat',
    'acquiring their meats in an unknown and mysterious manner',
    'oversalting all their meats to mask the age',
    'having highly exotic meat varieties',
    'their deliciously smoked meats',
    'carrying a wide variety of meats',
    'killing the animals right out back to keep the meat fresh',
    'the questionable treatment of their livestock',
    'always trying to underweigh customer orders',
    'using the leftover animal bones to make jewellery',
    'selling a variety of pickled tongues',
    'keeping their meats in a locker that has been enchanted with a permanent cold spell',
    'running excellent sales throughout the week',
    'buying meat that is going bad and reselling it',
    'being extraordinarily overpriced for the meats they have',
    'offering excellent wine pairing suggestions with any meat you buy',
    'giving discounts to adventurers that frequently buy rations here',
    'raising their own livestock for slaughter',
    'trying to pass of strange vegetable creations as real meat'
  ]
}
