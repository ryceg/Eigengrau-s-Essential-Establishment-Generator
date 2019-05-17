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
    // 'monk': {
    //  sv: 6500,
    //  type: 'dndClass',
    //  sector: 'adventuring',
    //  description: '',
    //  socialClass: 'commoner',
    //  socialClassRoll: function (town, npc) { return 50 + dice(8, 6) }
    // },
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
    // 'buccaneer': {
    //  sv: 1350,
    //  type: '',
    //  sector: 'craftsmanship',
    //  description: '',
    //  socialClass: 'commoner',
    //  socialClassRoll: function () { return 55 }
    // },
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
      }
  }