setup.createTownName = function (town) {
  const prefix = ['Green', 'Elms', 'Oak', 'Fair', 'Farren', 'Tall', 'Nar', 'Alla', 'Lans', 'San', 'Col', 'Fri', 'Plain', 'Hon', 'Far', 'Barrow', 'Shi', 'Mel', 'Mal', 'Bon', 'Bie', 'Can', 'Pol', 'Pan',
    'Fald', 'Frior', 'Pol', 'Stone', 'Water', 'Leaf', 'Ice', 'Flame', 'Sol', 'Storm', 'Earth', 'Gleam', 'Star', 'Art', 'War', 'Heart', 'Hard', 'Fall', 'Rock', 'Doom', 'Oak', 'Tear', 'Raven', 'Badger',
    'Snake', 'Lion', 'Hell', 'Rage', 'Brine', 'Rat', 'Buck', 'Lily', 'Core', 'Stench', 'Mage', 'God', 'Soil', 'Pure', 'Mal', 'Cam', 'Fen', 'Clear', 'Split', 'Founders', 'Heir', 'Fair', 'Spin', 'Aber', 'Acc', 'Ock',
    'Avon', 'Ar', 'Ard', 'Druin', 'Ash', 'Ast', 'Auchen', 'Ach', 'Usk', 'Axe', 'Balla', 'Bal', 'Bannock', 'Bannau', 'Bre', 'Bry', 'Crag', 'Cul', 'Dinas', 'Drum', 'Holm', 'Keld', 'West', 'Wind', 'Nor', 'Nant',
    'Porth', 'Swin', 'Sud', 'Sut', 'Wes', 'Alt', 'Alten', 'Kies', 'Klein', 'Neu', 'Nieder', 'Ober', 'Oberst', 'Unter', 'Lichten', 'Pyr', 'Kron', 'Frank', 'Ber', 'Berg', 'Kirch', 'Uk', 'Rus', 'Ban',
    'Cha', 'Agni', 'Val', 'Vas', 'Bug', 'Tre', 'Haj', 'Par', 'Roz', 'Hlod', 'Lunin', 'Lun', 'Jast']
  const suffix = ['dale', 'ten', 'den', 'ven', 'gen', 'len', 'lun', 'stun', 'ville', 'burn', 'view', 'nen', 'lan', 'sed', 'folk', 'ork', 'len', 'pan', 'rel', 'old', 'ten', 'tan', 'lend', 'vorn', 'vant',
    'lid', 'lin', 'crest', 'bridge', 'run', 'catch', 'blade', 'haven', 'rise', 'more', 'light', 'main', 'blaze', 'place', 'tear', 'fold', 'rest', 'host', 'craft', 'lair', 'hollow', 'vale', 'hammer',
    'pike', 'rail', 'spike', 'ring', 'henge', 'coil', 'spring', 'jaw', 'mark', 'hail', 'loch', 'child', 'keep', 'fort', 'brook', 'forth', 'melt', 'borourgh', 'ford', 'crawl', 'moral', 'combe', 'glen',
    'garden', 'wish', 'fellow', 'ridge', 'ward', 'bury', 'hamm', 'hurst', 'ley', 'lee', 'leigh', 'ney', 'port', 'sted', 'stead', 'stow', 'stowe', 'tun', 'wick', 'wich', 'sex', 'ex', 'lia', 'ia', 'lass',
    'ter', 'ton', 'beck', 'bach', 'bost', 'mouth', 'bourne', 'born', 'borough', 'by', 'bie', 'caster', 'chester', 'cott', 'dale', 'don', 'den', 'eig', 'ey', 'field', 'firth', 'hurst', 'lynn', 'lin', 'mere',
    'ness', 'medden', 'stoke', 'ster', 'rigg', 'toft', 'tun', 'worth', 'brough', 'ingen', 'mar', 'jung', 'berg', 'bruch', 'bruck', 'burg', 'bühl', 'büttel', 'dorf', 'ede', 'feld', 'furt', 'graben', 'hag',
    'hau', 'hausen', 'heim', 'hof', 'horn', 'horst', 'hoven', 'ich', 'in', 'itz', 'kirch', 'leben', 'leiten', 'loh', 'ow', 'siefen', 'stadt', 'stein', 'wald', 'weg', 'werder', 'weiger', 'winkel', 'tal',
    'ki', 'halas', 'wek', 'diu', 'arsk', 'glod']
  let name
  if (random(100) > 90) {
    console.log('Named a founder!')
    if (town) {
      const npc = setup.createNPC(town)
      town.founder = npc.key
      name = town.founder.lastName + suffix.seededrandom()
    } else {
      name = setup.npcData.raceTraits['human'].lastName.seededrandom() + suffix.seededrandom()
    }
  } else {
    name = prefix.seededrandom() + suffix.seededrandom()
  }

  // linguisticDrift runs some RegEx on the names.
  setup.linguisticDrift(name)
  return name
}
