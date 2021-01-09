/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Town } from '@lib'
import { random } from '../../../lib/src/random'

export const createTownName = (town: Town) => {
  const prefix = ['Green', 'Elms', 'Oak', 'Fair', 'Farren', 'Tall', 'Nar', 'Alla', 'Lans', 'San', 'Col', 'Fri', 'Plain', 'Hon', 'Far', 'Barrow', 'Shi', 'Mel', 'Mal', 'Bon', 'Bie', 'Can', 'Pol', 'Pan',
    'Fald', 'Frior', 'Pol', 'Stone', 'Water', 'Leaf', 'Ice', 'Flame', 'Sol', 'Storm', 'Earth', 'Gleam', 'Star', 'Art', 'War', 'Heart', 'Hard', 'Fall', 'Rock', 'Doom', 'Oak', 'Tear', 'Raven', 'Badger',
    'Snake', 'Lion', 'Hell', 'Rage', 'Brine', 'Rat', 'Buck', 'Lily', 'Core', 'Stench', 'Mage', 'God', 'Soil', 'Pure', 'Mal', 'Cam', 'Fen', 'Clear', 'Split', 'Founders', 'Heir', 'Spin', 'Aber', 'Acc', 'Ock',
    'Avon', 'Ar', 'Ard', 'Druin', 'Ash', 'Ast', 'Auchen', 'Ach', 'Usk', 'Axe', 'Balla', 'Bal', 'Bannock', 'Bannau', 'Bre', 'Bry', 'Crag', 'Cul', 'Dinas', 'Drum', 'Holm', 'Keld', 'West', 'Wind', 'Nor', 'Nant',
    'Porth', 'Swin', 'Sud', 'Sut', 'Wes', 'Alt', 'Alten', 'Kies', 'Klein', 'Neu', 'Nieder', 'Ober', 'Oberst', 'Unter', 'Lichten', 'Pyr', 'Kron', 'Frank', 'Ber', 'Berg', 'Kirch', 'Uk', 'Rus', 'Ban',
    'Cha', 'Agni', 'Val', 'Vas', 'Bug', 'Tre', 'Haj', 'Par', 'Roz', 'Hlod', 'Lunin', 'Lun', 'Jast', 'Cherry', 'Rose', 'Elk', 'Clay', 'New', 'Bear', 'Moss', 'Pine', 'Cedar', 'Ever']
  const suffix = ['dale', 'ten', 'den', 'ven', 'gen', 'len', 'lun', 'stun', 'ville', 'burn', 'view', 'nen', 'lan', 'sed', 'folk', 'ork', 'len', 'pan', 'rel', 'old', 'ten', 'tan', 'lend', 'vorn', 'vant',
    'lid', 'lin', 'crest', 'bridge', 'run', 'catch', 'blade', 'haven', 'rise', 'more', 'light', 'main', 'blaze', 'place', 'tear', 'fold', 'rest', 'host', 'craft', 'lair', 'hollow', 'vale', 'hammer',
    'pike', 'rail', 'spike', 'ring', 'henge', 'coil', 'spring', 'jaw', 'mark', 'hail', 'loch', 'child', 'keep', 'fort', 'brook', 'forth', 'melt', 'borourgh', 'ford', 'crawl', 'moral', 'combe', 'glen',
    'garden', 'wish', 'fellow', 'ridge', 'ward', 'bury', 'hamm', 'hurst', 'ley', 'lee', 'leigh', 'ney', 'port', 'sted', 'stead', 'stow', 'stowe', 'tun', 'wick', 'wich', 'sex', 'ex', 'lia', 'ia', 'lass',
    'ter', 'ton', 'beck', 'bach', 'bost', 'mouth', 'bourne', 'born', 'borough', 'by', 'bie', 'caster', 'chester', 'cott', 'don', 'den', 'eig', 'ey', 'field', 'firth', 'lynn', 'lin', 'mere',
    'ness', 'medden', 'stoke', 'ster', 'rigg', 'toft', 'tun', 'worth', 'brough', 'ingen', 'mar', 'jung', 'berg', 'bruch', 'bruck', 'burg', 'bühl', 'büttel', 'dorf', 'ede', 'feld', 'furt', 'graben', 'hag',
    'hau', 'hausen', 'heim', 'hof', 'horn', 'horst', 'hoven', 'ich', 'in', 'itz', 'kirch', 'leben', 'leiten', 'loh', 'ow', 'siefen', 'stadt', 'stein', 'wald', 'weg', 'werder', 'weiger', 'winkel', 'tal',
    'ki', 'halas', 'wek', 'diu', 'arsk', 'glod', 'wharf', 'lake', 'grove', 'root', 'wood', 'hill', 'abbey', 'gate', 'harbor', 'landing', 'post', 'pass', 'polis', 'hold', 'watch', 'mill', 'bluff', 'cairn',
    'edge', 'moor', 'point', 'shaw', 'shire', 'thorpe', 'valley', 'wallow']
  let name
  if (random(100) > 90) {
    console.log('Named a founder!')
    if (town) {
      // @ts-ignore
      const npc = setup.createDeadNPC(town, { note: 'The namesake of the town.' })
      town.founder = npc.key
      name = npc + suffix.random()
    } else {
      name = random(lib.raceTraits.human.lastName) + random(suffix)
    }
  } else {
    name = random(prefix) + random(suffix)
  }

  // linguisticDrift runs some RegEx on the names.
  const driftName = lib.linguisticDrift(name)

  if (town && town.buildings) {
    console.log(town.name, driftName)
    // Replace existing names of buildings if they reference town name
    town.buildings.forEach(building => {
      building.name = building.name.replace(town.name, driftName)
      if (building.tippyDescription) building.tippyDescription = building.tippyDescription.replace(town.name, driftName)
    })
  }

  if (town && town.factions) {
    console.log(town.name, driftName)
    // Replace existing names of factions if they reference town name
    for (const faction of Object.values(town.factions)) {
      town.factions[faction.key].name = town.factions[faction.key].name.replace(town.name, driftName)
      town.factions[faction.key].associatedTown = driftName
      town.factions[faction.key].tippyDescription = town.factions[faction.key].tippyDescription.replace(town.name, driftName)
    }
  }

  return driftName
}
