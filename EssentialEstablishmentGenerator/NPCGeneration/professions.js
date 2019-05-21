if (!setup.townData) { setup.townData = {} }
setup.townData.professions = {
    'barbarian': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'a warrior who gets lost in the craze of battle.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'bard': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'uses their artistic talents to induce magical effects.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'cleric': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'has devoted their entire being to the will of their god, thus gaining magical powers.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'druid': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'a mage attuned to the magical forces of nature, able to shapeshift, call on the elements, communicate with flora and fauna, etc.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'fighter': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'a common warrior.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'monk': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'a warrior of a holy order.',
       socialClass: 'commoner',
       socialClassRoll: function (town, npc) { return 50 + dice(8, 6) }
      },
    'rogue': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'ranger': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'wanders or ranges over a particular area or domain.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'paladin': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'a holy knight and divine spellcaster crusading in the name of their god.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'sorcerer': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'magic user who derives their magical abilities innately rather than through study.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'warlock': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'a mage who has gained their abilities by forming a pact with an otherworldly being.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'wizard': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: 'derives their magical abilities through study.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'actor': {
       sv: 2500,
       type: 'profession',
       sector: 'arts',
       description: 'impersonates characters, typically on stage in a theatrical production.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'advocate': {
       sv: 3250,
       type: 'profession',
       sector: 'government and law',
       description: 'practices or studies law, typically an attorney or a counselor.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'advisor': {
       sv: 780,
       type: 'profession',
       sector: 'government and law',
       description: 'advises some sort of government official on a specific area of governing.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'animal handler': {
       sv: 250,
       type: 'labourer',
       sector: 'agriculture',
       description: 'works with different animals for a variety of tasks, typically livestock',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'apothecarist': {
       sv: 450,
       type: 'business',
       sector: 'science',
       description: 'prepares and sells medicines, drugs, and potions.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'architect': {
       sv: 550,
       type: 'profession',
       sector: 'construction',
       description: 'designs buildings or landscapes and in many cases supervises their construction.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'archivist': {
       sv: 2450,
       type: 'profession',
       sector: 'science',
       description: 'maintains and is in charge of some sort archives.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 76 }
      },
    'armorer': {
       sv: 750,
       type: 'business',
       sector: 'craftsmanship',
       description: 'specializes in making and repairing armor.',
       socialClass: 'commoner',
       socialClassRoll: function () { return dice(9, 10) }
      },
    'astrologer': {
       sv: 950,
       type: 'profession',
       sector: 'science',
       description: 'uses astrology to tell others about their character or to predict their future.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 89 }
      },
    'baker': {
       sv: 800,
       type: 'business',
       sector: 'hospitality',
       description: 'makes all sorts of baked goods.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'banker': {
       sv: 2250,
       type: 'business',
       sector: 'business',
       description: 'an officer or owner of a bank or group of banks.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 89 }
      },
    'barber': {
       sv: 350,
       type: 'business',
       sector: 'hospitality',
       description: 'cuts hair and shaves or trims beards.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(4, 6) }
      },
    'bartender': {
       sv: 450,
       type: 'business',
       sector: 'hospitality',
       description: 'pours drinks at taverns and other establishments',
       socialClass: 'peasantry',
       socialClassRoll: function () { return dice(3, 30) }
      },
    'barmaid': {
       sv: 450,
       type: 'business',
       sector: 'hospitality',
       description: 'serves drinks and food in a bar as well as engaging with customers.',
       socialClass: 'commoner',
       socialClassRoll: function () { return dice(3, 15) }
      },
    'blacksmith': {
       sv: 750,
       type: 'business',
       sector: 'craftsmanship',
       description: 'forges and repairs things in metal, including weapons, armor, utensils, etc.',
       socialClass: 'commoner',
       socialClassRoll: function () { return dice(2, 50) }
      },
    "blacksmith's assistant": {
       sv: 800,
       type: 'labourer',
       sector: 'craftsmanship',
       description: 'serves under a blacksmith learning the trade of forging',
       socialClass: 'commoner',
       socialClassRoll: function () { return dice(2, 25) }
      },
    'bookseller': {
       sv: 6300,
       type: 'business',
       sector: 'business',
       description: 'sells books from a shop or cart',
       socialClass: 'commoner',
       socialClassRoll: function () { return 65 }
      },
    'brewer': {
       sv: 550,
       type: 'business',
       sector: 'craftsmanship',
       description: 'brews ale.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'brickmason': {
       sv: 650,
       type: 'labourer',
       sector: 'construction',
       description: 'builds with mineral products such as stones, bricks, cinder blocks, or tiles, usually with the use of mortar as a bonding agent.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 10 + dice(4, 6) }
      },
    'pimp': {
       sv: 850,
       type: 'business',
       sector: 'business',
       description: 'controls prostitutes and arranges clients for them, taking part of their earnings in return.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
     'buccaneer': {
      sv: 1350,
      type: '',
      sector: 'adventure',
      description: 'a kind of privateer or free sailor',
      socialClass: 'commoner',
      socialClassRoll: function () { return 55 }
     },
    'butcher': {
       sv: 1150,
       type: 'business',
       sector: 'hospitality',
       description: 'cuts up and sells meat.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'captain': {
       sv: 550,
       type: 'profession',
       sector: 'military',
       description: 'an army officer of high rank in charge of commanding squadrons of soldiers.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'caravanner': {
       sv: 1450,
       type: 'labourer',
       sector: 'transportation',
       description: 'travels or lives in a caravan.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'carpenter': {
       sv: 550,
       type: 'business',
       sector: 'craftsmanship',
       description: 'makes and repairs wooden objects and structures.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'cartographer': {
       sv: 1950,
       type: '',
       sector: 'science',
       description: 'a scholar and illustrator of maps.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 89 }
      },
    'chandler': {
       sv: 700,
       type: 'business',
       sector: 'business',
       description: 'deals in provisions and supplies.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'chef': {
       sv: 1850,
       type: 'labourer',
       sector: 'hospitality',
       description: 'a professional cook trained in the culinary arts.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 }
      },
    'clergyman': {
       sv: 40,
       type: 'profession',
       sector: 'religion',
       description: 'a member of the clergy attached to a private chapel, institution, ship, branch of the armed forces, etc.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'clock maker': {
       sv: 4550,
       type: 'profession',
       sector: 'craftsmanship',
       description: 'makes and repairs clocks.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'cobbler': {
       sv: 1550,
       type: '',
       sector: 'craftsmanship',
       description: 'makes and repairs footwear.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 45 }
      },
    'cook': {
       sv: 450,
       type: 'labourer',
       sector: 'hospitality',
       description: 'prepares food for eating.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'cooper': {
       sv: 700,
       type: 'labourer',
       sector: 'craftsmanship',
       description: 'makes and repairs casks and barrels.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'courtesan': {
       sv: 1950,
       type: '',
       sector: 'hospitality',
       description: 'a prostitute with wealthy and noble clients',
       socialClass: 'commoner',
       socialClassRoll: function () { return 89 }
      },
    'courtier': {
       sv: 1950,
       type: 'profession',
       sector: 'government and law',
       description: 'attends court as a companion or adviser to the king or queen.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'cowherd': {
       sv: 250,
       type: 'labourer',
       sector: 'craftsmanship',
       description: 'supervises grazing cattle.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'dancer': {
       sv: 2250,
       type: 'profession',
       sector: 'arts',
       description: 'moves their body rhythmically with or without musical accompaniment.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'diplomat': {
       sv: 3450,
       type: 'profession',
       sector: 'government and law',
       description: 'an official representing a country abroad.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'diver': {
       sv: 3250,
       type: 'labourer',
       sector: 'agriculture',
       description: 'dives down deep to collect precious things from the sea floors.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'farmer': {
       sv: 150,
       type: 'labourer',
       sector: 'agriculture',
       description: 'operates a farm or cultivates land.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'fisherman': {
       sv: 170,
       type: 'labourer',
       sector: 'agriculture',
       description: 'catches fish.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'fishmonger': {
       sv: 250,
       type: 'business',
       sector: 'business',
       description: 'sells fish.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'furrier': {
       sv: 250,
       type: 'business',
       sector: 'craftsmanship',
       description: 'prepares furs for adornment.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'gardener': {
       sv: 550,
       type: 'labourer',
       sector: 'agriculture',
       description: 'tends and cultivates a garden.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'general': {
       sv: 2250,
       type: 'profession',
       sector: 'military',
       description: 'the chief commander of an army.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'gladiator': {
       sv: 3250,
       type: '',
       sector: 'arts',
       description: 'fights against other people, wild animals, or monsters in an arena.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 89 }
      },
    'glovemaker': {
       sv: 2400,
       type: 'business',
       sector: 'craftsmanship',
       description: 'makes and repairs gloves.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'goldsmith': {
       sv: 6550,
       type: 'business',
       sector: 'craftsmanship',
       description: 'a smith who specializes in precious metals.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'grocer': {
       sv: 450,
       type: 'business',
       sector: 'business',
       description: 'a food merchant.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 27 }
      },
    'guardsman': {
       sv: 150,
       type: 'profession',
       sector: 'military',
       description: 'a person who keeps watch, especially a soldier or other person formally assigned to protect a person or to control access to a place.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'guildmaster': {
       sv: 4150,
       type: 'profession',
       sector: 'business',
       description: 'leads an economically independent producer (a “guild,” an association of craftsmen or merchants that often holds considerable bureaucratic power).',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'hatter': {
       sv: 950,
       type: 'business',
       sector: 'craftsmanship',
       description: 'makes and repairs headwear.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'healer': {
       sv: 950,
       type: 'profession',
       sector: 'magic',
       description: 'able to cure a disease or injury using magic.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'herald': {
       sv: 550,
       type: 'a messenger who carries important news.',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 48 }
      },
    'herbalist': {
       sv: 850,
       type: 'business',
       sector: 'science',
       description: 'practices healing by the use of herbs.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 60 + dice(4, 6) }
      },
    'hermit': {
       sv: 950,
       type: 'profession',
       sector: 'outcast',
       description: 'lives in solitude, typically as a religious or spiritual discipline.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'historian': {
       sv: 4150,
       type: 'profession',
       sector: 'science',
       description: 'an expert in or student of history, especially that of a particular period, geographical region, or social phenomenon.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'hunter': {
       sv: 250,
       type: 'labourer',
       sector: 'self employed',
       description: 'hunts game or other wild animals.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'ice seller': {
       sv: 1950,
       type: 'labourer',
       sector: 'agriculture',
       description: 'collects and sells ice',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 24 }
      },
    'innkeeper': {
       sv: 750,
       type: 'business',
       sector: 'business',
       description: 'owns and runs an inn.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'inventor': {
       sv: 2250,
       type: 'profession',
       sector: 'business',
       description: 'invented a particular process or device, or invents things as an occupation.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'jailer': {
       sv: 1250,
       type: 'labourer',
       sector: 'military',
       description: 'supervises a jail and the prisoners in it.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'jester': {
       sv: 2250,
       type: 'profession',
       sector: 'arts',
       description: 'professional joker',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 42 }
      },
    'jeweler': {
       sv: 400,
       type: 'business',
       sector: 'craftsmanship',
       description: 'designs, makes, and repairs necklaces, bracelets, rings, etc., often containing jewels.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'judge': {
       sv: 850,
       type: 'profession',
       sector: 'government and law',
       description: 'decides cases in a court of law.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'knight': {
       sv: 1150,
       type: 'profession',
       sector: 'government and law',
       description: 'serves his or her sovereign after being bestowed a rank of royal honor.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'lady': {
       sv: 1550,
       type: 'profession',
       sector: 'government and law',
       description: 'some sort of noble',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'leatherworker': {
       sv: 750,
       type: 'business',
       sector: 'craftsmanship',
       description: 'makes items from leather such as pouches, scabbards, straps, etc.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'librarian': {
       sv: 3150,
       type: 'profession',
       sector: 'science',
       description: 'administers or assists in a library.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'linguist': {
       sv: 5150,
       type: 'profession',
       sector: 'science',
       description: 'studies the essence of communication, including the units, nature, structure, and modification of language.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'locksmith': {
       sv: 1900,
       type: 'business',
       sector: 'craftsmanship',
       description: 'makes and repairs locks.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'lord': {
       sv: 1150,
       type: 'profession',
       sector: 'government and law',
       description: 'some sort of noble',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'lumberjack': {
       sv: 350,
       type: 'labourer',
       sector: 'agriculture',
       description: 'fells trees, cuts them into logs, and transports them to a sawmill.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'maid-servant': {
       sv: 250,
       type: 'labourer',
       sector: 'craftsmanship',
       description: 'a domestic servant of a household.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'masseur': {
       sv: 1550,
       type: 'profession',
       sector: 'business',
       description: 'performs massages',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'merchant': {
       sv: 650,
       type: 'business',
       sector: 'business',
       description: 'sells and trades goods.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'messenger': {
       sv: 1250,
       type: 'labourer',
       sector: 'communications',
       description: 'carries messages between recipients.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'midwife': {
       sv: 650,
       type: 'labourer',
       sector: 'science',
       description: 'assists in childbirth and the care of women giving birth.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'miller': {
       sv: 650,
       type: 'business',
       sector: 'agriculture',
       description: 'owns or works in a grain mill.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'miner': {
       sv: 550,
       type: 'labourer',
       sector: 'agriculture',
       description: 'works underground in mines in order to obtain minerals such as coal, diamonds, or gold.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'minister': {
       sv: 950,
       type: 'profession',
       sector: 'government and law',
       description: 'assists with the administration of business.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'minstrel': {
       sv: 1450,
       type: 'profession',
       sector: 'arts',
       description: 'recites lyric or heroic poetry for nobility.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'friar': {
       sv: 1450,
       type: 'profession',
       sector: 'religion',
       description: 'a member of a religious community of men, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 5 + dice(8, 6) }
      },
    'mortician': {
       sv: 650,
       type: 'profession',
       sector: 'science',
       description: 'prepares dead bodies for burial or cremation and makes arrangements for funerals.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'necromancer': {
       sv: 6150,
       type: 'profession',
       sector: 'magic',
       description: 'communicates with and conjures the spirits of the dead.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'noble': {
       sv: 3150,
       type: 'profession',
       sector: 'government and law',
       description: 'a person belonging to a class with high social or political status.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'nun': {
       sv: 2150,
       type: 'profession',
       sector: 'religion',
       description: 'a member of a religious community of women, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'nurse': {
       sv: 1150,
       type: 'profession',
       sector: 'science',
       description: 'cares for the sick or infirm, especially in a hospital.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'painter': {
       sv: 1500,
       type: 'business',
       sector: 'arts',
       description: 'paints pictures using a variety of different substances.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'patissier': {
       sv: 1500,
       type: 'business',
       sector: 'hospitality',
       description: 'maker or seller of pastries and cakes',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'perfumer': {
       sv: 3150,
       type: 'business',
       sector: 'craftsmanship',
       description: 'expert on creating perfume compositions',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'philosopher': {
       sv: 7150,
       type: 'profession',
       sector: 'science',
       description: 'a scholar of the fundamental nature of knowledge, reality, and existence.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'physician': {
       sv: 4150,
       type: 'profession',
       sector: 'science',
       description: 'a qualified practitioner of medicine.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'pilgrim': {
       sv: 5150,
       type: 'labourer',
       sector: 'outcast',
       description: 'journeys to some sacred place as an act of religious devotion, occasionally to settle there.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'politician': {
       sv: 4000,
       type: 'profession',
       sector: 'government and law',
       description: ' holding or seeking office in government.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'potter': {
       sv: 1150,
       type: 'business',
       sector: 'craftsmanship',
       description: 'makes pots, bowls, plates, etc., out of clay.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'priest': {
       sv: 750,
       type: 'profession',
       sector: 'religion',
       description: 'has the authority to perform certain rites and administer certain sacraments.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'privateer': {
       sv: 1150,
       type: 'labourer',
       sector: 'military',
       description: 'engages in maritime warfare under a commission of war.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 }
      },
    'professor': {
       sv: 3150,
       type: 'profession',
       sector: 'science',
       description: 'a teacher of the highest rank in a college or university.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'roofer': {
       sv: 1800,
       type: 'labourer',
       sector: 'construction',
       description: 'builds and repairs roofs.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'ropemaker': {
       sv: 1850,
       type: 'business',
       sector: 'craftsmanship',
       description: 'braids rope.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'rugmaker': {
       sv: 1850,
       type: 'business',
       sector: 'craftsmanship',
       description: 'makes and repairs rugs by braiding, hooking, weaving, etc.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'saddler': {
       sv: 1000,
       type: 'business',
       sector: 'craftsmanship',
       description: 'makes and repairs saddlery.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'sailor': {
       sv: 150,
       type: 'labourer',
       sector: 'transportation',
       description: 'works as a member of the crew of a commercial or naval ship or boat.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'sculptor': {
       sv: 250,
       type: 'business',
       sector: 'arts',
       description: 'crafts art by carving or casting blocks of marble, stones, or other hardened minerals.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'scavenger': {
       sv: 350,
       type: 'labourer',
       sector: 'unemployed',
       description: 'searches for and collects discarded items.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 22 }
      },
    'scholar': {
       sv: 2250,
       type: 'profession',
       sector: 'science',
       description: 'a specialist in a particular branch of study who pursues the acquisition of knowledge.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'seamstress': {
       sv: 450,
       type: 'labourer',
       sector: 'craftsmanship',
       description: 'makes, alters, repairs, as well as occasionally designing garments.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'seer': {
       sv: 350,
       type: 'profession',
       sector: 'magic',
       description: 'able to see what the future holds through supernatural insight.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'servant': {
       sv: 350,
       type: 'labourer',
       sector: 'hospitality',
       description: 'performs duties for others, especially a person employed in a house or as a personal attendant.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'shaman': {
       sv: 750,
       type: 'profession',
       sector: 'magic',
       description: 'accesses and influences the world of good and evil spirits.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'shepherd': {
       sv: 150,
       type: 'labourer',
       sector: 'agriculture',
       description: 'herds, tends, and guards sheep.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    "ship's captain": {
       sv: 950,
       type: 'profession',
       sector: 'military',
       description: 'commands a ship.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'shoemaker': {
       sv: 150,
       type: 'business',
       sector: 'craftsmanship',
       description: 'makes shoes out of different materials',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'silversmith': {
       sv: 1250,
       type: 'business',
       sector: 'craftsmanship',
       description: 'a smith who specializes in precious metals.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'slave': {
       sv: 150,
       type: 'labourer',
       sector: 'outcast',
       description: 'a person who is the legal property of another and forced to obey them.',
       socialClass: 'indentured servitude',
       socialClassRoll: function () { return 40 }
      },
    'slaver': {
       sv: 650,
       type: 'business',
       sector: 'business',
       description: 'deals with or owns slaves',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'soldier': {
       sv: 1000,
       type: 'profession',
       sector: 'military',
       description: 'serves in an army.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'spice merchant': {
       sv: 1500,
       type: 'business',
       sector: 'business',
       description: 'sells different kinds of spices',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'squire': {
       sv: 950,
       type: 'profession',
       sector: 'military',
       description: 'acts as an attendant to a knight before attempting to become a knight themselves.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'stablehand': {
       sv: 550,
       type: 'labourer',
       sector: 'agriculture',
       description: 'works in a stable.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'stevedore': {
       sv: 550,
       type: 'labourer',
       sector: 'labour',
       description: 'loads and unloads cargo from ships',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'stonemason': {
       sv: 750,
       type: 'business',
       sector: 'construction',
       description: 'cuts and prepares stone for use in construction.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'steward': {
       sv: 950,
       type: 'profession',
       sector: 'government and law',
       description: 'supervises both the estate and household of his lord or lady while they are away.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'street seller': {
       sv: 550,
       type: 'business',
       sector: 'business',
       description: 'hocks goods on the street',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'street sweeper': {
       sv: 450,
       type: 'labourer',
       sector: 'labour',
       description: 'cleans streets of a town',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'student': {
       sv: 3150,
       type: 'profession',
       sector: 'science',
       description: 'attends school or learns under other to enter and pursue a particular subject.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'surgeon': {
       sv: 4150,
       type: 'profession',
       sector: 'science',
       description: 'practices surgery.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'surveyor': {
       sv: 1150,
       type: 'profession',
       sector: 'business',
       description: 'establishes maps and boundaries for ownership or other purposes required by government or civil law.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'tailor': {
       sv: 250,
       type: 'business',
       sector: 'craftsmanship',
       description: 'makes, alters, repairs, as well as occasionally designing garments.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'tanner': {
       sv: 200,
       type: 'business',
       sector: 'craftsmanship',
       description: 'treats the skins and hides of animals to produce leather.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'tavernkeeper': {
       sv: 450,
       type: 'business',
       sector: 'business',
       description: 'owns or runs a tavern',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'tax collector': {
       sv: 1850,
       type: 'profession',
       sector: 'government and law',
       description: 'collects unpaid taxes from people, guilds, or businesses.',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'teacher': {
       sv: 1450,
       type: 'profession',
       sector: 'science',
       description: 'instructs on a particular skill or subject.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'thatcher': {
       sv: 350,
       type: 'labourer',
       sector: 'construction',
       description: 'builds and repairs roofs',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'thief': {
       sv: 850,
       type: 'profession',
       sector: 'crime',
       description: 'steals peoples property, especially by stealth and without using force or violence.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'torturer': {
       sv: 1850,
       type: 'profession',
       sector: 'military',
       description: 'inflicts severe pain on someone as a punishment or in order to force them to do or say something.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'town crier': {
       sv: 750,
       type: 'labourer',
       sector: 'communications',
       description: 'makes public announcements in the streets or marketplace.',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'toymaker': {
       sv: 2500,
       type: 'profession',
       sector: 'craftsmanship',
       description: 'makes and repairs toys.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'vendor': {
       sv: 1150,
       type: 'business',
       sector: 'business',
       description: 'deals items in the street.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'veterinarian': {
       sv: 1250,
       type: 'profession',
       sector: 'agriculture',
       description: 'treats diseased or injured animals.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'vintner': {
       sv: 850,
       type: 'profession',
       sector: 'agriculture',
       description: 'engages in winemaking, especially with monitoring and harvesting the grapes.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'weaver': {
       sv: 600,
       type: 'labourer',
       sector: 'craftsmanship',
       description: 'makes fabric by weaving fiber together.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'wetnurse': {
       sv: 350,
       type: 'labourer',
       sector: 'labour',
       description: "a woman employed to suckle another woman's child.",
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'woodcarver': {
       sv: 2450,
       type: 'business',
       sector: 'craftsmanship',
       description: 'fashions wood into various shapes.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'wood seller': {
       sv: 2150,
       type: 'business',
       sector: 'business',
       description: 'sells wood, typically logs.',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'wrestler': {
       sv: 6150,
       type: 'labourer',
       sector: 'craftsmanship',
       description: 'performs in matches involving grappling and grappling-type techniques.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 }
      },
    'writer': {
       sv: 7150,
       type: 'profession',
       sector: 'arts',
       description: 'commits his or her thoughts, ideas, etc., into written language.',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
'Animal/Monster Handler': {
	sv: 5000,
	type: 'profession',
	sector: 'agriculture',
	description: 'responsible for the safe keeping, dietary care, and exercise of animals or monsters.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Arborist': {
	sv: 1000,
	type: 'profession',
	sector: 'agriculture',
	description: 'maintains and cares for trees, often by surgically removing dying limbs.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Baler': {
	sv: 800,
	type: 'profession',
	sector: 'agriculture',
	description: 'bales hay, or in the mills, wool and cotton goods.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Beekeeper': {
	sv: 2000,
	type: 'profession',
	sector: 'agriculture',
	description: 'owns and breeds bees, especially for their honey.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Breeder': {
	sv: 1000,
	type: 'profession',
	sector: 'agriculture',
	description: 'breeds livestock, animals, or monsters.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Dairymaid': {
	sv: 500,
	type: 'profession',
	sector: 'agriculture',
	description: 'milks cows and makes cheese and butter.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Falconer': {
	sv: 4000,
	type: 'profession',
	sector: 'agriculture',
	description: 'keeps, trains, and hunts with falcons, hawks, or other birds of prey.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Florist': {
	sv: 3500,
	type: 'business',
	sector: 'agriculture',
	description: 'grows and arranges plants and cut flowers.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Forager': {
	sv: 500,
	type: 'profession',
	sector: 'agriculture',
	description: 'searches for food in the wild.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Forester': {
	sv: 1000,
	type: 'labourer',
	sector: 'agriculture',
	description: 'supervises the wellbeing of a forest.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Fowler': {
	sv: 750,
	type: 'profession',
	sector: 'agriculture',
	description: 'catches or ensnares birds.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Gamekeeper': {
	sv: 4500,
	type: 'profession',
	sector: 'agriculture',
	description: 'breeds and protects game, typically for a large estate.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Groom': {
	sv: 2500,
	type: 'profession',
	sector: 'agriculture',
	description: 'cleans and brushes the coats horses, dogs, or other animals.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Herder': {
	sv: 100,
	type: 'profession',
	sector: 'agriculture',
	description: 'supervises a herd of livestock or makes a living from keeping livestock, especially in open country.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Horse Trainer': {
	sv: 1000,
	type: 'profession',
	sector: 'agriculture',
	description: 'tends to horses and teaches them different disciplines.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Master-of-Horses': {
	sv: 5000,
	type: 'profession',
	sector: 'agriculture',
	description: 'supervises and commands all horses under a jurisdiction.',
	socialClass: 'nobility',
	socialClassRoll: function () { return }
	},
'Master-of-Hounds': {
	sv: 7500,
	type: 'profession',
	sector: 'agriculture',
	description: 'maintains a pack of hounds and their associated staff, equipment, and hunting arrangements.',
	socialClass: 'nobility',
	socialClassRoll: function () { return }
	},
'Pathfinder': {
	sv: 1000,
	type: 'profession',
	sector: 'agriculture',
	description: 'scouts ahead and discovers a path or way for others.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Plumer': {
	sv: 2000,
	type: 'profession',
	sector: 'agriculture',
	description: 'hunts birds for their plumes.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Prospector': {
	sv: 500,
	type: 'labourer',
	sector: 'mining',
	description: 'searches for mineral deposits, especially by drilling and excavation.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Renderer': {
	sv: 3500,
	type: 'profession',
	sector: 'agriculture',
	description: 'converts waste animal tissue into usable materials.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Thresher': {
	sv: 300,
	type: 'labourer',
	sector: 'agriculture',
	description: 'separates grain from the plants by beating.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Trapper': {
	sv: 800,
	type: 'profession',
	sector: 'agriculture',
	description: 'traps wild animals, especially for their fur.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Zookeeper': {
	sv: 10000,
	type: 'profession',
	sector: 'agriculture',
	description: 'maintains and cares for animals or monsters in a zoo.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Construction Worker': {
	sv: 300,
	type: 'labourer',
	sector: 'construction',
	description: 'a laborer in the physical construction of a built environment and its infrastructure.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'General Contractor': {
	sv: 5000,
	type: 'profession',
	sector: 'construction',
	description: 'supervises a construction site, manages its vendors and trades, and communicates information to all involved parties.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Glazier': {
	sv: 500,
	type: 'labourer',
	sector: 'construction',
	description: 'fits glass into windows and doors.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Plasterer': {
	sv: 750,
	type: 'labourer',
	sector: 'construction',
	description: 'applies plaster to walls, ceilings, or other surfaces.',
	socialClass: 'peasnatry',
	socialClassRoll: function () { return }
	},
'Roadlayer/Streetlayer': {
	sv: 3000,
	type: 'labourer',
	sector: 'construction',
	description: 'paves roads or streets.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Acrobat': {
	sv: 2500,
	type: 'profession',
	sector: 'arts',
	description: 'performs spectacular gymnastic feats.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Trapezist': {
	sv: 3500,
	type: 'profession',
	sector: 'arts',
	description: 'performs acrobatics high above the ground on a tightrope or trapeze.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Arranger': {
	sv: 2000,
	type: 'profession',
	sector: 'arts',
	description: 'adapts a musical composition for performance.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Athlete': {
	sv: 500,
	type: 'profession',
	sector: 'labourer',
	description: 'proficient in sports and other forms of physical exercise.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Busker': {
	sv: 2000,
	type: 'profession',
	sector: 'outcast',
	description: 'performs in a public place, often for money.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Celebrity': {
	sv: 10000,
	type: 'profession',
	sector: 'arts',
	description: 'a famous person.',
	socialClass: 'nobility',
	socialClassRoll: function () { return }
	},
'Choirmaster': {
	sv: 1000,
	type: 'profession',
	sector: 'arts',
	description: 'trains a choir and orchestrates their singing when they perform.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Clown': {
	sv: 3000,
	type: 'profession',
	sector: 'arts',
	description: 'comic entertainer who wears a traditional costume and exaggerated makeup.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Comedian': {
	sv: 5000,
	type: 'profession',
	sector: 'arts',
	description: 'entertainer whose act is designed to make an audience laugh.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Conductor': {
	sv: 8000,
	type: 'profession',
	sector: 'arts',
	description: 'directs the performance of an orchestra.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Contortionist': {
	sv: 5000,
	type: 'profession',
	sector: 'arts',
	description: 'twists and bends their body into strange and unnatural positions.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Curator': {
	sv: 2500,
	type: 'business',
	sector: 'arts',
	description: 'keeper and custodian of a museum or other collections of precious items.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Costumer': {
	sv: 3500,
	type: 'profession',
	sector: 'arts',
	description: 'makes theatrical costumes.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Equilibrist': {
	sv: 3000,
	type: 'profession',
	sector: 'arts',
	description: 'performs balancing feats.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Fashion Designer': {
	sv: 5000,
	type: 'business',
	sector: 'arts',
	description: 'applies design, aesthetics and natural beauty to garments and their accessories.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Glasspainter': {
	sv: 5000,
	type: 'profession',
	sector: 'arts',
	description: 'produces colorful designs on or in glass.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Juggler': {
	sv: 3000,
	type: 'profession',
	sector: 'arts',
	description: 'keeps several objects in motion in the air at the same time by alternately tossing and catching them.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Limner': {
	sv: 7000,
	type: 'profession',
	sector: 'arts',
	description: 'paints and calligraphs to adorn or enlighten scrolls and manuscripts.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Makeup Artist': {
	sv: 4500,
	type: 'profession',
	sector: 'arts',
	description: 'applies cosmetics to models, actors, nobles, etc.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Model': {
	sv: 3500,
	type: 'profession',
	sector: 'arts',
	description: 'poses as a subject for an artist, fashion designer, or sculptor.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Musician': {
	sv: 800,
	type: 'profession',
	sector: 'arts',
	description: 'plays a musical instrument.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Playwright': {
	sv: 2500,
	type: 'profession',
	sector: 'arts',
	description: 'writes plays or musicals.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Poet': {
	sv: 3500,
	type: 'profession',
	sector: 'arts',
	description: 'writes ballads, epics, sonnets, or other forms of poetry.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Ringmaster': {
	sv: 3500,
	type: 'business',
	sector: 'arts',
	description: 'master of ceremony who introduces the circus acts to the audience.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Ropewalker': {
	sv: 4000,
	type: 'profession',
	sector: 'arts',
	description: 'walks along a tightrope to entertain others.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Singer': {
	sv: 2000,
	type: 'profession',
	sector: 'arts',
	description: 'sings with or without instrumental accompaniment.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Skald': {
	sv: 5000,
	type: 'profession',
	sector: 'arts',
	description: 'composes and recites poems honoring heroes and their deeds.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Stage Magician': {
	sv: 3500,
	type: 'profession',
	sector: 'arts',
	description: 'deceives their audience with seemingly impossible feats while using only natural means.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Stuntman': {
	sv: 5000,
	type: 'profession',
	sector: 'arts',
	description: 'performs dangerous stunts for their audience.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Tattooist': {
	sv: 3000,
	type: 'business',
	sector: 'arts',
	description: 'illustrates the skin with indelible patterns, pictures, legends, etc.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Theater Director': {
	sv: 5000,
	type: 'business',
	sector: 'arts',
	description: 'supervises and orchestrates the mounting of a theatre production by unifying various endeavors and aspects of production.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Accountant': {
	sv: 3000,
	type: 'business',
	sector: 'business',
	description: 'keeps and inspects financial accounts.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Actuary': {
	sv: 6000,
	type: 'business',
	sector: 'government and law',
	description: 'compiles and analyzes statistics and uses them to calculate risk.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Animal Collector': {
	sv: 10000,
	type: 'business',
	sector: 'agriculure',
	description: 'collects and deals in rare and exotic animals and monsters.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Business Owner': {
	sv: 500,
	type: 'business',
	sector: 'business',
	description: 'owns a business entity in an attempt to profit from its successful operations.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Debt Collector': {
	sv: 3500,
	type: 'business',
	sector: 'business',
	description: 'recovers money owed on delinquent accounts.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Draper': {
	sv: 2500,
	type: 'business',
	sector: 'business',
	description: 'an alcohol merchant.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Appraiser': {
	sv: 5000,
	type: 'profession',
	sector: 'business',
	description: 'assesses the monetary value of something.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Auctioneer': {
	sv: 4500,
	type: 'profession',
	sector: 'bbusiness',
	description: 'conducts auctions by accepting bids and declaring goods sold.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Bagniokeeper': {
	sv: 1500,
	type: 'business',
	sector: 'business',
	description: 'owner of a bath house or brothel.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Bookkeeper': {
	sv: 2500,
	type: 'business',
	sector: 'business',
	description: 'keeps records of financial affairs.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Collector': {
	sv: 3000,
	type: 'business',
	sector: 'business',
	description: 'collects things of a specified type, professionally or as a hobby.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Entrepreneur': {
	sv: 500,
	type: 'business',
	sector: 'business',
	description: 'organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Moneychanger': {
	sv: 2500,
	type: 'business',
	sector: 'government and law',
	description: 'exchanges one currency for another.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Moneylender': {
	sv: 1500,
	type: 'business',
	sector: 'business',
	description: 'lends money to others who pay interest.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Peddler': {
	sv: 350,
	type: 'business',
	sector: 'business',
	description: 'travels from place to place selling assorted items.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Plantation Owner': {
	sv: 1500,
	type: 'business',
	sector: 'business',
	description: 'an owner of an estate on which crops are cultivated by resident labor, typically slave labor.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Thriftdealer': {
	sv: 800,
	type: 'business',
	sector: 'business',
	description: 'deals in secondhand items.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Tradesman': {
	sv: 500,
	type: 'business',
	sector: 'business',
	description: 'deals exclusively in bartering.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Billboard poster': {
	sv: 1000,
	type: 'labourer',
	sector: 'business',
	description: 'a person who puts up notices, signs and advertisements.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Courier': {
	sv: 300,
	type: 'labourer',
	sector: 'business',
	description: 'transports packages and documents.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Interpreter': {
	sv: 5000,
	type: 'profession',
	sector: 'business',
	description: 'interprets language and its meaning, especially within ancient manuscripts.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Translator': {
	sv: 2000,
	type: 'profession',
	sector: 'hospitality',
	description: ' translates between languages.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Coinsmith': {
	sv: 10000,
	type: 'business',
	sector: 'craftsmanship',
	description: 'makes currency for the government.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Bladesmith': {
	sv: 3000,
	type: 'business',
	sector: 'craftsmanship',
	description: 'specializes in making and repairing bladed weapons, especially swords and daggers.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Bookbinder': {
	sv: 5000,
	type: 'business',
	sector: 'craftsmanship',
	description: 'binds books and wraps scrolls.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Bottler': {
	sv: 3000,
	type: 'labourer',
	sector: 'craftsmanship',
	description: 'bottles drinks and other liquids.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Bowyer': {
	sv: 500,
	type: 'business',
	sector: 'craftsmanship',
	description: 'makes bows and crossbows.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Broom Maker': {
	sv: 4500,
	type: 'business',
	sector: 'craftsmanship',
	description: 'makes brooms and brushes.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Candlemaker': {
	sv: 2000,
	type: 'business',
	sector: 'craftsmanship',
	description: 'makes candles and wax from honey and tallow.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Cartwright': {
	sv: 500,
	type: 'labourer',
	sector: 'craftsmanship',
	description: 'makes and repairs carts and wagons.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Cutler': {
	sv: 7500,
	type: 'profession',
	sector: 'craftsmanship',
	description: 'makes cutlery.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Dyer': {
	sv: 5000,
	type: 'labourer',
	sector: 'craftsmanship',
	description: 'dyes cloth and other materials.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Embroiderer': {
	sv: 2500,
	type: 'labourer',
	sector: 'craftsmanship',
	description: 'ornaments with needlework.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Engraver': {
	sv: 1000,
	type: 'profession',
	sector: 'craftsmanship',
	description: 'incises a design onto a hard surface by cutting grooves into it.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Farrier': {
	sv: 2000,
	type: 'labourer',
	sector: 'craftsmanship',
	description: "trims and shoes horse's hooves.",
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Fletcher': {
	sv: 1500,
	type: 'profession',
	sector: 'craftsmanship',
	description: 'makes and repairs arrows.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Furniture Artisan': {
	sv: 2500,
	type: 'profession',
	sector: 'craftsmanship',
	description: 'makes and repairs furniture.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Glassworker': {
	sv: 5000,
	type: 'profession',
	sector: 'craftsmanship',
	description: 'blows glass planes and items.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Instrument Maker': {
	sv: 7500,
	type: 'profession',
	sector: 'craftsmanship',
	description: 'makes and repairs musical instruments.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Lapidary': {
	sv: 5000,
	type: 'profession',
	sector: 'craftsmanship',
	description: 'turns stone, minerals, or gemstones into decorative items such as cabochons, engraved gems, and faceted designs.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Luthier': {
	sv: 8500,
	type: 'profession',
	sector: 'craftsmanship',
	description: 'makes and repairs stringed instruments.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Mercer': {
	sv: 2500,
	type: 'labourer',
	sector: 'craftsmanship',
	description: 'weaves textile fabrics, especially silks, velvets, and other fine materials.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Optician': {
	sv: 6500,
	type: 'profession',
	sector: 'craftsmanship',
	description: 'makes and repairs eyeglasses.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Printer': {
	sv: 2000,
	type: 'labourer',
	sector: 'craftsmanship',
	description: 'a person who applies pressure to an inked surface resting upon a print medium (such as paper or cloth), thereby transferring the ink to manufacture a text.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Restorer': {
	sv: 10000,
	type: 'profession',
	sector: 'arts',
	description: 'repairs or renovates a work of art so as to return it to its original condition.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Soaper': {
	sv: 3000,
	type: 'labourer',
	sector: 'craftsmanship',
	description: 'makes soap from accumulated mutton fat, wood ash, and natural soda.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Taxidermist': {
	sv: 4000,
	type: 'profession',
	sector: 'craftsmanship',
	description: 'prepares, stuffs, and mounts the skins of animals.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Tinker': {
	sv: 3000,
	type: 'labourer',
	sector: 'craftsmanship',
	description: 'travels from place to place mending utensils.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Weaponsmith': {
	sv: 2500,
	type: 'business',
	sector: 'craftsmanship',
	description: 'specializes in making and repairing weapons.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Wheelwright': {
	sv: 1500,
	type: 'labourer',
	sector: 'craftsmanship',
	description: 'makes and repairs wooden wheels.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Assassin': {
	sv: 5000,
	type: 'profession',
	sector: 'crime',
	description: 'murders through stealth for reasons pertaining to money, politics, or religion.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Bandit': {
	sv: 8000,
	type: 'profession',
	sector: 'crime',
	description: 'a robber or outlaw belonging to a gang and typically operating in an isolated or lawless area.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Burglar': {
	sv: 500,
	type: 'profession',
	sector: 'crime',
	description: 'illegally enters buildings and steals things.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Conman': {
	sv: 750,
	type: 'profession',
	sector: 'crime',
	description: 'tricks people by gaining their trust and persuading them to believe something that is not true in order to benefit from the encounter.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Gamefighter': {
	sv: 2000,
	type: 'profession',
	sector: 'crime',
	description: 'engages in arena matches in which animals or monsters are pitted against one another, typically to the death.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Crime Boss': {
	sv: 6000,
	type: 'profession',
	sector: 'crime',
	description: 'controls and supervises a criminal organization.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Cutpurse': {
	sv: 500,
	type: 'profession',
	sector: 'crime',
	description: 'a pickpocket or thief.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Drug Dealer': {
	sv: 1500,
	type: 'profession',
	sector: 'crime',
	description: 'dealer of illegal substances.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Drug Lord': {
	sv: 6000,
	type: 'profession',
	sector: 'crime',
	description: 'controls a network of persons involved in the illegal drugs trade and transactions.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Extortioner': {
	sv: 2000,
	type: 'profession',
	sector: 'crime',
	description: 'extorts money from someone by threatening to expose embarrassing information about them.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Fence': {
	sv: 10000,
	type: 'profession',
	sector: 'crime',
	description: 'deals in stolen goods.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Forger': {
	sv: 10000,
	type: 'profession',
	sector: 'crime',
	description: 'produces fraudulent copies or imitations.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Fugitive': {
	sv: 2500,
	type: 'labourer',
	sector: 'crime',
	description: 'a person who has escaped from a place or is in hiding, especially to avoid arrest or persecution.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Highwayman': {
	sv: 500,
	type: 'profession',
	sector: 'crime',
	description: 'robs travelers on a road.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Kidnapper': {
	sv: 1500,
	type: 'profession',
	sector: 'crime',
	description: 'abducts people and holds them captive, typically to obtain a ransom.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Loan Shark': {
	sv: 4500,
	type: 'profession',
	sector: 'crime',
	description: 'charges extremely high rates of interest for moneylending, typically under illegal conditions.',
	socialClass: 'commoner',
	socialClassRoll: function () { return }
	},
'Pirate': {
	sv: 1500,
	type: 'profession',
	sector: 'crime',
	description: 'attacks and robs ships at sea.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Poacher': {
	sv: 5000,
	type: 'labourer',
	sector: 'crime',
	description: 'hunts illegal game.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Poisoner': {
	sv: 7000,
	type: 'business',
	sector: 'crime',
	description: 'makes poisons to harm or kill.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Marauder': {
	sv: 3000,
	type: 'profession',
	sector: 'crime',
	description: 'makes sudden, unprompted attacks against defenseless or near-defenseless settlements.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Smuggler': {
	sv: 2500,
	type: 'profession',
	sector: 'crime',
	description: 'manages the import or export of goods secretly, in violation of the law, especially without payment of legal duty.',
	socialClass: 'peasantry',
	socialClassRoll: function () { return }
	},
'Affeeror': {
	sv: 10000,
	type: '',
	sector: '',
	description: 'determines the values of fines and amercements.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Agister': {
	sv: 1500,
	type: '',
	sector: '',
	description: 'affords pasture to the livestock of others for a price.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Alderman': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'a civic dignitary in the local council ranked below the mayor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Alienist': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'assesses the competence of a defendant in a court of law.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Assay Master': {
	sv: 10000,
	type: '',
	sector: '',
	description: 'oversees the testing of currency.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Baron': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'a member of the lowest order of the nobility.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chancellor': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'a senior state or legal official.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Conservationist': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'advocates for the protection and preservation of the environment and wildlife.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Count': {
	sv: 7000,
	type: '',
	sector: '',
	description: 'a nobleperson ranking above a viscount and below a marquess.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Duke': {
	sv: 15000,
	type: '',
	sector: '',
	description: 'rules over a duchy and is of the highest rank below the monarch.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Emperor/Empress': {
	sv: 25000,
	type: '',
	sector: '',
	description: 'the supreme sovereign ruler of an extensive group of states or countries under a single authority.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'King': {
	sv: 20000,
	type: '',
	sector: '',
	description: 'the ruler of an independent state and its people.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lady-in-Waiting': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'attends a queen, princess, or other high-ranking feminine nobleperson.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Marquess': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'a nobleperson ranking above a count and below a duke.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Master-of-Coin': {
	sv: 7500,
	type: '',
	sector: '',
	description: 'supervises the royal treasury, advises the monarch on financial matters, and is responsible for raising money through taxation.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Master-of-the-Revels': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'responsible for overseeing royal festivities.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Notary': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'performs certain legal formalities, especially to draw up or certify contracts, deeds, and other documents for use in other jurisdictions.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Orator': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'makes statements on behalf of a group or individual nobleperson.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Page': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'a young attendant to a person of noble rank.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Prince': {
	sv: 6000,
	type: '',
	sector: '',
	description: 'the direct descendant of a monarch.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Senator': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'partakes in governmental decision-making after being elected.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sheriff': {
	sv: 4500,
	type: '',
	sector: '',
	description: 'the chief executive officer in a county, having various administrative and judicial functions.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Spymaster': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'directs a network of subordinate espionage agents for a state, kingdom, or empire.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Viscount': {
	sv: 7000,
	type: '',
	sector: '',
	description: 'a nobleperson ranking above a baron and below a count.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ward': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'a member of a noble house who has been taken in by another noble family to be raised for a time.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Acater': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'provides and prepares foodstuffs or delicacies for events such as festivals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tunner': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'fills casks in a brewery or winery.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Barkeep': {
	sv: 500,
	type: '',
	sector: '',
	description: 'works and serves drinks in a bar.',
	socialClass: '',
	socialClassRoll: function () { return }
	},

'Butler': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'the chief servant of a household.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Caregiver': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'looks after a sick, elderly, or disabled person.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Charcoal Maker': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'manufactures charcoal by carbonizing wood in a kiln.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chatelaine': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'a person in charge of a large household.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chimney Sweeper': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'a small person, typically a child, who ascends chimneys to clean them.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Clerk': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'undertakes routine administrative duties in a business or bank.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Copyist': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'makes copies of handwritten documents or music.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Croupier': {
	sv: 1500,
	type: '',
	sector: '',
	description: 'runs a gaming table by gathering in and paying out money or tokens.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Exterminator': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'exterminates unwanted rodents and insects.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Food & Drink Taster': {
	sv: 3500,
	type: '',
	sector: '',
	description: 'ingests food that was prepared for someone else to confirm it is safe to eat.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Gongfarmer': {
	sv: 800,
	type: '',
	sector: '',
	description: 'digs out and removes excrement from privies and cesspits.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Gravedigger': {
	sv: 500,
	type: '',
	sector: '',
	description: 'digs graves for the purposes of a funeral ceremony.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Groundskeeper': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'maintains an athletic field, a park, or the grounds of a graveyard or other institution.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Kitchen Drudge': {
	sv: 500,
	type: '',
	sector: '',
	description: 'performs menial work in a kitchen.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Knacker': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'disposes of dead or unwanted animals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lamplighter': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'lights street or road lights at dusk.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Laundry Worker': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'a laborer who takes part in the washing, drying, and ironing of clothes and other fabric items.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lector': {
	sv: 4000,
	type: '',
	sector: '',
	description: 'reads to others while they work for entertainment.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Longshoreman': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'loads and unloads ships in a port.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Nanny/Nursemaid': {
	sv: 800,
	type: '',
	sector: '',
	description: 'a servant employed to look after a young child or children.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Operator': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'a laborer who operates equipment, typically in construction.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Pastry Chef': {
	sv: 1500,
	type: '',
	sector: '',
	description: 'makes desserts, especially cakes and pastries.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Plumber': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'installs and repairs the fittings of water supply and sanitation.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Porter': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'carries luggage and other loads.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Prostitute': {
	sv: 400,
	type: '',
	sector: '',
	description: 'engages in sexual activity for payment.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Quarryman/Quarrywoman': {
	sv: 1200,
	type: '',
	sector: '',
	description: 'quarries stone.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Stagehand': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'moves scenery or props before or during the performance of a theatrical production.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Street Cleaner': {
	sv: 4000,
	type: '',
	sector: '',
	description: 'cleans streets and alleyways after dark.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Talent Scout': {
	sv: 7000,
	type: '',
	sector: '',
	description: 'searches for talented individuals who can be employed or promoted.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Trainer': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'trains someone in a particular skill, usually physical, for money.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Water Bearer': {
	sv: 200,
	type: '',
	sector: '',
	description: 'brings water from rivers, wells, and lakes back to their settlement.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Abjurer': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'a mage focused in protective spells.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Alchemist': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'transforms or creates something within nature through (usually) ritualist magic.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Archmage': {
	sv: 15000,
	type: '',
	sector: '',
	description: 'an extremely powerful mage.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Artificer': {
	sv: 7500,
	type: '',
	sector: '',
	description: 'unlocks magic in everyday objects as well as being an inventor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},

'Conjuror': {
	sv: 7000,
	type: '',
	sector: '',
	description: 'conjures spirits or familiars.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Elementalist': {
	sv: 8000,
	type: '',
	sector: '',
	description: "manipulates nature’s elements to their will.",
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Enchanter': {
	sv: 7500,
	type: '',
	sector: '',
	description: 'uses sorcery to put someone or something under a spell.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Evoker': {
	sv: 8000,
	type: '',
	sector: '',
	description: 'manipulates energy or taps into an unseen source of power in order to produce a desired kinetic end.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Hearth Witch': {
	sv: 6000,
	type: '',
	sector: '',
	description: 'incorporates spells and enchantments in cooking.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Illusionist': {
	sv: 7500,
	type: '',
	sector: '',
	description: 'performs tricks and spells that deceive the senses.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Mage': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'a magic-user.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Medium': {
	sv: 8000,
	type: '',
	sector: '',
	description: 'uses extrasensory perception, magic, or divine powers to identify information hidden from the normal senses.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Meteorologist': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'forecasts and manipulates weather.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ritualist': {
	sv: 4000,
	type: '',
	sector: '',
	description: 'practices or advocates the observance of ritual (formula intended to trigger a magical effect on a person or objects).',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Runecaster': {
	sv: 10000,
	type: '',
	sector: '',
	description: 'uses special alphabets to create runes (symbols possessing magical effects capable of being used multiple times).',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sage': {
	sv: 10000,
	type: '',
	sector: '',
	description: 'a wise and experienced magic-user.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Shapeshifter': {
	sv: 7000,
	type: '',
	sector: '',
	description: 'a person with the ability to change their physical form.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Summoner': {
	sv: 8000,
	type: '',
	sector: '',
	description: 'a mage able to summon forth magical beasts, creatures, and monsters.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Transmuter': {
	sv: 8000,
	type: '',
	sector: '',
	description: 'alters matter in form, appearance, or nature.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Witchdoctor': {
	sv: 3500,
	type: '',
	sector: '',
	description: 'a tribal mage with powers of healing, divination, and protection against the magic of others.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Witch': {
	sv: 4000,
	type: '',
	sector: '',
	description: 'a woman who has supernatural powers and practices sorcery, typically in solitude.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Wordsmith': {
	sv: 9000,
	type: '',
	sector: '',
	description: 'draws their power from language and casts by dictation.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Admiral': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'commands a fleet or naval squadron.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bailiff': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'looks after prisoners.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bodyguard': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'escorts and protects another person, especially a dignitary.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bouncer': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'prevents troublemakers from entering or to eject them from the premises of an establishment.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Castellan': {
	sv: 8000,
	type: '',
	sector: '',
	description: 'the governor of a castle.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cavalier': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'a skilled horseback rider.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'City Watch': {
	sv: 4500,
	type: '',
	sector: '',
	description: 'an officer of law enforcement who resides in larger towns or cities.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Commissar': {
	sv: 7500,
	type: '',
	sector: '',
	description: 'teaches principles and policies to military units.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Constable': {
	sv: 500,
	type: '',
	sector: '',
	description: 'an officer with limited policing authority, typically in a small town.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Investigator': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'investigates and solves crimes.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Fifer': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'a non-combatant foot soldier who sounds signals for changes in formation in combat.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Duelist': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'skilled in one-on-one combat.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Executioner': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'carries out a sentence of death on a legally condemned person.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Firefighter': {
	sv: 500,
	type: '',
	sector: '',
	description: 'extinguishes fires.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Inspection Officer': {
	sv: 4000,
	type: '',
	sector: '',
	description: 'responsible for the inspection of military units to ensure they meet appropriate standards of training and efficiency.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Intelligence Officer': {
	sv: 10000,
	type: '',
	sector: '',
	description: 'collects, compiles and organizes information about the enemy.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lieutenant': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'an officer of middle rank in the armed forces.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Marksman': {
	sv: 800,
	type: '',
	sector: '',
	description: 'in long-range weapons, such as the bow, crossbow, sling, etc. to inflict damage from afar.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Marshall': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'has the charge of the cavalry in the household of a monarch.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Medic': {
	sv: 600,
	type: '',
	sector: '',
	description: 'a medical practitioner equipped for the battlefield.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Mercenary': {
	sv: 800,
	type: '',
	sector: '',
	description: 'a soldier without allegiance who works for money, typically a member of a company or guild.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Quartermaster': {
	sv: 3500,
	type: '',
	sector: '',
	description: 'responsible for providing quarters, rations, clothing, and other supplies.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Royal Guard': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'responsible for the protection of a royal person.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Runner': {
	sv: 750,
	type: '',
	sector: '',
	description: 'carries information between lines in wartime.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sapper': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'a soldier responsible for tasks such as building and repairing roads and bridges, laying and clearing mines, etc.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sergeant': {
	sv: 8000,
	type: '',
	sector: '',
	description: 'an officer instructed with a protective duty',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sergeant-at-Arms': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'charged with keeping order during meetings and, if necessary, participates in battle.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Scout': {
	sv: 5000,
	type: '',
	sector: '',
	description: "sent ahead of a main force so as to gather information about the enemy's position, strength, or movements.",
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Siege Artillerist': {
	sv: 10000,
	type: '',
	sector: '',
	description: 'works the artillery machines of an army.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Slave Driver': {
	sv: 1500,
	type: '',
	sector: '',
	description: 'oversees and urges on slaves at work.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Special Force Soldier': {
	sv: 6000,
	type: '',
	sector: '',
	description: 'carries out special operations.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Spy': {
	sv: 4500,
	type: '',
	sector: '',
	description: 'secretly collects and reports information on the activities, movements, and plans of an enemy or competitor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tactician': {
	sv: 7000,
	type: '',
	sector: '',
	description: 'uses a carefully planned military strategy to achieve a specific end.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tollkeeper': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'collects tolls at a bridge, road etc. where a charge is made.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Warden': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'responsible for the supervision of a particular place or thing or for ensuring that regulations associated with it are obeyed.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Warmage': {
	sv: 10000,
	type: '',
	sector: '',
	description: 'a soldier skilled in destructive battle magic.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Abbot': {
	sv: 6000,
	type: '',
	sector: '',
	description: 'the head of an abbey of monks.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Acolyte': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'assists the celebrant in a religious service or procession.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Almoner': {
	sv: 1500,
	type: '',
	sector: '',
	description: 'distributes money and food to poor people.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Archbishop': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'responsible for an archdiocese, their surrounding district.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bishop': {
	sv: 10000,
	type: '',
	sector: '',
	description: 'a senior member of the clergy, usually in charge of a diocese and empowered to confer holy orders.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cantor': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'sings liturgical music and leads prayer in a synagogue.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cardinal': {
	sv: 6500,
	type: '',
	sector: '',
	description: 'a leading dignitary of a church, nominated by the highest official.',
	socialClass: '',
	socialClassRoll: function () { return }
	},

'Confessor': {
	sv: 4000,
	type: '',
	sector: '',
	description: 'hears confessions and gives absolution and spiritual counsel.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cultist': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'a member of a cult who generally lives outside of conventional society and worships an unorthodox patron.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cult Leader': {
	sv: 6000,
	type: '',
	sector: '',
	description: 'the organizational leader of a cult who is occasionally also the founder.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Deacon': {
	sv: 800,
	type: '',
	sector: '',
	description: 'an ordained minister of an order ranking below that of priest.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Diviner': {
	sv: 9000,
	type: '',
	sector: '',
	description: 'seeks ultimate divination in order to further understand or meet godly substance.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Exorcist': {
	sv: 6000,
	type: '',
	sector: '',
	description: 'expels or attempts to expel evil spirits from a person or place.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'High Priest': {
	sv: 15000,
	type: '',
	sector: '',
	description: 'the chief priest of a religion.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Inquisitor': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'seeks to eliminate heresy and other things contrary to the doctrine or teachings of their faith.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Missionary': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'goes on a religious mission to promote their faith in a foreign place.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Pardoner': {
	sv: 700,
	type: '',
	sector: '',
	description: 'raises money for religious works by soliciting offerings and granting indulgences.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Prophet': {
	sv: 8000,
	type: '',
	sector: '',
	description: 'regarded as an inspired teacher or proclaimer of the will of God.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sexton': {
	sv: 800,
	type: '',
	sector: '',
	description: 'looks after a church and churchyard, sometimes acting as bell-ringer and formerly as a gravedigger.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Templar': {
	sv: 500,
	type: '',
	sector: '',
	description: 'fights in a religious military order.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Abecedarian': {
	sv: 1500,
	type: '',
	sector: '',
	description: 'teaches the illiterate.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Anthropologist': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'studies the customs, beliefs, and relationships of humanoids and intellectually and culturally advanced creatures.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Apprentice': {
	sv: 200,
	type: '',
	sector: '',
	description: 'studies a trade under a skilled employer.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Archaeologist': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'studies humanoid history and prehistory through the excavation of sites and the analysis of artifacts and other physical remains.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Assayer': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'determiner of the proportions of metal in ore and the amount of copper, silver, gold, or platinum in coins.',
	socialClass: '',
	socialClassRoll: function () { return }
	},

'Astronomer': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'makes observations of celestial and scientific phenomena within the material plane.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bloodletter': {
	sv: 3000,
	type: '',
	sector: '',
	description: "surgically removes some of a patient's blood for therapeutic purposes.",
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Botanist': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'an expert in or student of the scientific study of plants.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chemist': {
	sv: 3500,
	type: '',
	sector: '',
	description: 'engaged in chemical research or experiments.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Dean': {
	sv: 8000,
	type: '',
	sector: '',
	description: 'the head of a college or university.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Drakologist': {
	sv: 10000,
	type: '',
	sector: '',
	description: 'studies or is an expert in the branch of zoology concerned with dragons.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Engineer': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'designer of a machine or structure.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Entomologist': {
	sv: 6000,
	type: '',
	sector: '',
	description: 'studies or is an expert in the branch of zoology concerned with insects.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Horologist': {
	sv: 8000,
	type: '',
	sector: '',
	description: 'a scholar of time and entropy.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Mathematician': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'a scholar of the abstract science of number, quantity, and space.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Optometrist': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'examines the eyes for visual defects and prescribes eyeglasses.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Scribe': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'copies out manuscripts.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Taxonomist': {
	sv: 15000,
	type: '',
	sector: '',
	description: 'groups organisms into categories.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Theologian': {
	sv: 6000,
	type: '',
	sector: '',
	description: 'engages in the study of the nature of God and religious belief.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tutor': {
	sv: 600,
	type: '',
	sector: '',
	description: 'charged with the instruction and guidance of another.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Zoologist': {
	sv: 3500,
	type: '',
	sector: '',
	description: 'an expert in or a student of the behavior, physiology, classification, and distribution of animals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Boatman': {
	sv: 500,
	type: '',
	sector: '',
	description: 'mans a small seacraft.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bosun': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'in charge of organizing the equipment and crew of a ship.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cabbie/Wagoner': {
	sv: 400,
	type: '',
	sector: '',
	description: 'drives a horse-drawn wagon.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Charioteer': {
	sv: 300,
	type: '',
	sector: '',
	description: 'drives a chariot.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Carter': {
	sv: 500,
	type: '',
	sector: '',
	description: 'transports goods by cart.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ferryman': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'operates a ferry.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'First Mate': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'the deck officer second in command to the master of a ship.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Helmsman': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'steers a ship or boat.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Navigator': {
	sv: 1500,
	type: '',
	sector: '',
	description: 'directs the route or course of a ship or other form of transportation, especially by using instruments and maps.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Purser': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'keeps the accounts of a ship, especially as the head steward on a passenger vessel.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Shipwright': {
	sv: 3500,
	type: '',
	sector: '',
	description: 'a carpenter skilled in ship construction and repair.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Adventurer': {
	sv: 2000,
	type: '',
	sector: '',
	description: 'wanders the world in search of knowledge, treasure, fame, glory or a multitude of additional wants and desires.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Beggar/Pauper': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'lives by asking for money or food.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Monster Hunter': {
	sv: 4500,
	type: '',
	sector: '',
	description: 'takes on jobs to hunt down and kill or capture dangerous creatures.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bounty Hunter': {
	sv: 3500,
	type: '',
	sector: '',
	description: 'pursues a criminal or fugitive for whom a reward is offered.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Crossing Sweeper': {
	sv: 6500,
	type: '',
	sector: '',
	description: 'sweeps a path ahead of people crossing dirty urban streets in exchange for a gratuity.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Deserter': {
	sv: 3500,
	type: '',
	sector: '',
	description: 'a member of the armed forces who has deserted.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Disgraced Noble': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'a person of high birth who has since loss their respect, honor, or esteem in some or all noble circles.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Drunkard': {
	sv: 550,
	type: '',
	sector: '',
	description: 'a person who is habitually drunk and considers themselves a professional in the task.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Dungeon Delver': {
	sv: 5500,
	type: '',
	sector: '',
	description: 'navigates underground labyrinths in search of any treasure they may find.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Elder': {
	sv: 600,
	type: '',
	sector: '',
	description: 'a person of a greater age, especially one with a respected position in society.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Exile': {
	sv: 750,
	type: '',
	sector: '',
	description: 'lives away from their native country, either from choice or compulsion.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Explorer': {
	sv: 3500,
	type: '',
	sector: '',
	description: 'explores unfamiliar areas in search of geographical or scientific information.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ex-Criminal': {
	sv: 1200,
	type: '',
	sector: '',
	description: 'a person who has been convicted of a crime and has since served their sentence, or who has preemptively given up their life of crime.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Folk Hero': {
	sv: 4000,
	type: '',
	sector: '',
	description: 'a celebrity who is greatly admired by many people of a particular kind or in a particular place.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Gambler': {
	sv: 800,
	type: '',
	sector: '',
	description: 'bets money on sports, card games, or games of chance in the hope of a profit.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Grave Robber': {
	sv: 100,
	type: '',
	sector: '',
	description: 'steals valuables from graves and tombs.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Heretic': {
	sv: 2500,
	type: '',
	sector: '',
	description: 'differs in opinion from established religious dogma.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Housewife': {
	sv: 150,
	type: '',
	sector: '',
	description: 'cares for his or her family by managing household affairs and completing housework.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Prisoner': {
	sv: 350,
	type: '',
	sector: '',
	description: 'held in confinement as a punishment for crimes they have been convicted of.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Rag-and-Bone Man': {
	sv: 750,
	type: '',
	sector: '',
	description: 'collects unwanted household items and sells them to merchants.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Political Dissident': {
	sv: 4500,
	type: '',
	sector: '',
	description: 'rises in opposition or armed resistance against an established government or ruler.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Refugee': {
	sv: 5000,
	type: '',
	sector: '',
	description: 'leaves their home in order to escape war, persecution, or natural disaster.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Runaway Slave': {
	sv: 3000,
	type: '',
	sector: '',
	description: 'a slave who has left their master and traveled without authorization.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Squatter': {
	sv: 800,
	type: '',
	sector: '',
	description: 'unlawfully occupies an uninhabited building or unused land.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Vagabond': {
	sv: 1000,
	type: '',
	sector: '',
	description: 'wanders from place to place without a permanent home or job.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Urchin': {
	sv: 500,
	type: '',
	sector: '',
	description: 'a child who lives or spends most of their time in the streets, occasionally working as a thief or pickpocket.',
	socialClass: '',
	socialClassRoll: function () { return }
	}

}
