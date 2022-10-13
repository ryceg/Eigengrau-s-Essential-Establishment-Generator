type Location = 'smithy' | 'alchemist' | 'temple' | 'generalStore' | 'tavern'

interface Item {
  name: string
  cost: number
  availability: number
  availabilityLocation: Location[]
}

interface FoodItem extends Item {
  dietary: 'omni' | 'carni' | 'veg'
}

interface MiscItem extends Item {
  type: 'tools' | 'weapon' | 'armour' | 'adventuring gear' | 'consumables'
}

export const inventory: (FoodItem | MiscItem)[] = [
  {
    name: 'Dagger',
    cost: 200,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Handaxe',
    cost: 500,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Javelin',
    cost: 50,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'weapon'
  },
  {
    name: 'Light Hammer',
    cost: 200,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Sickle',
    cost: 100,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Spear',
    cost: 100,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Battleaxe',
    cost: 1000,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'weapon'
  },
  {
    name: 'Flail',
    cost: 1000,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'weapon'
  },
  {
    name: 'Glaive',
    cost: 2000,
    availabilityLocation: ['smithy'],
    availability: 3,
    type: 'weapon'
  },
  {
    name: 'Greataxe',
    cost: 3000,
    availabilityLocation: ['smithy'],
    availability: 3,
    type: 'weapon'
  },
  {
    name: 'Greatsword',
    cost: 5000,
    availabilityLocation: ['smithy'],
    availability: 4,
    type: 'weapon'
  },
  {
    name: 'Halberd',
    cost: 2000,
    availabilityLocation: ['smithy'],
    availability: 4,
    type: 'weapon'
  },
  {
    name: 'Lance',
    cost: 1000,
    availabilityLocation: ['smithy'],
    availability: 4,
    type: 'weapon'
  },
  {
    name: 'Longsword',
    cost: 1500,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'weapon'
  },
  {
    name: 'Maul',
    cost: 1000,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'weapon'
  },
  {
    name: 'Morningstar',
    cost: 1500,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'weapon'
  },
  {
    name: 'Pike',
    cost: 500,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Rapier',
    cost: 2500,
    availabilityLocation: ['smithy'],
    availability: 3,
    type: 'weapon'
  },
  {
    name: 'Scimitar',
    cost: 2500,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'weapon'
  },
  {
    name: 'Shortsword',
    cost: 1000,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Arrows (20)',
    cost: 100,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Crossbow Bolts (20)',
    cost: 100,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'weapon'
  },
  {
    name: 'Padded Armour',
    cost: 500,
    availabilityLocation: ['generalStore'],
    availability: 2,
    type: 'armour'
  },
  {
    name: 'Hide Armour',
    cost: 500,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'armour'
  },
  {
    name: 'Leather Armor',
    cost: 2000,
    availabilityLocation: ['generalStore'],
    availability: 2,
    type: 'armour'
  },
  {
    name: 'Studded Leather Armor',
    cost: 4500,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 3,
    type: 'armour'
  },
  {
    name: 'Chain Shirt',
    cost: 5000,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'armour'
  },
  {
    name: 'Scale Mail',
    cost: 5000,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'armour'
  },
  {
    name: 'Breastplate',
    cost: 40000,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'armour'
  },
  {
    name: 'Half Plate',
    cost: 75000,
    availabilityLocation: ['smithy'],
    availability: 4,
    type: 'armour'
  },
  {
    name: 'Ring Mail',
    cost: 3000,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'armour'
  },
  {
    name: 'Chain Mail',
    cost: 7500,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'armour'
  },
  {
    name: 'Splint',
    cost: 20000,
    availabilityLocation: ['smithy'],
    availability: 3,
    type: 'armour'
  },
  {
    name: 'Plate',
    cost: 150000,
    availabilityLocation: ['smithy'],
    availability: 4,
    type: 'armour'
  },
  {
    name: 'Shield',
    cost: 1000,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'armour'
  },
  {
    name: 'Ball Bearings (1000)',
    cost: 100,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: 'Bell',
    cost: 100,
    availabilityLocation: ['smithy', 'temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Block and Tackle',
    cost: 100,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Chain (10 feet)',
    cost: 500,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Caltrops (Bag of 20)',
    cost: 100,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: 'Crowbar',
    cost: 200,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Grappling Hook',
    cost: 200,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 3,
    type: 'adventuring gear'
  },
  {
    name: 'Hammer',
    cost: 100,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Sledge Hammer',
    cost: 200,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Hunting Trap',
    cost: 500,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Lamp',
    cost: 50,
    availabilityLocation: ['smithy', 'temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Lantern, Bullseye',
    cost: 1000,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 4,
    type: 'adventuring gear'
  },
  {
    name: 'Lantern, Hooded',
    cost: 500,
    availabilityLocation: ['smithy', 'temple'],
    availability: 3,
    type: 'adventuring gear'
  },
  {
    name: 'Lock',
    cost: 1000,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Manacles',
    cost: 200,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: 'Mirror, Steel',
    cost: 500,
    availabilityLocation: ['smithy'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: "Pick, Miner's",
    cost: 200,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Piton',
    cost: 5,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Pot, Iron',
    cost: 200,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Ram, Portable',
    cost: 400,
    availabilityLocation: ['smithy'],
    availability: 4,
    type: 'adventuring gear'
  },
  {
    name: 'Spikes, Iron (10)',
    cost: 100,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: "Mason's Tools",
    cost: 1000,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 2,
    type: 'tools'
  },
  {
    name: "Smith's Tools",
    cost: 2000,
    availabilityLocation: ['smithy'],
    availability: 1,
    type: 'tools'
  },
  {
    name: "Tinker's Tools",
    cost: 5000,
    availabilityLocation: ['smithy', 'generalStore'],
    availability: 3,
    type: 'tools'
  },
  {
    name: 'Horn',
    cost: 300,
    availabilityLocation: ['smithy'],
    availability: 4,
    type: 'tools'
  },
  {
    name: 'Club',
    cost: 10,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Dagger',
    cost: 200,
    availabilityLocation: ['generalStore', 'smithy'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Greatclub',
    cost: 20,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Handaxe',
    cost: 500,
    availabilityLocation: ['generalStore', 'smithy'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Light Hammer',
    cost: 200,
    availabilityLocation: ['generalStore', 'smithy'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Quarterstaff',
    cost: 20,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Light Crossbow',
    cost: 2500,
    availabilityLocation: ['generalStore'],
    availability: 2,
    type: 'weapon'
  },
  {
    name: 'Dart',
    cost: 5,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Shortbow',
    cost: 2500,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Sling',
    cost: 10,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Whip',
    cost: 200,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Hand Crossbow',
    cost: 7500,
    availabilityLocation: ['generalStore'],
    availability: 3,
    type: 'weapon'
  },
  {
    name: 'Heavy Crossbow',
    cost: 5000,
    availabilityLocation: ['generalStore'],
    availability: 4,
    type: 'weapon'
  },
  {
    name: 'Longbow',
    cost: 5000,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'weapon'
  },
  {
    name: 'Backpack',
    cost: 200,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Bedroll',
    cost: 100,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Blanket',
    cost: 50,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Block and Tackle',
    cost: 100,
    availabilityLocation: ['generalStore', 'smithy'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Book',
    cost: 250,
    availabilityLocation: ['generalStore', 'temple'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: 'Bottle, Glass',
    cost: 200,
    availabilityLocation: ['generalStore', 'alchemist'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Bucket',
    cost: 5,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Candle',
    cost: 1,
    availabilityLocation: ['generalStore', 'temple'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: 'Case, Crossbow Bolt',
    cost: 500,
    availabilityLocation: ['generalStore'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: 'Case, Map or Scroll',
    cost: 100,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Chain, 10 feet',
    cost: 500,
    availabilityLocation: ['generalStore', 'smithy'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Chest',
    cost: 500,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Climbers Kit',
    cost: 2500,
    availabilityLocation: ['generalStore'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: "Clothes, Traveler's",
    cost: 200,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Component Pouch',
    cost: 2500,
    availabilityLocation: ['generalStore', 'alchemist'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: 'Fishing Tackle',
    cost: 100,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Flask or tankard',
    cost: 2,
    availabilityLocation: ['generalStore', 'alchemist', 'temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Hourglass',
    cost: 2500,
    availabilityLocation: ['generalStore'],
    availability: 3,
    type: 'adventuring gear'
  },
  {
    name: 'Hunting Trap',
    cost: 500,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Ink (1 ounce)',
    cost: 1000,
    availabilityLocation: ['generalStore', 'alchemist', 'temple'],
    availability: 3,
    type: 'adventuring gear'
  },
  {
    name: 'Ink Pen',
    cost: 2,
    availabilityLocation: ['generalStore', 'temple'],
    availability: 3,
    type: 'adventuring gear'
  },
  {
    name: 'Ladder, 10ft.',
    cost: 10,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Lantern, Bullseye',
    cost: 1000,
    availabilityLocation: ['generalStore', 'smithy'],
    availability: 3,
    type: 'adventuring gear'
  },
  {
    name: 'Lantern, Hooded',
    cost: 500,
    availabilityLocation: ['generalStore', 'smithy'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Magnifying Glass',
    cost: 10000,
    availabilityLocation: ['generalStore'],
    availability: 3,
    type: 'adventuring gear'
  },
  {
    name: 'Mess Kit',
    cost: 20,
    availabilityLocation: ['generalStore'],
    availability: 3,
    type: 'adventuring gear'
  },
  {
    name: 'Steel Mirror',
    cost: 500,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Oil, flask',
    cost: 10,
    availabilityLocation: ['generalStore', 'alchemist', 'temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Paper (one sheet)',
    cost: 20,
    availabilityLocation: ['generalStore', 'temple'],
    availability: 4,
    type: 'adventuring gear'
  },
  {
    name: 'Parchment (one sheet)',
    cost: 10,
    availabilityLocation: ['generalStore', 'temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Pole (10 ft.)',
    cost: 5,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Pouch',
    cost: 50,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Quiver',
    cost: 500,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Rope, Hemp (50ft)',
    cost: 100,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Rope, Silk (50ft)',
    cost: 1000,
    availabilityLocation: ['generalStore'],
    availability: 4,
    type: 'adventuring gear'
  },
  {
    name: 'Sack',
    cost: 1,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Shovel',
    cost: 200,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Signal whistle',
    cost: 5,
    availabilityLocation: ['generalStore'],
    availability: 3,
    type: 'adventuring gear'
  },
  {
    name: 'Spikes, Iron (10)',
    cost: 100,
    availabilityLocation: ['generalStore', 'smithy'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Spyglass',
    cost: 100000,
    availabilityLocation: ['generalStore'],
    availability: 4,
    type: 'adventuring gear'
  },
  {
    name: 'Two person tent',
    cost: 200,
    availabilityLocation: ['generalStore'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: 'Tinderbox',
    cost: 50,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Torch',
    cost: 1,
    availabilityLocation: ['generalStore', 'temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Vial',
    cost: 100,
    availabilityLocation: ['generalStore', 'alchemist', 'temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Waterskin',
    cost: 20,
    availabilityLocation: ['generalStore', 'temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: "Cartographer's Tools",
    cost: 1500,
    availabilityLocation: ['generalStore'],
    availability: 2,
    type: 'tools'
  },
  {
    name: "Calligrapher's Tools",
    cost: 1000,
    availabilityLocation: ['temple'],
    availability: 2,
    type: 'tools'
  },
  {
    name: 'Herbalism Kit',
    cost: 500,
    availabilityLocation: ['generalStore', 'temple'],
    availability: 2,
    type: 'tools'
  },
  {
    name: "Healer's Kit",
    cost: 500,
    availabilityLocation: ['generalStore', 'alchemist', 'temple'],
    availability: 2,
    type: 'tools'
  },
  {
    name: "Navigator's Tools",
    cost: 2500,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'tools'
  },
  {
    name: "Painter's Supplies",
    cost: 1000,
    availabilityLocation: ['generalStore'],
    availability: 3,
    type: 'tools'
  },
  {
    name: "Potter's Tools",
    cost: 1000,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'tools'
  },
  {
    name: 'Dice Set',
    cost: 10,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'tools'
  },
  {
    name: 'Playing Card Set',
    cost: 50,
    availabilityLocation: ['generalStore'],
    availability: 1,
    type: 'tools'
  },
  {
    name: 'Flute',
    cost: 200,
    availabilityLocation: ['temple'],
    availability: 3,
    type: 'tools'
  },
  {
    name: 'Lyre',
    cost: 3000,
    availabilityLocation: ['temple'],
    availability: 3,
    type: 'tools'
  },
  {
    name: 'Horn',
    cost: 300,
    availabilityLocation: ['temple'],
    availability: 3,
    type: 'tools'
  },
  {
    name: 'Poison, Basic',
    cost: 10000,
    availabilityLocation: ['alchemist'],
    availability: 1,
    type: 'consumables'
  },
  {
    name: 'Potion, Common',
    cost: 50000,
    availabilityLocation: ['alchemist'],
    availability: 1,
    type: 'consumables'
  },
  {
    name: 'Potion, Uncommon',
    cost: 250000,
    availabilityLocation: ['alchemist'],
    availability: 1,
    type: 'consumables'
  },
  {
    name: 'Potion, Rare',
    cost: 2500000,
    availabilityLocation: ['alchemist'],
    availability: 3,
    type: 'consumables'
  },
  {
    name: 'Potion of Healing',
    cost: 5000,
    availabilityLocation: ['alchemist', 'temple'],
    availability: 1,
    type: 'consumables'
  },
  {
    name: 'Potion of Poison',
    cost: 10000,
    availabilityLocation: ['alchemist'],
    availability: 2,
    type: 'consumables'
  },
  {
    name: 'Potion of Health',
    cost: 12000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Fire Breath',
    cost: 150000,
    availabilityLocation: ['alchemist'],
    availability: 3,
    type: 'consumables'
  },
  {
    name: 'Potion of Greater Healing',
    cost: 15000,
    availabilityLocation: ['alchemist'],
    availability: 2,
    type: 'consumables'
  },
  {
    name: 'Potion of Climbing',
    cost: 18000,
    availabilityLocation: ['alchemist'],
    availability: 1,
    type: 'consumables'
  },
  {
    name: 'Potion of Heroism',
    cost: 18000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Invisibility',
    cost: 18000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Mind Reading',
    cost: 18000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Water Breathing',
    cost: 18000,
    availabilityLocation: ['alchemist'],
    availability: 2,
    type: 'consumables'
  },
  {
    name: 'Potion of Animal Friendship',
    cost: 20000,
    availabilityLocation: ['alchemist'],
    availability: 3,
    type: 'consumables'
  },
  {
    name: 'Potion of Diminution',
    cost: 27000,
    availability: 4,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Growth',
    cost: 27000,
    availability: 3,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Gaseous Form',
    cost: 30000,
    availability: 4,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Resistance',
    cost: 30000,
    availability: 3,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Speed',
    cost: 40000,
    availability: 4,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Superior Healing',
    cost: 45000,
    availability: 3,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Flying',
    cost: 50000,
    availability: 4,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Clairvoyance',
    cost: 96000,
    availability: 4,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Vitality',
    cost: 96000,
    availability: 4,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Supreme Healing',
    cost: 135000,
    availability: 4,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Invulnerability',
    cost: 384000,
    availability: 4,
    availabilityLocation: ['alchemist'],
    type: 'consumables'
  },
  {
    name: 'Potion of Diminution',
    cost: 27000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Growth',
    cost: 27000,
    availabilityLocation: ['alchemist'],
    availability: 3,
    type: 'consumables'
  },
  {
    name: 'Potion of Gaseous Form',
    cost: 30000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Resistance',
    cost: 30000,
    availabilityLocation: ['alchemist'],
    availability: 3,
    type: 'consumables'
  },
  {
    name: 'Potion of Speed',
    cost: 40000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Superior Healing',
    cost: 45000,
    availabilityLocation: ['alchemist'],
    availability: 3,
    type: 'consumables'
  },
  {
    name: 'Potion of Flying',
    cost: 50000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Clairvoyance',
    cost: 96000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Vitality',
    cost: 96000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Supreme Healing',
    cost: 135000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Potion of Invulnerability',
    cost: 384000,
    availabilityLocation: ['alchemist'],
    availability: 4,
    type: 'consumables'
  },
  {
    name: 'Jug',
    cost: 2,
    availabilityLocation: ['alchemist'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Anti-toxin (vial)',
    cost: 5000,
    availabilityLocation: ['alchemist'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: "Brewer's Supplies",
    cost: 2000,
    availabilityLocation: ['alchemist'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Acid',
    cost: 2500,
    availabilityLocation: ['alchemist'],
    availability: 2,
    type: 'adventuring gear'
  },
  {
    name: "Poisoner's Kit",
    cost: 50000,
    availabilityLocation: ['alchemist'],
    availability: 2,
    type: 'tools'
  },
  {
    name: "Alchemist's Supplies",
    cost: 50000,
    availabilityLocation: ['alchemist'],
    availability: 2,
    type: 'tools'
  },
  {
    name: "Cook's Utensils",
    cost: 20,
    availabilityLocation: ['alchemist'],
    availability: 3,
    type: 'tools'
  },
  {
    name: "Alchemist's Fire (flask)",
    cost: 5000,
    availabilityLocation: ['alchemist'],
    availability: 3,
    type: 'adventuring gear'
  },
  {
    name: 'Perfume (vial)',
    cost: 500,
    availabilityLocation: ['alchemist', 'temple'],
    availability: 4,
    type: 'adventuring gear'
  },
  {
    name: "Alm's box",
    cost: 500,
    availabilityLocation: ['temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Scripture Book',
    cost: 2500,
    availabilityLocation: ['temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Censer',
    cost: 500,
    availabilityLocation: ['temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Chalk (one piece)',
    cost: 1,
    availabilityLocation: ['temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Holy symbol',
    cost: 500,
    availabilityLocation: ['temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Flask of Holy Water',
    cost: 2500,
    availabilityLocation: ['temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Incense (1 block)',
    cost: 1,
    availabilityLocation: ['temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Rations (1 day)',
    cost: 50,
    availabilityLocation: ['temple'],
    availability: 1,
    type: 'adventuring gear'
  },
  {
    name: 'Crisped Worm and Potatoes',
    cost: 3,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'omni'
  },
  {
    name: 'Frogs on Skewers',
    cost: 4,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'carni'
  },
  {
    name: 'Green Chili Stew',
    cost: 3,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Grilled Snake and Macadamia',
    cost: 3,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'carni'
  },
  {
    name: 'Humble Pie (tripe or cow heel)',
    cost: 2,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Lizard Gruel with Nutbread',
    cost: 3,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'carni'
  },
  {
    name: 'Plain porridge',
    cost: 2,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Spiced porridge',
    cost: 3,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Pot of cured meats',
    cost: 4,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'carni'
  },
  {
    name: 'Bacon and Eggs',
    cost: 6,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'carni'
  },
  {
    name: 'Bread and cheese',
    cost: 3,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Vegetable Stew',
    cost: 4,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Eggs on toast',
    cost: 5,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Honeybread',
    cost: 3,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Greenspear',
    cost: 3,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Baked potatoes',
    cost: 3,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Catch of the Day fish, served with lemon',
    availabilityLocation: ['tavern'],
    cost: 11,
    availability: 2,
    dietary: 'carni'
  },
  {
    name: 'Barbecued Gopher Legs',
    cost: 6,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'carni'
  },
  {
    name: 'Bog-Beetle Dumplings',
    cost: 4,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'carni'
  },
  {
    name: 'Bread-bowl stew',
    cost: 5,
    availabilityLocation: ['tavern'],
    availability: 2,
    dietary: 'veg'
  },
  {
    name: 'Leg of Mutton and eggs',
    cost: 6,
    availabilityLocation: ['tavern'],
    availability: 2,
    dietary: 'carni'
  },
  {
    name: 'Mushroom Stew with Bread',
    cost: 5,
    availabilityLocation: ['tavern'],
    availability: 2,
    dietary: 'veg'
  },
  {
    name: 'Rabbit and Baked Pumpkin',
    cost: 6,
    availabilityLocation: ['tavern'],
    availability: 2,
    dietary: 'omni'
  },
  {
    name: 'Roseapple pie',
    cost: 3,
    availabilityLocation: ['tavern'],
    availability: 1,
    dietary: 'veg'
  },
  {
    name: 'Squash and Fish Soup',
    cost: 8,
    availabilityLocation: ['tavern'],
    availability: 2,
    dietary: 'omni'
  },
  {
    name: 'Broiled Salmon and Potatoes',
    cost: 30,
    availabilityLocation: ['tavern'],
    availability: 2,
    dietary: 'omni'
  },
  {
    name: 'Cheese Pie and Onion Soup',
    cost: 25,
    availabilityLocation: ['tavern'],
    availability: 2,
    dietary: 'veg'
  },
  {
    name: 'Grilled Wild Boar Chops',
    cost: 35,
    availabilityLocation: ['tavern'],
    availability: 2,
    dietary: 'carni'
  },
  {
    name: 'Baked Loin of Pork with Gravy',
    cost: 56,
    availabilityLocation: ['tavern'],
    availability: 3,
    dietary: 'carni'
  },
  {
    name: 'Beef Steak and Kidney Pie',
    cost: 78,
    availabilityLocation: ['tavern'],
    availability: 3,
    dietary: 'carni'
  },
  {
    name: 'Pecan Pie',
    cost: 35,
    availabilityLocation: ['tavern'],
    availability: 3,
    dietary: 'veg'
  },
  {
    name: 'Buffaloaf and Honeyed Corn',
    cost: 70,
    availabilityLocation: ['tavern'],
    availability: 3,
    dietary: 'carni'
  },
  {
    name: 'Elven Bread',
    cost: 60,
    availabilityLocation: ['tavern'],
    availability: 3,
    dietary: 'veg'
  },
  {
    name: 'Honey Braised Boar Ribs',
    cost: 85,
    availabilityLocation: ['tavern'],
    availability: 3,
    dietary: 'carni'
  },
  {
    name: 'Pork Chop and Curds',
    cost: 92,
    availabilityLocation: ['tavern'],
    availability: 3,
    dietary: 'carni'
  },
  {
    name: 'Rack of Lamb Platter',
    cost: 95,
    availabilityLocation: ['tavern'],
    availability: 3,
    dietary: 'carni'
  },
  {
    name: 'Barbecued Tiger Fish and Papaya',
    cost: 200,
    availabilityLocation: ['tavern'],
    availability: 4,
    dietary: 'omni'
  }
]
