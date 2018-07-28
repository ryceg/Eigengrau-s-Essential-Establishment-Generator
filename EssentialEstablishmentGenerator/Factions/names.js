setup.nameFaction = function (type) {
  var temp = {}
  var name
  switch (type) {
    case 'thieves':
      temp = {
        adjective: ['Clever', 'Sneaky', 'Cunning', 'Conniving', 'Honest', 'Black', 'Invisible', 'Silent'].random(),
        main: ['Cutpurses', 'Pilferers', 'Thieves', 'Rogues', 'Property Reappropriaters'].random(),
        group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'].random(),
        unique: ['Silent Movers', 'Silent Partners', 'The Tip-Toe Club', 'Good Fences', 'League of Lifters and Grifters', 'The Neighborhood Watch', 'The Unseen Hand', 'The Kleptocrats', 'The Riverside Raiders', 'Black Market Mayhem', 'The Boondock Burglars', 'The Dock Workers', 'Pickpockets Anonymous'].random()
      }
      break

    case 'merchants':
      temp = {
        main: ['Merchants', 'Company', 'Sellers and Buyers', 'Traders', 'Dealers', 'Brokers', 'Pedlars', 'Hawkers', 'Distributors'].random(),
        adjective: ['Shrewd', 'Thrifty', 'Golden Spoon', 'Rich', 'Miserly'].random(),
        group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'].random(),
        unique: ['Amazang', 'Goodest Purchase', 'Nasduq Traders', 'Fence Street Bets', 'Personal Financers'].random()
      }
      break

    case 'wizards':
      temp = {
        main: ['Prestidigitators', 'Illusionists', 'Casters', 'Magic Users', 'Diviners', 'Evokers', 'Necromancers', 'Abjurers', 'Scroll Keepers', 'Book Keepers', 'Collectors', 'Librarians'].random(),
        adjective: ['Arcane', 'Magical', 'Scholarly', 'Absent Minded', 'Knowledgeable', 'Intelligent', 'Unknown', 'Eldritch', 'Memorized'].random(),
        group: ['Society', 'Academy', 'University', 'Club', 'Scholarly Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'].random(),
        unique: ['We Make Magic!', 'The Academy', 'The Arcane Order', 'Adepts Anonymous', 'The Callers Club', 'The Union of Universal Magic', 'The University of the Unusual and Unexplained', 'The College of Conjurers', "Necromancers' Network", "The Evokers' League", 'The Nation of Abjuration', "Seers' and Company", 'The Illusory Faction', 'Spellcasters Anonymous'].random()
      }
      break

    case 'rangers':
      temp = {
        main: ['Wilderness', 'Woods', 'Lands', 'Forests', 'Trees', 'Animals'].random(),
        adjective: ['Tree Loving', 'Padfoot', 'Barefoot', 'Protective', 'Watchful', 'Careful', 'Honest'].random(),
        group: ['Society', 'Group', 'Collective', 'Brothers', 'Brotherhood', 'Order', 'Protectors', 'Defenders', 'Conservationists', 'Guardians'].random(),
        unique: ['Feathers, Fur and Friends', 'Boy Scouts', 'Primitive Technologists'].random()
      }
      break

    case 'seers':
      temp = {
        main: ['Seers', 'Predictionists', 'Future Seers', 'Observers', 'Eyes', 'Historians'].random(),
        adjective: ['All Seeing', 'All Knowing', 'Watchful', 'Future'].random(),
        group: ['Society', 'Group', 'Collective', 'Brothers', 'Brotherhood', 'Order'].random(),
        unique: ['We Looked Into The Future To Find Our Name And This Was The Name So I Guess This Is The Name', 'Seers of the Obscene', 'Seers of the Scenic'].random()
      }
      break

    case 'priests':
      temp = {
        main: ['Priests', 'Clergy', 'Churchpeople', 'People of the Cloth', 'Robes', 'Incense', 'Elders', 'Preachers'].random(),
        adjective: ['Holy', 'Faithful', 'Caring', 'Civil', 'Devout', 'Devoted', 'Compassionate'].random(),
        group: ['Society', 'Group', 'League', 'Servants', 'Collective', 'Brothers', 'Brotherhood', 'Brotherhood', 'Priesthood', 'Order'].random(),
        unique: ['Definitely Not A Tax Haven', 'Repent Now', 'The Church of the Real God Unlike Those Fake Gods', 'The Church of the Real God', 'The Gods'].random()
      }
      break

    case 'monks':
      temp = {
        main: ['Monks', 'Robes', 'Stone', 'Rock'].random(),
        adjective: ['Understanding', 'Meditating', 'Calm', 'Unmoving'].random(),
        group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'].random(),
        unique: ['Ommmm', 'The Holy Loincloth', 'The Purposely Unwashed'].random()
      }
      break

    case 'assassins':
      temp = {
        main: ['Dagger', 'Knife', 'Executioners', 'Hangmen', 'Hitmen', 'Killers', 'Doctors'].random(),
        adjective: ['Cunning', 'Discreet', 'Quiet', 'Bloody', 'Rusted', 'Poisoned', 'Defiled'].random(),
        group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'].random(),
        unique: ['Dead Is Dead', 'The Killers', 'The Slayers', 'The Big Game Players', 'The Blood Club', 'The League of Silence', 'The Silencers', 'The Whispers', 'The Shadow Faction', 'Shadowfront'].random()
      }
      break

    case 'artisans':
      temp = {
        main: ['Creators', 'Visionaries', 'Artisans', 'Artists'].random(),
        adjective: ['Creative', 'Inspired', 'Bohemian', 'Unpaid', 'God-Touched'].random(),
        group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'].random(),
        unique: ['The Cubists', 'The Impressionables', 'The Impressionists', 'The Romanticists', 'The Dirty Paintings', 'The Dirty Painters', 'The Dirty Paint Club'].random()
      }
      break

    case 'bards':
      temp = {
        main: ['Rehearsals', 'Musicians', 'Bards', 'Harmonies', 'Poems', 'Ballads', 'Arias', 'Lutes', 'Minstrels'].random(),
        adjective: ['Tuneful', 'Melodious', 'Inspired', 'Twelve Tone', 'Busking'].random(),
        group: ['Symphony', 'Quartet', 'Ensemble', 'Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'].random(),
        unique: ['Copperback', 'The Tumbling Pebbles', 'King', 'Megabeggars', 'The Wu Tang Clang', 'Earth, Wind and Shire', 'Iron Wench', 'Sex Crossbows', 'Def leprechaun'].random()
      }
      break

    case 'nobles':
      temp = {
        main: ['People', 'Men', 'Lords', 'Heirs', 'Land Owners', 'Barons', 'Tycoons', 'Nobles', 'Gentlemen'].random(),
        adjective: ['Sophisticated', 'Intelligent', 'Refined', 'Cultured', 'Wealthy', 'Distinguished'].random(),
        group: ['Society', 'Group', 'Dinner Club', 'League', 'Club'].random(),
        unique: ['The People Hunters', 'The Fur Coat Enthusiasts', 'The Heir Apparents', 'The Dead Parents Club', 'The High Horse'].random()
      }
      break

    default:
      temp = {
        main: ['People', 'Men', 'Citizens'].random(),
        adjective: ['Watchful', 'Careful', 'Concerned'].random(),
        group: ['Society', 'Group', 'League', 'Collective', 'Brothers', 'Brotherhood', 'Order'].random(),
        unique: ['Not Just Commoners', 'The Disillusioned Squires'].random()
      }
  }

  name = [
    'The ' + temp.group + ' of ' + temp.adjective + ' ' + temp.main,
    'The ' + temp.group + ' of ' + temp.main,
    'The ' + temp.adjective + ' ' + temp.group,
    'The ' + temp.main + ' of ' + State.variables.town.name,
    'The ' + State.variables.town.name + ' ' + temp.main,
    temp.unique
  ].random()
  console.log(name + ' loaded')
  return name
}
