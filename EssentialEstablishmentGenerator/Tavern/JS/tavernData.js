
setup.tavern = {
  rollData: {
    wealth: [
      [95, 'kingly', 800, 400],
      [80, 'aristocratic', 400, 200],
      [70, 'wealthy', 200, 80],
      [60, 'comfortable', 50, 40],
      [50, 'modest', 30, 30],
      [25, 'poor', 10, 6],
      [15, 'squalid', 7, 3],
      [0, 'destitute', 6, 2]
    ],
    size: [
      [95, 'cavernous'],
      [80, 'huge'],
      [70, 'quite large'],
      [60, 'large'],
      [50, 'spacious'],
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
      [80, 'perfectly prepared, with fresh sheets and a lemon scent in the air of the room'],
      [75, 'recently prepared and well cleaned'],
      [70, 'freshly cleaned and neat'],
      [60, 'tidy and neat'],
      [50, 'reasonably clean'],
      [40, 'somewhat tidy'],
      [30, 'disgusting'],
      [20, 'teeming with rats'],
      [10, 'rather filthy'],
      [0, 'festering with bugs']
    ],
    expertise: [
      [80, 'masterful'],
      [70, 'exceptional'],
      [60, 'superior quality'],
      [50, 'finely crafted'],
      [40, 'well crafted'],
      [30, 'sloppily made'],
      [20, 'somewhat amateur'],
      [10, 'amateur'],
      [0, 'blatantly amateur']
    ],
    roughness: [
      [80, 'bloodthirsty'],
      [60, 'rough'],
      [50, 'alright'],
      [40, 'placid'],
      [30, 'calm'],
      [20, 'tranquil'],
      [10, 'serene'],
      [0, 'utterly serene']
    ],
    reputation: [
      [80, 'famous'],
      [60, 'well known'],
      [40, 'famoush-ish'],
      [20, 'reviled'],
      [0, 'infamous']
    ]
  },
  games: [
    {
      name: 'Passe-dix',
      type: 'chance game',
      description: "You see a <<profile $npcs[$NPCgamer.key] $NPCgamer.descriptor>> take three six-sided dice, and then roll them. <<print $NPCgamer.heshe.toUpperFirst()>> roars with pleasure as the dice come to a total of <<print random(11, 18)>>, and grabs $NPCgamer.hisher winnings from a <<profile $npcs[$NPCgamebanker.key] $NPCgamebanker.descriptor>> who is holding a carrot. The dice moves to the next player, and the $NPCgamebanker.weight <<print $NPCgamebanker.raceSingular>> with the carrot (which clearly signifies who is acting as the banker) hands it to the next person in the circle, and everyone that's playing hands the new banker some coins. The player then rolls the dice, but only rolls a total of <<print random(5, 9)>>, which is met with <<print either ('boos and jeering', 'disappointed sighs', 'extreme disappointment', 'good-natured teasing')>>.",
      rules: 'Passe-dix is played with three dice. There’s always a banker, and the number of players is unlimited. The first gamer rolls: every time he throws UNDER ten he (and all the other players in the game) lose the specified stake, which goes to the banker. Every time he rolls ABOVE ten (or PASSES TEN–whence the name of the game), the banker must return double the stake to all the players in the game. After three losses of the roller (no matter how many wins), the roller position is passed to another gamer in the circle. The banker changes after each roll.',
      bet: random(15, 25)
    },
    {
      name: 'Highest Points',
      type: 'chance game',
      description: 'A <<profile $npcs[$NPCgamebanker.key] $NPCgamebanker.descriptor>>, and a <<profile $npcs[$NPCgamer.key] $NPCgamer.descriptor>> are sitting in the middle of the room with two whittled dice each. They chuck <<money $taverngames.bet>> on the table, then roll, and the one that rolled higher grins as they grab the copper.',
      rules: '2 six-sided dice, 2 players: each roll both dice and the highest sum wins.',
      bet: random(2, 5)
    },
    {
      name: 'Cross and Pile',
      type: 'chance game',
      description: 'A <<profile $npcs[$NPCgamer.key] $NPCgamer.descriptor>> and a <<profile $npcs[$NPCgamebanker.key] $NPCgamebanker.descriptor>> sit around a large table, and take turns flipping a coin. As the coin flies mid-air, the $NPCgamer.weight $NPCgamer.race calls out the result, and guesses correctly, grabbing $NPCgamer.hisher meager winnings.',
      rules: 'Two players choose each side of a coin, and then the coin is flipped. The top side after flipping the coin is the one that wins.',
      bet: random(7, 14)
    },
    {
      name: 'Thimble Rig',
      type: 'guessing game',
      description: "A <<profile $npcs[$NPCgamebanker.key] $NPCgamebanker.descriptor>>'s quick hands, a pair of eyes belonging to a <<profile $npcs[$NPCgamer.key] $NPCgamer.descriptor>> watching carefully, a deal board, three thimbles, and a pepper-corn sit in the corner, along with a crowd of people watching the two. The game they play around the table with these curious articles is a sort of Lilliputian game at cups and balls; and the beauty of it lies in seeming to place the pepper-corn under one particular thimble, getting the $NPCgamer.raceNote who is playing to bet that it was there, and then winning $NPCgamer.hisher money by showing that it is not.",
      rules: 'The object of the game is to guess which thimble the peppercorn is under; sort of like a miniature cup and balls.',
      bet: random(4, 9)
    },
    {
      name: 'Arm Wrestling',
      type: 'strength game',
      description: "A <<profile $npcs[$NPCgamer.key] $NPCgamer.descriptor>> and a <<profile $npcs[$NPCgamebanker.key] $NPCgamebanker.descriptor>> sit across from each other, their right arms' elbow on the table, holding each others hand in their palm. A referee counts down from three, and as soon as he shouts 'go'!, the two start straining against each other, fighting to push the other's hand down through sheer force of will.",
      rules: '<blockquote> <<print random(12, 25)>> DC Athletics Check</blockquote>',
      bet: random(6, 12)
    },
    {
      name: 'Two-Up',
      type: 'gambling game',
      description: 'A small crowd of people are gathered around a table, where two people flip two coins in the air, with one <<profile $npcs[$NPCgamer.key] $NPCgamer.descriptor>> groaning whenever they both turned heads, and another <<profile $npcs[$NPCgamebanker.key] $NPCgamebanker.descriptor>> greedily grabbing the coins from the man in charge of overseeing the bets whenever they both turn tails, flicking the overseer a copper for his troubles.',
      rules: "Two coins are flipped by the 'spinner', who bets against another. Both heads wins, both tails loses, and one of each calls for another cointoss, with the 'spinner' losing out on five consecutive re-tosses.",
      bet: random(4, 10)
    },
    {
      name: 'Morra',
      type: 'guessing game',
      description: 'A drunk looking <<profile $npcs[$NPCgamer.key] $NPCgamer.descriptor>> pulls his hand out from behind his back and shouts <<print random(0, 15)>>. Two other people do the same thing and after a moment the $NPCgamer.raceNote <<print either("cries out in joy", "cheers loudly", "hangs his head in defeat", "lots out a quiet sob, and hands another person a small coin purse")>>.',
      rules: 'Between two and four people throw out a single hand with any number of fingers held up. Right before the hands are shown, each player will call out how many fingers they think will be held up in total between each player. If a player guesses the correct number of fingers they get a point, and it takes three points to win.',
      bet: random(4, 10)
    }
  ],
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
  entertainment: [
    'A bard is telling a story about the player’s latest act of daring do. He’s embellishing quite a bit. When he recognizes the party he makes a big spectacle.',
    'A bard is telling the story of the player’s latest exploit. It’s an obvious character assassination.',
    'A local bardic group, The Rolling Boulders, are performing, and a large crowd of drunken groupies will not stop screaming.',
    "A beggar offers to sing for a few coppers. You heard him singing to the last table. He's awful.",
    'A sassy fortune teller has set up shop in a corner booth. She informs you that she sees a hangover in your near future.',
    "A stirring rendition of 'The Lady and the Faerie Dragon' has the crowd calling for an encore from the minstrels.",
    'The lute-player catches some undergarments from the crowd and drapes them across the ridiculous horned helm he wears.',
    'On stage tonight: The Deep Tones. A quartet of dwarves with long beards and deep voices singing a capella favorites from places without light (or proper music).',
    'On stage tonight: Shaela Windspeaker. An elf-maid singer-songwriter with a bit of a whiny voice who is slowly making her way through her most recent song of protest against the previous and the present centuries of war.',
    'A nervous show-wizard on the small stage is doing tricks with Prestidigitation for the un-amused patrons.',
    'There is a pair of musicians warbling well known drinking songs. They have made an impromptu stage out of several tables. One of them seems to be tilting precariously.'
  ],
  get: {
    patrons (town, tavern) {
      const key = Object.keys(setup.tavern.patrons)
      return setup.tavern.patrons[key[random(0, key.length)]](town, tavern)
    },
    carousing (town, tavern) {
      const carousing = {
        pickpocket () { return 'A pickpocket lifts ' + dice(5, 10) + ' gold from you.' },
        brawl () { return 'A bar brawl leaves you with a scar.' },
        memories () { return 'You have fuzzy memories of doing something very, very illegal, but can’t remember exactly what.' },
        banned (tavern) { return 'You are banned from ' + tavern.name + ' after some very obnoxious behaviour.' },
        quest (town) { return 'After a few drinks, you swore in the ' + town.type + ' square to undergo a dangerous quest.' },
        married () { return 'Surprise! You got engaged.' },
        streaking (tavern) { return 'Streaking naked down ' + tavern.road + ' seemed like a good idea.' },
        nickname () { return 'Everyone is calling you "' + ['puddle drinker', 'boot licker', 'a good boy', 'friendo', 'a real hoopy frood', 'mutton chops'].seededrandom() + '", but nobody will tell you why.' },
        insult (town, tavern) {
          const faction = setup.factionsForType(town, 'leadershipType', 'individual')
          console.log(faction)
          return 'You accidentally insulted the <<profile `$npcs[' + JSON.stringify(faction.leader.key) + ']` leader>> of the ' + faction.type + ' ' + faction.wordNoun + ', ' + setup.profile(faction, '', 'town.factions') + ', and only a public apology will let you do business with them again.'
        },
        anotherQuest (town) {
          const faction = setup.factionsForType(town, 'leadershipType', 'individual')
          console.log(faction)
          return 'You swore to complete some quest on behalf of the ' + faction.type + ' ' + faction.wordNoun + ', ' + setup.profile(faction, '', 'town.factions') + '.'
        },
        gaffe () { return 'A social gaffe has made you the talk of the town.' },
        suitor (town) {
          const npc = setup.createNPC(town, { isThrowaway: true })
          return 'A particularly obnoxious person called ' + setup.profile(npc) + ' has taken an interest in you romantically.'
        },
        wizard (town) {
          const npc = setup.createNPC(town, { dndClass: 'wizard', isThrowaway: true })
          return 'You have made a foe out of a local spellcaster called ' + setup.profile(npc) + '.'
        },
        festival () { return 'You have been recruited to help run a local festival.' },
        toast () { return 'You made a drunken toast that scandalized the locals.' },
        impress () { return 'You spent an additional 100 gp trying to impress people.' },
        noble () { return 'A pushy noble family wants to marry off one of their scions to you.' },
        dance () { return 'You tripped and fell during a dance, and people cannot stop talking about it.' },
        debt (town) {
          const npc = setup.createNPC(town, { background: 'noble', hasClass: false, isThrowaway: true })
          return 'You have agreed to take on a noble called ' + setup.profile(npc, npc.firstName) + "'s debts."
        },
        joust (town) {
          const npc = setup.createNPC(town, { dndClass: 'fighter', background: 'soldier', gender: 'man', isThrowaway: true })
          return 'You have been challenged to a joust by a knight called ' + setup.profile(npc) + '.'
        },
        foe (town) {
          const npc = setup.createNPC(town, { background: 'noble', hasClass: false, isThrowaway: true })
          return 'You have made a foe out of a local noble called ' + setup.profile(npc) + '.'
        },
        rumours () { return 'You have become the target of a variety of embarrassing rumors.' },
        wasteful () { return 'You spent an additional 500 gp trying to impress people.' },
        boring (town) {
          const npc = setup.createNPC(town, { background: 'noble', hasClass: false, isThrowaway: true })
          return 'A  boring noble called ' + setup.profile(npc) + ' insists you visit each day and listen to long, tedious theories of magic.'
        }
      }
      const keys = Object.keys(carousing)
      return carousing[keys[random(0, keys.length)]](town, tavern)
    },
    lookAround (tavern) {
      const bartender = tavern.bartender
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
          note:
          'It must be peak hour for the ' + tavern.wordNoun + '. The barmaid is running back and forth between customers and the kitchen, trying desperately to keep ontop of the ever growing requests for more ale.'
        },
        {
          population: 80,
          roughness: 40,
          note: 'The ' + tavern.wordNoun + ' is packed, and the patrons are clamouring to find the few barmaids that are on staff.'
        },
        {
          population: 80,
          roughness: 20,
          note: "There's barely enough room to stand, let alone find a seat in the " + tavern.lighting + ' ' + tavern.wordNoun + '.'
        },
        {
          population: 60,
          roughness: 60,
          note: 'The ' + tavern.wordNoun + " is packed with patrons, and you're pushed to the side as somebody makes for the latrine in a hurry."
        },
        {
          population: 70,
          roughness: 60,
          note:
          "It's peak hour for " + tavern.name + ' and you can tell that the bartender is concerned about a fight breaking out.'
        },
        {
          population: 70,
          roughness: 20,
          note: 'The ' + tavern.wordNoun + " is pretty packed with patrons, and it's difficult for you to find a seat."
        },
        {
          population: 60,
          roughness: 20,
          note:
          'The ' + tavern.wordNoun + ' is quite full, and the owner is clearly enjoying the amount of business ' + bartender.hisher + tavern.wordNoun + ' is receiving.'
        },
        {
          population: 50,
          roughness: 60,
          note:
          "There's a fair number of people in the " + tavern.wordNoun + ' with quite a few swords on display.'
        },
        {
          population: 50,
          roughness: 20,
          note:
          "There's a decent number of people in " + tavern.name + ', and you manage to find a seat without too much trouble.'
        },
        {
          population: 40,
          roughness: 60,
          note: 'The clientele is pretty rough, and might have scared off some of the less rambunctious potential customers.'
        },
        {
          population: 40,
          roughness: 20,
          note: "There's a reasonable amount of customers in the " + tavern.wordNoun + '. The barmaid is happily walking back and forth from the kitchen, taking out plates as they are delivered.'
        },
        {
          population: 30,
          roughness: 80,
          note: "The few people that are in the tavern bear scars, and openly talk of their violent exploits. It's pretty clear that they have scared away any regular clientele."
        },
        {
          population: 30,
          roughness: 60,
          note:
          'There are basically no people in the tavern, save for a few battle-hardened men talking in the corner.'
        },
        {
          population: 30,
          roughness: 20,
          note: tavern.name + " is basically empty, and there's not much for the barmaid to do, who settles for polishing a glass."
        },
        {
          population: 20,
          roughness: 60,
          note:
          "There's not very many customers in " + tavern.name + ' at the moment. You see a couple of adventurers hunked over in the corner, quietly discussing battle plans, but nothing of particular interest in the clientele.'
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
      const bartender = tavern.bartender
      const menu = [
        { wealth: 80,
          roughness: 80,
          note:
          ["There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the game that's on menu. " + bartender.name + " proudly tells you that there are no stinkin' vegetables, and that " + tavern.name + ' stocks only the finest meats.',
            "The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's available to drink, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. The server then tells you that while " + tavern.name + ' is proud of its menu, it caters to an exclusively carnivorous diet.'].seededrandom()
        },
        { wealth: 80,
          roughness: 30,
          note:
          ["There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the food that's on menu. The waitstaff tell you that " + tavern.name + ' is proud to be 100% violence free; upon further clarification, this is revealed to mean that there is not a single bone of meat in the entire ' + tavern.wordNoun + '.',
            "The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's on menu, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. The waitstaff tell you that " + tavern.name + ' is proud to be 100% violence free; upon further clarification, this is revealed to mean that there is not a single bone of meat in the entire ' + tavern.wordNoun + '.'].seededrandom()
        },
        { wealth: 80,
          roughness: 50,
          note:
          ["There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the game that's on menu.",
            "The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's on menu, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. It goes without saying that the kitchen is able to accomodate even the pickiest of royalty."].seededrandom()
        },
        { wealth: 60,
          roughness: 80,
          note:
          ["There's ales available. The food is standard fare, with roast beef, pork, and mutton on the menu for food, but curiously no vegetables. " + bartender.name + " spits when you mention this, and says 'no stinkin' veggies around here. We eat meat and we like it, so if you don't like it, yer not eatin'.",
            "There's your standard beers, with the " + tavern.wordNoun + " specialising in ales, which are allegedly quite good. As far as food is concerned, there's regular fare of beef, pork, and mutton, but strangely, no breads, cheeses, or potatoes of any description; you hear another patron loudly state that he loves not having to put up with those 'pointy ears complaining about the lack of green stuff' in " + tavern.name + '.'].seededrandom()
        },
        { wealth: 60,
          roughness: 30,
          note:
          ["There's ales available. The food is a peculiarly limited menu; roast vegetables, breads, cheeses, but no meats, despite " + tavern.name + ' clearly being able to afford it.',
            "There's your standard beers, with the " + tavern.wordNoun + " specialising in ales, which are allegedly quite good. As far as food is concerned, there's breads, cheeses, and all the vegetables you could ever ask for, but not a single bone of meat is available.",
            'Drinks are pretty standard, with a house lager being twenty percent off tonight. The menu is sadly lacking any meats, and when you ask ' + bartender.name + ' about it, ' + bartender.heshe + ' smiles, and says that ' + bartender.heshe + " is an animal lover, and wouldn't be able to forgive " + bartender.himherself + ' if an animal came to harm due to ' + bartender.hisher + ' business.'].seededrandom()
        },
        { wealth: 60,
          roughness: 20,
          // bartender.race === "elf",
          note: 'Drinks are pretty standard, with the house lager being twenty percent off tonight. The menu is sadly lacking any meats, and when you ask ' + bartender.name + ' about it, ' + bartender.heshe + ' smiles, and says that ' + bartender.heshe + " is an animal lover, and wouldn't be able to forgive " + bartender.himherself + ' if an animal came to harm due to ' + bartender.hisher + ' business.'
        },
        { wealth: 60,
          roughness: 30,
          note:
          ["There's ales available. The food is standard fare, with roast beef, pork, and mutton on the menu for food.",
            "There's your standard beers, with the " + tavern.wordNoun + " specialising in ales, which are allegedly quite good. As far as food is concerned, there's regular fare of beef, pork, breads and cheeses, and mutton."].seededrandom()
        },
        { wealth: 40,
          roughness: 60,
          note:
          ["There's the usual house-brewed ale on tap, but it is warm and undercarbonated. You suspect that " + bartender.firstName + ' has watered it down. As far as food is concerned, there is the usual mutton and breads available.',
            '' + bartender.firstName + " says that they have some freshly brewed ale, although you soon discover that to be a lie; it's lukewarm, and barely carbonated."].seededrandom()
        },
        { wealth: 40,
          roughness: 30,
          note:
          ["There's the usual house-brewed ale on tap, but it is warm and undercarbonated. As far as food is concerned, there is the usual mutton and breads available.",
            "There's a limited range of beers, some of which have very clearly soured.",
            'The food on offer is rather plain, with nothing terribly interesting or appetizing. The beer is unfortunately not much better.'].seededrandom()
        },
        { wealth: 20,
          roughness: 30,
          note: "There's what can only be described as piss available to drink, and the food isn't much better; other patrons can be seen chewing away at stale pieces of bread."
        },
        { wealth: 10,
          roughness: 30,
          note: "There's what can only be described as piss available to drink, and the food isn't much better; other patrons can be seen chewing away at stale pieces of bread."
        }
      ]
      return menu
    },
    sleep (tavern) {
      const sleepData = [
        {
          restfulness: 90,
          sleepEasy: 2,
          note: "You unsurprisingly get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
        },
        {
          restfulness: 90,
          sleepEasy: 0,
          note: "You get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
        },
        {
          restfulness: 90,
          sleepEasy: -2,
          note: "You surprisingly get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
        },
        {
          restfulness: 80,
          sleepEasy: 2,
          note: "You unsurprisingly get a great night's sleep, and awake feeling refreshed and reinvigorated"
        },
        {
          restfulness: 80,
          sleepEasy: 0,
          note: "You get a great night's sleep, and awake feeling refreshed and reinvigorated"
        },
        {
          restfulness: 80,
          sleepEasy: -2,
          note: "You surprisingly get a great night's sleep, and awake feeling refreshed and reinvigorated"
        },
        {
          restfulness: 70,
          sleepEasy: 2,
          note: "You unsurprisingly get a good night's sleep, and awake feeling refreshed"
        },
        {
          restfulness: 70,
          sleepEasy: 0,
          note: "You get a good night's sleep, and awake feeling refreshed"
        },
        {
          restfulness: 70,
          sleepEasy: -2,
          note: "You surprisingly get a good night's sleep, and awake feeling refreshed"
        },
        {
          restfulness: 50,
          sleepEasy: 2,
          note: "You get an alright night's sleep, which is disappointing considering the quality of " + tavern.name + ', but you awake feeling reasonably refreshed'
        },
        {
          restfulness: 50,
          sleepEasy: 0,
          note: "You get an alright night's sleep, and awake feeling reasonably refreshed"
        },
        {
          restfulness: 50,
          sleepEasy: -2,
          note: "You get an alright night's sleep despite the poor quality of " + tavern.name + ', but you awake feeling reasonably refreshed'
        },
        {
          restfulness: 30,
          sleepEasy: 2,
          note: "You get an awful night's sleep, which is disappointing considering the quality of " + tavern.name + ', and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful'
        },
        {
          restfulness: 30,
          sleepEasy: 0,
          note: "You get an awful night's sleep, and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful"
        },
        {
          restfulness: 30,
          sleepEasy: -2,
          note: "You get an awful night's sleep, which is unsurprising considering the quality of " + tavern.name + ', and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful'
        },
        {
          restfulness: 10,
          sleepEasy: 2,
          note: "The night seems to go on forever, and you just can't get to sleep, despite the comforts provided. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
        },
        {
          restfulness: 10,
          sleepEasy: 0,
          note: "The night seems to go on forever, and you just can't get to sleep. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
        },
        {
          restfulness: 10,
          sleepEasy: -2,
          note: "The night seems to go on forever, and you just can't get to sleep, probably due to the conditions that you were expected to sleep in. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
        }
      ]
      return sleepData
    },
    draws (town, tavern) {
      const bartender = tavern.bartender
      const draws = [
        {
          draw: 'attractive waitstaff',
          drawFeature: "You see one of the barmaids talking to a patron, and it's difficult to convince your eyes there's a more pleasant sight in the room, until you see another equally attractive barmaid pulling a pint at the bar."
        },
        {
          draw: 'resident bard',
          // drawFunction: function createBard (tavern) {
          //   console.log('Created a bard as part of the tavernDraw function.')
          //   tavern.bard = setup.createNPC(town, { dndClass: 'bard', gender: 'man' })
          //   return {
          //     tavern
          //   }
          // },
          drawFeature: "You see a bard singing a love song in the corner of the room, and are drawn to his pure, melifluous voice. He's quite a good singer, and the patrons are nodding along to the song appreciatively."

          // drawFeature: 'You see a bard singing a love song in the corner of the room, and are drawn to ' + tavern.bard.hisher + ' pure, melifluous voice. ' + tavern.bard.heshe.toUpperFirst() + "'s quite a good singer, and the patrons are nodding along to the song appreciatively."

        },
        {
          draw: 'witty banter with the waitstaff',
          drawFeature: "You see a gruff looking man catcall after one of the barmaids, and she looks over her shoulder, and replies something that you can't quite make out. Despite this, it's clear that whatever she said destroyed the man, as his friends burst into laughter while he deflates rather rapidly."
        },
        {
          draw: 'crude jokes the bartender makes',
          // drawFunction: function createPatron (tavern) {
          //   console.log('Created a tavern patron as part of the tavernDraw function.')
          //   tavern.patron = setup.createNPC(town, { hasClass: false, gender: 'man' })
          //   return {
          //     tavern
          //   }
          // },
          drawFeature: 'You see the bartender is talking to a <<profile $tavern.patron $tavern.patron.descriptor>>. ' + bartender.heshe.toUpperFirst() + ' smiles, and then says something, making the $tavern.patron.descriptor go white as a sheet, and immediately leave the establishment, with ' + bartender.firstName + " laughing, calling $tavern.patron.himher 'too goody-two-shoes to be able to handle " + tavern.name + '.'
        },
        {
          draw: "proximity to the thieves' guild headquarters",
          // drawFunction: setup.createFaction({'type': "thieves"}),
          drawFeature: "You can see a sign by the door stating 'REPEATED PICKPOCKETING WILL RESULT IN THE THIEVES' GUILD BEING BANNED FROM THESE PREMISES'. Clearly, " + tavern.name + ' has an issue with the thieves guild.'
        },
        {
          draw: 'warmth inside',
          drawFeature: tavern.name + ' is kept wonderfully toasty, and the warm air makes you comfortable and sleepy'
        },
        {
          draw: 'magic incense which is constantly burning',
          drawFeature: "You smell a peculiar aroma, which you can't quite place, only that it reminds you of the fond days of your childhood, until you see wafts of smoke trailing from behind the bar; there's a stick of incense burning, clearly at least somewhat magical.",
          drawFunction: function increaseTavernMagic (tavern) {
            console.log('Increased tavern magic!')
            tavern.roll.magic += 10
            return tavern
          }
        },
        {
          draw: 'proximity to the brothel',
          drawFeature: "You saw a sign outside which read 'No Soliciting', but inside, you see a much larger, more insistent sign which read 'NO SOLICITING. OF EITHER SORT'. Clearly, " + tavern.name + ' has an issue with the nearby whorehouse, [[$brothel.name|BrothelOutput]].'
        },
        {
          draw: 'proximity to the church',
          drawFeature: "You see a sign by the door which reads 'No proselytising'. Clearly, " + tavern.name + ' has an issue with the nearby church.',
          drawFunction: function increaseTavernMagic (tavern) {
            console.log('Increased tavern magic!')
            tavern.roll.magic += 10
            return tavern
          }
        },
        {
          draw: 'location by the river',
          drawFeature: tavern.name + ' overlooks a gorgeous river, which you can hear gently rushing by the ' + tavern.material + ' ' + tavern.wordNoun + " inside. A fisherman is sitting at the bar, talking about his day's catch, which he's clearly exaggerating."
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
          drawFeature: "You see that the bar has been recently cleaned, and there's a surprising lack of spittle on the floor of the " + tavern.wordNoun + '.'
        },
        {
          draw: 'lack of bedbugs',
          drawFeature: 'You see a patron enter the bar from the sleeping quarters. The bartender asks if she slept well, and she nods at the ' + bartender.weight + ' ' + bartender.manwoman + ', saying that she slept very well.'
        },
        {
          draw: 'magic bedbugs',
          drawFeature: "You see a patron enter the bar from the sleeping quarters, who's scratching his arms madly, with a doped up smile upon his face.",
          drawFunction: function increaseTavernMagic (tavern) {
            console.log('Increased tavern magic!')
            tavern.roll.magic += 10
            return tavern
          }
        },
        // {
        //   draw: 'drunk wizard',
        //   drawFunction: function (tavern) {
        //     tavern.roll.magic += 10
        //     var drunkWizard = setup.createNPC(town, {dndClass: 'wizard' })
        //     return {
        //       drunkWizard: drunkWizard,
        //       tavern: tavern
        //     }
        //   },
        //   drawFeature: "There's a " + drunkWizard.descriptor + ' thaumaturgist in the corner, who is practising cantrips as ' + drunkWizard.heshe + ' downs another pint. ' + drunkWizard.heshe.toUpperFirst() + " looks over at you, smiles, and says 'You can't cast drunk if you don't practice drunk!'"
        // },
        {
          draw: 'huge fireplace',
          drawFeature: 'You see a huge fireplace in the centre of the ' + tavern.wordNoun + ', which fills the surrounding air with a wonderful warmth and aroma due to the pot which hangs above it, contentedly bubbling over the embers.'
        },
        {
          draw: 'incredible view',
          drawFeature: 'You look out the window, and see that the view is indeed nothing to scoff at; the ' + tavern.wordNoun + ' is situated on a hill which overlooks the sleepy ' + town.type + ' of ' + town.name + ", and you can make out the specks of people walking about below. It's an unbelievable location for an inn."
        },
        {
          draw: 'nice view',
          drawFeature: 'You look out the window, and see that the view is indeed quite nice; the ' + tavern.wordNoun + ' is situated on a hill which overlooks the sleepy ' + town.type + ' of ' + town.name + ", and you can make out the specks of people walking about below. It's a nice location for an inn."
        }
      ]
      return draws.seededrandom()
    },
    description (tavern) {
      const bartender = tavern.bartender
      const descriptions = [
        {
          size: 90,
          wealth: 10,
          note: [tavern.name + ' is just one huge, ' + tavern.lighting + ' ' + tavern.cleanliness + ' room, with a small section of the hall cordoned off as the kitchen and bar area. Off to the side is a spiral staircase, which you would assume leads up to the lodgings.',
            tavern.name + ' is huge, ' + tavern.lighting + ', and ' + tavern.cleanliness + '. There are several large ' + tavern.material + ' tables.'
          ].seededrandom()
        },
        {
          size: 80,
          wealth: 10,
          note: [tavern.name + ' is quite large, ' + tavern.lighting + ', and ' + tavern.cleanliness + '. The ceiling is unusually high, and the amount of wood that ' + bartender.firstName + ' must go through would be immense. The dining hall has several large ' + tavern.material + ' tables, fit for up to twelve people each. Off to the side is a spiral staircase, which you would assume leads up to the lodgings.'

          ].seededrandom()
        },
        {
          size: 70,
          wealth: 10,
          note: [tavern.name + ' is a large building, with the ' + tavern.cleanliness + " bar occupying the ground floor, and the beds for patrons are on the floor directly above you. It's " + tavern.lighting + '.'

          ].seededrandom()
        },
        {
          size: 60,
          wealth: 10,
          note: [tavern.name + ' is nice and spacious. The bar is roomy and ' + tavern.lighting + ', with several stools in front of it for patrons that wish to while away the evening talking to ' + bartender.firstName + ". There's a couple large " + tavern.material + " tables, which are large enough to put out a map and still have room for your mugs of ale; perhaps a deliberate choice on the owner's part."

          ].seededrandom()
        },
        {
          size: 50,
          wealth: 10,
          note: [
            tavern.name + ' is a tall building, but not particularly spacious; the ' + tavern.cleanliness + ' bar occupies the ground floor which is ' + tavern.lighting + ', and you see a barmaid carrying a dish down from the stairs; the sign outside said that it had accomodation, so the beds must be on the third floor of the ' + tavern.material + ' building.',
            tavern.name + ' is a reasonably spacious building that is ' + tavern.lighting + ", and very similar to the countless other taverns that you've come across in your times, right down to the specials board being somewhat battered with so many uses, and the dart board with many holes constantly seeing use.",
            tavern.name + ' is clearly a converted house; you can see that a bathroom was originally where the bar is, due to the unmistakable water staining that comes with bathtubs. The tavern is ' + tavern.cleanliness + ', and ' + tavern.lighting + '.'
          ].seededrandom()
        },
        {
          size: 40,
          wealth: 10,
          note: [tavern.name + ' is slightly cramped, and ' + tavern.lighting + '. The ' + tavern.cleanliness + " tables are a touch too close to the wall, and the bar area is the front of the kitchen, which doesn't seem to be a very efficient set up. The " + tavern.wealth + ' establishment is clearly in need of an extension to relieve the somewhat small ' + tavern.material + ' pub of its congestion issues.'
          ].seededrandom()
        },
        {
          size: 30,
          wealth: 10,
          note: [tavern.name + ' is barely more than a large, ' + tavern.cleanliness + ' house; the ' + tavern.lighting + ' bar area is permanently crowded due to a bottleneck preventing barmaids from passing through without having to negotiate through thirsty patrons looking for refills.'
          ].seededrandom()
        },
        {
          size: 20,
          wealth: 10,
          note: [tavern.name + " is very obviously a house that's been converted into a " + tavern.wordNoun + ", probably as a hobby for the owner. It's unfortunately rather cramped inside, and taller patrons would be at risk of hitting their heads if they were careless inside the tiny " + tavern.material + ' building. The tavern is ' + tavern.cleanliness + ', and is ' + tavern.lighting + '.'
          ].seededrandom()
        }

      ]
      return descriptions
    }
  },
  patrons: {
    farmer (town) {
      const npc = setup.createNPC(town, { background: 'commoner', profession: 'farmer', gender: 'man' })
      return 'A poor ' + setup.profile(npc, 'farmer') + ' is trying to pay his bar tab with a sack of potatoes and a barrel of pickles.'
    },
    seacaptain (town) {
      const npc = setup.createNPC(town, { background: 'sailor', profession: "ship's captain", gender: 'man' })
      return 'A ' + setup.profile(npc, 'sea-captain') + ' has set up shop at a table and is trying to sell mementos and souvenirs from his latest great voyage of exploration. Birds, exotic coins, tiny mermaids, he has it all. Some of it looks fake though. A tiny bit looks disturbingly real.'
    },
    ranger (town) {
      const npc = setup.createNPC(town, { background: 'commoner', profession: 'hunter', dndClass: 'ranger', gender: 'man' })
      return 'A ' + setup.profile(npc, 'ranger') + ' sits alone in a corner, smoking. A hood covers most of his face. At his feet is a sleeping wolfhound. Everyone is giving him a wide berth.'
    },
    troll (town) {
      const npc = setup.createNPC(town, { background: 'commoner', profession: 'drunkard', gender: 'man' })
      return 'A lone ' + setup.profile(npc, 'troll') + ' is drinking at the end of the bar and softly crying and singing one country ballad after another.'
    },
    wizard (town) {
      const npc = setup.createNPC(town, { background: 'sage', profession: 'wizard', dndClass: 'wizard', gender: 'man' })
      return 'A stoned ' + setup.profile(npc, 'magician') + ' is fumbling his way through one awful card trick after another.'
    },
    elves (town) {
      const npc = setup.createNPC(town, { background: 'noble', profession: 'noble', race: 'elf', gender: 'woman', weapon: 'an obsidian bow' })
      return 'A mixed group of Elves are drinking bad wine and holding scented handkerchiefs up to their noses to keep out the stench. ' + setup.profile(npc, 'One') + ' has an obsidian bow strapped to her back.'
    },
    clown (town) {
      const npc = setup.createNPC(town, { background: 'commoner', profession: 'clown' })
      return 'A sad ' + setup.profile(npc, 'clown') + ' is drinking a beer alone.'
    },
    guards (town) {
      const npc = setup.createNPC(town, { background: 'soldier', profession: 'guard', dndClass: 'fighter' })
      return 'Two ' + setup.profile(npc, 'guards') + ' are arguing at a table over who the captain likes more by comparing almost identical spears and claiming to have the better one.'
    },
    suitor (town) {
      const npc = setup.createNPC(town, { background: 'noble', profession: 'noble', hasClass: false, gender: 'woman' })
      return 'A ' + setup.profile(npc, 'handsome young woman') + ' is holding court among some of her would-be suitors. Her father interrupts, and she stalks off embarrassed.'
    },
    stag (town) {
      const npc = setup.createNPC(town, { background: 'commoner', profession: 'farmer', gender: 'man' })
      return 'Some ' + setup.profile(npc, 'idiot') + ' is having a stag night. His friends are loud and obnoxiously harassing the barmaid.'
    },
    ladies (town) {
      const npc = setup.createNPC(town, { background: 'scholar', profession: 'librarian', gender: 'woman' })
      return "It's ladies night! And it's not disappointing... A few pretty little things from the weavers' guild are here, a couple of attractive healers from the temple, and the beautiful new town " + setup.profile(npc, 'librarian') + '.'
    },
    witch (town) {
      const npc = setup.createNPC(town, { background: 'hermit', profession: 'witch', dndClass: 'wizard', gender: 'woman' })
      return 'A surly old ' + setup.profile(npc, 'witch') + ' is drinking sherry while stroking the fat grey cat sitting on her lap.'
    },
    marilith (town) {
      const npc = setup.createNPC(town, { background: 'commoner', profession: 'barmaid', gender: 'woman' })
      return 'The ' + setup.profile(npc, 'barmaid') + ' is a marilith, mixing up four drinks at a time.'
    },
    succubus (town) {
      const npc = setup.createNPC(town, { background: 'commoner', profession: 'barmaid', gender: 'woman' })
      return 'The ' + setup.profile(npc, 'barmaid') + ' is a succubus, she seems to be making great tips.'
    },
    attendant (town) {
      return 'The attendant in the bathroom is a foul-smelling zombie. He offers you a mint crystal.'
    },
    mophand (town) {
      const npc = setup.createNPC(town, { background: 'commoner', profession: 'maid-servant', hasClass: false })
      return 'The ' + setup.profile(npc, 'toothless mop-hand') + " reminisces with a hobgoblin military has-been over ales about how an otyugh in the loo isn't as bad as the time a carrion crawler was in there."
    },
    doppelganger (town) {
      const npc = setup.createNPC(town, { background: 'commoner', profession: 'barmaid', gender: 'woman' })
      return 'The ' + setup.profile(npc, 'barmaid') + ' is a doppelganger. When she returns to your table with your drinks she has taken the form of one of your party.'
    },
    priest (town) {
      const npc = setup.createNPC(town, { background: 'sage', profession: 'priest', dndClass: 'cleric', weight: 'fat', weightRoll: 200 })
      return 'A ' + setup.profile(npc, 'fat priest') + " is doing an excellent jiggly dance in rhythm with the music. Either that or a gelatinous cube has made it's way onto the dance floor?"
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
      description: "The darkest of naval rum taken from sunken sips mixed with saltwater taken from the pelagic depths of the Elemental Plane of Water. Black and cold, with a syrupy mouth feel. Tastes of brine and molasses with a distinct bitterness. Reserved for first time travelers to The City of Glass, and served as a shot with a still beating fish heart. Also disparagingly known as Aboleth's Piss.",
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
    'Dragon? What Dragon?',
    'That lady over there, I wouldn’t talk to her, one time she turned me into a rabbit.',
    'Honestly I saw this strange ghost, nearly crapped my pants!',
    'Yes everyone knows about that old hermit, he lives by himself.  Oh? You’ve never heard of him, let me tell yah.',
    'The ground shook last night!  I thought for a heartbeat it might have been something I ate!',
    'One time this bloke strolls up and tells me that he was marooned on an island! And that he rode some sea turtles or something, I figured he’d had a few too many.',
    'Weirdest thing, the lights in the night sky.  For the most part they look like a beautiful reflection, something the gods dreamed up, but the other night I swear I saw something moving up there.',
    'The barley soup at the local tavern will cure just about any ailment, I had a wart on my foot the size of my big toe! It was gone the day after yesterday.',
    'That old priestess I’ve see her walking at night, talking to herself.',
    "Nah it's just a myth that most cemeteries are haunted.  You know what is really haunted?  My love life!",
    'Normally I wouldn’t tell you this, but you seem like decent folk.',
    'There was a thief hanging around the market lately, I was the one who found him out.  Caught him red handed, and told him to give me half, I did!',
    'One time I danced with a sprite, at least I thought it was a sprite….  They are pretty big aren’t they?',
    'I swear to the gods! There was a little leprechaun behind the tavern having himself a piss.  I said “Hey Buddy!”',
    'That old horse of mine, she’s been around for years, my grandfather gave it to me, it was his horse! Can you believe that?',
    'I never gamble.  Although…..',
    'Saw some giant tracks the other day, right outside of my house!',
    'Keep an eye out for those town guards, they’ll shake you down!',
    'Caught the biggest fish the other day, no word of a lie, it was this…… big!',
    'I said “you know what, I don’t believe your prophecies!”  And all they did was dismiss me, and walked away.  Can you believe that?',
    'I wouldn’t let anyone down, I’ve spent my life keeping people alive.',
    'We are always looking for farmhands, all we ever get is henchmen around here, what is up with that?',
    'I could do with a few less adventurer’s in this town, they come in and drink all the good ale!',
    'That blacksmith is making a suit of gold armour! Well at least I think it was gold anyways, it was really shiney!',
    "You know what is weird, it's like there’s a sense of something else going on, like we are all in the imagination of some mad genius, is it just me?",
    'Never seen a mermaid, I saw a goat swim once though.',
    'Are you so sure about everyone in your group?',
    'Honestly this town needs an enema, or something like that, Is there a potion that we can get for those stuffy political types?',
    'The only way to earn your keep around here is to get down to work, traipsing all over the countryside adventuring, that’s not work! Plowing fields is work.',
    'I don’t have any silly superstitions about my gambling dice.',
    'I was out hunting the other day, came across a bunch of deer south of the town.',
    'Saw a bloke on the road, he was trying to sell me a bag of beans, told him to go the other way, i don’t need any beans! I’ve got a whole field full of em.',
    'Why is it that princess’s always get kidnapped and dragged off? How come you never hear of some fancy pants prince getting kidnapped.  You know if I was apt to it, I might try that.  Rewrite a bit o’ history.',
    'I heard about this old book, well my neighbour was talking about this old book.  Sounded kind of interesting, but I can’t read.  Weird runes in it.',
    'There was never anything to worry about, they made this big deal about what went down.',
    "Maybe we ought to think this thru, your telling me that you saw a bunch of werewolves the other night, and the guard doesn’t want to do anything about it.  And now you're saying you want to go out and kill them?",
    'I’d like a snack, something cheezie.',
    'I’ve got to get up early tomorrow, lots to do.  Digging ditches, and graves.',
    'I tend to wonder if all these shadowy guilds really exist.  You’ve heard of the assassins & the thieves guilds, are they really that organized?',
    'WHAT HO! That’s what this guy always says every time he walks in, I don’t even know what that means? Do you?',
    'It seems like there is always someone begging the local priest to get healed.  What are these people doing all the time?',
    'You ever notice that one in every two pirates you meet has a peg leg or arm?  That’s odd isn’t it?',
    'It’s really about the details, and the raspberry jam.',
    'That old myth about trolls turning into stone from the sunshine is false',
    'I kid you not, she had a head full of snakes!',
    'You ever lit oil on fire and throw it? It’s hilarious!',
    'No I haven’t seen your kids, you should really go out and find them.  That’s not the best parenting.',
    "And I said “yeah it's one of a kind”,  hahahah.",
    'So there I was mind my own business and all of a sudden this strange cat shows up in a tree.',
    'Never underestimate a pissed off barbarian, or my wife for that matter!',
    'You should probably spend some time fixing up your armour, it’s barely holding together.',
    'There is this river, that runs down from the mountains, amazing tasting water, but it’s green.  Like lime green!',
    'Nope I’ve never heard of that god, are you sure you have the spelling right?',
    'Everything is possible within reason, it honestly depends on your outlook.  Oh and what time it is.',
    'You should have seen his face when I told him he was invisible.  That mad hatter ran across the street to steal tomatoes.',
    'I’ve never met a goblin with a sense of humour.',
    'I swear every time I meet an adventurer, they tell me about falling into pit traps, who designed all these things?  Why do you keep falling into them? You would think once is enough right?',
    'Nope nevermind… I think I just saw an illusion.  Wait a second….',
    'You know what’s really stupid?  Trying to sleep out in the wilderness.',
    'That was the worse case of bedbugs I’ve ever had!',
    'Pardon me?  Yes do you know if there’s any grey mustard at this tavern?',
    'Why do all wizards have beards anyways? Is that some kind of ritualistic club thing that I don’t know about? And why the moldy towers in the middle of nowhere?',
    'Sure you saw a vampire, sure.',
    'Don’t you find it odd that there’s always a gent sitting in the corner with his hood up trying to not attract any attention to himself?',
    'You’re going to have to speak up, that damn bard was playing bagpipes again!',
    "I think you're mistaking me for someone who cares.",
    'It was an incredibly uplifting religious experience!',
    'Why are you hopping on one foot? Or nevermind, I think I’ve had too much to drink.  What can I do for you?',
    'You couldn’t pay me enough to go into that cave, smelled like bad cheese!',
    'My uncle hugged a bugbear once.',
    'That lady serving the drinks, whatever you do don’t call her by her first name.  It’s shirley, don’t do it though.',
    'That is the absolute last time I drink in this establishment!',
    'Hey you big lug, wanna arm wrestle?',
    'Hold my beer while I kiss your elf.',
    'Everyone knows there’s no such thing as lizardmen, old ladies made that up to scare their grandkids.',
    'I’m not saying that I’m the king, I’m just saying have you ever seen us both in a room at the same time?',
    'I hear that Orc’s dance when they beat up adventurer’s, is that true?',
    'So there we were sitting in the “Green Dragon”, our feet up on a stool, listening to some good music, and in walks this great big guy who’s quite grumbly!',
    'Most of the stories you will hear in here are unlikely and in some cases lies.',
    'If you’re ever on fire, stop, drop and roll.  Well that is unless it’s magical fire, then I have no idea.',
    'The god’s must seriously be crazy!',
    'I like knitting, do you?',
    'Ever drank whiskey with a dwarf? I have!  And I still have a hangover.',
    'There’s this long story about a sword and a stone, I don’t really want to get into it.',
    'Somedays you are the knight, somedays you are the dragon.',
    'Never once did I say that.  I did say…',
    'Alright we’ve all heard the story about “breeyark”, if you don’t know what it means by now, you’re an idgit.',
    'But of course there’s a merchant looking for a caravan guard, why do you ask?',
    'See this here scar?  I got that when I was running from a direwolf.  Good thing there was a tree I could climb up!',
    'Remember to always have someone like an elf or a dwarf in your party, those types can see in the dark!',
    'There’s a local farmer, sells some pretty good rations, if your going out on a hike.',
    'Best sleep ever!  No it wasn’t in this Inn, I’m just saying I slept really well last night.',
    'I’ve heard that some merchants will pay good gold for minotaur horns.',
    'HICCUP! Well that was well brought up.',
    'Pretend I’ve never met you before.  Alright now go away.',
    'I was thinking about having a look around some old ruins.  What do you say, want to come along?',
    'If you ever find one of those bags of holding, don’t ever put another bag of holding into it.  Bad idea.'
  ]
}
