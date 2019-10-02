setup.townData = {
  ...(setup.townData || {}),
  name: {
    prefix: ['Green', 'Elms', 'Oak', 'Fair', 'Farren', 'Tall', 'Nar', 'Alla', 'Lans', 'San', 'Col', 'Fri', 'Plain', 'Hon', 'Far', 'Barrow', 'Shi', 'Mel', 'Mal', 'Bon', 'Bie', 'Can', 'Pol', 'Pan', 'Fald', 'Frior', 'Pol', 'Stone', 'Water', 'Leaf', 'Ice', 'Flame', 'Sol', 'Storm', 'Earth', 'Gleam', 'Star', 'Art', 'War', 'Heart', 'Hard', 'Fall', 'Rock', 'Doom', 'Oak', 'Tear', 'Raven', 'Badger', 'Snake', 'Lion', 'Hell', 'Rage', 'Brine', 'Rat', 'Buck', 'Lily', 'Core', 'Stench', 'Mage', 'God', 'Soil', 'Pure', 'Mal', 'Cam', 'Fen', 'Clear', 'Split', 'Founders', 'Heir', 'Fair', 'Spin'],
    suffix: ['dale', 'ten', 'den', 'ven', 'gen', 'len', 'lun', 'stun', 'ville', 'burn', 'view', 'nen', 'lan', 'sed', 'folk', 'ork', 'len', 'pan', 'rel', 'old', 'ten', 'tan', 'lend', 'vorn', 'vant', 'lid', 'lin', 'crest', 'bridge', 'run', 'catch', 'blade', 'haven', 'rise', 'more', 'light', 'main', 'blaze', 'place', 'tear', 'fold', 'rest', 'host', 'craft', 'lair', 'hollow', 'vale', 'hammer', 'pike', 'rail', 'spike', 'ring', 'henge', 'coil', 'spring', 'jaw', 'mark', 'hail', 'loch', 'child', 'keep', 'fort', 'brook', 'forth', 'melt', 'borourgh', 'ford', 'crawl', 'moral', 'combe', 'glen', 'garden', 'wish', 'fellow', 'ridge', 'ward']
  },
  // Prefixes and Suffixes for the road names of the town
  roads: {
    name: ['Castle', 'Keep', 'Kings', 'Queens', 'Prince', 'Princess', 'Lords', 'Ladies', 'Noble', 'Duke', 'Duchess', 'Rogue', 'Priest', 'Abbott', 'Pope', 'Spring', 'Winter', 'Summer', 'Autumn', 'Butcher', 'Tailor', 'Smith', 'Potter', 'Baker', 'Farrier', 'Old', 'New', 'Common', 'Main', 'High', 'Low', 'Butcher', 'Tailor', 'Smith', 'Potter', 'Baker', 'Farrier', 'Old', 'New', 'Common', 'Main', 'High', 'Low', 'North', 'South', 'West', 'East'],
    type: ['Street', 'Street', 'Street', 'Street', 'Lane', 'Lane', 'Lane', 'Road', 'Road', 'Road', 'Road', 'Square', 'Square', 'Market', 'Way', 'Crescent', 'Close', 'Wynd', 'Row', 'Avenue', 'Alley', 'Drive', 'Boulevard', 'Plaza']
  },
  lifestyleStandards: [
    [1000, 'aristocratic'],
    [400, 'wealthy'],
    [200, 'comfortable'],
    [100, 'modest'],
    [20, 'poor'],
    [10, 'squalid'],
    [0, 'wretched']
  ],
  rollData: {
    wealth: [
      [95, 'kingly'],
      [80, 'aristocratic'],
      [70, 'wealthy'],
      [60, 'comfortable'],
      [50, 'modest'],
      [25, 'poor'],
      [15, 'squalid'],
      [0, 'destitute']
    ],
    equality: [
      [95, 'It is overwhelmingly patriarchal.'],
      [80, 'It is a patriarchal society.'],
      [70, 'It is largely a patriarchal society. Women are pressured to conform socially, but not legally.'],
      [60, 'It is a relatively egalitarian society, although men are expected to be the primary breadwinners.'],
      [50, "Gender is irrelevant to one's place in society here."],
      [40, 'Femininity is celebrated, and women enjoy equal opportunities here.'],
      [30, 'Women have cooler heads than men, and are therefore the heads of households here.'],
      [20, 'The brawn of men is utilised where necessary, but men are largely kept at home.'],
      [10, 'This is a matriarchal society.'],
      [0, 'It is overwhelmingly matriarchal.']
    ]
    // 'economics': [
    //   [90, 'Trade in ' + this.name + ' is heavily regulated, with taxes, tariffs, and restrictions on what can be brought in and out of the ' + this.type + ', and people live a ' + this.wealth + ' existence because of it. The trade guild strictly enforces the rules, and costs of doing business in ' + this.name + ' are high.'],
    //   [80, 'Trade in ' + this.name + ' is regulated, with taxes and restrictions on what can be brought in and out of the ' + this.type + ', and people live a ' + this.wealth + ' existence because of it. The trade guild enforces rules, with stiff penalties and trade bans for rule-breakers.'],
    //   [70, 'Trade in ' + this.name + ' is regulated, with taxes applied to all goods and services rendered, and people live a ' + this.wealth + ' existence because of it. The trade guild enforces rules, with penalties for rule-breakers.'],
    //   [60, 'Trade in ' + this.name + ' is mostly free, with some taxes applied to goods and services rendered in the city. People live a ' + this.wealth + ' existence because of it.'],
    //   [50, 'Trade is reasonable in ' + this.name + ', and people live a ' + this.wealth + ' existence because of it; some taxes are applied to certain goods and services that are rendered in the city.'],
    //   [40, 'Trade is reasonable in ' + this.name + ', and people live a ' + this.wealth + ' existence because of it; some taxes are applied to certain goods and services that are rendered in the city, but the more creative entrepenuers can find loopholes to make a better profit.'],
    //   [30, 'Trade is rather free in ' + this.name + ', and people live a ' + this.wealth + ' existence because of it. There are few taxes, and there is little regulation from the authorities on what merchants can and cannot sell.'],
    //   [20, 'Trade is free in ' + this.name + ', and people live a ' + this.wealth + ' existence because of it. There are no taxes or regulations to speak of.'],
    //   [0, 'Caveat emptor is the guiding philosophy of ' + this.name + ', and people live a ' + this.wealth + ' existence because of it. Without any taxes or regulations, the free market reigns supreme here.']
    // ]
  },
  type: {
    // This sets socio-economics for the different sized towns. It sets up the potential demographics, economic system, political system, number of factions, and other modifiers.
    hamlet: {
      demographics: [
        {
          // demographics must be in alphabetical order until I fix it to not be buggy
          probability: 50,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(1, 5),
            'gnome': randomFloat(1, 5),
            'half-elf': randomFloat(1, 5),
            'half-orc': randomFloat(1, 3),
            'halfling': randomFloat(5, 10),
            'human': randomFloat(85, 95),
            'tiefling': randomFloat(1, 2)
          }
        },
        {
          probability: 5,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(1, 5),
            'gnome': randomFloat(1, 5),
            'half-elf': randomFloat(1, 5),
            'half-orc': randomFloat(85, 95),
            'halfling': randomFloat(5, 10),
            'human': randomFloat(5, 15),
            'tiefling': randomFloat(1, 2)
          }
        },
        {
          probability: 2,
          popPercentages: {
            'dragonborn': randomFloat(1, 5),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(1, 5),
            'gnome': randomFloat(1, 5),
            'half-elf': randomFloat(1, 5),
            'half-orc': randomFloat(5, 10),
            'halfling': randomFloat(5, 10),
            'human': randomFloat(5, 15),
            'tiefling': randomFloat(3, 10)
          }
        },
        {
          probability: 7,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(1, 5),
            'gnome': randomFloat(1, 5),
            'half-elf': randomFloat(1, 5),
            'half-orc': randomFloat(1, 3),
            'halfling': randomFloat(70, 90),
            'human': randomFloat(5, 15),
            'tiefling': randomFloat(1, 2)
          }
        },
        {
          probability: 10,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(70, 80),
            'gnome': randomFloat(1, 5),
            'half-elf': randomFloat(20, 40),
            'half-orc': randomFloat(1, 2),
            'halfling': randomFloat(5, 15),
            'human': randomFloat(5, 15),
            'tiefling': randomFloat(1, 2)
          }
        },
        {
          probability: 10,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(80, 90),
            'elf': randomFloat(1, 5),
            'gnome': randomFloat(25, 35),
            'half-elf': randomFloat(1, 5),
            'half-orc': randomFloat(1, 3),
            'halfling': randomFloat(5, 10),
            'human': randomFloat(5, 15),
            'tiefling': randomFloat(1, 2)
          }
        }
      ],
      economicIdeology: ['feudalism', 'feudalism', 'feudalism', 'feudalism', 'capitalism', 'syndicalism', 'communism', 'primitivism', 'primitivism'],
      politicalSource: ['absolute monarchy', 'republic', 'republic', 'republic', 'anarchy'],
      'population' () { return random(30, 300) },
      'startFactionsNumber' () { return [1, 1, 1, 1, 1, 2].seededrandom() },
      // roadDuplication: d100 of whether to create a new road (new one if under).
      roadDuplication: 40,
      modifiers: {
        wealth: -20,
        reputation: -40,
        sin: -25,
        diversity: -20
      }
    },
    village: {
      demographics: [
        {
          // demographics must be in alphabetical order until I fix it to not be buggy
          probability: 50,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(1, 10),
            'gnome': randomFloat(1, 10),
            'half-elf': randomFloat(1, 10),
            'half-orc': randomFloat(1, 5),
            'halfling': randomFloat(5, 10),
            'human': randomFloat(85, 95),
            'tiefling': randomFloat(1, 2)
          }
        },
        {
          probability: 5,
          popPercentages: {
            'dragonborn': randomFloat(1, 5),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(1, 3),
            'gnome': randomFloat(1, 5),
            'half-elf': randomFloat(1, 3),
            'half-orc': randomFloat(85, 95),
            'halfling': randomFloat(5, 7),
            'human': randomFloat(8, 15),
            'tiefling': randomFloat(1, 5)
          }
        },
        {
          probability: 2,
          popPercentages: {
            'dragonborn': randomFloat(1, 5),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(1, 5),
            'gnome': randomFloat(1, 5),
            'half-elf': randomFloat(1, 5),
            'half-orc': randomFloat(5, 10),
            'halfling': randomFloat(5, 10),
            'human': randomFloat(5, 20),
            'tiefling': randomFloat(3, 10)
          }
        },
        {
          probability: 7,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(1, 5),
            'gnome': randomFloat(5, 10),
            'half-elf': randomFloat(1, 10),
            'half-orc': randomFloat(1, 4),
            'halfling': randomFloat(70, 90),
            'human': randomFloat(5, 15),
            'tiefling': randomFloat(1, 4)
          }
        },
        {
          probability: 10,
          popPercentages: {
            'dragonborn': randomFloat(1, 4),
            'dwarf': randomFloat(3, 10),
            'elf': randomFloat(70, 80),
            'gnome': randomFloat(2, 7),
            'half-elf': randomFloat(20, 40),
            'half-orc': randomFloat(1, 2),
            'halfling': randomFloat(5, 15),
            'human': randomFloat(5, 15),
            'tiefling': randomFloat(1, 3)
          }
        },
        {
          probability: 10,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(80, 90),
            'elf': randomFloat(1, 7),
            'gnome': randomFloat(25, 35),
            'half-elf': randomFloat(1, 6),
            'half-orc': randomFloat(1, 3),
            'halfling': randomFloat(5, 10),
            'human': randomFloat(10, 15),
            'tiefling': randomFloat(1, 3)
          }
        }
      ],
      economicIdeology: ['feudalism', 'feudalism', 'feudalism', 'feudalism', 'capitalism', 'capitalism', 'syndicalism', 'communism', 'primitivism', 'primitivism'],
      politicalSource: ['constitutional monarchy', 'republic', 'republic', 'republic', 'anarchy'],
      'population' () { return random(301, 1000) },
      'startFactionsNumber' () { return [1, 1, 1, 2, 2, 2].seededrandom() },
      roadDuplication: 50,
      modifiers: {
        wealth: -10,
        reputation: -20,
        sin: -15,
        diversity: 10
      }
    },
    town: {
      demographics: [
        {
          // demographics must be in alphabetical order until I fix it to not be buggy
          probability: 50,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(1, 15),
            'elf': randomFloat(1, 10),
            'gnome': randomFloat(1, 10),
            'half-elf': randomFloat(3, 15),
            'half-orc': randomFloat(1, 5),
            'halfling': randomFloat(5, 10),
            'human': randomFloat(75, 95),
            'tiefling': randomFloat(1, 2)
          }
        },
        {
          probability: 3,
          popPercentages: {
            'dragonborn': randomFloat(1, 7),
            'dwarf': randomFloat(5, 15),
            'elf': randomFloat(1, 3),
            'gnome': randomFloat(1, 10),
            'half-elf': randomFloat(1, 3),
            'half-orc': randomFloat(85, 95),
            'halfling': randomFloat(5, 7),
            'human': randomFloat(8, 25),
            'tiefling': randomFloat(4, 10)
          }
        },
        {
          probability: 2,
          popPercentages: {
            'dragonborn': randomFloat(1, 5),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(1, 5),
            'gnome': randomFloat(1, 5),
            'half-elf': randomFloat(1, 5),
            'half-orc': randomFloat(5, 10),
            'halfling': randomFloat(5, 10),
            'human': randomFloat(5, 20),
            'tiefling': randomFloat(3, 10)
          }
        },
        {
          probability: 7,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(5, 20),
            'gnome': randomFloat(5, 15),
            'half-elf': randomFloat(1, 15),
            'half-orc': randomFloat(1, 4),
            'halfling': randomFloat(50, 80),
            'human': randomFloat(25, 40),
            'tiefling': randomFloat(1, 7)
          }
        },
        {
          probability: 10,
          popPercentages: {
            'dragonborn': randomFloat(1, 4),
            'dwarf': randomFloat(3, 10),
            'elf': randomFloat(70, 80),
            'gnome': randomFloat(2, 7),
            'half-elf': randomFloat(10, 30),
            'half-orc': randomFloat(1, 2),
            'halfling': randomFloat(5, 20),
            'human': randomFloat(5, 15),
            'tiefling': randomFloat(1, 3)
          }
        },
        {
          probability: 10,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(80, 90),
            'elf': randomFloat(1, 7),
            'gnome': randomFloat(25, 35),
            'half-elf': randomFloat(1, 6),
            'half-orc': randomFloat(1, 3),
            'halfling': randomFloat(3, 7),
            'human': randomFloat(10, 20),
            'tiefling': randomFloat(1, 3)
          }
        }
      ],
      economicIdeology: ['feudalism', 'feudalism', 'feudalism', 'feudalism', 'capitalism', 'capitalism', 'capitalism', 'syndicalism', 'communism', 'primitivism'],
      politicalSource: ['absolute monarchy', 'constitutional monarchy', 'republic', 'republic', 'republic', 'anarchy'],
      'population' () { return random(1001, 3000) },
      'startFactionsNumber' () { return [1, 1, 2, 2, 2, 3, 3].seededrandom() },
      roadDuplication: 70,
      modifiers: {
        wealth: 15,
        reputation: 5,
        sin: 5,
        diversity: 15
      }
    },
    city: {
      demographics: [
        {
          // demographics must be in alphabetical order until I fix it to not be buggy
          probability: 50,
          popPercentages: {
            'dragonborn': randomFloat(1, 4),
            'dwarf': randomFloat(1, 20),
            'elf': randomFloat(1, 15),
            'gnome': randomFloat(1, 15),
            'half-elf': randomFloat(1, 20),
            'half-orc': randomFloat(1, 10),
            'halfling': randomFloat(5, 15),
            'human': randomFloat(70, 95),
            'tiefling': randomFloat(1, 2)
          }
        },
        {
          probability: 1,
          popPercentages: {
            'dragonborn': randomFloat(1, 7),
            'dwarf': randomFloat(5, 15),
            'elf': randomFloat(1, 3),
            'gnome': randomFloat(1, 10),
            'half-elf': randomFloat(1, 3),
            'half-orc': randomFloat(85, 95),
            'halfling': randomFloat(5, 7),
            'human': randomFloat(8, 25),
            'tiefling': randomFloat(4, 10)
          }
        },
        {
          probability: 2,
          popPercentages: {
            'dragonborn': randomFloat(1, 5),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(1, 5),
            'gnome': randomFloat(1, 5),
            'half-elf': randomFloat(1, 5),
            'half-orc': randomFloat(5, 10),
            'halfling': randomFloat(5, 10),
            'human': randomFloat(5, 20),
            'tiefling': randomFloat(3, 10)
          }
        },
        {
          probability: 3,
          popPercentages: {
            'dragonborn': randomFloat(1, 2),
            'dwarf': randomFloat(1, 10),
            'elf': randomFloat(5, 30),
            'gnome': randomFloat(5, 15),
            'half-elf': randomFloat(1, 25),
            'half-orc': randomFloat(1, 4),
            'halfling': randomFloat(50, 60),
            'human': randomFloat(25, 40),
            'tiefling': randomFloat(1, 10)
          }
        },
        {
          probability: 15,
          popPercentages: {
            'dragonborn': randomFloat(1, 5),
            'dwarf': randomFloat(3, 10),
            'elf': randomFloat(70, 95),
            'gnome': randomFloat(2, 7),
            'half-elf': randomFloat(10, 25),
            'half-orc': randomFloat(1, 2),
            'halfling': randomFloat(5, 15),
            'human': randomFloat(5, 25),
            'tiefling': randomFloat(1, 5)
          }
        },
        {
          probability: 15,
          popPercentages: {
            'dragonborn': randomFloat(1, 3),
            'dwarf': randomFloat(80, 95),
            'elf': randomFloat(1, 4),
            'gnome': randomFloat(25, 35),
            'half-elf': randomFloat(1, 6),
            'half-orc': randomFloat(1, 5),
            'halfling': randomFloat(3, 7),
            'human': randomFloat(10, 25),
            'tiefling': randomFloat(1, 3)
          }
        }
      ],
      economicIdeology: ['feudalism', 'feudalism', 'capitalism', 'capitalism', 'capitalism', 'capitalism', 'syndicalism', 'communism'],
      politicalSource: ['absolute monarchy', 'absolute monarchy', 'absolute monarchy', 'constitutional monarchy', 'constitutional monarchy', 'republic', 'republic', 'republic', 'anarchy'],
      'population' () { return random(3001, 6000) },
      'startFactionsNumber' () { return [1, 1, 2, 2, 2, 3, 3, 3, 3, 4].seededrandom() },
      roadDuplication: 90,
      modifiers: {
        wealth: 5,
        reputation: 20,
        sin: 25,
        diversity: 25
      }
    }
  },
  economicIdeology: {
    feudalism: {
      modifiers: {
        economics: 15,
        welfare: -25,
        law: 15,
        military: 20
      },
      descriptors: {
        economicIdeologyIC: 'feudalistic',
        economicIdeologyIST: 'feudalist',
        economicIdeologyDescription: "The people of $town.name work the land in exchange for working their lord's lands.",
        tippy: "The crown gives land to the nobles in exchange for military service. Peasants work, tithe, and fight for the nobles in exchange for being able to live on the noble's lands."
      }
    },
    capitalism: {
      modifiers: {
        economics: -20,
        welfare: -25,
        law: 15,
        military: 20
      },
      descriptors: {
        economicIdeologyIC: 'capitalistic',
        economicIdeologyIST: 'capitalist',
        economicIdeologyDescription: 'The people of $town.name work in exchange for payment from their employers, which they use to buy the necessities.',
        tippy: 'Trade and industry are controlled by private owners for profit, rather than the state.'
      }
    },
    syndicalism: {
      modifiers: {
        economics: 35,
        welfare: 25,
        law: -15,
        military: -15
      },
      descriptors: {
        economicIdeologyIC: 'syndicalistic',
        economicIdeologyIST: 'syndicalist',
        economicIdeologyDescription: 'The people of $town.name own the lands they work on collectively, and together benefit from its prosperity.',
        tippy: 'The workers own the lands they work on collectively, and together benefit from its prosperity.'
      }
    },
    communism: {
      modifiers: {
        economics: 40,
        welfare: 30,
        law: -15,
        military: -30
      },
      descriptors: {
        economicIdeologyIC: 'communistic',
        economicIdeologyIST: 'communist',
        economicIdeologyDescription: 'The people of $town.name work the jobs that they are able to, and are paid according to their needs. Excess profits are reinvested to strengthen the society as a whole.',
        tippy: 'People work the jobs that they are able to, and are paid according to their needs. Excess profits are reinvested to strengthen the society as a whole.'
      }
    },
    primitivism: {
      modifiers: {
        economics: 40,
        welfare: -25,
        law: -30,
        military: -30
      },
      descriptors: {
        economicIdeologyIC: 'primitivistic',
        economicIdeologyIST: 'primitivist',
        economicIdeologyDescription: "The people of $town.name work the land in a loosely organised sense; there is no concept of ownership, and the majority of the _town.type's citizens are hunter-gatherers.",
        tippy: 'There is no formal government, and people are largely hunter-gatherers with no concept of ownership; might makes right.'
      }
    }
  },
  politicalSource: {
    'absolute monarchy': {
      politicalIdeology: ['autocracy', 'autocracy', 'autocracy', 'meritocracy', 'democracy', 'kleptocracy', 'magocracy', 'militocracy', 'oligarchy', 'pedocracy', 'theocracy', 'technocracy'],
      autocracy: {
        politicalSourceDescription: "<<print $town.leader.title.toUpperFirst()>> <<profile $npcs[$town.leader.key]>> is the supreme ruler, and all laws and affairs are governed by the crowns' will.",
        description: 'The crown holds both supreme executive and judicial powers.'
      },
      default: {
        politicalSourceDescription: '<<print _town.ruler.title.toUpperFirst()>> <<profile $npcs[$town.ruler.key]>> is technically the head of state, but affairs are handled by a parliamentary consisting of $town.leaderType, the head of whom is $town.leader.title <<profile $npcs[$town.leader.key]>>.',
        description: 'The crown holds supreme judicial power, but the executive power is held by a parliamentary.'
      }
    },
    'constitutional monarchy': {
      politicalIdeology: ['autocracy', 'autocracy', 'meritocracy', 'democracy', 'democracy', 'democracy', 'kleptocracy', 'magocracy', 'militocracy', 'oligarchy', 'pedocracy', 'theocracy', 'technocracy'],
      autocracy: {
        politicalSourceDescription: '<<print _town.ruler.title.toUpperFirst()>> <<profile $npcs[$town.ruler.key]>> is technically the head of state, but affairs are handled by the prime minister, <<profile $npcs[$town.leader.key]>>, who controls all executive decisions.',
        description: 'The crown holds supreme judicial powers, but executive power is held by the prime minister.'
      },
      default: {
        politicalSourceDescription: '<<print _town.ruler.title.toUpperFirst()>> <<profile $npcs[$town.ruler.key]>> is the head of state, but affairs are handled by $town.leaderType, the head of whom is $town.leader.title <<profile $npcs[$town.leader.key]>>.',
        description: 'The crown holds supreme judicial power, but day to day affairs are held by parliament.'
      }
    },
    'republic': {
      politicalIdeology: ['meritocracy', 'meritocracy', 'democracy', 'democracy', 'democracy', 'democracy', 'kleptocracy', 'magocracy', 'militocracy', 'oligarchy', 'pedocracy', 'theocracy', 'technocracy'],
      politicalSourceDescription: 'Affairs are handled by $town.leaderType, the head of whom is $town.leader.title <<profile $npcs[$town.leader.key]>>',
      description: 'The crown holds both supreme executive and judicial powers.'
    },
    'anarchy': {
      politicalIdeology: ['meritocracy', 'meritocracy', 'democracy', 'democracy', 'democracy', 'democracy', 'kleptocracy', 'magocracy', 'militocracy', 'oligarchy', 'pedocracy', 'theocracy', 'technocracy'],
      politicalSourceDescription: 'None take responsibility for the stewardship of $town.name, but $town.leaderType hold the best semblance of order, the head of whom is $town.leader.title <<profile $npcs[$town.leader.key]>>.',
      description: 'No formal political system exists.'
    }
  },
  politicalIdeology: {
    autocracy: {
      leaderTraits: {
        hasClass: false,
        profession: 'lord',
        background: 'noble',
        title: 'Lord',
        socialClass: 'nobility'
      },
      modifiers: {
        economics: 45,
        welfare: -25,
        law: 15,
        military: 25,
        arcana: -5
      },
      data: {
        isFaction: false,
        leaderType: 'the supreme leader',
        governmentType: 'nobles',
        politicalIdeologyIC: 'autocratic',
        description: 'Governed by one person.'
      }
    },
    meritocracy: {
      leaderTraits: {
        hasClass: false,
        background: 'noble',
        title: 'Lord',
        socialClass: 'nobility'
      },
      modifiers: {
        economics: 15,
        welfare: 5,
        law: -5,
        military: -5,
        arcana: 15
      },
      data: {
        isFaction: false,
        leaderType: 'the competent',
        governmentType: 'commoners',
        politicalIdeologyIC: 'meritocratic',
        description: 'Governed by the best.'
      }
    },
    democracy: {
      leaderTraits: {
        hasClass: false,
        profession: 'prime minister',
        background: 'commoner',
        title: 'Lord',
        socialClass: 'nobility'
      },
      modifiers: {
        economics: -15,
        welfare: 25,
        law: 15,
        military: -5,
        arcana: 15
      },
      data: {
        isFaction: false,
        leaderType: 'the people',
        governmentType: 'commoners',
        politicalIdeologyIC: 'democratic',
        description: 'Governed by the elected.'
      }
    },
    kleptocracy: {
      leaderTraits: {
        hasClass: true,
        dndClass: 'rogue',
        background: 'criminal',
        title: 'High Thief',
        socialClass: 'nobility'
      },
      modifiers: {
        economics: -35,
        welfare: -25,
        law: -30,
        military: -5,
        arcana: 15
      },
      data: {
        isFaction: true,
        leaderType: "the Thieves' Guild",
        governmentType: 'thieves',
        politicalIdeologyIC: 'kleptocratic',
        description: 'Governed by the thieves.'
      }
    },
    magocracy: {
      leaderTraits: {
        hasClass: true,
        dndClass: 'wizard',
        background: 'sage',
        title: 'Archchancellor',
        socialClass: 'nobility'
      },
      modifiers: {
        economics: 2,
        welfare: 5,
        law: -5,
        military: -5,
        arcana: 50
      },
      data: {
        isFaction: true,
        leaderType: 'the wizards',
        governmentType: 'wizards',
        politicalIdeologyIC: 'magocratic',
        description: 'Governed by the wizards.'
      }
    },
    militocracy: {
      leaderTraits: {
        hasClass: true,
        dndClass: 'fighter',
        background: 'soldier',
        title: 'Commander',
        socialClass: 'nobility'
      },
      modifiers: {
        economics: 25,
        welfare: -5,
        law: 30,
        military: 50,
        arcana: -15
      },
      data: {
        isFaction: true,
        leaderType: 'the military',
        governmentType: 'military',
        politicalIdeologyIC: 'militocratic',
        description: 'Governed by the military.'
      }
    },
    oligarchy: {
      leaderTraits: {
        hasClass: false,
        background: 'noble',
        title: 'Lord',
        socialClass: 'nobility'
      },
      modifiers: {
        economics: 15,
        welfare: -15,
        law: 5,
        military: 5,
        arcana: -5
      },
      data: {
        isFaction: false,
        leaderType: 'the powerful few',
        governmentType: 'nobles',
        politicalIdeologyIC: 'oligarchic',
        description: 'Governed by the powerful few.'
      }
    },
    pedocracy: {
      leaderTraits: {
        hasClass: false,
        background: 'scholar',
        title: 'Sir',
        socialClass: 'nobility'
      },
      modifiers: {
        economics: 15,
        welfare: 50,
        law: -5,
        military: -5,
        arcana: 15
      },
      data: {
        isFaction: true,
        leaderType: 'the scholars',
        governmentType: 'scholars',
        politicalIdeologyIC: 'pedocratic',
        description: 'Governed by the scholars.'
      }
    },
    theocracy: {
      leaderTraits: {
        hasClass: true,
        dndClass: 'cleric',
        background: 'acolyte',
        title: 'High Priest',
        gender: 'man',
        socialClass: 'nobility'
      },
      modifiers: {
        economics: 15,
        welfare: 30,
        law: 15,
        military: -15,
        arcana: 35
      },
      data: {
        isFaction: true,
        leaderType: 'the holy',
        governmentType: 'priests',
        politicalIdeologyIC: 'theocratic',
        description: 'Governed by the church.'
      }
    },
    technocracy: {
      leaderTraits: {
        hasClass: false,
        profession: 'architect',
        background: 'guild artisan',
        title: 'Architect',
        socialClass: 'nobility'
      },
      modifiers: {
        economics: 35,
        welfare: 15,
        law: -15,
        military: -5,
        arcana: 25
      },
      data: {
        isFaction: false,
        leaderType: 'the engineers',
        governmentType: 'craftsmen',
        politicalIdeologyIC: 'technocratic',
        description: 'Governed by the engineers.'
      }
    }
  },
  misc: {
    // They harvest _
    primaryCrop: [
      'barley and oats',
      'beans and corn',
      'nuts and olives',
      'rice',
      'wheat',
      'potatoes and leeks',
      'sugar cane',
      'tobacco',
      'cotton',
      'sweet apples',
      'cabbages and beets',
      'cattle',
      'dairy cows',
      'sheep',
      'carrots and cucumbers',
      'leeks',
      'corn',
      'fish'],
    // the nearby region is rich with_
    primaryExport: [
      'iron ore',
      'copper ore',
      'cobalt ore',
      'nickel ore',
      'bauxite deposits',
      'gold deposits',
      'silver deposits',
      'clay and granite deposits',
      'salt deposits',
      'quartz deposits',
      'coal deposits',
      'peat deposits',
      'hardwood lumber',
      'softwood lumber',
      'ruby deposits',
      'sapphire deposits',
      'emerald deposits',
      'opal deposits',
      'amethyst deposits',
      'wild game',
      'common fauna used in alchemy',
      'rare fauna used in alchemy'],
    // __ is currently taking place.
    currentEvent: [
      "an anniversary of a monarch's reign",
      'an anniversary of an important event',
      'an arena event',
      'an arrival of a caravan or ship',
      'an arrival of a circus',
      'an arrival of an important npc',
      'an arrival of marching modrons',
      'an artistic performance',
      'an athletic event',
      'a birth of a child',
      'a birthday of an important npc',
      'a civic festival',
      'a comet appearance',
      'a commemoration of a past tragedy',
      'a consecration of a new temple',
      'a coronation',
      'a council meeting',
      'a equinox or solstice',
      'an execution',
      'a fertility festival',
      'a full moon',
      'a funeral',
      'a graduation of cadets or wizards',
      'a harvest festival',
      'a holy day',
      'an investiture of a knight or other noble',
      'a lunar eclipse',
      'a midsummer festival',
      'a midwinter festival',
      'a migration of monsters',
      "a monarch's ball",
      'a new moon',
      'a new year',
      'a pardoning of a prisoner',
      'a planar conjunction',
      'a planetary alignment',
      'a priestly investiture',
      'a procession of ghosts',
      'a remembrance for soldiers lost in war',
      'a royal address or proclamation',
      'a royal audience day',
      'a signing of a treaty',
      'a solar eclipse',
      'a tournament',
      'a trial',
      'a violent uprising',
      'a wedding or wedding anniversary',
      'a travelling carnival'],
    microEvent: [
      "a gnarled old man offers to sell you a 'lucky' trinket for a gold coin",
      'a young boy wants to see a demonstration of your weapon',
      'a little girl is crying because she broke her favorite toy',
      'a little gem falls out of the pocket of the man walking ahead of you',
      'a guard stops you and asks you a few questions because you sort of match the description of a wanted criminal',
      'a simpleton relaxing in the shade challenges you to a milk-drinking contest',
      'a handful of giggling teenagers badger you for some adventuring stories',
      'a middle-aged noble accuses you of cheating with their spouse',
      'a young man bumps into you and falls to the ground.',
      'a man and a woman are having an argument and are blocking your way forward.',
      'a young woman approaches you and offers you a good time. But only to you, not the rest of your party.',
      'a woman empties a chamber pot from a second storey window. Some of it splashes on you.',
      'a group of children suddenly run across the road, chasing each other. Your horse is startled, and rears suddenly. (Maybe ask for a ride check to remain mounted)',
      'a cart blocks the road forward. an elderly man stares at the broken axle and scratches his head.',
      'a cat runs out of nowhere, bats at your foot frantically, then runs back into its hiding place.',
      'a scrawny dog has started following you around. When you stop, it sits next to you and whines gently.',
      'a man lays on the side of the road, unconscious. You can smell alcohol and urine as you pass him.',
      'a man in tattered clothing offers to shine your shoes for a copper piece',
      'a town crier stands on the corner. When you meet his gaze, he offers to recite the news for a coin.',
      "a bard passes you going the other direction atop a horse. as you pass, you can hear him muttering the lyrics to a song you haven't heard.",
      "a person who looks just like someone you know, but shouldn't be here turns the corner onto another street. Do you ignore it? Follow it?",
      "a lost dog starts to follow the group of PC's.",
      'a bauble or trinket found on the ground with the initials P.C.',
      "a man in a dark cloak falls in pace with one of the PC's. Continues walking silently for a block or so.",
      "the PC's are being shadowed. When they turn to look whoever or whatever it is ducks into an alley/behind a barrel/runs away.",
      'street hawkers try to sell the characters nearly everything, or anything. Bonus points if they actually do, and there is a hidden catch.',
      "street clerics spouting off religion. again bonus points if the characters catch a bit that doesn't fit with the way they believe that religion works.",
      'foreigners come to the characters with a book or map and are looking for help in deciphering it. They will not be fluent in the local language.',
      "a 'lady of the evening' approaches the most pious member of the party begging for a religious blessing.",
      'a firebrand preacher is in a town square or on a corner and points out a PC as an example of either piety or paganism.',
      'a young street urchin is being beaten with a riding crop by a wealthier merchant.',
      'a toothless old hag offers to read a PCs fortune in tarot cards.',
      'a schizophrenic beggar begins speaking in tongues or has a conversation with himself.',
      'a random fellow gets thrown out a bar/tavern/inn window with no warning in front of the PCs.',
      "a poor young girl ask you to buy some food for her pet rat (bonus fun if it's actually a tamed dire rat).",
      'a wealthy and overdressed noble is thrown from his horse.',
      'a young prostitute is getting slapped around by her pimp in an alleyway.',
      'a young and very wealthy heir gets drunk and makes a spectacle of himself at a party/ball/dance.',
      'a vengeful wife slaps the shit out of her husband right next to the party.',
      "a young couple is making out in the shadow of a doorway. Was it a priest and a famous noble's daughter, or someone else?!",
      'a runaway horse charges through a marketplace, causing chaos.',
      'a magical device malfunctions blowing the windows out of a shop.',
      'a huge barrel of ale gets loose during a delivery and rolls down the street toward the party.',
      'an older woman lets out a mightily creepy cackle, but it was just over a joke her sister told her.',
      'a young poet asks the party for inspiration.',
      'a down on his luck artist asks if they might commission him for a portrait of one of them.',
      'a cutpurse is tackled and beaten by two city watch officers.',
      "a screaming child throws a tantrum because his/her mother/father won't buy him a trinket.",
      'yYour mama sends you a nice cloth hat with earflaps.',
      'an old man says that his cookoo bird will tell your fortune.',
      'a sleeping dragon (because snorelax is copyrighted) blocks your path',
      'you run into a random acolyte in a temple with a bag on his head handing out grease scrolls',
      "a woman asks you to take this soup to her brother. He works at the store across town. The soup has orange things in it that don't quite look like carrots",
      'a little old man with a heavy foreign accent offers to sell you one of his bizarre monkey-like creatures as a pet.',
      "a middle aged man roughly grabs you by the shoulder, and growls, 'You the fella what knocked up my daughter?!'",
      'two mustachioed gentlemen are in the market square on top of boxes, giving away samples of a new kind of alcoholic beverages. Reactions so far are very mixed.',
      'a bloody knife lays on the ground. Nobody else seems to have noticed it yet.',
      "you witness the guards arresting a man, apparently for deserting his military unit. The young man wails, 'I don't want to fight! I don't want to die! Please! No!'",
      'a young boy excitedly points at you and jumps up and down, soon the party is swarmed by young kids asking for autographs.',
      'two bearded men approach the largest member of your group and offer to sponsor him in a local pit-fighting tournament',
      "as the group is stopped, a particularly gaunt half-elf starts measuring one of the party's arms and legs with a marked string. If permitted, he takes measurements for the entire party. He is an undertaker.",
      'a group of teenage girls are performing a strenuous dance routine on the street corner while a scarred halfling limps around taking donations.',
      'you notice a WaNTED poster with your face on it. The name listed, however, is Vhargle the Black; and the crime is desecration of a holy site.',
      'everyone in this town keeps trying to sell you everything imaginable, but they aLL make a point that they will not, under any circumstances, be selling you their hair. Not that you ever asked.',
      "an old man with piercing blue eyes stops you. He is clearly starving to death. He holds up a purse bulging with coins. 'Does this belong to you?'",
      "a small girl is crying in the road. She looks lost. If asked, her father told her to wait here for him while he went into the pub 'for a minute'. That was six hours ago.",
      'a couple are having sex in a pile of straw near the road. They are loud, and a crowd is starting to gather.',
      'a young urchin is running full speed toward the party carrying a live chicken. Chasing after him is a screaming older man in a fancy cloak, swinging a walking stick.',
      'you find a piece of gold just laying on the ground. No one has noticed it yet.',
      "someone walking by catches your attention. It appears to be a beggar, and he says he'll sketch your caricature in exchange for some soup.",
      "you wake up and head down to the common room of the inn for some breakfast. Your companions aren't awake yet, but you do notice a little commotion outside the window. Looks like some street thugs are accosting a young woman!",
      'you see guards searching the contents of a canvas covered cart that belongs to a woman. She is sitting on the ground crying into her hands.',
      'a store clerk hands you back too much change. If you try to give it back he winks at you and turns to tend to another customer.',
      "as you are entering a store a young man exits forcibly and runs down the street. The clerk appears in front of you right after and asks you 'What way did that thief go!?'",
      'you see a group of young women harassing a young man outside of a bar.',
      'a blind reagent seller shows up at your keep. How do you react?',
      "a street side sailsman hails the players and offers to sell them powerful magic items. He's got loads- 'boots of levitation,' 'rock of undead destruction' 'vampire repellant amulet' and the like. They totally aren't just some boots with five inch heels, or just a rock as big as your head, or a string with garlic on it. No way. Powerful magic in each one.",
      "a couple of town guards approach the party to ask a few questions. They're not intimidating: quite the contrary. The PCs are obviously new arrivals and could bring good tales and rumors. If the meeting goes well the guards might offer them a pint each after their shift.",
      "the party witness a merchant being bullied by two guards and the town's guard captain. after some harsh word exchanges the merchant is forced out of town with threats of jail. This is not a fascist show of force: the merchant refuses to pay the agreed fee to sell on the market and is often accused of selling bad goods, and the guards feel forced to remove him to make place for honest merchants.",
      "as the party enters town they are asked to deposit they're weapons at the town guard armory. If they refuse, there will be questions. at no point is anyone being intolerant and mean, however. The guards just want to make sure the PCs aren't troublemakers, and repeatedly point out that the safety of the populace is what matters.",
      "an old woman approach the party in tears. She proceeds to embrace a random character. 'Oh Garvus, I knew you weren't dead!' She has mistaken the character for her son. The son went missing in action in a war over a decade ago.",
      'a man in rags is standing on a wooden box and proclaiming he had a vision. He proceeds to describe how the god of milk fairies wants the people to stop eating cheese. They should instead burn all the cheese ceremonially at midnight to receive magic powers. Locals ignore him.',
      "a parchment flies through the street and the wind flaps it on your face. It is a saucy love letter to 'My burly bear' from 'Your naughty little minx'.",
      "a demented (and obviously harmless) old man causes a scene by blaming a random female character for being his adulterous wife. He then tries to pick a fight with the burliest male character, blaming he has seduced the old man's wife.",
      'there is a maimed beggar on the street, asking for alms. Someone recognizes him as the famous adventurer / war hero, who was his/her idol when s/he was a child.',
      'a fake mystic offers to read their fortune. It is all cold reading and fake, but it is a good act, just without an ounce of magic in it.',
      'despite it being winter, there are butterflies following a small girl walking past the characters.',
      'the characters see an innkeeper refuse to serve a person of different ethnicity/species/something followed by obviously racist slurs.',
      "an annoying youngster starts pestering a magician (or someone looking like one!) to teach him magic, because he wants to 'kill monsters, loot dungeons and get all the girls!'.",
      'the character witness a public execution for a relatively minor crime. The crowd cheers on as the executioners struts his stuff like a rock star on the stage before getting on with the business.',
      'a cart transporting beer/bread/fresh fruit has fallen over. a mob of poor people are now grabbing free goodies, while the teamster tries to shout them off.',
      "two middle aged bards have a high brow version of a rap battle in the street. They're competing against one another to entice customers into their respective establishments.",
      "a group of junior mages are using a cantrip leveled version of 'gust of wind' to blow up womens' skirts.",
      'a traveling troupe of monks showcase their skills for food and minor coin.',
      "an aquatic elf offers underwater tours at a coastal city's port.",
      "a carnival is in town, showing off their newest ride: a vertical iron wheel with seats meant to let people see the whole town at once. They nicknamed it the 'ferric wheel' due to it being made mostly of iron.",
      'a merchant in a heavily corroded outfit tries to sell his dishwashing invention. (contains a black pudding)',
      'you notice two thugs following a young woman from a distance, trying to look inconspicuous.',
      'a gnome accosts you, insisting you help him find his runaway pet cat, a tabby named Blingtangle. He offers no reward.'],

    // The nearest landmark is _
    landmark: [

      'a large oak tree that is swarming with beautiful blue butterflies in the morning, and blue fireflies at night.',
      "a cave hidden deep in the forest, with walls and floors that seem to shine with a fortunes worth of priceless gems that sparkle without any light. These 'priceless gems' immediately turn to useless stones once removed from the cave.",
      'a large cave system found in the middle of a jungle. The only known opening to the cave was found by a group of locals who were hunting in the jungle that day. The cave entrance spans an opening of roughly 100ft, and if seen from the sky looks like a large impact crater. The depth of the cave is unknown, and no one knows if it is inhabited by monsters.',
      'a large tree that has a village of sprites living in it. The tree moves to one of three positions in the forest every week.',
      'a tiny island in the center of a lake. There is a single bullywug sitting on the island eating fish on an improvised raft.',
      'a magical floating bush. It hovers around in circles.',
      'a hollow tree stump with a friendly faerie dragon.',
      'erosion has carved what appears to be a face into the side of a cliff.',
      'a giant skeleton sticking out of the ground. Looks like a triceratops, but larger.',
      'a giant flower with lots of bees surrounding it. Thousands of flowers similar to the giant one grow around it at a wide range of heights. Different kinds of fey live around it too.',
      'an overgrown, moss-covered, patinaed statue that looks oddly .',
      'a pond of sulphide water, with a geyser regularly rising at its centre.',
      'a cliff face with geometric crystal structures jutting out of the side.',
      'a cave entrance with several sharp rocks resembling the maw and teeth of a large beast.',
      'a tremendous pillar of rock in the exact center of a dried lakebed.',
      'a small pond in the center of a clearing. The pond is faintly luminescent and flowers grow around its edge.',
      'a large smooth stone with runes in an ancient language adorning its surface.',
      'a beached shipwreck that has been looted and broken on the shore. Overgrown with algae, seaweed, and barnacles.',
      'a cliff with sharp rocks below known to locals as the maw of the sea.',
      'a large tree that is over 30 feet in diameter. This hulking monstrosity of nature has been cared for by locals and some revere it as a god.',
      'a frozen lake with a polished ice surface. If you look closely enough, you can see dead floating beneath the surface.',
      'a rock formation that looks eerily like a grinning goblin if viewed from the proper angle.',
      'a mountain range that when viewed from above looks like a gigantic quadruped monster.',
      'the ribcage of a giant whale that fell out of the sky a long time ago, surrounded by a field of petunias. Local legends differ in how it got there, but the most accepted answer is that it was an unexpected side effect of a wizards reckless attempt to mess with the nature of probability.',
      'a rocky, windy precipice rises above the surroundings, with vultures perched on every available foothold. Locals say the place is terribly cursed, but in reality the vultures only congregate there because the wind allows them to smell corpses from a great distance.',
      "a mountain known as the Stone God’s Thumb; it's a large fist of a mountain with a peak resembling a thumb. A plot of onions and a natural spring are located at the top.",
      'the Carved Oni Heads: Early Dwarven cultures carved these stone markers to ward off demons. They break the tree line and denote a path between two prehistoric dwarf cities each stone just within sight of the other.',
      'the Firefall: A rare geological phenomenon causes a plume of fire to escape a lone lava tube and cascade down instead of up. There might be something special hidden behind it…but mostly the charred remains of people who thought there was something behind it.',
      'a rotting, moss covered bookshelf in a forest clearing. Its decrepit shelves are filled with molding tomes in various states of decay. What is still legible in the books is a variety of languages and dialects, some unknown.',
      'a massive mushroom with a wide, flat top. Only the top is visible, and the rest is below ground. It will slowly rise from the the ground when it thinks no one is watching. If something looks at it while it is extended, it will quickly slam back into the ground.',
      'an old and gnarled tree has grown over and half-swallowed what appears to be the remains of a cart – the wood has rotted away, but the metal axel is still visible.',
      'a tree has fallen over a creek, its trunk forming a narrow bridge. It would be easy for a small-sized creature to walk across, but medium-sized creatures might have difficulty.',
      'a cluster of bright pink and yellow mushrooms have grown over and completely blanketed a rotted tree trunk.',
      'a series of miniature arches that is nearly always in the shadow of a larger arch.',
      'an extremely deep and narrow slot canyon. It’s easy to jump over, but if you fell in it would mean certain death.',
      'an enormous boulder balanced precariously on a thin, natural pillar.',
      'enormous bones are scattered densely in this area. It’s a graveyard where large beasts come to die.',
      'a set of standing stones with intricate carvings cut into them. When the wind blows a certain way, the stones make a low humming sound that can be heard from miles away. The sound fills anyone that can here it with dread and despair.',
      'a small dark cave with with an extremely narrow crack in the floor, with steam billowing out. Due to the nature of the steam and the shape of the cave, it creates a low whistling sound at all times of the day.',
      'a magical Island that is invisible to those who don’t or can’t use magic; because of this may ship captains have crushed on its beach with no survivors due to the island’s security system. From the outside the island appears to a cluster of destroyed ships that have created a ring around the island, but when most captains see this mysterious landmark they write it off as ships running aground on a reef.',
      'the ruins of a Tower once connected to a series of watch stations that surround this area or did in the ancient world. There are several of these towers, each with their own secrets.',
      'an area of land in a forest where no plants can grow.',
      'a Forest with many small trees with 1 very large tree in the center of the same species.',
      'a pond of water that rotates one direction in the morning and the other direction in the evening.',
      'a cliff face that appears to have a large portion removed by a giant bite.',
      'a tall rock formation with two boulders at the bottom… Totally not phallic… (It is).',
      'a small statue of a hooded sitting hunched figure that always points slightly northwest.',
      "a large stone monolith towering upon a hillside. Along the back, a single rune written in charcoal and in the language of giants, the symbol for 'help'.",
      'a dried up river or stream, with the remains of a long forgotten exodus. Bones stick up through the mud at strange angles.',
      'a small chasm cutting across an otherwise open field.',
      'a pair of tall pines which hold up the skeletal remains of a behemoth.',
      'a massive multi-faceted field of quartz.',
      'a roughly circular depression overgrown with strangely warped vegetation. The very middle is raised and bare rock looking almost like cracked dark glass.',
      'two trees, an ash and an elm, which have grown up so close that they spiral around each other as they grew trunks and branches pressed together and entwined.',
      'the Stone Queen’s Bed: A stone giant made the mistake of picking a fight with a pack of druids. Rooted and slammed into the earth they planted Somnus trees all around the raised crater. The constant stream of pollen keeps her in a perpetual dream state.',
      'the Volcano Coral Tubes: A sulphuric smoke constantly rises from these inhospitable series of rock tubes. Large filter feeding red fronds rake the air in an effort to capture nutrients from the plumes of smoke. Glows red and attracts lightning strikes.',
      'Morla’s Daughter: In the middle of a swamp is a lone mountain with a small town at the top. There is something weird about the tortle settlement that leads visitors to think they are hiding something…even the mountain is shaped like a turtle shell.',
      'a sudden 12ft escarpment running roughly north-south for as far as the eye can see. Almost as if the all the land to the east as far as the sea had suddenly dropped 4 yards overnight.',
      'a region of open sand dunes a half days hike across and several days hike long that has swallowed a northern rainforest. Only the tops of verdant hills peek through like tree islands in an ocean of sand.',
      'a weathered treestump about the height of a man. Dozens of age-tarnished coins have been hammered into one side of the stump.',
      'a large black obelisk stationed in the middle of a small island that is within what is now a lake. A river eroded the area and over the course of time the river carved out a small lake around the obelisk.',
      'a small cave at the start of river or brook. Inside the cave is small oasis, a waterfall, pool of crisp clear water, and flowering vines crawling up the walls leading to a an opening that lets in sunlight.',
      'an old tree with a fox shaped canopy when viewed from the South East.',
      'a small clearing between some rocks, with three sitting petrified trolls, with horrified looks in their faces.',
      'two extremely close peaks with a river flowing between them. Looks like a mountain that was cut in half by the water.',
      'a big colorful crystal coming out of the ground, that separates the light that comes through it, creating miniature rainbows.',
      'a tiny volcano, that spews small embers, burning the vegetation directly next to it.',
      'huge bones are in the area, sticking out from ground. An elephant could fit in the middle of them. They belonged to the abdomen of a really large creature.',
      'a giant’s skeleton on the side of a cliff. A large sword still stuck through it’s chest.',
      'a flooded pit quarry; standing neck-deep in the murky green water is the 75′ statue of a human king, his features fixed in a contemptuous snarl. Birds nest in his nostrils.',
      'a collection of tar pits that are rumored to have claimed the lives of various monstrosities.',
      'a winding path of high ground through a swamp, called the Witches Walk',
      'a tall rock surrounded by 20 evenly spaced smaller rocks. The smaller rocks have ancient number tunes on them, this structure is clearly some ancient sundial.',
      'a statue of a panicked witch in between a fork in the road.',
      'a pine tree that curves wildly. They say if you listen closely for a while you can hear the wails of the ghost trapped inside.',
      'a pit that is at least 50 feet deep. The bottom is always obscured in the darkest shadow.',
      'a native hobgoblin burial ground that brings pets back to life with the fiend subtype added. Anything you bury will come back and try to kill you. (A groundskeeper named Sking optional.)',
      'three treefolk that have pinned down a stone golem. Roots have all but immobilized the once rampaging construct. It’s been 100 years since the battle and the treefolk are still sleepy from all the action.',
      'a group of islands with a mountain range in them. From the distance the peaks resemble a dragon’s claw emerging from the sea.',
      'what appears to be a puddle is actually a 30 foot deep pool of water with a 10 foot radius. Upon diving under, it appears to be full of tropical ocean life, and those submerged can hear what sounds like waves crashing on the surface.',
      'an invisible mountain. The only way this mountain is visible is by a seemingly floating waterfall beginning at 50 feet in the sky. (it is coming from a cave in the mountain.)',
      'a twenty foot high mushroom, enclosed in a circle of smaller mushrooms of varying heights(up to 5 feet). A history check reveals this location to have been home to a giant toad who would rest on the largest mushroom. Occasionally a ghostly ribbit pierces the air.',
      'a snow-covered field that looks flat, but the powdery snow covers up areas that are much deeper than expected. Heavy creatures could fall chest-deep (or worse) at any time.',
      'a small tropical oasis that exists year-round in the middle of a frozen tundra.',
      'something about the weather of this place makes it rain perpetually.',
      'a volcano that is constantly spewing forth smoke. It’s never erupted, however.',
      'a swamp that experiences daily earth-tremors. When these happen, the water drains briefly and then refills over the next day.',
      'a clear, cold mountain spring that releases the same liquid as a healing potion. When the liquid has been out of the spring for more than an hour, it becomes normal water.',
      'the Drow Stone – Jutting at an odd angle off the side of the path is a towering pillar of stone which is made of a dark glass like material. Stories abound of how it marks the entrance to the Underdark, however, it’s simply Volcanic glass from an ancient volcano.',
      'the Salt Chasm – Rock shafts, split into hexagonal patterns, known as Columnar Basalt pervade this small valley. Their presence precludes the growth of any significant plant life.',
      'the Cascading Quagmire – a series of shallow broad drops in a slow moving swamp river. The combination of floating peat moss and thick algal blooms makes what would be waterfalls instead a viscous slime dribble.',
      "'Howlker’s Rise'; A naturally formed column of earth and stone that is only around 75 feet in diameter with a roughly circular shape, but goes up almost 300 feet straight up. It is covered in moss, plants and even a few sideway-growing trees, it is said to have a lake on top and has a plunging waterfall that goes from the top all the way down to the pond at is souther footside. The climb is brutal. A Dwarven man named Howlker Dirtnose is said to have lived a top it for a time, after finding", 'some very tricky caverns leading upwards along the inside of it, but no one ever manages to even find an entrance.',
      'the Lonely Sentinel: A massive oak tree stands alone in a vast field, not far from a cliffside overlooking the sea. It bears the scars of numerous lightning strikes and more than one attempt to chop it down, but it is still healthy and strong.',
      'a natural bridge of dirt that goes over a wide area of reed thicket marshes. The wind slowly sways the cat tails and tall grasses as squishing sounds and croaks can be heard from either side of the bridge.',
      'a very large tree covered in clear stones. If a creature of good approaches the tree, the stones and the leaves will grow green and blue, and flowers bloom on the tree. Neutral creatures makes them turn brown and orange. An evil creature makes them turn dark purple and red. Unaligned creatures make them turn different shades of gray.',
      'a bush that seems unaffected by the wind. If a lawful creature approaches the bush, the feeding of a calm wind will pass both the bush and the creature. A neutral creature will cause a moderately strong wind to affect the two. A chaotic creature causes hurricane level winds to hit both of them.',
      'a cave full of phosphorescent mushrooms that glow at night.']
  },
  terrain: {
    temperate: {
      weather: {
        tempVariation: {
          95: {
            temperature: dice(3, 10),
            temperatureTimer: random(24, 48)
          },
          85: {
            temperature: dice(2, 10),
            temperatureTimer: random(24, 96)
          },
          65: {
            temperature: random(1, 10),
            temperatureTimer: random(48, 120)
          },
          35: {
            temperature: random(-5, 5),
            temperatureTimer: random(48, 144)
          },
          15: {
            temperature: random(-1, -10),
            temperatureTimer: random(48, 120)
          },
          5: {
            temperature: 0 - dice(2, 10),
            temperatureTimer: random(24, 96)
          },
          0: {
            temperature: random(-1, -24),
            temperatureTimer: random(24, 48)
          }
        },
        season: {
          summer: {
            precipitationLevel: 4,
            precipitationIntensity: 1,
            baseTemp: 80
          },
          autumn: {
            precipitationLevel: 3,
            precipitationIntensity: 1,
            baseTemp: 60
          },
          winter: {
            precipitationLevel: 2,
            precipitationIntensity: 1,
            baseTemp: 30
          },
          spring: {
            precipitationLevel: 3,
            precipitationIntensity: 1,
            baseTemp: 60
          }
        }
      },
      start: ['seashore', 'seashore', 'seashore', 'seashore', 'forest', 'forest', 'hills', 'plains', 'mountains', 'river coast', 'river coast'],
      location: {
        // town.Name is located in the _
        'seashore': {
          precipitationIntensity: 3,
          // town.Name grew around _
          origin: [
            'a coastal harbor',
            'a calm, coastal bay',
            'a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'the mouth of a river',
            'the confluence of two rivers',
            'a series of natural springs',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'
          ],
          // where the vegetation is _
          vegetation: {
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: {
            'shrubs':1, 
            'bush':1, 
            'windswept trees':1
          },
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
        },
        'forest': {
          precipitationIntensity: 2,
          origin: [
            'a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'the mouth of a river',
            'a deep freshwater river',
            'a river that runs through the forest',
            'a series of natural springs',
            'a well-traveled crossroads',
            'a road that passes through the forests',
            'a water source and a well-traveled road leading through the forest'
          ],
          vegetation: {
            'sparse': 1,
            'lush': 3,
            'thick': 6
          },
          plants: {
            'oak trees': 3,
            'pine trees': 1,
            'maple trees': 1,
            'birch trees': 1,
            'ash trees': 1,
            'elm trees': 1,
            'fir trees': 1,
            'spruce trees': 1,
            'sycamore trees': 1,
            'alder trees': 1,
            'cypress trees': 1,
            'yew trees': 1
          },
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
        },
        'hills': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'sparse': 1,
            'lush': 3,
            'thick': 6
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
        },
        'plains': {
          precipitationIntensity: 2,
          origin: ['a wide, navigable river',
            'a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'sparse':5,
            'lush': 1,
            'thick': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
        },
        'mountains': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a river navigable by small craft',
            'a series of natural springs',
            'a road that connects two other cities',
            'a road that leads through the mountains',
            'a trade route through the mountains',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'sparse':5,
            'lush': 1,
            'thick': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
        },
        'river coast': {
          precipitationIntensity: 2,
          origin: ['a coastal harbor',
            'a calm, coastal bay',
            'a wide, navigable river',
            'a river navigable by small craft'],
          vegetation: {
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
        }
      }
    },
    tropical: {
      weather: {
        tempVariation: {
          85: {
            temperature: dice(2, 10),
            temperatureTimer: random(24, 48)
          },
          55: {
            temperature: random(1, 10),
            temperatureTimer: random(48, 120)
          },
          25: {
            temperature: 0 - random(-5, 5),
            temperatureTimer: random(48, 120)
          },
          10: {
            temperature: 0 - random(1, 10),
            temperatureTimer: random(24, 48)
          },
          0: {
            temperature: 0 - dice(2, 10),
            temperatureTimer: random(24, 48)
          }
        },
        season: {
          summer: {
            precipitationLevel: 3,
            precipitationIntensity: 1,
            baseTemp: 90
          },
          autumn: {
            precipitationLevel: 3,
            precipitationIntensity: 1,
            baseTemp: 75
          },
          winter: {
            precipitationLevel: 2,
            precipitationIntensity: 1,
            baseTemp: 50
          },
          spring: {
            precipitationLevel: 4,
            precipitationIntensity: 1,
            baseTemp: 75
          }
        }
      },
      start: ['seacoast', 'forest', 'hills', 'plains', 'mountains', 'river coast', 'jungle', 'volcanic field'],
      location: {
        'seacoast': {
          precipitationIntensity: 3,
          origin: ['a coastal harbor',
            'a calm, coastal bay',
            'a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'the mouth of a river',
            'the confluence of two rivers',
            'a series of natural springs',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'forest': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'the mouth of a river',
            'a deep freshwater river',
            'a river that runs through the forest',
            'a series of natural springs',
            'a well-traveled crossroads',
            'a road that passes through the forests',
            'a water source and a well-traveled road leading through the forest'],
          vegetation: {
            'sparse': 1,
            'lush': 3,
            'thick': 6
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'hills': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads'],
          vegetation: {
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'plains': {
          precipitationIntensity: 2,
          origin: ['a wide, navigable river',
            'a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'sparse':5,
            'lush': 1,
            'thick': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']

        },
        'mountains': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a river navigable by small craft',
            'a series of natural springs',
            'a road that connects two other cities',
            'a road that leads through the mountains',
            'a trade route through the mountains',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'sparse':5,
            'lush': 1,
            'thick': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'river coast': {
          precipitationIntensity: 2,
          origin: ['a coastal harbor',
            'a calm, coastal bay',
            'a wide, navigable river',
            'a river navigable by small craft'],
          vegetation: {
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'jungle': {
          precipitationIntensity: 2,
          origin: ['a river navigable by small craft',
            'a series of natural springs',
            'a road that connects two other cities',
            'a road that leads through the jungle',
            'a trade route through the jungle',
            'a water source and a well-traveled road that leads through the jungle'],
          vegetation: {
            'sparse': 1,
            'lush': 1,
            'thick': 9
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'volcanic field': {
          precipitationIntensity: 3,
          origin: ['a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'the mouth of a river',
            'a series of natural springs',
            'a series of natural springs',
            'a series of natural springs',
            'a water source and a well-traveled road'],
          vegetation: ['desolate', 'desolate', 'desolate', 'desolate', 'desolate', 'desolate', 'desolate', 'sparse', 'sparse', 'sparse', 'lush'],
          vegetation: {
            'desolate':7,
            'sparse': 3,
            'lush': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'cobblestone', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        }
      }
    },
    arid: {
      weather: {
        tempVariation: {
          95: {
            temperature: dice(3, 10),
            temperatureTimer: random(24, 48)
          },
          85: {
            temperature: dice(2, 10),
            temperatureTimer: random(24, 96)
          },
          65: {
            temperature: random(1, 10),
            temperatureTimer: random(48, 120)
          },
          35: {
            temperature: 0 - random(-5, 5),
            temperatureTimer: random(48, 144)
          },
          15: {
            temperature: 0 - random(1, 4),
            temperatureTimer: random(48, 120)
          },
          5: {
            temperature: 0 - dice(1, 10),
            temperatureTimer: random(24, 96)
          },
          0: {
            temperature: 0 - dice(2, 6),
            temperatureTimer: random(24, 48)
          }
        },
        season: {
          summer: {
            precipitationLevel: 3,
            precipitationIntensity: -1,
            baseTemp: 95
          },
          autumn: {
            precipitationLevel: 3,
            precipitationIntensity: -1,
            baseTemp: 75
          },
          winter: {
            precipitationLevel: 2,
            precipitationIntensity: -1,
            baseTemp: 50
          },
          spring: {
            precipitationLevel: 2,
            precipitationIntensity: -1,
            baseTemp: 75
          }
        }
      },
      start: ['desert', 'hills', 'plains', 'mountains', 'river coast', 'wasteland', 'oasis'],
      location: {
        'desert': {
          precipitationIntensity: 2,
          origin: ['a coastal harbor',
            'a calm, coastal bay',
            'a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'the mouth of a river',
            'the confluence of two rivers',
            'a series of natural springs',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate':3,
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw']
        },
        'forest': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'the mouth of a river',
            'a deep freshwater river',
            'a river that runs through the forest',
            'a series of natural springs',
            'a well-traveled crossroads',
            'a road that passes through the forests',
            'a water source and a well-traveled road leading through the forest'],
          vegetation: {
            'desolate':2,
            'sparse': 1,
            'lush': 3,
            'thick': 6
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'hills': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate':5,
            'sparse': 5,
            'lush': 1,
            'thick': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'plains': {
          precipitationIntensity: 2,
          origin: ['a wide, navigable river',
            'a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate':5,
            'sparse': 5,
            'lush': 1,
            'thick': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'mountains': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a river navigable by small craft',
            'a series of natural springs',
            'a road that connects two other cities',
            'a road that leads through the mountains',
            'a trade route through the mountains',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate':5,
            'sparse': 5,
            'lush': 1,
            'thick': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'river coast': {
          precipitationIntensity: 2,
          origin: ['a coastal harbor',
            'a calm, coastal bay',
            'a wide, navigable river',
            'a river navigable by small craft'],
          vegetation: {
            'desolate':3,
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        },
        'wasteland': {
          precipitationIntensity: 2,
          origin: ['a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate':7,
            'sparse': 3,
            'lush': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
        },
        'oasis': {
          origin: ['a series of natural springs',
            'a series of natural springs',
            'a large oasis of water',
            'a large oasis of water',
            'a large oasis of water',
            'a large oasis of water',
            'a water source and a well-traveled road'],
          vegetation: {
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
        }
      }
    },
    polar: {
      weather: {
        tempVariation: {
          100: {
            temperature: dice(3, 10),
            temperatureTimer: random(24, 48)
          },
          95: {
            temperature: dice(2, 10),
            temperatureTimer: random(24, 96)
          },
          80: {
            temperature: random(1, 10),
            temperatureTimer: random(48, 120)
          },
          60: {
            temperature: random(-5, 5),
            temperatureTimer: random(48, 144)
          },
          40: {
            temperature: random(0, -10),
            temperatureTimer: random(48, 120)
          },
          20: {
            temperature: random(-2, -20),
            temperatureTimer: random(24, 96)
          },
          0: {
            temperature: random(-3, -30),
            temperatureTimer: random(24, 48)
          }
        },
        season: {
          summer: {
            precipitationLevel: 4,
            precipitationIntensity: 1,
            baseTemp: 40
          },
          autumn: {
            precipitationLevel: 4,
            precipitationIntensity: 1,
            baseTemp: 30
          },
          winter: {
            precipitationLevel: 2,
            precipitationIntensity: 1,
            baseTemp: 20
          },
          spring: {
            precipitationLevel: 3,
            precipitationIntensity: 1,
            baseTemp: 30
          }
        }
      },
      start: ['seacoast', 'forest', 'hills', 'plains', 'mountains', 'river coast', 'tundra', 'ice sheet', 'seacoast'],
      location: {
        'seacoast': {
          precipitationIntensity: 3,
          origin: ['a coastal harbor',
            'a calm, coastal bay',
            'a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'the mouth of a river',
            'the confluence of two rivers',
            'a series of natural springs',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate': 3,
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
        },
        'forest': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'the mouth of a river',
            'a deep freshwater river',
            'a river that runs through the forest',
            'a series of natural springs',
            'a well-traveled crossroads',
            'a road that passes through the forests',
            'a water source and a well-traveled road leading through the forest'],
          vegetation: {
            'desolate': 2,
            'sparse': 1,
            'lush': 3,
            'thick': 6
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
        },
        'hills': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a wide, navigable river',
            'a river navigable by small craft',
            'a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate': 4,
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
        },
        'plains': {
          precipitationIntensity: 2,
          origin: ['a wide, navigable river',
            'a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate': 5,
            'sparse': 5,
            'lush': 1,
            'thick': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
        },
        'mountains': {
          precipitationIntensity: 2,
          origin: ['a large freshwater lake',
            'a river navigable by small craft',
            'a series of natural springs',
            'a road that connects two other cities',
            'a road that leads through the mountains',
            'a trade route through the mountains',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate': 5,
            'sparse': 5,
            'lush': 1,
            'thick': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
        },
        'river coast': {
          precipitationIntensity: 2,
          origin: ['a coastal harbor',
            'a calm, coastal bay',
            'a wide, navigable river',
            'a river navigable by small craft'],
          vegetation: {
            'desolate': 3,
            'sparse': 1,
            'lush': 4,
            'thick': 3
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
        },
        'tundra': {
          precipitationIntensity: 2,
          origin: ['a wide, navigable river',
            'a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate': 7,
            'sparse': 3,
            'lush': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
        },
        'ice sheet': {
          precipitationIntensity: 3,
          origin: ['a wide, navigable river',
            'a road traveled by merchants on the way to another, larger city',
            'a well maintained road',
            'a road that connects two other cities',
            'a well-traveled crossroads',
            'a water source and a well-traveled road'],
          vegetation: {
            'desolate': 7,
            'sparse': 3,
            'lush': 1
          },
          plants: [],
          possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
        }
      }
    }
  }
}
