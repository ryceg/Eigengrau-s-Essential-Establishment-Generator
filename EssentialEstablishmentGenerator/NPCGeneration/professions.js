if (!setup.townData) { setup.townData = {} }
setup.townData.professions = {
    'barbarian': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'bard': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'cleric': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'druid': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'fighter': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'friar': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
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
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'paladin': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'sorcerer': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'warlock': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'wizard': {
       sv: 6500,
       type: 'dndClass',
       sector: 'adventuring',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'actor': {
       sv: 2500,
       type: 'profession',
       sector: 'arts',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'advocate': {
       sv: 3250,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'advisor': {
       sv: 780,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'animal handler': {
       sv: 250,
       type: 'labourer',
       sector: 'agriculture',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'apothecarist': {
       sv: 450,
       type: 'business',
       sector: 'science',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'architect': {
       sv: 550,
       type: 'profession',
       sector: 'construction',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'archivist': {
       sv: 2450,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 76 }
      },
    'armorer': {
       sv: 750,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return dice(9, 10) }
      },
    'astrologer': {
       sv: 950,
       type: '',
       sector: 'science',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 89 }
      },
    'baker': {
       sv: 800,
       type: 'business',
       sector: 'hospitality',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'banker': {
       sv: 2250,
       type: '',
       sector: 'business',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 89 }
      },
    'barber': {
       sv: 350,
       type: 'business',
       sector: 'hospitality',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(4, 6) }
      },
    'bartender': {
       sv: 450,
       type: 'business',
       sector: 'hospitality',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return dice(3, 30) }
      },
    'barmaid': {
       sv: 450,
       type: 'business',
       sector: 'hospitality',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return dice(3, 15) }
      },
    'blacksmith': {
       sv: 750,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return dice(2, 50) }
      },
    "blacksmith's assistant": {
       sv: 800,
       type: 'labourer',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return dice(2, 25) }
      },
    'bookseller': {
       sv: 6300,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 65 }
      },
    'brewer': {
       sv: 550,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'bricklayer': {
       sv: 650,
       type: 'labourer',
       sector: 'construction',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 10 + dice(4, 6) }
      },
    'brothel keeper': {
       sv: 850,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
     'buccaneer': {
      sv: 1350,
      type: '',
      sector: 'craftsmanship',
      description: '',
      socialClass: 'commoner',
      socialClassRoll: function () { return 55 }
     },
    'butcher': {
       sv: 1150,
       type: 'business',
       sector: 'hospitality',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'captain': {
       sv: 550,
       type: 'profession',
       sector: 'military',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'caravanner': {
       sv: 1450,
       type: 'labourer',
       sector: 'transportation',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'carpenter': {
       sv: 550,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'cartographer': {
       sv: 1950,
       type: '',
       sector: 'science',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 89 }
      },
    'chandler': {
       sv: 700,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'chef': {
       sv: 1850,
       type: 'labourer',
       sector: 'hospitality',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 }
      },
    'clergyman': {
       sv: 40,
       type: 'profession',
       sector: 'religion',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'clock maker': {
       sv: 4550,
       type: 'profession',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'cobbler': {
       sv: 1550,
       type: '',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 45 }
      },
    'cook': {
       sv: 450,
       type: 'labourer',
       sector: 'hospitality',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'cooper': {
       sv: 700,
       type: 'labourer',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'counselor': {
       sv: 1650,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'courtesan': {
       sv: 1950,
       type: '',
       sector: 'hospitality',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 89 }
      },
    'courtier': {
       sv: 1950,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'cowherd': {
       sv: 250,
       type: 'labourer',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'dancer': {
       sv: 2250,
       type: 'profession',
       sector: 'arts',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'diplomat': {
       sv: 3450,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'distiller': {
       sv: 450,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'diver': {
       sv: 3250,
       type: 'labourer',
       sector: 'agriculture',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'farmer': {
       sv: 150,
       type: 'labourer',
       sector: 'agriculture',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'fisherman': {
       sv: 170,
       type: 'labourer',
       sector: 'agriculture',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'fishmonger': {
       sv: 250,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'furrier': {
       sv: 250,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'gardener': {
       sv: 550,
       type: 'labourer',
       sector: 'agriculture',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'general': {
       sv: 2250,
       type: 'profession',
       sector: 'military',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'gladiator': {
       sv: 3250,
       type: '',
       sector: 'arts',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 89 }
      },
    'glovemaker': {
       sv: 2400,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'goldsmith': {
       sv: 6550,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'grocer': {
       sv: 450,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 27 }
      },
    'guardsman': {
       sv: 150,
       type: 'profession',
       sector: 'military',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'guildmaster': {
       sv: 4150,
       type: 'profession',
       sector: 'business',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'hatmaker': {
       sv: 950,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'healer': {
       sv: 950,
       type: 'profession',
       sector: 'magic',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'herald': {
       sv: 550,
       type: '',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 48 }
      },
    'herbalist': {
       sv: 850,
       type: 'business',
       sector: 'science',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 60 + dice(4, 6) }
      },
    'hermit': {
       sv: 950,
       type: 'profession',
       sector: 'outcast',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'historian': {
       sv: 4150,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'hunter': {
       sv: 250,
       type: 'labourer',
       sector: 'self employed',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'ice seller': {
       sv: 1950,
       type: 'labourer',
       sector: 'agriculture',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 24 }
      },
    'innkeeper': {
       sv: 750,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'inventor': {
       sv: 2250,
       type: 'profession',
       sector: 'business',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'jailer': {
       sv: 1250,
       type: 'labourer',
       sector: 'military',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'jester': {
       sv: 2250,
       type: 'profession',
       sector: 'arts',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 42 }
      },
    'jeweler': {
       sv: 400,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'judge': {
       sv: 850,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'knight': {
       sv: 1150,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'lady': {
       sv: 1550,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'leatherworker': {
       sv: 750,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'librarian': {
       sv: 3150,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'linguist': {
       sv: 5150,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'locksmith': {
       sv: 1900,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'lord': {
       sv: 1150,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'lumberjack': {
       sv: 350,
       type: 'labourer',
       sector: 'agriculture',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'maid-servant': {
       sv: 250,
       type: 'labourer',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'mason': {
       sv: 500,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'masseur': {
       sv: 1550,
       type: 'profession',
       sector: 'business',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'merchant': {
       sv: 650,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'messenger': {
       sv: 1250,
       type: 'labourer',
       sector: 'communications',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'midwife': {
       sv: 650,
       type: 'labourer',
       sector: 'science',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'miller': {
       sv: 650,
       type: 'business',
       sector: 'agriculture',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'miner': {
       sv: 550,
       type: 'labourer',
       sector: 'agriculture',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'minister': {
       sv: 950,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'minstrel': {
       sv: 1450,
       type: 'profession',
       sector: 'arts',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'monk': {
       sv: 1450,
       type: 'profession',
       sector: 'religion',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 5 + dice(8, 6) }
      },
    'mortician': {
       sv: 650,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'necromancer': {
       sv: 6150,
       type: 'profession',
       sector: 'magic',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'noble': {
       sv: 3150,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'nobleman': {
       sv: 3150,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'nun': {
       sv: 2150,
       type: 'profession',
       sector: 'religion',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'nurse': {
       sv: 1150,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'officer': {
       sv: 1150,
       type: 'profession',
       sector: 'military',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'painter': {
       sv: 1500,
       type: 'business',
       sector: 'arts',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'patissier': {
       sv: 1500,
       type: 'business',
       sector: 'hospitality',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'perfumer': {
       sv: 3150,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'philosopher': {
       sv: 7150,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'physician': {
       sv: 4150,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'pilgrim': {
       sv: 5150,
       type: 'labourer',
       sector: 'outcast',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'politician': {
       sv: 4000,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'potter': {
       sv: 1150,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'priest': {
       sv: 750,
       type: 'profession',
       sector: 'religion',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'privateer': {
       sv: 1150,
       type: 'labourer',
       sector: 'military',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 }
      },
    'professor': {
       sv: 3150,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'roofer': {
       sv: 1800,
       type: 'labourer',
       sector: 'construction',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'ropemaker': {
       sv: 1850,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'rugmaker': {
       sv: 1850,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'saddler': {
       sv: 1000,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'sailor': {
       sv: 150,
       type: 'labourer',
       sector: 'transportation',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'scabbard maker': {
       sv: 875,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'sculptor': {
       sv: 250,
       type: 'business',
       sector: 'arts',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'scavenger': {
       sv: 350,
       type: 'labourer',
       sector: 'unemployed',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 22 }
      },
    'scholar': {
       sv: 2250,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'seamstress': {
       sv: 450,
       type: 'labourer',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'seer': {
       sv: 350,
       type: 'profession',
       sector: 'magic',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'servant': {
       sv: 350,
       type: 'labourer',
       sector: 'hospitality',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'shaman': {
       sv: 750,
       type: 'profession',
       sector: 'magic',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'shepherd': {
       sv: 150,
       type: 'labourer',
       sector: 'agriculture',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    "ship's captain": {
       sv: 950,
       type: 'profession',
       sector: 'military',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'shoemaker': {
       sv: 150,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'silversmith': {
       sv: 1250,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'slave': {
       sv: 150,
       type: 'labourer',
       sector: 'outcast',
       description: '',
       socialClass: 'indentured servitude',
       socialClassRoll: function () { return 40 }
      },
    'slaver': {
       sv: 650,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'smith': {
       sv: 750,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'soldier': {
       sv: 1000,
       type: 'profession',
       sector: 'military',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'spice merchant': {
       sv: 1500,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'squire': {
       sv: 950,
       type: 'profession',
       sector: 'military',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'stablehand': {
       sv: 550,
       type: 'labourer',
       sector: 'agriculture',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'stevedore': {
       sv: 550,
       type: 'labourer',
       sector: 'labour',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'stonemason': {
       sv: 750,
       type: 'business',
       sector: 'construction',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'steward': {
       sv: 950,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'street seller': {
       sv: 550,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'street sweeper': {
       sv: 450,
       type: 'labourer',
       sector: 'labour',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'student': {
       sv: 3150,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'surgeon': {
       sv: 4150,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'surveyor': {
       sv: 1150,
       type: 'profession',
       sector: 'business',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'tailor': {
       sv: 250,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'tanner': {
       sv: 200,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'tavernkeeper': {
       sv: 450,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'tax collector': {
       sv: 1850,
       type: 'profession',
       sector: 'government and law',
       description: '',
       socialClass: 'nobility',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'teacher': {
       sv: 1450,
       type: 'profession',
       sector: 'science',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'thatcher': {
       sv: 350,
       type: 'labourer',
       sector: 'construction',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'thief': {
       sv: 850,
       type: 'profession',
       sector: 'crime',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'torturer': {
       sv: 1850,
       type: 'profession',
       sector: 'military',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'town crier': {
       sv: 750,
       type: 'labourer',
       sector: 'communications',
       description: '',
       socialClass: 'paupery',
       socialClassRoll: function () { return 40 }
      },
    'toymaker': {
       sv: 2150,
       type: 'profession',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'vendor': {
       sv: 1150,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'veterinarian': {
       sv: 1250,
       type: 'profession',
       sector: 'agriculture',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'vintner': {
       sv: 850,
       type: 'profession',
       sector: 'agriculture',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
    'weaver': {
       sv: 600,
       type: 'labourer',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'wetnurse': {
       sv: 350,
       type: 'labourer',
       sector: 'labour',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 }
      },
    'woodcarver': {
       sv: 2450,
       type: 'business',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'wood seller': {
       sv: 2150,
       type: 'business',
       sector: 'business',
       description: '',
       socialClass: 'peasantry',
       socialClassRoll: function () { return 40 + dice(4, 6) }
      },
    'wrestler': {
       sv: 6150,
       type: 'labourer',
       sector: 'craftsmanship',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 40 }
      },
    'writer': {
       sv: 7150,
       type: 'profession',
       sector: 'arts',
       description: '',
       socialClass: 'commoner',
       socialClassRoll: function () { return 50 + dice(8, 6) }
      },
'Animal/Monster Handler': {
	sv: ,
	type: '',
	sector: '',
	description: 'responsible for the safe keeping, dietary care, and exercise of animals or monsters.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Arborist': {
	sv: ,
	type: '',
	sector: '',
	description: 'maintains and cares for trees, often by surgically removing dying limbs.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Baler': {
	sv: ,
	type: '',
	sector: '',
	description: 'bales hay, or in the mills, wool and cotton goods.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Beekeeper': {
	sv: ,
	type: '',
	sector: '',
	description: 'owns and breeds bees, especially for their honey.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Breeder': {
	sv: ,
	type: '',
	sector: '',
	description: 'breeds livestock, animals, or monsters.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cowherd': {
	sv: ,
	type: '',
	sector: '',
	description: 'supervises grazing cattle.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Dairyboy/Dairymaid': {
	sv: ,
	type: '',
	sector: '',
	description: 'milks cows and makes cheese and butter.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Falconer': {
	sv: ,
	type: '',
	sector: '',
	description: 'keeps, trains, and hunts with falcons, hawks, or other birds of prey.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Farmer': {
	sv: ,
	type: '',
	sector: '',
	description: 'operates a farm or cultivates land.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Fisher': {
	sv: ,
	type: '',
	sector: '',
	description: 'catches fish.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Florist': {
	sv: ,
	type: '',
	sector: '',
	description: 'grows and arranges plants and cut flowers.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Forager': {
	sv: ,
	type: '',
	sector: '',
	description: 'searches for food in the wild.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Forester': {
	sv: ,
	type: '',
	sector: '',
	description: 'supervises the wellbeing of a forest.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Fowler': {
	sv: ,
	type: '',
	sector: '',
	description: 'catches or ensnares birds.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Gamekeeper': {
	sv: ,
	type: '',
	sector: '',
	description: 'breeds and protects game, typically for a large estate.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Groom': {
	sv: ,
	type: '',
	sector: '',
	description: 'cleans and brushes the coats horses, dogs, or other animals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Herder': {
	sv: ,
	type: '',
	sector: '',
	description: 'supervises a herd of livestock or makes a living from keeping livestock, especially in open country.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Horse Trainer': {
	sv: ,
	type: '',
	sector: '',
	description: 'tends to horses and teaches them different disciplines.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Hunter': {
	sv: ,
	type: '',
	sector: '',
	description: 'hunts game or other wild animals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lumberjack': {
	sv: ,
	type: '',
	sector: '',
	description: 'fells trees, cuts them into logs, and transports them to a sawmill.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Master-of-Horses': {
	sv: ,
	type: '',
	sector: '',
	description: 'supervises and commands all horses under a jurisdiction.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Master-of-Hounds': {
	sv: ,
	type: '',
	sector: '',
	description: 'maintains a pack of hounds and their associated staff, equipment, and hunting arrangements.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Miller': {
	sv: ,
	type: '',
	sector: '',
	description: 'owns or works in a grain mill.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Miner': {
	sv: ,
	type: '',
	sector: '',
	description: 'works underground in mines in order to obtain minerals such as coal, diamonds, or gold.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Pathfinder': {
	sv: ,
	type: '',
	sector: '',
	description: 'scouts ahead and discovers a path or way for others.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Plumer': {
	sv: ,
	type: '',
	sector: '',
	description: 'hunts birds for their plumes.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Prospector': {
	sv: ,
	type: '',
	sector: '',
	description: 'searches for mineral deposits, especially by drilling and excavation.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ranger': {
	sv: ,
	type: '',
	sector: '',
	description: 'wanders or ranges over a particular area or domain.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Renderer': {
	sv: ,
	type: '',
	sector: '',
	description: 'converts waste animal tissue into usable materials.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Shepherd': {
	sv: ,
	type: '',
	sector: '',
	description: 'herds, tends, and guards sheep.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Stablehand': {
	sv: ,
	type: '',
	sector: '',
	description: 'works in a stable.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Thresher': {
	sv: ,
	type: '',
	sector: '',
	description: 'separates grain from the plants by beating.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Trapper': {
	sv: ,
	type: '',
	sector: '',
	description: 'traps wild animals, especially for their fur.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Vintner': {
	sv: ,
	type: '',
	sector: '',
	description: 'engages in winemaking, especially with monitoring and harvesting the grapes.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Zookeeper': {
	sv: ,
	type: '',
	sector: '',
	description: 'maintains and cares for animals or monsters in a zoo.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Architect': {
	sv: ,
	type: '',
	sector: '',
	description: 'designs buildings or landscapes and in many cases supervises their construction.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Brickmaker': {
	sv: ,
	type: '',
	sector: '',
	description: 'crafts bricks from clay, stone, or other materials.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Brickmason': {
	sv: ,
	type: '',
	sector: '',
	description: 'builds with mineral products such as stones, bricks, cinder blocks, or tiles, usually with the use of mortar as a bonding agent.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Carpenter': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs wooden objects and structures.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Construction Worker': {
	sv: ,
	type: '',
	sector: '',
	description: 'a laborer in the physical construction of a built environment and its infrastructure.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'General Contractor': {
	sv: ,
	type: '',
	sector: '',
	description: 'supervises a construction site, manages its vendors and trades, and communicates information to all involved parties.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Glazier': {
	sv: ,
	type: '',
	sector: '',
	description: 'fits glass into windows and doors.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Plasterer': {
	sv: ,
	type: '',
	sector: '',
	description: 'applies plaster to walls, ceilings, or other surfaces.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Roadlayer/Streetlayer': {
	sv: ,
	type: '',
	sector: '',
	description: 'paves roads or streets.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Roofer/Thatcher': {
	sv: ,
	type: '',
	sector: '',
	description: 'builds and repairs roofs.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Stonemason': {
	sv: ,
	type: '',
	sector: '',
	description: 'cuts and prepares stone for use in construction.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Acrobat': {
	sv: ,
	type: '',
	sector: '',
	description: 'performs spectacular gymnastic feats.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Actor': {
	sv: ,
	type: '',
	sector: '',
	description: 'impersonates characters, typically on stage in a theatrical production.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Aerialist/Trapezist': {
	sv: ,
	type: '',
	sector: '',
	description: 'performs acrobatics high above the ground on a tightrope or trapeze.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Arranger': {
	sv: ,
	type: '',
	sector: '',
	description: 'adapts a musical composition for performance.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Athlete': {
	sv: ,
	type: '',
	sector: '',
	description: 'proficient in sports and other forms of physical exercise.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Busker/Street Musician': {
	sv: ,
	type: '',
	sector: '',
	description: 'performs in a public place, often for money.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Celebrity': {
	sv: ,
	type: '',
	sector: '',
	description: 'a famous person.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chef': {
	sv: ,
	type: '',
	sector: '',
	description: 'a professional cook trained in the culinary arts.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Choirmaster': {
	sv: ,
	type: '',
	sector: '',
	description: 'trains a choir and orchestrates their singing when they perform.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Clown': {
	sv: ,
	type: '',
	sector: '',
	description: 'comic entertainer who wears a traditional costume and exaggerated makeup.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Comedian': {
	sv: ,
	type: '',
	sector: '',
	description: 'entertainer whose act is designed to make an audience laugh.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Conductor': {
	sv: ,
	type: '',
	sector: '',
	description: 'directs the performance of an orchestra.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Contortionist': {
	sv: ,
	type: '',
	sector: '',
	description: 'twists and bends their body into strange and unnatural positions.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Curator': {
	sv: ,
	type: '',
	sector: '',
	description: 'keeper and custodian of a museum or other collections of precious items.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Costumer': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes theatrical costumes.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Dancer': {
	sv: ,
	type: '',
	sector: '',
	description: 'moves their body rhythmically with or without musical accompaniment.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Equilibrist': {
	sv: ,
	type: '',
	sector: '',
	description: 'performs balancing feats.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Fashion Designer': {
	sv: ,
	type: '',
	sector: '',
	description: 'applies design, aesthetics and natural beauty to garments and their accessories.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Gladiator': {
	sv: ,
	type: '',
	sector: '',
	description: 'fights against other people, wild animals, or monsters in an arena.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Glasspainter': {
	sv: ,
	type: '',
	sector: '',
	description: 'produces colorful designs on or in glass.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Jester': {
	sv: ,
	type: '',
	sector: '',
	description: 'professional joker or '
	socialClass: '',
	socialClassRoll: function () { return }
	},“fool” at court, typically wearing a cap with bells on it and carrying a mock scepter.
'Juggler': {
	sv: ,
	type: '',
	sector: '',
	description: 'keeps several objects in motion in the air at the same time by alternately tossing and catching them.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Illuminator': {
	sv: ,
	type: '',
	sector: '',
	description: 'paints and calligraphs to adorn or enlighten scrolls and manuscripts.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Limner': {
	sv: ,
	type: '',
	sector: '',
	description: 'paints portraits or miniatures.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Makeup Artist': {
	sv: ,
	type: '',
	sector: '',
	description: 'applies cosmetics to models, actors, nobles, etc.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Minstrel': {
	sv: ,
	type: '',
	sector: '',
	description: 'recites lyric or heroic poetry for nobility.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Model': {
	sv: ,
	type: '',
	sector: '',
	description: 'poses as a subject for an artist, fashion designer, or sculptor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Musician': {
	sv: ,
	type: '',
	sector: '',
	description: 'plays a musical instrument.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Painter': {
	sv: ,
	type: '',
	sector: '',
	description: 'paints pictures.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Playwright': {
	sv: ,
	type: '',
	sector: '',
	description: 'writes plays or musicals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Poet': {
	sv: ,
	type: '',
	sector: '',
	description: 'writes ballads, epics, sonnets, or other forms of poetry.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ringmaster/Ringmistress': {
	sv: ,
	type: '',
	sector: '',
	description: 'master of ceremony who introduces the circus acts to the audience.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ropewalker': {
	sv: ,
	type: '',
	sector: '',
	description: 'walks along a tightrope to entertain others.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sculptor': {
	sv: ,
	type: '',
	sector: '',
	description: 'crafts art by carving or casting blocks of marble, stones, or other hardened minerals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Singer/Soprano': {
	sv: ,
	type: '',
	sector: '',
	description: 'sings with or without instrumental accompaniment.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Skald': {
	sv: ,
	type: '',
	sector: '',
	description: 'composes and recites poems honoring heroes and their deeds.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Stage Magician': {
	sv: ,
	type: '',
	sector: '',
	description: 'deceives their audience with seemingly impossible feats while using only natural means.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Stuntman/Stuntwoman': {
	sv: ,
	type: '',
	sector: '',
	description: 'performs dangerous stunts for their audience.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tattooist': {
	sv: ,
	type: '',
	sector: '',
	description: 'illustrates the skin with indelible patterns, pictures, legends, etc.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Theater Director': {
	sv: ,
	type: '',
	sector: '',
	description: 'supervises and orchestrates the mounting of a theatre production by unifying various endeavors and aspects of production.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Wrestler': {
	sv: ,
	type: '',
	sector: '',
	description: 'performs in matches involving grappling and grappling-type techniques.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Writer': {
	sv: ,
	type: '',
	sector: '',
	description: 'commits his or her thoughts, ideas, etc., into written language.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Accountant': {
	sv: ,
	type: '',
	sector: '',
	description: 'keeps and inspects financial accounts.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Actuary': {
	sv: ,
	type: '',
	sector: '',
	description: 'compiles and analyzes statistics and uses them to calculate risk.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Animal Collector/Monster Collector': {
	sv: ,
	type: '',
	sector: '',
	description: 'collects and deals in rare and exotic animals and monsters.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Business Owner': {
	sv: ,
	type: '',
	sector: '',
	description: 'owns a business entity in an attempt to profit from its successful operations.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Debt Collector': {
	sv: ,
	type: '',
	sector: '',
	description: 'recovers money owed on delinquent accounts.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Draper': {
	sv: ,
	type: '',
	sector: '',
	description: 'an alcohol merchant.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Appraiser': {
	sv: ,
	type: '',
	sector: '',
	description: 'assesses the monetary value of something.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Auctioneer': {
	sv: ,
	type: '',
	sector: '',
	description: 'conducts auctions by accepting bids and declaring goods sold.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Banker': {
	sv: ,
	type: '',
	sector: '',
	description: 'an officer or owner of a bank or group of banks.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bagniokeeper': {
	sv: ,
	type: '',
	sector: '',
	description: 'owner of a bath house or brothel.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bookkeeper': {
	sv: ,
	type: '',
	sector: '',
	description: 'keeps records of financial affairs.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chandler': {
	sv: ,
	type: '',
	sector: '',
	description: 'deals in provisions and supplies.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Collector': {
	sv: ,
	type: '',
	sector: '',
	description: 'collects things of a specified type, professionally or as a hobby.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Entrepreneur': {
	sv: ,
	type: '',
	sector: '',
	description: 'organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Grocer': {
	sv: ,
	type: '',
	sector: '',
	description: 'a food merchant.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Guild Master': {
	sv: ,
	type: '',
	sector: '',
	description: 'leads an economically independent producer '
	socialClass: '',
	socialClassRoll: function () { return }
	},(a “guild,” an association of craftsmen or merchants that often holds considerable bureaucratic power).
'Innkeeper': {
	sv: ,
	type: '',
	sector: '',
	description: 'owns and runs an inn.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Land Surveyor': {
	sv: ,
	type: '',
	sector: '',
	description: 'establishes maps and boundaries for ownership or other purposes required by government or civil law.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Merchant': {
	sv: ,
	type: '',
	sector: '',
	description: 'sells and trades goods.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Moneychanger': {
	sv: ,
	type: '',
	sector: '',
	description: 'exchanges one currency for another.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Moneylender': {
	sv: ,
	type: '',
	sector: '',
	description: 'lends money to others who pay interest.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Peddler': {
	sv: ,
	type: '',
	sector: '',
	description: 'travels from place to place selling assorted items.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Pimp/Madame': {
	sv: ,
	type: '',
	sector: '',
	description: 'controls prostitutes and arranges clients for them, taking part of their earnings in return.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Plantation Owner': {
	sv: ,
	type: '',
	sector: '',
	description: 'an owner of an estate on which crops are cultivated by resident labor, typically slave labor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Speculator': {
	sv: ,
	type: '',
	sector: '',
	description: 'invests in stocks, property, or other ventures in the hope of making a profit.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Thriftdealer': {
	sv: ,
	type: '',
	sector: '',
	description: 'deals in secondhand items.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tradesman': {
	sv: ,
	type: '',
	sector: '',
	description: 'deals exclusively in bartering.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Vendor': {
	sv: ,
	type: '',
	sector: '',
	description: 'deals items in the street.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Billboardposter': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person who puts up notices, signs and advertisements.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Courier': {
	sv: ,
	type: '',
	sector: '',
	description: 'transports packages and documents.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Herald': {
	sv: ,
	type: '',
	sector: '',
	description: ' a messenger who carries important news.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Interpreter': {
	sv: ,
	type: '',
	sector: '',
	description: ' interprets language and its meaning, especially within ancient manuscripts.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Linguist': {
	sv: ,
	type: '',
	sector: '',
	description: ' studies the essence of communication, including the units, nature, structure, and modification of language.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Messenger': {
	sv: ,
	type: '',
	sector: '',
	description: ' carries messages between recipients.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Town Crier': {
	sv: ,
	type: '',
	sector: '',
	description: ' makes public announcements in the streets or marketplace.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Translator': {
	sv: ,
	type: '',
	sector: '',
	description: ' translates between languages.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Accoutrementer/Coinsmith': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes currency for the government.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Armorer': {
	sv: ,
	type: '',
	sector: '',
	description: 'specializes in making and repairing armor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Blacksmith': {
	sv: ,
	type: '',
	sector: '',
	description: 'forges and repairs things in metal, including weapons, armor, utensils, etc.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bladesmith': {
	sv: ,
	type: '',
	sector: '',
	description: 'specializes in making and repairing bladed weapons, especially swords and daggers.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bookbinder': {
	sv: ,
	type: '',
	sector: '',
	description: 'binds books and wraps scrolls.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bottler': {
	sv: ,
	type: '',
	sector: '',
	description: 'bottles drinks and other liquids.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bowyer': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes bows and crossbows.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Brewer': {
	sv: ,
	type: '',
	sector: '',
	description: 'brews ale.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Broom Maker': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes brooms and brushes.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Candlemaker': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes candles and wax from honey and tallow.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cartwright': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs carts and wagons.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cobbler': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs footwear.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cooper/Hooper': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs casks and barrels.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cutler': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes cutlery.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Dyer': {
	sv: ,
	type: '',
	sector: '',
	description: 'dyes cloth and other materials.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Embroiderer': {
	sv: ,
	type: '',
	sector: '',
	description: 'ornaments with needlework.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Engraver': {
	sv: ,
	type: '',
	sector: '',
	description: 'incises a design onto a hard surface by cutting grooves into it.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Farrier': {
	sv: ,
	type: '',
	sector: '',
	description: 'trims and shoes horses'
	socialClass: '',
	socialClassRoll: function () { return }
	},' hooves.
'Fletcher': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs arrows.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Furniture Artisan': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs furniture.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Furrier': {
	sv: ,
	type: '',
	sector: '',
	description: 'prepares furs for adornment.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Glassworker': {
	sv: ,
	type: '',
	sector: '',
	description: 'blows glass planes and items.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Glovemaker': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs gloves.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Goldsmith/Silversmith': {
	sv: ,
	type: '',
	sector: '',
	description: 'a smith who specializes in precious metals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Hatter/Milliner': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs headwear.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Instrument Maker': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs musical instruments.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lapidary': {
	sv: ,
	type: '',
	sector: '',
	description: 'turns stone, minerals, or gemstones into decorative items such as cabochons, engraved gems, and faceted designs.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Leatherworker': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes items from leather such as pouches, scabbards, straps, etc.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Jeweler': {
	sv: ,
	type: '',
	sector: '',
	description: 'designs, makes, and repairs necklaces, bracelets, watches, etc., often containing jewels.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Locksmith': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs locks.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Luthier': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs stringed instruments.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Mercer': {
	sv: ,
	type: '',
	sector: '',
	description: 'weaves textile fabrics, especially silks, velvets, and other fine materials.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Optician': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs eyeglasses.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Potter': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes pots, bowls, plates, etc., out of clay.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Printer': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person who applies pressure to an inked surface resting upon a print medium '
	socialClass: '',
	socialClassRoll: function () { return }
	},(such as paper or cloth), thereby transferring the ink to manufacture a text.
'Restorer': {
	sv: ,
	type: '',
	sector: '',
	description: 'repairs or renovates a work of art so as to return it to its original condition.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ropemaker': {
	sv: ,
	type: '',
	sector: '',
	description: 'braids rope.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Rugmaker': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs rugs by braiding, hooking, weaving, etc.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Saddler': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs saddlery.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Seamstress/Tailor': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes, alters, repairs, as well as occasionally designing garments.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Soaper': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes soap from accumulated mutton fat, wood ash, and natural soda.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tanner': {
	sv: ,
	type: '',
	sector: '',
	description: 'treats the skins and hides of animals to produce leather.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Taxidermist': {
	sv: ,
	type: '',
	sector: '',
	description: 'prepares, stuffs, and mounts the skins of animals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tinker': {
	sv: ,
	type: '',
	sector: '',
	description: 'travels from place to place mending utensils.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Toymaker': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs toys.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Watchmaker': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs watches and clocks.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Weaponsmith': {
	sv: ,
	type: '',
	sector: '',
	description: 'specializes in making and repairing weapons.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Weaver': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes fabric by weaving fiber together.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Wheelwright': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes and repairs wooden wheels.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Whittler/Woodcarver': {
	sv: ,
	type: '',
	sector: '',
	description: 'fashions wood into various shapes.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Assassin': {
	sv: ,
	type: '',
	sector: '',
	description: 'murders through stealth for reasons pertaining to money, politics, or religion.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bandit': {
	sv: ,
	type: '',
	sector: '',
	description: 'a robber or outlaw belonging to a gang and typically operating in an isolated or lawless area.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Burglar': {
	sv: ,
	type: '',
	sector: '',
	description: 'illegally enters buildings and steals things.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Charlatan/Conman': {
	sv: ,
	type: '',
	sector: '',
	description: 'tricks people by gaining their trust and persuading them to believe something that is not true in order to benefit from the encounter.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cockfighter/Gamefighter': {
	sv: ,
	type: '',
	sector: '',
	description: 'engages in arena matches in which animals or monsters are pitted against one another, typically to the death.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Crime Boss': {
	sv: ,
	type: '',
	sector: '',
	description: 'controls and supervises a criminal organization.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cutpurse': {
	sv: ,
	type: '',
	sector: '',
	description: 'a pickpocket or thief.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Drug Dealer': {
	sv: ,
	type: '',
	sector: '',
	description: 'dealer of illegal substances.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Drug Lord': {
	sv: ,
	type: '',
	sector: '',
	description: 'controls a network of persons involved in the illegal drugs trade and transactions.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Extortioner': {
	sv: ,
	type: '',
	sector: '',
	description: 'extorts money from someone by threatening to expose embarrassing information about them.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Fence': {
	sv: ,
	type: '',
	sector: '',
	description: 'deals in stolen goods.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Forger': {
	sv: ,
	type: '',
	sector: '',
	description: 'produces fraudulent copies or imitations.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Fugitive': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person who has escaped from a place or is in hiding, especially to avoid arrest or persecution.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Highwayman': {
	sv: ,
	type: '',
	sector: '',
	description: 'robs travelers on a road.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Kidnapper': {
	sv: ,
	type: '',
	sector: '',
	description: 'abducts people and holds them captive, typically to obtain a ransom.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Loan Shark': {
	sv: ,
	type: '',
	sector: '',
	description: 'charges extremely high rates of interest for moneylending, typically under illegal conditions.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Pirate': {
	sv: ,
	type: '',
	sector: '',
	description: 'attacks and robs ships at sea.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Poacher': {
	sv: ,
	type: '',
	sector: '',
	description: 'hunts illegal game.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Poisoner': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes poisons to harm or kill.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Raider/Marauder': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes sudden, unprompted attacks against defenseless or near-defenseless settlements.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Smuggler': {
	sv: ,
	type: '',
	sector: '',
	description: 'manages the import or export of goods secretly, in violation of the law, especially without payment of legal duty.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Thief': {
	sv: ,
	type: '',
	sector: '',
	description: 'steals people'
	socialClass: '',
	socialClassRoll: function () { return }
	},’s property, especially by stealth and without using force or violence.
'Affeeror': {
	sv: ,
	type: '',
	sector: '',
	description: 'determines the values of fines and amercements.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Agister': {
	sv: ,
	type: '',
	sector: '',
	description: 'affords pasture to the livestock of others for a price.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Alderman': {
	sv: ,
	type: '',
	sector: '',
	description: 'a civic dignitary in the local council ranked below the mayor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Alienist': {
	sv: ,
	type: '',
	sector: '',
	description: 'assesses the competence of a defendant in a court of law.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Assay Master': {
	sv: ,
	type: '',
	sector: '',
	description: 'oversees the testing of currency.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Baron/Baroness': {
	sv: ,
	type: '',
	sector: '',
	description: 'a member of the lowest order of the British nobility.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chancellor': {
	sv: ,
	type: '',
	sector: '',
	description: 'a senior state or legal official.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chief': {
	sv: ,
	type: '',
	sector: '',
	description: 'leads or rules a people or clan.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Conservationist': {
	sv: ,
	type: '',
	sector: '',
	description: 'advocates for the protection and preservation of the environment and wildlife.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Count/Earl/Countess': {
	sv: ,
	type: '',
	sector: '',
	description: 'a nobleperson ranking above a viscount and below a marquess.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Courtier': {
	sv: ,
	type: '',
	sector: '',
	description: 'attends court as a companion or adviser to the king or queen.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Diplomat': {
	sv: ,
	type: '',
	sector: '',
	description: 'an official representing a country abroad.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Duke/Duchess': {
	sv: ,
	type: '',
	sector: '',
	description: 'rules over a duchy and is of the highest rank below the monarch.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Emperor/Empress': {
	sv: ,
	type: '',
	sector: '',
	description: 'the supreme sovereign ruler of an extensive group of states or countries under a single authority.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Judge': {
	sv: ,
	type: '',
	sector: '',
	description: 'decides cases in a court of law.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'King/Queen': {
	sv: ,
	type: '',
	sector: '',
	description: 'the ruler of an independent state and its people.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Knight': {
	sv: ,
	type: '',
	sector: '',
	description: 'serves his or her sovereign after being bestowed a rank of royal honor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lady-in-Waiting': {
	sv: ,
	type: '',
	sector: '',
	description: 'attends a queen, princess, or other high-ranking feminine nobleperson.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lawyer/Advocate': {
	sv: ,
	type: '',
	sector: '',
	description: 'practices or studies law, typically an attorney or a counselor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Marquess/Marchioness': {
	sv: ,
	type: '',
	sector: '',
	description: 'a nobleperson ranking above a count and below a duke.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Master-of-Coin': {
	sv: ,
	type: '',
	sector: '',
	description: 'supervises the royal treasury, advises the monarch on financial matters, and is responsible for raising money through taxation.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Master-of-the-Revels': {
	sv: ,
	type: '',
	sector: '',
	description: 'responsible for overseeing royal festivities.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Minister': {
	sv: ,
	type: '',
	sector: '',
	description: 'assists with the administration of business.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Noble/Aristocrat': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person belonging to a class with high social or political status.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Notary': {
	sv: ,
	type: '',
	sector: '',
	description: 'performs certain legal formalities, especially to draw up or certify contracts, deeds, and other documents for use in other jurisdictions.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Orator/Spokesman': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes statements on behalf of a group or individual nobleperson.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Page': {
	sv: ,
	type: '',
	sector: '',
	description: 'a young attendant to a person of noble rank.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Prince/Princess': {
	sv: ,
	type: '',
	sector: '',
	description: 'the direct descendant of a monarch.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Senator': {
	sv: ,
	type: '',
	sector: '',
	description: 'partakes in governmental decision-making after being elected.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sheriff': {
	sv: ,
	type: '',
	sector: '',
	description: 'the chief executive officer in a county, having various administrative and judicial functions.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Spymaster': {
	sv: ,
	type: '',
	sector: '',
	description: 'directs a network of subordinate espionage agents for a state, kingdom, or empire.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Steward': {
	sv: ,
	type: '',
	sector: '',
	description: 'supervises both the estate and household of his lord or lady while they are away.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Squire': {
	sv: ,
	type: '',
	sector: '',
	description: 'acts as an attendant to a knight before attempting to become a knight themselves.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tax Collector': {
	sv: ,
	type: '',
	sector: '',
	description: 'collects unpaid taxes from people, guilds, or businesses.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Viscount/Viscountess': {
	sv: ,
	type: '',
	sector: '',
	description: 'a nobleperson ranking above a baron and below a count.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ward': {
	sv: ,
	type: '',
	sector: '',
	description: 'a member of a noble house who has been taken in by another noble family to be raised for a time.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Acater': {
	sv: ,
	type: '',
	sector: '',
	description: 'provides and prepares foodstuffs or delicacies for events such as festivals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tunner': {
	sv: ,
	type: '',
	sector: '',
	description: 'fills casks in a brewery or winery.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Baker': {
	sv: ,
	type: '',
	sector: '',
	description: 'bakes bread and cakes.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Barber': {
	sv: ,
	type: '',
	sector: '',
	description: 'cuts hair and shaves or trims beards.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Barkeep': {
	sv: ,
	type: '',
	sector: '',
	description: 'works and serves drinks in a bar.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Barmaid/Barboy': {
	sv: ,
	type: '',
	sector: '',
	description: 'serves drinks and food in a bar as well as engaging with customers.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Butcher': {
	sv: ,
	type: '',
	sector: '',
	description: 'cuts up and sells meat.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Butler': {
	sv: ,
	type: '',
	sector: '',
	description: 'the chief servant of a household.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Caregiver': {
	sv: ,
	type: '',
	sector: '',
	description: 'looks after a sick, elderly, or disabled person.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Charcoal Maker': {
	sv: ,
	type: '',
	sector: '',
	description: 'manufactures charcoal by carbonizing wood in a kiln.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chatelaine/Majordomo': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person in charge of a large household.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chimney Sweeper': {
	sv: ,
	type: '',
	sector: '',
	description: 'a small person, typically a child, who ascends chimneys to clean them.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Clerk': {
	sv: ,
	type: '',
	sector: '',
	description: 'undertakes routine administrative duties in a business or bank.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cook': {
	sv: ,
	type: '',
	sector: '',
	description: 'prepares food for eating.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Copyist': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes copies of handwritten documents or music.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Croupier': {
	sv: ,
	type: '',
	sector: '',
	description: 'runs a gaming table by gathering in and paying out money or tokens.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Exterminator': {
	sv: ,
	type: '',
	sector: '',
	description: 'exterminates unwanted rodents and insects.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Food & Drink Taster': {
	sv: ,
	type: '',
	sector: '',
	description: 'ingests food that was prepared for someone else to confirm it is safe to eat.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Gardener/Landscaper': {
	sv: ,
	type: '',
	sector: '',
	description: 'tends and cultivates a garden.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Gongfarmer': {
	sv: ,
	type: '',
	sector: '',
	description: 'digs out and removes excrement from privies and cesspits.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Gravedigger': {
	sv: ,
	type: '',
	sector: '',
	description: 'digs graves for the purposes of a funeral ceremony.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Groundskeeper': {
	sv: ,
	type: '',
	sector: '',
	description: 'maintains an athletic field, a park, or the grounds of a graveyard or other institution.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Kitchen Drudge': {
	sv: ,
	type: '',
	sector: '',
	description: 'performs menial work in a kitchen.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Knacker': {
	sv: ,
	type: '',
	sector: '',
	description: 'disposes of dead or unwanted animals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lamplighter': {
	sv: ,
	type: '',
	sector: '',
	description: 'lights street or road lights at dusk.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Laundry Worker': {
	sv: ,
	type: '',
	sector: '',
	description: 'a laborer who takes part in the washing, drying, and ironing of clothes and other fabric items.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lector': {
	sv: ,
	type: '',
	sector: '',
	description: 'reads to others while they work for entertainment.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Longshoreman': {
	sv: ,
	type: '',
	sector: '',
	description: 'loads and unloads ships in a port.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Maid': {
	sv: ,
	type: '',
	sector: '',
	description: 'a domestic servant of a household.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Nanny/Nursemaid': {
	sv: ,
	type: '',
	sector: '',
	description: 'a servant employed to look after a young child or children.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Operator': {
	sv: ,
	type: '',
	sector: '',
	description: 'a laborer who operates equipment, typically in construction.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Pastry Chef': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes desserts, especially cakes and pastries.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Plumber': {
	sv: ,
	type: '',
	sector: '',
	description: 'installs and repairs the fittings of water supply and sanitation.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Porter': {
	sv: ,
	type: '',
	sector: '',
	description: 'carries luggage and other loads.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Prostitute': {
	sv: ,
	type: '',
	sector: '',
	description: 'engages in sexual activity for payment.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Quarryman/Quarrywoman': {
	sv: ,
	type: '',
	sector: '',
	description: 'quarries stone.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Servant': {
	sv: ,
	type: '',
	sector: '',
	description: 'performs duties for others, especially a person employed in a house or as a personal attendant.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Stagehand': {
	sv: ,
	type: '',
	sector: '',
	description: 'moves scenery or props before or during the performance of a theatrical production.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Street Cleaner': {
	sv: ,
	type: '',
	sector: '',
	description: 'cleans streets and alleyways after dark.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Talent Scout': {
	sv: ,
	type: '',
	sector: '',
	description: 'searches for talented individuals who can be employed or promoted.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Trainer': {
	sv: ,
	type: '',
	sector: '',
	description: 'trains someone in a particular skill, usually physical, for money.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Water Bearer': {
	sv: ,
	type: '',
	sector: '',
	description: 'brings water from rivers, wells, and lakes back to their settlement.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Wet Nurse': {
	sv: ,
	type: '',
	sector: '',
	description: 'a woman employed to suckle another woman'
	socialClass: '',
	socialClassRoll: function () { return }
	},'s child.
'Abjurer': {
	sv: ,
	type: '',
	sector: '',
	description: 'a mage focused in protective spells.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Alchemist': {
	sv: ,
	type: '',
	sector: '',
	description: 'transforms or creates something within nature through '
	socialClass: '',
	socialClassRoll: function () { return }
	},(usually) ritualist magic.
'Archmage': {
	sv: ,
	type: '',
	sector: '',
	description: 'an extremely powerful mage.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Artificer': {
	sv: ,
	type: '',
	sector: '',
	description: 'unlocks magic in everyday objects as well as being an inventor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bard': {
	sv: ,
	type: '',
	sector: '',
	description: 'uses their artistic talents to induce magical effects.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Conjuror': {
	sv: ,
	type: '',
	sector: '',
	description: 'conjures spirits or familiars.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Druid': {
	sv: ,
	type: '',
	sector: '',
	description: 'a mage attuned to the magical forces of nature, able to shapeshift, call on the elements, communicate with flora and fauna, etc.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Elementalist': {
	sv: ,
	type: '',
	sector: '',
	description: 'manipulates nature'
	socialClass: '',
	socialClassRoll: function () { return }
	},’s elements to their will.
'Enchanter/Enchantress': {
	sv: ,
	type: '',
	sector: '',
	description: 'uses sorcery to put someone or something under a spell.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Evoker': {
	sv: ,
	type: '',
	sector: '',
	description: 'manipulates energy or taps into an unseen source of power in order to produce a desired kinetic end.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Healer': {
	sv: ,
	type: '',
	sector: '',
	description: 'able to cure a disease or injury using magic.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Hearth Witch/Hearth Wizard': {
	sv: ,
	type: '',
	sector: '',
	description: 'incorporates spells and enchantments in cooking.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Illusionist': {
	sv: ,
	type: '',
	sector: '',
	description: 'performs tricks and spells that deceive the senses.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Mage': {
	sv: ,
	type: '',
	sector: '',
	description: 'a magic-user.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Medium': {
	sv: ,
	type: '',
	sector: '',
	description: 'uses extrasensory perception, magic, or divine powers to identify information hidden from the normal senses.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Meteorologist': {
	sv: ,
	type: '',
	sector: '',
	description: 'forecasts and manipulates weather.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Necromancer': {
	sv: ,
	type: '',
	sector: '',
	description: 'communicates with and conjures the spirits of the dead.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ritualist': {
	sv: ,
	type: '',
	sector: '',
	description: 'practices or advocates the observance of ritual '
	socialClass: '',
	socialClassRoll: function () { return }
	},(formula intended to trigger a magical effect on a person or objects).
'Runecaster': {
	sv: ,
	type: '',
	sector: '',
	description: 'uses special alphabets to create runes '
	socialClass: '',
	socialClassRoll: function () { return }
	},(symbols possessing magical effects capable of being used multiple times).
'Sage': {
	sv: ,
	type: '',
	sector: '',
	description: 'a wise and experienced magic-user.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Seer/Oracle': {
	sv: ,
	type: '',
	sector: '',
	description: 'able to see what the future holds through supernatural insight.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Shaman': {
	sv: ,
	type: '',
	sector: '',
	description: 'accesses and influences the world of good and evil spirits.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Shapeshifter': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person with the ability to change their physical form.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sorcerer/Sorceress': {
	sv: ,
	type: '',
	sector: '',
	description: 'derives their magical abilities innately rather than through study.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Summoner': {
	sv: ,
	type: '',
	sector: '',
	description: 'a mage able to summon forth magical beasts, creatures, and monsters.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Transmuter': {
	sv: ,
	type: '',
	sector: '',
	description: 'alters matter in form, appearance, or nature.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Warlock': {
	sv: ,
	type: '',
	sector: '',
	description: 'a mage who has gained their abilities by forming a pact with an otherworldly being.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Witchdoctor': {
	sv: ,
	type: '',
	sector: '',
	description: 'a tribal mage with powers of healing, divination, and protection against the magic of others.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Witch': {
	sv: ,
	type: '',
	sector: '',
	description: 'a woman who has supernatural powers and practices sorcery, typically in solitude.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Wizard': {
	sv: ,
	type: '',
	sector: '',
	description: 'derives their magical abilities through study.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Wordsmith': {
	sv: ,
	type: '',
	sector: '',
	description: 'draws their power from language and casts by dictation.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Admiral': {
	sv: ,
	type: '',
	sector: '',
	description: 'commands a fleet or naval squadron.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bailiff': {
	sv: ,
	type: '',
	sector: '',
	description: 'looks after prisoners.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bodyguard': {
	sv: ,
	type: '',
	sector: '',
	description: 'escorts and protects another person, especially a dignitary.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bouncer': {
	sv: ,
	type: '',
	sector: '',
	description: 'prevents troublemakers from entering or to eject them from the premises of an establishment.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Captain': {
	sv: ,
	type: '',
	sector: '',
	description: 'an army officer of high rank in charge of commanding squadrons of soldiers.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Castellan': {
	sv: ,
	type: '',
	sector: '',
	description: 'the governor of a castle.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cavalryman/Cavalier': {
	sv: ,
	type: '',
	sector: '',
	description: 'a skilled horseback rider.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'City Watch': {
	sv: ,
	type: '',
	sector: '',
	description: 'an officer of law enforcement who resides in larger towns or cities.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Commissar': {
	sv: ,
	type: '',
	sector: '',
	description: 'teaches principles and policies to military units.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Constable': {
	sv: ,
	type: '',
	sector: '',
	description: 'an officer with limited policing authority, typically in a small town.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Detective/Investigator': {
	sv: ,
	type: '',
	sector: '',
	description: 'investigates and solves crimes.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Drummer/Fifer': {
	sv: ,
	type: '',
	sector: '',
	description: 'a non-combatant foot soldier who sounds signals for changes in formation in combat.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Duelist': {
	sv: ,
	type: '',
	sector: '',
	description: 'skilled in one-on-one combat.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Executioner': {
	sv: ,
	type: '',
	sector: '',
	description: 'carries out a sentence of death on a legally condemned person.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Firefighter': {
	sv: ,
	type: '',
	sector: '',
	description: 'extinguishes fires.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Guard/Sentinel': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person who keeps watch, especially a soldier or other person formally assigned to protect a person or to control access to a place.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'General': {
	sv: ,
	type: '',
	sector: '',
	description: 'the chief commander of an army.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Inspection Officer': {
	sv: ,
	type: '',
	sector: '',
	description: 'responsible for the inspection of military units to ensure they meet appropriate standards of training and efficiency.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Intelligence Officer': {
	sv: ,
	type: '',
	sector: '',
	description: 'collects, compiles and organizes information about the enemy.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Jailer': {
	sv: ,
	type: '',
	sector: '',
	description: 'supervises a jail and the prisoners in it.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Lieutenant': {
	sv: ,
	type: '',
	sector: '',
	description: 'an officer of middle rank in the armed forces.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Marksman/Archer': {
	sv: ,
	type: '',
	sector: '',
	description: 'in long-range weapons, such as the bow, crossbow, sling, etc. to inflict damage from afar.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Marshall': {
	sv: ,
	type: '',
	sector: '',
	description: 'has the charge of the cavalry in the household of a monarch.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Medic': {
	sv: ,
	type: '',
	sector: '',
	description: 'a medical practitioner equipped for the battlefield.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Mercenary': {
	sv: ,
	type: '',
	sector: '',
	description: 'a soldier without allegiance who works for money, typically a member of a company or guild.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Privateer': {
	sv: ,
	type: '',
	sector: '',
	description: 'engages in maritime warfare under a commission of war.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Quartermaster': {
	sv: ,
	type: '',
	sector: '',
	description: 'responsible for providing quarters, rations, clothing, and other supplies.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Royal Guard': {
	sv: ,
	type: '',
	sector: '',
	description: 'responsible for the protection of a royal person.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Runner': {
	sv: ,
	type: '',
	sector: '',
	description: 'carries information between lines in wartime.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sapper': {
	sv: ,
	type: '',
	sector: '',
	description: 'a soldier responsible for tasks such as building and repairing roads and bridges, laying and clearing mines, etc.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sergeant': {
	sv: ,
	type: '',
	sector: '',
	description: 'an officer instructed with a protective duty, typically worth '
	socialClass: '',
	socialClassRoll: function () { return }
	},“half a knight” in regard.
'Sergeant-at-Arms': {
	sv: ,
	type: '',
	sector: '',
	description: 'charged with keeping order during meetings and, if necessary, participates in battle.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Scout': {
	sv: ,
	type: '',
	sector: '',
	description: 'sent ahead of a main force so as to gather information about the enemy'
	socialClass: '',
	socialClassRoll: function () { return }
	},'s position, strength, or movements.
'Siege Artillerist': {
	sv: ,
	type: '',
	sector: '',
	description: 'works the artillery machines of an army.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Slave Driver': {
	sv: ,
	type: '',
	sector: '',
	description: 'oversees and urges on slaves at work.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Soldier/Man-at-Arms': {
	sv: ,
	type: '',
	sector: '',
	description: 'serves in an army.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Special Force Soldier': {
	sv: ,
	type: '',
	sector: '',
	description: 'carries out special operations.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Spy': {
	sv: ,
	type: '',
	sector: '',
	description: 'secretly collects and reports information on the activities, movements, and plans of an enemy or competitor.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tactician': {
	sv: ,
	type: '',
	sector: '',
	description: 'uses a carefully planned military strategy to achieve a specific end.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tollkeeper': {
	sv: ,
	type: '',
	sector: '',
	description: 'collects tolls at a bridge, road etc. where a charge is made.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Torturer': {
	sv: ,
	type: '',
	sector: '',
	description: 'inflicts severe pain on someone as a punishment or in order to force them to do or say something.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Warden': {
	sv: ,
	type: '',
	sector: '',
	description: 'responsible for the supervision of a particular place or thing or for ensuring that regulations associated with it are obeyed.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Warmage': {
	sv: ,
	type: '',
	sector: '',
	description: 'a soldier skilled in destructive battle magic.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Abbot/Abbess': {
	sv: ,
	type: '',
	sector: '',
	description: 'the head of an abbey of monks.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Acolyte': {
	sv: ,
	type: '',
	sector: '',
	description: 'assists the celebrant in a religious service or procession.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Almoner': {
	sv: ,
	type: '',
	sector: '',
	description: 'distributes money and food to poor people.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Archbishop': {
	sv: ,
	type: '',
	sector: '',
	description: 'responsible for an archdiocese, their surrounding district.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bishop': {
	sv: ,
	type: '',
	sector: '',
	description: 'a senior member of the clergy, usually in charge of a diocese and empowered to confer holy orders.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cantor': {
	sv: ,
	type: '',
	sector: '',
	description: 'sings liturgical music and leads prayer in a synagogue.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cardinal': {
	sv: ,
	type: '',
	sector: '',
	description: 'a leading dignitary of a church, nominated by the highest official.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chaplain': {
	sv: ,
	type: '',
	sector: '',
	description: 'a member of the clergy attached to a private chapel, institution, ship, branch of the armed forces, etc.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cleric': {
	sv: ,
	type: '',
	sector: '',
	description: 'has devoted their entire being to the will of their god, thus gaining magical powers.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Confessor': {
	sv: ,
	type: '',
	sector: '',
	description: 'hears confessions and gives absolution and spiritual counsel.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cultist': {
	sv: ,
	type: '',
	sector: '',
	description: 'a member of a cult who generally lives outside of conventional society and worships an unorthodox patron.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cult Leader': {
	sv: ,
	type: '',
	sector: '',
	description: 'the organizational leader of a cult who is occasionally also the founder.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Deacon': {
	sv: ,
	type: '',
	sector: '',
	description: 'an ordained minister of an order ranking below that of priest.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Diviner': {
	sv: ,
	type: '',
	sector: '',
	description: 'seeks ultimate divination in order to further understand or meet godly substance.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Exorcist': {
	sv: ,
	type: '',
	sector: '',
	description: 'expels or attempts to expel evil spirits from a person or place.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'High Priest/Pope': {
	sv: ,
	type: '',
	sector: '',
	description: 'the chief priest of a religion.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Inquisitor': {
	sv: ,
	type: '',
	sector: '',
	description: 'seeks to eliminate heresy and other things contrary to the doctrine or teachings of their faith.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Missionary': {
	sv: ,
	type: '',
	sector: '',
	description: 'goes on a religious mission to promote their faith in a foreign place.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Monk': {
	sv: ,
	type: '',
	sector: '',
	description: 'able to manifest their spirituality through a calm, centered being and thus gain abilities which function similarly to magic.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Nun': {
	sv: ,
	type: '',
	sector: '',
	description: 'a member of a religious community of women, especially a cloistered one, living under vows of poverty, chastity, and obedience.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Paladin': {
	sv: ,
	type: '',
	sector: '',
	description: 'a holy knight and divine spellcaster crusading in the name of good and order.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Pardoner': {
	sv: ,
	type: '',
	sector: '',
	description: 'raises money for religious works by soliciting offerings and granting indulgences.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Priest': {
	sv: ,
	type: '',
	sector: '',
	description: 'has the authority to perform certain rites and administer certain sacraments.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Prophet': {
	sv: ,
	type: '',
	sector: '',
	description: 'regarded as an inspired teacher or proclaimer of the will of God.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sexton': {
	sv: ,
	type: '',
	sector: '',
	description: 'looks after a church and churchyard, sometimes acting as bell-ringer and formerly as a gravedigger.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Templar': {
	sv: ,
	type: '',
	sector: '',
	description: 'fights in a religious military order.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Abecedarian': {
	sv: ,
	type: '',
	sector: '',
	description: 'teaches the illiterate.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Accoucheur/Obstetrician/Midwife': {
	sv: ,
	type: '',
	sector: '',
	description: 'assists in childbirth and the care of women giving birth.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Anthropologist': {
	sv: ,
	type: '',
	sector: '',
	description: 'studies the customs, beliefs, and relationships of humanoids and intellectually and culturally advanced creatures.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Apothecary': {
	sv: ,
	type: '',
	sector: '',
	description: 'prepares and sells medicines, drugs, and potions.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Apprentice': {
	sv: ,
	type: '',
	sector: '',
	description: 'studies a trade under a skilled employer.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Archaeologist': {
	sv: ,
	type: '',
	sector: '',
	description: 'studies humanoid history and prehistory through the excavation of sites and the analysis of artifacts and other physical remains.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Archivist': {
	sv: ,
	type: '',
	sector: '',
	description: 'maintains and is in charge of archives.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Assayer': {
	sv: ,
	type: '',
	sector: '',
	description: 'determiner of the proportions of metal in ore and the amount of copper, silver, gold, or platinum in coins.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Astrologer': {
	sv: ,
	type: '',
	sector: '',
	description: 'uses astrology to tell others about their character or to predict their future.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Astronomer': {
	sv: ,
	type: '',
	sector: '',
	description: 'makes observations of celestial and scientific phenomena within the material plane.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bloodletter': {
	sv: ,
	type: '',
	sector: '',
	description: 'surgically removes some of a patient'
	socialClass: '',
	socialClassRoll: function () { return }
	},'s blood for therapeutic purposes.
'Botanist': {
	sv: ,
	type: '',
	sector: '',
	description: 'an expert in or student of the scientific study of plants.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cartographer': {
	sv: ,
	type: '',
	sector: '',
	description: 'a scholar and illustrator of maps.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Chemist': {
	sv: ,
	type: '',
	sector: '',
	description: 'engaged in chemical research or experiments.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Dean': {
	sv: ,
	type: '',
	sector: '',
	description: 'the head of a college or university.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Doctor/Physician': {
	sv: ,
	type: '',
	sector: '',
	description: 'a qualified practitioner of medicine.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Drakologist': {
	sv: ,
	type: '',
	sector: '',
	description: 'studies or is an expert in the branch of zoology concerned with dragons.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Engineer': {
	sv: ,
	type: '',
	sector: '',
	description: 'designer of a machine or structure.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Entomologist': {
	sv: ,
	type: '',
	sector: '',
	description: 'studies or is an expert in the branch of zoology concerned with insects.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Herbalist': {
	sv: ,
	type: '',
	sector: '',
	description: 'practices healing by the use of herbs.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Historian': {
	sv: ,
	type: '',
	sector: '',
	description: 'an expert in or student of history, especially that of a particular period, geographical region, or social phenomenon.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Horologist': {
	sv: ,
	type: '',
	sector: '',
	description: 'a scholar of time and entropy.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Librarian': {
	sv: ,
	type: '',
	sector: '',
	description: 'administers or assists in a library.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Mathematician': {
	sv: ,
	type: '',
	sector: '',
	description: 'a scholar of the abstract science of number, quantity, and space.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Mortician': {
	sv: ,
	type: '',
	sector: '',
	description: 'prepares dead bodies for burial or cremation and makes arrangements for funerals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Nurse': {
	sv: ,
	type: '',
	sector: '',
	description: 'cares for the sick or infirm, especially in a hospital.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Optometrist': {
	sv: ,
	type: '',
	sector: '',
	description: 'examines the eyes for visual defects and prescribes eyeglasses.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Philosopher': {
	sv: ,
	type: '',
	sector: '',
	description: 'a scholar of the fundamental nature of knowledge, reality, and existence.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Professor': {
	sv: ,
	type: '',
	sector: '',
	description: 'a teacher of the highest rank in a college or university.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Scholar/Researcher': {
	sv: ,
	type: '',
	sector: '',
	description: 'a specialist in a particular branch of study who pursues the acquisition of knowledge.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Scribe': {
	sv: ,
	type: '',
	sector: '',
	description: 'copies out manuscripts.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Student': {
	sv: ,
	type: '',
	sector: '',
	description: 'attends school or learns under other to enter and pursue a particular subject.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Surgeon/Chirurgeon': {
	sv: ,
	type: '',
	sector: '',
	description: 'practices surgery.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Taxonomist': {
	sv: ,
	type: '',
	sector: '',
	description: 'groups organisms into categories.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Teacher': {
	sv: ,
	type: '',
	sector: '',
	description: 'instructs on a particular skill or subject.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Theologian': {
	sv: ,
	type: '',
	sector: '',
	description: 'engages in the study of the nature of God and religious belief.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Tutor': {
	sv: ,
	type: '',
	sector: '',
	description: 'charged with the instruction and guidance of another.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Veterinarian': {
	sv: ,
	type: '',
	sector: '',
	description: 'treats diseased or injured animals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Zoologist': {
	sv: ,
	type: '',
	sector: '',
	description: 'an expert in or a student of the behavior, physiology, classification, and distribution of animals.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Boatman': {
	sv: ,
	type: '',
	sector: '',
	description: 'mans a small seacraft.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bosun': {
	sv: ,
	type: '',
	sector: '',
	description: 'in charge of organizing the equipment and crew of a ship.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cabbie/Wagoner': {
	sv: ,
	type: '',
	sector: '',
	description: 'drives a horse-drawn wagon.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Cabin Boy/Cabin Girl': {
	sv: ,
	type: '',
	sector: '',
	description: 'waits on the orders of a ship'
	socialClass: '',
	socialClassRoll: function () { return }
	},'s officers and passengers.
'Caravaneer': {
	sv: ,
	type: '',
	sector: '',
	description: 'travels or lives in a caravan.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Charioteer': {
	sv: ,
	type: '',
	sector: '',
	description: 'drives a chariot.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Carter': {
	sv: ,
	type: '',
	sector: '',
	description: 'transports goods by cart.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ferryman': {
	sv: ,
	type: '',
	sector: '',
	description: 'operates a ferry.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'First Mate': {
	sv: ,
	type: '',
	sector: '',
	description: 'the deck officer second in command to the master of a ship.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Helmsman': {
	sv: ,
	type: '',
	sector: '',
	description: 'steers a ship or boat.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Navigator': {
	sv: ,
	type: '',
	sector: '',
	description: 'directs the route or course of a ship or other form of transportation, especially by using instruments and maps.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Purser': {
	sv: ,
	type: '',
	sector: '',
	description: 'keeps the accounts of a ship, especially as the head steward on a passenger vessel.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sailor': {
	sv: ,
	type: '',
	sector: '',
	description: 'works as a member of the crew of a commercial or naval ship or boat.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Sea Captain': {
	sv: ,
	type: '',
	sector: '',
	description: 'commands a ship.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Shipwright': {
	sv: ,
	type: '',
	sector: '',
	description: 'a carpenter skilled in ship construction and repair.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Adventurer': {
	sv: ,
	type: '',
	sector: '',
	description: 'wanders the world in search of knowledge, treasure, fame, glory or a multitude of additional wants and desires.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Beggar/Pauper': {
	sv: ,
	type: '',
	sector: '',
	description: 'lives by asking for money or food.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Blood Hunter/Monster Hunter': {
	sv: ,
	type: '',
	sector: '',
	description: 'takes on jobs to hunt down and kill or capture dangerous creatures.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Bounty Hunter': {
	sv: ,
	type: '',
	sector: '',
	description: 'pursues a criminal or fugitive for whom a reward is offered.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Crossing Sweeper': {
	sv: ,
	type: '',
	sector: '',
	description: 'sweeps a path ahead of people crossing dirty urban streets in exchange for a gratuity.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Deserter': {
	sv: ,
	type: '',
	sector: '',
	description: 'a member of the armed forces who has deserted.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Disgraced Noble': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person of high birth who has since loss their respect, honor, or esteem in some or all noble circles.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Drunkard': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person who is habitually drunk and considers themselves a professional in the task.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Dungeon Delver': {
	sv: ,
	type: '',
	sector: '',
	description: 'navigates underground labyrinths in search of any treasure they may find.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Elder': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person of a greater age, especially one with a respected position in society.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Exile': {
	sv: ,
	type: '',
	sector: '',
	description: 'lives away from their native country, either from choice or compulsion.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Explorer': {
	sv: ,
	type: '',
	sector: '',
	description: 'explores unfamiliar areas in search of geographical or scientific information.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Ex-Criminal': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person who has been convicted of a crime and has since served their sentence, or who has preemptively given up their life of crime.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Folk Hero': {
	sv: ,
	type: '',
	sector: '',
	description: 'a celebrity who is greatly admired by many people of a particular kind or in a particular place.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Gambler': {
	sv: ,
	type: '',
	sector: '',
	description: 'bets money on sports, card games, or games of chance in the hope of a profit.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Grave Robber/Tomb Raider': {
	sv: ,
	type: '',
	sector: '',
	description: 'steals valuables from graves and tombs.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Heretic': {
	sv: ,
	type: '',
	sector: '',
	description: 'differs in opinion from established religious dogma.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Hermit': {
	sv: ,
	type: '',
	sector: '',
	description: 'lives in solitude, typically as a religious or spiritual discipline.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Housewife/Househusband': {
	sv: ,
	type: '',
	sector: '',
	description: 'cares for his or her family by managing household affairs and completing housework.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Pilgrim': {
	sv: ,
	type: '',
	sector: '',
	description: 'journeys to some sacred place as an act of religious devotion, occasionally to settle there.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Prisoner': {
	sv: ,
	type: '',
	sector: '',
	description: 'held in confinement as a punishment for crimes they have been convicted of.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Rag-and-Bone Man': {
	sv: ,
	type: '',
	sector: '',
	description: 'collects unwanted household items and sells them to merchants.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Rebel/Political Dissident': {
	sv: ,
	type: '',
	sector: '',
	description: 'rises in opposition or armed resistance against an established government or ruler.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Refugee': {
	sv: ,
	type: '',
	sector: '',
	description: 'leaves their home in order to escape war, persecution, or natural disaster.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Runaway Slave': {
	sv: ,
	type: '',
	sector: '',
	description: 'a slave who has left their master and traveled without authorization.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Scavenger/Mudlark/Tosher': {
	sv: ,
	type: '',
	sector: '',
	description: 'searches for and collects discarded items.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Slave': {
	sv: ,
	type: '',
	sector: '',
	description: 'a person who is the legal property of another and forced to obey them.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Squatter': {
	sv: ,
	type: '',
	sector: '',
	description: 'unlawfully occupies an uninhabited building or unused land.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Traveler/Wanderer/Vagabond': {
	sv: ,
	type: '',
	sector: '',
	description: 'wanders from place to place without a permanent home or job.',
	socialClass: '',
	socialClassRoll: function () { return }
	},
'Urchin': {
	sv: ,
	type: '',
	sector: '',
	description: 'a child who lives or spends most of their time in the streets, occasionally working as a thief or pickpocket.',
	socialClass: '',
	socialClassRoll: function () { return }
	}
  }
