import { random } from '../src/random'

export function getShipName () {
  return random([
    'Lantheon',
    'Starchaser',
    'Dryad’s Fury',
    'Black Trident',
    'Corellon’s Arrow',
    'Morkoth',
    'Koalinthas',
    'Sehanine’s Fool',
    'Stormcrow',
    'Vaazrus',
    'Shield of Khahar',
    'Stingray',
    'Sanaj-Rakal',
    'Zhal-Vazir',
    'Griffonwing',
    'Blademark',
    'Golden Libram',
    'Hareth’s Barrel',
    'Kasha’s Wake',
    'Shining Flute',
    'White Feather',
    'Riventide',
    'Moonriser',
    'Gem of Malfier',
    'Dragon’s Glory',
    'Menacer',
    'Scarlet Dagger',
    'Kral-Tajir',
    'Ravager',
    'Kerle’s Drum',
    'Heart of Avandra',
    'Goldraker',
    'Sea Haunt',
    'Storm Maven',
    'Grimbol’s Cutlass',
    'Scimitar',
    'Black Gauntlet',
    'Iron Maiden',
    'Wavecrusher',
    'Hammer of Kavath',
    'Waterblade',
    'Arkhor’s Secret',
    'Dire Gar',
    'Prallmar’s Shadow',
    'Piranha',
    'Devil’s Fork',
    'Tuersyl’s Fist',
    'Daraj-Vzan',
    'Silver Chalice',
    'Demonrudder',
    'Turathi Flame',
    'Storm’s Eye',
    'Tanishar’s Fate',
    'Shard of Night',
    'Triton',
    'Jarak’s Grasp',
    'Nightmare',
    'Harpy’s Lure',
    'Devious',
    'Arazandro’s Bluff',
    'Nbod’s Haul',
    'Astaryntha',
    'Expeditious',
    'Curse of Thuban',
    'Siren’s Kiss',
    'Lonely Witch',
    'Rat’s Nest',
    'Evader',
    'Mistreaver',
    'Ven’r',
    'Vicious',
    'Dream of Melora',
    'Shensari',
    'Damilor',
    'Krimilvin’s Charm',
    'Bloodmonger',
    'Lucky Scrag',
    'Windstriker',
    'Grim Gale',
    'Djinni’s Wish',
    'Flying Eel',
    'Jewel of Irthos',
    'Broken Keel',
    'Javelin',
    'Myrska’s Revenge',
    'Fearsome',
    'Archon’s Hammer',
    'Vendetta',
    'Thunderchaser',
    'Heartless',
    'Shrike',
    'Morak’s Boat',
    'Mar-Turang',
    'Will-o’-wisp',
    'Asha-Naga',
    'Dominant',
    'Shoal Courser',
    'Crescent Moon',
    'Crystal Tear',
    'Kara-Vaji',
    'Shalastar',
    'Roc’s Talon',
    'Wavecarver',
    'Graethan',
    'Rotten Apple',
    'Bharzim’s Victory',
    'Avarice',
    'Farak-Changal',
    'Falling Star',
    'Crimson Knife',
    'Yisek’s Ride',
    'Shara-Vaja',
    'Varalan’s Dweomer',
    'Rangoth',
    'Vostarika',
    'Mirasandra',
    'Second Chance',
    'Redfeather',
    'Maal-Destir',
    'Scorpion',
    'Ghorzaar’s Bane',
    'Moonwatcher',
    'Dragon’s Crown',
    'Dragonhawk',
    'Dancing Sword',
    'Kaveth’s Whisper',
    'Tirah',
    'Phantom Shark',
    'Hjeltia',
    'Satyr',
    'Breyten’s Thrill',
    'Golden Coin',
    'Pearl of Fire',
    'Bhez-Rizma',
    'Fireball',
    'Color Spray',
    'Sea Bear',
    'Prosperous',
    'Summer Rain',
    'Sundowner',
    'Skulldark’s Ire',
    'Skandalor',
    'Zarkanan',
    'Sana-Losi',
    'Wolfshark',
    'Song of Elyndri',
    'Coral Rose',
    'Rune of Halendros',
    'Maelstrom',
    'Shadow Mask',
    'Deep Heathen',
    'Aurora',
    'Rusted Cutlass',
    'Thog’s Maul',
    'Wooden Stake',
    'Hellstrike',
    'Scepter Queen',
    'Prince of Lies',
    'Fang of Tezmyr',
    'White Hart',
    'Floating Cask',
    'Sea Howler',
    'Frostwind',
    'Moonshadow',
    'Melora’s Favor',
    'Dark Queen’s Voice',
    'Chethel’s Ghost',
    'Mad Hag',
    'Tamarion’s Grudge',
    'Raven’s Gamble',
    'Reckoner',
    'Wraithwind',
    'Kalisa Tano',
    'Beholder',
    'Slippery Trickster',
    'Retribution',
    'Whirling Glyph',
    'Lady Rose',
    'Karthang’s Plunder',
    'Good Fortune',
    'Axe of Thard',
    'Black Bow',
    'Quickstrike',
    'Thelandira',
    'Hammergust',
    'Barracuda',
    'Sahandrian’s Quarrel',
    'Feral Knave',
    'Wildwyrm',
    'Shevaya’s Honor',
    'Blackhelm’s Legacy',
    'Wyvern’s Sting',
    'Dragonroar',
    'Kegstaff',
    'Oaken Ranger',
    'Timber Serpent',
    'Desperate Sorceress',
    'Screaming Gull',
    'Greedy Drake',
    'Light of Pjaltr',
    'Fate’s Blessing',
    'Stardancer',
    'Leering Skull',
    'Ebon Moon',
    'Werewolf',
    'Redemption',
    'Zaetchan’s Privilege',
    'Sea Skulk',
    'Savage Swan',
    'Bane’s Breath',
    'Ghorok’s Grail',
    'Emerald Eye',
    'Remorseless',
    'Skiprock',
    'Zaetra',
    'Silverfin',
    'Risen Ghost',
    'Listless',
    'Vortex',
    'Advantage',
    'Autumn Song',
    'Trystan’s Delight',
    'Soaring Manta',
    'Calomaar’s Edge',
    'Saerthzal',
    'Iron Trumpet',
    'Locathah',
    'Demonskull',
    'Arrowhead',
    'Frastain’s Bottle',
    'The Saint Ive',
    'Halygast',
    'La Bon An',
    'La Katerine',
    'The Blythe',
    'Rose',
    'The Flying Squirrel',
    'Golden Lion',
    'Panther',
    'Silent Night'
  ])
}
