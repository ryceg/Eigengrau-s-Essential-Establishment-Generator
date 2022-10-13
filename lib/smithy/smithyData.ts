
import { Smithy } from './_common'

export const smithyData = {
  get: {
    expertise: (smithy: Smithy) => [
      {
        expertise: 80,
        wealth: 10,
        note: `On the bench lies a ${smithyData.weapons.random()}, and just by looking at it, you can tell that the blacksmith is extremely talented at ${smithy.associatedNPC.hisher} craft; this is a weapon clearly fit for a king.`
      },
      {
        expertise: 70,
        wealth: 10,
        note: `On the bench lies a ${smithyData.weapons.random()}, and looking at it, you can tell that the blacksmith is talented at ${smithy.associatedNPC.hisher} craft; this is a well made weapon.`
      },
      {
        expertise: 60,
        wealth: 10,
        note: `On the bench is a ${smithyData.weapons.random()}, and you can tell that ${smithy.associatedNPC.name} is well trained; the weapon is more than servicable, and carries a nice heft to it.`
      },
      {
        expertise: 50,
        wealth: 10,
        note: `On the bench lies a ${smithyData.weapons.random()}. Inspecting it, it's of slightly above average quality, and is made well.`
      },
      {
        expertise: 40,
        wealth: 10,
        note: `On the bench is a ${smithyData.weapons.random()}. Inspecting it, it's of slightly below average quality, and has an odd weight to it.`
      },
      {
        expertise: 30,
        wealth: 10,
        note: `On the bench lies a ${smithyData.weapons.random()}. Looking at it, you can see that it's not very well made.`
      },
      {
        expertise: 20,
        wealth: 10,
        note: `On the bench lies a ${smithyData.weapons.random()}. It's a respectable effort for an amateur, but for a professional blacksmith, it's rather poor quality.`
      },
      {
        expertise: 10,
        wealth: 10,
        note: `On the bench lies a ${smithyData.weapons.random()}. It's obviously amateurish. ${smithy.associatedNPC.firstName} moves around the shop, unsure of ${smithy.associatedNPC.himherself}, betraying ${smithy.associatedNPC.hisher} lack of skills.`
      }
    ],
    lookAround: (smithy: Smithy) => [
      {
        cleanliness: 80,
        wealth: 10,
        note: `The smithy is fastidious, with a swept floor and tools stored neatly on the walls. There's a desk in the corner with a piece of parchment showing the current project's measurements, and the materials are neatly stored in bins. Clearly, whatever apprentice has been charged with upkeep of the smithy has taken their job very seriously. You can see that activity in ${smithy.name} is ${smithy.activity}.`
      },
      {
        cleanliness: 70,
        wealth: 10,
        note: `You can see that activity in ${smithy.name} is ${smithy.activity}. The ${smithy.wordNoun} is very tidy, with a swept floor and tools stored neatly on the bench in a row. The forge has been recently cleaned, and there's a surprising lack of grime in the furnace. On the wall are several project specifications nailed, with bins of their respective required materials underneath; it's clearly a well kempt smithy.`
      },
      {
        cleanliness: 60,
        wealth: 10,
        note: `You can see that activity in ${smithy.name} is ${smithy.activity}. The ${smithy.wordNoun} is tidy, with a swept floor and things in some semblance of order. There are sheafs of paper on the bench, with hunks of metal neatly holding each stack down; clearly, they are specifications for different projects, and the materials needed for each of them.`
      },
      {
        cleanliness: 50,
        wealth: 10,
        note: `The smithy is reasonably tidy, with the usual dirt from ${smithy.associatedNPC.firstName}'s current project on the floor. You can see that activity in ${smithy.name}is ${smithy.activity}. There are sheafs of parchment on the bench with measurements and specifications for projects, and there's a bucket of water still sizzling from a recent dousing in the corner.`
      },
      {
        cleanliness: 40,
        wealth: 10,
        note: `The smithy is somewhat messy, with the usual dirt and debris from ${smithy.associatedNPC.firstName}'s current project on the floor; a half-hearted sweeping has been recently made, although all that did was push the dirt around the smithy to dirty up different parts of the floor. You can see that business in ${smithy.name} is ${smithy.activity}.`
      },
      {
        cleanliness: 30,
        wealth: 10,
        note: `The smithy is rather messy, with tools strewn around, and spare hunks of metal littering the floor. You can see several projects lying either abandoned or at least temporarily forgotten, coated in a layer of dust. The bench top is cluttered with hammers, and the anvil itself has a layer of grime on it, in desperate need of a cleaning. You can see that business in ${smithy.name} is ${smithy.activity}.`
      },
      {
        cleanliness: 20,
        wealth: 10,
        note: `The smithy is very messy, with tools and offcuts strewn around, and blackened cobwebs lining the ceiling. There's a layer of dust and grime on the bench top, and the floor has not been swept in quite a while. Business in ${smithy.name} is ${smithy.activity}.`
      },
      {
        cleanliness: 10,
        wealth: 10,
        note: 'The smithy is filthy, with smoke having blackened the walls and a thick layer of grime and dust coating every surface. The smell of various burnt woods, coals, and other things permeates your nostrils, and your boots leave visible footprints in the ash underfoot.'
      }
    ]
  },
  name: {
    adjective: ['Hard', 'Sharp', 'Pointy', 'Well-worn', 'Rusted', 'Shiny', 'Cold', 'Glowing', 'Heated', 'Golden', 'Silvered', 'Bronzed', 'Polished', 'Engraved', 'Jeweled', 'Plated', 'Eternal', 'Long-Lasting', 'Famed'],
    noun: ['Iron', 'Metal', 'Gold', 'Silver', 'Bronze', 'Copper', 'Platinum', 'Electrum', 'Ingot', 'Tongs', 'Pliers', 'Anvil', 'Hammer', 'Forge', 'Bellows', 'Bucket', 'Steam', 'Smoke', 'Chimney', 'Flame', 'Fire', 'Magma', 'Coal', 'Crucible'],
    family: ['son', 'daughter', 'brother', 'sister', 'uncle', 'aunt', 'father', 'friend', 'family', 'employee'],
    rider: ['Shop', 'Blacksmith', 'Fabricator', 'Smith', 'Smithy', 'Farrier', 'Metalsmith', 'Swordsmith']
  },
  blacksmith: {
    profession: 'blacksmith',
    idle: ['talking with a customer', 'picking $associatedNPC.hisher nose', 'playing a card game by $associatedNPC.himherself', 'sharpening a knife', 'stocking the forge with fresh coals', 'lugging a piece of metal to be worked on', 'wiping the sweat from $associatedNPC.hisher brow', 'taking a drink of water', 'sweating profusely from exertion', 're-stocking the shop with new metalcrafts', 'hanging a new looking sword up on the wall', 'leaning back in a chair behind the counter playing with a hammer', 'unpacking a large crate that looks to be full of metal ingots of some sort', 'eyeing up the craftsmanship of a large axe', 'pouring molten metal into a cast in the far back', 'stoking the flames of the forge'],
    greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'sizes you up, before $associatedNPC.heshe nods at you', 'checks you out for just a moment before smiling at you', 'grunts in your direction when you walk in', 'eyes you up and down slowly', 'stops what $associatedNPC.heshe is doing and looks your way']
  },
  owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'chief owner', 'master smith', 'resident smith'],
  weapons: ['dagger', 'long sword', 'short sword', 'morning star', 'mace', 'axe', 'greataxe', 'spear', 'falcheon', 'bastard sword', 'warhammer', 'iron crossbow', 'claymore', 'flail', 'broad sword', 'pike', 'scimitar', 'dart', 'rapier', 'trident', 'halberd', 'glaive', 'lance', 'war pick'],
  mundane: ['plows', 'rabbit traps', 'horseshoes', 'shovels', 'lamps', 'fire pokers', 'axes', 'hammers', 'pliers', 'steel couplings', 'trays', 'wheelbarrows', 'nails', 'pickaxes', 'hatchets', 'locks and keys', 'lockpicks']
}
