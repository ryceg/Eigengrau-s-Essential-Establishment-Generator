
setup.factionData = {
  type: {
    artisans: {
      leaderTraits: {
        title: 'Aesthetician',
        hasClass: false,
        profession: 'artisan',
        background: 'guild artisan'
      },
      wordNoun: 'guild',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'able to rise to power by completing a masterpiece', 'able to rise to power by completing a masterpiece', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['hitmen', 'hitmen', 'nobles', 'nobles', 'nobles', 'nobles'],
      rivalsList: ['nobles', 'commoners', 'bandits', 'bandits', 'bandits', 'bandits', 'assassins', 'assassins', 'assassins'],
      joiningRequirement: ['a display of skill', 'a display of skill', 'a display of skill', 'some social status', 'some social status', 'some social status', 'an excellent reputation', 'an excellent reputation', 'an excellent reputation'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their absentmindedness', 'their egos', 'their attention to detail', 'their creativity', 'their lust for fame', 'their pride'],
      main: ['Creators', 'Visionaries', 'Artisans', 'Artists'],
      adjective: ['Creative', 'Inspired', 'Bohemian', 'Unpaid', 'God-Touched'],
      group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
      unique: ['The Cubists', 'The Impressionables', 'The Impressionists', 'The Romanticists', 'The Dirty Paintings', 'The Dirty Painters', 'The Dirty Paint Club'],
      motivation: ['money', 'money', 'money', 'money', 'money', 'fame', 'fame', 'fame', 'glory', 'glory', 'glory', 'vengeance', 'politics'],
      resources: ['artifacts', 'artifacts', 'artifacts', 'magical trinkets', 'magical trinkets', 'magical trinkets', 'masterpieces', 'masterpieces', 'masterpieces']
    },
    assassins: {
      leaderTraits: {
        hasClass: true,
        title: 'High Assassin',
        dndClass: 'rogue',
        profession: 'thief',
        background: ['charlatan', 'soldier', 'criminal']
      },
      wordNoun: 'company',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'the strongest of the group', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to oust the previous leadership', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group', 'promoted by being the most powerful in the group', 'promoted by being the most powerful in the group'],
      alliesList: ['thieves', 'thieves', 'thieves', 'urchins', 'urchins', 'urchins', 'bandits', 'bandits', 'bandits'],
      rivalsList: ['scholars', 'scholars', 'mercenaries', 'mercenaries', 'mercenaries'],
      joiningRequirement: ['referral by an existing member', 'referral by several members', 'endorsement by the current leader', 'a display of skill', 'a display of skill', 'a display of loyalty', 'a display of bravery'],
      joiningInitiation: ['a secret task', 'an oath to be taken', 'a secret ritual', 'a secret task', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', "absolutely nothing; they're completely anonymous", 'their black sashes', 'their tendency to blink quickly', 'their quick tempers'],
      main: ['Dagger', 'Knife', 'Executioners', 'Hangmen', 'Hitmen', 'Killers', 'Doctors'],
      adjective: ['Cunning', 'Discreet', 'Quiet', 'Bloody', 'Rusted', 'Poisoned', 'Defiled'],
      group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
      unique: ['Dead Is Dead', 'The Killers', 'The Slayers', 'The Big Game Players', 'The Blood Club', 'The League of Silence', 'The Silencers', 'The Whispers', 'The Shadow Faction', 'Shadowfront'],
      motivation: ['money', 'money', 'money', 'fame', 'power', 'power', 'power', 'glory', 'vengeance', 'vengeance', 'vengeance', 'politics', 'politics', 'politics'],
      resources: ['bits of blackmail material', 'bits of blackmail material', 'bits of blackmail material', 'bits of blackmail material', 'stolen goods', 'stolen goods', 'stolen goods', 'stolen goods', 'contacts', 'contacts', 'contacts']
    },
    bandits: {
      leaderTraits: {
        title: 'Chief',
        hasClass: true,
        dndClass: 'fighter',
        profession: 'soldier',
        background: ['soldier', 'charlatan', 'criminal']
      },
      wordNoun: 'gang',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'the strongest of the group', 'able to rise to power by completing an ordeal', 'able to rise to power by completing an ordeal', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['hitmen', 'hitmen', 'hitmen', 'hitmen', 'urchins', 'urchins'],
      rivalsList: ['commoners', 'commoners', 'commoners', 'commoners', 'commoners', 'bandits', 'bandits', 'bandits', 'mercenaries', 'mercenaries', 'mercenaries', 'mercenaries', 'mercenaries'],
      joiningRequirement: ['referral by an existing member', 'referral by several members', 'endorsement by the current leader', 'a display of skill', 'a display of skill', 'a display of loyalty', 'a display of bravery'],
      joiningInitiation: ['a secret task', 'an oath to be taken', 'a secret ritual', 'a secret task', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their distinctive headgear', 'their white horses', 'their love of a good fight', 'their love of a good fight', 'their love of a good fight', 'being ruthless in combat', 'following any order given to them', 'fighting to the death'],
      main: ['Ravens', 'Crows', 'Jackals', 'Flesh', 'Knife', 'Club', 'Axe', 'Sword', 'Vultures', 'Dingoes', 'Tigers'],
      adjective: ['Cutthroat', 'Backstabbing', 'Two Timing', 'Orphaned', 'Dead', 'Brutal', 'Bleeding', 'Bloodied', 'Razor', 'Serrated'],
      group: ['Gang', 'Sons', 'Clan', 'Vassals'],
      unique: ['Tunnel Snakes', 'Moonrunners', 'The Orphans', 'Turnbull ACs', 'VanCortlandt Rangers', 'The Destroyers', 'The Jones Street Boys', 'Saracens', "Satan's Mothers", 'The Warriors', 'Baseball Furies', 'Boppers', 'Electric Eliminators', 'Gramercy Riffs', 'Hi-Hats', 'Hurricanes', 'Lizzies', 'Panzers', 'Punks', 'Rogues', 'Savage Huns', 'The VanBuren Boys'],
      motivation: ['money', 'money', 'money', 'fame', 'power', 'power', 'power', 'glory', 'vengeance', 'vengeance', 'vengeance', 'politics', 'politics', 'politics'],
      resources: ['magical weapons', 'magical weapons', 'magical weapons', 'chests of gold', 'chests of gold', 'chests of gold', 'bits of blackmail material', 'bits of blackmail material', 'bits of blackmail material', 'bits of blackmail material', 'stolen goods', 'stolen goods', 'stolen goods', 'stolen goods', 'stolen goods']
    },
    bards: {
      leaderTraits: {
        title: 'Maestro',
        hasClass: true,
        dndClass: 'bard',
        profession: 'musician',
        background: 'entertainer'
      },
      wordNoun: 'college',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'able to rise to power by completing a masterpiece', 'able to rise to power by completing a masterpiece', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['priests', 'urchins', 'urchins', 'nobles', 'nobles', 'nobles'],
      rivalsList: ['bandits', 'bandits', 'bandits', 'bandits'],
      joiningRequirement: ['a display of skill', 'a display of skill', 'a display of skill', 'some social status', 'some social status', 'some social status', 'an excellent reputation', 'an excellent reputation', 'an excellent reputation'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their absentmindedness', 'their egos', 'their attention to detail', 'their creativity', 'their lust for fame', 'their pride', 'their terrible ballads', 'their limerick rhyming', 'their funky harmonies', 'their use of tritone substitution and negative harmony', 'their stochastically generated microtonal four-voice fugues'],
      main: ['Rehearsals', 'Musicians', 'Bards', 'Harmonies', 'Poems', 'Ballads', 'Arias', 'Lutes', 'Minstrels'],
      adjective: ['Tuneful', 'Melodious', 'Inspired', 'Twelve Tone', 'Busking'],
      group: ['Symphony', 'Quartet', 'Ensemble', 'Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
      unique: ['Copperback', 'The Tumbling Pebbles', 'King', 'Megabeggars', 'The Wu Tang Clang', 'Earth, Wind and Shire', 'Iron Wench', 'Sex Crossbows', 'Def leprechaun'],
      motivation: ['money', 'money', 'money', 'fame', 'fame', 'fame', 'fame', 'fame', 'glory', 'glory', 'glory', 'politics'],
      resources: ['chests of gold', 'chests of gold', 'chests of gold', 'contacts', 'contacts', 'contacts', 'contacts', 'contacts', 'old favours', 'old favours', 'old favours', 'old favours', 'important manuscripts', 'important manuscripts', 'important manuscripts', 'important manuscripts', 'masterpieces', 'masterpieces', 'masterpieces', 'magical instruments', 'magical instruments', 'magical instruments']
    },
    clergy: {
      leaderTraits: {
        title: 'Clergyman',
        hasClass: true,
        dndClass: 'cleric',
        background: 'clergy'
      },
      wordNoun: 'church',
      leaderQualification: ['wearing flowing white robes', 'a holy symbol tattooed on their face'],
      alliesList: ['mercenaries'],
      rivalsList: ['assassins'],
      joiningRequirement: ['holy deeds'],
      joiningInitiation: ['sacraments and rituals'],
      membersTrait: ['amulets with a holy sigil'],
      main: ['Mother', 'Father', 'Lord'],
      adjective: ['Heavenly', 'Merciful', 'Holy'],
      group: ['Church', 'Convent', 'Congregation'],
      unique: ["The Lord's Chosen"],
      motivation: ['devotion'],
      resources: ['money', 'connections']
    },
    craftsmen: {
      leaderTraits: {
        title: 'Master',
        hasClass: false,
        profession: 'craftsman',
        background: 'guild artisan'
      },
      wordNoun: 'guild',
      leaderQualification: ['the wealthiest of the group', 'the wealthiest of the group', 'the wealthiest of the group', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['priests', 'nobles', 'nobles', 'nobles', 'artisans', 'artisans', 'seers', 'commoners', 'commoners', 'commoners'],
      rivalsList: ['commoners', 'commoners', 'bandits', 'bandits', 'bandits'],
      joiningRequirement: ['some social status', 'a display of skill', 'referral by an existing member', 'a display of skill', 'a display of skill'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their absentmindedness', 'their egos', 'their attention to detail', 'their creativity', 'their lust for fame', 'their pride'],
      main: ['Creators', 'Visionaries', 'Crafters', 'Craftsmen'],
      adjective: ['Creative', 'Inspired', 'Bohemian', 'Unpaid', 'God-Touched'],
      group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order', 'Workshop', 'Factory'],
      unique: ['The Clicks of the Spring', 'The Offerman Order', 'The Blessed Workshop', 'The Factory'],
      motivation: ['money', 'money', 'money', 'money', 'money', 'fame', 'power', 'power', 'power', 'glory', 'vengeance', 'vengeance', 'vengeance', 'politics'],
      resources: ['chests of gold', 'chests of gold', 'chests of gold', 'contacts', 'contacts', 'contacts', 'important manuscripts', 'important manuscripts', 'important manuscripts', 'important manuscripts', 'masterpieces', 'masterpieces', 'masterpieces', 'artifacts', 'artifacts', 'artifacts', 'magical contraptions', 'magical contraptions', 'magical contraptions']
    },
    druids: {
      leaderTraits: {
        hasClass: true,
        dndClass: 'druid',
        profession: 'noble',
        background: 'noble'
      },
      wordNoun: 'grove',
      leaderQualification: ['leathery tanned skin'],
      alliesList: ['bards', 'rangers'],
      rivalsList: ['assassins', 'wizards'],
      joiningRequirement: ['become a druid', 'give up all worldly possessions'],
      joiningInitiation: ['fight a bear with your bare hands'],
      membersTrait: ['brown and dirty robes'],
      main: ['Green', 'Wild', 'Forest', 'Stream', 'Sky'],
      adjective: ['Holy', 'Great', 'Wide', 'Open'],
      group: ['Coven', 'Circle', 'Tribe', 'Grove'],
      unique: ['Circle of the Green'],
      motivation: ['peace', 'growth of nature', 'love of nature'],
      resources: ['magic', 'knowledge', 'history']
    },
    foreigners: {
      leaderTraits: {
        hasClass: false,
        profession: 'diplomat',
        background: 'noble'
      },
      wordNoun: 'embassy',
      leaderQualification: ['incredibly well spoken', 'incredibly well spoken', 'fluent in common, though with a strong accent', 'the best dressed of the group', 'the most charismatic of the group', 'chosen by his government as a representative', 'incredibly beautiful and charming', 'driven and ambitious', 'the fattest man you have ever seen', 'able to rise to power through nepotism', 'the most intelligent man in the room', 'fluent in common, though with a strong accent'],
      alliesList: ['merchants', 'merchants', 'mercenaries', 'commoners', 'nobles', 'nobles', 'nobles', 'artisans', 'craftsmen', 'craftsmen', 'artisans'],
      rivalsList: ['wizards', 'assassins', 'commoners', 'commoners', 'priests', 'commoners', 'assassins'],
      joiningRequirement: ['familial ties to their home country', 'an expressed desire for citizenship', 'a bond of kinship'],
      joiningInitiation: ['complex citizenship paperwork', 'complex citizenship paperwork', 'an oath of fealty to their king', 'a sufficiently large bribe'],
      membersTrait: ['their tattoos and facial piercings', 'their outlandish clothes', 'their strangely colored hair', 'their orange clothes', 'their large earrings', 'their gaudy jewelry'],
      main: ['Peoples', 'Citizens', 'Lords', 'Peoples'],
      adjective: ['Foreign', 'Distant', 'External', 'Alien', 'Foreign'],
      group: ['Embassy', 'Embassy', 'Embassy', 'Consulate', 'Legation', 'Ministry', 'Diplomatic Mission'],
      unique: ["Citizen's Permanent Mission", 'Alien Consulate General'],
      motivation: ['power', 'peace', 'connections', 'political power'],
      resources: ['contacts', 'contacts', 'contacts', 'political influence', 'foreign goods', 'foreign goods']
    },
    mercenaries: {
      leaderTraits: {
        title: 'Commander',
        hasClass: true,
        dndClass: 'fighter',
        profession: 'soldier',
        background: 'soldier'
      },
      wordNoun: 'company',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'the strongest of the group', 'able to rise to power by completing an ordeal', 'able to rise to power by completing an ordeal', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['hitmen', 'hitmen', 'hitmen', 'hitmen', 'nobles', 'nobles', 'nobles', 'nobles', 'bandits', 'bandits', 'bandits'],
      rivalsList: ['bandits', 'bandits', 'bandits', 'assassins', 'assassins', 'assassins', 'assassins'],
      joiningRequirement: ['some social status', 'referral by an existing member', 'a display of bravery', 'a display of bravery'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their distinctive headgear', 'their white horses', 'their love of a good fight', 'their love of a good fight', 'their love of a good fight', 'being ruthless in combat', 'following any order given to them', 'fighting to the death'],
      main: ['Hand', 'Fist', 'Gauntlet', 'Glove', 'Hammer', 'Shield', 'Cloak', 'Dagger', 'Mace', 'Sword'],
      adjective: ['Black', 'White', 'Shining', 'Just', 'Tall', 'Impenetrable', 'Unbreakable', 'Brass', 'Bronze', 'Blue', 'Strong', 'Mighty'],
      group: ['Axemen', 'Swordsmen', 'Pikesmen', 'Squad', 'Batallion', 'Battlesquad', 'Fighters'],
      unique: ['The Steel Hydras', 'The Silver Hippogryphs', 'The Black Glove of Anubis', "Hera's Tears", 'The Rabid Possums', 'Macguffins, Ltd.', 'The Wayfaring Strangers', 'Valiant, Inc.', 'Blood of the Gordon', 'The Green Hand', 'The Tomb Raiders', 'The Order of the Obsidian Flame', "The King's Ransom", 'The Golden Guardians', 'Dragonfire, Inc.', 'Path of the Righteous Man', 'Hellraisers for Hire', 'Band of the Crimson Lion', 'Company of Champions', 'The Covenant of the Shield', 'Crusaders of the Everlasting Chalice', 'The Iron Fang', 'The Sapphire Guard', 'The Azure Guild', 'Goblincleavers', 'The Redcrest Five', 'Necessary Chaotic Neutral', 'Magic Item and Artifact Retrieval Specialists', 'The Dungeon Delvers', 'Brave Crusaders', 'Daring Champions'],
      motivation: ['money', 'money', 'money', 'money', 'money', 'money', 'fame', 'power', 'glory', 'politics'],
      resources: ['magical weapons', 'magical weapons', 'magical weapons', 'chests of gold', 'chests of gold', 'chests of gold', 'old favours', 'old favours', 'old favours']
    },
    merchants: {
      leaderTraits: {
        title: 'Executive Officer',
        hasClass: false,
        profession: 'merchant',
        background: ['merchant', 'charlatan', 'noble']
      },
      wordNoun: 'guild',
      leaderQualification: ['the wealthiest of the group', 'the wealthiest of the group', 'the wealthiest of the group', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['priests', 'priests', 'hitmen', 'hitmen', 'hitmen', 'nobles', 'nobles', 'nobles', 'artisans', 'artisans', 'artisans', 'mercenaries', 'mercenaries', 'mercenaries', 'mercenaries', 'craftsmen', 'craftsmen', 'craftsmen', 'craftsmen', 'commoners', 'commoners'],
      rivalsList: ['commoners', 'commoners', 'priests', 'priests', 'assassins', 'assassins', 'assassins'],
      joiningRequirement: ['some social status', 'an excellent reputation', 'some social status', 'an excellent reputation'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their purple robes', 'their gaudy jewelry', 'the fact that a member is always closely followed by a boy carrying a chest'],
      main: ['Merchants', 'Company', 'Sellers and Buyers', 'Traders', 'Dealers', 'Brokers', 'Pedlars', 'Hawkers', 'Distributors'],
      adjective: ['Shrewd', 'Thrifty', 'Golden Spoon', 'Rich', 'Miserly'],
      group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
      unique: ['Amazang', 'Goodest Purchase', 'Nasduq Traders', 'Fence Street Bets', 'Personal Financers'],
      motivation: ['money', 'money', 'money', 'money', 'money', 'power', 'glory', 'vengeance', 'politics', 'politics', 'politics'],
      resources: ['trade goods', 'trade goods', 'trade goods', 'trade goods', 'trade goods', 'chests of gold', 'chests of gold', 'chests of gold', 'chests of gold', 'debtors', 'debtors', 'debtors', 'debtors', 'debtors', 'debtors']
    },
    military: {
      leaderTraits: {
        title: 'Commander',
        hasClass: true,
        dndClass: ['fighter', 'fighter', 'fighter', 'barbarian', 'paladin', 'rogue'],
        profession: 'Commander',
        background: ['soldier', 'soldier', 'noble']
      },
      wordNoun: 'army',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'the strongest of the group', 'able to rise to power by completing an ordeal', 'able to rise to power by completing an ordeal', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['hitmen', 'hitmen', 'hitmen', 'hitmen', 'nobles', 'nobles', 'nobles', 'nobles', 'bandits', 'bandits', 'bandits'],
      rivalsList: ['bandits', 'bandits', 'bandits', 'assassins', 'assassins', 'assassins', 'assassins'],
      joiningRequirement: ['some social status', 'referral by an existing member', 'a display of bravery', 'a display of bravery'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their distinctive headgear', 'their white horses', 'their love of a good fight', 'their love of a good fight', 'their love of a good fight', 'being ruthless in combat', 'following any order given to them', 'fighting to the death'],
      main: ['Hand', 'Fist', 'Gauntlet', 'Glove', 'Hammer', 'Shield', 'Cloak', 'Dagger', 'Mace', 'Sword'],
      adjective: ['Black', 'White', 'Shining', 'Just', 'Tall', 'Impenetrable', 'Unbreakable', 'Brass', 'Bronze', 'Blue', 'Strong', 'Mighty', 'Death'],
      group: ['Axemen', 'Swordsmen', 'Pikesmen', 'Squad', 'Batallion', 'Battlesquad', 'Fighters'],
      unique: ['The Steel Hydras', 'The Silver Hippogryphs', 'The Black Glove of Anubis', "Hera's Tears", 'The Rabid Possums', 'Macguffins, Ltd.', 'The Wayfaring Strangers', 'Valiant, Inc.', 'Blood of the Gordon', 'The Green Hand', 'The Tomb Raiders', 'The Order of the Obsidian Flame', "The King's Ransom", 'The Golden Guardians', 'Dragonfire, Inc.', 'Path of the Righteous Man', 'Hellraisers for Hire', 'Band of the Crimson Lion', 'Company of Champions', 'The Covenant of the Shield', 'Crusaders of the Everlasting Chalice', 'The Iron Fang', 'The Sapphire Guard', 'The Azure Guild', 'Goblincleavers', 'The Redcrest Five', 'Necessary Chaotic Neutral', 'Magic Item and Artifact Retrieval Specialists', 'The Dungeon Delvers', 'Brave Crusaders', 'Daring Champions'],
      motivation: ['money', 'money', 'money', 'money', 'money', 'money', 'fame', 'power', 'power', 'power', 'power', 'glory', 'glory', 'glory', 'politics'],
      resources: ['magical weapons', 'magical weapons', 'magical weapons', 'chests of gold', 'chests of gold', 'chests of gold', 'old favours', 'old favours', 'old favours']
    },
    monks: {
      leaderTraits: {
        title: 'High Monk',
        hasClass: true,
        dndClass: 'monk',
        profession: 'monk',
        background: ['acolyte', 'sage']
      },
      wordNoun: 'group',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'the strongest of the group', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['priests', 'priests', 'priests', 'priests', 'artisans', 'artisans'],
      rivalsList: ['artisans', 'priests', 'priests', 'bandits', 'bandits', 'bandits'],
      joiningRequirement: ['some social status', 'referral by an existing member', 'a display of skill', 'a display of skill'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their shaved heads', 'their malnutrition', 'their calm presence', 'their know-it-all answers', 'their terrible jokes', 'their amazing beer', 'the tankard that all members carry'],
      main: ['Monks', 'Robes', 'Stone', 'Rock'],
      adjective: ['Understanding', 'Meditating', 'Calm', 'Unmoving'],
      group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
      unique: ['Ommmm', 'The Holy Loincloth', 'The Purposely Unwashed'],
      motivation: ['money', 'money', 'money', 'knowledge', 'knowledge', 'fame', 'power', 'power', 'power', 'glory', 'vengeance', 'vengeance', 'vengeance', 'politics', 'politics'],
      resources: ['artifacts', 'artifacts', 'artifacts', 'holy relics', 'holy relics', 'holy relics', 'chests of gold', 'chests of gold', 'chests of gold', 'sacred texts', 'sacred texts', 'sacred texts', 'sacred texts']
    },
    nobles: {
      leaderTraits: {
        title: 'Lord',
        hasClass: false,
        profession: 'nobleman',
        background: 'noble'
      },
      wordNoun: 'society',
      leaderQualification: ['the wealthiest of the group', 'the wealthiest of the group', 'the wealthiest of the group', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['hitmen', 'hitmen', 'hitmen', 'hitmen', 'seers', 'seers', 'seers'],
      rivalsList: ['commoners', 'commoners', 'commoners', 'commoners', 'commoners', 'bandits', 'bandits', 'bandits', 'bandits', 'assassins', 'assassins', 'assassins', 'assassins'],
      joiningRequirement: ['some social status', 'some social status', 'some social status', 'an excellent reputation', 'an excellent reputation', 'an excellent reputation'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their absentmindedness', 'their egos', 'their attention to detail', 'their creativity', 'their lust for fame', 'their pride'],
      main: ['Ladies', 'People', 'Men', 'Lords', 'Heirs', 'Land Owners', 'Barons', 'Tycoons', 'Nobles', 'Gentlemen'],
      adjective: ['Sophisticated', 'Intelligent', 'Refined', 'Cultured', 'Wealthy', 'Distinguished'],
      group: ['Society', 'Group', 'Dinner Club', 'League', 'Club'],
      unique: ['The People Hunters', 'The Fur Coat Enthusiasts', 'The Heir Apparents', 'The Dead Parents Club', 'The High Horse'],
      motivation: ['money', 'money', 'money', 'fame', 'power', 'power', 'power', 'power', 'glory', 'vengeance', 'vengeance', 'vengeance', 'politics', 'politics', 'politics', 'politics', 'politics'],
      resources: ['chests of gold', 'chests of gold', 'chests of gold', 'contacts', 'contacts', 'contacts', 'contacts', 'contacts', 'old favours', 'old favours', 'old favours', 'old favours', 'important manuscripts', 'important manuscripts', 'important manuscripts', 'important manuscripts', 'masterpieces', 'masterpieces', 'masterpieces']
    },
    priests: {
      leaderTraits: {
        title: 'The Holy',
        hasClass: true,
        dndClass: 'cleric',
        profession: 'priest',
        background: ['acolyte', 'sage']
      },
      wordNoun: 'college',
      leaderQualification: ['the wealthiest of the group', 'the holiest of the group', 'the holiest of the group', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['nobles', 'nobles', 'nobles', 'artisans', 'artisans'],
      rivalsList: ['artisans', 'bandits', 'bandits', 'bandits', 'bandits'],
      joiningRequirement: ['some social status', 'referral by an existing member', 'a display of skill', 'a display of skill'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'the walking sticks that all members carry', 'the beards that they grow', 'the grey robes they wear', 'the amulet they wear'],
      main: ['Priests', 'Clergy', 'Churchpeople', 'People of the Cloth', 'Robes', 'Incense', 'Elders', 'Preachers'],
      adjective: ['Holy', 'Faithful', 'Caring', 'Civil', 'Devout', 'Devoted', 'Compassionate'],
      group: ['Society', 'Group', 'League', 'Servants', 'Collective', 'Brothers', 'Brotherhood', 'Brotherhood', 'Priesthood', 'Order'],
      unique: ['Definitely Not A Tax Haven', 'Repent Now', 'The Church of the Real God Unlike Those Fake Gods', 'The Church of the Real God', 'The Gods'],
      motivation: ['money', 'money', 'money', 'knowledge', 'knowledge', 'fame', 'power', 'power', 'power', 'glory', 'vengeance', 'vengeance', 'vengeance', 'politics', 'politics', 'politics', 'politics'],
      resources: ['artifacts', 'artifacts', 'artifacts', 'holy relics', 'holy relics', 'holy relics', 'chests of gold', 'chests of gold', 'chests of gold', 'sacred texts', 'sacred texts', 'sacred texts', 'sacred texts']
    },
    rangers: {
      leaderTraits: {
        title: 'Lord Ranger',
        hasClass: true,
        dndClass: 'ranger',
        profession: 'trapper',
        background: ['outlander', 'hermit']
      },
      wordNoun: 'guild',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'the strongest of the group', 'able to rise to power by completing an ordeal', 'able to rise to power by completing an ordeal', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['priests', 'priests', 'nobles', 'nobles', 'seers', 'seers'],
      rivalsList: ['bandits', 'bandits', 'bandits', 'bandits', 'mercenaries', 'mercenaries', 'mercenaries'],
      joiningRequirement: ['some social status', 'referral by an existing member', 'a display of bravery', 'a display of bravery'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their pet ferrets', 'their pet sparrows', 'the twigs that are strewn throughout their hair', 'their terrible smell', 'the lack of footwear'],
      main: ['Wilderness', 'Woods', 'Lands', 'Forests', 'Trees', 'Animals'],
      adjective: ['Tree Loving', 'Padfoot', 'Barefoot', 'Protective', 'Watchful', 'Careful', 'Honest'],
      group: ['Society', 'Group', 'Collective', 'Brothers', 'Brotherhood', 'Order', 'Protectors', 'Defenders', 'Conservationists', 'Guardians'],
      unique: ['Feathers, Fur and Friends', 'Boy Scouts', 'Primitive Technologists'],
      motivation: ['money', 'knowledge', 'knowledge', 'knowledge', 'fame', 'power', 'power', 'power', 'glory', 'glory', 'glory', 'vengeance', 'politics', 'politics', 'politics'],
      resources: ['old favours', 'old favours', 'old favours', 'old favours', 'tame animals', 'tame animals', 'tame animals', 'tame animals', 'contacts', 'contacts', 'contacts']
    },
    scholars: {
      leaderTraits: {
        title: 'Chief Scholar',
        hasClass: false,
        profession: 'professor',
        background: ['sage', 'acolyte']
      },
      wordNoun: 'guild',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'the strongest of the group', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['priests', 'priests', 'priests', 'nobles', 'nobles', 'artisans', 'artisans', 'seers'],
      rivalsList: ['seers', 'priests', 'priests', 'priests', 'commoners', 'bandits', 'bandits', 'bandits', 'assassins', 'assassins', 'assassins'],
      joiningRequirement: ['some social status', 'a display of skill', 'referral by an existing member', 'a display of skill', 'a display of skill'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their absentmindedness', 'their egos', 'their attention to detail', 'their creativity', 'their lust for fame', 'their pride'],
      main: ['Scroll Keepers', 'Book Keepers', 'Collectors', 'Librarians', 'Knowledge Holders', 'Proof Readers', 'Academics'],
      adjective: ['Scholarly', 'Indentured', 'Absent Minded', 'Knowledgeable', 'Intelligent', 'Unknown', 'Eldritch', 'Memorized', 'Cited'],
      group: ['Society', 'Candidates', 'Academy', 'University', 'Club', 'Scholarly Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
      unique: ['Citation Needed', 'Indentured Candidates', 'The Cultists of Weekee', 'Encyclopaedia Uninformatica'],
      motivation: ['money', 'money', 'fame', 'fame', 'fame', 'knowledge', 'knowledge', 'knowledge', 'knowledge', 'power', 'power', 'power', 'glory', 'vengeance', 'vengeance', 'politics', 'politics'],
      resources: ['chests of gold', 'chests of gold', 'chests of gold', 'contacts', 'contacts', 'contacts', 'contacts', 'contacts', 'old favours', 'old favours', 'old favours', 'old favours', 'important manuscripts', 'important manuscripts', 'important manuscripts', 'important manuscripts']
    },
    seers: {
      leaderTraits: {
        title: 'High Seer',
        hasClass: false,
        profession: 'seer',
        background: ['acolyte', 'sage']
      },
      wordNoun: 'guild',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'the strongest of the group', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['priests', 'priests', 'priests', 'priests', 'nobles', 'nobles', 'nobles', 'nobles'],
      rivalsList: ['scholars', 'scholars', 'scholars', 'scholars'],
      joiningRequirement: ['some social status', 'a display of skill', 'referral by an existing member', 'a display of skill', 'a display of skill'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'the vacant look that members have', 'the vacant stare that members pull (in order to fit in with the others)', 'the plain robes they wear', 'the bright blue coloured sashes they wear'],
      main: ['Seers', 'Predictionists', 'Future Seers', 'Observers', 'Eyes', 'Historians'],
      adjective: ['All Seeing', 'All Knowing', 'Watchful', 'Future'],
      group: ['Society', 'Group', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
      unique: ['We Looked Into The Future To Find Our Name And This Was The Name So I Guess This Is The Name', 'Seers of the Obscene', 'Seers of the Scenic'],
      motivation: ['money', 'money', 'knowledge', 'knowledge', 'knowledge', 'knowledge', 'fame', 'power', 'power', 'glory', 'vengeance', 'politics', 'politics', 'politics'],
      resources: ['artifacts', 'artifacts', 'artifacts', 'artifacts', 'bits of blackmail material', 'bits of blackmail material', 'bits of blackmail material', 'bits of blackmail material']
    },
    thieves: {
      leaderTraits: {
        title: 'High Rogue',
        hasClass: true,
        dndClass: 'rogue',
        profession: 'thief',
        background: ['charlatan', 'criminal']
      },
      wordNoun: 'guild',
      leaderQualification: ['the most skilled of the group', 'able to rise to power by completing an ordeal', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to oust the previous leadership', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['thieves', 'thieves', 'thieves', 'urchins', 'hitmen', 'hitmen', 'urchins', 'urchins', 'assassins', 'assassins', 'bandits', 'bandits', 'bandits'],
      rivalsList: ['priests', 'priests', 'priests', 'commoners', 'commoners', 'commoners', 'commoners'],
      joiningRequirement: ['referral by an existing member', 'referral by several members', 'endorsement by the current leader', 'a display of skill', 'a display of skill', 'a display of loyalty', 'a display of bravery'],
      joiningInitiation: ['a heist', 'a secret task', 'a secret ritual', 'a secret ritual'],
      membersTrait: ['a missing earlobe', "absolutely nothing; they're completely anonymous", 'a dagger given to ever member', 'a ring given to every member', 'a grey hood', 'their lack of manners', 'their bad stench', 'their rabble-rousing tendencies'],
      adjective: ['Clever', 'Sneaky', 'Cunning', 'Conniving', 'Honest', 'Black', 'Invisible', 'Silent'],
      main: ['Cutpurses', 'Pilferers', 'Thieves', 'Rogues', 'Property Reappropriaters'],
      group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
      unique: ['Silent Movers', 'Silent Partners', 'The Tip-Toe Club', 'Good Fences', 'League of Lifters and Grifters', 'The Neighborhood Watch', 'The Unseen Hand', 'The Kleptocrats', 'The Riverside Raiders', 'Black Market Mayhem', 'The Boondock Burglars', 'The Dock Workers', 'Pickpockets Anonymous'],
      motivation: ['money', 'money', 'money', 'money', 'money', 'fame', 'power', 'power', 'power', 'glory', 'vengeance', 'vengeance', 'vengeance', 'politics'],
      resources: ['bits of blackmail material', 'bits of blackmail material', 'bits of blackmail material', 'bits of blackmail material', 'stolen goods', 'stolen goods', 'stolen goods', 'stolen goods', 'contacts', 'contacts', 'contacts']
    },
    wizards: {
      leaderTraits: {
        title: 'Archmage',
        hasClass: true,
        dndClass: 'wizard',
        profession: 'magic user',
        background: ['acolyte', 'sage']
      },
      wordNoun: 'college',
      leaderQualification: ['the wealthiest of the group', 'the strongest of the group', 'the strongest of the group', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['nobles', 'nobles', 'artisans', 'artisans', 'seers'],
      rivalsList: ['seers', 'priests', 'priests', 'priests', 'priests', 'assassins', 'assassins'],
      joiningRequirement: ['some social status', 'a display of skill', 'a display of skill', 'a display of skill'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual'],
      membersTrait: ['their lack of table manners', 'their extreme interest in the oddities of the arcane', 'the blue robes they wear', 'the sash that members are given', 'the ring that members are given', 'their excessively bureaucratic tendencies'],
      main: ['Prestidigitators', 'Illusionists', 'Casters', 'Magic Users', 'Diviners', 'Evokers', 'Necromancers', 'Abjurers', 'Scroll Keepers', 'Book Keepers', 'Collectors', 'Librarians'],
      adjective: ['Arcane', 'Magical', 'Scholarly', 'Absent Minded', 'Knowledgeable', 'Intelligent', 'Unknown', 'Eldritch', 'Memorized'],
      group: ['Society', 'Academy', 'University', 'Club', 'Scholarly Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
      unique: ['We Make Magic!', 'The Academy', 'The Arcane Order', 'Adepts Anonymous', 'The Callers Club', 'The Union of Universal Magic', 'The University of the Unusual and Unexplained', 'The College of Conjurers', "Necromancers' Network", "The Evokers' League", 'The Nation of Abjuration', "Seers' and Company", 'The Illusory Faction', 'Spellcasters Anonymous'],
      motivation: ['money', 'money', 'fame', 'fame', 'fame', 'knowledge', 'knowledge', 'knowledge', 'knowledge', 'power', 'power', 'power', 'glory', 'vengeance', 'vengeance', 'politics', 'politics'],
      resources: ['magic scrolls', 'magic scrolls', 'magic scrolls', 'magic scrolls', 'magic trinkets', 'magic trinkets', 'magic trinkets', 'magic trinkets']
    },
    backup: {
      leaderTraits: {
        hasClass: false,
        profession: 'merchant',
        background: 'merchant'
      },
      wordNoun: 'guild',
      leaderQualification: ['the wealthiest of the group', 'the wealthiest of the group', 'the wealthiest of the group', 'able to rise to power by completing an ordeal', 'the most charismatic of the group', 'democratically elected', 'able to oust the previous leadership', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'able to rise to power through nepotism', 'promoted by being the most powerful in the group'],
      alliesList: ['priests', 'priests', 'hitmen', 'hitmen', 'hitmen', 'nobles', 'nobles', 'nobles', 'artisans', 'artisans', 'artisans', 'mercenaries', 'mercenaries', 'mercenaries', 'mercenaries', 'craftsmen', 'craftsmen', 'craftsmen', 'craftsmen', 'commoners', 'commoners'],
      rivalsList: ['commoners', 'commoners', 'priests', 'priests', 'assassins', 'assassins', 'assassins'],
      joiningRequirement: ['some social status', 'an excellent reputation', 'some social status', 'an excellent reputation'],
      joiningInitiation: ['a simple form to be filled', 'a simple form to be filled', 'an oath to be taken'],
      membersTrait: ['the ring that members are given', 'their excessively bureaucratic tendencies', 'their purple robes', 'their gaudy jewelry', 'the fact that a member is always closely followed by a boy carrying a chest'],
      main: ['People', 'Votaries', 'Herders', 'Men', 'Citizens'],
      adjective: ['Watchful', 'Careful', 'Concerned'],
      group: ['Society', 'Group', 'League', 'Association', 'Fraternity', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
      unique: ['Not Just Commoners', 'The Disillusioned Squires'],
      motivation: ['money', 'money', 'money', 'money', 'money', 'fame', 'power', 'power', 'power', 'glory', 'vengeance', 'vengeance', 'vengeance', 'politics'],
      resources: ['chests of gold', 'chests of gold', 'chests of gold', 'contacts', 'contacts', 'contacts', 'contacts', 'contacts', 'old favours', 'old favours', 'old favours', 'old favours', 'important manuscripts', 'important manuscripts', 'important manuscripts', 'important manuscripts']
    }
  }
}
