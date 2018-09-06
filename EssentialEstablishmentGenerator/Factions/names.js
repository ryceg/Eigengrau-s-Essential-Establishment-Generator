setup.nameFaction = function (type) {
  // var temp = {}
  var name
  var generalNoun = ['Arcana', 'Beyond', 'Chalice', 'Chamber', 'Cloud', 'Cowl', 'Crown', 'Crystal', 'Darkness', 'Dawn', 'Day', 'Doctrine', 'Dominion', 'Energy', 'Enlightenment', 'Eye', 'Faith', 'Fane', 'Fire', 'Flame', 'Fountain', 'Gate', 'Glyph', 'Grail', 'Hand', 'Harmony', 'Heart', 'Helix', 'Influence', 'Insight', 'Key', 'Knowledge', 'Learning', 'Light', 'Lore', 'Mantle', 'Mastery', 'Mind', 'Moon', 'Mystery', 'Night', 'Orb', 'Path', 'Pentacle', 'Pillar', 'Pool', 'Portal', 'Power', 'Pyramid', 'Question', 'Radiance', 'Rainbow', 'Revelation', 'Robe', 'Rod', 'Sapience', 'Sceptre', 'Scroll', 'Secret', 'Shadow', 'Shrine', 'Sigil', 'Sign', 'Sky', 'Space', 'Sphere', 'Spring', 'Staff', 'Star', 'Stone', 'Sun', 'Symbol', 'Teaching', 'Temple', 'Throne', 'Time', 'Truth', 'Twilight', 'Veil', 'Verity', 'Void', 'Wand', 'Way', 'Wisdom', 'Word', 'World', 'Anchor', 'Bell', 'Cask', 'Castle', 'Crown', 'Cup', 'Harp', 'Oak', 'Plough', 'Rose', 'Sun', 'Vine', 'Ash Tree', 'Oak Tree', 'Broom', 'Bush', 'Hazel', 'Holly', 'Trefoil', 'Arrow', 'Axe', 'Bow', 'Crossbow', 'Dagger', 'Flail', 'Halberd', 'Hammer', 'Javelin', 'Morning Star', 'Boot', 'Cloak', 'Gauntlet', 'Glove', 'Helm', 'Mask', 'Ring', 'Robe', 'Star', 'Banner', 'Beacon', 'Daggers', 'Fist', 'Fists', 'Mace', 'Maces', 'Pike', 'Pikes', 'Shield', 'Shields', 'Angel', 'Basilisk', 'Demon', 'Devil', 'Griffin', 'Dragon', 'Hourglass', 'Scales', 'Mask', 'Blade', 'Sword', 'Swords', 'Hunt', 'Kill', 'Search', 'Coin', 'Copper Penny', 'Silver Dime', 'Gold Sovereign', 'Platinum Emperor'].random()
  var generalAdjective = ['Ancient', 'Arcane', 'Astral', 'Blinding', 'Bright', 'Brilliant', 'Burning', 'Bygone', 'Cardinal', 'Celestial', 'Cloudy', 'Concealed', 'Cosmic', 'Dark', 'Deep', 'Dexter', 'Difficult', 'Dusky', 'Effulgent', 'Elder', 'Elemental', 'Esoteric', 'Eternal', 'Ethereal', 'Existential', 'Forgotten', 'Gloomy', 'Glorious', 'Glowing', 'Gnostic', 'Hidden', 'Ineffable', 'Inner', 'Lost', 'Luminous', 'Lunar', 'Magical', 'Maieutical', 'Mysterious', 'Mystic', 'Occult', 'Penumbral', 'Profound', 'Pure', 'Quintessential', 'Radiant', 'Recondite', 'Resplendent', 'Revealed', 'Sacred', 'Secret', 'Shadowed', 'Shining', 'Sidereal', 'Singing', 'Sinister', 'Solemn', 'Spiral', 'Spiritual', 'Starry', 'Solar', 'Sublime', 'Supernal', 'Timeless', 'Transcendent', 'True', 'Veiled', 'Zetetic', 'Amber', 'Amethyst', 'Aquamarine', 'Azure', 'Beryl', 'Black', 'Blue', 'Brazen', 'Bronze', 'Brown', 'Carmine', 'Cerulean', 'Copper', 'Crimson', 'Crystal', 'Ebony', 'Emerald', 'Golden', 'Green', 'Grey', 'Incarnadine', 'Indigo', 'Ivory', 'Jade', 'Jet', 'Malachite', 'Orange', 'Pearly', 'Purple', 'Rainbow', 'Red', 'Rosy', 'Ruby', 'Russet', 'Sable', 'Sapphire', 'Scarlet', 'Silver', 'Topaz', 'Turquoise', 'Umber', 'Vermilion', 'Violaceous', 'Violet', 'Viridian', 'White', 'Yellow', 'Angry', 'Bad', 'Barking', 'Big', 'Bitten', 'Blinding', 'Bonny', 'Brimming', 'Broken', 'Buxom', 'Capering', 'Cloven', 'Cosy', 'Crazy', 'Crooked', 'Crossed', 'Crying', 'Dancing', 'Dark', 'Dour', 'Drinking', 'Drunken', 'Falling', 'Fat', 'Feasting', 'Fiery', 'Fighting', 'Fishing', 'Flying', 'The Most Holy', 'The Most Noble', 'Impartial', 'Decisive', 'Dependable', 'Final', 'Faithful', 'Supreme', 'Utmost', 'Adamantine', 'Discerning', 'Flawless', 'Formidable', 'Valiant', 'Wonderful'].random()
  // switch (type) {
  //   case 'thieves':
  //     temp = {
  //       'adjective': ['Clever', 'Sneaky', 'Cunning', 'Conniving', 'Honest', 'Black', 'Invisible', 'Silent'],
  //       'main': ['Cutpurses', 'Pilferers', 'Thieves', 'Rogues', 'Property Reappropriaters'],
  //       'group': ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
  //       'unique': ['Silent Movers', 'Silent Partners', 'The Tip-Toe Club', 'Good Fences', 'League of Lifters and Grifters', 'The Neighborhood Watch', 'The Unseen Hand', 'The Kleptocrats', 'The Riverside Raiders', 'Black Market Mayhem', 'The Boondock Burglars', 'The Dock Workers', 'Pickpockets Anonymous']
  //     }
  //     break
  //
  //   case 'merchants':
  //     temp = {
  //       'main': ['Merchants', 'Company', 'Sellers and Buyers', 'Traders', 'Dealers', 'Brokers', 'Pedlars', 'Hawkers', 'Distributors'],
  //       'adjective': ['Shrewd', 'Thrifty', 'Golden Spoon', 'Rich', 'Miserly'],
  //       'group': ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
  //       'unique': ['Amazang', 'Goodest Purchase', 'Nasduq Traders', 'Fence Street Bets', 'Personal Financers']
  //     }
  //     break
  //
  //   case 'wizards':
  //     temp = {
  //       'main': ['Prestidigitators', 'Illusionists', 'Casters', 'Magic Users', 'Diviners', 'Evokers', 'Necromancers', 'Abjurers', 'Scroll Keepers', 'Book Keepers', 'Collectors', 'Librarians'],
  //       'adjective': ['Arcane', 'Magical', 'Scholarly', 'Absent Minded', 'Knowledgeable', 'Intelligent', 'Unknown', 'Eldritch', 'Memorized'],
  //       'group': ['Society', 'Academy', 'University', 'Club', 'Scholarly Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
  //       'unique': ['We Make Magic!', 'The Academy', 'The Arcane Order', 'Adepts Anonymous', 'The Callers Club', 'The Union of Universal Magic', 'The University of the Unusual and Unexplained', 'The College of Conjurers', "Necromancers' Network", "The Evokers' League", 'The Nation of Abjuration', "Seers' and Company", 'The Illusory Faction', 'Spellcasters Anonymous']
  //     }
  //     break
  //
  //   case 'rangers':
  //     temp = {
  //       'main': ['Wilderness', 'Woods', 'Lands', 'Forests', 'Trees', 'Animals'],
  //       'adjective': ['Tree Loving', 'Padfoot', 'Barefoot', 'Protective', 'Watchful', 'Careful', 'Honest'],
  //       'group': ['Society', 'Group', 'Collective', 'Brothers', 'Brotherhood', 'Order', 'Protectors', 'Defenders', 'Conservationists', 'Guardians'],
  //       'unique': ['Feathers, Fur and Friends', 'Boy Scouts', 'Primitive Technologists']
  //     }
  //     break
  //
  //   case 'seers':
  //     temp = {
  //       'main': ['Seers', 'Predictionists', 'Future Seers', 'Observers', 'Eyes', 'Historians'],
  //       'adjective': ['All Seeing', 'All Knowing', 'Watchful', 'Future'],
  //       'group': ['Society', 'Group', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
  //       'unique': ['We Looked Into The Future To Find Our Name And This Was The Name So I Guess This Is The Name', 'Seers of the Obscene', 'Seers of the Scenic']
  //     }
  //     break
  //
  //   case 'priests':
  //     temp = {
  //       'main': ['Priests', 'Clergy', 'Churchpeople', 'People of the Cloth', 'Robes', 'Incense', 'Elders', 'Preachers'],
  //       'adjective': ['Holy', 'Faithful', 'Caring', 'Civil', 'Devout', 'Devoted', 'Compassionate'],
  //       'group': ['Society', 'Group', 'League', 'Servants', 'Collective', 'Brothers', 'Brotherhood', 'Brotherhood', 'Priesthood', 'Order'],
  //       'unique': ['Definitely Not A Tax Haven', 'Repent Now', 'The Church of the Real God Unlike Those Fake Gods', 'The Church of the Real God', 'The Gods']
  //     }
  //     break
  //
  //   case 'monks':
  //     temp = {
  //       'main': ['Monks', 'Robes', 'Stone', 'Rock'],
  //       'adjective': ['Understanding', 'Meditating', 'Calm', 'Unmoving'],
  //       'group': ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
  //       'unique': ['Ommmm', 'The Holy Loincloth', 'The Purposely Unwashed']
  //     }
  //     break
  //
  //   case 'assassins':
  //     temp = {
  //       'main': ['Dagger', 'Knife', 'Executioners', 'Hangmen', 'Hitmen', 'Killers', 'Doctors'],
  //       'adjective': ['Cunning', 'Discreet', 'Quiet', 'Bloody', 'Rusted', 'Poisoned', 'Defiled'],
  //       'group': ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
  //       'unique': ['Dead Is Dead', 'The Killers', 'The Slayers', 'The Big Game Players', 'The Blood Club', 'The League of Silence', 'The Silencers', 'The Whispers', 'The Shadow Faction', 'Shadowfront']
  //     }
  //     break
  //
  //   case 'artisans':
  //     temp = {
  //       'main': ['Creators', 'Visionaries', 'Artisans', 'Artists'],
  //       'adjective': ['Creative', 'Inspired', 'Bohemian', 'Unpaid', 'God-Touched'],
  //       'group': ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
  //       'unique': ['The Cubists', 'The Impressionables', 'The Impressionists', 'The Romanticists', 'The Dirty Paintings', 'The Dirty Painters', 'The Dirty Paint Club']
  //     }
  //     break
  //
  //   case 'bards':
  //     temp = {
  //       'main': ['Rehearsals', 'Musicians', 'Bards', 'Harmonies', 'Poems', 'Ballads', 'Arias', 'Lutes', 'Minstrels'],
  //       'adjective': ['Tuneful', 'Melodious', 'Inspired', 'Twelve Tone', 'Busking'],
  //       'group': ['Symphony', 'Quartet', 'Ensemble', 'Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
  //       'unique': ['Copperback', 'The Tumbling Pebbles', 'King', 'Megabeggars', 'The Wu Tang Clang', 'Earth, Wind and Shire', 'Iron Wench', 'Sex Crossbows', 'Def leprechaun']
  //     }
  //     break
  //
  //   case 'nobles':
  //     temp = {
  //       'main': ['Ladies', 'People', 'Men', 'Lords', 'Heirs', 'Land Owners', 'Barons', 'Tycoons', 'Nobles', 'Gentlemen'],
  //       'adjective': ['Sophisticated', 'Intelligent', 'Refined', 'Cultured', 'Wealthy', 'Distinguished'],
  //       'group': ['Society', 'Group', 'Dinner Club', 'League', 'Club'],
  //       'unique': ['The People Hunters', 'The Fur Coat Enthusiasts', 'The Heir Apparents', 'The Dead Parents Club', 'The High Horse']
  //     }
  //     break
  //
  //   default:
  //     temp = {
  //       'main': ['People', 'Votaries', 'Herders', 'Men', 'Citizens'],
  //       'adjective': ['Watchful', 'Careful', 'Concerned'],
  //       'group': ['Society', 'Group', 'League', 'Association', 'Fraternity', 'Collective', 'Brothers', 'Brotherhood', 'Order'],
  //       'unique': ['Not Just Commoners', 'The Disillusioned Squires']
  //     }
  // }

  name = [
    'The ' + [factionData.type[type].group.random(), generalNoun].random() + ' of ' + [factionData.type[type].adjective.random(), generalAdjective].random() + ' ' + factionData.type[type].main.random(),
    'The ' + [factionData.type[type].group.random(), generalNoun].random() + ' of ' + [factionData.type[type].main.random(), factionData.type[type].main.random()].random(),
    'The ' + [factionData.type[type].adjective.random(), generalAdjective].random() + ' ' + [factionData.type[type].group.random(), generalNoun].random(),
    'The ' + [factionData.type[type].main.random(), factionData.type[type].main.random(), generalNoun].random() + ' of ' + State.variables.town.name,
    'The ' + State.variables.town.name + ' ' + [factionData.type[type].main.random(), factionData.type[type].main.random(), generalNoun].random(),
    factionData.type[type].unique.random()
  ].random()
  console.log(name + ' loaded')
  return name
}
