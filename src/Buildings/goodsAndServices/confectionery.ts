import { createNamesake } from '@lib'
import { BuildingOpts } from 'lib/buildings/BuildingToCreate'
import { Building } from 'lib/buildings/_common'
import { Town } from 'lib/town/_common'
import { assertBuildingExists } from '../assertBuildingExists'
import { GoodsAndService } from '../goodsAndServices'

interface ConfectioneryData extends GoodsAndService {
  name: GoodsAndService['name'] & {
    foodAdjective: string[]
  }
}

export const confectionery: ConfectioneryData = {
  // the bakery can be used as an example of how to add more features to a building.
  create (town: Town, building: Building, opts?: BuildingOpts) {
    assertBuildingExists(building)
    const typeData = confectionery
    building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts?.npc })
    lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
    building.name ||= opts?.building?.name || typeData.name.function(town, building)
    building.notableFeature = lib.random(typeData.notableFeature)
    building.specialty ??= lib.random(typeData.specialty)
    building.localImage = 'confectionery-illustration'
    building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}`
    return building
  },
  name: {
    function (town: Town, building: Building) {
      const nameRoot = confectionery.name
      const noun = lib.random(nameRoot.noun)
      const wordNoun = lib.random(nameRoot.wordNoun)
      const adjective = lib.random(nameRoot.adjective)
      const townName = town.name
      const roadName = town.roads[building.road].name
      const namesake = building?.associatedNPC || createNamesake(town)
      const unique = lib.random(nameRoot.unique) || `The ${townName} ${wordNoun}`
      const foodAdjective = lib.random(nameRoot.foodAdjective)
      return lib.toTitleCase(lib.random(
        [
        `The ${adjective} ${lib.random([noun, wordNoun])}`,
        `The ${foodAdjective} ${noun}`,
        `The ${townName} ${wordNoun}`,
        `The ${roadName} ${wordNoun}`,
        `${namesake.firstName}'s ${wordNoun}`,
        unique
        ])
      )
    },
    unique: [
      'The Candy Crate',
      'Sugarly',
      'Chocolate Covered Wagon',
      'Colorful Candy and More',
      'Long Grove Confectionery',
      'River Street Sweets',
      'The Sweet Shoppe',
      'Zapplz',
      'The Truffle Cottage',
      'The Candied Anchor',
      'The Candy Crafter',
      'The Chocolate Tree',
      'Candy For All Occasions',
      'Sweet Dreams Candy Co.',
      'Sweets N Things',
      'Chocolates Plus',
      'Rocky Mount Confectionery',
      'Candy Blast',
      'Summit Sweets Inc',
      'C&Cs Retail',
      'Treat Center On Courthouse Sq',
      'Black River Candy Shoppe',
      'Candyland',
      'Cupid Candies',
      'Caramelcrisp Corp',
      'Chocolate Studio',
      'Sweet Tooth Confectionery',
      'Farmstead Treats',
      'Taste Of Heaven',
      'Marketplace Candies'
    ],
    noun: [
      'chocolate',
      'candy',
      'nougat',
      'marzipan',
      'lollipop',
      'candy bar',
      'gum',
      'sweetmeat',
      'caramel',
      'maraschino',
      'liquorice',
      'peppermint',
      'panela',
      'brownie',
      'toffee',
      'gumdrop',
      'marshmellow',
      'butterscotch',
      'rum-raisin',
      'candy corn',
      'candy cane',
      'gummi',
      'Elvish delight',
      'custard',
      'candy apple',
      'brittle',
      'custard',
      'snack'
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
      'rich',
      'fresh',
      'crumbly',
      'tasty',
      'sweet',
      'sour'
    ],
    wordNoun: [
      'confectionery',
      'candy shop',
      'candy store',
      'snackshop',
      'sugar house'
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
    '<<button "Generate Candy">><<set _candy to lib.candy.create()>><<replace "#candy">><<print lib.candy.readout(_candy)>><</replace>><</button>>',
    '<div id="candy"></div>',
    '<<goods $building setup.goodsAndServices[$building.type].goods>>'
  ],
  profession: {
    name: 'chocolatier',
    opts: {
      profession: 'chocolatier',
      hasClass: false,
      idle: [
        // name is currently _______
        'preparing candies',
        'serving a customer',
        'adding colouring',
        'cracking eggs into a small pot',
        'tasting product',
        'buttering a pan',
        'slicing up nougat',
        'forming some dough into a loaf pan',
        'blending together a bowl of ingredients',
        'flouring a baking pan',
        'greasing a brownie tin',
        'boxing up some candy for sale',
        'sliding something into the oven',
        'pulling something out of the oven',
        'adding seeds to nougat',
        'sifting some flour',
        'starting to knod off behind the counter',
        'gathering chocolate from the back',
        'icing a small cake',
        'lighting the coals of a clay oven',
        'prepping some ingredients for baking',
        'mixing some spices together',
        'partitioning out slices of chocolate'
      ]
    }
  },
  goods: [
    {
      summary: 'Piece of Candy',
      // cost: in copper pieces. The <<money>> macro handles currency conversion.
      cost: 3,
      // description: used in tooltip.
      description: 'A indescript piece of candy.'
    },
    {
      summary: 'Chocolate bar',
      cost: 5,
      description: 'A smaller chooclate bar with no frills.'
    },
    {
      summary: 'Piece of Nougat',
      cost: 12,
      description: 'A nice, chewy piece of nougat.',
      exclusions (town: Town, building: Building) {
        return building.roll.wealth > 40
      }
    },
    {
      summary: 'Stick of Gum',
      cost: 5,
      description: 'A piece of chewing gum.'
    },
    {
      summary: 'Elvish delight',
      cost: 15,
      description: 'Small cubes of chocolate covered with icing sugar, and filled with jelly. It is very sweet and delicious.',
      exclusions (town: Town, building: Building) {
        return town.population > 2000 && building.roll.wealth > 50
      }
    },
    {
      summary: 'Older Candy',
      cost: 2,
      description: 'A slightly older piece of leftover candy. Not very appetizing.',
      exclusions (town: Town, building: Building) {
        return building.roll.wealth < 20
      }
    },
    {
      summary: 'Brownie',
      cost: 15,
      description: 'A tasty brownie square. It is slightly filling'
    },
    {
      summary: 'Candied Apple',
      cost: 11,
      description: 'An apple that has been dipped in chocolate and left to harden. It is rich and delicious.',
      exclusions (town: Town, building: Building) {
        return building.roll.wealth > 60
      }
    },
    {
      summary: 'Box of Candies',
      cost: 125,
      description: 'A larger box of random candies. Meant for larger groups/sharing.'
    },
    {
      summary: 'Tray of Brownies',
      cost: 80,
      description: 'A collection of smaller brownies in one package. Much more filling.'
    },
    {
      summary: 'Piece of Brittle',
      cost: 12,
      description: 'A piece of candy made of carmalized sugar and nuts. Very tasty and light.',
      exclusions (town: Town, building: Building) {
        return building.roll.wealth > 40
      }
    },
    {
      summary: 'Bag of Gummies',
      cost: 15,
      description: 'A bag of assorted gummies. Nice and Tasty.',
      exclusions (town: Town, building: Building) {
        return building.roll.wealth > 40
      }
    }
  ],
  type: 'confectionery',
  notableFeature: [
    // you notice _______
    'the smell of freshly baked sweets fills the air.',
    'a rat that scurries away as you enter!',
    'there are no other people inside the candy shop.',
    'the candy shop is rather bustling.',
    'the candy shop has a few people milling about.',
    'a trophy with "Best Chocolate awarded to $building.name" etched into it sitting on a shelf near the entry.',
    'the smell of sweet candies wafts through that air.',
    'several large bags of sugar stacked up near the shop counter.',
    'a large sign near the front of the shop with "Candy of the Day: Candy-Cane!" scrawled across it.',
    'a large golden bell is sitting on the shop counter.',
    'there are several oil paintings of chocolate hanging on the walls.',
    'a small platter with little cubes of Elvish delight on it. A folded paper in the middle of the platter reads "Free Samples".',
    'a chocolatier mixing sugar off behind the counter.',
    'a particularly huge clay oven in the middle of the bakery.',
    'there are several small tables inside the bakery for chocolate to be enjoyed.',
    'a round, somehow rotating, shelf in the middle of the shop full of candies.',
    'a small black cat darts behind the counter as you enter.',
    'a strange shrill sound coming from the near the shop oven as you enter, but it quickly dies down. The smell of burnt hair slowly fills the room.',
    'huge clouds of flour rising up from behind the shop counter.',
    'the distinct smell of vanilla.',
    'an enormous spoon hanging from one of the walls',
    'the shop counter is made of rough hewn oak wood.',
    'a rack of discount candies near the front door.',
    'a tray of brittle is left in the corner of the shop to cool.',
    'a large embroidery hanging on a wall.',
    'several caged hens in the back of the shop that lay fresh eggs for the chocolatiers.',
    'a large moose head hanging above the entryway.',
    'a small hearth with a roaring fire in one corner.',
    'quite a few racks of decorative plates covered in different <<print ["animals", "flowers", "fruits", "chcolates", "nuts", "birds", "cats"].random()>> hanging on the walls.',
    'a deer head mounted above the counter.',
    'a beaver head framed above a mantel.',
    'a large millstone behind the shop counter.',
    'a medium sized brown dog comes to greet you as you enter.'
  ],
  specialty: [
    // the bakery is known for _______
    'discounted candies at the end of the week.',
    'the delicious brownies that they bake daily.',
    'the sweet brittle that they sell.',
    'their assorted candy apple types and flavours',
    'the thick nougat they bake.',
    'always having older candies mixed in with the new.',
    'having an open kitchen so you can see the chocolatiers at work.',
    'putting enchantments on the candies that make them even tastier.',
    'their bland chocolates',
    'being a social establishment as well as a confectionery.',
    'putting on interesting displays with Elvish Delight while patrons wait for their candies.',
    'constantly trying out new novelty items to draw in more customers.',
    'putting delicious spices in their candies/chocolate.',
    'giving fair prices for decent candies.',
    'making incredibly intricate and pointlessly complex chocolates.',
    "baking brownies in the shape of famous noble's and heroe's faces.",
    'the incredibly fresh ingredients they use in their baked goods.',
    'milling their own flour.',
    'catering special occasions.',
    'being the confectionery that catered the most recent royal wedding.',
    'baking brownies in the shapes of various small animals.',
    'having once been owned by a famous hero.',
    'adding a lot of sugar to their chocolate.',
    'baking quite hard candies.',
    'make their brittle using magics.',
    'using an otherwise long lost technique to bake their chocolate.',
    'utilizing an ancient family Elvish delight recipe passed down for generations.'

  ]
}
