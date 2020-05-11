if (!setup.townData) { setup.townData = {} }
setup.townData.professions = {
  'child': {
    sv: 10000,
    type: 'family',
    sector: 'family',
    synonyms: ['prepubescent', 'kid'],
    description: 'a child, specifically one that is not working.',
    dailyWage: 4,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'domestic partner': {
    sv: 10000,
    type: 'family',
    sector: 'family',
    description: 'a spouse that stays at home, cooking, cleaning, and caring for the family.',
    dailyWage: 4,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'peasant': {
    sv: 10000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'a peasant.',
    dailyWage: 14,
    socialClass: 'peasantry',
    socialClassRoll () { return 30 + dice(8, 6) }
  },
  'mountaineer': {
    sv: 1500,
    isHobby: true,
    type: 'recreation',
    sector: 'adventuring',
    description: 'a person living in a mountainous area.',
    dailyWage: 50,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'barbarian': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a warrior who gets lost in the craze of battle.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'bard': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'uses their artistic talents to induce magical effects.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'cleric': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'has devoted their entire being to the will of their god, thus gaining magical powers.',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'druid': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a mage attuned to the magical forces of nature, able to shapeshift, call on the elements, communicate with flora and fauna, etc.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'fighter': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a common warrior.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'monk': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a warrior of a holy order.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'rogue': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: '.',
    dailyWage: 250,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'ranger': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'wanders or ranges over a particular area or domain.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'paladin': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a holy knight and divine spellcaster crusading in the name of their god.',
    dailyWage: 100,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'sorcerer': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'magic user who derives their magical abilities innately rather than through study.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'warlock': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a mage who has gained their abilities by forming a pact with an otherworldly being.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'wizard': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'derives their magical abilities through study.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'actor': {
    sv: 2500,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'impersonates characters, typically on stage in a theatrical production.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'advocate': {
    sv: 3250,
    synonyms: ['lawyer'],
    type: 'profession',
    sector: 'government and law',
    description: 'practices or studies law, typically an attorney or a counselor.',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'advisor': {
    sv: 780,
    type: 'profession',
    sector: 'government and law',
    description: 'advises some sort of government official on a specific area of governing.',
    dailyWage: 230,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'animal handler': {
    sv: 250,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works with different animals for a variety of tasks, typically livestock.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'apothecarist': {
    sv: 450,
    type: 'business',
    sector: 'science',
    description: 'prepares and sells medicines, drugs, and potions.',
    dailyWage: 160,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'architect': {
    sv: 550,
    type: 'profession',
    sector: 'construction',
    description: 'designs buildings or landscapes and in many cases supervises their construction.',
    dailyWage: 600,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'archivist': {
    sv: 2450,
    type: 'profession',
    sector: 'science',
    description: 'maintains and is in charge of some sort archives.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'armorer': {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'specializes in making and repairing armor.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'astrologer': {
    sv: 950,
    isHobby: true,
    type: 'profession',
    sector: 'science',
    description: 'uses astrology to tell others about their character or to predict their future.',
    dailyWage: 450,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'baker': {
    sv: 800,
    type: 'business',
    sector: 'hospitality',
    description: 'makes all sorts of baked goods.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'banker': {
    sv: 2250,
    type: 'business',
    sector: 'business',
    description: 'an officer or owner of a bank or group of banks.',
    dailyWage: 800,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'barber': {
    sv: 350,
    type: 'business',
    sector: 'hospitality',
    description: 'cuts hair and shaves or trims beards.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'bartender': {
    sv: 450,
    synonyms: ['barkeep', 'tavern owner', 'innkeep'],
    type: 'business',
    sector: 'hospitality',
    description: 'pours drinks at taverns and other establishments.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'barmaid': {
    sv: 450,
    synonyms: ['waiter', 'waitress'],
    type: 'business',
    sector: 'hospitality',
    description: 'serves drinks and food in a bar as well as engaging with customers.',
    dailyWage: 60,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'blacksmith': {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'forges and repairs things in metal, including weapons, armor, utensils, etc.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  "blacksmith's assistant": {
    sv: 800,
    synonyms: ['smith apprentice', 'smithy apprentice'],
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'serves under a blacksmith learning the trade of forging.',
    dailyWage: 50,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'bookseller': {
    sv: 6300,
    type: 'business',
    sector: 'business',
    description: 'sells books from a shop or cart.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'brewer': {
    sv: 550,
    isHobby: true,
    type: 'business',
    sector: 'craftsmanship',
    description: 'brews ale.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'brickmason': {
    sv: 650,
    type: 'labourer',
    sector: 'construction',
    description: 'builds with mineral products such as stones, bricks, cinder blocks, or tiles, usually with the use of mortar as a bonding agent.',
    dailyWage: 70,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'pimp': {
    sv: 850,
    synonyms: ['whoremonger'],
    type: 'business',
    sector: 'business',
    description: 'controls prostitutes and arranges clients for them, taking part of their earnings in return.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'buccaneer': {
    sv: 1350,
    type: 'profession',
    sector: 'adventuring',
    description: 'a kind of privateer or free sailor.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'butcher': {
    sv: 1150,
    type: 'business',
    sector: 'hospitality',
    description: 'cuts up and sells meat.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'captain': {
    sv: 550,
    type: 'profession',
    sector: 'military',
    description: 'an army officer of high rank in charge of commanding squadrons of soldiers.',
    dailyWage: 160,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'caravanner': {
    sv: 1450,
    type: 'labourer',
    sector: 'transportation',
    description: 'travels or lives in a caravan.',
    dailyWage: 50,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'carpenter': {
    sv: 550,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs wooden objects and structures.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'cartographer': {
    sv: 1950,
    type: 'profession',
    sector: 'science',
    description: 'a scholar and illustrator of maps.',
    dailyWage: 240,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'chandler': {
    sv: 700,
    type: 'business',
    sector: 'business',
    description: 'deals in provisions and supplies.',
    dailyWage: 90,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'chef': {
    sv: 1850,
    type: 'labourer',
    sector: 'hospitality',
    description: 'a professional cook trained in the culinary arts.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'clergyman': {
    sv: 40,
    type: 'profession',
    sector: 'religion',
    description: 'a member of the clergy attached to a private chapel, institution, ship, branch of the armed forces, etc.',
    dailyWage: 190,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'clock maker': {
    sv: 4550,
    isHobby: true,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs clocks.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'craftsman': {
    sv: 4550,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs things.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'cobbler': {
    sv: 1550,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs footwear.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'cook': {
    sv: 450,
    type: 'labourer',
    sector: 'hospitality',
    description: 'prepares food for eating.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'cooper': {
    sv: 700,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes and repairs casks and barrels.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'courtesan': {
    sv: 1950,
    type: '',
    sector: 'hospitality',
    description: 'a prostitute with wealthy and noble clients.',
    dailyWage: 220,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'courtier': {
    sv: 1950,
    type: 'profession',
    sector: 'government and law',
    description: 'attends court as a companion or adviser to the king or queen.',
    dailyWage: 320,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'cowherd': {
    sv: 250,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'supervises grazing cattle.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'dancer': {
    sv: 2250,
    type: 'profession',
    sector: 'arts',
    description: 'moves their body rhythmically with or without musical accompaniment.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'diplomat': {
    sv: 3450,
    type: 'profession',
    sector: 'government and law',
    description: 'an official representing a country abroad.',
    dailyWage: 440,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'diver': {
    sv: 3250,
    type: 'labourer',
    sector: 'agriculture',
    description: 'dives down deep to collect precious things from the sea floors.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'farmer': {
    sv: 150,
    type: 'labourer',
    sector: 'agriculture',
    description: 'operates a farm or cultivates land.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'fisherman': {
    sv: 170,
    type: 'labourer',
    sector: 'agriculture',
    description: 'catches fish.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'fishmonger': {
    sv: 250,
    type: 'business',
    sector: 'business',
    description: 'sells fish.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'furrier': {
    sv: 250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'prepares furs for adornment.',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'gardener': {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'tends and cultivates a garden.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'general': {
    sv: 2250,
    type: 'profession',
    sector: 'military',
    description: 'the chief commander of an army.',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'gladiator': {
    sv: 3250,
    type: 'profession',
    sector: 'arts',
    description: 'fights against other people, wild animals, or monsters in an arena.',
    dailyWage: 210,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'glovemaker': {
    sv: 2400,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs gloves.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'goldsmith': {
    sv: 6550,
    type: 'business',
    sector: 'craftsmanship',
    description: 'a smith who specializes in precious metals.',
    dailyWage: 400,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'grocer': {
    sv: 450,
    type: 'business',
    sector: 'business',
    description: 'a food merchant.',
    dailyWage: 105,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'guard': {
    sv: 150,
    synonyms: ['guardsman', 'guard', 'watchman', 'town guard'],
    type: 'profession',
    sector: 'military',
    description: 'a person who keeps watch, especially a soldier or other person formally assigned to protect a person or to control access to a place.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'guildmaster': {
    sv: 4150,
    type: 'profession',
    sector: 'business',
    description: 'leads an economically independent producer (a “guild,” an association of craftsmen or merchants that often holds considerable bureaucratic power).',
    dailyWage: 900,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'hatter': {
    sv: 950,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs headwear.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'healer': {
    sv: 950,
    type: 'profession',
    sector: 'magic',
    description: 'able to cure a disease or injury using magic.',
    dailyWage: 170,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'herald': {
    sv: 550,
    type: 'labourer',
    sector: 'communications',
    description: 'a messenger who carries important news..',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'herbalist': {
    sv: 850,
    type: 'business',
    sector: 'science',
    description: 'practices healing by the use of herbs.',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'hermit': {
    sv: 950,
    type: 'profession',
    sector: 'outcast',
    description: 'lives in solitude, typically as a religious or spiritual discipline.',
    dailyWage: 40,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'historian': {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'an expert in or student of history, especially that of a particular period, geographical region, or social phenomenon.',
    dailyWage: 230,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'hunter': {
    sv: 250,
    isHobby: true,
    type: 'labourer',
    sector: 'self employed',
    description: 'hunts game or other wild animals.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'ice seller': {
    sv: 1950,
    type: 'labourer',
    sector: 'agriculture',
    description: 'collects and sells ice.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'innkeeper': {
    sv: 750,
    synonyms: ['tavern keeper', 'tavernkeep', 'barkeep', 'innkeep'],
    type: 'business',
    sector: 'business',
    description: 'owns and runs an inn.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'inventor': {
    sv: 2250,
    type: 'profession',
    sector: 'business',
    description: 'invented a particular process or device, or invents things as an occupation.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'jailer': {
    sv: 1250,
    type: 'labourer',
    sector: 'military',
    description: 'supervises a jail and the prisoners in it.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'jester': {
    sv: 2250,
    type: 'profession',
    sector: 'arts',
    description: 'professional joker.',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'jeweler': {
    sv: 400,
    type: 'business',
    sector: 'craftsmanship',
    description: 'designs, makes, and repairs necklaces, bracelets, rings, etc., often containing jewels.',
    dailyWage: 240,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'judge': {
    sv: 850,
    type: 'profession',
    sector: 'government and law',
    description: 'decides cases in a court of law.',
    dailyWage: 650,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'knight': {
    sv: 1150,
    type: 'profession',
    sector: 'government and law',
    description: 'serves his or her sovereign after being bestowed a rank of royal honor.',
    dailyWage: 350,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'lady': {
    sv: 1550,
    type: 'profession',
    sector: 'government and law',
    description: 'some sort of noble.',
    dailyWage: 350,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'leatherworker': {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes items from leather such as pouches, scabbards, straps, etc.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'librarian': {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'administers or assists in a library.',
    dailyWage: 160,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'linguist': {
    sv: 5150,
    type: 'profession',
    sector: 'science',
    description: 'studies the essence of communication, including the units, nature, structure, and modification of language.',
    dailyWage: 260,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'locksmith': {
    sv: 1900,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs locks.',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'lord': {
    sv: 1150,
    type: 'profession',
    sector: 'government and law',
    description: 'some sort of noble.',
    dailyWage: 400,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'lumberjack': {
    sv: 350,
    type: 'labourer',
    sector: 'agriculture',
    description: 'fells trees, cuts them into logs, and transports them to a sawmill.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'maid-servant': {
    sv: 250,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'a domestic servant of a household.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'masseur': {
    sv: 1550,
    type: 'profession',
    sector: 'business',
    description: 'performs massages.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'merchant': {
    sv: 650,
    type: 'business',
    sector: 'business',
    description: 'sells and trades goods.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'messenger': {
    sv: 1250,
    type: 'labourer',
    sector: 'communications',
    description: 'carries messages between recipients.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'midwife': {
    sv: 650,
    type: 'labourer',
    sector: 'science',
    description: 'assists in childbirth and the care of women giving birth.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'miller': {
    sv: 650,
    type: 'business',
    sector: 'agriculture',
    description: 'owns or works in a grain mill.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'miner': {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works underground in mines in order to obtain minerals such as coal, diamonds, or gold.',
    dailyWage: 60,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'minister': {
    sv: 950,
    type: 'profession',
    sector: 'government and law',
    description: 'assists with the administration of business.',
    dailyWage: 190,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'minstrel': {
    sv: 1450,
    type: 'profession',
    sector: 'arts',
    description: 'recites lyric or heroic poetry for nobility.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'friar': {
    sv: 1450,
    type: 'profession',
    sector: 'religion',
    description: 'a member of a religious community of men, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.',
    dailyWage: 30,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'mortician': {
    sv: 650,
    type: 'profession',
    sector: 'science',
    description: 'prepares dead bodies for burial or cremation and makes arrangements for funerals.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'necromancer': {
    sv: 6150,
    type: 'profession',
    sector: 'magic',
    description: 'communicates with and conjures the spirits of the dead.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'noble': {
    sv: 3150,
    synonyms: ['nobleman', 'noblewoman'],
    type: 'profession',
    sector: 'government and law',
    description: 'a person belonging to a class with high social or political status.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'nobleman': {
    sv: 3150,
    synonyms: ['nobleman', 'noblewoman'],
    type: 'profession',
    sector: 'government and law',
    description: 'a person belonging to a class with high social or political status.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'nun': {
    sv: 2150,
    type: 'profession',
    sector: 'religion',
    description: 'a member of a religious community of women, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'nurse': {
    sv: 1150,
    type: 'profession',
    sector: 'science',
    description: 'cares for the sick or infirm, especially in a hospital.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'painter': {
    sv: 1500,
    isHobby: true,
    type: 'business',
    sector: 'arts',
    description: 'paints pictures using a variety of different substances.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'patissier': {
    sv: 1500,
    type: 'business',
    sector: 'hospitality',
    description: 'maker or seller of pastries and cakes.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'perfumer': {
    sv: 3150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'expert on creating perfume compositions.',
    dailyWage: 160,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'philosopher': {
    sv: 7150,
    type: 'profession',
    sector: 'science',
    description: 'a scholar of the fundamental nature of knowledge, reality, and existence.',
    dailyWage: 150,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'physician': {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'a qualified practitioner of medicine.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'pilgrim': {
    sv: 5150,
    type: 'labourer',
    sector: 'outcast',
    description: 'journeys to some sacred place as an act of religious devotion, occasionally to settle there.',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'politician': {
    sv: 4000,
    type: 'profession',
    sector: 'government and law',
    description: 'holding or seeking office in government.',
    dailyWage: 800,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'prime minister': {
    sv: 4000,
    synonyms: ['governor'],
    type: 'profession',
    sector: 'government and law',
    description: 'democratically holds the highest position of office.',
    dailyWage: 800,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'potter': {
    sv: 1150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes pots, bowls, plates, etc., out of clay.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'priest': {
    sv: 750,
    type: 'profession',
    sector: 'religion',
    description: 'has the authority to perform certain rites and administer certain sacraments.',
    dailyWage: 190,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'privateer': {
    sv: 1150,
    type: 'labourer',
    sector: 'military',
    description: 'engages in maritime warfare under a commission of war.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'professor': {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'a teacher of the highest rank in a college or university.',
    dailyWage: 350,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'roofer': {
    sv: 1800,
    type: 'labourer',
    sector: 'construction',
    description: 'builds and repairs roofs.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'ropemaker': {
    sv: 1850,
    type: 'business',
    sector: 'craftsmanship',
    description: 'braids rope.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'rugmaker': {
    sv: 1850,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs rugs by braiding, hooking, weaving, etc.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'saddler': {
    sv: 1000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs saddlery.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'sailor': {
    sv: 150,
    type: 'labourer',
    sector: 'transportation',
    description: 'works as a member of the crew of a commercial or naval ship or boat.',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'sculptor': {
    sv: 250,
    type: 'business',
    sector: 'arts',
    description: 'crafts art by carving or casting blocks of marble, stones, or other hardened minerals.',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'scavenger': {
    sv: 350,
    type: 'labourer',
    sector: 'unemployed',
    description: 'searches for and collects discarded items.',
    dailyWage: 30,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'scholar': {
    sv: 2250,
    type: 'profession',
    sector: 'science',
    description: 'a specialist in a particular branch of study who pursues the acquisition of knowledge.',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'seamstress': {
    sv: 450,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes, alters, repairs, as well as occasionally designing garments.',
    dailyWage: 190,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'seer': {
    sv: 350,
    type: 'profession',
    sector: 'magic',
    description: 'able to see what the future holds through supernatural insight.',
    dailyWage: 400,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'servant': {
    sv: 350,
    type: 'labourer',
    sector: 'hospitality',
    description: 'performs duties for others, especially a person employed in a house or as a personal attendant.',
    dailyWage: 100,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'shaman': {
    sv: 750,
    type: 'profession',
    sector: 'magic',
    description: 'accesses and influences the world of good and evil spirits.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'shepherd': {
    sv: 150,
    type: 'labourer',
    sector: 'agriculture',
    description: 'herds, tends, and guards sheep.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  "ship's captain": {
    sv: 950,
    type: 'profession',
    sector: 'military',
    description: 'commands a ship.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'shoemaker': {
    sv: 150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes shoes out of different materials.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'silversmith': {
    sv: 1250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'a smith who specializes in precious metals.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'slave': {
    sv: 150,
    type: 'labourer',
    sector: 'outcast',
    description: 'a person who is the legal property of another and forced to obey them.',
    dailyWage: 0,
    socialClass: 'indentured servitude',
    socialClassRoll () { return 5 }
  },
  'slaver': {
    sv: 650,
    type: 'business',
    sector: 'business',
    description: 'deals with or owns slaves.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'soldier': {
    sv: 1000,
    type: 'profession',
    sector: 'military',
    description: 'serves in an army.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'spice merchant': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'sells different kinds of spices.',
    dailyWage: 250,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'squire': {
    sv: 950,
    type: 'profession',
    sector: 'military',
    description: 'acts as an attendant to a knight before attempting to become a knight themselves.',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'stablehand': {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works in a stable.',
    dailyWage: 80,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'stevedore': {
    sv: 550,
    synonyms: ['ship worker', 'dock worker'],
    type: 'labourer',
    sector: 'labour',
    description: 'loads and unloads cargo from ships.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'stonemason': {
    sv: 750,
    type: 'business',
    sector: 'construction',
    description: 'cuts and prepares stone for use in construction.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'steward': {
    sv: 950,
    type: 'profession',
    sector: 'government and law',
    description: 'supervises both the estate and household of his lord or lady while they are away.',
    dailyWage: 250,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'street seller': {
    sv: 550,
    type: 'business',
    sector: 'business',
    description: 'hocks goods on the street.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'street sweeper': {
    sv: 450,
    type: 'labourer',
    sector: 'labour',
    description: 'cleans streets of a town.',
    dailyWage: 60,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'student': {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'attends school or learns under other to enter and pursue a particular subject.',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'surgeon': {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'practices surgery.',
    dailyWage: 380,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'surveyor': {
    sv: 1150,
    type: 'profession',
    sector: 'business',
    description: 'establishes maps and boundaries for ownership or other purposes required by government or civil law.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'tailor': {
    sv: 250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes, alters, repairs, as well as occasionally designing garments.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'tanner': {
    sv: 200,
    type: 'business',
    sector: 'craftsmanship',
    description: 'treats the skins and hides of animals to produce leather.',
    dailyWage: 70,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'tavernkeeper': {
    sv: 450,
    type: 'business',
    sector: 'business',
    description: 'owns or runs a tavern.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'shopkeep': {
    sv: 450,
    type: 'business',
    sector: 'business',
    description: 'owns or runs a shop.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  "shopkeep's assistant": {
    sv: 200,
    type: 'business',
    sector: 'business',
    description: 'runs or assists in running a shop.',
    dailyWage: 25,
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'tax collector': {
    sv: 1850,
    type: 'profession',
    sector: 'government and law',
    description: 'collects unpaid taxes from people, guilds, or businesses.',
    dailyWage: 250,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'teacher': {
    sv: 1450,
    type: 'profession',
    sector: 'science',
    description: 'instructs on a particular skill or subject.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'thatcher': {
    sv: 350,
    type: 'labourer',
    sector: 'construction',
    description: 'builds and repairs roofs.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'thief': {
    sv: 850,
    type: 'profession',
    sector: 'crime',
    description: 'steals peoples property, especially by stealth and without using force or violence.',
    dailyWage: 120,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'torturer': {
    sv: 1850,
    type: 'profession',
    sector: 'military',
    description: 'inflicts severe pain on someone as a punishment or in order to force them to do or say something.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'town crier': {
    sv: 750,
    type: 'labourer',
    sector: 'communications',
    description: 'makes public announcements in the streets or marketplace.',
    dailyWage: 60,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'toymaker': {
    sv: 2500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs toys.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'vendor': {
    sv: 1150,
    type: 'business',
    sector: 'business',
    description: 'deals items in the street.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'veterinarian': {
    sv: 1250,
    type: 'profession',
    sector: 'agriculture',
    description: 'treats diseased or injured animals.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'vintner': {
    sv: 850,
    type: 'profession',
    sector: 'agriculture',
    description: 'engages in winemaking, especially with monitoring and harvesting the grapes.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'weaver': {
    sv: 600,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes fabric by weaving fiber together.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'wetnurse': {
    sv: 350,
    type: 'labourer',
    sector: 'labour',
    description: "a woman employed to suckle another woman's child.",
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'woodcarver': {
    sv: 2450,
    type: 'business',
    sector: 'craftsmanship',
    description: 'fashions wood into various shapes.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'wood seller': {
    sv: 2150,
    type: 'business',
    sector: 'business',
    description: 'sells wood, typically logs.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'wrestler': {
    sv: 6150,
    isHobby: true,
    type: 'labourer',
    sector: 'arts',
    description: 'performs in matches involving grappling and grappling-type techniques.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'writer': {
    sv: 7150,
    type: 'profession',
    sector: 'arts',
    description: 'commits his or her thoughts, ideas, etc., into written language.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'animal/Monster Handler': {
    sv: 5000,
    type: 'profession',
    sector: 'agriculture',
    description: 'responsible for the safe keeping, dietary care, and exercise of animals or monsters.',
    dailyWage: 90,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'arborist': {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'maintains and cares for trees, often by surgically removing dying limbs.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'baler': {
    sv: 800,
    type: 'profession',
    sector: 'agriculture',
    description: 'bales hay, or in the mills, wool and cotton goods.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'beekeeper': {
    sv: 2000,
    type: 'profession',
    sector: 'agriculture',
    description: 'owns and breeds bees, especially for their honey.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'breeder': {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'breeds livestock, animals, or monsters.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'dairymaid': {
    sv: 500,
    type: 'profession',
    sector: 'agriculture',
    description: 'milks cows and makes cheese and butter.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'falconer': {
    sv: 4000,
    type: 'profession',
    sector: 'agriculture',
    description: 'keeps, trains, and hunts with falcons, hawks, or other birds of prey.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'florist': {
    sv: 3500,
    isHobby: true,
    type: 'business',
    sector: 'agriculture',
    description: 'grows and arranges plants and cut flowers.',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'forager': {
    sv: 500,
    type: 'profession',
    sector: 'agriculture',
    description: 'searches for food in the wild.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'forester': {
    sv: 1000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'supervises the wellbeing of a forest.',
    dailyWage: 240,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'fowler': {
    sv: 750,
    type: 'profession',
    sector: 'agriculture',
    description: 'catches or ensnares birds.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'gamekeeper': {
    sv: 4500,
    type: 'profession',
    sector: 'agriculture',
    description: 'breeds and protects game, typically for a large estate.',
    dailyWage: 230,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'groom': {
    sv: 2500,
    type: 'profession',
    sector: 'agriculture',
    description: 'cleans and brushes the coats horses, dogs, or other animals.',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'herder': {
    sv: 100,
    type: 'profession',
    sector: 'agriculture',
    description: 'supervises a herd of livestock or makes a living from keeping livestock, especially in open country.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'horse trainer': {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'tends to horses and teaches them different disciplines.',
    dailyWage: 210,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'master-of-Horses': {
    sv: 5000,
    type: 'profession',
    sector: 'agriculture',
    description: 'supervises and commands all horses under a jurisdiction.',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'master-of-Hounds': {
    sv: 7500,
    type: 'profession',
    sector: 'agriculture',
    description: 'maintains a pack of hounds and their associated staff, equipment, and hunting arrangements.',
    dailyWage: 900,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'pathfinder': {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'scouts ahead and discovers a path or way for others.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'plumer': {
    sv: 2000,
    type: 'profession',
    sector: 'agriculture',
    description: 'hunts birds for their plumes.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'prospector': {
    sv: 500,
    type: 'labourer',
    sector: 'mining',
    description: 'searches for mineral deposits, especially by drilling and excavation.',
    dailyWage: 80,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'renderer': {
    sv: 3500,
    type: 'profession',
    sector: 'agriculture',
    description: 'converts waste animal tissue into usable materials.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'thresher': {
    sv: 300,
    type: 'labourer',
    sector: 'agriculture',
    description: 'separates grain from the plants by beating.',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'trapper': {
    sv: 800,
    type: 'profession',
    sector: 'agriculture',
    description: 'traps wild animals, especially for their fur.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'zookeeper': {
    sv: 10000,
    type: 'profession',
    sector: 'agriculture',
    description: 'maintains and cares for animals or monsters in a zoo.',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }

  },
  'construction Worker': {
    sv: 300,
    type: 'labourer',
    sector: 'construction',
    description: 'a laborer in the physical construction of a built environment and its infrastructure.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'general contractor': {
    sv: 5000,
    type: 'profession',
    sector: 'construction',
    description: 'supervises a construction site, manages its vendors and trades, and communicates information to all involved parties.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'glazier': {
    sv: 500,
    type: 'labourer',
    sector: 'construction',
    description: 'fits glass into windows and doors.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'plasterer': {
    sv: 750,
    type: 'labourer',
    sector: 'construction',
    description: 'applies plaster to walls, ceilings, or other surfaces.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }

  },
  'roadlayer': {
    sv: 3000,
    synonyms: ['streetlayer', 'street layer'],
    type: 'labourer',
    sector: 'construction',
    description: 'paves roads or streets.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'acrobat': {
    sv: 2500,
    type: 'profession',
    sector: 'arts',
    description: 'performs spectacular gymnastic feats.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'trapezist': {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'performs acrobatics high above the ground on a tightrope or trapeze.',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'arranger': {
    sv: 2000,
    type: 'profession',
    sector: 'arts',
    description: 'adapts a musical composition for performance.',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'athlete': {
    sv: 500,
    type: 'profession',
    sector: 'labourer',
    description: 'proficient in sports and other forms of physical exercise.',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'busker': {
    sv: 2000,
    type: 'profession',
    sector: 'outcast',
    description: 'performs in a public place, often for money.',
    dailyWage: 50,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'celebrity': {
    sv: 10000,
    type: 'profession',
    sector: 'arts',
    description: 'a famous person.',
    dailyWage: 1000,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'choirmaster': {
    sv: 1000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'trains a choir and orchestrates their singing when they perform.',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'clown': {
    sv: 3000,
    type: 'profession',
    sector: 'arts',
    description: 'comic entertainer who wears a traditional costume and exaggerated makeup.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'comedian': {
    sv: 5000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'entertainer whose act is designed to make an audience laugh.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'conductor': {
    sv: 8000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'directs the performance of an orchestra.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'contortionist': {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'twists and bends their body into strange and unnatural positions.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'curator': {
    sv: 2500,
    isHobby: true,
    type: 'business',
    sector: 'arts',
    description: 'keeper and custodian of a museum or other collections of precious items.',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'costumer': {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'makes theatrical costumes.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'equilibrist': {
    sv: 3000,
    type: 'profession',
    sector: 'arts',
    description: 'performs balancing feats.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'fashion designer': {
    sv: 5000,
    isHobby: true,
    type: 'business',
    sector: 'arts',
    description: 'applies design, aesthetics and natural beauty to garments and their accessories.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'glasspainter': {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'produces colorful designs on or in glass.',
    dailyWage: 160,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'juggler': {
    sv: 3000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'keeps several objects in motion in the air at the same time by alternately tossing and catching them.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'limner': {
    sv: 7000,
    type: 'profession',
    sector: 'arts',
    description: 'paints and calligraphs to adorn or enlighten scrolls and manuscripts.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'makeup artist': {
    sv: 4500,
    type: 'profession',
    sector: 'arts',
    description: 'applies cosmetics to models, actors, nobles, etc.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'artisan': {
    sv: 4500,
    isHobby: true,
    synonyms: ['artist', 'art maker'],
    type: 'profession',
    sector: 'arts',
    description: 'creates some form of art.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(8, 6) }
  },
  'model': {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'poses as a subject for an artist, fashion designer, or sculptor.',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'musician': {
    sv: 800,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'plays a musical instrument.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'playwright': {
    sv: 2500,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'writes plays or musicals.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'poet': {
    sv: 3500,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'writes ballads, epics, sonnets, or other forms of poetry.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'ringmaster': {
    sv: 3500,
    type: 'business',
    sector: 'arts',
    description: 'master of ceremony who introduces the circus acts to the audience.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'ropewalker': {
    sv: 4000,
    synonyms: ['trapeze artist'],
    type: 'profession',
    sector: 'arts',
    description: 'walks along a tightrope to entertain others.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'singer': {
    sv: 2000,
    type: 'profession',
    sector: 'arts',
    description: 'sings with or without instrumental accompaniment.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'skald': {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'composes and recites poems honoring heroes and their deeds.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'stage magician': {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'deceives their audience with seemingly impossible feats while using only natural means.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'stuntman': {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'performs dangerous stunts for their audience.',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'tattooist': {
    sv: 3000,
    type: 'business',
    sector: 'arts',
    description: 'illustrates the skin with indelible patterns, pictures, legends, etc.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'theater director': {
    sv: 5000,
    type: 'business',
    sector: 'arts',
    description: 'supervises and orchestrates the mounting of a theatre production by unifying various endeavors and aspects of production.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'accountant': {
    sv: 3000,
    type: 'business',
    sector: 'business',
    description: 'keeps and inspects financial accounts.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'actuary': {
    sv: 6000,
    type: 'business',
    sector: 'government and law',
    description: 'compiles and analyzes statistics and uses them to calculate risk.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'animal collector': {
    sv: 10000,
    isHobby: true,
    type: 'business',
    sector: 'agriculture',
    description: 'collects and deals in rare and exotic animals and monsters.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'business owner': {
    sv: 500,
    type: 'business',
    sector: 'business',
    description: 'owns a business entity in an attempt to profit from its successful operations.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'debt collector': {
    sv: 3500,
    type: 'business',
    sector: 'business',
    description: 'recovers money owed on delinquent accounts.',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'draper': {
    sv: 2500,
    type: 'business',
    sector: 'business',
    description: 'an alcohol merchant.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'appraiser': {
    sv: 5000,
    type: 'profession',
    sector: 'business',
    description: 'assesses the monetary value of something.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'auctioneer': {
    sv: 4500,
    type: 'profession',
    sector: 'business',
    description: 'conducts auctions by accepting bids and declaring goods sold.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'bagniokeeper': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'owner of a bath house or brothel.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'bookkeeper': {
    sv: 2500,
    type: 'business',
    sector: 'business',
    description: 'keeps records of financial affairs.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'collector': {
    sv: 3000,
    isHobby: true,
    type: 'business',
    sector: 'business',
    description: 'collects things of a specified type, professionally or as a hobby.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'entrepreneur': {
    sv: 500,
    isHobby: true,
    type: 'business',
    sector: 'business',
    description: 'organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'moneychanger': {
    sv: 2500,
    type: 'business',
    sector: 'government and law',
    description: 'exchanges one currency for another.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'moneylender': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'lends money to others who pay interest.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'peddler': {
    sv: 350,
    type: 'business',
    sector: 'business',
    description: 'travels from place to place selling assorted items.',
    dailyWage: 80,
    socialClass: 'paupery',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'plantation owner': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'an owner of an estate on which crops are cultivated by resident labor, typically slave labor.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'speculator': {
    sv: 9000,
    isHobby: true,
    type: 'profession',
    sector: 'business',
    description: 'invests in stocks, property, or other ventures in the hope of making a profit.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'thrift dealer': {
    sv: 800,
    type: 'business',
    sector: 'business',
    description: 'deals in secondhand items.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'tradesman': {
    sv: 500,
    type: 'business',
    sector: 'business',
    description: 'deals exclusively in bartering.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'billboard poster': {
    sv: 1000,
    type: 'labourer',
    sector: 'business',
    description: 'a person who puts up notices, signs and advertisements.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'courier': {
    sv: 300,
    type: 'labourer',
    sector: 'business',
    description: 'transports packages and documents.',
    dailyWage: 50,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'interpreter': {
    sv: 5000,
    synonyms: ['translator'],
    type: 'profession',
    sector: 'business',
    description: 'interprets language and its meaning, especially within ancient manuscripts.',
    dailyWage: 190,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'coinsmith': {
    sv: 10000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes currency for the government.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'bladesmith': {
    sv: 3000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'specializes in making and repairing bladed weapons, especially swords and daggers.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'bookbinder': {
    sv: 5000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'binds books and wraps scrolls.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'bottler': {
    sv: 3000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'bottles drinks and other liquids.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'bowyer': {
    sv: 500,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes bows and crossbows.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'broom Maker': {
    sv: 4500,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes brooms and brushes.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'candlemaker': {
    sv: 2000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes candles and wax from honey and tallow.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'cartwright': {
    sv: 500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes and repairs carts and wagons.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'cutler': {
    sv: 7500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes cutlery.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'dyer': {
    sv: 5000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'dyes cloth and other materials.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'embroiderer': {
    sv: 2500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'ornaments with needlework.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'engraver': {
    sv: 1000,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'incises a design onto a hard surface by cutting grooves into it.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'farrier': {
    sv: 2000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: "trims and shoes horse's hooves.",
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'fletcher': {
    sv: 1500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs arrows.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'furniture artisan': {
    sv: 2500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs furniture.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'glassworker': {
    sv: 5000,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'blows glass planes and items.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'instrument Maker': {
    sv: 7500,
    isHobby: true,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs musical instruments.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'lapidary': {
    sv: 5000,
    isHobby: true,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'turns stone, minerals, or gemstones into decorative items such as cabochons, engraved gems, and faceted designs.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'luthier': {
    sv: 8500,
    isHobby: true,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs stringed instruments.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'mercer': {
    sv: 2500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'weaves textile fabrics, especially silks, velvets, and other fine materials.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'optician': {
    sv: 6500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs eyeglasses.',
    dailyWage: 190,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'printer': {
    sv: 2000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'a person who applies pressure to an inked surface resting upon a print medium (such as paper or cloth), thereby transferring the ink to manufacture a text.',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'restorer': {
    sv: 10000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'repairs or renovates a work of art so as to return it to its original condition.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'soaper': {
    sv: 3000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes soap from accumulated mutton fat, wood ash, and natural soda.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'taxidermist': {
    sv: 4000,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'prepares, stuffs, and mounts the skins of animals.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'tinker': {
    sv: 3000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'travels from place to place mending utensils.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'weaponsmith': {
    sv: 2500,
    type: 'business',
    sector: 'craftsmanship',
    description: 'specializes in making and repairing weapons.',
    dailyWage: 190,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'wheelwright': {
    sv: 1500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes and repairs wooden wheels.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'assassin': {
    sv: 5000,
    type: 'profession',
    sector: 'crime',
    description: 'murders through stealth for reasons pertaining to money, politics, or religion.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'bandit': {
    sv: 8000,
    type: 'profession',
    sector: 'crime',
    description: 'a robber or outlaw belonging to a gang and typically operating in an isolated or lawless area.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'burglar': {
    sv: 500,
    type: 'profession',
    sector: 'crime',
    description: 'illegally enters buildings and steals things.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'conman': {
    sv: 750,
    type: 'profession',
    sector: 'crime',
    description: 'tricks people by gaining their trust and persuading them to believe something that is not true in order to benefit from the encounter.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'gamefighter': {
    sv: 2000,
    type: 'profession',
    sector: 'crime',
    description: 'engages in arena matches in which animals or monsters are pitted against one another, typically to the death.',
    dailyWage: 190,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'crime boss': {
    sv: 6000,
    type: 'profession',
    sector: 'crime',
    description: 'controls and supervises a criminal organization.',
    dailyWage: 400,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'cutpurse': {
    sv: 500,
    type: 'profession',
    sector: 'crime',
    description: 'a pickpocket or thief.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'drug dealer': {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'dealer of illegal substances.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'drug lord': {
    sv: 6000,
    type: 'profession',
    sector: 'crime',
    description: 'controls a network of persons involved in the illegal drugs trade and transactions.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'extortioner': {
    sv: 2000,
    type: 'profession',
    sector: 'crime',
    description: 'extorts money from someone by threatening to expose embarrassing information about them.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'fence': {
    sv: 10000,
    type: 'profession',
    sector: 'crime',
    description: 'deals in stolen goods.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'forger': {
    sv: 10000,
    type: 'profession',
    sector: 'crime',
    description: 'produces fraudulent copies or imitations.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'fugitive': {
    sv: 2500,
    type: 'labourer',
    sector: 'crime',
    description: 'a person who has escaped from a place or is in hiding, especially to avoid arrest or persecution.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'highwayman': {
    sv: 500,
    type: 'profession',
    sector: 'crime',
    description: 'robs travelers on a road.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'kidnapper': {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'abducts people and holds them captive, typically to obtain a ransom.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'loan shark': {
    sv: 4500,
    type: 'profession',
    sector: 'crime',
    description: 'charges extremely high rates of interest for moneylending, typically under illegal conditions.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'pirate': {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'attacks and robs ships at sea.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'wannabe pirate': {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'dreams of becoming a full fledged pirate, but currently is just a rowdy sailor.',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'poacher': {
    sv: 5000,
    type: 'labourer',
    sector: 'crime',
    description: 'hunts illegal game.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'poisoner': {
    sv: 7000,
    type: 'business',
    sector: 'crime',
    description: 'makes poisons to harm or kill.',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'marauder': {
    sv: 3000,
    type: 'profession',
    sector: 'crime',
    description: 'makes sudden, unprompted attacks against defenseless or near-defenseless settlements.',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'smuggler': {
    sv: 2500,
    type: 'profession',
    sector: 'crime',
    description: 'manages the import or export of goods secretly, in violation of the law, especially without payment of legal duty.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'affeeror': {
    sv: 10000,
    type: 'profession',
    sector: 'government and law',
    description: 'determines the values of fines and amercements.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'agister': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'affords pasture to the livestock of others for a price.',
    dailyWage: 120,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'alderman': {
    sv: 1000,
    type: 'profession',
    sector: 'government and law',
    description: 'a civic dignitary in the local council ranked below the mayor.',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'alienist': {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'assesses the competence of a defendant in a court of law.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'assay master': {
    sv: 10000,
    type: 'profession',
    sector: 'government and law',
    description: 'oversees the testing of currency.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'baron': {
    sv: 2500,
    type: 'profession',
    sector: 'government and law',
    description: 'a member of the lowest order of the nobility.',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'chancellor': {
    sv: 5000,
    type: 'profession',
    sector: 'government and law',
    description: 'a senior state or legal official.',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'chief': {
    sv: 9000,
    type: 'profession',
    sector: 'government and law',
    description: 'leads or rules a people or clan.',
    dailyWage: 100,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'conservationist': {
    sv: 3000,
    isHobby: true,
    type: 'profession',
    sector: 'government and law',
    description: 'advocates for the protection and preservation of the environment and wildlife.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'count': {
    sv: 7000,
    type: 'profession',
    sector: 'government and law',
    description: 'a nobleperson ranking above a viscount and below a marquess.',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'duke': {
    sv: 15000,
    type: 'profession',
    sector: 'government and law',
    description: 'rules over a duchy and is of the highest rank below the monarch.',
    dailyWage: 900,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'emperor': {
    sv: 25000,
    type: 'profession',
    sector: 'government and law',
    description: 'the supreme sovereign ruler of an extensive group of states or countries under a single authority.',
    dailyWage: 2400,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'king': {
    sv: 20000,
    type: 'profession',
    sector: 'government and law',
    description: 'the ruler of an independent state and its people.',
    dailyWage: 2400,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'lady-in-Waiting': {
    sv: 3000,
    type: 'labourer',
    sector: 'government and law',
    description: 'attends a queen, princess, or other high-ranking feminine nobleperson.',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'marquess': {
    sv: 5000,
    type: 'profession',
    sector: 'government and law',
    description: 'a nobleperson ranking above a count and below a duke.',
    dailyWage: 600,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'master-of-Coin': {
    sv: 7500,
    type: 'profession',
    sector: 'government and law',
    description: 'supervises the royal treasury, advises the monarch on financial matters, and is responsible for raising money through taxation.',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'master-of-the-Revels': {
    sv: 1000,
    type: 'profession',
    sector: 'government and law',
    description: 'responsible for overseeing royal festivities.',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'notary': {
    sv: 3000,
    isHobby: true,
    type: 'profession',
    sector: 'government and law',
    description: 'performs certain legal formalities, especially to draw up or certify contracts, deeds, and other documents for use in other jurisdictions.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'orator': {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'makes statements on behalf of a group or individual nobleperson.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'page': {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'a young attendant to a person of noble rank.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'prince': {
    sv: 6000,
    type: 'profession',
    sector: 'government and law',
    description: 'the direct descendant of a monarch.',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'senator': {
    sv: 5000,
    type: 'profession',
    sector: 'government and law',
    description: 'partakes in governmental decision-making after being elected.',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'sheriff': {
    sv: 4500,
    type: 'profession',
    sector: 'government and law',
    description: 'the chief executive officer in a county, having various administrative and judicial functions.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'spymaster': {
    sv: 1000,
    type: 'profession',
    sector: 'government and law',
    description: 'directs a network of subordinate espionage agents for a state, kingdom, or empire.',
    dailyWage: 800,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'viscount': {
    sv: 7000,
    type: 'profession',
    sector: 'government and law',
    description: 'a nobleperson ranking above a baron and below a count.',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'ward': {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'a member of a noble house who has been taken in by another noble family to be raised for a time.',
    dailyWage: 100,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },
  'acater': {
    sv: 3000,
    type: 'profession',
    sector: 'agriculture',
    description: 'provides and prepares foodstuffs or delicacies for events such as festivals.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'tunner': {
    sv: 5000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'fills casks in a brewery or winery.',
    dailyWage: 30,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'barkeep': {
    sv: 500,
    type: 'profession',
    sector: 'hospitality',
    description: 'works and serves drinks in a bar.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },

  'butler': {
    sv: 2000,
    type: 'profession',
    sector: 'hospitality',
    description: 'the chief servant of a household.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'caregiver': {
    sv: 1000,
    type: 'profession',
    sector: 'hospitality',
    description: 'looks after a sick, elderly, or disabled person.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'charcoal Maker': {
    sv: 2500,
    type: 'labourer',
    sector: 'business',
    description: 'manufactures charcoal by carbonizing wood in a kiln.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'chatelaine': {
    sv: 3000,
    type: 'profession',
    sector: 'hospitality',
    description: 'a person in charge of a large household.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'chimney sweeper': {
    sv: 2500,
    type: 'labourer',
    sector: 'business',
    description: 'a person, typically a child, who ascends chimneys to clean them.',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'clerk': {
    sv: 5000,
    type: 'profession',
    sector: 'business',
    description: 'undertakes routine administrative duties in a business or bank.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'copyist': {
    sv: 3000,
    type: 'profession',
    sector: 'communication',
    description: 'makes copies of handwritten documents or music.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'croupier': {
    sv: 1500,
    type: 'profession',
    sector: 'hospitality',
    description: 'runs a gaming table by gathering in and paying out money or tokens.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'exterminator': {
    sv: 2000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'exterminates unwanted rodents and insects.',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'food and drink taster': {
    sv: 3500,
    type: 'profession',
    sector: 'hospitality',
    description: 'ingests food that was prepared for someone else to confirm it is safe to eat.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'gongfarmer': {
    sv: 800,
    type: 'labourer',
    sector: 'agriculture',
    description: 'digs out and removes excrement from privies and cesspits.',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'gravedigger': {
    sv: 500,
    type: 'labourer',
    sector: 'religion',
    description: 'digs graves for the purposes of a funeral ceremony.',
    dailyWage: 40,
    socialClass: 'paupery',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'groundskeeper': {
    sv: 1000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'maintains an athletic field, a park, or the grounds of a graveyard or other institution.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'kitchen drudge': {
    sv: 500,
    type: 'labourer',
    sector: 'business',
    description: 'performs menial work in a kitchen.',
    dailyWage: 50,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'knacker': {
    sv: 2000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'disposes of dead or unwanted animals.',
    dailyWage: 40,
    socialClass: 'paupery',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'lamplighter': {
    sv: 5000,
    type: 'labourer',
    sector: 'business',
    description: 'lights street or road lights at dusk.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'laundry worker': {
    sv: 2500,
    type: 'labourer',
    sector: 'business',
    description: 'a laborer who takes part in the washing, drying, and ironing of clothes and other fabric items.',
    dailyWage: 40,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'lector': {
    sv: 4000,
    type: 'profession',
    sector: 'communications',
    description: 'reads to others while they work for entertainment.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'longshoreman': {
    sv: 1000,
    type: 'labourer',
    sector: 'business',
    description: 'loads and unloads ships in a port.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'nanny': {
    sv: 800,
    type: 'labourer',
    sector: 'caregiver',
    description: 'a servant employed to look after a young child or children.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'operator': {
    sv: 2500,
    type: 'labourer',
    sector: 'construction',
    description: 'a laborer who operates equipment, typically in construction.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'pastry chef': {
    sv: 1500,
    type: 'profession',
    sector: 'food',
    description: 'makes desserts, especially cakes and pastries.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'plumber': {
    sv: 3000,
    type: 'profession',
    sector: 'construction',
    description: 'installs and repairs the fittings of water supply and sanitation.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'porter': {
    sv: 3000,
    type: 'profession',
    sector: 'labourer',
    description: 'carries luggage and other loads.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'harlot': {
    sv: 400,
    synonyms: ['prostitute', 'lady of the night', 'call girl', 'sex worker'],
    type: 'profession',
    sector: 'business',
    description: 'engages in sexual activity for payment.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'quarryman': {
    sv: 1200,
    type: 'labourer',
    sector: 'construction',
    description: 'quarries stone.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'stagehand': {
    sv: 2500,
    type: 'labourer',
    sector: 'arts',
    description: 'moves scenery or props before or during the performance of a theatrical production.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'street cleaner': {
    sv: 4000,
    type: 'labourer',
    sector: 'construction',
    description: 'cleans streets and alleyways after dark.',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'talent scout': {
    sv: 7000,
    type: 'profession',
    sector: 'arts',
    description: 'searches for talented individuals who can be employed or promoted.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'trainer': {
    sv: 5000,
    isHobby: true,
    type: 'profession',
    sector: 'adventuring',
    description: 'trains someone in a particular skill, usually physical, for money.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'water bearer': {
    sv: 200,
    type: 'labourer',
    sector: 'agriculture',
    description: 'brings water from rivers, wells, and lakes back to their settlement.',
    dailyWage: 40,
    socialClass: 'paupery',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'abjurer': {
    sv: 5000,
    type: 'profession',
    sector: 'magic',
    description: 'a mage focused in protective spells.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'alchemist': {
    sv: 2000,
    type: 'profession',
    sector: 'science',
    description: 'transforms or creates something within nature through the magical and scientific manipulation of chemicals.',
    dailyWage: 1500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'archmage': {
    sv: 15000,
    type: 'profession',
    sector: 'magic',
    description: 'an extremely powerful mage.',
    dailyWage: 1800,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'artificer': {
    sv: 7500,
    type: 'profession',
    sector: 'magic',
    description: 'unlocks magic in everyday objects as well as being an inventor.',
    dailyWage: 700,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },

  'conjuror': {
    sv: 7000,
    type: 'profession',
    sector: 'magic',
    description: 'conjures spirits or familiars.',
    dailyWage: 600,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'elementalist': {
    sv: 8000,
    type: 'profession',
    sector: 'magic',
    description: 'manipulates nature’s elements to their will.',
    dailyWage: 600,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'enchanter': {
    sv: 7500,
    type: 'profession',
    sector: 'magic',
    description: 'uses sorcery to put someone or something under a spell.',
    dailyWage: 3000,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'evoker': {
    sv: 8000,
    type: 'profession',
    sector: 'magic',
    description: 'manipulates energy or taps into an unseen source of power in order to produce a desired kinetic end.',
    dailyWage: 2300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'hearth witch': {
    sv: 6000,
    type: 'profession',
    sector: 'magic',
    description: 'incorporates spells and enchantments in cooking.',
    dailyWage: 1800,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'illusionist': {
    sv: 7500,
    type: 'profession',
    sector: 'magic',
    description: 'performs tricks and spells that deceive the senses.',
    dailyWage: 400,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'mage': {
    sv: 5000,
    type: 'profession',
    sector: 'magic',
    description: 'a magic-user.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'medium': {
    sv: 8000,
    type: 'profession',
    sector: 'magic',
    description: 'uses extrasensory perception, magic, or divine powers to identify information hidden from the normal senses.',
    dailyWage: 400,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'meteorologist': {
    sv: 1000,
    type: 'profession',
    sector: 'magic',
    description: 'forecasts and manipulates weather.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'ritualist': {
    sv: 4000,
    type: 'profession',
    sector: 'magic',
    description: 'practices or advocates the observance of ritual (formula intended to trigger a magical effect on a person or objects).',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'runecaster': {
    sv: 10000,
    type: 'profession',
    sector: 'magic',
    description: 'uses special alphabets to create runes (symbols possessing magical effects capable of being used multiple times).',
    dailyWage: 600,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'sage': {
    sv: 10000,
    type: 'profession',
    sector: 'magic',
    description: 'a wise and experienced magic-user.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'shapeshifter': {
    sv: 7000,
    type: 'profession',
    sector: 'magic',
    description: 'a person with the ability to change their physical form.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'summoner': {
    sv: 8000,
    type: 'profession',
    sector: 'magic',
    description: 'a mage able to summon forth magical beasts, creatures, and monsters.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'transmuter': {
    sv: 8000,
    type: 'profession',
    sector: 'magic',
    description: 'alters matter in form, appearance, or nature.',
    dailyWage: 600,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'witchdoctor': {
    sv: 3500,
    type: 'profession',
    sector: 'magic',
    description: 'a tribal mage with powers of healing, divination, and protection against the magic of others.',
    dailyWage: 190,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'witch': {
    sv: 4000,
    type: 'profession',
    sector: 'magic',
    description: 'a woman who has supernatural powers and practices sorcery, typically in solitude.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'wordsmith': {
    sv: 9000,
    type: 'profession',
    sector: 'magic',
    description: 'draws their power from language and casts by dictation.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'admiral': {
    sv: 1000,
    type: 'profession',
    sector: 'military',
    description: 'commands a fleet or naval squadron.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'bailiff': {
    sv: 5000,
    type: 'profession',
    sector: 'military',
    description: 'looks after prisoners.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'bodyguard': {
    sv: 3000,
    type: 'profession',
    sector: 'adventuring',
    description: 'escorts and protects another person, especially a dignitary.',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'bouncer': {
    sv: 2500,
    type: 'profession',
    sector: 'adventuring',
    description: 'prevents troublemakers from entering or to eject them from the premises of an establishment.',
    dailyWage: 170,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'castellan': {
    sv: 8000,
    type: 'profession',
    sector: 'government and law',
    description: 'the governor of a castle.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'cavalier': {
    sv: 2000,
    type: 'profession',
    sector: 'military',
    description: 'a skilled horseback rider.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'city watch': {
    sv: 4500,
    type: 'profession',
    sector: 'military',
    description: 'an officer of law enforcement who resides in larger towns or cities.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'commissar': {
    sv: 7500,
    type: 'profession',
    sector: 'military',
    description: 'teaches principles and policies to military units.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'constable': {
    sv: 500,
    type: 'profession',
    sector: 'military',
    description: 'an officer with limited policing authority, typically in a small town.',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'investigator': {
    sv: 5000,
    type: 'profession',
    sector: 'business',
    description: 'investigates and solves crimes.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'fifer': {
    sv: 3000,
    type: 'profession',
    sector: 'military',
    description: 'a non-combatant foot soldier who sounds signals for changes in formation in combat.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'duelist': {
    sv: 3000,
    isHobby: true,
    type: 'profession',
    sector: 'adventuring',
    description: 'skilled in one-on-one combat.',
    dailyWage: 250,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'executioner': {
    sv: 2500,
    type: 'profession',
    sector: 'military',
    description: 'carries out a sentence of death on a legally condemned person.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'firefighter': {
    sv: 500,
    type: 'labourer',
    sector: 'government and law',
    description: 'extinguishes fires.',
    dailyWage: 80,
    socialClass: 'paupery',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'inspection officer': {
    sv: 4000,
    type: 'profession',
    sector: 'military',
    description: 'responsible for the inspection of military units to ensure they meet appropriate standards of training and efficiency.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'intelligence Officer': {
    sv: 10000,
    type: 'profession',
    sector: 'military',
    description: 'collects, compiles and organizes information about the enemy.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'lieutenant': {
    sv: 2000,
    type: 'profession',
    sector: 'military',
    description: 'an officer of middle rank in the armed forces.',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'marksman': {
    sv: 800,
    type: 'profession',
    sector: 'military',
    description: 'in long-range weapons, such as the bow, crossbow, sling, etc. to inflict damage from afar.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'marshall': {
    sv: 5000,
    type: 'profession',
    sector: 'military',
    description: 'has the charge of the cavalry in the household of a monarch.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'medic': {
    sv: 600,
    type: 'profession',
    sector: 'military',
    description: 'a medical practitioner equipped for the battlefield.',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'mercenary': {
    sv: 800,
    type: 'profession',
    sector: 'adventuring',
    description: 'a soldier without allegiance who works for money, typically a member of a company or guild.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'quartermaster': {
    sv: 3500,
    type: 'profession',
    sector: 'military',
    description: 'responsible for providing quarters, rations, clothing, and other supplies.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'royal Guard': {
    sv: 5000,
    type: 'profession',
    sector: 'military',
    description: 'responsible for the protection of a royal person.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'runner': {
    sv: 750,
    type: 'labourer',
    sector: 'military',
    description: 'carries information between lines in wartime.',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'sapper': {
    sv: 5000,
    type: 'labourer',
    sector: 'military',
    description: 'a soldier responsible for tasks such as building and repairing roads and bridges, laying and clearing mines, etc.',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'sergeant': {
    sv: 8000,
    type: 'profession',
    sector: 'military',
    description: 'an officer instructed with a protective duty, typically worth more than other officers.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'sergeant-at-arms': {
    sv: 5000,
    type: 'profession',
    sector: 'military',
    description: 'charged with keeping order during meetings and, if necessary, participates in battle.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'scout': {
    sv: 5000,
    type: 'profession',
    sector: 'military',
    description: "sent ahead of a main force so as to gather information about the enemy's position, strength, or movements.",
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'siege artillerist': {
    sv: 10000,
    type: 'profession',
    sector: 'military',
    description: 'works the artillery machines of an army.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'slave driver': {
    sv: 1500,
    type: 'profession',
    sector: 'agriculture',
    description: 'oversees and urges on slaves at work.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'special force soldier': {
    sv: 6000,
    type: 'profession',
    sector: 'military',
    description: 'carries out special operations.',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'spy': {
    sv: 4500,
    type: 'profession',
    sector: 'military',
    description: 'secretly collects and reports information on the activities, movements, and plans of an enemy or competitor.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'tactician': {
    sv: 7000,
    type: 'profession',
    sector: 'military',
    description: 'uses a carefully planned military strategy to achieve a specific end.',
    dailyWage: 400,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'tollkeeper': {
    sv: 2000,
    type: 'profession',
    sector: 'government and law',
    description: 'collects tolls at a bridge, road etc. where a charge is made.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'warden': {
    sv: 5000,
    type: 'profession',
    sector: 'government and law',
    description: 'responsible for the supervision of a particular place or thing or for ensuring that regulations associated with it are obeyed.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'warmage': {
    sv: 10000,
    type: 'profession',
    sector: 'military',
    description: 'a soldier skilled in destructive battle magic.',
    dailyWage: 700,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'abbot': {
    sv: 6000,
    type: 'profession',
    sector: 'religion',
    description: 'the head of an abbey of monks.',
    dailyWage: 700,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'acolyte': {
    sv: 3000,
    type: 'profession',
    sector: 'religion',
    description: 'assists the celebrant in a religious service or procession.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'almoner': {
    sv: 1500,
    type: 'profession',
    sector: 'religion',
    description: 'distributes money and food to poor people.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'archbishop': {
    sv: 5000,
    type: 'profession',
    sector: 'religion',
    description: 'responsible for an archdiocese, their surrounding district.',
    dailyWage: 900,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'bishop': {
    sv: 10000,
    type: 'profession',
    sector: 'religion',
    description: 'a senior member of the clergy, usually in charge of a diocese and empowered to confer holy orders.',
    dailyWage: 600,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'cantor': {
    sv: 2000,
    isHobby: true,
    type: 'profession',
    sector: 'religion',
    description: 'sings liturgical music and leads prayer in a synagogue.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'cardinal': {
    sv: 6500,
    type: 'profession',
    sector: 'religion',
    description: 'a leading dignitary of a church, nominated by the highest official.',
    dailyWage: 600,
    socialClass: 'nobility',
    socialClassRoll () { return 75 + dice(8, 6) }
  },

  'confessor': {
    sv: 4000,
    isHobby: true,
    type: 'profession',
    sector: 'religion',
    description: 'hears confessions and gives absolution and spiritual counsel.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'cultist': {
    sv: 2000,
    type: 'profession',
    sector: 'religion',
    description: 'a member of a cult who generally lives outside of conventional society and worships an unorthodox patron.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'cult leader': {
    sv: 6000,
    type: 'profession',
    sector: 'religion',
    description: 'the organizational leader of a cult who is occasionally also the founder.',
    dailyWage: 400,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'deacon': {
    sv: 800,
    type: 'profession',
    sector: 'religion',
    description: 'an ordained minister of an order ranking below that of priest.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'diviner': {
    sv: 9000,
    type: 'profession',
    sector: 'religion',
    description: 'seeks ultimate divination in order to further understand or meet godly substance.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'exorcist': {
    sv: 6000,
    type: 'profession',
    sector: 'religion',
    description: 'expels or attempts to expel evil spirits from a person or place.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'high priest': {
    sv: 15000,
    type: 'profession',
    sector: 'religion',
    description: 'the chief priest of a religion.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'inquisitor': {
    sv: 3000,
    type: 'profession',
    sector: 'religion',
    description: 'seeks to eliminate heresy and other things contrary to the doctrine or teachings of their faith.',
    dailyWage: 400,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'missionary': {
    sv: 2000,
    isHobby: true,
    type: 'profession',
    sector: 'religion',
    description: 'goes on a religious mission to promote their faith in a foreign place.',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'pardoner': {
    sv: 700,
    type: 'profession',
    sector: 'religion',
    description: 'raises money for religious works by soliciting offerings and granting indulgences.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'prophet': {
    sv: 8000,
    type: 'profession',
    sector: 'religion',
    description: 'regarded as an inspired teacher or proclaimer of the will of God.',
    dailyWage: 10000,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'sexton': {
    sv: 800,
    type: 'labourer',
    sector: 'religion',
    description: 'looks after a church and churchyard, sometimes acting as bell-ringer and formerly as a gravedigger.',
    dailyWage: 80,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'templar': {
    sv: 500,
    type: 'profession',
    sector: 'military',
    description: 'fights in a religious military order.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'abecedarian': {
    sv: 1500,
    type: 'profession',
    sector: 'science',
    description: 'teaches the illiterate.',
    dailyWage: 60,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'anthropologist': {
    sv: 5000,
    type: 'profession',
    sector: 'science',
    description: 'studies the customs, beliefs, and relationships of humanoids and intellectually and culturally advanced creatures.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'apprentice': {
    sv: 200,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'studies a trade under a skilled employer.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'archaeologist': {
    sv: 2000,
    type: 'profession',
    sector: 'science',
    description: 'studies humanoid history and prehistory through the excavation of sites and the analysis of artifacts and other physical remains.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'assayer': {
    sv: 2000,
    type: 'profession',
    sector: 'science',
    description: 'determiner of the proportions of metal in ore and the amount of copper, silver, gold, or platinum in coins.',
    dailyWage: 230,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },

  'astronomer': {
    sv: 5000,
    type: 'profession',
    sector: 'science',
    description: 'makes observations of celestial and scientific phenomena within the material plane.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'bloodletter': {
    sv: 3000,
    type: 'profession',
    sector: 'science',
    description: "surgically removes some of a patient's blood for therapeutic purposes.",
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'botanist': {
    sv: 2000,
    isHobby: true,
    type: 'profession',
    sector: 'science',
    description: 'an expert in or student of the scientific study of plants.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'chemist': {
    sv: 3500,
    isHobby: true,
    type: 'profession',
    sector: 'science',
    description: 'engaged in chemical research or experiments.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'dean': {
    sv: 8000,
    type: 'profession',
    sector: 'science',
    description: 'the head of a college or university.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'drakologist': {
    sv: 10000,
    type: 'profession',
    sector: 'science',
    description: 'studies or is an expert in the branch of zoology concerned with dragons.',
    dailyWage: 190,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'engineer': {
    sv: 5000,
    type: 'profession',
    sector: 'science',
    description: 'designer of a machine or structure.',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'entomologist': {
    sv: 6000,
    type: 'profession',
    sector: 'science',
    description: 'studies or is an expert in the branch of zoology concerned with insects.',
    dailyWage: 175,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'horologist': {
    sv: 8000,
    type: 'profession',
    sector: 'science',
    description: 'a scholar of time and entropy.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'mathematician': {
    sv: 5000,
    isHobby: true,
    type: 'profession',
    sector: 'science',
    description: 'a scholar of the abstract science of number, quantity, and space.',
    dailyWage: 230,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'optometrist': {
    sv: 3000,
    type: 'profession',
    sector: 'science',
    description: 'examines the eyes for visual defects and prescribes eyeglasses.',
    dailyWage: 210,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'scribe': {
    sv: 2000,
    type: 'profession',
    sector: 'business',
    description: 'copies out manuscripts.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'theologian': {
    sv: 6000,
    type: 'profession',
    sector: 'science',
    description: 'engages in the study of the nature of God and religious belief.',
    dailyWage: 130,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'tutor': {
    sv: 600,
    type: 'profession',
    sector: 'science',
    description: 'charged with the instruction and guidance of another.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'zoologist': {
    sv: 3500,
    type: 'profession',
    sector: 'science',
    description: 'an expert in or a student of the behavior, physiology, classification, and distribution of animals.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'boatman': {
    sv: 500,
    type: 'profession',
    sector: 'naval',
    description: 'mans a small seacraft.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'bosun': {
    sv: 1000,
    type: 'profession',
    sector: 'transportation',
    description: 'in charge of organizing the equipment and crew of a ship.',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'wagoner': {
    sv: 400,
    type: 'profession',
    sector: 'transportation',
    description: 'drives a horse-drawn wagon.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'cabin boy': {
    sv: 9000,
    type: 'profession',
    sector: 'naval',
    description: 'waits on the orders of a ships officers and passengers.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'charioteer': {
    sv: 300,
    type: 'profession',
    sector: 'military',
    description: 'drives a chariot.',
    dailyWage: 80,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'carter': {
    sv: 500,
    type: 'business',
    sector: 'transportation',
    description: 'transports goods by cart.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'ferryman': {
    sv: 2500,
    type: 'profession',
    sector: 'naval',
    description: 'operates a ferry.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'first mate': {
    sv: 1000,
    type: 'profession',
    sector: 'naval',
    description: 'the deck officer second in command to the master of a ship.',
    dailyWage: 230,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'helmsman': {
    sv: 2000,
    type: 'profession',
    sector: 'naval',
    description: 'steers a ship or boat.',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'navigator': {
    sv: 1500,
    type: 'profession',
    sector: 'naval',
    description: 'directs the route or course of a ship or other form of transportation, especially by using instruments and maps.',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'purser': {
    sv: 2500,
    type: 'profession',
    sector: 'naval',
    description: 'keeps the accounts of a ship, especially as the head steward on a passenger vessel.',
    dailyWage: 210,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'shipwright': {
    sv: 3500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'a carpenter skilled in ship construction and repair.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'adventurer': {
    sv: 2000,
    type: 'profession',
    sector: 'adventuring',
    description: 'wanders the world in search of knowledge, treasure, fame, glory or a multitude of additional wants and desires.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'beggar': {
    sv: 2500,
    type: 'profession',
    sector: 'outcast',
    description: 'lives by asking for money or food.',
    dailyWage: 10,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'monster hunter': {
    sv: 4500,
    isHobby: true,
    type: 'profession',
    sector: 'adventuring',
    description: 'takes on jobs to hunt down and kill or capture dangerous creatures.',
    dailyWage: 230,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'bounty hunter': {
    sv: 3500,
    isHobby: true,
    type: 'profession',
    sector: 'adventuring',
    description: 'pursues a criminal or fugitive for whom a reward is offered.',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'crossing sweeper': {
    sv: 6500,
    type: 'profession',
    sector: 'outcast',
    description: 'sweeps a path ahead of people crossing dirty urban streets in exchange for a gratuity.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'deserter': {
    sv: 3500,
    type: 'profession',
    sector: 'outcast',
    description: 'a member of the armed forces who has deserted.',
    dailyWage: 15,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'disgraced noble': {
    sv: 5000,
    type: 'profession',
    sector: 'outcast',
    description: 'a person of high birth who has since loss their respect, honor, or esteem in some or all noble circles.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'drunkard': {
    sv: 550,
    type: 'profession',
    sector: 'outcast',
    description: 'a person who is habitually drunk and considers themselves a professional in the task.',
    dailyWage: 25,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'dungeon delver': {
    sv: 5500,
    type: 'professional',
    sector: 'adventuring',
    description: 'navigates underground labyrinths in search of any treasure they may find.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'elder': {
    sv: 600,
    type: 'profession',
    sector: 'hospitality',
    description: 'a person of a greater age, especially one with a respected position in society.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'exile': {
    sv: 750,
    type: 'profession',
    sector: 'outcast',
    description: 'lives away from their native country, either from choice or compulsion.',
    dailyWage: 30,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'explorer': {
    sv: 3500,
    type: 'profession',
    sector: 'adventuring',
    description: 'explores unfamiliar areas in search of geographical or scientific information.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'ex-criminal': {
    sv: 1200,
    type: 'profession',
    sector: 'outcast',
    description: 'a person who has been convicted of a crime and has since served their sentence, or who has preemptively given up their life of crime.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'folk hero': {
    sv: 4000,
    type: 'profession',
    sector: 'adventuring',
    description: 'a celebrity who is greatly admired by many people of a particular kind or in a particular place.',
    dailyWage: 80,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'gambler': {
    sv: 800,
    isHobby: true,
    type: 'profession',
    sector: 'crime',
    description: 'bets money on sports, card games, or games of chance in the hope of a profit.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'grave robber': {
    sv: 100,
    type: 'profession',
    sector: 'crime',
    description: 'steals valuables from graves and tombs.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'heretic': {
    sv: 2500,
    type: 'profession',
    sector: 'outcast',
    description: 'differs in opinion from established religious dogma.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'housewife': {
    sv: 150,
    type: 'profession',
    sector: 'hospitality',
    description: 'cares for his or her family by managing household affairs and completing housework.',
    dailyWage: 40,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'prisoner': {
    sv: 350,
    type: 'profession',
    sector: 'crime',
    description: 'held in confinement as a punishment for crimes they have been convicted of.',
    dailyWage: 10,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'rag-and-Bone Man': {
    sv: 750,
    type: 'labourer',
    sector: 'business',
    description: 'collects unwanted household items and sells them to merchants.',
    dailyWage: 25,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'political dissident': {
    sv: 4500,
    type: 'labourer',
    sector: 'government and law',
    description: 'rises in opposition or armed resistance against an established government or ruler.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'refugee': {
    sv: 5000,
    type: 'profession',
    sector: 'outcast',
    description: 'leaves their home in order to escape war, persecution, or natural disaster.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 20 + dice(8, 6) }
  },
  'runaway Slave': {
    sv: 3000,
    type: 'labourer',
    sector: 'outcast',
    description: 'a slave who has left their master and traveled without authorization.',
    dailyWage: 100,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'squatter': {
    sv: 800,
    type: 'profession',
    sector: 'crime',
    description: 'unlawfully occupies an uninhabited building or unused land.',
    dailyWage: 15,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(4, 6) }
  },
  'vagabond': {
    sv: 1000,
    type: 'profession',
    sector: 'outcast',
    description: 'wanders from place to place without a permanent home or job.',
    dailyWage: 15,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  'urchin': {
    sv: 500,
    type: 'profession',
    sector: 'outcast',
    description: 'a child who lives or spends most of their time in the streets, occasionally working as a thief or pickpocket.',
    dailyWage: 5,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  }

}
