setup.initTavernData = () => {
  setup.tavern = {
    games: [
      {
        name: 'Passe-dix',
        type: 'chance game',
        description: "You see <<profile $npcs[$building.gamer.key] $building.gamer.descriptor true>> take three six-sided dice, and then roll them. <<print $building.gamer.heshe.toUpperFirst()>> roars with pleasure as the dice come to a total of <<print random(11, 18)>>, and grabs $building.gamer.hisher winnings from <<profile $npcs[$building.gameBanker.key] $building.gameBanker.descriptor true>> who is holding a carrot. The dice moves to the next player, and the $building.gameBanker.weight <<print $building.gameBanker.raceSingular>> with the carrot (which clearly signifies who is acting as the banker) hands it to the next person in the circle, and everyone that's playing hands the new banker some coins. The player then rolls the dice, but only rolls a total of <<print random(5, 9)>>, which is met with <<print ['boos and jeering', 'disappointed sighs', 'extreme disappointment', 'good-natured teasing'].random()>>.",
        rules: 'Passe-dix is played with three dice. There’s always a banker, and the number of players is unlimited. The first gamer rolls: every time he throws UNDER ten he (and all the other players in the game) lose the specified stake, which goes to the banker. Every time he rolls ABOVE ten (or PASSES TEN–whence the name of the game), the banker must return double the stake to all the players in the game. After three losses of the roller (no matter how many wins), the roller position is passed to another gamer in the circle. The banker changes after each roll.',
        bet: random(15, 25)
      },
      {
        name: 'Highest Points',
        type: 'chance game',
        description: '<<profile $npcs[$building.gameBanker.key] $building.gameBanker.descriptor true>>, and <<profile $npcs[$building.gamer.key] $building.gamer.descriptor true>> are sitting in the middle of the room with two whittled dice each. They chuck <<money $buildinggames.bet>> on the table, then roll, and the one that rolled higher grins as they grab the copper.',
        rules: '2 six-sided dice, 2 players: each roll both dice and the highest sum wins.',
        bet: random(2, 5)
      },
      {
        name: 'Cross and Pile',
        type: 'chance game',
        description: '<<profile $npcs[$building.gamer.key] $building.gamer.descriptor true>> and <<profile $npcs[$building.gameBanker.key] $building.gameBanker.descriptor true>> sit around a large table, and take turns flipping a coin. As the coin flies mid-air, the $building.gamer.weight $building.gamer.race calls out the result, and guesses correctly, grabbing $building.gamer.hisher meager winnings.',
        rules: 'Two players choose each side of a coin, and then the coin is flipped. The top side after flipping the coin is the one that wins.',
        bet: random(7, 14)
      },
      {
        name: 'Thimble Rig',
        type: 'guessing game',
        description: "<<profile $npcs[$building.gameBanker.key] $building.gameBanker.descriptor true>>'s quick hands, a pair of eyes belonging to a <<profile $npcs[$building.gamer.key] $building.gamer.descriptor>> watching carefully, a deal board, three thimbles, and a pepper-corn sit in the corner, along with a crowd of people watching the two. The game they play around the table with these curious articles is a sort of Lilliputian game at cups and balls; and the beauty of it lies in seeming to place the pepper-corn under one particular thimble, getting the $building.gamer.raceNote who is playing to bet that it was there, and then winning $building.gamer.hisher money by showing that it is not.",
        rules: 'The object of the game is to guess which thimble the peppercorn is under; sort of like a miniature cup and balls.',
        bet: random(4, 9)
      },
      {
        name: 'Arm Wrestling',
        type: 'strength game',
        description: "A <<profile $npcs[$building.gamer.key] $building.gamer.descriptor>> and <<profile $npcs[$building.gameBanker.key] $building.gameBanker.descriptor true>> sit across from each other, their right arms' elbow on the table, holding each others hand in their palm. A referee counts down from three, and as soon as he shouts 'go'!, the two start straining against each other, fighting to push the other's hand down through sheer force of will.",
        rules: '<blockquote> <<print random(12, 25)>> DC Athletics Check</blockquote>',
        bet: random(6, 12)
      },
      {
        name: 'Two-Up',
        type: 'gambling game',
        description: 'A small crowd of people are gathered around a table, where two people flip two coins in the air, with one <<profile $npcs[$building.gamer.key] $building.gamer.descriptor>> groaning whenever they both turned heads, and another <<profile $npcs[$building.gameBanker.key] $building.gameBanker.descriptor>> greedily grabbing the coins from the man in charge of overseeing the bets whenever they both turn tails, flicking the overseer a copper for his troubles.',
        rules: "Two coins are flipped by the 'spinner', who bets against another. Both heads wins, both tails loses, and one of each calls for another cointoss, with the 'spinner' losing out on five consecutive re-tosses.",
        bet: random(4, 10)
      },
      {
        name: 'Morra',
        type: 'guessing game',
        description: 'A drunk looking <<profile $npcs[$building.gamer.key] $building.gamer.descriptor>> pulls his hand out from behind his back and shouts <<print random(0, 15)>>. Two other people do the same thing and after a moment the $building.gamer.raceNote <<print ["cries out in joy", "cheers loudly", "hangs his head in defeat", "lets out a quiet sob, and hands another person a small coin purse"].random()>>.',
        rules: 'Between two and four people throw out a single hand with any number of fingers held up. Right before the hands are shown, each player will call out how many fingers they think will be held up in total between each player. If a player guesses the correct number of fingers they get a point, and it takes three points to win.',
        bet: random(4, 10)
      }
    ],
    stageDescriptor: ['rickety looking', 'small', 'wide', 'nice looking', 'well-crafted', 'large', 'cramped', 'dingy looking', 'regal looking', 'cheap'],
    fun: [
      'A group of commoners is playing horse shoes out back.',
      'The party is surprised to find the country darts league in full swing as they enter. The waitresses are used to the chaos and dodge darts easily. The half ogre bouncer is using lawn darts.',
      'A group of Hill Dwarves are in the middle of a drinking contest, and two of them are passed out already. The Prize is a solid platinum stein.',
      'Wet Chainmail contest!',
      'A shy teenage girl is reciting bad poetry in a corner. No one is paying the slightest bit of attention to her.',
      "It's trivia night! Those scholars from the School of History and the Arts at the University always win, but tonight, we represent and the School of Alchemy will show those smug book-snobs what it means to be a nerd.",
      'A promoter is working his way around the tables looking for challengers to fight the local champion pugilist.',
      "It's a sausage fest! The place is packed with dwarves eager to devour the all-you-can-eat sausage special.",
      'An over-sized brute is arm-wrestling crushing the hand of everyone in sight.',
      'Some goblins are throwing dice with some animated skeletons at a table in the corner.',
      'A goblin is doing a poor job at cheating at a dice game, while a skeleton is doing an excellent job at cheating.',
      "A 7'2 red dragonborn with a 5' bastard sword is having a drinking contest with a dwarf. The dragonborn has a 4-pint tankard, and is almost managing to keep pace.",
      'A party sits in the corner booth playing cards. All of them are cheating, except the paladin, who, curiously, is winning.',
      'A mountain of a man in barbarian leathers is arm wrestling a small dragon and winning.',
      'An awakened Roper is winning two games of billiards at once.',
      'A group of drunken pixies is playing hide and seek by hiding behind patrons.',
      'The players have stumbled into a regional card championship being held that night. The buy in is huge but so is the pot.',
      'A shady looking gnomish inventor is proudly showing off his latest invention. He calls it a one armed bandit.',
      "A grey haired story teller is sitting near the fire holding a contest. He'll give a large purse for a story he hasn't heard yet, but so far no one has won."
    ],
    get: {
      patrons (town, tavern) {
        const patron = Object.values(setup.tavern.patrons).random()
        return patron(town, tavern)
      },
      carousing (town, tavern) {
        const carousing = {
          pickpocket () { return `A pickpocket lifts ${lib.dice(5, 10)} gold from you.` },
          brawl () { return 'A bar brawl leaves you with a scar.' },
          memories () { return 'You have fuzzy memories of doing something very, very illegal, but can’t remember exactly what.' },
          banned (_, tavern) { return `You are banned from ${tavern.name} after some very obnoxious behaviour.` },
          quest (town) { return `After a few drinks, you swore in the ${town.type} square to undergo a dangerous quest.` },
          married () { return 'Surprise! You got engaged.' },
          streaking (_, tavern) { return `Streaking naked down ${tavern.road} seemed like a good idea.` },
          nickname () { return `Everyone is calling you "${['puddle drinker', 'boot licker', 'a good boy', 'friendo', 'a real hoopy frood', 'mutton chops'].random()}", but nobody will tell you why.` },
          insult (town) {
            const faction = setup.factionsForType(town, 'leadershipType', 'individual')
            lib.logger.info(faction)
            return `You accidentally insulted the <<profile \`$npcs[${JSON.stringify(faction.leader.key)}]\` leader>> of the ${faction.type} ${faction.wordNoun}, ${setup.profile(faction, '', 'town.factions')}, and only a public apology will let you do business with them again.`
          },
          anotherQuest (town) {
            const faction = setup.factionsForType(town, 'leadershipType', 'individual')
            lib.logger.info(faction)
            return `You swore to complete some quest on behalf of the ${faction.type} ${faction.wordNoun}, ${setup.profile(faction, faction.name, 'town.factions')}.`
          },
          gaffe () { return 'A social gaffe has made you the talk of the town.' },
          suitor (town) {
            const npc = setup.createNPC(town, { isThrowaway: true })
            return `A particularly obnoxious person called ${setup.profile(npc)} has taken an interest in you romantically.`
          },
          wizard (town) {
            const npc = setup.createNPC(town, { profession: 'wizard', isThrowaway: true })
            return `You have made a foe out of a local spellcaster called ${setup.profile(npc)}.`
          },
          festival () { return 'You have been recruited to help run a local festival.' },
          toast () { return 'You made a drunken toast that scandalized the locals.' },
          impress () { return 'You spent an additional 100 gp trying to impress people.' },
          noble () { return 'A pushy noble family wants to marry off one of their scions to you.' },
          dance () { return 'You tripped and fell during a dance, and people cannot stop talking about it.' },
          debt (town) {
            const npc = setup.createNPC(town, { background: 'noble', hasClass: false, isThrowaway: true })
            return `You have agreed to take on a noble called ${setup.profile(npc, npc.firstName)}'s debts.`
          },
          joust (town) {
            const npc = setup.createNPC(town, { profession: 'fighter', background: 'soldier', gender: 'man', isThrowaway: true })
            return `You have been challenged to a joust by a knight called ${setup.profile(npc)}.`
          },
          foe (town) {
            const npc = setup.createNPC(town, { background: 'noble', hasClass: false, isThrowaway: true })
            return `You have made a foe out of a local noble called ${setup.profile(npc)}.`
          },
          rumours () { return 'You have become the target of a variety of embarrassing rumors.' },
          wasteful () { return 'You spent an additional 500 gp trying to impress people.' },
          boring (town) {
            const npc = setup.createNPC(town, { background: 'noble', hasClass: false, isThrowaway: true })
            return `A  boring noble called ${setup.profile(npc)} insists you visit each day and listen to long, tedious theories of magic.`
          }
        }
        const fn = Object.values(carousing).random()
        return fn(town, tavern)
      },
      entertainment (tavern) {
        const entertainment = [
          'A bard is telling a story about the player’s latest act of daring do. He’s embellishing quite a bit. When he recognizes the party he makes a big spectacle.',
          'A bard is telling the story of the player’s latest exploit. It’s an obvious character assassination.',
          `A bard is in the middle of a crowd telling the story of ${['some local heroes', 'a grand adventure', 'a far off hero', 'an epic journey', 'a great disaster', 'a terrible tragedy', 'a terrifying monster'].random()}. The story is clearly exaggerated.`,
          'A local bardic group, The Rolling Boulders, are performing, and a large crowd of drunken groupies will not stop screaming.',
          "A beggar offers to sing for a few coppers. You heard him singing to the last table. He's awful.",
          `There is a juggler up on the ${tavern.stageDescriptor} stage currently juggling ${['a few rubber balls', 'several pointy looking swords', 'eight flaming juggling pins', 'several live rats', 'three large rocks'].random()}.`,
          'There are a pair of dancers on stage wearing skimpy outfits and holding feathered fans.',
          `A snake charmer is set up in one corner of the tavern playing a flute with a wicker basket in front of ${['him', 'her'].random()}. There is a ${['rattlesnake', 'cobra', 'python', 'black mamba', 'viper'].random()} in the basket dancing to the snake charmer's tune.`,
          `A bard is up on ${lib.articles.output(tavern.stageDescriptor)} stage doing a comedy bit, ${['he', 'she'].random()} is currently heckling a patron about their ${['name', 'hair', 'clothes', 'face', 'voice', 'body', 'race', 'drink choice', 'meal choice', 'job', 'scar'].random()}.`,
          `A lone dancer is up on ${lib.articles.output(tavern.stageDescriptor)} stage doing a very lively drunken dance.`,
          `A sassy fortune teller has set up shop in a corner booth. She informs you that she sees ${['a hangover in your near future', 'a serious trip in your future', 'nothing but darkness in your future', 'prosperity coming your way soon', 'a true love in your near future', 'fantastical journeys in your future', 'a large crowd cheering a name, but the vision is hazy', 'the eyes of a vicious creature in the night, but the vision is hazy', 'a long rest in your near future', 'a bright light in your future', 'nothing when she looks into your future'].random()}. The fortune teller holds out her gnarled hand and says "That will be ${random(1, 30)} silver, please.".`,
          "A stirring rendition of 'The Lady and the Faerie Dragon' has the crowd calling for an encore from the minstrels.",
          `A mime is up on the ${tavern.stageDescriptor} stage pretending to be trapped in a box. Nobody seems to be paying ${['him', 'her'].random()} any attention.`,
          'The lute-player catches some undergarments from the crowd and drapes them across the ridiculous horned helm he wears.',
          'On stage tonight: The Deep Tones. A quartet of dwarves with long beards and deep voices singing a capella favorites from places without light (or proper music).',
          'On stage tonight: Shaela Windspeaker. An elf-maid singer-songwriter with a bit of a whiny voice who is slowly making her way through her most recent song of protest against the previous and the present centuries of war.',
          `A nervous show-wizard on the ${tavern.stageDescriptor} stage is doing tricks with Prestidigitation for the un-amused patrons.`,
          `There is a bard up on ${lib.articles.output(tavern.stageDescriptor)} stage  playing ${['a lute', 'a pair of drumes', 'a harp', 'a flute', 'a pan flute', 'a sitar', 'a fiddle', 'a citern', 'a vielle', 'a clavichord', 'a harpsichord'].random()} ${['rather well', 'rather poorly', 'very loudly', 'quite softly', 'and it sounds pretty good', 'and it sounds bad', 'and it sounds alright'].random()}.`,
          'There are a pair of musicians warbling well known drinking songs. They have made an impromptu stage out of several tables. One of them seems to be tilting precariously.',
          `A drunkard has climbed up onto a table and has begun crooning ${['a well known drinking song', 'a local working song', 'an old sailor tune', 'a popular raunchy limerick'].random()} to the applause of other patrons.`,
          `A show wizard is shooting off flashy fire magic from ${lib.articles.output(tavern.stageDescriptor)} stage while shouting "magic words".`,
          `A palm reader has set up a booth in the corner of the tavern. He is currently reading the palm of ${['a grumpy looking dwarf', 'a frail old woman', 'an enormous man', 'a tough looking half-orc', 'a slender elf'].random()}.`,
          `${['An eldery dwarf', 'A snobby looking elf', 'A clever looking half-orc', 'An angular looking woman', 'A colorful gnome'].random()} is currently up on the ${tavern.stageDescriptor} stage reading their poetry to a drunken crowd.`,
          `There is ${lib.articles.output(tavern.stageDescriptor)}stage in this tavern, but it is currently empty.`,
          `There is ${['a large human', 'an elf', 'a half-orc', 'a gnome', 'a dwarf', 'a dragonborn', 'a ratfolk', 'a kitsune'].random()} in a puffy white hat up on ${lib.articles.output(tavern.stageDescriptor)} stage, giving some sort of cooking demonstration to the patrons.`,
          `There is a play happening on the tavern's ${tavern.stageDescriptor} stage with ${['a single actor', 'a few actors', 'a fair few actors', 'a great many actors', 'a couple actors'].random()} in it. The play seems to be about ${['star crossed lovers', 'a great battle', 'the history of the region', 'the history of an old noble', 'a local folk tale', "a local children's story", 'the tragedy of man', 'the folly of the gods'].random()}.`
        ]
        return entertainment.random()
      },
      cheapFeature (tavern) {
        const cheapDescriptors = [
          `The walls of the tavern are ${lib.articles.output(tavern.colour1)} colour and the paint is peeling off of them.`,
          'The floor of the tavern is sticky from past spilled beers.',
          'Several hand painted posters of past performers are haphazardly pinned to the walls.',
          'The bar of the tavern looks old and beaten up by years of brawls and mug slamming.',
          `The tables in this tavern have been painted ${lib.articles.output(tavern.colour1)} colour, which has been chipped away and dulled over time.`,
          `The floor of the tavern ${['is roughly packed dirt', 'is covered in a thick layer of straw', 'is made of cracked and warped wooden boards', 'is a thick layer of gravel', 'is missing several floorboards', 'is a mismatch of different floorboards'].random()}.`,
          'The tavern tables look rickety, as if they might collapse at any moment.',
          `A rusty looking ${['sword', 'axe', 'dagger', 'mace', 'flail', 'pike', 'arrow', 'crossbow'].random()} is crookedly hung on one wall.`,
          'A large notice for late taxes has been nailed to the front door of the tavern.',
          'A small stacked stone chimney smolders in one corner of the tavern with a burnt black pot boiling over it.',
          'One corner of the tavern is extremely dark but it looks like there is a table there.',
          'The chairs and benches of the tavern are a total hodgepodge of different furniture.',
          `A large crude painting of ${['a mountain range', 'a field of flowers', 'a dog', 'a cat', 'a rabbit', 'a cloudy sky', 'a stormy sea', 'an ocean faring ship', 'a large battle', 'a local hero', 'the barkeep', 'a forest', 'a dragon', 'a temple', 'a castle', 'an old king'].random()} is hung proudly near the bar.`,
          `A cheap ${tavern.colour1} and ${tavern.colour2} coloured vase is sat up on a pedestal near the front of the bar.`,
          'The flag of the town hangs above the bar.',
          `A worn and beer stained tapestry hangs from one wall depicting ${['a group of mining dwarves', 'the history of the town', 'the history of the tavern', 'the fall of a tyrant', 'a local folk tale', 'the acts of an old hero', 'the drinking tales of a legendary barbarian', 'a great fishing trip', 'a journey of gnomes'].random()}.`,
          `Instead of torches the tavern is lit by large glowing ${tavern.colour1} coloured mushrooms.`,
          'Several walls in the tavern have clearly been patched up.',
          `One of the walls has ${['a lion', 'an owl', 'an eagle', 'a mountain range', 'a field of flowers', 'a dog', 'a cat', 'a rabbit', 'a cloudy sky', 'a stormy sea', 'an ocean faring ship', 'a large battle', 'a local hero', 'the barkeep', 'a forest', 'a dragon', 'a temple', 'a castle', 'an old king'].random()} crudely painted directly onto it.`,
          `${['A rusty horse shoe', 'A rusted out lantern', 'A muddy pickaxe', 'A small, barnacle covered anchor', 'A collection of beads', 'An old chipped longbow', 'A cracked oaken buckler', 'The rusty remains of an iron shield', `${lib.articles.output(tavern.colour1)} coloured banner`, 'An assortment of cheap knick knacks and utensils', 'A crude sign with the tavern name', 'A lucky rabbits foot', 'An assortment of pressed flowers', 'A cracked beer mug'].random()} hangs above the bar.`,
          'Names of past patrons have been carved into the walls of the tavern.',
          'The seating in this tavern are benches that stretch across every table on each side.',
          'The flag of a different town hangs on one wall of the tavern.',
          "Behind the bar there's a shelf with an assortment of beer mugs of all shapes, sizes, and materials.",
          'Barrels of booze are being used as makeshift tables in some parts of the tavern.'
        ]
        return cheapDescriptors.random()
      },
      averageFeature (tavern) {
        const averageDescriptors = [
          `The walls of the tavern are painted a nice ${tavern.colour1} colour.`,
          `There is ${lib.articles.output(tavern.colour1)} coloured trim running along the bottom of the tavern walls.`,
          'The are several finely painted posters of past performers pinned up along one of the tavern walls.',
          'The bar of the tavern has a fine laquer and only a few mug scratches.',
          `The tables of the tavern have been painted ${lib.articles.output(tavern.colour1)} colour and only have a few knicks and scratches.`,
          `The floor of the tavern ${['is a fine bed of straw', 'is a nicely planked floor', 'is a roughly hewn stone floor', `is made up of clay tiles painted ${lib.articles.output(tavern.colour1)} colour`].random()}.`,
          `The legs of all the tables in tavern are shaped like ${['lions', 'bears', 'bulls', 'cows', 'trees', 'mountains', 'dwarves', 'elves', 'different fish', 'different weapons', 'dragons', 'beer mugs', 'human legs', 'ocean waves'].random()}`,
          `A ${['stacked stone fireplace', 'stone fireplace', 'slate stone fireplace', 'clay fireplace'].random()} blazes in a corner of the tavern with a ${['large cauldron bubbling away above it', 'haunch of mutton cooking on a skewer in it', 'few people huddled around it for warmth', 'small group of pots being warmed in it', 'patron stoking the flames'].random()}.`,
          `All of the tables in the tavern have ${['a single flickering candle', 'an assortment of sauces created by the tavern cook', "hand written menus for what's on tap", 'holes for holding mugs carved into them', 'nice looking iron utensils laid out for patrons'].random()}.`,
          `A decent looking ${['sword', 'axe', 'dagger', 'mace', 'flail', 'pike', 'arrow', 'crossbow', 'lance', 'rapier', 'battleaxe', 'maul', 'whip', 'longsword', 'morning star', 'war hammer', 'glaive', 'scroll', 'tome', 'helmet', 'set of armor'].random()} is mounted to the wall next to the bar.`,
          'One corner of the tavern is extremely dark but it looks like there is a table there.',
          `A large nicely crafted painting of ${['a mountain range', 'a field of flowers', 'a dog', 'a cat', 'a rabbit', 'a cloudy sky', 'a stormy sea', 'an ocean faring ship', 'a large battle', 'a local hero', 'the barkeep', 'a forest', 'a dragon', 'a temple', 'a castle', 'an old king', 'a wolf', 'a seamonster', 'the town'].random()} is hung proudly in a finely crafted frame near the bar.`,
          `A set of ${tavern.colour1} and ${tavern.colour2} coloured ${['vases', 'urns', 'bottles', 'baskets', 'pottery', 'pots'].random()} are sitting on a shelf against one of the tavern walls.`,
          'The flag of the town is hung prominently above the bar.',
          `A nice looking tapestry is hung up on one of the walls depicting ${['a group of mining dwarves', 'the history of the town', 'the history of the tavern', 'the fall of a tyrant', 'a local folk tale', 'the acts of an old hero', 'the drinking tales of a legendary barbarian', 'a great fishing trip', 'a journey of gnomes', 'the crafting of a great weapon', 'the creation of an ancient relic', 'the construction of a great wonder', 'the journey of a famous ship', 'a great tragedy of old', 'the forming of the skies', 'the coronation of a king'].random()}.`,
          'The tavern is lit by a collection of jars full of glowing bugs hanging from the ceiling.',
          `The tavern walls are covered in paintings of ${['cats', 'dogs', 'birds', 'horses', 'cows', 'food', 'flowers', 'trees', 'rocks', 'owls', 'wolves', 'frogs', 'rabbits'].random()} in a variety of frames.`,
          'The flag of a different town hangs on one wall of the tavern, getting passing glares from patrons.',
          `The head of ${['an elk', 'a deer', 'a bull', 'a wolf', 'an owl', 'an eagle', 'a hawk', 'a bison', 'a horse', 'a cow', 'a moose', 'a camel', 'a beaver', 'a badger', 'a wolverine', 'a bear', 'a lion', 'a tiger', 'a puma', 'an ostritch', 'a crocodile', 'an alligator', 'a buffalo', 'a cougar', 'a leapord', 'a swan', 'a hyena'].random()} is stuffed and mounted above the bar.`,
          `${['A shiny horseshoe', 'An ornate lantern', 'A glass case with a jewel inside', 'A collection of cheap jewellery', 'A nicely carved longbow', 'A finely plumed cap', 'An iron kite shield', 'A pine wood buckler', 'A group of strang masks', 'Hides of various animals', "A sign with tavern's name", 'A lucky rabbit foot', "The tavern's first gold coin", 'A large fish', 'A large chest', 'A collection of vials and knick knacks'].random()} hangs above the bar.`,
          'A small cat is slowly weaving between the legs of patrons.',
          'The lanterns in the tavern are made from animal skulls.',
          `Small pennants in ${tavern.colour1} and ${tavern.colour2} colours are strung up across the tavern.`,
          `A large ${['wolf fur', 'zebra skin', 'bear skin', 'lion skin', 'cow fur'].random()}rug is laid out on the tavern floor.`
        ]
        return averageDescriptors.random()
      },
      wealthyFeature (tavern) {
        const wealthyDescriptors = [
          `The walls of the tavern have been freshly painted a nice ${tavern.colour1} colour.`,
          `The walls are freshly painted ${lib.articles.output(tavern.colour1)} and ${tavern.colour2} two-tone colour.`,
          `The walls of the tavern are striped ${tavern.colour1} and ${tavern.colour2}.`,
          `There is ${lib.articles.output(tavern.colour1)} coloured trim running along the top and bottom of the tavern walls.`,
          'There are several very finely painted posters of past performers nicely framed up along one of the tavern walls.',
          'The bar of the tavern has a fine laquer and only a few mug scratches.',
          `The bar of the tavern has been freshly painted a fine ${tavern.colour1} colour.`,
          'The bar of the tavern is embedded with gold coins from all over the place.',
          'The lanterns on the tavern walls are incredibly ornate and wrought iron.',
          `The tavern is lit by ${tavern.colour1}coloured paper lanterns hung from the ceiling`,
          `The tables of the tavern have been freshly painted ${lib.articles.output(tavern.colour1)} colour and is free of any scratches.`,
          `The floor of the tavern ${['is a nicely planked floor', 'is a roughly hewn stone floor', `is made up of clay tiles painted ${lib.articles.output(tavern.colour1)} colour`, 'is a finely laquered floor', `is covered in a thick ${tavern.colour1}coloured carpet`, 'is finely carved stone', 'is artisinally engraved stone', 'is made of cobblestone'].random()}.`,
          `The legs of all the tables in tavern are shaped like ${['lions', 'bears', 'bulls', 'cows', 'trees', 'mountains', 'dwarves', 'elves', 'different fish', 'different weapons', 'dragons', 'beer mugs', 'human legs', 'ocean waves', 'jewels', 'swords', 'axes', 'pickaxes', 'beer barrels', 'scepters', 'different animals', 'animal legs'].random()}`,
          `${['A decent looking', 'A fine looking', 'An ancient looking', 'Some kind of legendary'].random()} ${['sword', 'axe', 'dagger', 'mace', 'flail', 'pike', 'arrow', 'crossbow', 'lance', 'rapier', 'battleaxe', 'maul', 'whip', 'longsword', 'morning star', 'war hammer', 'glaive', 'scroll', 'tome', 'helmet', 'set of armor', 'crown', 'scepter', 'book', 'longbow', 'grappling hook', 'necklace'].random()} is mounted to the wall next to the bar.`,
          'One corner of the tavern is extremely dark but it looks like there is a table there.',
          `A large ${['nicely crafted', 'well crafted', 'masterpiece', ', expensive looking'].random()} painting of ${['a mountain range', 'a field of flowers', 'a dog', 'a cat', 'a rabbit', 'a cloudy sky', 'a stormy sea', 'an ocean faring ship', 'a large battle', 'a local hero', 'the barkeep', 'a forest', 'a dragon', 'a temple', 'a castle', 'an old king', 'a wolf', 'a seamonster', 'the town', 'an eagle', 'a unicorn', 'a lion', 'a fairy', 'a demon'].random()} is hung proudly in a finely crafted frame near the bar.`,
          'The flag of the town is hung prominently above the bar.',
          `${['A nice looking', 'A fine looking', 'An ancient', 'An expensive looking'].random()} tapestry is hung up on one of the walls depicting ${['a group of mining dwarves', 'the history of the town', 'the history of the tavern', 'the fall of a tyrant', 'a local folk tale', 'the acts of an old hero', 'the drinking tales of a legendary barbarian', 'a great fishing trip', 'a journey of gnomes', 'the crafting of a great weapon', 'the creation of an ancient relic', 'the construction of a great wonder', 'the journey of a famous ship', 'a great tragedy of old', 'the forming of the skies', 'the coronation of a king', 'the slaying of a dragon'].random()}.`,
          `A ${['stacked stone fireplace', 'stone fireplace', 'slate stone fireplace', 'clay fireplace', 'large granite fireplace', 'large cobblestone fireplace', 'brick fireplace', 'large brick fireplace'].random()} blazes in a corner of the tavern with a ${['large cauldron bubbling away above it', 'haunch of mutton cooking on a skewer in it', 'few people huddled around it for warmth', 'small group of pots being warmed in it', 'patron stoking the flames'].random()}.`,
          'The tavern is lit by a collection of jars full of glowing bugs hanging from the ceiling.',
          `The tavern walls are covered in paintings of ${['cats', 'dogs', 'birds', 'horses', 'cows', 'food', 'flowers', 'trees', 'rocks', 'owls', 'wolves', 'frogs', 'rabbits', 'nobles', 'famous heros', 'old battles', 'dragons', 'snakes'].random()} in a variety of fine looking frames.`,
          'The flag of a different town hangs on one wall of the tavern, getting passing glares from patrons.',
          `The head of ${['an elk', 'a deer', 'a bull', 'a wolf', 'an owl', 'an eagle', 'a hawk', 'a bison', 'a horse', 'a cow', 'a moose', 'a camel', 'a beaver', 'a badger', 'a wolverine', 'a bear', 'a lion', 'a tiger', 'a puma', 'an ostritch', 'a crocodile', 'an alligator', 'a buffalo', 'a cougar', 'a leapord', 'a swan', 'a hyena', 'a drake', 'a unicorn', 'a boar', 'a jackal', 'an elephant', 'a rhino', 'a coyote', 'a peacock'].random()} is stuffed and mounted above the bar.`,
          `${['A golden horseshoe', 'An ornate lantern', 'A glass case with a large jewel inside', 'A collection of fine jewellery', 'An ornately carved longbow', 'A finely plumed cap', 'An iron kite shield', 'A pine wood buckler', 'A group of strang masks', 'Hides of various animals', "A sign with tavern's name", 'A lucky rabbit foot', "The tavern's first gold coin", 'A large fish', 'A large chest', 'A collection of vials and knick knacks'].random()} hangs above the bar.`,
          'A small cat is slowly weaving between the legs of patrons.',
          'The lanterns in the tavern are made from animal skulls.',
          `Small pennants in ${tavern.colour1} and ${tavern.colour2} colours are strung up across the tavern.`,
          `A large ${['wolf fur', 'zebra skin', 'bear skin', 'lion skin', 'cow fur'].random()}rug is laid out on the tavern floor.`,
          `The tavern is lit by glowing ${tavern.colour1} coloured crystals mounted on the walls.`,
          'Several of the tables seem to be nicer than all the others, and have signs on them that say "Reserved".',
          'A signed painting of a local noble hangs in a golden frame above the bar.'
        ]
        return wealthyDescriptors.random()
      },
      lookAround (tavern) {
        const bartender = tavern.associatedNPC
        const lookAroundData = [
          {
            population: 90,
            roughness: 70,
            note: 'You can barely hear each other over the din of the other patrons, who are pretty rowdy. One elbows you in the ribs as they try to get around you to the bar.'
          },
          {
            population: 80,
            roughness: 60,
            note: 'You find it difficult to hear each other over the din of the crowds that are drunkenly cavorting around.'
          },
          {
            population: 80,
            roughness: 50,
            note: `It must be peak hour for the ${tavern.wordNoun}. The barmaid is running back and forth between customers and the kitchen, trying desperately to keep ontop of the ever growing requests for more ale.`
          },
          {
            population: 80,
            roughness: 40,
            note: `The ${tavern.wordNoun} is packed, and the patrons are clamouring to find the few barmaids that are on staff.`
          },
          {
            population: 80,
            roughness: 20,
            note: `There's barely enough room to stand, let alone find a seat in the ${tavern.lighting} ${tavern.wordNoun}.`
          },
          {
            population: 60,
            roughness: 60,
            note: `The ${tavern.wordNoun} is packed with patrons, and you're pushed to the side as somebody makes for the latrine in a hurry.`
          },
          {
            population: 70,
            roughness: 60,
            note: `It's peak hour for ${tavern.name} and you can tell that the bartender is concerned about a fight breaking out.`
          },
          {
            population: 70,
            roughness: 20,
            note: `The ${tavern.wordNoun} is pretty packed with patrons, and it's difficult for you to find a seat.`
          },
          {
            population: 60,
            roughness: 20,
            note: `The ${tavern.wordNoun} is quite full, and the owner is clearly enjoying the amount of business ${bartender.hisher}${tavern.wordNoun} is receiving.`
          },
          {
            population: 50,
            roughness: 60,
            note: `There's a fair number of people in the ${tavern.wordNoun} with quite a few swords on display.`
          },
          {
            population: 50,
            roughness: 20,
            note: `There's a decent number of people in ${tavern.name}, and you manage to find a seat without too much trouble.`
          },
          {
            population: 40,
            roughness: 60,
            note: 'The clientele is pretty rough, and might have scared off some of the less rambunctious potential customers.'
          },
          {
            population: 40,
            roughness: 20,
            note: `There's a reasonable amount of customers in the ${tavern.wordNoun}. The barmaid is happily walking back and forth from the kitchen, taking out plates as they are delivered.`
          },
          {
            population: 30,
            roughness: 80,
            note: "The few people that are in the tavern bear scars, and openly talk of their violent exploits. It's pretty clear that they have scared away any regular clientele."
          },
          {
            population: 30,
            roughness: 60,
            note: 'There are basically no people in the tavern, save for a few battle-hardened men talking in the corner.'
          },
          {
            population: 30,
            roughness: 20,
            note: `${tavern.name} is basically empty, and there's not much for the barmaid to do, who settles for polishing a glass.`
          },
          {
            population: 20,
            roughness: 60,
            note: `There's not very many customers in ${tavern.name} at the moment. You see a couple of adventurers hunked over in the corner, quietly discussing battle plans, but nothing of particular interest in the clientele.`
          },
          {
            population: 20,
            roughness: 20,
            note: "It's almost just you and the bartender in here."
          }
        ]
        return lookAroundData
      },
      menu (tavern) {
        const bartender = tavern.associatedNPC
        const menu = [
          {
            wealth: 80,
            roughness: 80,
            note: [
              `There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the game that's on menu. ${bartender.name} proudly tells you that there are no stinkin' vegetables, and that ${tavern.name} stocks only the finest meats.`,
              `The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's available to drink, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. The server then tells you that while ${tavern.name} is proud of its menu, it caters to an exclusively carnivorous diet.`
            ].random()
          },
          {
            wealth: 80,
            roughness: 30,
            note: [
              `There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the food that's on menu. The waitstaff tell you that ${tavern.name} is proud to be 100% violence free; upon further clarification, this is revealed to mean that there is not a single bone of meat in the entire ${tavern.wordNoun}.`,
              `The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's on menu, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. The waitstaff tell you that ${tavern.name} is proud to be 100% violence free; upon further clarification, this is revealed to mean that there is not a single bone of meat in the entire ${tavern.wordNoun}.`
            ].random()
          },
          {
            wealth: 80,
            roughness: 50,
            note: [
              "There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the game that's on menu.",
              "The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's on menu, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. It goes without saying that the kitchen is able to accomodate even the pickiest of royalty."
            ].random()
          },
          {
            wealth: 60,
            roughness: 80,
            note: [
              `There's ales available. The food is standard fare, with roast beef, pork, and mutton on the menu for food, but curiously no vegetables. ${bartender.name} spits when you mention this, and says 'no stinkin' veggies around here. We eat meat and we like it, so if you don't like it, yer not eatin'.`,
              `There's your standard beers, with the ${tavern.wordNoun} specialising in ales, which are allegedly quite good. As far as food is concerned, there's regular fare of beef, pork, and mutton, but strangely, no breads, cheeses, or potatoes of any description; you hear another patron loudly state that he loves not having to put up with those 'pointy ears complaining about the lack of green stuff' in ${tavern.name}.`
            ].random()
          },
          {
            wealth: 60,
            roughness: 30,
            note: [
              `There's ales available. The food is a peculiarly limited menu; roast vegetables, breads, cheeses, but no meats, despite ${tavern.name} clearly being able to afford it.`,
              `There's your standard beers, with the ${tavern.wordNoun} specialising in ales, which are allegedly quite good. As far as food is concerned, there's breads, cheeses, and all the vegetables you could ever ask for, but not a single bone of meat is available.`,
              `Drinks are pretty standard, with a house lager being twenty percent off tonight. The menu is sadly lacking any meats, and when you ask ${bartender.name} about it, ${bartender.heshe} smiles, and says that ${bartender.heshe} is an animal lover, and wouldn't be able to forgive ${bartender.himherself} if an animal came to harm due to ${bartender.hisher} business.`
            ].random()
          },
          {
            wealth: 60,
            roughness: 20,
            note: `Drinks are pretty standard, with the house lager being twenty percent off tonight. The menu is sadly lacking any meats, and when you ask ${bartender.name} about it, ${bartender.heshe} smiles, and says that ${bartender.heshe} is an animal lover, and wouldn't be able to forgive ${bartender.himherself} if an animal came to harm due to ${bartender.hisher} business.`
          },
          {
            wealth: 60,
            roughness: 30,
            note: [
              "There's ales available. The food is standard fare, with roast beef, pork, and mutton on the menu for food.",
              `There's your standard beers, with the ${tavern.wordNoun} specialising in ales, which are allegedly quite good. As far as food is concerned, there's regular fare of beef, pork, breads and cheeses, and mutton.`
            ].random()
          },
          {
            wealth: 40,
            roughness: 60,
            note: [
              `There's the usual house-brewed ale on tap, but it is warm and undercarbonated. You suspect that ${bartender.firstName} has watered it down. As far as food is concerned, there is the usual mutton and breads available.`,
              `${bartender.firstName} says that they have some freshly brewed ale, although you soon discover that to be a lie; it's lukewarm, and barely carbonated.`
            ].random()
          },
          {
            wealth: 40,
            roughness: 30,
            note: [
              "There's the usual house-brewed ale on tap, but it is warm and undercarbonated. As far as food is concerned, there is the usual mutton and breads available.",
              "There's a limited range of beers, some of which have very clearly soured.",
              'The food on offer is rather plain, with nothing terribly interesting or appetizing. The beer is unfortunately not much better.'
            ].random()
          },
          {
            wealth: 20,
            roughness: 30,
            note: "There's what can only be described as piss available to drink, and the food isn't much better; other patrons can be seen chewing away at stale pieces of bread."
          },
          {
            wealth: 10,
            roughness: 30,
            note: "There's what can only be described as piss available to drink, and the food isn't much better; other patrons can be seen chewing away at stale pieces of bread."
          }
        ]
        return menu
      },
      draws (town, tavern) {
        const bartender = tavern.associatedNPC
        const draws = [
          {
            draw: 'attractive waitstaff',
            drawFeature: "You see one of the barmaids talking to a patron, and it's difficult to convince your eyes there's a more pleasant sight in the room, until you see another equally attractive barmaid pulling a pint at the bar."
          },
          {
            draw: 'resident bard',
            drawFeature: "You see a bard singing a love song in the corner of the room, and are drawn to his pure, melifluous voice. He's quite a good singer, and the patrons are nodding along to the song appreciatively."
          },
          {
            draw: 'witty banter with the waitstaff',
            drawFeature: "You see a gruff looking man catcall after one of the barmaids, and she looks over her shoulder, and replies something that you can't quite make out. Despite this, it's clear that whatever she said destroyed the man, as his friends burst into laughter while he deflates rather rapidly."
          },
          {
            draw: 'crude jokes the bartender makes',
            drawFeature: `You see the bartender is talking to a <<profile $building.patron $building.patron.descriptor>>. ${bartender.heshe.toUpperFirst()} smiles, and then says something, making the $building.patron.descriptor go white as a sheet, and immediately leave the establishment, with ${bartender.firstName} laughing, calling $building.patron.himher 'too goody-two-shoes to be able to handle ${tavern.name}.`
          },
          {
            draw: "proximity to the thieves' guild headquarters",
            drawFeature: `You can see a sign by the door stating 'REPEATED PICKPOCKETING WILL RESULT IN THE THIEVES' GUILD BEING BANNED FROM THESE PREMISES'. Clearly, ${tavern.name} has an issue with the thieves guild.`
          },
          {
            draw: 'warmth inside',
            drawFeature: `${tavern.name} is kept wonderfully toasty, and the warm air makes you comfortable and sleepy`
          },
          {
            draw: 'magic incense which is constantly burning',
            drawFeature: "You smell a peculiar aroma, which you can't quite place, only that it reminds you of the fond days of your childhood, until you see wafts of smoke trailing from behind the bar; there's a stick of incense burning, clearly at least somewhat magical."
          },
          {
            draw: 'proximity to the brothel',
            drawFeature: `You saw a sign outside which read 'No Soliciting', but inside, you see a much larger, more insistent sign which read 'NO SOLICITING. OF EITHER SORT'. Clearly, ${tavern.name} has an issue with the nearby whorehouse, [[$building.name|BrothelOutput]].`
          },
          {
            draw: 'proximity to the church',
            drawFeature: `You see a sign by the door which reads 'No proselytising'. Clearly, ${tavern.name} has an issue with the nearby church.`
          },
          {
            draw: 'location by the river',
            drawFeature: `${tavern.name} overlooks a gorgeous river, which you can hear gently rushing by the ${tavern.material.noun} ${tavern.wordNoun} inside. A fisherman is sitting at the bar, talking about his day's catch, which he's clearly exaggerating.`
          },
          {
            draw: 'wooden-chopping competition held weekly',
            drawFeature: "Above the bar is a fearsome axe. And another, and another. On the wall is what looks to be a leaderboard, with names and points next to the names. Upon closer inspection, it's revealed to be the scores for the wood chopping competition. Clever bartender; you can see the fireplace is well stocked."
          },
          {
            draw: 'mahogany stairs',
            drawFeature: "You see a gorgeous spiral staircase, which presumably leads up to the sleeping quarters. The craftsmanship is astounding, and it's clearly well loved by staff and patrons alike."
          },
          {
            draw: 'clean beds',
            drawFeature: `You see that the bar has been recently cleaned, and there's a surprising lack of spittle on the floor of the ${tavern.wordNoun}.`
          },
          {
            draw: 'lack of bedbugs',
            drawFeature: `You see a patron enter the bar from the sleeping quarters. The bartender asks if she slept well, and she nods at the ${bartender.weight} ${bartender.manwoman}, saying that she slept very well.`
          },
          {
            draw: 'magic bedbugs',
            drawFeature: "You see a patron enter the bar from the sleeping quarters, who's scratching his arms madly, with a doped up smile upon his face."
          },
          {
            draw: 'huge fireplace',
            drawFeature: `You see a huge fireplace in the centre of the ${tavern.wordNoun}, which fills the surrounding air with a wonderful warmth and aroma due to the pot which hangs above it, contentedly bubbling over the embers.`
          },
          {
            draw: 'incredible view',
            drawFeature: `You look out the window, and see that the view is indeed nothing to scoff at; the ${tavern.wordNoun} is situated on a hill which overlooks the sleepy ${town.type} of ${town.name}, and you can make out the specks of people walking about below. It's an unbelievable location for an inn.`
          },
          {
            draw: 'nice view',
            drawFeature: `You look out the window, and see that the view is indeed quite nice; the ${tavern.wordNoun} is situated on a hill which overlooks the sleepy ${town.type} of ${town.name}, and you can make out the specks of people walking about below. It's a nice location for an inn.`
          }
        ]
        return draws.random()
      },
      lodging (tavern) {
        lib.logger.info(`Fetching ${tavern.name} lodging.`)
        const { wealth } = lib.tavernRollData
        const [,, lodging] = wealth.rolls.find(([threshold]) => {
          return threshold <= tavern.roll.wealth
        }) || lib.last(wealth.rolls)
        return lodging
      },
      bedCleanliness (tavern) {
        lib.logger.info(`Fetching ${tavern.name} bed cleanliness.`)
        const { cleanliness } = lib.tavernRollData
        const [, bedCleanliness] = cleanliness.rolls.find(([threshold]) => {
          return threshold <= tavern.roll.bedCleanliness
        }) || lib.last(cleanliness.rolls)
        return bedCleanliness
      }
    },
    patrons: {
      farmer (town) {
        const npc = setup.createNPC(town, { background: 'commoner', profession: 'farmer', gender: 'man' })
        return `A poor ${setup.profile(npc, 'farmer')} is trying to pay his bar tab with a sack of potatoes and a barrel of pickles.`
      },
      work (town) {
        const npc = setup.createNPC(town, { profession: 'peasant' })
        return `There's a ${setup.profile(npc, 'peasant')} that seems to be trying to drink away what little coin ${npc.heshe} has left.`
      },
      artist (town) {
        const npc = setup.createNPC(town, { profession: 'artist' })
        return `There's an ${setup.profile(npc, 'artist')} that is sketching ${npc.hisher} surroundings on a pad of paper.`
      },
      bard (town) {
        const npc = setup.createNPC(town, { profession: 'musician' })
        return `There's a ${setup.profile(npc, 'musician')} that is having a drink, clearly in between sets.`
      },
      preacher (town) {
        const npc = setup.createNPC(town, { religion: { strength: 'fanatical true believer' } })
        return `There's a ${setup.profile(npc, npc.descriptor)} that is supposedly "spreading the good word" about ${npc.hisher} deity. In reality, all ${npc.heshe} is doing is just annoying the other patrons.`
      },
      amateurMusician (town) {
        const npc = setup.createNPC(town, { profession: 'peasant' })
        return `There's a ${setup.profile(npc, 'peasant')} that is playing ${['a recorder', 'the lute', 'a lap harp', 'a flute'].random()} rather badly; ${npc.heshe} is clearly in need of more practice.`
      },
      food (town) {
        const npc = setup.createNPC(town)
        return `There's a ${setup.profile(npc, npc.descriptor)} that is grumbling about the food.`
      },
      karen (town) {
        const npc = setup.createNPC(town, { profession: 'peasant', firstName: 'Karen' })
        return `There's a ${setup.profile(npc, npc.descriptor)} that seems to be trying to grab the bartender's attention.`
      },
      passedOut (town) {
        const npc = setup.createNPC(town)
        return `There's a ${setup.profile(npc, npc.descriptor)} that seems to be testing gravity out, making sure that it still works by repeatedly falling over. ${npc.heshe.toUpperFirst()} is as drunk as a skunk.`
      },
      deathsticks (town) {
        const npc = setup.createNPC(town, { profession: 'drug dealer' })
        return `There's a ${setup.profile(npc, npc.descriptor)} that is selling something that ${npc.heshe} calls 'death sticks'. It's not clear what they do, or how legal they are.`
      },
      seacaptain (town) {
        const npc = setup.createNPC(town, { background: 'sailor', profession: "ship's captain", gender: 'man' })
        return `A ${setup.profile(npc, 'sea-captain')} has set up shop at a table and is trying to sell mementos and souvenirs from his latest great voyage of exploration. Birds, exotic coins, tiny mermaids, he has it all. Some of it looks fake though. A tiny bit looks disturbingly real.`
      },
      ranger (town) {
        const npc = setup.createNPC(town, { background: 'commoner', profession: 'ranger', gender: 'man' })
        return `A ${setup.profile(npc, 'ranger')} sits alone in a corner, smoking. A hood covers most of his face. At his feet is a sleeping wolfhound. Everyone is giving him a wide berth.`
      },
      drunkard (town) {
        const npc = setup.createNPC(town, { background: 'commoner', gender: 'man' })
        return `A lone ${setup.profile(npc, 'drunkard')} is drinking at the end of the bar and softly crying and singing one country ballad after another.`
      },
      wizard (town) {
        const npc = setup.createNPC(town, { background: 'sage', profession: 'wizard', gender: 'man' })
        return `A stoned ${setup.profile(npc, 'magician')} is fumbling his way through one awful card trick after another.`
      },
      elves (town) {
        const npc = setup.createNPC(town, { background: 'noble', race: 'elf', gender: 'woman', weapon: 'an obsidian bow' })
        return `A mixed group of Elves are drinking bad wine and holding scented handkerchiefs up to their noses to keep out the stench. ${setup.profile(npc, 'One')} has an obsidian bow strapped to her back.`
      },
      clown (town) {
        const npc = setup.createNPC(town, { background: 'commoner', profession: 'clown' })
        return `A sad ${setup.profile(npc, 'clown')} is drinking a beer alone.`
      },
      guards (town) {
        const npc = setup.createNPC(town, { background: 'soldier', profession: 'guard' })
        return `Two ${setup.profile(npc, 'guards')} are arguing at a table over who the captain likes more by comparing almost identical spears and claiming to have the better one.`
      },
      suitor (town) {
        const npc = setup.createNPC(town, { background: 'noble', profession: 'noble', hasClass: false, gender: 'woman' })
        return `A ${setup.profile(npc, 'handsome young woman')} is holding court among some of her would-be suitors. Her father interrupts, and she stalks off embarrassed.`
      },
      stag (town) {
        const npc = setup.createNPC(town, { background: 'commoner', profession: 'farmer', gender: 'man' })
        return `Some ${setup.profile(npc, 'idiot')} is having a stag night. His friends are loud and obnoxiously harassing the barmaid.`
      },
      ladies (town) {
        const npc = setup.createNPC(town, { background: 'sage', profession: 'librarian', gender: 'woman' })
        return `It's ladies night! And it's not disappointing... A few pretty little things from the weavers' guild are here, a couple of attractive healers from the temple, and the beautiful new town ${setup.profile(npc, 'librarian')}.`
      },
      witch (town) {
        const npc = setup.createNPC(town, { background: 'hermit', profession: 'wizard', gender: 'woman' })
        return `A surly old ${setup.profile(npc, 'witch')} is drinking sherry while stroking the fat grey cat sitting on her lap.`
      },
      overworked (town) {
        const npc = setup.createNPC(town, { background: 'commoner', profession: 'barmaid', gender: 'woman' })
        return `The ${setup.profile(npc, 'barmaid')} is mixing up a complicated looking drink.`
      },
      succubus (town) {
        const npc = setup.createNPC(town, { background: 'commoner', profession: 'barmaid', gender: 'woman' })
        return `The ${setup.profile(npc, 'barmaid')} is a succubus, she seems to be making great tips.`
      },
      attendant () {
        return 'The attendant in the bathroom is a foul-smelling zombie. He offers you a mint crystal.'
      },
      mophand (town) {
        const npc = setup.createNPC(town, { background: 'commoner', profession: 'maid', hasClass: false })
        return `The ${setup.profile(npc, 'toothless mop-hand')} reminisces with a military has-been over ales about how an otyugh in the loo isn't as bad as the time a carrion crawler was in there.`
      },
      doppelganger (town) {
        const npc = setup.createNPC(town, { background: 'commoner', profession: 'barmaid', gender: 'woman' })
        return `The ${setup.profile(npc, 'barmaid')} is a doppelganger. When she returns to your table with your drinks she has taken the form of one of your party.`
      },
      priest (town) {
        const npc = setup.createNPC(town, { profession: 'priest', weight: 'fat', weightPounds: 200 })
        return `A ${setup.profile(npc, 'fat priest')} is doing an excellent jiggly dance in rhythm with the music. Either that or a gelatinous cube has made it's way onto the dance floor?`
      }
    },
    specialBrew: [
      {
        name: 'Gnollblood',
        type: 'non-magical mead',
        cost: 30,
        description: "While the inventor of this recipe is said to have been human, anyone is welcome to make it- if they can survive the trial of getting the ingredients. True to its name, after the mead is sweetened with honey and boiled with a blend of spices, the maker stirs in just enough gnoll's blood to give the brew a salty, rusty undertone. This conveys no magical benefit, but it's still quite popular among the wealthy citizens of the local cities. Brewers within the city limits will pay handsomely for fresh gnoll carcasses to keep their blood supply in check.",
        author: 'Jasperine'
      },
      {
        name: 'Bragget',
        type: "goblin 'wine'",
        cost: 34,
        description: "Made from fermented, often rotting cave mushrooms, bragget is the favored drink of any goblin who wants to quickly lose their inhibition. There's no real recipe to follow- simply throw a handful of fresh mushrooms into a vat of water, forget it for several months, rediscover the vat after a crew of adventurers break into your cave system, and drink it. Effects range from a gleeful, giddy state of inebriation to death from dysentery. Or both.",
        author: 'Jasperine'
      },
      {
        name: "Cobbler's cream",
        type: 'rotgut',
        cost: 26,
        description: "Gnomes who dwell along the forest's edge often send their young to forage for meals in dense, semi-cultivated plots filled with berries, brambles, succulent flowers and herbs of all varieties. Having not yet developed a callous thick enough to endure the thorns, prickles and stings, many young Gnomes often wear carved wooden shoes and heavy leather gaiters to protect themselves. When a young Gnome reaches maturity, however, they are expected to retire their shoes back to the cobbler, where the toes are stuffed full of harvested berries, leaves, mushrooms and whatever else comes to hand. The shoes are then hung from the rafters over a large vat, where steam, time, and the natural yeasts in the porous wood allow droplets of alcoholic liquid to seep through the shoe, and fall into the roiling mixture below. Mixed with rainwater, and served in usually cleaned wooden shoes, the resulting beverage is incredibly potent, with a flavor profile that ranges from incredibly profane to lavender, with notes of sweet sap. Gnomes who consume it often do so in celebratory contexts, and in small quantities. Most others experience temporary blindness and an intense hatred for Gnomes.",
        author: 'MrKHackworth'
      },
      {
        name: 'Blood clot',
        type: 'Dwarven sludge',
        cost: 42,
        description: 'This bizarre concoction is a favorite among Dwarves looking to make a dare. Thick and red, it contains a congealed glob of fermented goat milk about the size of a golf ball. An acquired taste, it is reminiscent of fortified wine with a strong hint of copper.',
        author: 'Melance'
      },
      {
        name: 'Axegrinder Ale',
        type: 'Dwarvish ale',
        cost: 34,
        description: 'In the right light, this ale takes on a blood red hue. It gives off a strong scent like a floral meadow covered in dew and tastes slightly sour on the way down with a sweaty finish. Dwarves who consume it often become mildly belligerent and take offense the smallest slights. Most others who consume it experience a noticeable uptick in their spirits. Except trolls, who just get angry.',
        author: 'OrkishBlade'
      },
      {
        name: 'Bitterbeard Ale',
        type: 'Dwarvish ale',
        cost: 36,
        description: "This translucent gold ale is topped with a clean white foam and tastes a little pungent and bitter with hints of citrus. Dwarves who consume it tend to brood over hated foes, especially 'the one that got away.' Non-dwarves who consume it typically experience a pleasant evening followed by a poor night's sleep.",
        author: 'OrkishBlade'
      },
      {
        name: 'Meadowlark',
        type: 'Human wheat beer',
        cost: 30,
        description: "In a world full of 750,000-proof Elven cordials and Dwarven stouts so thick you'd think they were bottled mud, sometimes you just need a good beer. Mild, refreshing, and flavorful, Meadowlark is a beer by humans, for humans, which means that just about every halfling from here to the Drypeak Mountains is drinking it. The noble think it crude, the elves think it unimaginative, the dwarves find it cowardly, but the farmers who drop themselves down at a tavern table at the end of the day wouldn't have anything else.",
        author: 'Val_Ritz'
      },
      {
        name: 'Frostbomb',
        type: 'Pale ale',
        cost: 66,
        description: "The life's work of a dragonborn brewmaster. Frostbomb is somewhat disconcerting, for a couple of reasons. One, it's blue. For those who prefer not to consume things that are the color of their cousin Clyde that one time he tried to swallow a carrot whole, that might be a bit of a turn-off. Two, it is absolutely frigid. The steel bottles that it's shipped in are often coated in a thick rime of frost that must be hacked off before serving, and the cold magic in the brew must be allowed to sit for at least four minutes before it's warm enough to not be painful going down. All that being said, there isn't a traveler alive who doesn't hope to stumble upon a bottle under the counter in a desert bar.",
        author: 'Val_Ritz'
      },
      {
        name: "Steve's Mead",
        type: 'Mead',
        cost: 35,
        description: "This bottle of mead might have had a label, once, but it appears to have been torn off. In its place, painted directly on the bottle, are the words 'STEVE'S MEAD' in blocky, crude letters. Clearly, Steve is not around to claim his mead, but in his absence the cork appears to be permanently and irrevocably stuck in the mouth of the bottle.",
        author: 'Val_Ritz'
      },
      {
        name: 'Self-important Prick',
        type: 'Brown ale',
        cost: 36,
        description: "The ale inside this bottle isn't terribly unusual, aside from being harsh and bitter. The true draw is the printing on the bottle, which reads 'Self-Important Prick' in white letters. Under the lettering is a rendition of a face--a rendition that changes to reflect whoever the drinker dislikes the most at that particular time. There are allegations that drinking the ale results in heightened animosity toward the depicted person, but it might just be a result of reminding them that that person exists in the first place.",
        author: 'Val_Ritz'
      },
      {
        name: 'Deep Grog',
        type: 'Blackest Tot',
        cost: 44,
        description: "The darkest of naval rum taken from sunken sips mixed with saltwater taken from the pelagic depths of the Elemental Plane of Water. Black and cold, with a syrupy mouthfeel. Tastes of brine and molasses with a distinct bitterness. Reserved for first time travelers to The City of Glass, and served as a shot with a still beating fish heart. Also disparagingly known as Aboleth's Piss.",
        author: 'twocalf'
      },
      {
        name: 'Old Polder Genever Gin',
        type: "Spirit's Spirits",
        cost: 49,
        description: "The recipe for this liquor was pulled from the ruins of the necropolis of Polder. Clear or just faintly brown, sweet with juniper and malt. More like a whiskey than a gin. Purportedly aged in oak barrels with a single golden coin taken from the dead city, luck be damned. Said to be able to distract hungry dead by offering shots. Popular gift on Spirt's Eve.",
        author: 'twocalf'
      },
      {
        name: 'Hyperborean Cider',
        type: 'Bottled Sunshine',
        cost: 46,
        description: 'Fermented with juice made from apples collected from the Celestial Plane. Gloriously, radiantly golden, no head, ever, and never sours. Sweet and warm, with hints of clove, cinnamon, and sunrises. You can still get a hangover, don’t believe that myth, and there are few things in the multiverse worse than being hungover on the Celestial Plane. Everyone is singing and everything IS SO VERY BRIGHT.',
        author: 'twocalf'
      },
      {
        name: 'Airak',
        type: 'Djinn and Juice',
        cost: 88,
        description: 'Distilled on the Elemental Plane of Air by the Djinn in a process that uses no machinery, but by captive air elementals controlling the temperatures and pressures while the liquid free floats in the air. Clear when poured but will louche when exposed to normal air pressure. Tastes of licorice, anise, and a warm breeze with a slight bitter aftertaste. Makes you lightheaded, maybe literally. Best mixed.',
        author: 'twocalf'
      }
    ],
    overheard: [
      'Dragon? What dragon?',
      'That lady over there, I wouldn’t talk to her, one time she turned me into a rabbit.',
      'Honestly, I saw this strange ghost, nearly crapped my pants!',
      'Yes, everyone knows about that old hermit, he lives by himself. Oh? You’ve never heard of him, let me tell yah.',
      'The ground shook last night! I thought for a heartbeat it might have been something I ate!',
      'One time this bloke strolls up and tells me that he was marooned on an island! And that he rode some sea turtles or something, I figured he’d had a few too many.',
      'Weirdest thing, the lights in the night sky. For the most part they look like a beautiful reflection, something the gods dreamed up, but the other night I swear I saw something moving up there.',
      'The barley soup at the local tavern will cure just about any ailment, I had a wart on my foot the size of my big toe! It was gone the day after yesterday.',
      'That old priestess I’ve see her walking at night, talking to herself.',
      "Nah it's just a myth that most cemeteries are haunted. You know what is really haunted? My love life!",
      'Normally I wouldn’t tell you this, but you seem like decent folk.',
      'There was a thief hanging around the market lately, I was the one who found him out. Caught him red handed, and told him to give me half, I did!',
      'One time I danced with a sprite, at least I thought it was a sprite… they are pretty big, aren’t they?',
      'I swear to the gods! There was a little leprechaun behind the tavern having himself a piss. I said “Hey Buddy!”',
      'That old horse of mine, she’s been around for years, my grandfather gave it to me, it was his horse! Can you believe that?',
      'I never gamble. Although…..',
      'Saw some giant tracks the other day, right outside of my house!',
      'Keep an eye out for those town guards, they’ll shake you down!',
      'Caught the biggest fish the other day, no word of a lie, it was this… big!',
      'I said “you know what, I don’t believe your prophecies!” And all they did was dismiss me, and walked away. Can you believe that?',
      'I wouldn’t let anyone down, I’ve spent my life keeping people alive.',
      'We are always looking for farmhands, all we ever get is henchmen around here, what is up with that?',
      'I could do with a few less adventurers in this town, they come in and drink all the good ale!',
      'That blacksmith is making a suit of gold armour! Well at least I think it was gold anyways, it was really shiney!',
      "You know what is weird, it's like there’s a sense of something else going on, like we are all in the imagination of some mad genius, is it just me?",
      'Never seen a mermaid, I saw a goat swim once though.',
      'Are you so sure about everyone in your group?',
      'Honestly this town needs an enema, or something like that, Is there a potion that we can get for those stuffy political types?',
      'The only way to earn your keep around here is to get down to work. Traipsing all over the countryside, adventuring? That’s not work! Plowing fields is work.',
      'I don’t have any silly superstitions about my gambling dice.',
      'I was out hunting the other day, came across a bunch of deer south of the town.',
      'Saw a bloke on the road, he was trying to sell me a bag of beans, told him to go the other way, I don’t need any beans! I’ve got a whole field full of em.',
      'Why is it that princess’s always get kidnapped and dragged off? How come you never hear of some fancy-pants prince getting kidnapped. You know if I was apt to it, I might try that. Rewrite a bit o’ history.',
      'I heard about this old book, well my neighbour was talking about this old book. Sounded kind of interesting, but I can’t read. Weird runes in it.',
      'There was never anything to worry about, they made this big deal about what went down.',
      "Maybe we ought to think this through, you're telling me that you saw a bunch of werewolves the other night, and the guard doesn’t want to do anything about it. And now you're saying you want to go out and kill them?",
      'I’ve got to get up early tomorrow, lots to do. Digging ditches, and graves.',
      'I tend to wonder if all these shadowy guilds really exist. You’ve heard of the assassins and thieves guilds, are they really that organized?',
      'WHAT HO! That’s what this guy always says every time he walks in, I don’t even know what that means? Do you?',
      'I’d like a snack, something cheesy.',
      'It seems like there is always someone begging the local priest to get healed. What are these people doing all the time?',
      'You ever notice that one in every two pirates you meet has a peg leg or arm? That’s odd, isn’t it?',
      'It’s really about the details, and the raspberry jam.',
      'That old myth about trolls turning into stone from the sunshine is false',
      'I kid you not, she had a head full of snakes!',
      'You ever lit oil on fire and throw it? It’s hilarious!',
      'No I haven’t seen your kids, you should really go out and find them. That’s not the best parenting.',
      "And I said \"yeah it's one of a kind,\" hahahah.",
      'So there I was, minding my own business, and all of a sudden this strange cat shows up in a tree.',
      'Never underestimate a pissed off barbarian, or my wife for that matter!',
      'You should probably spend some time fixing up your armour, it’s barely holding together.',
      'There is this river, that runs down from the mountains, amazing tasting water, but it’s green. Like lime green!',
      'Nope I’ve never heard of that god, are you sure you have the spelling right?',
      'Everything is possible within reason, it honestly depends on your outlook. Oh, and what time it is.',
      'You should have seen his face when I told him he was invisible. That mad hatter ran across the street to steal tomatoes.',
      'I’ve never met a goblin with a sense of humour.',
      'I swear every time I meet an adventurer, they tell me about falling into pit traps, who designed all these things? Why do you keep falling into them? You would think once is enough right?',
      'Nope nevermind… I think I just saw an illusion. Wait a second….',
      'You know what’s really stupid? Trying to sleep out in the wilderness.',
      'That was the worse case of bedbugs I’ve ever had!',
      'Pardon me? Yes do you know if there’s any grey mustard at this tavern?',
      'Why do all wizards have beards anyways? Is that some kind of ritualistic club thing that I don’t know about? And why the moldy towers in the middle of nowhere?',
      'Sure you saw a vampire, sure.',
      'Don’t you find it odd that there’s always a gent sitting in the corner with his hood up trying to not attract any attention to himself?',
      'You’re going to have to speak up, that damn bard was playing bagpipes again!',
      "I think you're mistaking me for someone who cares.",
      'It was an incredibly uplifting religious experience!',
      'Why are you hopping on one foot? Or nevermind, I think I’ve had too much to drink. What can I do for you?',
      'You couldn’t pay me enough to go into that cave, smells like bad cheese!',
      'My uncle hugged a bugbear once.',
      'That lady serving the drinks? Whatever you do, don’t call her by her first name. It’s "Shirley"—don’t do it though.',
      'That is the absolute last time I drink in this establishment!',
      'Hey you big lug, wanna arm wrestle?',
      'Hold my beer while I kiss your elf.',
      'Everyone knows there’s no such thing as lizardmen, old ladies made that up to scare their grandkids.',
      'I’m not saying that I’m the king, I’m just saying have you ever seen us both in a room at the same time?',
      'I hear that Orcs dance when they beat up adventurers, is that true?',
      'So there we were sitting in The Green Dragon, our feet up on a stool, listening to some good music, and in walks this great big guy who’s quite grumbly!',
      'Most of the stories you will hear in here are unlikely and in some cases lies.',
      'If you’re ever on fire, stop, drop and roll. Well, unless it’s magical fire, then I have no idea.',
      'The gods must seriously be crazy!',
      'I like knitting, do you?',
      'Ever drunk whiskey with a dwarf? I have! And I still have a hangover.',
      'There’s this long story about a sword and a stone, I don’t really want to get into it.',
      'Some days you\'re the knight, other days you\'re the dragon.',
      'Never once did I say that. I did say…',
      'All right, we’ve all heard the story about \'breeyark,\' if you don’t know what it means by now, you’re an idjit.',
      'Of course there’s a merchant looking for a caravan guard—why do you ask?',
      'See this here scar? I got that when I was running from a direwolf. Good thing there was a tree I could climb up!',
      'Remember to always have someone like an elf or a dwarf in your party, those types can see in the dark!',
      'There’s a local farmer, sells some pretty good rations, if you\'re going out on a hike.',
      'Best sleep ever! No, it wasn’t in this inn. I’m just saying I slept really well last night.',
      'I’ve heard that some merchants will pay good gold for minotaur horns.',
      'HICCUP! Well that was well brought up.',
      'Pretend I’ve never met you before. All right, now go away.',
      'I was thinking about having a look around some old ruins. What do you say, want to come along?',
      'If you ever find one of those bags of holding, don’t ever put another bag of holding into it. Bad idea.'
    ]
  }
}
