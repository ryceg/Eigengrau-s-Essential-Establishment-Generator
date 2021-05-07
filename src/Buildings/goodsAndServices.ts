import { Building, BuildingTypes, Town } from '@lib'

// interface GoodsAndServices {
//   // default: {
//   //   create(
//   //     type: keyof GoodsAndServices
//   //   ): (town: Town, opts?: unknown) => unknown
//   // }
//   bakery: GoodsAndService & {
//     name: {
//       nounBakedGood: string[]
//       beast: string[]
//       foodAdjective: string[]
//     }
//   }
//   florist: GoodsAndService
//   tailor: GoodsAndService
//   butcher: GoodsAndService
//   cobbler: GoodsAndService
//   fletcher: GoodsAndService
//   barber: GoodsAndService
//   jeweller: GoodsAndService & {
//     gems: {
//       create(): unknown
//       data: {
//         cut: Record<string, GemCut>
//         size: Record<string, GemSize>
//         type: Record<string, GemType>
//       }
//     }
//   }
// }

// interface Gem {

// }

interface GemCut {
  /** What the jeweller would call the cut. */
  type: string
  /** Expressed as a 1-100 integer; how difficult it is to cut. */
  difficulty: number
  /** A function that adds the value. */
  addValue (initialValue: number): number
}

interface GemSize {
  /** Expressed as mm^3 */
  size: number
  /** Expressed as a 1 in ___
   * @example 1_000_000
   * ("It's one in a million!")
   */
  rarity: number
  /** A function that adds the value. */
  addValue (initialValue: number): number
}

interface GemType {
  /** A human description of how rare the gem is. */
  rarity: string
  exclusions (town: Town): boolean
  /** Expressed in copper pieces for one carat (200 milligrams). */
  value: number
}

interface GoodsAndService {
  create(town: Town, building: Building, opts?: unknown): Building
  name: {
    function(town: Town, building: Building): string
    unique: string[]
    noun: string[]
    adjective: string[]
    wordNoun: string[]
    adjectivePerson?: string[]
  }
  wordNoun: string
  PassageFormat(): string[]
  profession: GoodsAndServicesProfession
  goods: GeneralGood[]
  type: string
  notableFeature: string[]
  specialty: string[]
}

interface GoodsAndServicesProfession {
  name: string
  opts: {
    profession: string
    hasClass: boolean
    idle: string[]
  }
}

// interface BakeryGoodType {
//   synonyms?: string[]
//   qualities: string[]
//   precedingWord: string[]
//   cooking: string[]
// }

interface GeneralGood {
  summary: string
  cost: number
  type?: string
  description: string
  exclusions?(town: Town, building: Building): boolean
}

