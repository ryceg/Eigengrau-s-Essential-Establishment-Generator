setup.initMisc = () => {
  setup.misc = {
    graveStone: {
      create: (town, base) => {
        const grave = Object.assign({
          shapeSmall: setup.misc.graveStone.shapeSmall.random(),
          shapeMedium: setup.misc.graveStone.shapeMedium.random(),
          weaponType: setup.misc.graveStone.weaponType.random(),
          gravePhrases: setup.misc.graveStone.gravePhrases.random(),
          graveImages: setup.misc.graveStone.graveImages.random()
        }, base)
        const owner = setup.createDeadNPC(town)
        const graveMaterial = Object.keys(setup.misc.graveStone.material).random()
        grave.sentenceStrings = [
            `a very small, ${setup.misc.graveStone.material.wood.secondaryDescriptors.random()}, ${setup.misc.graveStone.material.wood.type.random()} grave in the shape of ${setup.articles.output(grave.shapeSmall)}. ${['There are no distinguishing marks on this grave', 'The owner of this grave has been lost to time', 'No name has been left to remember the owner of this grave', 'This appears to be an unmarked grave', `The name ${setup.profile(owner)} has been crudely scrawled across the grave`].random()}.`,
           `a small pile of earth with ${setup.articles.output(setup.misc.graveStone.material.metal.secondaryDescriptors.random())} ${setup.misc.graveStone.material.metal.type.random()} ${grave.weaponType} stuck into it. ${['A long forgotten solider likely lays here', 'A mighty fallen warrior was likely laid to rest here', 'Surely a strong fighter was laid to rest here', 'Here lays a hero who fell in battle, their name is now forgotten'].random()}.`,
           `${['a small', 'an average sized', 'a modestly sized'].random()}, ${setup.misc.graveStone.material[graveMaterial].secondaryDescriptors.random()}, ${setup.misc.graveStone.material[graveMaterial].type.random()} grave in the shape of ${setup.articles.output(grave.shapeMedium)}. ${[`The grave has the name "${setup.profile(owner)}" ${setup.misc.graveStone.material[graveMaterial].iconPlacement.random()} onto it and nothing else.`, `${['Near the top', 'Near the bottom', 'In the middle'].random()} of the grave, ${setup.misc.graveStone.material[graveMaterial].iconPlacement.random()} onto it are the words "${['Here lies', 'R.I.P.', 'Here is burried'].random()} ${setup.profile(owner)}. ${grave.gravePhrases}."`].random()}${['', '', `${['  Just above the writing', '  Just below the writing', ' On the other side'].random()}, ${setup.misc.graveStone.material[graveMaterial].iconPlacement.random()} onto the grave is an image of ${setup.articles.output([grave.graveImages, grave.weaponType].random())}.`].random()}`
        ].random()
        grave.readout = `You come upon ${grave.sentenceStrings}`
        return grave
      },
      material: {
        metal: {
          type: ['metal', 'iron', 'wrought iron', 'copper', 'bronze', 'steel', 'gold', 'silver', 'brass'],
          secondaryDescriptors: ['rusty looking', 'gleaming', 'rusted', 'dulled', 'corroded', 'old looking', 'new looking', 'shiny', 'dull looking'],
          iconPlacement: ['sculpted', 'engraved', 'carved', 'crudely engraved']
        },
        wood: {
          type: ['wooden', 'oak', 'pine', 'birchwood', 'maple wood', 'cherry wood'],
          secondaryDescriptors: ['dirty looking', 'overgrown', 'old looking', 'new looking', 'battered', 'fine looking', 'splintered', 'mossy', 'weathered', 'waterlogged'],
          iconPlacement: ['cut', 'carved', 'scrawled', 'hacked', 'carefully sculpted', 'crudely branded']
        },
        stone: {
          type: ['granite', 'stone', 'marble', 'obsidian', 'onyx', 'sandstone', 'slate', 'basalt', 'alabaster', 'limestone', 'quartz', 'ivory', 'bone'],
          secondaryDescriptors: ['moss covered', 'chipped up', 'crumbling', 'cracked', 'weathered', 'brittle', 'rough', 'overgrown'],
          iconPlacement: ['chiseled', 'carved', 'crudely chipped', 'sculpted', 'hastily carved']
        }
      },
      shapeSmall: ['cross', 'holy symbol', 'slab', 'plaque', 'monolith', 'obelisk'],
      shapeMedium: ['holy symbol', 'slab', 'common rounded gravestone', 'ornate gothic headstone', 'obelisk', 'monolith', 'ornate rounded gravestone', 'common gothic headstone'],
      weaponType: ['arrow', 'dagger', 'battle hammer', 'battleaxe', 'rapier', 'greatsword', 'sword', 'pike', 'spear', 'halberd', 'mace', 'axe', 'scimitar'],
      gravePhrases: ['May the Gods watch over them', 'Good riddance', 'Gone but not forgotten', 'Gone and hopefully forgotten', 'A good friend indeed', 'A loyal friend in life and death', 'May they rot forever', 'Their generosity was boundless', 'They made scrooge look kind', 'Never forget', 'Coward', 'Hero', 'We miss you', 'You won\'t be missed'],
      graveImages: ['large sturdy looking tree', 'hooded figure', 'setting sun', 'pair of mountains', 'pair of praying hands', 'merchant scale', 'storm cloud', 'rose', 'flower wreath', 'torch', 'holy symbol', 'skull', 'crescent moon', 'full moon', 'large sailing ship', 'field of flowers', 'ocean wave']
    },
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
        caravan.tippy = lib.createTippy(caravan.readout)
        caravan.tippyWord = lib.createTippyWord(caravan.tippy, 'caravan')
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
          dndClass: 'fighter',
          profession: 'soldier'
        },
        'an outcast from a prominent family': {
          background: 'noble',
          hasClass: false,
          note: 'Outcast from their family.'
        },
        'a celebrated explorer': {
          background: ['outlander', 'sailor'].random(),
          hasClass: false,
          profession: 'explorer'
        },
        'a femme fatale': {
          background: 'noble',
          dndClass: 'rogue',
          gender: 'woman'
        },
        'a charming rogue': {
          background: ['criminal', 'charlatan'].random(),
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
      guideCarry: ['an unusual map', 'a unique trinket or piece of jewelry', 'a spear or walking staff', 'a large knife and some rope'],
      merchantIs: ['a member of a trading clan', 'a minor lord or lady', 'an enterprising trader', 'a member of a prominent family', 'of common birth', 'the real owner’s representative'],
      merchantLook: ['obtain a mysterious artifact', 'negotiate a trade contract', 'purchase goods', 'sabotage a rival merchant', 'secure a marriage', 'have a good time with somebody'],
      merchantCarry: ['a family heirloom', 'several inventories and invoices', 'some very valuable jewels', 'a compromising love letter'],
      travelerIs: ['an exile', 'a minstrel', 'a pilgrim', 'a sellsword', 'a storyteller', 'a treasure hunter'],
      travelerWant: ['the answer to a riddle', 'a long lost friend', 'the return of something stolen', 'revenge against a bitter rival', 'new adventures', 'steady work'],
      travelerLook: ['accomplices on a quest', 'an audience to entertain', 'someone to hear a sad tale', 'drinking companions']
    },
    patreonCharacters: {
      'Tylien Birchbottom': {
        firstName: 'Tylien',
        lastName: 'Birchbottom',
        /* name: "Tylien Birchbottom", */
        gender: 'man',
        age: 'about twenty four',
        ageYears: 24,
        hasClass: true,
        isThrowaway: false,
        race: 'halfling',
        dndClass: 'warlock',
        height: 'rather diminutive',
        heightRoll: 34,
        // weightRoll:
        weight: 'small and light',
        idle: ['gently whispering to his petrified mouse', 'writing something in a well-worn notebook'],
        background: 'outlander',
        hairColour: 'brown',
        hairType: 'wispy',
        scar: 'lashes on his back that have scarred over',
        physicalTrait: 'lashes on his back that have scarred over',
        trait: 'constantly forgets things, and has to write things down in his journal to be able to remember them properly.',
        greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave'],
        professionOrigin: "I've been making a decent living hunting game, selling the pelts to the blacksmith for spare change. I'm searching for a cure to my memory decay- every day, I have to write more things down. I need to learn why these things are happening to me... To find out who or whatever the beast of shadows that stalks me is.",
        backgroundOrigin: "I was kidnapped by a cult at the age of 14. They used me in a ritual to summon an ancient being known as 'the beast of shadows'. Half-way through, guards rescued me. Things got better, and then got a lot worse- I woke speaking tongues, and found myself losing time. As my powers grew, so did my lost time, so I started to keep a journal. Nowadays I can barely remember more than a week into my past now.",
        owner: 'owner',
        calmTrait: 'unintentionally funny',
        stressTrait: 'distant',
        vocalPattern: 'speaks rather quickly',
        note: "Tylien is Patreon supporter Jasher Drake's PC."
      },
      'Galder Fendt': {
        firstName: 'Galder',
        lastName: 'Fendt',
        name: 'Galder Fendt',
        gender: 'man',
        age: 'venerable',
        eyes: 'green',
        ageYears: 84,
        hasClass: true,
        isThrowaway: false,
        race: 'human',
        height: 'some five and a half feet',
        heightRoll: 66,
        weight: 'slightly pot-bellied',
        hairColour: 'brilliant white',
        scar: 'a faint cut of a Drow dagger from a long-forgotten skirmish',
        beard: 'a quite respectable beard',
        physicalTrait: 'a respectable beard',
        trait: "doesn't like to boast, and lets his enemies' perception of an unassuming old man be their downfall.",
        calmTrait: 'quiet',
        stressTrait: 'distant',
        vocalPattern: 'speaks slowly and deliberately',
        idle: [],
        dndClass: 'wizard',
        background: 'sage',
        professionOrigin: '',
        backgroundOrigin: '',
        note: "Galder Fendt is the wizard of /u/SomeHairyGuy, a Reddit user who suffered from advanced pelvic RMS. It's his wish that his character, Galder, be used in games around the world. #CreateAgainstCancer"
      },
      "Brugo Gul'Moth": {
        firstName: 'Brugo',
        lastName: "Gul'Moth",
        name: "Brugo Gul'Moth",
        gender: 'man',
        age: 'some eighteen years old',
        eyes: 'red',
        ageYears: 18,
        race: 'half-orc',
        height: 'tall, but with a bit of a slouch',
        heightRoll: 72,
        weight: 'muscular',
        weightRoll: 180,
        hairColour: 'shaved bald',
        hairType: 'shiny',
        scar: 'scars everywhere. Not even in cool places. Just everywhere. Hands, legs, arms, chest, back, neck, face, ears, knees, some too close to the groin.',
        beard: 'a quite respectable beard',
        physicalTrait: 'a respectable beard',
        inventory: 'a ritual wooden mask',
        trait: 'Brugo always tries to relate to people through pain, which is often not a great topic for conversation',
        stressTrait: 'begin to hurt himself when under stress. Scratching, hitting, and biting his lip. Never hurts himself with a weapon or to do permanent damage',
        calmTrait: 'stoic and pensive. Brugo likes to observe the world and people around him when he has a peaceful moment.',
        vocalPattern: 'speak in third person. <descriptive>Hello friend! Brugo has happy to see you! Brugo also have bad commonspeak. Is nature. What is "head-you-kay-shun?" Brugo understand your pain. See? This is where Brugo have scar. 12 years old, mountain lion. Brugo last 5 minutes before elders have to rescue. Claw pain was not bad. The true pain was shame. This why Brugo understand. Brugo is friends with you now? Hmm! (Hmm! = Brugo humming+grunting in a way that can be approval, "OK," excitement, or generally any positive affirmation that he cannot find the words to describe). It is his catch-phrase. "Hey Brugo, do you like ale?" "HMM!" "I almost died of hypothermia one time when I was young." "Hmm, Brugo know this pain." "My mother died when I was a baby." "Hmm, Brugo feel this third pain. Please explain third pain with more story, because Brugo have no mother. So Brugo cannot know this pain."</descriptive>',
        idle: ['Brugo stares at his blood-red, wooden ritual mask, which is carved with an incredible number of horrible and frightening scars.'],
        dndClass: 'monk',
        hasClass: true,
        isThrowaway: false,
        background: 'cultist',
        familyUnit: "Brugo's single father; Brugo has no clue who his mother was.",
        parentalLineage: "Brugo's father was an orc, and his mother a human. He doesn't know who she was, though.",
        professionOrigin: 'Brugo has always liked fight. Brugo discover that being punched is most common pain among outsiders. So Brugo decide that is friendliest profession. Brugo tried other pains but outsiders were lot more scared of them. Brugo get respect for good punches for curious reason.',
        backgroundOrigin: 'Brugo is Son of Gul, Leader of the Cult of Pain. Brugo is of age to be sent on the Pain Quest to discover new methods of pain. Brugo must etch a new scar in ritual mask for each new pain learned.',
        note: 'Brugo is the character of Patreon supporter NaviSaysListen.'
      }
    },
    roleplayQuestions: {
      create: () => {
        return setup.misc.roleplayQuestions.array.random()
      },
      array: [
        'what was a bad memory of your family?',
        'what was a good memory of your family?',
        'what is a faction you strongly agree with?',
        'what is a faction you strongly disagree with?',
        'what is a game you like to play?',
        'what was a happy moment from your childhood?',
        "what is a monster that you don't believe is real?",
        'is there a person you are afraid of?',
        "was there ever a person you couldn't help?",
        'is there a person you hate?',
        'is there someone you love?',
        'who do you respect?',
        'is there a person you want to meet?',
        'is there a place you would love to visit?',
        'what was a sad moment from your childhood?',
        'what was a time you embarrassed yourself?',
        'what was a time you got away with something?',
        'what was a time you got a sibling into trouble?',
        'what was a time you got really drunk?',
        'what was a time you hurt someone?',
        'what was a time you made something?',
        'what was a time you were afraid?',
        'what was a time you were heroic?',
        'what was a time you were powerless?',
        'what was a time you were proud of someone?',
        'what was a time you were smarter than everyone else?',
        'are you a dog person or a cat person?',
        'are you closer to your mother or your father?',
        'is there a food that you think is disgusting?',
        'what was something that happened on your last birthday?',
        'is there something you are ashamed of?',
        'is there something you are proud of doing?',
        'what is something you would love to do?',
        "what was the best dinner you've ever had?",
        'what was the best gift you ever received?',
        "what was the funniest thing you've ever seen?",
        'what are you looking forward to?',
        'what would you do if you were king?',
        'what would you do with a million gold pieces?',
        'where are your family now?',
        'who or what would you die for?',
        'who was your first kiss?',
        'why are you with the party?',
        'why would the party fall apart without you?',
        'can you share your favourite story?',
        'can you share your favourite thing about your hometown?',
        'what is your favourite way to relax?',
        'what has been your greatest achievement?',
        'what is your greatest fear?',
        'what was your last nightmare?'
      ]
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
          shrine.tippy = lib.createTippy(shrine.readout)
          shrine.tippyWord = lib.createTippyWord(shrine.tippy, 'shrine')
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
          'cat': town => {
            const cat = setup.misc.cat.create()
            return `You hear a soft meow, and see that there's a ${cat.tippyWord} sitting near the shrine, watching you.`
          },
          'hissingCat': town => {
            const cat = setup.misc.cat.create()
            return `You hear a hissing sound, and see that there's a ${cat.tippyWord} sitting near the shrine, almost guarding it.`
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
    bunny: {
      create: () => {
        const bunny = {
          size: setup.misc.bunny.size.random(),
          coat: setup.misc.bunny.coat.random(),
          favouriteFood: setup.misc.bunny.favouriteFood.random(),
          markings: setup.misc.bunny.markings.random()
        }
        bunny.readout = `This bunny is ${bunny.size}, and has a ${bunny.coat} coat, with ${bunny.markings}. It loves ${bunny.favouriteFood}.`
        bunny.tippyWord = lib.createTippyFull(bunny.readout, 'bunny')
        return bunny
      },
      size: ['all skin and bones', 'a little scrawny', 'pretty average in size', 'a little long and lanky', 'fat', 'extremely fat', 'teacup size', 'twice the normal size', 'absolutely massive'],
      coat: ['fluffy white', 'short and black', 'solid grey', 'grey and black spotted', 'chocolate', 'dappled grey', 'chocolate tortiseshell', 'grey tortiseshell', 'cream colored', 'dappled brown', 'frosted pearl', 'gray', 'sable', 'sandy', 'pearly'],
      favouriteFood: ['kale', 'arugula', 'rhubarb', 'carrots', 'celery', 'broccoli', 'lettuce', 'apple slices', 'onion leaves', 'potato leaves', 'asparagus'],
      markings: ['black toes on one foot', 'white toes on one foot', 'extremely long ears', 'a white tail', 'a black tail', 'no left ear', 'a scarred ear', 'a patch of missing fur', 'a twitchy pink nose', 'a black nose', 'a pink and black nose']
    },
    cat: {
      create: () => {
        const cat = {
          size: setup.misc.cat.size.random(),
          coat: setup.misc.cat.coat.random(),
          eyes: setup.misc.cat.eyes.random(),
          breedSkill: setup.misc.cat.breedSkill.random(),
          favouriteFood: setup.misc.cat.favouriteFood.random(),
          markings: setup.misc.cat.markings.random(),
          habit: setup.misc.cat.habit.random(),
          talent: setup.misc.cat.talent.random()
        }
        cat.readout = `This cat is ${cat.size}, and has a ${cat.coat} coat, with ${cat.eyes} and ${cat.markings}. This breed was bred ${cat.breedSkill}, and this cat has ${cat.habit}. It loves ${cat.favouriteFood}, and it is particularly good at ${cat.talent}`
        cat.tippyWord = lib.createTippyFull(cat.readout, 'cat')
        return cat
      },
      size: ['all skin and bones', 'a little scrawny', 'pretty average in size', 'a little long and lanky', 'fat', 'extremely fat'],
      coat: ['solid white', 'solid black', 'solid grey', 'grey and black spotted tabby', 'orange and black spotted tabby', 'grey and black striped tabby', 'orange and white striped tabby', 'orange and white striped tabby', 'grey and black blotched tabby', 'black and white bicolor', 'white and orange bicolor', 'calico'],
      eyes: ['yellow eyes', 'golden brown eyes', 'copper brown eyes', 'dull green eyes', 'bright green eyes', 'brilliant gold eyes', 'copper eyes', 'bright blue eyes', 'pale blue eyes', 'bluish grey eyes', 'one blue eye and one golden brown eye', 'one blue eye and one copper brown eye'],
      breedSkill: ['to hunt mice in granaries', 'to hunt mice in urban dwellings', 'to hunt rats aboard ships', 'to hunt rats and mice in barns', 'to hunt birds on rooftops', 'to hunt snakes and lizards', 'to sit on laps', "for no particular reason; it's ancestors were semi-feral village cats.", "for no particular reason; it's ancestors were semi-feral city cats.", "for no reason at all; it's ancestors were wild animals."],
      favouriteFood: ['warm milk', 'mice', 'baby mice', 'songbirds', 'pigeon', 'chicken', 'sardines', 'tuna', 'salmon', 'bacon'],
      markings: ['white or black toes on one foot', 'extremely long whiskers', 'a white or black tipped tail', 'no tail', 'a broken tail', 'a scarred ear', 'a patch of missing fur', 'a pink nose', 'a black nose', 'a pink and black nose'],
      habit: ['a habit of hiding whenever it first meets someone', 'a habit of begging for food', 'a mistrustful demeanor, even toward people it knows well', 'a playful demeanor, always chasing its tail', 'a curious demeanor, always sneaking up and pouncing on things', 'a noisy yowl when it is sad', 'a cute little meow when it is content', 'a habit of purring and rubbing against your leg', 'a habit of hissing at any who approach it', 'a friendly demeanor, provided you have food'],
      talent: ['scratching', 'hissing', 'purring', 'climbing trees', 'climbing walls', 'catching mice', 'catching fish', 'catching birds', 'avoiding you', 'ignoring you']
    },
    horse: {
      create: () => {
        const horse = {
          gender: setup.misc.horse.gender.random(),
          coat: setup.misc.horse.coat.random(),
          eyes: setup.misc.horse.eyes.random(),
          type: setup.misc.horse.type.random(),
          quality: setup.misc.horse.quality.random(),
          flaw: setup.misc.horse.flaw.random(),
          flawSeverity: setup.misc.horse.flawSeverity.random(),
          feature: setup.misc.horse.feature.random(),
          personality: setup.misc.horse.personality.random(),
          behaviour: setup.misc.horse.behaviour.random()
        }
        horse.readout = `This horse is ${horse.gender}${+' '}${horse.type}, and is ${horse.quality}. It has a ${horse.colour} coat, with ${horse.feature} and ${horse.eyes}. It is ${horse.flaw}, which is ${horse.flawSeverity}. It is ${horse.personality}, and ${horse.behaviour}.`
        horse.tippyWord = lib.createTippyFull(horse.readout, 'horse')
        return horse
      },
      type: ['pony; stout and suitable for small riders and narrow trails', 'dray; reliable and suitable for pulling plows and wagons', 'garron; hardy and well-suited for harsh weather and terrain', 'palfrey; tireless and well-suited for long journeys', 'rounsey; medium-sized and suitable for riding or for battle', 'courser; swift and well-suited for hunting or for battle', 'a charger; solid and suitable for jousting or for battle', 'destrier; huge and well-suited for jousting or for battle'],
      gender: ['a colt', 'a young gelding', 'an old gelding', 'a stallion', 'a yearling', 'a filly', 'a young mare', 'an old mare'],
      quality: ['a stot; this animal is completely useless', 'a canner; this animal is good for nothing but meat', 'a hack; this animal is mediocre, but useful', 'a hard keeper; this animal requires extra food to maintain its strength and endurance .', 'an easy keeper; this animal requires little food to maintain its strength and endurance', 'of middling quality; acceptable for its breed', 'of high quality; a very good animal for its breed', 'of the highest quality; a paragon of its breed'],
      colour: ['bay', 'black', 'buckskin', 'chestnut', 'gray', 'piebald', 'roan', 'white'],
      eyes: ['light brown eyes', 'brown eyes', 'dark brown eyes', 'green eyes', 'hazel eyes', 'amber eyes', 'brown and blue eyes', 'blue eyes'],
      flaw: ['pigeon toed', 'splay footed', 'mule footed (narrow feet)', 'mushroom footed (large feet)', 'barrel chested', 'narrow chested', 'steep rumped', 'slab sided'],
      flawSeverity: ['imperceptible to all but the most expert horsemasters and riders', 'barely noticeable', "not a hindrance to the horse's performance", 'something the horse can make up for with its other qualities', 'something that sufficient training can overcome', 'something that makes riding the horse a little difficult', 'something that makes riding the horse a little embarrassing', "a severe hindrance to the horse's performance"],
      feature: ['one eye that is blind or nearly blind', 'pig eyes (small eyes)', 'large ears', 'small ears', 'a wry tail (tail carried to one side)', 'a clipped tail', 'a scar above one forehoof', 'a shaggy mane'],
      personality: ['eager to please', 'social', 'gentle', 'aloof', 'unimpressed', 'fearful', 'challenging', 'foul-tempered'],
      behaviour: ['nickers when anxious', 'whinnies when anxious', 'bucks when impatient', 'stamps when impatient', 'froths when tired', 'snorts when tired', 'stamps when content', 'snorts when content']
    },
    wolf: {
      create: () => {
        const wolf = {
          colour: setup.misc.wolf.colour.random(),
          markings: setup.misc.wolf.markings.random(),
          eyes: setup.misc.wolf.eyes.random(),
          manner: setup.misc.wolf.manner.random(),
          prey: setup.misc.wolf.prey.random(),
          tactics: setup.misc.wolf.tactics.random(),
          packStatus: setup.misc.wolf.packStatus.random(),
          habitat: setup.misc.wolf.habitat.random()
        }
        wolf.readout = `This wolf is ${wolf.colour}, and has ${wolf.markings} coat, with ${wolf.eyes}. It is ${wolf.manner}, and is ${wolf.packStatus}. This breed thrives in ${wolf.habitat}. It prefers to ${wolf.tactics}, and if given the choice, it prefers ${wolf.prey}`
        wolf.tippy = lib.createTippy(wolf.readout)
        wolf.tippyWord = lib.createTippyWord(wolf.tippy, 'wolf')
        return wolf
      },
      colour: ['black', 'dark grey', 'dark brown', 'black and brown', 'black and grey', 'pale brown', 'brown and grey', 'reddish brown', 'sandy brown', 'white'],
      markings: ['white or pale fur on each paw', 'white or pale fur on one paw', 'white or pale fur around the face and muzzle', 'black or dark fur around the face and muzzle', `a banded pattern on its back${['dark grey', 'pale grey', 'reddish brown', 'sandy brown'].random()}`, 'lighter fur on its belly', 'darker fur on its belly', `a distinct, ${['white', 'pale grey'].random()} ${['arrowhead', 'pair of eye-like spots', 'hourglass', 'star'].random()} on its chest`, `a scar from a past injury on its ${['flank', 'foreleg', 'hindleg', 'snout', 'eye', 'ear'].random()}`, 'no obvious markings'],
      eyes: ['reflective and black', 'pale grey', 'brownish grey', 'dark grey', 'dark brown', 'golden brown', 'light brown', 'red', 'yellow', 'green', 'pale blue', 'dark blue'],
      manner: ['panting lightly', 'panting heavily, its tongue lolling out of its mouth', 'salivating', 'hungrily licking its chops', 'yawning', 'watching curiously', 'watching warily', 'pacing nervously', 'whining softly', 'watching with ears perked and hackles raised', 'growling low, giving warning', 'standing perfectly still, ready to lunge'],
      tactics: ['pick off weak, easy prey', 'stalk its prey until the opportune time to strike', 'harrying its prey over long distances until the prey is exhausted', 'chase its prey to a place where its packmates are waiting in ambush', 'wait in ambush while one or more of its packmates chases the prey to it', 'choose its prey and to run it down'],
      prey: ['rabbit', 'squirrel', 'pheasant', 'goose', 'deer', 'sheep', 'chicken', 'carrion', 'human flesh', "scraps from a roadside inn's refuse heap"],
      packStatus: ['the alpha of a large pack', 'the alpha of a small pack', 'the beta of its pack, patiently waiting for the alpha to fail', 'the beta of its pack, constantly challenging the alpha', 'somewhere in the middle of the pack order, looking for opportunities to ascend', 'somewhere in the middle of the pack order, satisfied to follow the alpha', 'the omega of a large pack', 'the omega of a small pack', 'one of a mated pair', 'a lone predator'],
      habitat: ['in canyonlands', 'in grassy hills', 'in forested hills', 'on grassy plains', 'in ancient forests', 'in young forests', 'in rocky deserts', 'in the foothills of mountains', 'in mountain passes', 'in frozen lands']
    },
    ogre: {
      create: () => {
        const ogre = {
          hair: setup.misc.ogre.hair.random(),
          type: setup.misc.ogre.type.random(),
          eyes: setup.misc.ogre.eyes.random(),
          skill: setup.misc.ogre.skill.random(),
          quirk: setup.misc.ogre.quirk.random(),
          carry: setup.misc.ogre.carry.random(),
          look: setup.misc.ogre.look.random(),
          misfortune: setup.misc.ogre.misfortune.random()
        }
        ogre.readout = `This ogre is a ${ogre.type}, and carries ${ogre.carry}. It's hair is ${ogre.hair}, and its eyes are ${ogre.eyes}, with ${ogre.eyes}. It is particularly good at ${ogre.skill}, and frequently ${ogre.quirk}. A long time ago, it was ${ogre.misfortune}. Currently, it is looking for a ${ogre.look}`
        ogre.tippy = lib.createTippy(ogre.readout)
        ogre.tippyWord = lib.createTippyWord(ogre.tippy, 'ogre')
        return ogre
      },
      hair: ['long and stringy', 'wispy and thin', 'dark and matted', 'a tangled mess', 'cut unevenly', 'gone; the ogre is bald'],
      eyes: ['mismatched colors', 'mismatched sizes', 'dark and menacing', 'wide and vacant', 'scarred; one eye is missing', 'crossed'],
      type: ['berserker', 'chanter', 'hunter', 'scavenger', 'thug', 'warrior'],
      skill: ['crushing skulls', 'breaking wooden doors', 'bending metal bars', 'roasting meat', 'frightening people', 'sitting very, very still'],
      quirk: ['scratches itself', 'gets distracted by food', 'guffaws', 'loses its temper', 'picks its teeth', 'yawns'],
      carry: ['a sharp spear', 'a heavy club', 'a spiked club', 'a sackful of trinkets', 'a necklace of bones', 'a string of severed ears'],
      look: ['easy meal', 'fatty meal', 'steady meal ticket', 'fight it can win', 'shiny bauble', 'object its chief asked for, but the ogre can’t remember what it was'],
      misfortune: ['pressed into service in an orkish army', 'tricked into doing some dirty work by some goblins', 'charmed by a witch', 'badly burned in a fire', 'imprisoned in a cold, dark cell', 'bested by a rival for the affections of another ogre']
    },
    spider: {
      create: () => {
        const spider = {
          colour: setup.misc.spider.colour.random(),
          markings: setup.misc.spider.markings().random(),
          eyes: setup.misc.spider.eyes.random(),
          mouth: setup.misc.spider.mouth.random(),
          poison: setup.misc.spider.poison.random(),
          tactics: setup.misc.spider.tactics.random(),
          webs: setup.misc.spider.webs.random(),
          habitat: setup.misc.spider.habitat.random()
        }
        spider.readout = `This spider is ${spider.colour}, and has ${spider.markings}, with ${spider.eyes} and a mouth ${spider.mouth}. This breed thrives in ${spider.habitat}, and their poison causes ${spider.poison}.Their webs are ${spider.webs}. It prefers to ${spider.tactics}`
        spider.tippy = lib.createTippy(spider.readout)
        spider.tippyWord = lib.createTippyWord(spider.tippy, 'spider')
        return spider
      },
      colour: ['black', 'dark grey', 'dark brown', 'black and brown', 'black and grey', 'pale brown', 'brown and grey', 'reddish brown'],
      markings: () => ['pale banding on its legs', 'dark banding on its legs', `bright ${['orange', 'red', 'white', 'yellow'].random()} banding on its legs`, 'pale stripes down its abdomen', 'dark stripes down its abdomen', `a distinct, crimson ${['arrowhead', 'pair of eye-like spots', 'hourglass', 'star'].random()} on its abdomen`, `a distinct, ${['black', 'dark grey'].random()} ${['arrowhead', 'pair of eye-like spots', 'hourglass', 'star'].random()} on its abdomen`, 'no obvious markings'],
      eyes: ['dull and black', 'reflective and black', 'dark grey, almost black', 'dark red', 'bright red', 'pearly white'],
      mouth: ['flanked by fangs, dripping venom', 'flanked by hooked fangs', 'flanked by hairy chelicerae, each ending in a sharp fang', 'flanked by chelicerae, covered in hair that hides any fangs', 'hungrily opening and closing', 'yawning open'],
      poison: ['paralysis', 'loss of consciousness', 'nausea', 'headache', 'loss of coordination', 'blindness', 'dizziness', 'shortness of breath'],
      tactics: ['pick off weak, easy prey', 'pursue its prey until the opportune time to strike', 'lay web traps and wait', 'incapacitate prey, wrap it in webbing and carry it off to its larder', 'ambush prey in territory the spider knows well', 'poison its prey and then retreat, following the prey until it falls'],
      webs: ['sheet-like webs', 'webs with radial symmetry', 'webs with triangular symmetry', 'webs with hexagonal symmetry', 'webs with irregular shapes', 'almost no webs; the spider is constantly on the move and on the hunt'],
      habitat: ['in caverns', 'on cliff-sides', 'on the forest floor', 'in grasslands', 'in jungles', 'in rocky deserts', 'in rotting logs', 'in shallow burrows', 'in swamps', 'in treetops']
    },
    cavern: {
      entrance: ['wide and tall, letting much daylight into the entry chamber', 'a wide sinkhole', 'an easy to spot, narrow passage', 'a steep, slippery sloped tunnel', 'a man-made tunnel', 'a collapsed tunnel, impassable without excavation', 'marked with several warning signs', 'hidden by some boulders', 'hidden by a waterfall', 'hidden by a rocky overhang', 'hidden by a hillock', 'hidden by a briar patch', 'hidden by a curtain of moss', 'hidden by some enormous ancient tree roots', 'hidden by some overgrown vines', 'up a cliff face', 'down a deep hole', 'in an underwater tunnel'],
      landmark: ['a trickle of water flowing down the walls and across the floor', 'an underground lake of potable water', 'a pool of stagnant water', 'a natural bridge over a chasm', 'a narrow chasm with walls close enough to climb between', 'a deep chasm with no bottom in sight', 'a shaft in the ceiling with no light coming from it', 'a shaft in the ceiling with dim light coming from it', 'a group of stalagmites arranged in a circle', 'an arrangement of two large stalactites and two large stalagmites, reminiscent of fangs in a yawning mouth', 'a pair of natural columns', 'a large stalactite that has broken off from the ceiling and fallen to the floor', 'an array of many small stalactites spreading across the ceiling', 'a damp wall covered in soft mold', 'a recess in the wall, covered in slimy mold', 'a large patch of glowing fungus', 'a large patch of small mushrooms', 'a group of enormous mushrooms', 'a large cavern with a strong echo', 'a claustrophobic tunnel with a low ceiling'],
      feature: ['a cache of abandoned, decrepit mining equipment', 'some old dry bones', 'many bones underfoot', 'evidence of a recent encampment', 'an enormous spider web', 'a wide slippery patch of mold on the floor', 'the clatter of rocks falling', 'loose stones underfoot', 'an unstable ceiling', 'a distant sound—a scream, hammers at work, footsteps, or drums', 'the name of a previous traveler carved into a wall', 'several ancient runes carved into the wall'],
      walls: ['slightly damp', 'dripping wet', 'slick with mold', 'covered in soft fungi', 'dry as a bone', 'rough and dry', 'dry and smooth', 'jagged', 'pockmarked', 'crumbling, with loose bits flaking off', 'crumbling, with large chunks falling off at a touch', 'covered in an unidentifiable slime'],
      ceiling: ['uncomfortably close to your head', 'covered in stalactites (watch your head!)', 'smooth as glass', 'rough and jagged', 'connected to the floor by natural columns', 'so high it’s difficult to see'],
      hazards: ['a colony of poisonous mushrooms', 'a patch of toxic mold', 'the ceiling caves in', 'several rocks tumble down a sloped wall', 'the floor is very slippery', 'your foot misses the floor as you step into a pit or chasm'],
      create: base => {
        const cavern = {
          noun: 'cavern',
          entrance: setup.misc.cavern.entrance.random(),
          landmark: setup.misc.cavern.landmark.random(),
          feature: setup.misc.cavern.feature.random(),
          walls: setup.misc.cavern.walls.random(),
          ceiling: setup.misc.cavern.ceiling.random(),
          hazards: setup.misc.cavern.hazards.random(),
          ...base
        }
        cavern.readout = `The ${cavern.noun} entrance is ${cavern.entrance}. As you enter, you see ${cavern.landmark}, and ${cavern.feature}. The walls are ${cavern.walls}, and the ceiling above is ${cavern.ceiling}.`
        return cavern
      }
    },
    tree: {
      create: (town, biome, base) => {
        biome = biome || ['forest', 'desert', 'mountain', 'plains'].random()
        const tree = {
          species: setup.misc.tree.biome[biome].species.random(),
          size: setup.misc.tree.biome[biome].size.random(),
          feature: setup.misc.tree.biome[biome].feature.random(),
          ...base
        }
        tree.readout = `The ${tree.species} tree is ${tree.size} ${tree.feature}`
        tree.tippy = lib.createTippy(tree.readout)
        tree.tippyWord = lib.createTippyWord(tree.tippy, 'tree')
        return tree
      },
      biome: {
        forest: {
          species: ['oak', 'oak', 'oak', 'pine', 'maple', 'birch', 'ash', 'elm', 'fir', 'spruce', 'sycamore', 'alder', 'cypress', 'yew'],
          // a tree that is _______
          size: [
            'positively huge.',
            'as thick as a barrel.',
            'so tall that you have to crane your neck back to see the top of it.',
            'at least a hundred years old, with an impressive number of branches.',
            'huge, even compared to the other trees in the forest.',
            'as thick as a man, and twice as tall.',
            'half as thick as a man. It looks somewhat weedy.',
            'comparatively young; many of the other trees nearby are taller.',
            'little more than a stump, save for one limb which keeps its tree status.',
            'rather tall, but not very thick; it sways in the wind in such a way that it makes you a little uncomfortable.',
            'barely as tall as a man; this was relatively recently planted, and has not had time to grow.'
          ],
          feature: [
            'Near the base, one can see some initials have been etched into the bark.',
            'It is slightly stunted; you can see some burn marks on it.',
            'It is slightly mangled, with a couple limbs missing.',
            'It has some scratch marks near the base of it.',
            'It looks like it has been used as a scratching post for a large creature.',
            'There are some feasome looking claw marks halfway up the trunk.'
          ]
        },
        mountain: {
          species: ['oak', 'oak', 'oak', 'pine', 'maple', 'birch', 'ash', 'elm', 'fir', 'spruce', 'sycamore', 'alder', 'cypress', 'yew'],
          // a tree that is _______
          size: [
            'positively huge',
            'as thick as a barrel.',
            'so tall that you have to crane your neck back to see the top of it.',
            'at least a hundred years old, with an impressive number of branches.',
            'huge, even compared to the other trees on this side of the mountain.',
            'as thick as a man, and twice as tall.',
            'half as thick as a man. It looks somewhat weedy.',
            'comparatively young; many of the other trees nearby are taller.',
            'slightly stunted; you can see some burn marks on it.',
            'slightly mangled, with a couple limbs missing.',
            'little more than a stump, save for one limb which keeps its tree status.',
            'rather tall, but not very thick; it sways in the wind in such a way that it makes you a little uncomfortable.',
            'barely as tall as a man; this was relatively recently planted, and has not had time to grow.'
          ],
          feature: [
            'Near the base, one can see some initials have been etched into the bark.',
            'It is slightly stunted; you can see some burn marks on it.',
            'It is slightly mangled, with a couple limbs missing.',
            'It has some scratch marks near the base of it.',
            'It looks like it has been used as a scratching post for a large creature.',
            'There are some feasome looking claw marks halfway up the trunk.',
            'You can see some marks where climbing gear had been forced into the tree a long time ago.',
            'You can see some bird has made this tree its home.',
            'The crunch of egg shells under foot tell you that this was once home to a bird nest.'
          ]
        },
        desert: {
          species: ['oak', 'oak', 'oak', 'pine', 'maple', 'birch', 'ash', 'elm', 'fir', 'spruce', 'sycamore', 'alder', 'cypress', 'yew'],
          // a tree that is _______
          size: [
            'as thick as a barrel.',
            'so tall that you have to crane your neck back to see the top of it.',
            'at least a hundred years old, with an impressive number of branches.',
            'huge, but even more impressive with no other trees in sight.',
            'as thick as a man, and twice as tall.',
            'half as thick as a man. It looks somewhat weedy due to the poor conditions that it has been growing in.',
            'comparatively young; it looks to have been planted by a traveler.',
            'little more than a stump, save for one limb which keeps its tree status.',
            'rather tall, but not very thick; it sticks out like a sore thumb against the flat horizon.',
            'barely as tall as a man; this was relatively recently planted, and has had neither the time nor water to grow.'
          ],
          feature: [
            'Near the base, one can see some initials have been etched into the bark.',
            'It is slightly stunted; you can see some burn marks on it.',
            'There are some nasty scorch marks on the side of it.',
            'It is slightly mangled, with a couple limbs missing.',
            'It has some scratch marks near the base of it.',
            'It looks like it has been used as a scratching post for a large creature.',
            'There are some feasome looking claw marks halfway up the trunk.',
            'You can see some marks where climbing gear had been forced into the tree a long time ago for a better view of the horizon.',
            'You can see some bird has made this tree its home.',
            'The crunch of egg shells under foot tell you that this was once home to a bird nest.'
          ]
        },
        plains: {
          species: ['oak', 'oak', 'oak', 'pine', 'maple', 'birch', 'ash', 'elm', 'fir', 'spruce', 'sycamore', 'alder', 'cypress', 'yew'],
          // a tree that is _______
          size: [
            'as thick as a barrel.',
            'so tall that you have to crane your neck back to see the top of it.',
            'at least a hundred years old, with an impressive number of branches.',
            'huge, even compared to the other trees on the horizon.',
            'as thick as a man, and twice as tall.',
            'half as thick as a man. It looks somewhat weedy.',
            'comparatively young; it looks to have been planted by a traveler.',
            'little more than a stump, save for one limb which keeps its tree status.',
            'rather tall, but not very thick; it sways in the wind in such a way that it makes you a little uncomfortable.',
            'barely as tall as a man; this was relatively recently planted, and has not had time to grow.'
          ],
          feature: [
            'Near the base, one can see some initials have been etched into the bark.',
            'It is slightly stunted; you can see some burn marks on it.',
            'It is slightly mangled, with a couple limbs missing.',
            'It has some scratch marks near the base of it.',
            'It looks like it has been used as a scratching post for a large creature.',
            'There are some feasome looking claw marks halfway up the trunk.',
            'You can see some marks where climbing gear had been forced into the tree a long time ago.',
            'You can see some bird has made this tree its home.',
            'The crunch of egg shells under foot tell you that this was once home to a bird nest.'
          ]
        }
      }
    },
    cabin: {
      create: (town, base, biome) => {
        const cabin = {
          material: ['wooden', 'wooden', 'wooden', 'stone'].random(),
          wordNoun: 'cabin',
          feature: setup.misc.cabin.feature.random(),
          insideFeature: setup.misc.cabin.insideFeature.random(),
          size: '',
          cleanliness: '',
          bedCleanliness: '',
          roll: {
            size: random(1, 100),
            cleanliness: random(1, 100),
            bedCleanliness: random(1, 100)
          },
          ...base
        }
        cabin.size = ''
        cabin.cleanliness = ''
        cabin.bedCleanliness = ''

        const rollDataVariables = ['size', 'cleanliness', 'bedCleanliness']
        for (const propName of rollDataVariables) {
          lib.defineRollDataGetter(cabin, setup.misc.cabin.rollData, propName)
        }

        cabin.readout = `The ${cabin.material} ${cabin.wordNoun} is ${cabin.size}. ${cabin.feature} Inside, it is ${cabin.cleanliness}. ${cabin.insideFeature} There is a bed, which is ${cabin.bedCleanliness}.`
        cabin.tippy = lib.createTippy(cabin.readout)
        cabin.tippyWord = lib.createTippyWord(cabin.tippy, cabin.wordNoun)
        return cabin
      },
      feature: [
        'The door has deep scratch marks in it.',
        'There is a pair of large boots by the door.',
        'The steps leading to the door are rather dirty.',
        'The chimney has a bird nesting in it.',
        'The windows are rather grotty, with cobwebs all over.',
        'There is a rusty shovel leaning against the door.',
        'There is an empty water bowl next to the door.'
      ],
      insideFeature: [
        'There are seemingly hundreds of dishes stacked, in desperate need of a clean.',
        'There is a toy pram in the corner of the room.',
        'A decorative tapestry is hanging up on one of the walls.',
        'There is a rather impressive bookcase in the corner of the room.',
        'There is a hunk of bread lying on the table.',
        'The room feels cramped, with tables and chairs cluttering everything up.',
        'The room feels spacious, with a single table and chair in the corner.',
        'There is a huge cast iron pot sitting in the fireplace.',
        'Dried herbs sit in bunches on the table.'
      ],
      rollData: {
        size: [
          [95, 'huge'],
          [80, 'quite large'],
          [70, 'large'],
          [60, 'spacious'],
          [50, 'relatively spacious'],
          [40, 'average sized'],
          [30, 'somewhat cramped'],
          [20, 'small'],
          [10, 'tiny'],
          [0, 'extremely cramped']
        ],
        cleanliness: [
          [80, 'absolutely spotless'],
          [75, 'spotless'],
          [70, 'nice and well cleaned'],
          [60, 'hygienic'],
          [50, 'decently hygienic'],
          [40, 'slightly grubby'],
          [30, 'quite dirty'],
          [20, 'filthy'],
          [10, 'rather filthy'],
          [0, 'absolutely putrid']
        ],
        bedCleanliness: [
          [90, 'perfectly prepared, with fresh sheets and a lemon scent in the air of the room'],
          [80, 'recently prepared and well cleaned'],
          [70, 'freshly cleaned and neat'],
          [60, 'tidy and neat'],
          [50, 'reasonably clean'],
          [40, 'somewhat tidy'],
          [30, 'disgusting'],
          [20, 'teeming with rats'],
          [10, 'rather filthy'],
          [0, 'festering with bugs']
        ]
      }
    },
    town: {
      create: town => {
        return lib.weightedRandomFetcher(town, setup.plothooks, null, setup.misc.town.type.event)
      },
      type: {
        event: (town, arg) => {
          // console.log('Town event callback function')
          // console.log(arg)
          return arg.type.includes('event')
        },
        paper: (town, arg) => {
          // console.log('Town event callback function')
          // console.log(arg)
          return arg.type.includes('paper')
        }
      }
    },
    road: {
      create: (town, base) => {
        const type = ['trail', 'path', 'path', 'road', 'road', 'road'].random()
        const encounterKey = setup.misc.road[type].encounters.random()
        console.log(encounterKey)
        const road = {
          type: setup.misc.road[type].type.random(),
          traffic: setup.misc.road[type].traffic.random(),
          encounter: setup.misc.encounters[encounterKey](town),
          ...base
        }
        return `${['You walk along the ', 'You trudge along the ', 'Making your way across the countryside on the ', 'You make your way along the ', 'You walk along the '].random() + road.type}, ${road.traffic}${[[' until you come across ', ' and encounter ', ' and cross paths with ', ' and come across ', ' and see in the distance ', ' and spy in the distance '].random(), `. ${['Turning the corner, you come across ', 'Then, in the distance, you see ', 'You walk for a while, and then come across ', 'You walk for a few more minutes, until you come across ', 'You walk along for a while, and then encounter '].random()}`].random()}${road.encounter}`
      },
      trail: {
        type: ["hunter's trail", 'animal trail', 'dirt trail'],
        traffic: ['which seems to have been recently used', 'which is overgrown with weeds', 'that has blood spatters in the grass which indicate a recent hunt', 'with canopy trees providing shade overhead'],
        encounters: [
          'the border patrol',
          'a travelling peddler',
          'a hunting party',
          'another adventuring party',
          'some escaped convicts',
          'a group of bandits operating a toll road',
          'an itinerant priest',
          'a dead body',
          'a small merchant caravan',
          'a diseased animal corpse',
          'a group of dwarves',
          'a solitary hunter',
          'a handful of farmers',
          'a solitary bandit',
          'an injured knight',
          'a party of raiders',
          'a ranger',
          '[monster encounter]',
          '[monster encounter]',
          'some herdsmen',
          'a band of robbers',
          'some particularly dense overgrowth',
          'some tribesmen',
          'a hermit',
          'the undead'
        ]
      },
      path: {
        type: ['simple path', 'overgrown dirt path', 'riding path'],
        traffic: ['which looks to be desolate and abandoned', 'dotted with hoofprints', 'with heavy bootprints in the dirt', 'with the occassional burnt out campfire on the side'],
        encounters: [
          'the road wardens', 'a merchant caravan', 'a work gang heading home', 'another adventuring party', 'some escaped convicts', 'some of the local militia', 'a pair of travelling clerics', 'some graverobbers', 'a traveling peddler', 'some farmers', 'a plague-infested cabin', 'a hunting party', 'some farmers', 'some bandits', 'an adventurer on a horse', 'a band of mercenaries', 'a solitary troubador', 'a mounted messenger', 'some beserkers', 'some robbers', '[monster encounter]', 'some tribesmen', 'a caravan of gypsies', 'the undead'
          // 'some raiders'
        ]
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
        ],
        encounters: [
          'a marching army', 'a merchant caravan', 'a wedding party', 'another adventuring party', 'a group of pilgrims', 'some escaped convicts', 'a funeral procession', 'a plague cart', 'some farmers', 'a knight errant', 'a wounded knight', 'a lone horse, trotting the other way', 'a band of mercenaries', 'a traveling theatre troupe', 'a courier', 'some beggars', 'a caravan of slavers', 'a traveling lady', 'some robbers', 'a caravan of gypsies', 'a lone zombie'
        ]
      }
    },
    desert: {
      create: town => {
        const biome = 'desert'
        let encounter
        let encounterKey
        const encounterArray = []
        if (random(1, 100) >= 50) {
          const potentialKeys = Object.keys(setup.misc.locations)
          potentialKeys.forEach(function (location) {
            if (setup.misc.locations[location].available.includes(biome)) {
              encounterArray.push(location)
            }
          })
          encounterKey = encounterArray.random()
          console.log('Location: ', encounterKey)
          encounter = setup.misc.locations[encounterKey].function(town, biome)
        } else {
          encounterKey = setup.misc.forest.encounters.random()
          console.log(encounterKey)
          encounter = setup.misc.encounters[encounterKey](town)
        }
        console.log(encounterKey)
        return `${['While', 'As', 'After a while, as'].random()} you ${['traverse', 'trudge along', 'travel across', 'walk across'].random()} the desert, you see ${setup.misc.desert.landmark.random()}. You notice ${setup.misc.desert.feature.random()}. Up ahead, you see ${encounter}`
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
      encounters: [
        'a strange hermit',
        'a lost traveler',
        'a poor nomad',
        'a suspicious miner',
        'a barbarian hunter',
        'a mounted barbarian scout',
        'an orkish war band',
        'the ghost of a traveler',
        'a poisonous snake',
        'a giant spider',
        'a giant scorpion',
        'a giant centipede',
        'a pack of jackals',
        'a hungry jackalwere',
        'a giant lizard',
        'a pair of gnolls',
        'a pair of bandits',
        'an hobgoblin scout',
        'a roc on the wing',
        'a wyvern on the wing'
      ],
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
        let encounter
        let encounterKey
        const encounterArray = []
        if (random(1, 100) >= 50) {
          const potentialKeys = Object.keys(setup.misc.locations)
          potentialKeys.forEach(function (location) {
            if (setup.misc.locations[location].available.includes(biome)) {
              encounterArray.push(location)
            }
          })
          encounterKey = encounterArray.random()
          console.log('Location: ', encounterKey)
          encounter = setup.misc.locations[encounterKey].function(town, biome)
        } else {
          encounterKey = setup.misc.forest.encounters.random()
          console.log(encounterKey)
          encounter = setup.misc.encounters[encounterKey](town)
        }
        console.log(encounterKey)
        return `${['While', 'As', 'After a while, as'].random()} you ${['traverse', 'trudge along', 'travel across', 'walk on'].random()} the mountain, you see ${setup.misc.mountain.landmark.random()}. You notice ${setup.misc.mountain.feature.random()}. Up ahead, you see ${encounter}`
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
      encounters: ['a lost prospector', 'a solemn warrior', 'an angry wraith', 'a malevolent ghost', 'some bandits', 'a seasoned mountaineer', 'a paranoid shapeshifter', 'an ancient vampire', 'several homeless dwarves', 'an eccentric witch', 'a contemplative monk', 'a mountain lion', 'a pair of harpies', 'a flock of ravens', 'several orc raiders', 'a hunting peryton', 'a mated pair of manticores', 'a trio of monstrous trolls', 'a clan of stone giants at rest', 'a roc tearing apart some prey'],
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
        let encounter
        let encounterKey
        const encounterArray = []
        if (random(1, 100) >= 50) {
          const potentialKeys = Object.keys(setup.misc.locations)
          potentialKeys.forEach(function (location) {
            if (setup.misc.locations[location].available.includes(biome)) {
              encounterArray.push(location)
            }
          })
          encounterKey = encounterArray.random()
          console.log('Location: ', encounterKey)
          encounter = setup.misc.locations[encounterKey].function(town, biome)
        } else {
          encounterKey = setup.misc.forest.encounters.random()
          console.log(encounterKey)
          encounter = setup.misc.encounters[encounterKey](town)
        }
        console.log(encounterKey)
        return `${['While', 'As', 'After a while, as'].random()} you ${['traverse', 'trudge along in', 'travel through', 'walk through'].random()} the forest, you see ${setup.misc.forest.landmark.random()}. You notice ${setup.misc.forest.feature.random()}. Up ahead, you see ${encounter}`
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
      encounters: ['a large bear', 'a bear cub', 'a giant spider', 'several giant spiders', 'a pack of wolves', 'a lone wolf', 'a hunting cat', 'a wailing ghost', 'a malevolent ghost', 'a pair of goblin scouts', 'a goblin patrol', 'an ogre', 'a pair of outlaws', 'a beggarly bandit', 'an old witch', 'a curious herbalist', 'a lost child', 'a woodcutter busy with the day’s work', 'an intrepid hunter', 'an elvish ranger'],
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
