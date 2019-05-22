
setup.docks = {
  rollData: {
    cleanliness: [
      [80, 'quite clean', 'spotless, save for a couple splashes of sea water'],
      [70, 'safe, if smelly', 'quite tidy, if you can stand the smell'],
      [50, 'relatively tidy', 'reasonably clean, with the occasional rope laying about posing a tripping hazard'],
      [40, 'crusty and dirty', 'crusted with sea water and barnacles cling to the supports'],
      [30, 'seaweed infested', 'marred with seaweed and a slippery mess. It smells disgusting, too'],
      [20, 'disgustingly slimy', 'disgusting. All types of moulds, algae, and other unspeakably slimy things are on display here.']
    ],
    size: [
      [90, 'large and sprawling', 'huge; it sprawls across the body of water, as far as the eye can see'],
      [80, 'large', 'large. It has the space and equipment to acoomodate a fleet of ships'],
      [60, 'big', 'big, with space to accomodate several galleons'],
      [50, 'accomodating', 'average sized, with room enough for a fair few ships'],
      [40, 'geared towards smaller vessels', 'on the small size; it is geared towards fishing vessels, but has the capacity for larger ships if needed'],
      [30, 'small', 'small, and clearly geared towards smaller vessels such as fishing ships. You could probably fit a large ship in, if you were lucky'],
      [20, 'pretty small', 'quite small, with room for fishing ships and little else'],
      [10, 'glorified jetty', 'tiny; barely more than a glorified jetty']
    ],
    activity: [
      [90, [
        'absolutely packed; the din of everyone shouting to one another to fetch another barrel and other such things makes the place feel alive',
        'absolutely packed; the din of everyone shouting to one another to haul in the fish off the boat and other such things makes the place feel alive',
        'absolutely packed; the din of everyone shouting to one another to get off their asses and shift this pile of rope and other such things makes the place feel alive',
        'packed to the gills; you have trouble moving through some parts of the harbor due to the throngs of seafairers crowding the place'
      ]],
      [80, ['bustling. There are all manners of folk walking around, all of whom have places to be',
        'bustling. Several ships seem to be currently unloading and crowds are beginning to fill the street'
      ]],
      [60, ['busy, with lots of deckhands running about, lugging things from point A to point B',
        'busy, with several large makeshift fish markets crowding the docks drawing in all kinds of crowds'
      ]],
      [50, 'reasonably busy, with a decent amount of activity'],
      [40, 'relatively quiet, with some fishermen getting ready to head out on a trip'],
      [30, 'pretty quiet, save for the gulls which are swooping around, eager to steal any unattended bread'],
      [20, 'very quiet. There is next to nobody around'],
      [10, ['deathly silent, save for the gentle sounds of the water lapping against the docks',
        'empty, save for a lone fisherman sitting and watching his lure bob up and down in the waves'

      ]]
    ]
  },
  notableFeature: [
    // which are best known for _
    'the foul smelling fish that fisherman haul in',
    'being a good place to get mugged',
    'a large lookout post that warns the shipmaster of approaching ships',
    'an impressive looking boat that has been moored for many years',
    'being the best place to go if you are looking to get into a fight',
    'single handedly keeping the brothels in business',
    'its ships that are all incredible smelly, but rather swift on the waters',
    'being a tourist attraction',
    'the Sea Priests and clergymen who roam the docks blessing ships before they set sail',
    "it's shipwrights. The dry docks here have birthed a large portion of the local navy",
    'a fine dining restaurant that hangs suspended off the end of the pier',
    "it's shady wharfmaster, who appears to be willing to turn a blind eye to just about anything for the right price",
    "it's large ornate lighthouse, an ancient statue of a humanoid figure with all details erroded by time. It holds the lighthouse's beacon aloft in it's hand",
    'the waters around the docks being infested with predatory fish and poisonous snakes',
    'the exotic stone used to construct the docks',
    "a peculiar ship docked here, constricted from living trees fed from it's soil filled hull",
    'the sun bleached wrecks littering the shore line',
    'local urban legends about ghosts ships and damned crewmembers',
    'the time the local the local militia and fishermen held back a pirate raid on the town here',
    'the large marble slabs that anchor the docks to the shore',
    'the thick oak timbers of the piers',
    'the enormous hand crafted ropes that tie down the ships',
    'a huge lighthouse that guides ships to the port',
    'being built inside an enormous cavern'
  ],
  notice: [
    'a pair of beggars arguing over a dead fish',
    'some seagulls flying overhead',
    'an entrepreneurial fellow selling hot foods from a cart',
    'a sailor struggling to lift a coil of rope',
    'a pair of burly men shifting a barrel onto a ship',
    'a captain pointing at a map, arguing with another man',
    'there is a certain quietness to the air; nobody is shouting as is usual in dockyards',
    'the atmosphere is a little on edge; sailors are more curt than usual, and the dock hands are grimacing as they load the ships with goods',
    'there is a foul stench in the air; like a rotting fish, only much larger, with no escape from the stomach turning scent to be found in buildings, or behind a scented hankerchief',
    'a pair of sailors accidentally dropping one of their crates of cargo into the water',
    'a sailor in the water trying to rescue a dropped supply barrel',
    'a crew unfurling the sails of their ship as they head for open waters',
    // a(n) enormous/large/moderately sized/regular/small/tiny/single stall fish market selling a large variety of fish/an inconceivable number of fish, crabs, shrimp, and other sea creatures/a small selection of fish/a pitiful variety fish
    'a small group of men posing for a portrait with the carcass of an enormous sea monster strung up from a tall wooden pole',
    'a person in dirty rags attempting to sell a single fish to passersby',
    'an incredibly large <<print either("schooner", "barque", "frigate", "galleon", "caravel", "galley")>> docked out in the water. It is ornately painted with the figurehead of a magical animal',
    'a large crowd gathered in front of an absolutely gargantuan severely damaged ship slowly drifting into port',
    'a lone fisherman sitting at the edge and waiting for his catch',
    'two men pulling up crab traps out of the water',
    'a haggard old woman weaving baskets out of seaweed'
  ],
  ships: {
    create: function (town, docks, opts) {
      var ship = {
        name: setup.docks.ships.name.seededrandom(),
        type: docks.typePool.seededrandom(),
        captainType: Object.keys(setup.docks.ships.captain).seededrandom(),
        hull: setup.docks.ships.hullDesc.seededrandom(),
        detail: setup.docks.ships.shipDetail.seededrandom(),
        event: setup.docks.ships.eventDetail.seededrandom()
      }
      Object.assign(ship, setup.docks.ships.type[ship.type])
      ship.captain = setup.createNPC(town, setup.docks.ships.captain[ship.captainType])
      docks.ships[ship.name] = ship
      ship.size = ''
      ship.cleanliness = ''

      // var rollDataVariables = ['size', 'cleanliness']
      // rollDataVariables.forEach(function (propName) {
      //   setup.defineRollDataGetter(ship, setup.docks.ships.rollData, propName)
      // })
      return ship
    },
    crew: {
      'create': function (town) {
        var crewType = Object.keys(setup.docks.ships.crew.type).seededrandom()

        var readout = {
          bodyFeature: setup.docks.ships.crew.bodyFeature.seededrandom(),
          itemFeature: setup.docks.ships.crew.itemFeature.seededrandom(),
          sailReason: setup.docks.ships.crew.sailing.seededrandom()
        }
        var crewTraits = Object.assign({
          isShallow: true,
          hasClass: false,
          profession: 'sailor'
        })
        Object.assign(crewTraits, setup.docks.ships.crew.type[crewType])
        var crew = setup.createNPC(town, crewTraits)
        var heShe = crew.heshe
        var hisHer = crew.hisher
        return 'Out of the crew steps ' + crewType + ' named ' + setup.profile(crew) + '. ' + heShe.toUpperFirst() + ' ' + readout.bodyFeature + ' and ' + readout.itemFeature + '. When asked about why ' + heShe + ' took to the sea, ' + hisHer + ' reason is "' + readout.sailReason + '".'
      },
      'type': {
        'a veteran of the sea who may have been beautiful at one point': {
          gender: 'woman',
          note: 'A woman whose skin has been brined by the salt water.'
        },
        'a young sailor excited to take to the sea': {
          ageStage: 'young adult',
          calmTrait: 'passionate'
        },
        'a wide eyed adventurer of the sea just getting a first true taste of sailing': {
          ageStage: 'young adult',
          calmTrait: 'curious',
          profession: 'wannabe pirate',
          note: 'This person has great ambitions'
        },
        'an older, well-brined master of sailing': {
          ageStage: 'elderly'
        },
        'an ordinary looking sailor': {},
        'a stoic looking veteran': {
          ageStage: 'settledAdult',
          calmTrait: 'quiet',
          stressTrait: 'reliable'
        },
        'a rugged and battered looking bilge rat': {
          note: 'This person has extremely dirty clothing on.'
        },
        'a suspiciously regal and seasick looking sailor': {
          profession: 'seasick sailor',
          socialClass: 'nobility',
          note: 'This character is a noble in hiding.'
        }
      },
      // He/She (bodyFeature) and (itemFeature) .
      bodyFeature: [
        'has a bright pink scar running across the <<print either("right", "left")>> hand',
        'is missing the <<print either("left", "right")>> eye and instead has a glass one',
        'has long matted hair', 'has a thick layer of dirt covering the skin',
        'has a large number of sun spots',
        'is covered in freckles',
        'has a cleft chin',
        'has deep sunken eyes',
        'has leathery thick skin from the hot sun',
        'is missing several teeth',
        'is missing an ear',
        'has acne riddled skin',
        'has hawkish eyes the seem to catch every movement',
        'has rather pale skin for someone who works in the sun',
        'has course calloused hands from working with rope daily',
        'smells distinctly of the sea',
        'has a square jaw',
        'has a large bulbous nose',
        'has a crooked nose',
        'has a crooked smile',
        'has the eyes of a rat',
        'is hunched over all of the time',
        'suffers from a limp',
        'has a noticeable stutter',
        'has a large wart on the chin',
        'has incredibly long and nimble fingers',
        'has very expressive eyebrows',
        'has beautifully clean skin',
        'has short but unpkempt hair',
        'is broad shouldered',
        'has a slender jaw',
        'has muscled arms from the hard work of the sea',
        'has a spoon lodged into the nub at the end of their arm where their hand should be',
        'has large cauliflower ears',
        'has rather pungent body odor'
      ],
      itemFeature: [
        'is wearing a grungy looking sailors cap',
        'is wearing a cheap looking eyepatch',
        'has on clothes that are rugged and tattered from the storms',
        'is wearing clothes that are stiff from all the sea salt caked upon them',
        'always carries a fancy looking compass that only points <<print either("south", "east", "west", "southeast", "southwest", "northeast", "northwest")>>',
        'has a crudely carved peg leg',
        'has a large hook for a hand',
        'has a very well crafted mahogany peg leg',
        'uses a crude walking stick',
        'uses a finely carved oak walking stick',
        'uses a walking cane with the head of a <<print either("lion", "tiger", "shark", "dolphin", "snake", "crow", "owl", "bear", "hawk", "rhino", "pufferfish", "whale")>> carved at the top',
        'is always wearing a backpack',
        'wears a thick seal leather coat to keep dry',
        'has a collapsible spyglass tied to their belt',
        'has a lucky accordion on hand at all times',
        'is wearing a tattered bandana',
        'is wearing a rather filthy looking cocked hat with a ragged feather poking out',
        'is wearing some thick leathery boots absolutely riddled with holes and rips',
        'has a large colorful parrot on one shoulder',
        'is wearing a large skull pendant',
        'is wearing a small jeweled pendant',
        'has some sort fo necklace tucked under their shirt'

      ],
      // When asked why he/she took to the sea, his/her reason is _ .
      sailing: [
        'the sea called to me and I answered her',
        'to try and find all the buried treasures that have been left behind',
        'for the riches that lie below',
        'adventure was calling me and the sea is where the greatest adventures happen',
        'I needed coin for a debt and I still need to pay it off',
        'I needed to get away from some trouble',
        'nobody cares about your past out at sea',
        'I just love the color blue',
        'the captain is a friend of mine and they asked me to come aboard',
        'the captain pays well',
        "I don't know any other trade",
        "all my family has sailed the sea. I'm just following in their footsteps",
        'it sounded like fun at the time',
        'I was sick of my town and wanted a change of scenery',
        'I lost my beloved and with it my only reason to stay on land',
        'to make enough money for my family to eat'
      ]
    },
    name: ['Lantheon', 'Starchaser', 'Dryad’s Fury', 'Black Trident', 'Corellon’s Arrow', 'Morkoth', 'Koalinthas', 'Sehanine’s Fool', 'Stormcrow', 'Vaazrus', 'Shield of Khahar',
      'Stingray', 'Sanaj-Rakal', 'Zhal-Vazir', 'Griffonwing', 'Blademark', 'Golden Libram', 'Hareth’s Barrel', 'Kasha’s Wake', 'Shining Flute', 'White Feather', 'Riventide',
      'Moonriser', 'Gem of Malfier', 'Dragon’s Glory', 'Menacer', 'Scarlet Dagger', 'Kral-Tajir', 'Ravager', 'Kerle’s Drum', 'Heart of Avandra', 'Goldraker', 'Sea Haunt', 'Storm Maven',
      'Grimbol’s Cutlass', 'Scimitar', 'Black Gauntlet', 'Iron Maiden', 'Wavecrusher', 'Hammer of Kavath', 'Waterblade', 'Arkhor’s Secret', 'Dire Gar', 'Prallmar’s Shadow', 'Piranha',
      'Devil’s Fork', 'Tuersyl’s Fist', 'Daraj-Vzan', 'Silver Chalice', 'Demonrudder', 'Turathi Flame', 'Storm’s Eye', 'Tanishar’s Fate', 'Shard of Night', 'Triton', 'Jarak’s Grasp',
      'Nightmare', 'Harpy’s Lure', 'Devious', 'Arazandro’s Bluff', 'Nbod’s Haul', 'Astaryntha', 'Expeditious', 'Curse of Thuban', 'Siren’s Kiss', 'Lonely Witch', 'Rat’s Nest',
      'Evader', 'Mistreaver', 'Ven’r', 'Vicious', 'Dream of Melora', 'Shensari', 'Damilor', 'Krimilvin’s Charm', 'Bloodmonger', 'Lucky Scrag', 'Windstriker', 'Grim Gale', 'Djinni’s Wish',
      'Flying Eel', 'Jewel of Irthos', 'Broken Keel', 'Javelin', 'Myrska’s Revenge', 'Fearsome', 'Archon’s Hammer', 'Vendetta', 'Thunderchaser', 'Heartless', 'Shrike', 'Morak’s Boat',
      'Mar-Turang', 'Will-o’-wisp', 'Asha-Naga', 'Dominant', 'Shoal Courser', 'Crescent Moon', 'Crystal Tear', 'Kara-Vaji', 'Shalastar', 'Roc’s Talon', 'Wavecarver', 'Graethan',
      'Rotten Apple', 'Bharzim’s Victory', 'Avarice', 'Farak-Changal', 'Falling Star', 'Crimson Knife', 'Yisek’s Ride', 'Shara-Vaja', 'Varalan’s Dweomer', 'Rangoth', 'Vostarika',
      'Mirasandra', 'Second Chance', 'Redfeather', 'Maal-Destir', 'Scorpion', 'Ghorzaar’s Bane', 'Moonwatcher', 'Dragon’s Crown', 'Dragonhawk', 'Dancing Sword', 'Kaveth’s Whisper',
      'Tirah', 'Phantom Shark', 'Hjeltia', 'Satyr', 'Breyten’s Thrill', 'Golden Coin', 'Pearl of Fire', 'Bhez-Rizma', 'Fireball', 'Color Spray', 'Sea Bear', 'Prosperous', 'Summer Rain',
      'Sundowner', 'Skulldark’s Ire', 'Skandalor', 'Zarkanan', 'Sana-Losi', 'Wolfshark', 'Song of Elyndri', 'Coral Rose', 'Rune of Halendros', 'Maelstrom', 'Shadow Mask',
      'Deep Heathen', 'Aurora', 'Rusted Cutlass', 'Thog’s Maul', 'Wooden Stake', 'Hellstrike', 'Scepter Queen', 'Prince of Lies', 'Fang of Tezmyr', 'White Hart', 'Floating Cask',
      'Sea Howler', 'Frostwind', 'Moonshadow', 'Melora’s Favor', 'Dark Queen’s Voice', 'Chethel’s Ghost', 'Mad Hag', 'Tamarion’s Grudge', 'Raven’s Gamble', 'Reckoner', 'Wraithwind',
      'Kalisa Tano', 'Beholder', 'Slippery Trickster', 'Retribution', 'Whirling Glyph', 'Lady Rose', 'Karthang’s Plunder', 'Good Fortune', 'Axe of Thard', 'Black Bow', 'Quickstrike',
      'Thelandira', 'Hammergust', 'Barracuda', 'Sahandrian’s Quarrel', 'Feral Knave', 'Wildwyrm', 'Shevaya’s Honor', 'Blackhelm’s Legacy', 'Wyvern’s Sting', 'Dragonroar', 'Kegstaff',
      'Oaken Ranger', 'Timber Serpent', 'Desperate Sorceress', 'Screaming Gull', 'Greedy Drake', 'Light of Pjaltr', 'Fate’s Blessing', 'Stardancer', 'Leering Skull', 'Ebon Moon',
      'Werewolf', 'Redemption', 'Zaetchan’s Privilege', 'Sea Skulk', 'Savage Swan', 'Bane’s Breath', 'Ghorok’s Grail', 'Emerald Eye', 'Remorseless', 'Skiprock', 'Zaetra', 'Silverfin',
      'Risen Ghost', 'Listless', 'Vortex', 'Advantage', 'Autumn Song', 'Trystan’s Delight', 'Soaring Manta', 'Calomaar’s Edge', 'Saerthzal', 'Iron Trumpet', 'Locathah', 'Demonskull',
      'Arrowhead', 'Frastain’s Bottle', 'The Saint Ive', 'Halygast', 'La Bon An', 'La Katerine', 'The Blythe', 'Rose', 'The Flying Squirrel', 'Golden Lion', 'Panther', 'Silent Night'],
    // The hull of the ship _
    hullDesc: [
      'is built out of bare <<print either("oak planks", "larch planks", "fir wood planks", "mahogany planks", "teak wood planks", "reeds", "pine and pitch", "cypruss wood planks", "cedar planks")>> ',
      'has <<print either("a single thin stripe", "a single thick stripe", "two thin stripes", "two stripes", "three thin stripes")>> of <<print either("red", "blue", "gold", "white", "black", "purple", "yellow", "green", "brown", "orange", "indigo", "teal", "navy", "olive", "violet", "turquoise", "cyan", "maroon")>> colored paint going across it',
      'is encrusted with several very large and oddly colored barnacles',
      'is painted with small ornate <<print either("wave", "fish", "geometric", "organic", "animal", "island shaped")>> patterns at the edges',
      'has "$currentShip.name" painted on it in bold <<print either("black", "white", "silver", "golden", "red", "blue", "green", "purple")>> letters',
      'is battered and old. The planks of the ship creak loudly in protest as it bobs through the water',
      'looks fresh and new as if it was built only yesterday',
      'looks to be damaged from a recent storm or perhaps a fight at sea',
      'has a great many number of nets hanging down it',
      'has been painted to resemble <<print either("a shark", "a seagull", "a pelican", "a lion", "an eagle", "a sea monster", "a swordfish", "a blowfish", "a mackarel", "an arrow", "a tiger", "a cheetah", "an eel", "a whale", "a hawk", "a vulture")>>',
      'has been painted so the top half is <<print either("red", "blue", "gold", "white", "black", "purple", "yellow", "green", "brown", "orange", "indigo", "teal", "navy", "olive", "violet", "turquoise", "cyan", "maroon")>> and the bottom half is <<print either("red", "blue", "gold", "white", "black", "purple", "yellow", "green", "brown", "orange", "indigo", "teal", "navy", "olive", "violet", "turquoise", "cyan", "maroon")>>',
      'has several small portholes',
      'is grungy and dirty looking',
      'has a long gangplank hanging from the top of it',
      'appears to be wrapped with bands of iron',
      'has several boards nailed to the side in hasty repair',
      'has a long nasty gouge across it',
      'has a great number of pulleys affixed to it',
      'is decorated with many ornate brass fixtures',
      'has a few colorful banners hung across it, tattered by the sea',
      'is painted pure <<print either("red", "blue", "gold", "white", "black", "purple", "yellow", "green", "brown", "orange", "indigo", "teal", "navy", "olive", "violet", "turquoise", "cyan", "maroon")>>'
    ],
    // On board you notice _
    shipDetail: [
      'all of the crew members are wearing matching uniforms',
      'the ship figurehead is a beautifully carved <<print either("mermaid", "lion", "deer", "dolphin", "whale", "maiden", "elk", "tiger", "shark" , "swordfish", "owl", "eagle", "hawk", "vulture", "serpent", "cannon", "skull", "salmon")>>',
      'the ship seems to be barely held together with patchwork boards and makeshift nails',
      "the captain's quarters has an expensive looking piano in it",
      'the rails of the ship are shaped like fish',
      'several large piles of tangled nets sitting around',
      'a large barrel full of poorly carved peglegs',
      'a small set of hooks with nameplates above them; one of them has an eyepatch hanging off of it',
      'several fishing rods bundled together',
      'a few small piles of unsorted fish and ocean debree sitting near the bow',
      'instead of a wheel there is a large lever jutting out in its place',
      'several hammocks have been set up for crew to be able to sleep under the night sky',
      'a few crew members are playing cards off in a corner',
      'all the ships rails are shaped like swords',
      'a large flag is hoisted high on top the mast',
      'a large locked chest off to one side of the deck',
      "a large open chest off to one side of the deck, you can't quite see what's inside",
      'a small cage on deck with a few slaves inside',
      'a lusty looking harlot flirting with the captain',
      'a large barrel of oranges',
      'the body of a large sea creature strung up from the mast',
      'several different piles of potatoes in the cargo hold',
      'a large harpoon gun mounted near the front of the deck',
      'a small harpoon gun mounted at the side of the deck',
      'a few crates that seem to shake every once and a while',
      "a bright red painted door that leads to the captain's quarters",
      'a <<print either("scruffy looking dog", "fluffy but mangy looking cat", "a small and rather underfed looking monkey", "a large and colorful parrot", "a dull looking seagull")>> the crew keeps as a pet',
      'the wheel of the ship appears to be made from <<print either("the wheel off an old cart", "mahogany", "an oddly shaped rock", "oiled teak", "a crudely fashioned hunk of wood", "an old buckler shield", "several swords melted into a ring; it is uncertain how the captain keeps from cutting $currentShip.captain.himherself", "several thick branches tied together")>>'
    ],
    // The crew are currently _
    eventDetail: [
      'prepping for a rather long  journey far from mainland',
      'prepping the ship to set sail',
      'mulling about doing a whole lot of nothing',
      'on a mission to bring some secret cargo to a secret buyer',
      'just trying to get by until they get their next big break',
      'all partaking in a large open ring brawl on the deck of the ship',
      'partaking in an inner-crew fishing tournament',
      'trying to decipher a map one of them found in a bottle',
      'mostly relaxing on deck, eating, and laying about enjoying the sea breeze',
      'hauling goods and supplies up into cargo',
      'drinking deeply and laughing loudly',
      'seeking a great treasure that they heard about from a passing pirate',
      'planning to become pirates after a string of bad luck',
      'fitting the ship with cannons',
      'practicing tying different kinds of knots',
      'partaking in a safety class on the harpoon gun',
      'mostly asleep below deck or off in town',
      'gathered around the captain listening to an outrageously tall tale',
      'going about their normal day to day',
      'trying to patch up a considerably big leak in the hull',
      'crowded around a large chest that they seem to be trying to pry open',
      'trying to pry open an enormous clam they fished up on their last journey',
      'having a crew wide jig off by the stern',
      'planning a mutiny against the captain',
      'trying to pull up the anchor which appears to be stuck',
      'singing a jaunty sea shanty about <<print either("beautiful women", "rough storms", "rum and wine", "good fortunes", "sea monsters", "ancient treasures")>> at the tops of their lungs'
    ],
    type: {
      caravel: {
        masts: random(2, 3),
        rigging: 'lateen',
        length: random(468, 708),
        purpose: ['sailing', 'cargo', 'pirate'],
        hasOars: false,
        crewMen: random(20, 30)
      },
      rowboat: {
        masts: 0,
        rigging: 'no',
        length: random(180, 240),
        purpose: ['fishing'],
        hasOars: true,
        crewMen: random(1, 3)
      },
      dory: {
        masts: 0,
        rigging: 'no',
        length: random(180, 400),
        purpose: ['fishing'],
        hasOars: true,
        crewMen: random(1, 10)
      },
      drifter: {
        masts: 0,
        rigging: 'no',
        length: random(180, 400),
        purpose: ['fishing'],
        hasOars: true,
        crewMen: random(1, 10)
      },
      'herring buss': {
        masts: random(2, 3),
        rigging: 'square',
        length: random(180, 400),
        purpose: ['fishing'],
        hasOars: false,
        crewMen: random(5, 25)
      },
      carrack: {
        masts: random(3, 4),
        rigging: 'square',
        length: random(800, 920),
        purpose: ['sailing', 'cargo', 'navy', 'merchant'],
        hasOars: true,
        crewMen: random(30, 40)
      },
      crayer: {
        masts: 3,
        rigging: 'square',
        length: random(468, 708),
        purpose: ['cargo', 'merchant'],
        hasOars: true,
        crewMen: random(30, 40)
      },
      hoy: {
        masts: 1,
        rigging: 'square',
        length: random(400, 460),
        purpose: ['cargo'],
        hasOars: true,
        crewMen: random(30, 40)
      },
      picard: {
        masts: 1,
        rigging: 'square',
        length: random(150, 240),
        purpose: ['cargo'],
        hasOars: true,
        crewMen: random(5, 20)
      },
      galley: {
        masts: 3,
        rigging: 'lateen',
        length: random(3800, 4200),
        purpose: ['navy', "adventurer's", 'pirate'],
        hasOars: true,
        crewMen: random(80, 120)
      },
      longship: {
        masts: 1,
        rigging: 'square',
        length: random(1600, 1800),
        purpose: ['navy', 'cargo', 'transport'],
        hasOars: true,
        crewMen: random(80, 120)
      },
      balinger: {
        masts: 1,
        rigging: 'square',
        length: random(800, 1200),
        purpose: ['cargo', 'fishing', 'transport'],
        hasOars: true,
        crewMen: random(30, 80)
      },
      frigate: {
        masts: 3,
        rigging: 'square',
        length: random(1500, 1700),
        purpose: ['navy', 'cargo', 'pirate', "adventurer's"],
        hasOars: true,
        crewMen: random(30, 40)
      },
      galleon: {
        masts: 3,
        rigging: 'lateen',
        length: random(3800, 4200),
        purpose: ['navy', 'cargo', 'pirate', 'merchant', "adventurer's"],
        hasOars: true,
        crewMen: random(80, 120)
      },
      galleass: {
        masts: 3,
        rigging: 'square',
        length: random(3800, 4200),
        purpose: ['cargo', 'transport', 'navy', 'pirate', "adventurer's"],
        hasOars: true,
        crewMen: random(80, 140)
      },
      nef: {
        masts: 3,
        rigging: 'square',
        length: random(2400, 2800),
        purpose: ['cargo', 'exploration'],
        hasOars: true,
        crewMen: random(40, 120)
      },
      barque: {
        masts: random(3, 5),
        rigging: 'square',
        length: (3000, 5000),
        purpose: ['cargo', 'transport', "explorer's", 'pirate'],
        hasOars: true,
        crewMen: (65, 120)
      }
    },
    typePool: ['caravel', 'dory', 'drifter', 'herring buss', 'carrack', 'crayer', 'hoy', 'picard', 'galley', 'longship', 'balinger', 'frigate', 'galleon', 'galleass', 'galley', 'nef', 'barque'],
    captain: {
      'a seasoned veteran': {
        profession: "ship's captain",
        hasClass: false,
        background: 'sailor'
      },
      'a reformed pirate': {
        profession: "ship's captain",
        hasClass: false,
        background: 'sailor',
        note: 'A reformed pirate.'
      },
      'a nobleman with more money than sense': {
        profession: "ship's captain",
        hasClass: false,
        background: 'noble',
        note: 'Inexperienced on the sea.',
        gender: 'man'
      },
      'a relatively inexperienced, but gifted young lad': {
        profession: "ship's captain",
        background: 'sailor',
        hasClass: false,
        gender: 'man',
        calmTrait: 'quick on his feet'
      },
      'a woman with a temper': {
        profession: "ship's captain",
        background: 'sailor',
        hasClass: false,
        gender: 'woman',
        calmTrait: 'quick to anger',
        stressTrait: 'extremely snappy'
      },
      'a stern man, with a long beard': {
        profession: "ship's captain",
        background: 'sailor',
        hasClass: false,
        gender: 'man',
        beard: 'long and majestic',
        calmTrait: 'stern',
        stressTrait: 'shouty'
      },
      'a dwarf that wanted to see the seas': {
        profession: "ship's captain",
        background: 'sailor',
        race: 'dwarf',
        hasClass: false
      },
      'a man searching for his long lost lover': {
        profession: "ship's captain",
        background: 'sailor',
        gender: 'man',
        hasClass: false,
        note: 'He is searching for his long lost lover.'
      },
      'an elf who has forsaken the earth': {
        race: 'elf',
        hasClass: false
      },
      'a half-orc with a passion for marine life': {
        profession: "ship's captain",
        background: 'sailor',
        race: 'half-orc',
        hasClass: false
      },
      'a stoic woman with a quiet voice': {
        profession: "ship's captain",
        background: 'sailor',
        gender: 'woman',
        vocalPattern: 'has a quiet voice',
        hasClass: false
      },
      'an ex mercenary': {
        profession: "ship's captain",
        background: 'soldier'
      },
      'a retired merchant': {
        profession: "ship's captain",
        background: 'merchant',
        ageStage: 'elderly',
        hasClass: false
      },
      'a young boy who inherited the ship': {
        profession: "ship's captain",
        background: 'sailor',
        ageStage: 'young adult',
        note: 'Inherited the ship.',
        hasClass: false
      }
    },
    rollData: {
      cleanliness: [
        [80, 'change me to something really clean'],
        [70, 'change me'],
        [50, 'change me'],
        [40, 'change me'],
        [30, 'change me'],
        [20, 'change me.']
      ],
      size: [
        [90, 'change me'],
        [80, 'change me'],
        [60, 'change me'],
        [50, 'change me'],
        [40, 'change me'],
        [30, 'change me in, if you were lucky'],
        [20, 'change me little else'],
        [10, 'change me']
      ]
    }
  }
}
