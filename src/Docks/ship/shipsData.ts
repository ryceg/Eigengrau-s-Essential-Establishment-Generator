import { Town, NPC } from '@lib'
import { crewTypeData } from '../crewTypeData'
import { Docks, Ship } from '../createDocks'
import { docksData } from '../docks'
import { shipTypesData } from './shipTypesData'
import { captainTypeData } from '../captainTypeData'
import { shipRollData } from './shipRollData'

export interface ShipsData {
    create(town: Town, docks: Docks, opts?: Partial<Ship>): Ship
    crew: {
      create(town: Town): string
      type: Partial<NPC>
      bodyFeature: string[]
      itemFeature: string[]
      sailing: string[]
    }
    name: string[]
    hullDesc: string[]
    shipDetail: string[]
    eventDetail: string[]
    type: typeof shipTypesData
    captain: typeof crewTypeData
    rollData: typeof shipRollData
  }

export const shipsData: ShipsData = {
  create (town: Town, docks: Docks, _opts?: Partial<Ship>): Ship {
    const ship = {
      name: lib.random(docksData.ships.name),
      type: lib.random(Object.keys(docksData.ships.type)),
      captainType: lib.random(Object.keys(docksData.ships.captain)),
      hull: lib.random(docksData.ships.hullDesc),
      detail: lib.random(docksData.ships.shipDetail),
      event: lib.random(docksData.ships.eventDetail),
      roll: {
        size: random(1, 100),
        cleanliness: random(1, 100)
      }
    } as Ship
    lib.assign(ship, docksData.ships.type[ship.type])
    lib.assign(ship,
      { captain: setup.createNPC(town, docksData.ships.captain[ship.captainType]) })
    lib.assign(docks.ships[ship.name], ship)

    const rollDataVariables = ['size', 'cleanliness'] as const
    for (const propName of rollDataVariables) {
      lib.defineRollDataGetter(ship, docksData.ships.rollData[propName].rolls, propName)
    }
    return ship
  },
  crew: {
    create (town: Town) {
      const crewType = lib.random(Object.keys(docksData.ships.crew.type))

      const readout = {
        bodyFeature: lib.random(docksData.ships.crew.bodyFeature),
        itemFeature: lib.random(docksData.ships.crew.itemFeature),
        sailReason: lib.random(docksData.ships.crew.sailing)
      }
      const crewTraits: Partial<NPC> = {
        isShallow: true,
        hasClass: false,
        profession: 'sailor'
      }
      lib.assign(crewTraits, crewTypeData[crewType])
      const crew = setup.createNPC(town, crewTraits)
      const heShe = crew.heshe
      const hisHer = crew.hisher
      return `Out of the crew steps ${crewType} named ${setup.profile(crew)}. ${heShe.toUpperFirst()} ${readout.bodyFeature} and ${readout.itemFeature}. When asked about why ${heShe} took to the sea, ${hisHer} reason is "${readout.sailReason}".`
    },
    type: crewTypeData,
    // He/She (bodyFeature) and (itemFeature) .
    bodyFeature: [
      'has a bright pink scar running across the <<print ["right", "left"].random()>> hand',
      'is missing the <<print ["left", "right"].random()>> eye and instead has a glass one',
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
      'has short but unkempt hair',
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
      'always carries a fancy looking compass that only points <<print ["south", "east", "west", "southeast", "southwest", "northeast", "northwest"].random()>>',
      'has a crudely carved peg leg',
      'has a large hook for a hand',
      'has a very well crafted mahogany peg leg',
      'uses a crude walking stick',
      'uses a finely carved oak walking stick',
      'uses a walking cane with the head of a <<print ["lion", "tiger", "shark", "dolphin", "snake", "crow", "owl", "bear", "hawk", "rhino", "pufferfish", "whale"].random()>> carved at the top',
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
    'is encrusted with several very large and oddly colored barnacles',
    'is battered and old. The planks of the ship creak loudly in protest as it bobs through the water',
    'looks fresh and new as if it was built only yesterday',
    'looks to be damaged from a recent storm or perhaps a fight at sea',
    'has a great many number of nets hanging down it',
    'has several small portholes',
    'is grungy and dirty looking',
    'has a long gangplank hanging from the top of it',
    'appears to be wrapped with bands of iron',
    'has several boards nailed to the side in hasty repair',
    'has a long nasty gouge across it',
    'has a great number of pulleys affixed to it',
    'is decorated with many ornate brass fixtures',
    'has a few colorful banners hung across it, tattered by the sea'
    // TODO: refactor these to not use either, as either breaks the seed
    // 'has been painted to resemble <<print either("a shark", "a seagull", "a pelican", "a lion", "an eagle", "a sea monster", "a swordfish", "a blowfish", "a mackarel", "an arrow", "a tiger", "a cheetah", "an eel", "a whale", "a hawk", "a vulture")>>',
    // 'has been painted so the top half is <<print either("red", "blue", "gold", "white", "black", "purple", "yellow", "green", "brown", "orange", "indigo", "teal", "navy", "olive", "violet", "turquoise", "cyan", "maroon")>> and the bottom half is <<print either("red", "blue", "gold", "white", "black", "purple", "yellow", "green", "brown", "orange", "indigo", "teal", "navy", "olive", "violet", "turquoise", "cyan", "maroon")>>',
    // 'is painted with small ornate <<print either("wave", "fish", "geometric", "organic", "animal", "island shaped")>> patterns at the edges',
    // 'has "$currentShip.name" painted on it in bold <<print either("black", "white", "silver", "golden", "red", "blue", "green", "purple")>> letters',
    // 'is built out of bare <<print either("oak planks", "larch planks", "fir wood planks", "mahogany planks", "teak wood planks", "reeds", "pine and pitch", "cypruss wood planks", "cedar planks")>> ',
    // 'has <<print either("a single thin stripe", "a single thick stripe", "two thin stripes", "two stripes", "three thin stripes")>> of <<print either("red", "blue", "gold", "white", "black", "purple", "yellow", "green", "brown", "orange", "indigo", "teal", "navy", "olive", "violet", "turquoise", "cyan", "maroon")>> colored paint going across it',
    // 'is painted pure <<print either("red", "blue", "gold", "white", "black", "purple", "yellow", "green", "brown", "orange", "indigo", "teal", "navy", "olive", "violet", "turquoise", "cyan", "maroon")>>'
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
    "a bright red painted door that leads to the captain's quarters"
    // 'a <<print either("scruffy looking dog", "fluffy but mangy looking cat", "a small and rather underfed looking monkey", "a large and colorful parrot", "a dull looking seagull")>> the crew keeps as a pet',
    // 'the wheel of the ship appears to be made from <<print either("the wheel off an old cart", "mahogany", "an oddly shaped rock", "oiled teak", "a crudely fashioned hunk of wood", "an old buckler shield", "several swords melted into a ring; it is uncertain how the captain keeps from cutting $currentShip.captain.himherself", "several thick branches tied together")>>'
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
    'trying to pull up the anchor which appears to be stuck'
    // 'singing a jaunty sea shanty about <<print either("beautiful women", "rough storms", "rum and wine", "good fortunes", "sea monsters", "ancient treasures")>> at the tops of their lungs'
  ],
  type: shipTypesData,
  captain: captainTypeData,
  rollData: shipRollData
}
