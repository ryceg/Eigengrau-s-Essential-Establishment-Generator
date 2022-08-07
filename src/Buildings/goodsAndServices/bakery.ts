import { GoodsAndService } from '../goodsAndServices'
import { Building } from 'lib/buildings/_common'
import { Town } from 'lib/town/_common'
import { createNamesake, random } from '@lib'
import { BuildingOpts } from 'lib/buildings/BuildingToCreate'
import { assertBuildingExists } from '../assertBuildingExists'

interface BakeryData extends GoodsAndService {
  name: GoodsAndService['name'] & {
    nounBakedGood: string[]
    beast: string[]
    foodAdjective: string[]
  }
}

interface Bakery extends Building {
  fruit: string
  fruits: string
}

export const bakery: BakeryData = {
  // the bakery can be used as an example of how to add more features to a building.
  create (town: Town, building: Bakery, opts?: BuildingOpts): Bakery {
    assertBuildingExists(building)
    const typeData = bakery
    building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts?.npc })
    lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
    building.name ||= building.name || opts?.building?.name || bakery.name.function(town, building)
    building.notableFeature ??= lib.random(bakery.notableFeature)
    building.specialty ??= lib.random(bakery.specialty)
    building.fruit ??= lib.random(lib.flora.fruit.fruitS)
    building.fruits ??= lib.random(lib.flora.fruit.fruitP)
    building.localImage = 'bakery-illustration'
    building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}`
    return building
  },
  name: {
    function (town: Town, building: Building) {
      const nameRoot = bakery.name
      const noun = lib.random(nameRoot.noun)
      const wordNoun = lib.random(nameRoot.wordNoun)
      const adjective = lib.random(nameRoot.adjective)
      const townName = town.name
      const roadName = town.roads[building.road].name
      const unique = lib.random(nameRoot.unique) || `The ${townName} ${wordNoun}`
      const namesake = building?.associatedNPC || createNamesake(town)
      const foodAdjective = random(nameRoot.foodAdjective)
      return lib.toTitleCase(random([
        `The ${adjective} ${random([noun, wordNoun])}`,
        `The ${foodAdjective} ${noun}`,
        `The ${townName} ${wordNoun}`,
        `The ${roadName} ${wordNoun}`,
        `${namesake.firstName}'s ${wordNoun}`,
        `The ${random(nameRoot.beast)}'s ${noun}`,
        `${adjective} ${random([`${namesake.firstName}'s `, nameRoot.beast])} ${wordNoun}`,
        `The ${random(lib.flora.fruit.fruitS)} ${random(nameRoot.nounBakedGood)}`,
        `The ${random(lib.flora.fruit.tree)} Tree ${wordNoun}`,
        unique
      ]))
    },
    unique: [
      'The Really Good Bakery',
      'Warm Angry Rabbits',
      'The Cooling Rack',
      'Doughy Delights',
      'Happy Flour',
      'Slice of Life',
      'Knead to Bake',
      'Hot Crossed Buns',
      'Mad Batter',
      'Pie in the Sky',
      'Pastry Emporium',
      'Dream Puffs',
      'The Rolling Pin',
      'The Bread Basket',
      "The Baker's Table",
      'The Bread Box',
      'Bake Away',
      'Queen of Tarts',
      'Cake Walk',
      'The Dough Knot',
      'The Muffin Man',
      'Cherry on Top',
      'Crumbs',
      'Muffin Top',
      'Grateful Bread',
      'The Bakesmith',
      'We Knead Bread',
      'Pretty Baked',
      'Flour Power',
      'King Cake'
    ],
    noun: [
      'pie',
      'rolling pin',
      'tray',
      'spoon',
      'bowl',
      'bread',
      'loaf',
      'crust',
      'pan',
      'crumb',
      'pastry',
      'bagel',
      'biscuit',
      'muffin',
      'bun',
      'pretzel',
      'scone',
      'dough',
      'cake',
      'oven',
      'slice',
      'bakery',
      'tart',
      'roll',
      'breadstick',
      'wafer',
      'snack',
      'flour'
    ],
    nounBakedGood: [
      'pie',
      'pastry',
      'tart',
      'muffin',
      'cake',
      'doughnut'
    ],
    beast: [
      'dragon',
      'pig',
      'wolf',
      'cow',
      'goat',
      'dog',
      'cat',
      'horse',
      'sparrow',
      'bluejay',
      'lion',
      'chicken',
      'hen',
      'rooster',
      'bull',
      'yak',
      'hare',
      'rabbit',
      'deer'
    ],
    adjective: [
      'cheery',
      'happy',
      'hopeful',
      'morning',
      'waking',
      'magical',
      'sassy',
      'tasty',
      'friendly',
      'sleepy',
      'drowsy',
      'peaceful',
      'sad',
      'loud',
      'angry',
      'dopey',
      'elven',
      'dwarven',
      'fat',
      'stoic'
    ],
    foodAdjective: [
      'delicious',
      'delectable',
      'stale',
      'hot',
      'fresh',
      'crumbly',
      'tasty',
      'sweet',
      'sour',
      'doughy'
    ],
    wordNoun: [
      'bakery',
      'pastry shop',
      'pastry kitchen',
      'bakeshop',
      'biscuit factory',
      'boulangerie',
      'bakehouse'
    ],
    adjectivePerson: []
  },
  PassageFormat: () => [
    // each array string will be a new line.
    // this will be evaluated by SugarCube; use *SugarCube syntax* for functions.
    `You ${['enter', 'walk into', 'open the door to', 'come inside', 'step through the door of', 'come off the street into'].random()} ${[
      '$building.name, $building.structure.descriptor.',
      '$building.structure.descriptor called $building.name.'
    ].random()} You notice $building.notableFeature`,
    '',
    'This $building.wordNoun is known for $building.specialty There is a <<profile $building.associatedNPC $building.associatedNPC.descriptor>> currently <<print $building.associatedNPC.idle.random()>>. <<print $building.associatedNPC.heshe.toUpperFirst()>> welcomes you, and asks what you are after.',
    '<<button "Generate a pastry">><<set _pastry to lib.pastry.create()>><<replace "#pastry">><<print lib.pastry.readout(_pastry)>><</replace>><</button>>',
    '<div id="pastry"></div>',
    '<<goods $building setup.goodsAndServices[$building.type].goods>>'
  ],
  profession: {
    name: 'baker',
    opts: {
      profession: 'baker',
      hasClass: false,
      idle: [
        // name is currently _______
        'kneading some dough',
        'serving a customer',
        'boiling a pot of water',
        'cracking eggs into a small pot',
        'powdering a tray of pastries',
        'measuring out flour',
        'buttering a pan',
        'slicing up a loaf of bread',
        'slicing up <<print lib.articles.output($building.fruit)>>',
        'forming some dough into a loaf pan',
        'whisking together a bowl of batter',
        'blending together a bowl of ingredients',
        'flouring a baking pan',
        'greasing a muffin tin',
        'glazing some $building.fruit pastries',
        'boxing up some baked goods for sale',
        'sliding something into the oven',
        'pulling something out of the oven',
        'sprinkling some seeds on a loaf',
        'sifting some flour',
        'starting to knod off behind the counter',
        'struggling with a large sack of flour',
        'icing a small cake',
        'lighting the coals of a clay oven',
        'prepping some $building.fruits for baking',
        'putting some $building.fruits into barrels',
        'mixing some spices together',
        'partitioning out balls of dough'
      ]
    }
  },
  goods: [
    {
      summary: 'loaf of rye bread',
      // cost: in copper pieces. The <<money>> macro handles currency conversion.
      cost: 15,
      // description: used in tooltip.
      description: 'A loaf of rye bread.',
      // exclusions for testing whether it is available. Can be ommitted if it is always available. Return truthiness.
      exclusions (town: Town, building: Building) {
        return building.roll.wealth > 40
      }
    },
    {
      summary: 'unleavened bread',
      cost: 4,
      description: 'A dense and difficult to digest loaf. Typically used as a plate for meats, with the juices soaking into the bread to make it more palatable.'
    },
    {
      summary: 'loaf of barley bread',
      cost: 18,
      description: 'A loaf of barley bread.',
      exclusions (town: Town, building: Building) {
        return building.roll.wealth > 40
      }
    },
    {
      summary: 'loaf of dwarven bread',
      cost: 15,
      description: "A loaf of dwarven bread. It's hard as rock.",
      exclusions (town: Town, building: Building) {
        return town.population < 1500 && building.roll.wealth > 25
      }
    },
    {
      summary: 'elven biscuits',
      cost: 15,
      description: 'Small, round, golden looking pucks of some kind of baked grains. It feels invigorating to eat, and keeps you full all day.',
      exclusions (town: Town, building: Building) {
        return town.population > 2000 && building.roll.wealth > 50
      }
    },
    {
      summary: 'stale bread',
      cost: 4,
      description: 'A stale loaf. Not very appetizing.'
    },
    {
      summary: 'biscuit loaf',
      cost: 14,
      description: 'A loaf sliced and then baked a second time, biscuits last for a long time.'
    },
    {
      summary: 'sweet tart',
      cost: 15,
      description: 'A tasty looking fruit tart.',
      exclusions (town: Town, building: Building) {
        return building.roll.wealth > 70
      }
    },
    {
      summary: 'gold loaf',
      cost: 1300,
      description: 'A loaf with gold leaf on top. Debug.',
      exclusions (town: Town, building: Building) {
        return building.roll.wealth > 99
      }
    }
  ],
  type: 'bakery',
  notableFeature: [
    // you notice _______
    'the smell of freshly baked bread fills the air.',
    'a rat that scurries away as you enter!',
    'there are no other people inside the bakery.',
    'the bakery is rather bustling.',
    'the bakery has a few people milling about.',
    'the smell of moldy old bread fills the air.',
    'a trophy with "Best Baked Bread awarded to $building.name" etched into it sitting on a shelf near the entry.',
    'the smell of sweet pastries wafts through that air.',
    'several large sacks of flour stacked up near the shop counter.',
    'a large sign near the front of the shop with "Bread of the Day: Pumpernickel" scrawled across it.',
    'a few pies sitting in an open window sill to cool.',
    'a large golden bell is sitting on the shop counter.',
    'there are several oil paintings of bread loafs hanging on the walls.',
    'a small platter with little cubes of bread on it. A folded paper in the middle of the platter reads "Free Samples".',
    'a baker tossing dough high into the air off behind the counter.',
    'a particularly huge clay oven in the middle of the bakery.',
    'there are several small tables inside the bakery for pastries to be enjoyed.',
    'a round, somehow rotating, shelf in the middle of the shop full of baked goods.',
    'a small black cat darts behind the counter as you enter.',
    'a strange shrill sound coming from the near the shop oven as you enter, but it quickly dies down. The smell of burnt hair slowly fills the room.',
    'huge clouds of flour rising up from behind the shop counter.',
    'the distinct smell of vanilla.',
    'an enormous spoon hanging from one of the walls',
    'the shop counter is made of rough hewn oak wood.',
    'a rack of discount breads near the front door.',
    'a large and intricate cake display near the front window.',
    'a make your own tart station in one corner of the shop.',
    'a bread slicing station for the commoners without bread knives set up in a corner of the shop.',
    'a large embroidery bread loaf hanging on a wall.',
    'several caged hens in the back of the shop that lay fresh eggs for the bakers.',
    'a large moose head hanging above the entryway.',
    'a small hearth with a roaring fire in one corner.',
    'quite a few racks of decorative plates covered in different <<print ["animals", "flowers", "fruits", "baked goods", "kinds of bread", "birds", "cats"].random()>> hanging on the walls.',
    'a few barrels of $building.fruits sitting near the shop counter.',
    'a deer head mounted above the counter.',
    'a beaver head framed above a mantel.',
    'a large millstone behind the shop counter.',
    'a medium sized brown dog comes to greet you as you enter.'
  ],
  specialty: [
    // the bakery is known for _______
    'discounted breads at the end of the week.',
    'the delicious pies that they bake daily.',
    'the sweet pastries that they sell.',
    'the $building.fruit tarts they sell.',
    'the $building.fruit pies they sell.',
    'their pillowy soft hot buns.',
    'the thick and crumbly biscuits they bake.',
    'always having stale bread mixed in with the fresh.',
    'having an open kitchen so you can see the bakers at work.',
    'putting enchantments on the baked goods that make them even tastier.',
    'their lumpy and unevenly baked bread.',
    'being a social establishment as well as a bakery.',
    'being more of a cafe than just a bakery.',
    'putting on interesting displays with dough while patrons wait for their bread.',
    'constantly trying out new novelty items to draw in more customers.',
    'putting delicious spices in their bread dough.',
    'giving fair prices for decent baked goods.',
    'making incredibly intricate and pointlessly complex cakes.',
    "baking cakes and breadloafs in the shape of famous noble's and heroe's faces.",
    'the incredibly fresh fruit they use in their baked goods.',
    'milling their own flour.',
    'catering special occasions.',
    'being the bakery that catered the most recent royal wedding.',
    'baking rolls in the shapes of various small animals.',
    'having once been owned by a famous hero.',
    'adding a lot of sugar to their bread.',
    'baking quite hard bread loaves.',
    'baking their bread using magics.',
    'using an otherwise long lost technique to bake their breads.',
    'utilizing an ancient family bread recipe passed down for generations.'
  ]
}
