/* global setup random */
setup.docks = {
  rollData: {
    cleanliness: [
      [80, 'spotless, save for a couple splashes of sea water'],
      [70, 'quite tidy, if you can stand the smell'],
      [50, 'reasonably clean, with the occasional rope laying about posing a tripping hazard'],
      [40, 'crusted with sea water. Although the crew has worked hard, it is still quite dirty from its most recent voyage'],
      [30, 'marred with seaweed and a slippery mess. It smells disgusting, too'],
      [20, 'disgusting. All types of moulds, algae, and other unspeakably slimy things are on display here.']
    ],
    size: [
      [90, 'huge; it sprawls across the body of water, as far as the eye can see'],
      [80, 'large. It has the space and equipment to acoomodate a fleet of ships'],
      [60, 'big, with space to accomodate several galleons'],
      [50, 'average sized, with room enough for a fair few ships'],
      [40, 'on the small size; it is geared towards fishing vessels, but has the capacity for larger ships if needed'],
      [30, 'small, and clearly geared towards smaller vessels such as fishing ships. You could probably fit a large ship in, if you were lucky'],
      [20, 'quite small, with room for fishing ships and little else'],
      [10, 'tiny; barely more than a glorified jetty']
    ],
    activity: [
      [90, 'absolutely packed; the din of everyone shouting to one another to ' + ['fetch another barrel', 'haul in the fish off the boat', 'get off their asses and shift this pile of rope'].random() + ' and other such things makes the place feel alive'],
      [80, 'bustling. there are all manners of folk walking around, all of whom have places to be'],
      [60, 'busy, with lots of deckhands running about, lugging things from point A to point B'],
      [50, 'reasonably busy, with a decent amount of activity'],
      [40, 'relatively quiet, with some fishermen getting ready to head out on a trip'],
      [30, 'pretty quiet, save for the gulls which are swooping around, eager to steal any unattended bread'],
      [20, 'very quiet. There is next to nobody around'],
      [10, 'deathly silent, save for the gentle sounds of the water lapping against the docks']
    ]
  },
  notableFeature: [
    'the foul smelling fish that fisherman haul in',
    'being a good place to get mugged',
    'a large lookout post that warns the shipmaster of approaching ships',
    'an impressive looking boat that has been moored for many years',
    'being the best place to go if you are looking to get into a fight',
    'single handedly keeping the brothels in business',
    'its ships that are all incredible smelly, but rather swift on the waters',
    'being a tourist attraction',
    'the Sea Priests and clergymen who roam the docks blessing ships before they set sail.',
    "it's shipwrights. The dry docks here have birthed a large portion of the local navy.",
    'a fine dining restaurant that hangs suspended off the end of the pier.',
    "it's shady wharfmaster, who appears to be willing to turn a blind eye to just about anything for the right price.",
    "it's large ornate lighthouse, an ancient statue of a humanoid figure with all details erroded by time. It holds the lighthouse's beacon aloft in it's hand.",
    'the waters around the docks being infested with predatory fish and poisonous snakes.',
    'the exotic stone used to construct the docks.',
    "a peculiar ship docked here, constricted from living trees fed from it's soil filled hull.",
    'the sun bleached wrecks littering the shore line.',
    'local urban legends about ghosts ships and damned crewmembers.'
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
    'there is a foul stench in the air; like a rotting fish, only much larger, with no escape from the stomach turning scent to be found in buildings, or behind a scented hankerchief'
  ],
  ships: {
    create: function (town, docks, opts) {
      var ship = {
        name: setup.docks.ships.name.random(),
        type: docks.typePool.random(),
        captainType: Object.keys(setup.docks.ships.captain).random()
      }
      Object.assign(ship, setup.docks.ships.type[ship.type])
      ship.captain = setup.createNPC(town, setup.docks.ships.captain[ship.captainType])
      docks.ships[ship.name] = ship
      return ship
    },
    name: ['Lantheon', 'Starchaser', 'Dryad’s Fury', 'Black Trident', 'Corellon’s Arrow', 'Morkoth', 'Koalinthas', 'Sehanine’s Fool', 'Stormcrow', 'Vaazrus', 'Shield of Khahar', 'Stingray', 'Sanaj-Rakal', 'Zhal-Vazir', 'Griffonwing', 'Blademark', 'Golden Libram', 'Hareth’s Barrel', 'Kasha’s Wake', 'Shining Flute', 'White Feather', 'Riventide', 'Moonriser', 'Gem of Malfier', 'Dragon’s Glory', 'Menacer', 'Scarlet Dagger', 'Kral-Tajir', 'Ravager', 'Kerle’s Drum', 'Heart of Avandra', 'Goldraker', 'Sea Haunt', 'Storm Maven', 'Grimbol’s Cutlass', 'Scimitar', 'Black Gauntlet', 'Iron Maiden', 'Wavecrusher', 'Hammer of Kavath', 'Waterblade', 'Arkhor’s Secret', 'Dire Gar', 'Prallmar’s Shadow', 'Piranha', 'Devil’s Fork', 'Tuersyl’s Fist', 'Daraj-Vzan', 'Silver Chalice', 'Demonrudder', 'Turathi Flame', 'Storm’s Eye', 'Tanishar’s Fate', 'Shard of Night', 'Triton', 'Jarak’s Grasp', 'Nightmare', 'Harpy’s Lure', 'Devious', 'Arazandro’s Bluff', 'Nbod’s Haul', 'Astaryntha', 'Expeditious', 'Curse of Thuban', 'Siren’s Kiss', 'Lonely Witch', 'Rat’s Nest', 'Evader', 'Mistreaver', 'Ven’r', 'Vicious', 'Dream of Melora', 'Shensari', 'Damilor', 'Krimilvin’s Charm', 'Bloodmonger', 'Lucky Scrag', 'Windstriker', 'Grim Gale', 'Djinni’s Wish', 'Flying Eel', 'Jewel of Irthos', 'Broken Keel', 'Javelin', 'Myrska’s Revenge', 'Fearsome', 'Archon’s Hammer', 'Vendetta', 'Thunderchaser', 'Heartless', 'Shrike', 'Morak’s Boat', 'Mar-Turang', 'Will-o’-wisp', 'Asha-Naga', 'Dominant', 'Shoal Courser', 'Crescent Moon', 'Crystal Tear', 'Kara-Vaji', 'Shalastar', 'Roc’s Talon', 'Wavecarver', 'Graethan', 'Rotten Apple', 'Bharzim’s Victory', 'Avarice', 'Farak-Changal', 'Falling Star', 'Crimson Knife', 'Yisek’s Ride', 'Shara-Vaja', 'Varalan’s Dweomer', 'Rangoth', 'Vostarika', 'Mirasandra', 'Second Chance', 'Redfeather', 'Maal-Destir', 'Scorpion', 'Ghorzaar’s Bane', 'Moonwatcher', 'Dragon’s Crown', 'Dragonhawk', 'Dancing Sword', 'Kaveth’s Whisper', 'Tirah', 'Phantom Shark', 'Hjeltia', 'Satyr', 'Breyten’s Thrill', 'Golden Coin', 'Pearl of Fire', 'Bhez-Rizma', 'Fireball', 'Color Spray', 'Sea Bear', 'Prosperous', 'Summer Rain', 'Sundowner', 'Skulldark’s Ire', 'Skandalor', 'Zarkanan', 'Sana-Losi', 'Wolfshark', 'Song of Elyndri', 'Coral Rose', 'Rune of Halendros', 'Maelstrom', 'Shadow Mask', 'Deep Heathen', 'Aurora', 'Rusted Cutlass', 'Thog’s Maul', 'Wooden Stake', 'Hellstrike', 'Scepter Queen', 'Prince of Lies', 'Fang of Tezmyr', 'White Hart', 'Floating Cask', 'Sea Howler', 'Frostwind', 'Moonshadow', 'Melora’s Favor', 'Dark Queen’s Voice', 'Chethel’s Ghost', 'Mad Hag', 'Tamarion’s Grudge', 'Raven’s Gamble', 'Reckoner', 'Wraithwind', 'Kalisa Tano', 'Beholder', 'Slippery Trickster', 'Retribution', 'Whirling Glyph', 'Lady Rose', 'Karthang’s Plunder', 'Good Fortune', 'Axe of Thard', 'Black Bow', 'Quickstrike', 'Thelandira', 'Hammergust', 'Barracuda', 'Sahandrian’s Quarrel', 'Feral Knave', 'Wildwyrm', 'Shevaya’s Honor', 'Blackhelm’s Legacy', 'Wyvern’s Sting', 'Dragonroar', 'Kegstaff', 'Oaken Ranger', 'Timber Serpent', 'Desperate Sorceress', 'Screaming Gull', 'Greedy Drake', 'Light of Pjaltr', 'Fate’s Blessing', 'Stardancer', 'Leering Skull', 'Ebon Moon', 'Werewolf', 'Redemption', 'Zaetchan’s Privilege', 'Sea Skulk', 'Savage Swan', 'Bane’s Breath', 'Ghorok’s Grail', 'Emerald Eye', 'Remorseless', 'Skiprock', 'Zaetra', 'Silverfin', 'Risen Ghost', 'Listless', 'Vortex', 'Advantage', 'Autumn Song', 'Trystan’s Delight', 'Soaring Manta', 'Calomaar’s Edge', 'Saerthzal', 'Iron Trumpet', 'Locathah', 'Demonskull', 'Arrowhead', 'Frastain’s Bottle'],
    type: {
      caravel: {
        masts: random(2, 3),
        rigging: 'lateen',
        length: random(468, 708),
        purpose: ['sail', 'cargo'],
        hasOars: false,
        crew: random(20, 30)
      },
      rowboat: {
        masts: 0,
        rigging: 'no',
        length: random(180, 240),
        purpose: ['fishing'],
        hasOars: true,
        crew: random(1, 3)
      },
      dory: {
        masts: 0,
        rigging: 'no',
        length: random(180, 400),
        purpose: ['fishing'],
        hasOars: true,
        crew: random(1, 10)
      },
      drifter: {
        masts: 0,
        rigging: 'no',
        length: random(180, 400),
        purpose: ['fishing'],
        hasOars: true,
        crew: random(1, 10)
      },
      'herring buss': {
        masts: random(2, 3),
        rigging: 'square',
        length: random(180, 400),
        purpose: ['fishing'],
        hasOars: false,
        crew: random(5, 25)
      },
      carrack: {
        masts: random(3, 4),
        rigging: 'square',
        length: random(800, 920),
        purpose: ['sail', 'cargo', 'warfare'],
        hasOars: true,
        crew: random(30, 40)
      },
      crayer: {
        masts: 3,
        rigging: 'square',
        length: random(468, 708),
        purpose: ['cargo'],
        hasOars: true,
        crew: random(30, 40)
      },
      hoy: {
        masts: 1,
        rigging: 'square',
        length: random(400, 460),
        purpose: ['cargo'],
        hasOars: true,
        crew: random(30, 40)
      },
      picard: {
        masts: 1,
        rigging: 'square',
        length: random(150, 240),
        purpose: ['cargo'],
        hasOars: true,
        crew: random(5, 20)
      },
      galley: {
        masts: 3,
        rigging: 'lateen',
        length: random(3800, 4200),
        purpose: ['warfare'],
        hasOars: true,
        crew: random(80, 120)
      },
      longship: {
        masts: 1,
        rigging: 'square',
        length: random(1600, 1800),
        purpose: ['warfare', 'cargo', 'transport'],
        hasOars: true,
        crew: random(80, 120)
      },
      balinger: {
        masts: 1,
        rigging: 'square',
        length: random(800, 1200),
        purpose: ['cargo', 'fishing', 'transport'],
        hasOars: true,
        crew: random(30, 80)
      },
      frigate: {
        masts: 3,
        rigging: 'square',
        length: random(1500, 1700),
        purpose: ['warfare', 'cargo'],
        hasOars: true,
        crew: random(30, 40)
      },
      galleon: {
        masts: 3,
        rigging: 'lateen',
        length: random(3800, 4200),
        purpose: ['warfare', 'cargo'],
        hasOars: true,
        crew: random(80, 120)
      },
      galleass: {
        masts: 3,
        rigging: 'square',
        length: random(3800, 4200),
        purpose: ['cargo', 'transport', 'warfare'],
        hasOars: true,
        crew: random(80, 140)
      },
      nef: {
        masts: 3,
        rigging: 'square',
        length: random(2400, 2800),
        purpose: ['cargo', 'exploration'],
        hasOars: true,
        crew: random(40, 120)
      }
    },
    typePool: ['caravel', 'dory', 'drifter', 'herring buss', 'carrack', 'crayer', 'hoy', 'picard', 'galley', 'longship', 'balinger', 'frigate', 'galleon', 'galleass', 'galley', 'nef'],
    captain: {
      'a seasoned veteran': {
        profession: 'captain',
        hasClass: false,
        background: 'sailor'
      },
      'a reformed pirate': {
        profession: 'captain',
        hasClass: false,
        background: 'sailor',
        note: 'A reformed pirate.'
      },
      'a nobleman with more money than sense': {
        profession: 'captain',
        hasClass: false,
        background: 'noble',
        note: 'Inexperienced on the sea.',
        gender: 'man'
      },
      'a relatively inexperienced, but gifted young lad': {
        profession: 'captain',
        background: 'sailor',
        hasClass: false,
        gender: 'man',
        calmTrait: 'quick on his feet'
      },
      'a woman with a temper': {
        profession: 'captain',
        background: 'sailor',
        gender: 'woman',
        calmTrait: 'quick to anger',
        stressTrait: 'extremely snappy'
      },
      'a stern man, with a long beard': {
        profession: 'captain',
        background: 'sailor',
        gender: 'man',
        beard: 'long and majestic',
        calmTrait: 'stern',
        stressTrait: 'shouty'
      },
      'a dwarf that wanted to see the seas': {
        profession: 'captain',
        background: 'sailor',
        race: 'dwarf',
        hasClass: false
      },
      'a man searching for his long lost lover': {
        profession: 'captain',
        background: 'sailor',
        gender: 'man',
        note: 'He is searching for his long lost lover.'
      }
    }
  }
}
