import { RaceName } from '../npc-generation/raceTraits'
import { PartialRecord, WeightRecord } from '../types'
import { PoliticalSource } from './politicalSourceData'
import { TownType, EconomicIdeology } from './townData'
import { TownRolls } from './_common'

export const townTypeData: {
  [key in TownType]: {
    demographics(): {
      probability: number
      popPercentages: Partial<Record<RaceName, number>>
    }[]
    ideologies: {
      economicIdeology: WeightRecord<EconomicIdeology>
      politicalSource: WeightRecord<PoliticalSource>
    }
    population(): number
    startFactionsNumber(): number
    roadDuplication: number
    modifiers: PartialRecord<TownRolls, number>
  }
} = {
  // This sets socio-economics for the different sized towns. It sets up the potential demographics, economic system, political system, number of factions, and other modifiers.
  hamlet: {
    demographics: () => [
      {
        // demographics must be in alphabetical order until I fix it to not be buggy
        probability: 50,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(1, 5),
          'gnome': lib.randomFloat(1, 5),
          'goblin': lib.randomFloat(0, 0.5),
          'half-elf': lib.randomFloat(1, 5),
          'half-orc': lib.randomFloat(1, 3),
          'halfling': lib.randomFloat(5, 10),
          'human': lib.randomFloat(85, 95),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 2),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(1, 5)
        }
      },
      {
        probability: 5,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(1, 5),
          'gnome': lib.randomFloat(1, 5),
          'goblin': lib.randomFloat(10, 15),
          'half-elf': lib.randomFloat(1, 5),
          'half-orc': lib.randomFloat(85, 95),
          'halfling': lib.randomFloat(5, 10),
          'human': lib.randomFloat(5, 15),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 2),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(1, 5)
        }
      },
      {
        probability: 2,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 5),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(1, 5),
          'gnome': lib.randomFloat(1, 5),
          'goblin': lib.randomFloat(1, 5),
          'half-elf': lib.randomFloat(1, 5),
          'half-orc': lib.randomFloat(5, 10),
          'halfling': lib.randomFloat(5, 10),
          'human': lib.randomFloat(5, 15),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(3, 10),
          'ratfolk': lib.randomFloat(1, 5),
          'kitsune': lib.randomFloat(1, 5)
        }
      },
      {
        probability: 7,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(1, 5),
          'gnome': lib.randomFloat(1, 5),
          'goblin': lib.randomFloat(0, 1),
          'half-elf': lib.randomFloat(1, 5),
          'half-orc': lib.randomFloat(1, 3),
          'halfling': lib.randomFloat(70, 90),
          'human': lib.randomFloat(5, 15),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 2),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(1, 5)
        }
      },
      {
        probability: 10,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(70, 80),
          'gnome': lib.randomFloat(1, 5),
          'goblin': lib.randomFloat(1, 2),
          'half-elf': lib.randomFloat(20, 40),
          'half-orc': lib.randomFloat(1, 2),
          'halfling': lib.randomFloat(5, 15),
          'human': lib.randomFloat(5, 15),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 2),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(70, 80)
        }
      },
      {
        probability: 10,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(80, 90),
          'elf': lib.randomFloat(1, 5),
          'gnome': lib.randomFloat(25, 35),
          'goblin': lib.randomFloat(1, 5),
          'half-elf': lib.randomFloat(1, 5),
          'half-orc': lib.randomFloat(1, 3),
          'halfling': lib.randomFloat(5, 10),
          'human': lib.randomFloat(5, 15),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 2),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(1, 5)
        }
      }
    ],
    ideologies: {
      economicIdeology: {
        feudalism: 50,
        capitalism: 10,
        syndicalism: 3,
        communism: 2,
        primitivism: 10
      },
      politicalSource: {
        'absolute monarchy': 2,
        'republic': 50,
        'anarchy': 10,
        'constitutional monarchy': 1
      }
    },
    population: () => {
      return lib.lib.random([
        lib.random(30, 150),
        lib.random(100, 300),
        lib.random(450, 800),
        lib.random(500, 700),
        lib.random(800, 950),
        lib.random(900, 999)
      ])
    },
    startFactionsNumber: () => lib.lib.random([1, 1, 1, 1, 1, 2]),
    // roadDuplication: d100 of whether to create a new road (new one if under).
    roadDuplication: 40,
    modifiers: {
      wealth: -20,
      reputation: -40,
      sin: -25,
      diversity: -20
    }
  },
  village: {
    demographics: () => [
      {
        // demographics must be in alphabetical order until I fix it to not be buggy
        probability: 50,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(1, 10),
          'gnome': lib.randomFloat(1, 10),
          'goblin': lib.randomFloat(1, 5),
          'half-elf': lib.randomFloat(1, 10),
          'half-orc': lib.randomFloat(1, 5),
          'halfling': lib.randomFloat(5, 10),
          'human': lib.randomFloat(85, 95),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 2),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(1, 10)
        }
      },
      {
        probability: 5,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 5),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(1, 3),
          'gnome': lib.randomFloat(1, 5),
          'goblin': lib.randomFloat(10, 20),
          'half-elf': lib.randomFloat(1, 3),
          'half-orc': lib.randomFloat(85, 95),
          'halfling': lib.randomFloat(5, 7),
          'human': lib.randomFloat(8, 15),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 5),
          'ratfolk': lib.randomFloat(1, 5),
          'kitsune': lib.randomFloat(1, 3)
        }
      },
      {
        probability: 2,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 5),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(1, 5),
          'gnome': lib.randomFloat(1, 5),
          'goblin': lib.randomFloat(1, 5),
          'half-elf': lib.randomFloat(1, 5),
          'half-orc': lib.randomFloat(5, 10),
          'halfling': lib.randomFloat(5, 10),
          'human': lib.randomFloat(5, 20),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(3, 10),
          'ratfolk': lib.randomFloat(1, 5),
          'kitsune': lib.randomFloat(1, 5)
        }
      },
      {
        probability: 7,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(1, 5),
          'gnome': lib.randomFloat(5, 10),
          'goblin': lib.randomFloat(0, 1),
          'half-elf': lib.randomFloat(1, 10),
          'half-orc': lib.randomFloat(1, 4),
          'halfling': lib.randomFloat(70, 90),
          'human': lib.randomFloat(5, 15),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 4),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(1, 5)
        }
      },
      {
        probability: 10,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 4),
          'dwarf': lib.randomFloat(3, 10),
          'elf': lib.randomFloat(70, 80),
          'gnome': lib.randomFloat(2, 7),
          'goblin': lib.randomFloat(1, 2),
          'half-elf': lib.randomFloat(20, 40),
          'half-orc': lib.randomFloat(1, 2),
          'halfling': lib.randomFloat(5, 15),
          'human': lib.randomFloat(5, 15),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 3),
          'ratfolk': lib.randomFloat(1, 4),
          'kitsune': lib.randomFloat(70, 80)
        }
      },
      {
        probability: 10,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(80, 90),
          'elf': lib.randomFloat(1, 7),
          'gnome': lib.randomFloat(25, 35),
          'goblin': lib.randomFloat(1, 2),
          'half-elf': lib.randomFloat(1, 6),
          'half-orc': lib.randomFloat(1, 3),
          'halfling': lib.randomFloat(5, 10),
          'human': lib.randomFloat(10, 15),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 3),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(80, 90)
        }
      }
    ],
    ideologies: {
      economicIdeology: {
        feudalism: 50,
        capitalism: 10,
        syndicalism: 3,
        communism: 2,
        primitivism: 5
      },
      politicalSource: {
        'absolute monarchy': 2,
        'republic': 50,
        'anarchy': 10,
        'constitutional monarchy': 1
      }
    },
    population: () => {
      return lib.lib.random([
        lib.random(1000, 1200),
        lib.random(1000, 1300),
        lib.random(1400, 1800),
        lib.random(1700, 2300),
        lib.random(2000, 3000),
        lib.random(2500, 3000)
      ])
    },
    startFactionsNumber: () => lib.lib.random([1, 1, 1, 2, 2, 2]),
    roadDuplication: 50,
    modifiers: {
      wealth: -10,
      reputation: -20,
      sin: -15,
      diversity: 10
    }
  },
  town: {
    demographics: () => [
      {
        // demographics must be in alphabetical order until I fix it to not be buggy
        probability: 50,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(1, 15),
          'elf': lib.randomFloat(1, 10),
          'gnome': lib.randomFloat(1, 10),
          'goblin': lib.randomFloat(1, 2),
          'half-elf': lib.randomFloat(3, 15),
          'half-orc': lib.randomFloat(1, 5),
          'halfling': lib.randomFloat(5, 10),
          'human': lib.randomFloat(75, 95),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 2),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(1, 10)
        }
      },
      {
        probability: 3,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 7),
          'dwarf': lib.randomFloat(5, 15),
          'elf': lib.randomFloat(1, 3),
          'gnome': lib.randomFloat(1, 10),
          'goblin': lib.randomFloat(10, 25),
          'half-elf': lib.randomFloat(1, 3),
          'half-orc': lib.randomFloat(85, 95),
          'halfling': lib.randomFloat(5, 7),
          'human': lib.randomFloat(8, 25),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(4, 10),
          'ratfolk': lib.randomFloat(1, 7),
          'kitsune': lib.randomFloat(1, 3)
        }
      },
      {
        probability: 2,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 5),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(1, 5),
          'gnome': lib.randomFloat(1, 5),
          'goblin': lib.randomFloat(1, 5),
          'half-elf': lib.randomFloat(1, 5),
          'half-orc': lib.randomFloat(5, 10),
          'halfling': lib.randomFloat(5, 10),
          'human': lib.randomFloat(5, 20),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(3, 10),
          'ratfolk': lib.randomFloat(1, 5),
          'kitsune': lib.randomFloat(1, 5)
        }
      },
      {
        probability: 7,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(5, 20),
          'gnome': lib.randomFloat(5, 15),
          'goblin': lib.randomFloat(1, 2),
          'half-elf': lib.randomFloat(1, 15),
          'half-orc': lib.randomFloat(1, 4),
          'halfling': lib.randomFloat(50, 80),
          'human': lib.randomFloat(25, 40),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 7),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(5, 20)
        }
      },
      {
        probability: 10,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 4),
          'dwarf': lib.randomFloat(3, 10),
          'elf': lib.randomFloat(70, 80),
          'gnome': lib.randomFloat(2, 7),
          'goblin': lib.randomFloat(1, 2),
          'half-elf': lib.randomFloat(10, 30),
          'half-orc': lib.randomFloat(1, 2),
          'halfling': lib.randomFloat(5, 20),
          'human': lib.randomFloat(5, 15),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 3),
          'ratfolk': lib.randomFloat(1, 4),
          'kitsune': lib.randomFloat(70, 80)
        }
      },
      {
        probability: 10,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(80, 90),
          'elf': lib.randomFloat(1, 7),
          'gnome': lib.randomFloat(25, 35),
          'goblin': lib.randomFloat(1, 2),
          'half-elf': lib.randomFloat(1, 6),
          'half-orc': lib.randomFloat(1, 3),
          'halfling': lib.randomFloat(3, 7),
          'human': lib.randomFloat(10, 20),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 3),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(1, 7)
        }
      }
    ],
    ideologies: {
      economicIdeology: {
        feudalism: 40,
        capitalism: 20,
        syndicalism: 5,
        communism: 3,
        primitivism: 2
      },
      politicalSource: {
        'absolute monarchy': 2,
        'republic': 50,
        'anarchy': 10,
        'constitutional monarchy': 1
      }
    },
    population: () => {
      return lib.lib.random([
        lib.random(3000, 3300),
        lib.random(3200, 3400),
        lib.random(3000, 4500),
        lib.random(3700, 4200),
        lib.random(4000, 5300),
        lib.random(5000, 5500),
        lib.random(5500, 6000)
      ])
    },
    startFactionsNumber: () => lib.lib.random([1, 1, 2, 2, 2, 3, 3]),
    roadDuplication: 60,
    modifiers: {
      wealth: 15,
      reputation: 5,
      sin: 5,
      diversity: 15
    }
  },
  city: {
    demographics: () => [
      {
        // demographics must be in alphabetical order until I fix it to not be buggy
        probability: 50,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 4),
          'dwarf': lib.randomFloat(1, 20),
          'elf': lib.randomFloat(1, 15),
          'gnome': lib.randomFloat(1, 15),
          'goblin': lib.randomFloat(1, 5),
          'half-elf': lib.randomFloat(1, 20),
          'half-orc': lib.randomFloat(1, 10),
          'halfling': lib.randomFloat(5, 15),
          'human': lib.randomFloat(70, 95),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 2),
          'ratfolk': lib.randomFloat(1, 4),
          'kitsune': lib.randomFloat(1, 15)
        }
      },
      {
        probability: 1,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 7),
          'dwarf': lib.randomFloat(5, 15),
          'elf': lib.randomFloat(1, 3),
          'gnome': lib.randomFloat(1, 10),
          'goblin': lib.randomFloat(10, 25),
          'half-elf': lib.randomFloat(1, 3),
          'half-orc': lib.randomFloat(85, 95),
          'halfling': lib.randomFloat(5, 7),
          'human': lib.randomFloat(8, 25),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(4, 10),
          'ratfolk': lib.randomFloat(1, 7),
          'kitsune': lib.randomFloat(1, 3)
        }
      },
      {
        probability: 2,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 5),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(1, 5),
          'gnome': lib.randomFloat(1, 5),
          'goblin': lib.randomFloat(1, 5),
          'half-elf': lib.randomFloat(1, 5),
          'half-orc': lib.randomFloat(5, 10),
          'halfling': lib.randomFloat(5, 10),
          'human': lib.randomFloat(5, 20),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(3, 10),
          'ratfolk': lib.randomFloat(1, 5),
          'kitsune': lib.randomFloat(1, 5)
        }
      },
      {
        probability: 3,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 2),
          'dwarf': lib.randomFloat(1, 10),
          'elf': lib.randomFloat(5, 30),
          'gnome': lib.randomFloat(5, 15),
          'goblin': lib.randomFloat(1, 2),
          'half-elf': lib.randomFloat(1, 25),
          'half-orc': lib.randomFloat(1, 4),
          'halfling': lib.randomFloat(50, 60),
          'human': lib.randomFloat(25, 40),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 10),
          'ratfolk': lib.randomFloat(1, 2),
          'kitsune': lib.randomFloat(5, 30)
        }
      },
      {
        probability: 15,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 5),
          'dwarf': lib.randomFloat(3, 10),
          'elf': lib.randomFloat(70, 95),
          'gnome': lib.randomFloat(2, 7),
          'goblin': lib.randomFloat(1, 2),
          'half-elf': lib.randomFloat(10, 25),
          'half-orc': lib.randomFloat(1, 2),
          'halfling': lib.randomFloat(5, 15),
          'human': lib.randomFloat(5, 25),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 5),
          'ratfolk': lib.randomFloat(1, 5),
          'kitsune': lib.randomFloat(70, 95)
        }
      },
      {
        probability: 15,
        popPercentages: {
          'dragonborn': lib.randomFloat(1, 3),
          'dwarf': lib.randomFloat(80, 95),
          'elf': lib.randomFloat(1, 4),
          'gnome': lib.randomFloat(25, 35),
          'goblin': lib.randomFloat(1, 2),
          'half-elf': lib.randomFloat(1, 6),
          'half-orc': lib.randomFloat(1, 5),
          'halfling': lib.randomFloat(3, 7),
          'human': lib.randomFloat(10, 25),
          'lizardfolk': lib.randomFloat(1, 2),
          'tiefling': lib.randomFloat(1, 3),
          'ratfolk': lib.randomFloat(1, 3),
          'kitsune': lib.randomFloat(1, 4)
        }
      }
    ],
    ideologies: {
      economicIdeology: {
        feudalism: 20,
        capitalism: 30,
        syndicalism: 3,
        communism: 1,
        primitivism: 1
      },
      politicalSource: {
        'absolute monarchy': 70,
        'republic': 50,
        'anarchy': 1,
        'constitutional monarchy': 50
      }
    },
    population: () => {
      return lib.lib.random([
        lib.random(4000, 4300),
        lib.random(4200, 4400),
        lib.random(4000, 5500),
        lib.random(4700, 5200),
        lib.random(5000, 7300),
        lib.random(6000, 6500),
        lib.random(6500, 9000),
        lib.random(8500, 9500)
      ])
    },
    startFactionsNumber: () => lib.lib.random([1, 1, 2, 2, 2, 3, 3, 3, 3, 4]),
    roadDuplication: 70,
    modifiers: {
      wealth: 5,
      reputation: 20,
      sin: 25,
      diversity: 25
    }
  }
}
