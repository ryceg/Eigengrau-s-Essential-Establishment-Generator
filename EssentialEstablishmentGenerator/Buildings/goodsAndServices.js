setup.goodsAndServices = {
  bakery: {
    // the bakery can be used as the scaffolding for others.
    create: function (town, opts) {
      opts = opts || {}
      var building = {
        type: 'bakery',
        BuildingType: 'bakery',
        passageName: 'GenericPassage',
        initPassage: 'GenericPassage'
      }
      Object.assign(building, (opts['newBuilding'] || setup.createBuilding)(town, building.type))
      building.owner = setup.createNPC(town, (opts['professionOpts'] || setup.goodsAndServices[building.type].profession.opts))
      building.name = setup.goodsAndServices[building.type].name.function(town, building)
      building.notableFeature = setup.goodsAndServices[building.type].notableFeature.seededrandom()
      building.specialty = setup.goodsAndServices[building.type].specialty.seededrandom()
      building.wordNoun = setup.goodsAndServices[building.type].name.wordNoun.seededrandom()
      building.PassageFormat = setup.goodsAndServices[building.type].PassageFormat
      building.fruit = setup.flora.fruit.fruitS.seededrandom()
      building.fruits = setup.flora.fruit.fruitP.seededrandom()
      building.tippyDescription = 'A ' + building.type + ' on ' + building.road + '. Their specialty is ' + building.specialty + '.'
      return building
    },
    name: {
      function: function (town, building) {
        var name = setup.goodsAndServices[building.type].name
        var unique = name.unique.seededrandom() || 'The ' + town.name + ' ' + name.wordNoun.seededrandom().toUpperFirst()
        return [
          'The ' + name.adjective.seededrandom().toUpperFirst() + ' ' + [name.noun.seededrandom().toUpperFirst(), name.wordNoun.seededrandom().toUpperFirst()].seededrandom(),
          'The ' + name.foodAdjective.seededrandom().toUpperFirst() + ' ' + name.noun.seededrandom().toUpperFirst(),
          'The ' + town.name + ' ' + name.wordNoun.seededrandom().toUpperFirst(),
          building.owner.firstName + "'s " + name.wordNoun.seededrandom().toUpperFirst(),
          'The ' + name.beast.seededrandom().toUpperFirst() + "'s " + name.noun.seededrandom().toUpperFirst(),
          name.adjective.seededrandom().toUpperFirst() + ' ' + [building.owner.firstName + "'s ", name.beast.seededrandom().toUpperFirst()].seededrandom() + ' ' + name.wordNoun.seededrandom().toUpperFirst(),
          'The ' + setup.flora.fruit.fruitS.seededrandom().toUpperFirst() + ' ' + name.nounBakedGood.seededrandom().toUpperFirst(),
          'The ' + setup.flora.fruit.tree.seededrandom().toUpperFirst() + ' Tree ' + name.wordNoun.seededrandom().toUpperFirst(),
          unique
        ].seededrandom()
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
    PassageFormat: [
      // each array string will be a new line.
      // this will be evaluated by SugarCube; use *SugarCube syntax* for functions.
      'You ' + ['enter', 'walk into', 'open the door to', 'come inside', 'step into the doorway of', 'you come off the street into'].random() + ' $building.name. You notice $building.notableFeature',
      '',
      'This $building.wordNoun is known for $building.specialty There is a <<profile $owner $owner.descriptor>> currently <<print $building.owner.idle.random()>>. <<print $building.owner.heshe.toUpperFirst()>> welcomes you, and asks what you are after.',
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
          'slicing up a $building.fruit',
          'forming some dough into a loaf',
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
          'starting to knod off',
          'struggling with a large sack of flour',
          'icing a small cake',
          'lighting the coals of a clay oven',
          'prepping some $building.fruits for baking',
          'putting some $building.fruits into barrels'
        ]
      }
    },
    goods: {
      'loaf of rye bread': {
        // cost: in copper pieces. The <<money>> macro handles currency conversion.
        cost: 15,
        // description: used in tooltip.
        description: 'A loaf of rye bread.',
        // exclusions for testing whether it is available. Can be ommitted if it is always available.
        exclusions: function (town, building) {
          if (town.wealth > 20 && building.roll.wealth > 40) {
            return true
          } else {
            return false
          }
        }
      },
      'unleavened bread': {
        cost: 4,
        description: 'A dense and difficult to digest loaf. Typically used as a plate for meats, with the juices soaking into the bread to make it more palatable.'
      },
      'loaf of barley bread': {
        cost: 18,
        description: 'A loaf of barley bread.',
        exclusions: function (town, building) {
          if (town.wealth > 20 && building.roll.wealth > 40) {
            return true
          } else {
            return false
          }
        }
      },
      'loaf of dwarven bread':{
        cost: 15,
        description: "A loaf of dwarven bread. It's hard as rock.",
        exclusions: function (town, building) {
          if(town.wealth > 50 && building.roll.weatlh > 25){
            return true
          }else{
            return false
          }
        }
      },
      'elven biscuits':{
        cost: 15,
        description: "Small, round, golden looking pucks of some kind of baked grains. It feels invigorating to eat, and keeps you full all day.",
        exclusions: function (town, building) {

          if(town.wealth > 50 && building.roll.weatlh > 50){
            return true
          }else{
            return false
          }
        }
      },
      'stale bread': {
        cost: 2,
        description: 'A stale loaf. Not very appetizing.'
      },
      'biscuit loaf': {
        cost: 13,
        description: 'A loaf sliced and then baked a second time, biscuits last for a long time.'
      },
      'sweet tart': {
        cost: 13,
        description: 'A tasty looking fruit tart.',
        exclusions: function (town, building) {
          var i = building.specialty.includes('pastries')
          if ( i = true  && building.roll.wealth > 30) {
            return true
          } else if (building.roll.wealth > 70){
            return true
          } else{
            return false
          }
        }
      },
      'gold loaf': {
        cost: 1300,
        description: 'A loaf with gold leaf on top. Debug.',
        exclusions: function (town, building) {
          if (town.wealth > 99 && building.roll.wealth > 99) {
            return true
          } else {
            return false
          }
        }
      }
    },
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
      'there are several paintings of bread loafs hanging on the walls.',
      'a small platter with little cubes of bread on it. A folded paper in the middle of the platter reads "Free Samples".',
      'a baker tossing dough high into the air off behind the counter.',
      'a particularly huge clay oven in the middle of the bakery.',
      'there are several small tables inside the bakery for pastries to be enjoyed.',
      'a round, somehow rotating, shelf in the middle of the shop full of baked goods.',
      'a small black cat dart behind the counter as you enter.',
      'a strange shrill sound coming from the near the shop oven as you enter, but it quickly dies down. The smell of burnt hair slowly fills the room.',
      'huge clouds of flour rising up from behind the shop counter.',
      'the distinct smell of vanilla.',
      'an enormous spoon hanging from one of the walls',
      'the shop counter is made of rough hewn oak wood.',
      'a rack of discount breads near the front door.',
      'a large and intricate cake display near the front window.',
      'a make your own tart station in one corner of the shop.',
      'a bread slicing station for the commoners without bread knives.',
      'a large embroidery bread loaf hanging on a wall.',
      'several caged hens in the back of the shop that lay fresh eggs for the bakers.',
      'a large moose head hanging above the entryway.',
      'a small hearth with a roaring fire in one corner.',
      'quite a few racks of decorative plates covered in different animals hanging on the walls.',
      'a few barrels of $building.fruits sitting near the shop counter.',
      'a deere head mounted above the counter.',
      'a beaver head framed above a mantel'

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
      'more of a cafe than just a bakery.',
      'putting on interesting displays with dough while patrons wait for their bread.',
      'constantly trying out new novelty items to draw in more customers.',
      'putting delicious spices in their bread dough.',
      'giving fair prices for decent baked goods.',
      'making incredibly intricate and pointlessly complex cakes.',
      "baking cakes and breadloafs in the shape of famous noble's and heroe's heads.",
      'the incredibly fresh fruit they use in their baked goods.',
      'milling their own flour.',
      'catering special occasions.',
      'being the bakery that catered the most recent royal wedding.'
    ]
  },
  florist: {
    create: function (town, opts) {
      opts = opts || {}
      var building = {
        type: 'florist',
        BuildingType: 'florist',
        passageName: 'GenericPassage',
        initPassage: 'GenericPassage'
      }
      Object.assign(building, (opts['newBuilding'] || setup.createBuilding)(town, building.type))
      building.owner = setup.createNPC(town, (opts['professionOpts'] || setup.goodsAndServices[building.type].profession.opts))
      building.name = setup.goodsAndServices[building.type].name.function(town, building)
      building.flowers1 = setup.flora.flowers.stemP.seededrandom()
      building.flowers2 = setup.flora.flowers.stemP.seededrandom()
      building.flower = setup.flora.flowers.stemS.seededrandom()
      building.notableFeature = setup.goodsAndServices[building.type].notableFeature.seededrandom()
      building.specialty = setup.goodsAndServices[building.type].specialty.seededrandom()
      building.wordNoun = setup.goodsAndServices[building.type].name.wordNoun.seededrandom()
      building.PassageFormat = setup.goodsAndServices[building.type].PassageFormat
      building.tippyDescription = 'A ' + building.type + ' on ' + building.road + '. Their specialty is ' + building.specialty + '.'
      return building
    },
    name: {
      function: function (town, building) {
        var name = setup.goodsAndServices[building.type].name
        var unique = name.unique.seededrandom() || 'The ' + town.name + ' ' + name.wordNoun.seededrandom().toUpperFirst()
        return [
          'The ' + name.adjective.seededrandom().toUpperFirst() + ' ' + [name.noun.seededrandom().toUpperFirst(), name.wordNoun.seededrandom().toUpperFirst()].seededrandom(),
          'The ' + town.name + ' ' + name.wordNoun.seededrandom().toUpperFirst(),
          building.owner.firstName + "'s " + name.wordNoun.seededrandom().toUpperFirst(),
          'The ' + name.adjective.seededrandom().toUpperFirst() + ' ' + setup.flora.flowers.stemS.seededrandom().toUpperFirst(),
          'The ' + setup.flora.flowers.stemS.seededrandom().toUpperFirst() + [' Shop', ' Petal', ' Sprout', ' Greenhouse'].seededrandom(),
          setup.flora.flowers.stemS.seededrandom().toUpperFirst() + ' Petals ' + name.wordNoun.seededrandom().toUpperFirst(),
          'The ' + setup.flora.flowers.bush.seededrandom().toUpperFirst() + ' Bush ' + name.wordNoun.seededrandom().toUpperFirst(),
          name.adjectivePerson.seededrandom().toUpperFirst() + ' ' + building.owner.firstName + "'s " + name.wordNoun.seededrandom().toUpperFirst(),
          unique
        ].seededrandom()
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
        "Bramble and Wild",
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
    PassageFormat: [
      // each array string will be a new line.
      // this will be evaluated by SugarCube; use *SugarCube syntax* for functions.
      'You ' + ['enter', 'walk into', 'open the door to', 'come inside', 'step into the doorway of', 'you come off the street into'].random() + ' $building.name. You notice $building.notableFeature',
      '',
      'This $building.wordNoun is known for $building.specialty There is a <<profile $owner $owner.descriptor>> currently <<print $building.owner.idle.random()>>. <<print $building.owner.heshe.toUpperFirst()>> welcomes you, and asks what you are after.',
      '<<goods $building setup.goodsAndServices[$building.type].goods>>'
    ],
    profession: {
      name: 'florist',
      opts: {
        profession: 'florist',
        hasClass: false,
        idle: [
          // name is currently _______
          'watering a large flower pot full of $building.flowers1',
          'handling a strange and exotic looking plant',
          'trimming the stems on a few cut $building.flowers1',
          'carefully arranging a bouquet of $building.flowers1 and $building.flowers2',
          'extracting the petals off of an alchemical plant',
          'planting some seeds in a pot',
          'examining the leaves of a slightly wilting $building.flower',
          'plucking seeds out of the center of a large plant',
          'mixing up some soil for planting',
          'wrapping some flowers',
          'tying a cloth ribbon around a lovely bouquet of $building.flowers1 and $building.flowers2',
          'trying to dye some $building.flowers1 a new color',
          'starting to doze off behind the counter',
          'showing a customer some of the different floral options',
          'reading a book on exotic seeds',
          'clipping leaves from a small flowering hedge'
        ]
      }
    },
    goods: {
      'Small Bouquet': {
        // cost: in copper pieces. The <<money>> macro handles currency conversion.
        cost: 4,
        // description: used in tooltip.
        description: 'A small bouquet made up of mostly wildflowers.'
      },
      'Mid-Size Bouquet': {
        // cost: in copper pieces. The <<money>> macro handles currency conversion.
        cost: 8,
        // description: used in tooltip.
        description: 'A medium sized bouquet made up of an assortment of colorful flowers.'
      },
      'Large Bouquet': {
        // cost: in copper pieces. The <<money>> macro handles currency conversion.
        cost: 15,
        // description: used in tooltip.
        description: 'A large bouquet comprised of many colorful and intricately arranged flowers.'
      }
    },
    type: 'florist',
    notableFeature: [
      // you notice _______
      /*'the smell of fresh cut flowers hangs in the air.',
      'a stong $building.flower aroma wafting through the room.',
      'several planter pots dangling from ropes on the ceiling. Long fern leaves and vines hang down from the pots above.',
      'a plethora of small pots brimming with $building.flowers1 dotted around the shop.',
      'a substantial number of patrons crowding the shop counter.',
      'there is hardly anyone in here.',
      'a large hand painted sign in the window that reads "Finest $building.flowers1 in $town.name".',
      'there are several large flowering bushes and plants crammed inside the shop that seem far to big to be indoors.',
      'a large set of shelves filled with cut flowers organized by color.',
      'one of the shop walls is completely covered in ivy.',
      'several large sacks of fertilizer stacked up near the shop counter.',
      'several of the shop windows are adorned with hand painted $building.flowers2',
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
      'a single potted $building.flower sitting on the shop counter.,',
      'several strings of cut plants hung up to dry.',
      'a rusty watering can sitting on a stool in a corner.',
      'a small fairy garden has been set up at one end of the shop and a couple of fairies have taken up residence.',
      'a shelf with all kinds of jars and bottles with labels like "Giant Slug Repellant" and "Truly Magical Plant Growth".',
      'a table with vases of all shapes and sizes.',
      'a few large leafy ferns grouped up near the entrance.',
      'the room is full of $building.flower scented candles.',
      'a large amount of flower clippings have been piled up in one corner of the shop.',
      'several small copper birds are hanging from the ceiling by strings',
      'a flower mural is painted on the far wall',*/
      'a framed collection of pinned <<print either("dragonflies", "butterflies", "beetles", "grasshoppers", "worms", "bees", "crickets", "bugs", "flies", "moths", "mantids and roaches", "wasps")>> hung up on the wall next to the counter.'


    ],
    specialty: [
      // the florist is known for _______
      'often carrying strange and exotic plants.',
      'always having very fragrant $building.flowers1.',
      'having brilliantly colorful $building.flowers1.',
      'the large variety of seeds that they offer.',
      'growing strangely large $building.flowers2.',
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
      'their prize winning $building.flowers1.',
      'the gaudy and eccentric floral arrangements the owner creates.',
      'the lavish floral arrangements they make for clientele.',
      'the high class clients they do floral arrangements for.',
      'the rather cheap buoquets they throw together.',
      'enchantings their flowers to glitter in the sunlight.',
      'growing all their own flowers.',
      'doubling as a lawn care service.',
      'keeping a large collection of "royal plants" that are only to be sold to members of the nobility.',
      'having a large variety of magical flowers.',
      'selling what amounts to bundles of weeds.',
      'having a beautifully decorated cart at least years Summer Festival.',
      'their hand painted flowers.',
      'creating beautiful art out of the petals that fall off their flowers.',
      'being rumored to be an arm to a large secret organization of flower shops that run the world as we know it.',
      'being founded by a retired barbarian hero.',
      'being rumored to funded by a local thieves guild master who has a soft spot for flowers.'
    ]
  }
}
