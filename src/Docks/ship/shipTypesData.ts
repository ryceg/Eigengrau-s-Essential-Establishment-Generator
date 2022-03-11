interface ShipType {
  masts(): number
  rigging: string,
  length(): number,
  purpose: string[],
  hasOars: boolean,
  crewMen(): number
}

export const shipTypesData: Record<string, ShipType> = {
  'caravel': {
    masts: () => random(2, 3),
    rigging: 'lateen',
    length: () => random(468, 708),
    purpose: ['sailing', 'cargo', 'pirate'],
    hasOars: false,
    crewMen: () => random(20, 30)
  },
  'rowboat': {
    masts: () => 0,
    rigging: 'no',
    length: () => random(180, 240),
    purpose: ['fishing'],
    hasOars: true,
    crewMen: () => random(1, 3)
  },
  'dory': {
    masts: () => 0,
    rigging: 'no',
    length: () => random(180, 400),
    purpose: ['fishing'],
    hasOars: true,
    crewMen: () => random(1, 10)
  },
  'drifter': {
    masts: () => 0,
    rigging: 'no',
    length: () => random(180, 400),
    purpose: ['fishing'],
    hasOars: true,
    crewMen: () => random(1, 10)
  },
  'herring buss': {
    masts: () => random(2, 3),
    rigging: 'square',
    length: () => random(180, 400),
    purpose: ['fishing'],
    hasOars: false,
    crewMen: () => random(5, 25)
  },
  'carrack': {
    masts: () => random(3, 4),
    rigging: 'square',
    length: () => random(800, 920),
    purpose: ['sailing', 'cargo', 'navy', 'merchant'],
    hasOars: true,
    crewMen: () => random(30, 40)
  },
  'crayer': {
    masts: () => 3,
    rigging: 'square',
    length: () => random(468, 708),
    purpose: ['cargo', 'merchant'],
    hasOars: true,
    crewMen: () => random(30, 40)
  },
  'hoy': {
    masts: () => 1,
    rigging: 'square',
    length: () => random(400, 460),
    purpose: ['cargo'],
    hasOars: true,
    crewMen: () => random(30, 40)
  },
  'picard': {
    masts: () => 1,
    rigging: 'square',
    length: () => random(150, 240),
    purpose: ['cargo'],
    hasOars: true,
    crewMen: () => random(5, 20)
  },
  'galley': {
    masts: () => 3,
    rigging: 'lateen',
    length: () => random(3800, 4200),
    purpose: ['navy', "adventurer's", 'pirate'],
    hasOars: true,
    crewMen: () => random(80, 120)
  },
  'longship': {
    masts: () => 1,
    rigging: 'square',
    length: () => random(1600, 1800),
    purpose: ['navy', 'cargo', 'transport'],
    hasOars: true,
    crewMen: () => random(80, 120)
  },
  'balinger': {
    masts: () => 1,
    rigging: 'square',
    length: () => random(800, 1200),
    purpose: ['cargo', 'fishing', 'transport'],
    hasOars: true,
    crewMen: () => random(30, 80)
  },
  'frigate': {
    masts: () => 3,
    rigging: 'square',
    length: () => random(1500, 1700),
    purpose: ['navy', 'cargo', 'pirate', "adventurer's"],
    hasOars: true,
    crewMen: () => random(30, 40)
  },
  'galleon': {
    masts: () => 3,
    rigging: 'lateen',
    length: () => random(3800, 4200),
    purpose: ['navy', 'cargo', 'pirate', 'merchant', "adventurer's"],
    hasOars: true,
    crewMen: () => random(80, 120)
  },
  'galleass': {
    masts: () => 3,
    rigging: 'square',
    length: () => random(3800, 4200),
    purpose: ['cargo', 'transport', 'navy', 'pirate', "adventurer's"],
    hasOars: true,
    crewMen: () => random(80, 140)
  },
  'nef': {
    masts: () => 3,
    rigging: 'square',
    length: () => random(2400, 2800),
    purpose: ['cargo', 'exploration'],
    hasOars: true,
    crewMen: () => random(40, 120)
  },
  'barque': {
    masts: () => random(3, 5),
    rigging: 'square',
    length: () => random(3000, 5000),
    purpose: ['cargo', 'transport', "explorer's", 'pirate'],
    hasOars: true,
    crewMen: () => random(65, 120)
  }
}