// export const initGoodsAndServices = () => {
//   return {
export const goodsAndServices = {
  default: {
    // this function is curried to be compatible with the buildingTypes array
    create: (type: BuildingTypes) => (town: Town, opts: unknown = {}) => {
      // this is the template for the creation of generic buildings; i.e. those that are present in this list.
      // It is *not* for taverns, town squares, castles, or anything large scale.
      // this is why it is distinct from the lib.createBuilding() function; everything needs lib.createBuilding, not everything needs goodsAndServices.default.create()
      console.groupCollapsed(`goodsAndServices.default.create()ing ${lib.articles.output(type)}`)
      const building: Building = {
        type,
        buildingType: type,
        objectType: 'building',
        passageName: 'GenericPassage',
        initPassage: 'GenericPassage'
      }
      Object.assign(building, (opts?.newBuilding || lib.createBuilding)(town, building.type, opts))
      building.wordNoun = building.wordNoun || opts.wordNoun || setup.goodsAndServices[building.type].name.wordNoun.random() || 'building'
      building.PassageFormat = building.PassageFormat || opts.PassageFormat || setup.goodsAndServices[building.type].PassageFormat()
      setup.goodsAndServices[type].create(town, building, opts)
      lib.createStructure(town, building)

      console.groupEnd()
      return building
    }
  },
  bakery: {
    // the bakery can be used as an example of how to add more features to a building.
    create (town, building, opts = {}) {
      if (!building) {
        console.error('A building was not passed!')
        return
      }
      const typeData = setup.goodsAndServices[building.type]
      building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts.npc })
      lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
      building.name = building.name || opts.name || setup.goodsAndServices[building.type].name.function(town, building)
      building.notableFeature = setup.goodsAndServices[building.type].notableFeature.random()
      building.specialty = lib.random(setup.goodsAndServices[building.type].specialty)

      building.fruit = lib.flora.fruit.fruitS.random()
      building.fruits = lib.flora.fruit.fruitP.random()

      building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}`
      return building
    },
    name: {
      function (town, building) {
        const name = setup.goodsAndServices[building.type].name
        const unique = name.unique.random() || `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`
        return lib.toTitleCase([
            `The ${name.adjective.random().toUpperFirst()} ${[name.noun.random().toUpperFirst(), name.wordNoun.random().toUpperFirst()].random()}`,
            `The ${name.foodAdjective.random().toUpperFirst()} ${name.noun.random().toUpperFirst()}`,
            `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`,
            `The ${town.roads[building.road].name} ${name.wordNoun.random().toUpperFirst()}`,
            `${building.associatedNPC.firstName}'s ${name.wordNoun.random().toUpperFirst()}`,
            `The ${name.beast.random().toUpperFirst()}'s ${name.noun.random().toUpperFirst()}`,
            `${name.adjective.random().toUpperFirst()} ${[`${building.associatedNPC.firstName}'s `, name.beast.random().toUpperFirst()].random()} ${name.wordNoun.random().toUpperFirst()}`,
            `The ${lib.random(lib.flora.fruit.fruitS).toUpperFirst()} ${name.nounBakedGood.random().toUpperFirst()}`,
            `The ${lib.random(lib.flora.fruit.tree).toUpperFirst()} Tree ${name.wordNoun.random().toUpperFirst()}`,
            unique
        ].random())
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
      ]
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
        exclusions (town, building) {
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
        exclusions (town, building) {
          return building.roll.wealth > 40
        }
      },
      {
        summary: 'loaf of dwarven bread',
        cost: 15,
        description: "A loaf of dwarven bread. It's hard as rock.",
        exclusions (town, building) {
          return town.population < 1500 && building.roll.wealth > 25
        }
      },
      {
        summary: 'elven biscuits',
        cost: 15,
        description: 'Small, round, golden looking pucks of some kind of baked grains. It feels invigorating to eat, and keeps you full all day.',
        exclusions (town, building) {
          return town.population > 2000 && building.roll.wealth > 50
        }
      },
      {
        summary: 'stale bread',
        cost: 2,
        description: 'A stale loaf. Not very appetizing.'
      },
      {
        summary: 'biscuit loaf',
        cost: 12,
        description: 'A loaf sliced and then baked a second time, biscuits last for a long time.'
      },
      {
        summary: 'sweet tart',
        cost: 14,
        description: 'A tasty looking fruit tart.',
        exclusions (town, building) {
          return building.roll.wealth > 70
        }
      },
      {
        summary: 'gold loaf',
        cost: 1300,
        description: 'A loaf with gold leaf on top. Debug.',
        exclusions (town, building) {
          return building.roll.wealth > 99
        }
      }
    ],
    type: 'bakery',
    wordNoun: 'bakery',
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
  } as GoodsAndService & {
      name: {
        nounBakedGood: string[]
        beast: string[]
        foodAdjective: string[]
      }
    },
  florist: {
    create (town, building, opts = {}) {
      if (!building) {
        console.error('A building was not passed!')
        return
      }

      const typeData = setup.goodsAndServices[building.type]

      building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts.npc })
      lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
      building.name = building.name || opts.name || typeData.name.function(town, building)

      building.notableFeature = typeData.notableFeature.random()
      building.specialty = typeData.specialty.random()

      building.flower1 = lib.flora.flower.stemP.random()
      building.flower2 = lib.flora.flower.stemP.random()
      building.flower = lib.flora.flower.stemS.random()

      building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}`
      return building
    },
    name: {
      function (town, building) {
        const name = setup.goodsAndServices[building.type].name
        const unique = name.unique.random() || `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`
        return lib.toTitleCase([
            `The ${name.adjective.random()} ${[name.noun.random(), name.wordNoun.random()].random()}`,
            `The ${town.name} ${name.wordNoun.random()}`,
            `The ${town.roads[building.road].name} ${name.wordNoun.random()}`,
            `${building.associatedNPC.firstName}'s ${name.wordNoun.random()}`,
            `The ${name.adjective.random()} ${lib.flora.flower.stemS.random()}`,
            `The ${lib.flora.flower.stemS.random()}${[' Shop', ' Petal', ' Sprout', ' Greenhouse'].random()}`,
            `${lib.random(lib.flora.flower.stemS)} Petals ${name.wordNoun.random()}`,
            `The ${lib.random(lib.flora.flower.bush)} Bush ${name.wordNoun.random()}`,
            `${name.adjectivePerson.random()} ${building.associatedNPC.firstName}'s ${name.wordNoun.random()}`,
            unique
        ].random())
      },
      unique: [
        'The Daisy Chain',
        'The Grow Room',
        'The Secret Garden',
        'Roses are Red',
        'Sweet Stems',
        'The Watering Can',
        'Smell the Tulips',
        'Honeybee',
        'Happy Petals',
        'The Flower Patch',
        'All in Bloom',
        'The Flower Cart',
        'The Garden Trough',
        'Beautiful Blossoms',
        'The Enchanted Florist',
        'Green Thumb Gardens',
        'Magical Blooms',
        "Mother Earth's",
        'Royal Blooms',
        'Pollen Palace',
        'Bramble and Wild',
        'Scarlet and Violet',
        'Lavender Belle',
        'Petal Pushers',
        'Sherwood Florist',
        'Fleur',
        'Flores',
        'By Any Other Name',
        'Little Shop of Flowers'
      ],
      noun: [
        'bouquet',
        'plant Pot',
        'ivy',
        'watering Can',
        'sprout',
        'petal',
        'seed',
        'flower',
        'pot',
        'fern',
        'bulb',
        'root',
        'blossom',
        'bloom',
        'bramble'
      ],
      adjective: [
        'lovely',
        'long-lasting',
        'magnificent',
        'mesmerizing',
        'petite',
        'playful',
        'ravishing',
        'pretty',
        'precious',
        'playful',
        'prized',
        'radiant',
        'light',
        'sweet',
        'fragrant',
        'merry',
        'lofty',
        'tilted',
        'beautiful'
      ],
      adjectivePerson: [
        'cheery',
        'happy',
        'hopeful',
        'morning',
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
        'fat',
        'stoic',
        'colorful',
        'silly',
        'big',
        'slim',
        'weedy',
        'seedy'
      ],
      wordNoun: [
        'florist',
        'flower shop',
        'florist shop',
        'floral shop',
        'herb shop',
        'botany shop',
        'garden shop',
        'greenhouse'
      ]
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
        '<<goods $building setup.goodsAndServices[$building.type].goods>>'
    ],
    profession: {
      name: 'florist',
      opts: {
        profession: 'florist',
        hasClass: false,
        idle: [
          // name is currently _______
          'watering a large flower pot full of $building.flower1',
          'handling a strange and exotic looking plant',
          'trimming the stems on a few cut $building.flower1',
          'carefully arranging a bouquet of $building.flower1 and $building.flower2',
          'extracting the petals off of an alchemical plant',
          'planting some seeds in a pot',
          'examining the leaves of a slightly wilting $building.flower',
          'plucking seeds out of the center of a large plant',
          'mixing up some soil for planting',
          'wrapping some flowers',
          'tying a cloth ribbon around a lovely bouquet of $building.flower1 and $building.flower2',
          'trying to dye some $building.flower1 a new color',
          'starting to doze off behind the counter',
          'showing a customer some of the different floral options',
          'reading a book on exotic seeds',
          'clipping leaves from a small flowering hedge'
        ]
      }
    },
    goods: [
      {
        summary: 'Small Bouquet',
        // cost: in copper pieces. The <<money>> macro handles currency conversion.
        cost: 4,
        // description: used in tooltip.
        description: 'A small bouquet made up of mostly wildflowers.'
      },
      {
        summary: 'Mid-Size Bouquet',
        // cost: in copper pieces. The <<money>> macro handles currency conversion.
        cost: 8,
        // description: used in tooltip.
        description: 'A medium sized bouquet made up of an assortment of colorful flowers.'
      },
      {
        summary: 'Large Bouquet',
        // cost: in copper pieces. The <<money>> macro handles currency conversion.
        cost: 15,
        // description: used in tooltip.
        description: 'A large bouquet comprised of many colorful and intricately arranged flowers.'
      }
    ],
    type: 'florist',
    notableFeature: [
      // you notice _______
      'the smell of fresh cut flowers hangs in the air.',
      'a strong $building.flower aroma wafting through the room.',
      'several planter pots dangling from ropes on the ceiling. Long fern leaves and vines hang down from the pots above.',
      'a plethora of small pots brimming with $building.flower1 dotted around the shop.',
      'a substantial number of patrons crowding the shop counter.',
      'there is hardly anyone in here.',
      'a large hand painted sign in the window that reads "Finest $building.flower1 in $town.name".',
      'there are several large flowering bushes and plants crammed inside the shop that seem far too big to be growing indoors.',
      'a large set of shelves filled with cut flowers organized by color.',
      'one of the shop walls is completely covered in ivy.',
      'several large sacks of fertilizer stacked up near the shop counter.',
      'several of the shop windows are adorned with hand painted $building.flower2',
      'there are several strings of dried flowers strung from the shop ceiling.',
      'a collection of dried flowers framed above the counter.',
      'quite a few charcoal flower drawings are hanging on the shop walls.',
      'a few different shelves of dried herbs lining the far wall of the shop.',
      'a small collection of jarred dried herbs sitting on the shop counter.',
      'many of the potted plants in the shop are dead or dying.',
      'the shop counter is made of rough hewn oak wood.',
      'a small hearth with a roaring fire in one corner.',
      'quite a few decorative plates covered in different animals sit on racks hanging on the walls.',
      'a caged sparrow sits upon the shop counter.',
      'several holly wreaths are hung upon the shop timbers.',
      'a single potted $building.flower sitting on the shop counter.',
      'several strings of cut flowers are hung up to dry by an open window.',
      'a rusty watering can sitting on a stool in a corner.',
      'a small fairy garden has been set up at one end of the shop and a couple of fairies have taken up residence.',
      'a shelf holding all kinds of jars and bottles with handmade labels like "Giant Slug Repellant" and "Truly Magical Plant Growth".',
      'a table with vases of all shapes and sizes set in the middle of the room.',
      'a few large leafy ferns grouped up near the entrance.',
      'the room is full of $building.flower scented candles.',
      'a large amount of flower clippings have been piled up in one corner of the shop.',
      'several small copper birds are hanging from the ceiling by strings',
      'a flower mural is painted on the far wall',
      'a framed collection of pinned <<print ["dragonflies", "butterflies", "beetles", "grasshoppers", "worms", "bees", "crickets", "bugs", "flies", "moths", "mantids and roaches", "wasps"].random()>> hung up on the wall next to the counter.',
      'there is a small shelf of boxed chocolates near the front counter with a sign above that reads "For the truly scorned lover".'
    ],
    specialty: [
      // the florist is known for _______
      'often carrying strange and exotic plants.',
      'always having very fragrant $building.flower1.',
      'having brilliantly colorful $building.flower1.',
      'the large variety of seeds that they offer.',
      'growing strangely large $building.flower2.',
      'growing strangely large flowers of all varieties.',
      'offering classes throughout the year on proper flower gardening.',
      'their collection of unique herbs.',
      'having a private collection of insect eating plants.',
      'their beautifully arranged bouquets.',
      'being the favorite garden shop of the local nobility.',
      'having a discrete delivery service for any relationship emergency.',
      'enchanting their bouquets to sing a song to their recipients.',
      'selling to a rather seedy clientele.',
      'being a front for the local fight ring bookie. Nobody really buys flowers.',
      'being the florist to provide all of the flowers for the most recent royal wedding.',
      'always seeming to know exactly the kind of flowers you need.',
      'making particularly bad floral arrangements.',
      'their prize winning $building.flower1.',
      'the gaudy and eccentric floral arrangements the associatedNPC creates.',
      'the lavish floral arrangements they make for clientele.',
      'the high class clients they do floral arrangements for.',
      'the rather cheap buoquets they throw together.',
      'enchantings their flowers to glitter in the sunlight.',
      'growing all their own flowers.',
      'doubling as a lawn care service.',
      'keeping a large collection of "royal plants" that are only to be sold to members of the nobility.',
      'having a large variety of magical flowers.',
      'selling what amounts to bundles of weeds.',
      'having had a beautifully decorated cart at least years Summer Festival.',
      'their hand painted flowers.',
      'creating beautiful art out of the petals that fall off their flowers.',
      'being rumored to be an arm to a large secret organization of flower shops that run the world as we know it.',
      'being founded by a retired barbarian hero.',
      'being rumored to be funded by a local thieves guild master who has a soft spot for flowers.',
      'trimming flowers into interesting shapes',
      'using discarded leaves and stems to create tiny animals to go with their bouquets.'
    ]
  } as GoodsAndService,
  tailor: {
    create (town, building, opts = {}) {
      if (!building) {
        console.error('A building was not passed!')
        return
      }

      const typeData = setup.goodsAndServices[building.type]

      building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts.npc })
      lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
      building.name = building.name || opts.name || typeData.name.function(town, building)

      building.notableFeature = typeData.notableFeature.random()
      building.specialty = typeData.specialty.random()

      building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}.`
      return building
    },
    name: {
      function (town, building) {
        const name = setup.goodsAndServices[building.type].name
        const unique = name.unique.random() || `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`
        return lib.toTitleCase([
            `The ${name.adjective.random()} ${[name.noun.random(), name.wordNoun.random()].random()}`,
            `The ${town.name} ${name.wordNoun.random()}`,
            `The ${town.roads[building.road].name} ${name.wordNoun.random()}`,
            `${building.associatedNPC.firstName}'s ${name.wordNoun.random()}`,
            `${name.adjectivePerson.random()} ${building.associatedNPC.firstName}'s ${name.wordNoun.random()}`,
            unique
        ].random())
      },
      unique: [
        'Golden Stitching',
        'Elite Clothes & Tailor',
        'Sew Wave',
        'Scissor Sisters',
        'Thread n Needle',
        'True Cuts',
        'Fineland Crotchet',
        'Skilled Stitches',
        'The Stitchery',
        'A Quality Sewing Co.',
        'Sew New',
        'First Cut',
        'Dream Dresser'
      ],
      noun: [
        'stitches',
        'stitching',
        'needle',
        'thread',
        'cloth',
        'scissors',
        'pincushion',
        'wardrobe',
        'seam',
        'thimble',
        'spool',
        'bobbin',
        'button',
        'hem',
        'quilt',
        'fabric'
      ],
      adjective: [
        'fancy',
        'happy',
        'cheery',
        'bright',
        'magic',
        'fresh',
        'lovely',
        'quick',
        'flashy',
        'plush',
        'prized',
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
        'slim'
      ],
      wordNoun: [
        'tailors',
        'clothing shop',
        'dress shop',
        'haberdashery',
        'boutique',
        'garment store',
        'clothier shop'
      ]
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
        '<<goods $building setup.goodsAndServices[$building.type].goods>>'
    ],
    profession: {
      name: 'tailor',
      opts: {
        profession: 'tailor',
        hasClass: false,
        idle: [
          // There is a tailor currently _______
          'measuring a man for a fitted suit',
          'measuring a woman for a new dress',
          'taking the measurements of a particularly gruff looking half-orc',
          'rummaging through a large drawer of buttons',
          'sewing a patch onto a well-worn looking cloak',
          'carefully threading a needle',
          'cutting some loose threads with a pair of small golden scissors',
          'working on a new piece of clothing',
          'doing some stitch work for a pair of pants',
          'pinning measurements on a body form',
          'checking the sleeve length of a new shirt',
          'arranging needles in a needle pillow near the counter',
          'cleaning loose threads off the counter',
          'fashioning a tunic from some sort of hide',
          'restocking a shelf with new socks',
          'tending to a large trough of dye'
        ]
      }
    },
    goods: [
      {
        summary: 'tailoring',
        cost: 7,
        type: 'service',
        description: 'A service offered to fit clothing, take up shirts, and generally tailor clothing to fit better.'
      },
      {
        summary: 'hole repair',
        cost: 3,
        type: 'service',
        description: 'A service offered to patch up holey or tattered clothing people may have.'
      },
      {
        summary: 'Boots, forest caiman skin',
        description: 'Boots, forest caiman skin',
        cost: 410
      },
      {
        summary: 'Boots, indigo caiman skin',
        description: 'Boots, indigo caiman skin',
        cost: 380
      },
      {
        summary: 'Boots, leather, ankle-high, brown',
        description: 'Boots, leather, ankle-high, brown',
        cost: 100
      },
      {
        summary: 'Boots, leather, thigh-high, brown',
        description: 'Boots, leather, thigh-high, brown',
        cost: 120
      },
      {
        summary: 'Boots, river caiman skin',
        description: 'Boots, river caiman skin',
        cost: 215
      },
      {
        summary: 'Breeches, good linen, fine',
        description: 'Breeches, good linen, fine',
        cost: 150
      },
      {
        summary: 'Breeches, good linen, fine, dyed blue (indigo)',
        description: 'Breeches, good linen, fine, dyed blue (indigo)',
        cost: 163
      },
      {
        summary: 'Breeches, good linen, fine, dyed red (madder)',
        description: 'Breeches, good linen, fine, dyed red (madder)',
        cost: 159
      },
      {
        summary: 'Breeches, good linen, light, fine',
        description: 'Breeches, good linen, light, fine',
        cost: 120
      },
      {
        summary: 'Breeches, good linen, light, fine, dyed blue (indigo)',
        description: 'Breeches, good linen, light, fine, dyed blue (indigo)',
        cost: 131
      },
      {
        summary: 'Breeches, good linen, light, fine, dyed red (madder)',
        description: 'Breeches, good linen, light, fine, dyed red (madder)',
        cost: 129
      },
      {
        summary: 'Breeches, silk, fine',
        description: 'Breeches, silk, fine',
        cost: 900
      },
      {
        summary: 'Breeches, thick cotton, fine',
        description: 'Breeches, thick cotton, fine',
        cost: 175
      },
      {
        summary: 'Breeches, thin cotton, fine',
        description: 'Breeches, thin cotton, fine',
        cost: 150
      },
      {
        summary: 'Breeches, wool, fine',
        description: 'Breeches, wool, fine',
        cost: 130
      },
      {
        summary: 'Breeches, wool, fine, dyed blue (indigo)',
        description: 'Breeches, wool, fine, dyed blue (indigo)',
        cost: 135
      },
      {
        summary: 'Breeches, wool, fine, dyed red (madder)',
        description: 'Breeches, wool, fine, dyed red (madder)',
        cost: 133
      },
      {
        summary: 'Button, ivory',
        description: 'Button, ivory',
        cost: 60
      },
      {
        summary: 'Button, wood',
        description: 'Button, wood',
        cost: 4
      },

      {
        summary: 'Coat (great), good linen, fine',
        description: 'Coat (great), good linen, fine',
        cost: 380
      },
      {
        summary: 'Coat (great), good linen, light, fine',
        description: 'Coat (great), good linen, light, fine',
        cost: 300
      },
      {
        summary: 'Coat (great), heavy wool, fine',
        description: 'Coat (great), heavy wool, fine',
        cost: 400
      },
      {
        summary: 'Coat (great), thick cotton, fine',
        description: 'Coat (great), thick cotton, fine',
        cost: 450
      },
      {
        summary: 'Coat (great), thin cotton, fine',
        description: 'Coat (great), thin cotton, fine',
        cost: 380
      },
      {
        summary: 'Coat (great), wool, fine',
        description: 'Coat (great), wool, fine',
        cost: 320
      },
      {
        summary: 'Coat, beaver fur',
        description: 'Coat, beaver fur',
        cost: 900
      },
      {
        summary: 'Coat, buckskin',
        description: 'Coat, buckskin',
        cost: 500
      },
      {
        summary: 'Coat, fox fur',
        description: 'Coat, fox fur',
        cost: 1500
      },
      {
        summary: 'Coat, leather (steer), black',
        description: 'Coat, leather (steer), black',
        cost: 500
      },
      {
        summary: 'Coat, leather (steer), natural color',
        description: 'Coat, leather (steer), natural color',
        cost: 450
      },
      {
        summary: 'Coat, lynx fur',
        description: 'Coat, lynx fur',
        cost: 1800
      },
      {
        summary: 'Coat, rabbit fur',
        description: 'Coat, rabbit fur',
        cost: 580
      },
      {
        summary: 'Coat, skunk fur',
        description: 'Coat, skunk fur',
        cost: 1100
      },
      {
        summary: 'Collar, dog, with iron buckle',
        description: 'Collar, dog, with iron buckle',
        cost: 8
      },
      {
        summary: 'Dress, simple, good linen, fine',
        description: 'Dress, simple, good linen, fine',
        cost: 220
      },
      {
        summary: 'Dress, simple, good linen, light, fine',
        description: 'Dress, simple, good linen, light, fine',
        cost: 180
      },
      {
        summary: 'Dress, simple, silk, fine',
        description: 'Dress, simple, silk, fine',
        cost: 1500
      },
      {
        summary: 'Dress, simple, thick cotton, fine',
        description: 'Dress, simple, thick cotton, fine',
        cost: 270
      },
      {
        summary: 'Dress, simple, thin cotton, fine',
        description: 'Dress, simple, thin cotton, fine',
        cost: 220
      },
      {
        summary: 'Dress, simple, wool, fine',
        description: 'Dress, simple, wool, fine',
        cost: 200
      },

      {
        summary: "Gloves, horse hide, workman's",
        description: "Gloves, horse hide, workman's",
        cost: 50
      },
      {
        summary: "Gloves, leather, workman's",
        description: "Gloves, leather, workman's",
        cost: 46
      },
      {
        summary: 'Gloves, wool, knit',
        description: 'Gloves, wool, knit',
        cost: 50
      },
      {
        summary: "Handkerchief, good linen, 1'sq.",
        description: "Handkerchief, good linen, 1'sq.",
        cost: 7
      },
      {
        summary: "Handkerchief, soft light canvas, 1'sq.",
        description: "Handkerchief, soft light canvas, 1'sq.",
        cost: 5
      },
      {
        summary: 'Hat, beaver fur',
        description: 'Hat, beaver fur',
        cost: 90
      },
      {
        summary: 'Hat, rabbit fur',
        description: 'Hat, rabbit fur',
        cost: 60
      },
      {
        summary: 'Hat, very large, beaver fur',
        description: 'Hat, very large, beaver fur',
        cost: 150
      },
      {
        summary: 'Hat, very large, rabbit fur',
        description: 'Hat, very large, rabbit fur',
        cost: 140
      },
      {
        summary: 'Hat, very large, skunk fur',
        description: 'Hat, very large, skunk fur',
        cost: 200
      },
      {
        summary: 'Hat, wool, knit, simple, 3 color',
        description: 'Hat, wool, knit, simple, 3 color',
        cost: 40
      },
      {
        summary: 'Jacket, beaver fur',
        description: 'Jacket, beaver fur',
        cost: 600
      },
      {
        summary: 'Jacket, buckskin',
        description: 'Jacket, buckskin',
        cost: 320
      },
      {
        summary: 'Jacket, fox fur, silver',
        description: 'Jacket, fox fur, silver',
        cost: 1000
      },
      {
        summary: 'Jacket, leather (steer), black',
        description: 'Jacket, leather (steer), black',
        cost: 370
      },
      {
        summary: 'Jacket, leather (steer), natural color',
        description: 'Jacket, leather (steer), natural color',
        cost: 330
      },
      {
        summary: 'Jacket, lynx fur',
        description: 'Jacket, lynx fur',
        cost: 1200
      },
      {
        summary: 'Jacket, rabbit fur',
        description: 'Jacket, rabbit fur',
        cost: 380
      },
      {
        summary: 'Jacket, skunk fur',
        description: 'Jacket, skunk fur',
        cost: 700
      },
      {
        summary: 'Jacket, wolf fur',
        description: 'Jacket, wolf fur',
        cost: 750
      },
      {
        summary: 'Kilt, wool',
        description: 'Kilt, wool',
        cost: 180
      },
      {
        summary: 'Mittens, wool, knit',
        description: 'Mittens, wool, knit',
        cost: 20
      },
      {
        summary: "Napkin, good linen, 1'sq.",
        description: "Napkin, good linen, 1'sq.",
        cost: 7
      },

      {
        summary: 'Sandals, leather, natural color',
        description: 'Sandals, leather, natural color',
        cost: 40
      },
      {
        summary: "Scarf, gauze silk, 4'",
        description: "Scarf, gauze silk, 4'",
        cost: 135
      },
      {
        summary: "Scarf, silk, 4'",
        description: "Scarf, silk, 4'",
        cost: 175
      },
      {
        summary: 'Scarf, wool, knit',
        description: 'Scarf, wool, knit',
        cost: 55
      },
      {
        summary: 'Shirt, good linen, fine',
        description: 'Shirt, good linen, fine',
        cost: 150
      },
      {
        summary: 'Shirt, good linen, fine, dyed orange (saffron)',
        description: 'Shirt, good linen, fine, dyed orange (saffron)',
        cost: 205
      },
      {
        summary: 'Shirt, good linen, fine, dyed purple (true)',
        description: 'Shirt, good linen, fine, dyed purple (true)',
        cost: 275
      },
      {
        summary: 'Shirt, good linen, fine, dyed red (carmine)',
        description: 'Shirt, good linen, fine, dyed red (carmine)',
        cost: 195
      },
      {
        summary: 'Shirt, good linen, light, fine',
        description: 'Shirt, good linen, light, fine',
        cost: 125
      },
      {
        summary: 'Shirt, good linen, light, fine, dyed lt. blue (indigo)',
        description: 'Shirt, good linen, light, fine, dyed lt. blue (indigo)',
        cost: 133
      },
      {
        summary: 'Shirt, good linen, light, fine, dyed red (madder)',
        description: 'Shirt, good linen, light, fine, dyed red (madder)',
        cost: 135
      },
      {
        summary: 'Shirt, good linen, light, fine, dyed yellow (weld)',
        description: 'Shirt, good linen, light, fine, dyed yellow (weld)',
        cost: 130
      },
      {
        summary: 'Shirt, silk, fine',
        description: 'Shirt, silk, fine',
        cost: 1000
      },
      {
        summary: 'Shirt, thick cotton, fine',
        description: 'Shirt, thick cotton, fine',
        cost: 180
      },
      {
        summary: 'Shirt, thin cotton, fine',
        description: 'Shirt, thin cotton, fine',
        cost: 150
      },
      {
        summary: 'Shirt, thin cotton, fine, dyed lt. blue (indigo)',
        description: 'Shirt, thin cotton, fine, dyed lt. blue (indigo)',
        cost: 164
      },
      {
        summary: 'Shirt, thin cotton, fine, dyed red (madder)',
        description: 'Shirt, thin cotton, fine, dyed red (madder)',
        cost: 165
      },
      {
        summary: 'Shirt, thin cotton, fine, dyed yellow (weld)',
        description: 'Shirt, thin cotton, fine, dyed yellow (weld)',
        cost: 162
      },
      {
        summary: 'Shirt, wool, fine',
        description: 'Shirt, wool, fine',
        cost: 130
      },
      {
        summary: 'Shirt, wool, fine, dyed lt. blue (indigo)',
        description: 'Shirt, wool, fine, dyed lt. blue (indigo)',
        cost: 138
      },
      {
        summary: 'Shirt, wool, fine, dyed orange (saffron)',
        description: 'Shirt, wool, fine, dyed orange (saffron)',
        cost: 160
      },
      {
        summary: 'Shirt, wool, fine, dyed purple (true)',
        description: 'Shirt, wool, fine, dyed purple (true)',
        cost: 200
      },
      {
        summary: 'Shirt, wool, fine, dyed red (carmine)',
        description: 'Shirt, wool, fine, dyed red (carmine)',
        cost: 153
      },
      {
        summary: 'Shirt, wool, fine, dyed red (madder)',
        description: 'Shirt, wool, fine, dyed red (madder)',
        cost: 140
      },
      {
        summary: 'Shirt, wool, fine, dyed yellow (weld)',
        description: 'Shirt, wool, fine, dyed yellow (weld)',
        cost: 135
      },
      {
        summary: 'Shoes, leather, black',
        description: 'Shoes, leather, black',
        cost: 70
      },
      {
        summary: 'Socks, wool, knit, thick',
        description: 'Socks, wool, knit, thick',
        cost: 25
      },
      {
        summary: 'Socks, wool, knit, thin',
        description: 'Socks, wool, knit, thin',
        cost: 12
      },
      {
        summary: 'Staff, walking, plain',
        description: 'Staff, walking, plain',
        cost: 20
      },
      {
        summary: 'Sweater, heavy wool',
        description: 'Sweater, heavy wool',
        cost: 160
      },
      {
        summary: 'Sweater, winter wool',
        description: 'Sweater, winter wool',
        cost: 240
      },
      {
        summary: 'Sweater, wool',
        description: 'Sweater, wool',
        cost: 120
      },
      {
        summary: 'Vest, good linen, fine',
        description: 'Vest, good linen, fine',
        cost: 100
      },
      {
        summary: 'Vest, silk, fine',
        description: 'Vest, silk, fine',
        cost: 700
      },
      {
        summary: 'Vest, thick cotton, fine',
        description: 'Vest, thick cotton, fine',
        cost: 120
      },
      {
        summary: 'Vest, wool, fine',
        description: 'Vest, wool, fine',
        cost: 90
      }
    ],
    type: 'tailors',
    notableFeature: [
      // you notice _______
      'several rolls of cloth stacked on the counter.',
      'a wide shelf stuffed to the brim with fabric bolts.',
      'a long rack of thick leather hides pushed up against a wall.',
      'a glass cabinet behind the counter chock full of thimbles.',
      'long rows of different clothing laid out before you.',
      'several body forms fitted with quite regal clothing.',
      'a number of body forms fitted with peasant class clothing.',
      'a rack with several thick woolen cloaks right in the middle of the store.',
      'a basket full of spools of thread on a stool near the front counter.',
      'a large sign at the front window which reads "These clothes are a fit for you!".',
      'nothing out of the ordinary, it seems to be a regular tailors.',
      'a large cluster of mirrors in one corner of the shop.',
      'several paintings of well clothed lords and ladies hang from the shop walls'
    ],
    specialty: [
      // the tailors is known for _______
      'their exceptionally colorful clothing.',
      'the fair prices they give to the common folk.',
      'doing free fittings for suits every other sunday.',
      'sewing a few too many buttons onto things.',
      'doing exceptionally good work for fairly decent prices.',
      'having the most trendy clothing available.',
      'serving several well known nobles.',
      'having created the gown for the most recent royal wedding.',
      'refusing to service garments unless they are completely clean.',
      'charging far too much for far too little fabric.',
      'having a large collection of all black clothing.',
      'their skill with leather working.'
    ]
  } as GoodsAndService,
  butcher: {
    create (town, building, opts = {}) {
      if (!building) {
        console.error('A building was not passed!')
        return
      }

      const typeData = setup.goodsAndServices[building.type]

      building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts.npc })
      lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
      building.name = building.name || opts.name || typeData.name.function(town, building)

      building.notableFeature = typeData.notableFeature.random()
      building.specialty = typeData.specialty.random()

      building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}.`
      return building
    },
    name: {
      function (town, building) {
        const name = setup.goodsAndServices[building.type].name
        const unique = name.unique.random() || `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`
        return lib.toTitleCase([
            `The ${name.adjective.random().toUpperFirst()} ${name.noun.random().toUpperFirst()}`,
            `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`,
            `The ${town.roads[building.road].name} ${name.wordNoun.random().toUpperFirst()}`,
            `${building.associatedNPC.firstName}'s ${name.wordNoun.random().toUpperFirst()}`,
            `${name.adjectivePerson.random().toUpperFirst()} ${building.associatedNPC.firstName}'s ${name.wordNoun.random().toUpperFirst()}`,
            unique
        ].random())
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
  } as GoodsAndService,
  cobbler: {
    create (town, building, opts = {}) {
      if (!building) {
        console.error('A building was not passed!')
        return
      }

      const typeData = setup.goodsAndServices[building.type]

      building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts.npc })
      lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
      building.name = building.name || opts.name || typeData.name.function(town, building)

      building.notableFeature = typeData.notableFeature.random()
      building.specialty = typeData.specialty.random()

      building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}.`
      return building
    },
    name: {
      function (town, building) {
        const name = setup.goodsAndServices[building.type].name
        const unique = name.unique.random() || `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`
        return lib.toTitleCase([
            `The ${name.adjective.random()} ${name.noun.random()}`,
            `The ${town.name} ${name.wordNoun.random()}`,
            `The ${town.roads[building.road].name} ${name.wordNoun.random()}`,
            `${building.associatedNPC.firstName}'s ${name.wordNoun.random()}`,
            `${name.adjectivePerson.random()} ${building.associatedNPC.firstName}'s ${name.wordNoun.random()}`,
            `${building.associatedNPC.lastName}'s Shoe Repair`,
            unique
        ].random())
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
        cost: 4,
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
  } as GoodsAndService,
  fletcher: {
    create (town, building, opts = {}) {
      if (!building) {
        console.error('A building was not passed!')
        return
      }

      const typeData = setup.goodsAndServices[building.type]

      building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts.npc })
      lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
      building.name = building.name || opts.name || typeData.name.function(town, building)

      building.notableFeature = typeData.notableFeature.random()
      building.specialty = typeData.specialty.random()

      building.tippyDescription = `A ${building.type} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}.`
      return building
    },
    name: {
      function (town, building) {
        const name = setup.goodsAndServices[building.type].name
        const unique = name.unique.random() || `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`
        return lib.toTitleCase([
            `The ${name.adjective.random().toUpperFirst()} ${name.noun.random().toUpperFirst()}`,
            `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`,
            `The ${town.roads[building.road].name} ${name.wordNoun.random().toUpperFirst()}`,
            `${building.associatedNPC.firstName}'s ${name.wordNoun.random().toUpperFirst()}`,
            `${name.adjectivePerson.random().toUpperFirst()} ${building.associatedNPC.firstName}'s ${name.wordNoun.random().toUpperFirst()}`,
            `${building.associatedNPC.lastName}'s ${name.noun.random().toUpperFirst()}`,
            unique
        ].random())
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
        exclusions (town, building) {
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
        exclusions (town, building) {
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
  } as GoodsAndService,
  jeweller: {
    // the bakery can be used as an example of how to add more features to a building.
    create (town, building, opts = {}) {
      if (!building) {
        console.error('A building was not passed!')
        return
      }
      const typeData = setup.goodsAndServices[building.type]
      building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts.npc })
      lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
      console.log('Making a name!')
      building.name = building.name || opts.name || setup.goodsAndServices[building.type].name.function(town, building)
      building.notableFeature = setup.goodsAndServices[building.type].notableFeature.random()
      building.specialty = setup.goodsAndServices[building.type].specialty.random()

      building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}`
      return building
    },
    name: {
      function (town, building) {
        const name = setup.goodsAndServices[building.type].name
        const unique = name.unique.random() || `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`
        return lib.toTitleCase([
            `The ${name.adjective.random()} ${[name.noun.random(), name.wordNoun.random()].random()}`,
            `The ${name.jewelleryAdjective.random()} ${name.noun.random()}`,
            `The ${town.name} ${name.wordNoun.random()}`,
            `The ${town.roads[building.road].name} ${name.wordNoun.random()}`,
            `The ${name.adjective.random()} ${name.nounJewelledGood.random()}`,
            `${building.associatedNPC.firstName}'s ${name.wordNoun.random()}`,
            `${building.associatedNPC.lastName}'s ${name.noun.random()}`,
            unique
        ].random())
      },
      unique: [
        'Emerald City Gems',
        'Carat King',
        'Jewel Factory',
        'Golden Age',
        'Silver Lining',
        'The Gold Medal',
        'Ruby Slippers',
        'The Esteemed Citrine',
        'Sapphire Blues',
        'A Diamond A Dozen',
        'Cracker Beryl',
        'Garnet Guaranteed',
        'Here Comes the Sunstone',
        'Moonstones and More',
        'The Opal of my Eye'
      ],
      noun: [
        'emerald',
        'sapphire',
        'diamond',
        'ruby',
        'garnet',
        'beryl',
        'gold bar',
        'silver bar',
        'necklace',
        'trinket',
        'amulet',
        'opal',
        'lense',
        'hammer',
        'chisel',
        'citrine',
        'moonstone',
        'sunstone'
      ],
      nounJewelledGood: [
        'gemstone',
        'amulet',
        'necklace',
        'ring',
        'earring',
        'trinket'
      ],
      adjective: [
        'old',
        'wrinkly',
        'inquisitive',
        'intelligent',
        'ancient',
        'magical',
        'wise',
        'artisian',
        'friendly'
      ],
      jewelleryAdjective: [
        'shiny',
        'expensive',
        'mesmerizing',
        'bougie',
        'breathtaking',
        'radiant',
        'iridescent',
        'noble',
        'deep',
        'fine cut'
      ],
      wordNoun: [
        'jewellery',
        'jewellery shop',
        'gem smith',
        'gold smith',
        'silver smith',
        'gem shop',
        'jeweller'
      ]
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
        '<<goods $building setup.goodsAndServices[$building.type].goods>>'
    ],
    profession: {
      name: 'jeweller',
      opts: {
        profession: 'jeweller',
        hasClass: false,
        idle: [
          // name is currently _______
          'cutting a gemstone',
          'serving a customer',
          'inspecting a gemstone',
          'delicately repairing an ancient ring',
          'adding gemstones to a fine gold necklace',
          'weighing a brilliant gemstone',
          'assisting a man browsing wedding rings.'
        ]
      }
    },
    goods: [
      {
        summary: 'appraisal',
        cost: 200,
        type: 'service',
        description: 'For a price, jewellery and gemstones can be appraised.'
      },
      {
        summary: 'silver trinket',
        // cost: in copper pieces. The <<money>> macro handles currency conversion.
        cost: 300,
        // description: used in tooltip.
        description: 'A lucky charm made out of fine silver.',
        // exclusions for testing whether it is available. Can be ommitted if it is always available. Return truthiness.
        exclusions (town, building) {
          return building.roll.wealth > 20
        }
      },
      {
        summary: 'silver cutlery',
        cost: 25,
        description: 'A piece of cutlery that has been silvered.'
      },
      {
        summary: 'singing cutlery',
        cost: 18,
        description: 'A piece of cutlery that has a hymn of praise engraved into the side of the blade.'
      },
      {
        summary: 'slotted ring',
        cost: lib.dice(5, 20),
        description: 'This is a ring that has a slot for a gem, which makes it ideal for enchantments by a wizard.'
      },
      {
        summary: 'religious symbols',
        cost: lib.dice(4, 10),
        description: 'A religious symbol, that has been embossed in a relatively cheap metal.'
      },
      {
        summary: 'large religious symbol',
        cost: lib.dice(4, 10),
        description: 'A large religious symbol of the prominent good deity with a hidden compartment containing the religious symbol of a secret/oppressed evil deity.'
      },
      {
        summary: 'brass ring',
        cost: 10,
        description: "A discolored old ring. Don't propose to a lovely lady with this one."
      },
      {
        summary: 'gold ring',
        cost: 300,
        description: 'A ring made out of gold. Suitable for a noble perhaps.',
        exclusions (town, building) {
          return building.roll.wealth > 25
        }
      },
      {
        summary: 'gemstone ring',
        cost: 850,
        description: 'A captivating ring made with fine gems cast in gold.',
        exclusions (town, building) {
          return town.population > 1500 && building.roll.wealth > 25
        }
      },
      {
        summary: 'gemstone amulet',
        cost: 1000,
        description: 'Fine diamonds hang from a silver string. A wearable chandelier.',
        exclusions (town, building) {
          return town.population > 2000 && building.roll.wealth > 50
        }
      }
    ],
    type: 'jewellers',
    wordNoun: 'jewellers',
    notableFeature: [
      // you notice _______
      'a stack of finely cut gems behind the counter.',
      'the jeweller is assisting a royal member.',
      'a collection of rare minerials on the front counter.',
      'a trophy with "Finest Gemstones awarded to $building.name" etched into it sitting on a shelf near the entry.',
      'silver trinkets for sale in a display case.',
      'necklaces for sale in a display case.',
      'sapphires, emeralds, diamonds and more along a workbench behind the counter.',
      'a jeweled trinket halfway finished.',
      'a large golden bell is sitting on the shop counter.',
      'a dusty old bookshelf full of geological texts.',
      'the distinct smell of metal.',
      'the shop counter is made of lavish mahagony wood.'
    ],
    /** the jeweller is known for _______  */
    specialty: [
      'charging an arm and a leg.',
      'the fine gemstones cut every day.',
      'being the best place to fix an earring.',
      'their gemstone collection.',
      'the brass rings they sell.',
      'always finding the diamond in the dirt.',
      'being mostly too expensive for common folks.',
      'working closely with royals.',
      'being exceptional gem cutters.',
      'their collection of odd trinkets.'
    ],
    gems: {
      create: () => {
        console.log('Creating a gem...')
      },
      data: {
        cut: {
          square: {
            type: 'square',
            difficulty: 40,
            addValue: (initValue) => initValue * 2
          }
        },
        size: {
          large: {
            rarity: 7000,
            size: 2,
            addValue: (initValue) => initValue * 2
          }
        },
        type: {
          diamond: {
            rarity: 'rare',
            value: 400,
            exclusions: (town) => town.terrain !== 'polar'
          }
        }
      }
    }
  } as GoodsAndService & {
      gems: {
        create(): unknown
        data: {
          cut: Record<string, GemCut>
          size: Record<string, GemSize>
          type: Record<string, GemType>
        }
      }
    },
  barber: {
    create (town, building, opts = {}) {
      if (!building) {
        console.error('A building was not passed!')
        return
      }

      const typeData = setup.goodsAndServices[building.type]

      building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts.npc })
      lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
      building.name = building.name || opts.name || typeData.name.function(town, building)

      building.notableFeature = typeData.notableFeature.random()
      building.specialty = typeData.specialty.random()

      building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}.`
      return building
    },
    name: {
      function (town, building) {
        const name = setup.goodsAndServices[building.type].name
        const unique = name.unique.random() || `The ${town.name} ${name.wordNoun.random().toUpperFirst()}`
        return lib.toTitleCase([
            `The ${name.adjective.random()} ${name.noun.random()}`,
            `The ${town.name} ${name.wordNoun.random()}`,
            `The ${town.roads[building.road].name} ${name.wordNoun.random()}`,
            `${building.associatedNPC.firstName}'s ${name.wordNoun.random()}`,
            `${name.adjectivePerson.random()} ${building.associatedNPC.firstName}'s ${name.wordNoun.random()}`,
            `${building.associatedNPC.lastName}'s ${name.noun.random()}`,
            unique
        ].random())
      },
      unique: [
        'A Little Off The Top',
        'Get Buzzed',
        "The Men's Mane",
        'Cut Above The Rest',
        'Cutting Edge',
        'Top Notch',
        'Happy Hair',
        'Cliptomania',
        'Dye Hard',
        'Hair To Stay',
        'Hairitage',
        'Shears To You',
        'Well-Comb All',
        'Family Hairloom',
        'To Trim or Not to Trim',
        'Off With Their Hair',
        'Hair to Stay',
        'His and Hairs',
        'The Barber Chop'
      ],
      noun: [
        'scissors',
        'clippers',
        'buzz',
        'blade',
        'knife',
        'beard',
        'hair',
        'cut',
        'shave',
        'trim',
        'makeover',
        'barber'
      ],
      adjective: [
        'quick',
        'careful',
        'discount',
        'cheap',
        'fashionable',
        'firey',
        'cool',
        'hairy',
        'steady'
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
        'barber',
        'hairdresser',
        'surgery',
        'barber and surgery',
        'coiffeur',
        'salon',
        'beauty parlour',
        'barbershop'
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
      name: 'barber',
      opts: {
        profession: 'barber',
        hasClass: false,
        idle: [
          // There is a barber currently _______
          'finishing up a trim of a customer',
          'cleaning some knives',
          'wiping a razor',
          'checking some stock levels',
          'practising a haircut on a dummy wearing a wig',
          'playing cards',
          'taking a swig from a flask',
          'quietly whispering to a pair of silver razors',
          'sharpening a straight razor with a thick strip of leather',
          'arranging some bottles of shaving oils',
          'washing their hands in a basin of water',
          'starting to doze off in a corner of the shop',
          'lathering up some shaving cream in a small wooden mortar',
          'arranging some kinds of medicines on a shelf',
          'examining a vial of dark red blood',
          'standing over a pot of oil that is being heated up',
          'brushing hair on the floor into a small pile',
          'placing teeth into a large jar'
        ]
      }
    },
    goods: [
      {
        summary: 'hair shave',
        cost: 5,
        description: 'Using a razor, totally shaving the entire head. Super quick and easy.'
      },
      {
        summary: 'trim',
        cost: 9,
        description: 'A quick trim; expect a bowl-cut, or something similarly efficient, yet not entirely fashionable.'
      },
      {
        summary: 'shave',
        cost: 8,
        description: 'A beard shave, quick and effective for de-aging to a 14 year old.'
      },
      {
        summary: 'beard trim',
        cost: 6,
        description: 'A beard trim.'
      },
      {
        summary: 'cut',
        cost: 12,
        description: 'A better quality haircut, using new blades. Also safer.'
      },
      {
        summary: 'style',
        cost: 16,
        description: 'Restyling of hair. Includes the standard awkward small talk.'
      },
      {
        summary: 'wig',
        cost: 22,
        description: 'A wig made out of real human hair! It won\'t last forever, and is pretty scratchy, but is better than nothing.'
      },
      {
        summary: 'surgery',
        cost: 200,
        exclusions (town, building) {
          return building.roll.expertise > 20
        },
        description: 'Most barbers moonlight as surgeons, due to having the sharpest blades. Definitely not the best of care that you could receive, but better than letting appendicitis go untreated.'
      },
      {
        summary: 'tooth pull',
        cost: 100,
        exclusions (town, building) {
          return building.roll.expertise > 10
        },
        description: 'Got a tooth that\'s giving you a bit of trouble? This barber can yank it right out.'
      },
      {
        summary: 'leeching',
        cost: 60,
        exclusions (town, building) {
          return building.roll.expertise < 30
        },
        description: 'If you\'re feeling a bit sick this barber will place leeches all over you to draw out the bad blood.'
      },
      {
        summary: 'dangerous surgery',
        cost: 200,
        exclusions (town, building) {
          return building.roll.expertise < 20
        },
        description: 'This barber isn\'t familiar with surgery, but has the sharp tools to do the job.'
      }
    ],
    type: 'barber',
    notableFeature: [
      // you notice _______
      'there\'s quite a bit of hair on the floor',
      'there is a small music box playing a sweet melody in the corner of the room',
      'there is a large bowl of water with a fish swimming about',
      'the room has a lemony sort of scent in the air',
      'a strong alcohol smell permeates the air',
      'the wall is lined with all manners of blades',
      'the wall has hundreds of pairs of scissors in various shapes and sizes',
      'there is a wall with hundreds of notes attached; a loyalty board',
      'that inside, it is much quieter than you expected, and is actually rather peaceful',
      'the smell of alcohol as you walk in',
      'several small jars full of teeth sitting on a shelf',
      'a variety of different glass vials and bottles full of shaving oils',
      'a barrel that appears to be full of leeches',
      'a beautiful red leather barber chair in the center of the room',
      'a fine silver mirror hung up in front of the barber chair',
      'a large shelf against one wall filled with authentic hair wigs',
      'there are a lot of dark red stains on the floor around the barber chair',
      'a large trunk in one corner of the room with a heavy lock on it',
      'a sign in the window that reads "One free tooth pulling with every bloodletting!"',
      'a large bowl of coagulated blood is sitting in the shop window'
    ],
    specialty: [
      // the barber is known for _______
      'excellent and quick service',
      'doing a quick and rushed job',
      'excellent bloodletting skills',
      'hiring apprentices from customers',
      'being the best place to get the local gossip',
      'having the sharpest blades in the land',
      'never gossiping, acting as a confidant',
      'having taken an oath to never reveal anything that occurs inside the shop',
      'never drawing blood during a shave',
      'practising as a surgery first and foremost, taking on haircuts when business is slow',
      'having been blessed by a priest several years ago. Nobody has died on the surgery table since',
      'never having a fatality in surgery',
      'pulling teeth for free',
      'having once been the host to the only 300% mortality surgery (killing the patient, the surgeon, and the assistant)',
      'quick amputations, and slow haircuts',
      'quick haircuts, and slow amputations',
      'being a much better surgery than barber shop',
      'being a much better barber shop than surgery'
    ]
  } as GoodsAndService
}
// }
