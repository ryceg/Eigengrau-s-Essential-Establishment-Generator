import { random } from '../src/random'
import { getUUID } from '../src/utils'
import { Construct, ConstructUtils } from './_common'

interface Goblin extends Construct<'goblin'> {
  type: string;
  carry: string;
  wears: string;
  faceFeature: string;
  feature: string;
  looks: string;
  talent: string;
}

export const goblin: ConstructUtils<Goblin> = {
  create: base => ({
    $uuid: getUUID(),
    $type: 'goblin',
    type: random(data.type),
    carry: random(data.carry),
    wears: random(data.wears),
    faceFeature: random(data.faceFeature),
    feature: random(data.feature),
    looks: random(data.looks),
    talent: random(data.talent),
    ...base
  }),
  readout: goblin => {
    return `This goblin is ${goblin.type}, and has a ${goblin.faceFeature}. It wields ${goblin.carry} and wears ${goblin.wears}. This goblin is particularly good at ${goblin.talent}, and has ${goblin.feature}. Currently, it is looking to ${goblin.looks}`
  }
}

const data = {
  type: ['a miner', 'a forager', 'a warrior', 'a scout', 'a trapmaker', 'an archer', 'an assassin', 'a hexer', 'a wolf-rider', 'a sneak', 'an armorer', 'a cook', 'a builder', 'a beastshifter', 'a skullcrusher', 'a thug', 'a warpriest', 'a prankster', 'a blackblade', 'a worthless nobody'],
  talent: ['being sneaky', 'not being seen', 'tracking foes', 'building traps', 'avoiding traps', 'repairing traps', 'foraging for food and water', 'wrangling beasts', 'digging tunnels', 'crafting arms and armor', 'crushing skulls', 'cutting throats'],
  carry: ['a rusty sword', 'a finely-made sword', 'a spiked club', 'a wicked looking axe', 'a spear decorated with feathers', 'several polished daggers', 'a large, serrated dagger', 'a pair of curved daggers', 'a cracked wooden shield', 'a shield, emblazoned with the gangs’ symbol', 'arrows fletched with crow feathers', 'arrows fletched with hawk feathers'],
  wears: ['armor with greasy stains', 'patched leather armor', 'piecemeal chain armor', 'a leather helm', 'a large skull as a helm', 'a wolf-face helm', 'a lanyard of severed ears', 'a big hoop earring', 'a shiny silver belt', 'a wolf skin', 'a black cloak with a hood', 'a large belt purse'],
  faceFeature: ['blue warpaint', 'an eyepatch', 'burn scars', 'only one ear', 'no front teeth', 'an unusal tattoo on the forehead', 'stitches closing a wound on the jaw', 'a topknot above it', 'several muddy smudges', 'a boil oozing pus', 'a wisp of a mustache', 'amazing sideburns'],
  feature: ['an unsettling stare', 'a lean and hungry look', 'a maniacal laugh', 'a mad cackling laugh', 'a high-pitched twittering laugh', 'a tendency to snicker at everything', 'a nervous twitch', 'a difficult time standing still', 'a waddle', 'a limp', 'an unsavory habit of drooling', 'a habit of sniffing loudly'],
  looks: ['find something to eat', 'find something to drink', 'find some coins or gems to steal', 'warn the gang of monster hunters in the area', 'warn the gang of a savage beast in the area', 'report to the gang as to where to find treasure', "prove its mettle to the gang's boss", "avoid notice by the gang's boss", 'avoid notice by anyone', 'leave the gang entirely', 'play a cruel prank', 'swap distasteful jokes']
}
