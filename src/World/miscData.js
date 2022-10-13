// uses getEventDescription, setup.getEncounter, setup.createNPC, setup.profile
setup.initMisc = () => {
  setup.misc = {
    caravan: {
      create: (town, base) => {
        const masterType = Object.keys(setup.misc.caravan.masterType).random()
        const caravan = {
          type: setup.misc.caravan.caravanType.random(),
          animals: setup.misc.caravan.animals().random(),
          transporting: setup.misc.caravan.transporting().random(),
          mood: setup.misc.caravan.mood.random(),
          masterType,
          masterLooking: setup.misc.caravan.masterLooking.random(),
          masterAvoid: setup.misc.caravan.masterAvoid.random(),
          masterCarry: setup.misc.caravan.masterCarry.random(),
          ...base
        }
        caravan.master = setup.createNPC(town, setup.misc.caravan.masterType[caravan.masterType])
        caravan.readout = `The caravan is ${caravan.type}, with ${caravan.animals} as the pack animals. They are transporting ${caravan.transporting}, and the general mood seems to be ${caravan.mood} The master is ${setup.profile(caravan.master, JSON.stringify(caravan.masterType))}, who is looking for ${caravan.masterLooking}. ${caravan.master.heshe.toUpperFirst()} is taking special care to avoid ${caravan.masterAvoid} and is carrying ${caravan.masterCarry} with ${caravan.master.himher}.`
        caravan.tippyWord = lib.createTippyFull(caravan.readout, 'caravan')
        return caravan
      },
      caravanType: ['a wagon train', 'a long wagon train', 'a small train of pack animals', 'a long train of pack animals', 'a train of pack animals with livestock', 'a line of people on foot with a few animals'],
      animals: () => ['one-humped camels', 'two-humped camels', 'large draft horses', 'reliable garrons', 'sure-footed ponies', 'mules', 'oxen', ['bison', 'drakes', 'elephants', 'elk', 'giant lizards', 'zebras'].random()],
      transporting: () => [['cotton', 'linen', 'silk', 'wool'].random(), 'drugs or contraband.', ['diamonds', 'emeralds', 'jade', 'obsidian', 'opals', 'pearls', 'rubies', 'sapphires', 'topaz', 'turquoise'].random(), ['arsenic', 'copper', 'gold', 'lead', 'silver', 'tin'].random(), 'spices and teas.', 'wine and spirits.'],
      mood: ['desperate; a calamity has befallen them.', 'foul; morale is bad, and provisions are low.', 'tired; the journey is long and longer yet.', 'eager; great riches await at journey’s end.'],
      masterType: {
        'a mysterious foreigner': {
          vocalPattern: 'has an accent from a foreign country'
        },
        'a career soldier': {
          background: 'soldier',
          profession: 'fighter'
        },
        'an outcast from a prominent family': {
          background: 'noble',
          hasClass: false,
          note: 'Outcast from their family.'
        },
        'a celebrated explorer': {
          background: 'outlander',
          hasClass: false,
          profession: 'explorer'
        },
        'a femme fatale': {
          background: 'noble',
          dndClass: 'rogue',
          gender: 'woman'
        },
        'a charming rogue': {
          background: 'criminal',
          dndClass: 'rogue',
          calmTrait: 'charming'
        },
        'a dashing swashbuckler': {
          background: 'sailor',
          dndClass: 'fighter',
          calmTrait: 'charming'
        },
        'a brutish thug': {
          background: 'soldier',
          dndClass: 'fighter',
          calmTrait: 'slow',
          stressTrait: 'murderous'
        }
      },
      masterLooking: ['information regarding the route ahead', 'the location of an ancient ruin', 'extra muscle for the journey', 'news from the origin or destination', 'revenge against a bitter rival', 'ways to cheat the caravan’s owner', 'ways to speed up the caravan’s pace', 'drinking companions and storytellers'],
      masterAvoid: ['ancient ruins and cursed places', 'barbarians', 'bandits', 'other caravans', 'thieves', 'wild beasts'],
      masterCarry: ['a superbly crafted sword', 'several daggers and a purse of gold', 'a trusted blade and a map', 'a lucky charm (rabbit’s foot, old coin)', 'the token of a faraway love', 'some extravagant jewels and silks', 'keys of many shapes and sizes', 'a little jar of mustache wax'],
      handlerTrait: ['an awkward gait', 'incredibly large hands', 'holes in the breeches', 'quite an odor', 'a threadbare shirt', 'a ragged beard'],
      handlerWant: ['earn a little silver', 'go back home', 'survive the journey', 'have a drink and a rest'],
      handlerCarry: ['a memento from a loved one', 'several morsels of animal feed', 'several morsels of food', 'a few copper pieces', 'a waterskin', 'a wineskin'],
      cookGreet: ['a goblet of warm wine', 'a glass of water', 'a cup of cold porridge', 'a hearty handshake'],
      cookLook: ['someone more important to talk to', 'some better ingredients', 'a good joke or story', 'the bottom of a bottle'],
      cookCarry: ['a filthy rag', 'a large wooden spoon', 'a grease-smeared apron', 'an unusual belt purse', 'a pouch full of spices', 'a bottle of whisky'],
      guardIs: ['the son of a miner or fisherman', 'a veteran of warfare', 'the son of a poor man', 'a drunk', 'a thug', 'a favorite among the ladies'],
      guardReason: ['the steady pay', 'a chance to dole out pain', 'gold to repay debts', 'gold to aid a family member'],
      guardTrait: ['an unsightly scar', 'a foolish grin', 'a stupid stare', 'a blade with an inscription', 'a highly polished blade', 'a token from a favorite harlot', 'a silk handkerchief', 'a flask of wine', 'a pair of dice or a deck of cards', 'a beautiful, waxed mustache'],
      guideType: ['a nomadic herder', 'a strange hermit', 'a skilled hunter', 'a savage warrior'],
      guideLook: ['help the caravan in any way', 'lead the caravan astray', 'fill his purse with gold', 'eat, drink, and be merry'],
      guideCarry: ['an unusual map', 'a unique trinket or piece of jewellery', 'a spear or walking staff', 'a large knife and some rope'],
      merchantIs: ['a member of a trading clan', 'a minor lord or lady', 'an enterprising trader', 'a member of a prominent family', 'of common birth', 'the real owner’s representative'],
      merchantLook: ['obtain a mysterious artifact', 'negotiate a trade contract', 'purchase goods', 'sabotage a rival merchant', 'secure a marriage', 'have a good time with somebody'],
      merchantCarry: ['a family heirloom', 'several inventories and invoices', 'some very valuable jewels', 'a compromising love letter'],
      travelerIs: ['an exile', 'a minstrel', 'a pilgrim', 'a sellsword', 'a storyteller', 'a treasure hunter'],
      travelerWant: ['the answer to a riddle', 'a long lost friend', 'the return of something stolen', 'revenge against a bitter rival', 'new adventures', 'steady work'],
      travelerLook: ['accomplices on a quest', 'an audience to entertain', 'someone to hear a sad tale', 'drinking companions']
    },
    religion: {
      shrine: {
        create: (town, base) => {
          const sensesArray = Object.keys(setup.misc.religion.shrine.senses).random()
          const shrine = {
            god: [setup.misc.religion.namedGod.random(), setup.misc.religion.abstractGod.random(), setup.misc.religion.saint.random()].random(),
            material: setup.misc.religion.shrine.material.random(),
            senses: setup.misc.religion.shrine.senses[sensesArray](town),
            ...base
          }
          shrine.readout = `You come across a shrine dedicated to ${shrine.god}. The shrine is ${shrine.material} ${shrine.senses}`
          shrine.tippyWord = lib.createTippyFull(shrine.readout, 'shrine')
          return shrine
        },
        // the shrine is _______.
        material: [
          'sculpted marble.',
          'chiseled oak.',
          'an old tree stump that has been carved into shape.',
          'a huge statue made out of a common rock.',
          'a respectable statue, inlaid with some semi-precious gems.',
          'a rock pool with a simple altar.',
          'a tiny structure, with an incense holder and dais sheltered by the roof.',
          'some planks that are painted.',
          'a boulder that has been chiseled into shape.',
          'an artistic arrangement of rocks, logs, and natural materials.',
          'little more than a lectern with some religious symbols carved into it.',
          'made out of pottery.',
          'clay, moulded and coaxed into shape.',
          'some sort of rock, although it is now covered in a thick moss.',
          'some type of clay that is visibly wet.',
          'little more than a couple rocks symbolically arranged.',
          'a natural geode that has been carved into shape. The hollow inside shines brilliant colours.'
        ],
        senses: {
          'incense': town => 'You can smell the soft scent of incense having been burnt here.',
          'wood chimes': town => 'The soft clattering of some wooden chimes can be heard in the distance.',
          'candle': town => { return "There's a melted candle on top of the shrine." },
          'wax': town => { return "There's some blobs of melted wax on the shrine." },
          'pen': town => 'An ink pen has been left on top of the shrine, and there are some ink stains splashed on the ground.',
          'bread': town => 'A slice of bread is on the ground, slightly trodden on and thoroughly stale.',
          'deadBird': town => 'You can smell something rotten. Peering around the shrine, you see the corpse of a bird decomposing. Nearby, there is another, with flies buzzing around it.',
          'cat': () => {
            const cat = lib.createAutoTippy(lib.cat)('cat')
            return `You hear a soft meow, and see that there's a ${cat} sitting near the shrine, watching you.`
          },
          'hissingCat': () => {
            const cat = lib.createAutoTippy(lib.cat)('cat')
            return `You hear a hissing sound, and see that there's a ${cat} sitting near the shrine, almost guarding it.`
          },
          'bedding': town => { return "You can see some bedding on the ground near the shrine. It's pretty obvious that the owner left in a hurry." },
          'beddingWithNPC': town => {
            const npc = setup.createNPC(town)
            return `You can see some bedding on the ground near the shrine. The ${setup.profile(npc, 'owner')} is out hunting.`
          }
        }
      },
      createRelic: () => {
        // let holy = setup.misc.religion.holy.random()
        // let unholy = setup.misc.religion.unholy.random()
        const adjective = [setup.misc.religion.holy.random(), setup.misc.religion.unholy.random()].random()
        // let namedGod = setup.misc.religion.namedGod.random()
        // let abstractGod = setup.misc.religion.abstractGod.random()
        // let saint = setup.misc.religion.saint.random()
        const god = [setup.misc.religion.namedGod.random(), setup.misc.religion.abstractGod.random(), setup.misc.religion.saint.random()].random()
        const noun = setup.misc.religion.noun.random()
        return `The ${adjective} ${noun} of ${god}`
      },
      holy: [
        'Airborn', 'Almighty', 'Ancient', 'Ascendant', 'Blessed', 'Blue', 'Bronze', 'Burning', 'Ceaseless', 'Celestial', 'Charming', 'Colossal', 'Consecarted', 'Crystal', 'Curing', 'Diamond', 'Emerald', 'Eminent', 'Eternal', 'Ethereal', 'Everlasting', 'Fabled', 'Famous', 'Feathered', 'Flaming', 'Floating', 'Flying', 'Forceful', 'Gentle', 'Ghostly', 'Glass', 'Glorious', 'Glowing', 'Golden', 'Granite', 'Green', 'Grey', 'Healing', 'Heavenly', 'Holiest', 'Holy', 'Illuminated', 'Inexorable', 'Invincible', 'Just', 'Learned', 'Legendary', 'Life', 'Lighted', 'Lightning', 'Lofty', 'Long Lost', 'Lost', 'Lucky', 'Medicinal', 'Mighty', 'Moonstone', 'Oaken', 'Peaceful', 'Pious', 'Platinum', 'Praising', 'Pristine', 'Radiant', 'Red', 'Reflecting', 'Regenerating', 'Restoring', 'Righteous', 'Sacred', 'Sanctified', 'Sapphire', 'Secret', 'Shielding', 'Shining', 'Silk', 'Silver', 'Singing', 'Skyborn', 'Soaring', 'Steel', 'Stone', 'Storied', 'Sunstone', 'Thundering', 'Titanic', 'Unstoppable', 'Untouchable', 'Unyielding', 'Virtuous', 'Vorpal', 'Warding', 'Watchful', 'Whistling', 'White', 'Wind', 'Winged', 'Wise', 'Wooden', 'Yellow'
      ],
      unholy: [
        'Abyssal', 'Acid', 'Ancient', 'Ashen', 'Black', 'Blackened', 'Blacksteel', 'Blasphemous', 'Bloodstone', 'Bony', 'Brass', 'Brutal', 'Burning', 'Callous', 'Chained', 'Charming', 'Clawed', 'Crawling', 'Cruel', 'Cursed', 'Dark', 'Darkstone', 'Deathly', 'Decaying', 'Desecrated', 'Diseased', 'Disentegrating', 'Dragonfang', 'Dragonscale', 'Eternal', 'Exploding', 'Fabled', 'Fallen', 'Fell', 'Flaming', 'Flying', 'Forgotten', 'Frightful', 'Ghostly', 'Ghoulish', 'Glass', 'Gloom', 'Golden', 'Grey', 'Hellborn', 'Hellish', 'Hellish', 'Howling', 'Indomitable', 'Infamous', 'Infernal', 'Iron', 'Irresistible', 'Jade', 'Jagged', 'Leathery', 'Legendary', 'Lightning', 'Lost', 'Magma', 'Mighty', 'Moonstone', 'Necrotic', 'Obsidian', 'Poisoned', 'Profane', 'Rotting', 'Ruby', 'Rusty', 'Sacred', 'Scaly', 'Secret', 'Serrated', 'Shadow', 'Silver', 'Sinking', 'Slithering', 'Sly', 'Smoky', 'Spectral', 'Spiked', 'Starborn', 'Stone', 'Thorny', 'Thundering', 'Toothy', 'Tormenting', 'Tricky', 'Tyrranical', 'Undying', 'Unholy', 'Unlucky', 'Vain', 'Vile', 'Watchful', 'Whispering', 'Wicked', 'Winged', 'Wounding', 'Yellow'
      ],
      noun: [
        'Amulet', 'Ark', 'Arrow', 'Axe', 'Baldric', 'Barrel', 'Basin', 'Belt', 'Blade', 'Bones', 'Boots', 'Bow', 'Bowl', 'Bracers', 'Breastplate', 'Buckler', 'Candle', 'Chainmail', 'Chains', 'Chalice', 'Chest', 'Circlet', 'Claw', 'Cloak', 'Coat', 'Coffin', 'Crown', 'Cudgel', 'Cup', 'Dagger', 'Drum', 'Ear', 'Earrings', 'Epistles', 'Feather', 'Finger', 'Flail', 'Flute', 'Foot', 'Gauntlets', 'Gem', 'Globe', 'Goblet', 'Hammer', 'Hand', 'Harp', 'Helm', 'Horn', 'Kettle', 'Knife', 'Knot', 'Lantern', 'Light', 'Longsword', 'Mace', 'Mask', 'Mirror', 'Morningstar', 'Nail', 'Necklace', 'Orb', 'Pestle', 'Purse', 'Quarterstaff', 'Quill', 'Ring', 'Robe', 'Rod', 'Sandals', 'Sarcophagus', 'Scab', 'Scales', 'Scepter', 'Scroll', 'Shield', 'Shoes', 'Shortsword', 'Shroud', 'Shrubbery', 'Signet', 'Skull', 'Snout', 'Spear', 'Splinter', 'Spoon', 'Staff', 'Sword', 'Talisman', 'Toe', 'Tome', 'Tongue', 'Tooth', 'Torch', 'Tresses', 'Tunic', 'Vial', 'Wand', 'Wart', 'Whip', 'Wings'
      ],
      namedGod: [
        'Annam', 'Asmodeus', 'Auril', 'Avandra', 'Azuth', 'Bahamut', 'Bane', 'Baphomet', 'Beory', 'Bhaal', 'Boccob', 'Celestian', 'Chauntea', 'Corellon Larethian', 'Cyndor', 'Cyric', 'Daern', 'Demogorgon', 'Deneir', 'Doresain', 'Ehlonna', 'Eldath', 'Erathis', 'Erythnul', 'Fharlanghn', 'Garl Glittergold', 'Gond', 'Gruumsh', 'Halmyr', 'Heironeous', 'Helm', 'Heward', 'Hextor', 'Ilmater', 'Incabulos', 'Ioun', 'Istus', 'Iuz', 'Joramy', 'Kelanen', 'Kelemvor', 'Keoghtom', 'Khala', 'Kord', 'Kurtulmak', 'Kyuss', 'Lathander', 'Leira', 'Liliira', 'Lolth', 'Loviatar', 'Maglubiyet', 'Malar', 'Mask', 'Melora', 'Mielikki', 'Milil', 'Moradin', 'Myrkul', 'Mystra', 'Nerull', 'Obad-Hai', 'Oghma', 'Olidammara', 'Orcus', 'Pelor', 'Pholtus', 'Procan', 'Pyremius', 'Rao', 'Saint Cuthbert', 'Savras', 'Sehanine Moonbow', 'Selune', 'Shar', 'Silvanas', 'Sune', 'Talona', 'Talos', 'Tempus', 'Tharizdun', 'the Raven Queen', 'Tiamat', 'Torm', 'Torog', 'Tymora', 'Typhos', 'Tyr', 'Umberlee', 'Umberlee', 'Urbanus', 'Vaprak', 'Vecna', 'Waukeen', 'Wee Jas', 'Yeenoghu', 'Yondalla', 'Zagyg', 'Zehir', 'Zoser'
      ],
      abstractGod: [
        'Our Lady', 'Our Mother', 'the Ancient Flame', 'the Ancient Oak', 'the Autumn Singer', 'the Bat', 'the Battle-Lord', 'the Bear', 'the Beast', 'the Beast-Tamer', 'the Beast-Wife', 'the Beauty Queen', 'the Blood-Bringer', 'the Burning Man', 'the Crone', 'the Cruel King', 'the Dark Lady', 'the Dark Lord', 'the Dark Prophet', 'the Death Harbinger', 'the Doom Harbinger', 'the Doom-Maker', 'the Eagle', 'the Earth-Mother', 'the Earth-Queen', 'the Enemy', 'the Eternal Light', 'the Eternal Sage', 'the Fair Maiden', 'the Fatespinner', 'the Felled Tree', 'the Fire Dragon', 'the Forest Keeper', 'the Frog', 'the Gloom-Spider', 'the Goddess', 'the Grain-Grower', 'the Great Huntress', 'the Great Protector', 'the Great Smith', 'the Horned One', 'the Judge', 'the King Beneath the Waves', 'the Lawgiver', 'the Life-Keeper', 'the Life-Tree', "the Light's Son", 'the Magic-Maid', 'the Messenger', 'the Mighty Hunter', 'the Mighty One', 'the Mighty Warrior', 'the Mischief-Maker', 'the Moon-Witch', 'the Mountain Forger', 'the Night Queen', 'the Oathkeeper', 'the Oracle', 'the Prophet', 'the Sacred Grove', 'the Savior', 'the Scorpion', 'the Sea Dragon', 'the Sea God', 'the Sea Queen', 'the Seductress', 'the Shadow', 'the Shadowkeeper', 'the Shadow-Serpent', 'the Shield-Maiden', 'the Ship-Taker', 'the Sky Father', 'the Soothsayer', 'the Soul-Collector', 'the Soul-Eater', 'the Spider', 'the Spring Maiden', 'the Starfinder', 'the Stone Dragon', 'the Storm Dragon', 'the Storm King', 'the Storm-Bringer', 'the Summer Mistress', 'the Sunkeeper', 'the Sword-Prince', 'the Thief', 'the Tormenter', 'the Tree Spirit', 'the Undying Light', 'the Unnamed One', 'the Unyielding Tyrant', 'the Voice', 'the Wandering Rogue', 'the War-Maker', 'the Watcher', 'the Watchful Eye', 'the Wind King', 'the Winemaker', 'the Winter Lady', 'the Wolf'
      ],
      saint: [
        'Almar the Holy', 'Amaya the Seeress', 'Bahak the Preacher', 'Bahruz the Prophet', 'Lira the Flamekeeper', 'Mozar the Conqueror', 'Prince Tarunal', 'Queen Kalissa', 'Rahal the Sunsoul', 'Raham the Lightbringer', 'St. Aemilia', 'St. Albus', 'St. Anglos', 'St. Antonia', 'St. Antonus', 'St. Austyn', 'St. Bardo', 'St. Beatrix', 'St. Berta', 'St. Bettius', 'St. Bryenn', 'St. Buttercup', 'St. Carolo', 'St. Cedrick', 'St. Cordelia', 'St. Cowhan', 'St. Cumberbund', 'St. Dorys', 'St. Dreddos', 'St. Dwayn', 'St. Edwynna', 'St. Elayne', 'St. Falstyus', 'St. Farcas', 'St. Florenzo', 'St. Gabrella', 'St. Gaiorgus', 'St. Goodkynd', 'St. Hal', 'St. Halcincas', 'St. Haroldus', 'St. Hemingwar', 'St. Heraclora', 'St. Hermioninny', 'St. Hieronymus', 'St. Inigo', 'St. Jordyn', 'St. Katrynn', 'St. Lannus', 'St. Leo', 'St. Leryo', 'St. Londyn', 'St. Magio', 'St. Marius', 'St. Markuz', 'St. Martyn', 'St. Matromus', 'St. Morrsona', 'St. Morwayne', 'St. Murkel', 'St. Mychel', 'St. Nyneva', 'St. Paolo', 'St. Parrinus', 'St. Perseon', 'St. Petyr', 'St. Podryck', 'St. Polly', 'St. Pratchytt', 'St. Rawynn', 'St. Regus', 'St. Ricarddos', 'St. Roberts', 'St. Robinus', 'St. Rowhan', 'St. Rowlynna', 'St. Sansima', 'St. Sessimus', 'St. Severus', 'St. Stynebick', 'St. Symeon', 'St. Theseon', 'St. Thoryn', 'St. Tolkkyn', 'St. Twayn', 'St. Xavos', 'the Deliverer', 'the Doomcaller', 'the Doomsayer', 'the Lawgiver', 'the Oracle', 'the Prophet', 'the Savior', 'the Seeker', 'the Shadowseer', 'the Soothsayer', 'the Starwatcher', 'the Truthsayer', 'the Voice', 'Zefar the Sorcer'
      ]
    },
    town: {
      create: town => {
        return lib.weightedRandomFetcher(town, setup.plothooks, null, setup.misc.town.type.event)
      },
      type: {
        event: (town, arg) => {
          return arg.type.includes('event')
        },
        paper: (town, arg) => {
          return arg.type.includes('paper')
        }
      }
    },
    road: {
      create: (town, base) => {
        const type = lib.random(['trail', 'path', 'path', 'road', 'road', 'road'])
        const encounter = setup.getEncounter(type)
        const road = {
          type: setup.misc.road[type].type.random(),
          traffic: setup.misc.road[type].traffic.random(),
          encounter: setup.getEventDescription(encounter, town, type),
          ...base
        }
        return `${['You walk along the ', 'You trudge along the ', 'Making your way across the countryside on the ', 'You make your way along the ', 'You walk along the '].random() + road.type}, ${road.traffic}${[[' until you come across ', ' and encounter ', ' and cross paths with ', ' and come across ', ' and see in the distance ', ' and spy in the distance '].random(), `. ${['Turning the corner, you come across ', 'Then, in the distance, you see ', 'You walk for a while, and then come across ', 'You walk for a few more minutes, until you come across ', 'You walk along for a while, and then encounter '].random()}`].random()}${road.encounter}`
      },
      trail: {
        type: ["hunter's trail", 'animal trail', 'dirt trail'],
        traffic: ['which seems to have been recently used', 'which is overgrown with weeds', 'that has blood spatters in the grass which indicate a recent hunt', 'with canopy trees providing shade overhead']
      },
      path: {
        type: ['simple path', 'overgrown dirt path', 'riding path'],
        traffic: ['which looks to be desolate and abandoned', 'dotted with hoofprints', 'with heavy bootprints in the dirt', 'with the occassional burnt out campfire on the side']
      },
      road: {
        type: ['crossroads', 'droveway', 'patrol road', 'dirt road', 'busy droveway', 'busy dirt road', 'military road', 'cobblestone road', 'busy cobblestone road', 'crumbling cobblestone road', 'paved road', 'busy paved road', 'crumbling paved road'],
        traffic: [
          'which is dotted with dead campsites where many a weary traveler has made camp for the night',
          'occassionally passing a patrol shack',
          'that has plenty of wheel tracks',
          'that has road markers and signage dotted every now and then',
          'that has checkpoints or guard posts every couple of miles',
          'which seems to have been marred by time or, perhaps warfare',
          'which passes a tavern that seems to be doing very well'
        ]
      }
    },
    desert: {
      create: town => {
        const biome = 'desert'
        const event = random(1, 100) >= 50 ? setup.getLocation(biome) : setup.getEncounter(biome)
        const description = setup.getEventDescription(event, town, biome)
        return `${['While', 'As', 'After a while, as'].random()} you ${['traverse', 'trudge along', 'travel across', 'walk across'].random()} the desert, you see ${setup.misc.desert.landmark.random()}. You notice ${setup.misc.desert.feature.random()}. Up ahead, you see ${description}`
      },
      location: [
        'a cavern in a canyon wall',
        'a cave entrance, hidden by a boulder',
        'an entrance to a rocky cave',
        'a small cave next to a dry river bed',
        'an old mine in a canyon',
        'an active mining camp',
        'a hole under a large boulder',
        'a large burrow',
        'an abandoned stone house',
        'a stone house',
        'an abandoned campsite',
        "a merchant caravan's camp",
        'a peculiar tent',
        'an old watchtower',
        'ruins of an ancient city',
        'a temple ruin',
        'a village of primitive canyon dwellers',
        "some nomad's camp",
        'an ancient tomb',
        'a shrine'
      ],
      landmark: ['an oasis with a fruit tree', 'an oasis with a palm tree and some desert flowers', 'an unusually large, prickly desert plant', 'a pair of prickly plants from the same root', 'a patch of desert flowers in the shade of a boulder', 'a patch of damp sand in the shadow of a large boulder', 'a rocky bluff', 'a boulder shaped like a face', 'a pair of identical boulders, side by side', 'a boulder sitting atop a larger boulder', 'a narrow gorge with a trickle of water', 'a wide canyon with a trickle of water', 'a dry river bed', 'a swiftly flowing, shallow river in a canyon', 'a muddy river bed', 'a ridge of wind-eroded rock', 'a ridge of jagged rock', 'a mostly-buried, ancient monument', 'twelve large stones, deliberately arranged in a ring', 'a sheer rock wall with patterns of color in the rock layers'],
      feature: ['a buzzard circles overhead', 'a vulture screams', 'a scorpion scuttles away', 'a large beetle scuttles away', 'a toad hops behind a rock', 'a lizard crawls under a rock', 'a jackal barks', 'a snake slithers away', 'a butterfly flutters by', 'a rattlesnake sounds', 'an unusual bird chirps', 'a gentle breeze blows', 'the wind blows harder', 'the wind kicks up dust', 'small loose stones tumble down a slope', 'a hint of moisture on the ground', 'a prickly plant with brightly colored fruit', 'a strange desert flower', 'a small palm tree', 'several small prickly plants'],
      landscape: ['rocky', 'hilly', 'bleak', 'rugged', 'boulder-strewn', 'forbidding', 'jagged', 'wind-swept'],
      ground: ['sandy', 'pebbly', 'cracked', 'hard-packed', 'pale brown', 'muddy brown', 'deep red', 'grey'],
      cave: ['a swarm of beetles', 'lots of bats', 'many spider webs', "a troll's stash", "an ogre's lair", 'some gnolls’ hideout', 'bare rock', 'mummified remains', 'some bandits’ hideout', 'a reclusive sorcerer', 'some abandoned mining equipment', 'a half-mad prophet'],
      camped: ['a merchant of exotic goods', 'a misanthropic shapeshifter', 'an eccentric monk', 'a nomadic herder', 'a nomadic warrior', 'an outcast elf'],
      houseLived: ['a strange hermit', 'a reclusive scholar', 'an eccentric healer', 'a poor goatherder', 'a mining prospector', 'a religious fanatic with his many wives'],
      houseLives: ['poisonous snakes', 'an ogre', 'a pair of orcs', 'a mad sorcerer', 'a paranoid shapeshifter', 'restless ghosts'],
      ruinsLives: ['a treasure hunter', 'a wasteland druid', 'poisonous snakes', 'cursed mummies', 'restless ghosts', 'a hobgoblin warlord', 'a tribe of kobolds', 'a territorial griffon', 'a pair of manticores', 'slavering gnolls', 'a dragon'],
      hazards: ['a rockslide coming down a canyon wall', 'a boulder rolling down a canyon wall', 'a collapsing sand dune', 'quicksand', 'persistent, strong winds kicking up dust', 'a sudden, swirling sandstorm', 'a mirage of a city', 'a mirage of an oasis'],
      climate: ['once a year for a few days straight', 'on a few days scattered through the year', 'during the winter months', 'never; but snow melting in the mountains waters the land briefly every spring', 'never; the land floods briefly once a year', 'never; this place hasn’t had water in years'],
      hole: ['a snake', 'a spider', 'beetles', 'scorpions', 'centipedes', 'a toad', 'a lizard', 'a fox']
    },
    mountain: {
      create: town => {
        const biome = 'mountain'
        const event = random(1, 100) >= 50 ? setup.getLocation(biome) : setup.getEncounter(biome)
        const description = setup.getEventDescription(event, town, biome)
        return `${['While', 'As', 'After a while, as'].random()} you ${['traverse', 'trudge along', 'travel across', 'walk on'].random()} the mountain, you see ${setup.misc.mountain.landmark.random()}. You notice ${setup.misc.mountain.feature.random()}. Up ahead, you see ${description}`
      },
      landmark: [
        'a trickle of water flowing down a rock wall',
        'a small mountain lake of cold, fresh water',
        'a swiftly flowing small stream',
        'a natural bridge between two cliff faces',
        'a narrow gorge with walls close enough to climb between',
        'a deep gorge with no bottom in sight',
        'a set of deliberately stacked stones',
        'a large boulder eroded by the wind into the shape of a near-perfect sphere',
        'a group of stones arranged in a circle',
        'a boulder shaped to resemble a face',
        'a pair of narrow needle-like peaks',
        'a chimney-like column of rock',
        'a large boulder split in half like an egg',
        'a damp rock wall, covered in moss',
        'the fossilized bones of a great beast visible in a rock wall ',
        'a thicket of hardy mountain shrubs growing atop a boulder',
        'a copse of scrawny trees',
        'a gorge where the wind whistles',
        'a gorge with a near perfect echo',
        'a rocky shoulder beneath a snowcap'
      ],
      feature: [
        'a cache of abandoned, decrepit mining equipment',
        'some old dry bones',
        'a small fossilized leaf',
        'evidence of a recent encampment',
        'an enormous spider web',
        'an incredible view',
        'the clatter of rocks falling',
        'loose stones underfoot',
        'an unstable rock wall',
        'a distant sound—a scream, hammers at work, footsteps, or drums',
        'the name of a previous traveler carved into a boulder',
        'an ancient rune carved in a rock wall',
        'a scrawny tree growing with its roots spread over a small boulder',
        'the distant cry of a beast—an eagle, a goat, a mountain lion, or a wolf',
        'the wind whips up to a treacherous speed',
        'snow flurries begin to fall',
        'the sound of birds chirping',
        'a flock of birds takes flight',
        'an old firepit',
        'several puddles of cold water'
      ],
      location: [
        'a cavern behind a waterfall',
        'an entrance to a rocky cave',
        'a hole under a sheer cliff face',
        'a dark tunnel leading under the mountain',
        'a tunnel in a cliff face',
        'a tunnel leading into an abandoned mine',
        'a cozy little cabin',
        'an abandoned cabin',
        'an abandoned campsite',
        'a poorly marked grave or tomb',
        'an active mining camp',
        'a strategically located watchtower',
        'an abandoned watchtower',
        'an enormous bird’s nest',
        'a shrine',
        'an isolated monastery',
        'a remote temple',
        'an ancient temple',
        'a ruined monastery',
        'a small cave in the crook of a rock wall'
      ],
      cave: ['a mountain lion’s den', 'lots of bats', 'many spider webs', "a troll's stash", "an ogre's lair", "some goblins' hideout", 'some abandoned mining equipment', 'bare rock', 'a potable spring', 'unidentifiable remains', 'some outlaws’ hideout', 'an orc war band', 'a hungry ettin', 'a band of dwarvish refugees', 'a griffon’s nest', 'a manticore’s den', 'a basilisk’s lair', 'a wyvern’s nest', 'a clan of stone giants', 'a sleeping dragon'],
      cabinLives: ['an owlbear', 'an ogre', 'a troll', 'a mad witch', 'a reclusive shapeshifter', 'restless ghosts', 'an outcast orc', 'a strange hermit'],
      watchtowerLives: ['a disciplined military company', 'a rowdy mercenary troop', 'a band of desperate outlaws', 'a handful of dwarves', 'a clan of orcs', 'a goblin war party', 'several harpies', 'ghostly warriors'],
      cabinLived: ['a fugitive from justice', 'a stubborn miner', 'a dwarvish prospector', 'a dwarvish war veteran', 'a gnomish wizard', 'a mystic sage'],
      camped: ['a party of orc scouts', 'a goblin raiding party', 'some miners or prospectors', 'a pair of wandering elves', 'some refugees or fugitives', 'someone whose purposes are unclear'],
      miners: ['greedy dwarves', 'ambitious humans', 'tricky goblins', 'industrious kobolds'],
      minersGoal: () => ['copper', 'gems', 'gold', 'iron', 'silver', ['adamantine', 'electrum', 'mithral', 'platinum'].random()],
      mineLives: ['carrion crawler', 'cloaker', 'darkmantle', 'dwarves', 'fungi', 'kobolds', 'ghosts', 'mimics', 'myconids', 'ogres', 'ooze', 'orcs', 'otyugh', 'piercer', 'roper', 'rust monster', 'stirges', 'trolls', 'umber hulk', 'wraiths'],
      monasteryBuilt: ['an order of elementalist monks', 'an order of mystics', 'an extremely secretive order of monks', 'an order of shadow monks', 'an order of warrior monks', 'an unknown order of monks'],
      monasteryHonour: ['the sun god', 'the god of the heavens', 'the moon goddess', 'the storm god', 'the earth mother goddess', 'a long-forgotten god'],
      nestBuilt: ['a giant eagle', 'a giant owl', 'a clan of harpies', 'a griffon', 'a roc', 'a wyvern'],
      watchtowerBuilt: ['an expansive empire', 'a nearby kingdom', 'an occupying army', 'elvish warriors from a past age', 'a clan of orcs', 'a goblin kingdom'],
      hazards: ['a perilous rockslide', 'an icy rime across the path or road', 'a tumbling boulder', 'loose rocks that make for poor footing', 'a large boulder blocking the way', 'a place where the path has fallen away leaving a narrow ledge on which to walk', 'a place where the path or road slopes steeply down toward a cliff edge', 'a sudden storm bringing heavy snow'],
      religionLives: ['a congregation of monks', 'a group of nuns', 'an ancient religious order', 'the last of a holy order', 'a squad of exiled templars', 'a holy congregation', 'a rugged looking bunch of refugees', 'a single wise guru', 'the spirit of a vengeful god', 'the spirits of a religion long forgotten'],
      hole: ['a snake', 'a spider', 'a badger', 'earthworms', 'a centipede', 'unusual fungus']
    },
    forest: {
      create: town => {
        const biome = 'forest'
        const event = random(1, 100) >= 50 ? setup.getLocation(biome) : setup.getEncounter(biome)
        const description = setup.getEventDescription(event, town, biome)
        return `${['While', 'As', 'After a while, as'].random()} you ${['traverse', 'trudge along in', 'travel through', 'walk through'].random()} the forest, you see ${setup.misc.forest.landmark.random()}. You notice ${setup.misc.forest.feature.random()}. Up ahead, you see ${description}`
      },
      location: [
        'a cavern behind a waterfall',
        'a small cave in the bank of a creek',
        'an entrance to a rocky cave',
        'a hole under a large tree',
        'a large burrow',
        'a peculiar cottage',
        "a woodsman's cabin",
        'an abandoned cabin',
        'an abandoned campsite',
        'a sacred grove',
        'a grave with an illegible headstone',
        'ancient ruins',
        'a shrine'
      ],
      landmark: ['a fruit tree', 'a large, hollow tree', 'a pair of trees from the same root', 'a tree growing over a boulder', 'a clearing with wildflowers', 'a grassy clearing', 'a moss-covered boulder', 'a thicket of brambles', 'a babbling brook', 'a brook in a deep ravine', 'a brook, with gentle rapids', 'a dry creekbed', "a small pool at a creek's bend", 'a patch of mushrooms', 'an enormous mushroom', 'a large, hollow log', 'a large, rotting log', 'a tree felled by lightning', 'an old gnarled tree', 'the stump of an enormous tree'],
      feature: ['a flock of birds scatter', 'a hawk cries', 'a woodpecker drumming', 'an owl hoots', 'birds chirping', 'a chipmunk scurrying', 'a deer dashes away', 'a deer watches curiously', 'a squirrel leaps from one tree to another', 'a wolf howls', 'butterflies fluttering about', 'squirrels chittering', 'an eerie silence', 'the breeze stops', 'the wind blows harder', 'a twig snaps', 'brightly, colored berries', 'leaves rustling', 'the scent of flowers', 'the smell of decay'],
      trees: ['apple or pear trees', 'ashes', 'birches', 'beeches', 'cedars or junipers', 'cherry or plum trees', 'chestnut or hazel trees', 'cypresses', 'elms', 'firs', 'hawthorns or hemlocks', 'hickory or walnut trees', 'linden or lime trees', 'maples', 'oaks', 'pines', 'poplars', 'spruces', 'willows', 'yew or holly trees'],
      cave: ['a bear’s lair', 'lots of bats', 'many spider webs', "a troll's stash", "an ogre's lair", "some goblins' hideout", 'some abandoned mining equipment', 'bare rock', 'a potable spring', 'unidentifiable remains', 'some outlaws’ hideout', 'a strange hermit'],
      cottageLives: ['a lonely old woman', 'a reclusive shapeshifter', 'an eccentric healer', 'a beautiful witch', 'a horrible witch', 'an outcast dwarf'],
      cabinLives: ['an owlbear', 'an ogre', 'a troll', 'a mad witch', 'a paranoid shapeshifter', 'restless ghosts'],
      ruinsLives: ['a dwarf prospector', 'a wood elf druid', 'poisonous snakes', 'giant spiders', 'hungry zombies', 'restless ghosts', 'a handful of ogres', 'some irritable trolls', 'a pair of manticores', 'a dragon'],
      camped: ['a merchant of exotic goods', 'a misanthropic shapeshifter', 'an eccentric monk', 'a nomadic herder', 'a nomadic warrior', 'an outcast elf'],
      cabinLived: ['a lonely old woman', 'a reclusive scholar', 'an eccentric healer', 'a poor woodcutter', 'a fur trader', 'a dwarf prospector'],
      ruinsLived: ['dwarvish miners', 'a wood elf king', 'a high elf prince', 'a dragon cult', 'a death cult', 'shadow monks', 'a long-dead emperor', 'a forgotten king', 'an evil queen', 'a dark sorcerer'],
      hole: ['a snake', 'a spider', 'a badger', 'earthworms', 'a centipede', 'unusual fungus']
    }
  }
}
