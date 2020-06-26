setup.initCastle = () => {
  setup.castle = {
    name: {
      wordNouns: [
        'keep',
        'castle',
        'fort',
        'fortress',
        'stronghold'
      ],
      nouns: [
        'oak',
        'knight',
        'stone',
        'iron',
        'apple',
        'blood',
        'fire',
        'stain',
        'steel',
        'ruby',
        'river',
        'lake',
        'lamb',
        'dock'
      ],
      adjectives: [
        'far',
        'strong',
        'high',
        'long',
        'broad',
        'brave',
        'proud',
        'dark'
      ],
      morphemes: {
        prefix: [
          'dyn',
          'latry',
          'erg',
          'di',
          'dem',
          'iso',
          'mid',
          'pre',
          'phil',
          'tel',
          'glen'
        ],
        suffix: [
          'borough',
          'crest',
          'worth',
          'buruh',
          'burg',
          'dur',
          'by',
          'ston',
          'gwyn',
          'ley',
          'ham',
          'dale',
          'burn'
        ]
      }
    },
    location: {

    },
    builtBy: [
      'a wise king',
      'an ambitious lord or lady',
      'an evil tyrant',
      'a mighty warrior or warlord',
      'a retired adventurer',
      'a celebrated war hero',
      'an unscrupulous king',
      'a vain lord or lady',
      'a powerful witch or wizard',
      'a beloved sovereign',
      'a prosperous merchant',
      'a member of an ancient noble house'
    ],
    knownFor: [
      'withstanding a grueling, lengthy siege',
      'suffering an immense conflagration',
      'changing hands several times over the course of the same war',
      'bringing ill-fortune to those who hold it',
      'being haunted by a former occupant',
      'never falling in a siege',
      'welcoming travelers seeking refuge',
      'turning away travelers seeking refuge',
      'its unusual architectural style',
      'its beautiful, historic tapestries',
      'its breathtakingly beautiful chapel',
      'the quality of its meals'
    ],
    siege: {
      causedBy: [
        // the siege was caused by ____
        'a minor disagreement which spiraled out of hand',
        'a foreign nation wanting to gain a foothold',
        'a political disaster',
        'the murder of a noble at a feast',
        'a broken promise of marriage',
        'a warlord intent on conquering all in his path'
      ],
      length: [
        // it lasted ____
        'seven long, bloody years',
        'three months',
        'two months',
        'a terrible month',
        'a horrible, dreary winter',
        'a swelteringly hot summer',
        'longer than anyone had expected',
        'a bloody two weeks',
        'just short of a fortnight',
        'for a month, followed by a week\'s ceasefire, which then broke into more violence',
        'half a year',
        'a winter',
        'a summer',
        'the best crop months of the year, decimating the local economy',
        'long enough for babies to have been born',
        'long enough for babes to have known nothing but the siege',
        'for too long',
        'far too long'
      ],
      event: [
        // it lasted siege.length, during which, _____
        'a noble committed suicide in despair',
        'the peasants ate sawdust',
        'all of the pigs were eaten',
        'the nobles stole all the meat',
        'the peasants resorted to eating the horses',
        'a masterwork sword was crafted',
        'a composer wrote their greatest symphony',
        'the sky turned pink',
        'the rain turned red',
        "there wasn't a single drop of rain",
        'powerful wizards shot lightning bolts at each other',
        'a huge war machine was constructed to breach the walls',
        'a terrible beast began to prey on the invaders',
        'a dragon took interest in the conflict',
        'the invaders found themselves running out of food',
        'the chickens were set on fire and shot out at the invaders',
        'rotten eggs were pelted from the parapets',
        'fantastic bombs were created and lobbed from the keep',
        'a baby was born',
        'a noble girl got pregnant mysteriously',
        'all of the gold in the treasury went missing'
      ],
      result: {
        // eventually, _____
        invadersWin: [
          'the invaders were victorious, and killed everyone inside',
          'the invaders won, breaking through the gates after a continuous 43 hour siege',
          'the provisions ran out, leaving the castle without any option but to surrender',
          'the castle ran out of food. They surrendered once the peasants started to cannibalise',
          'key players were killed in action, resulting in the invaders no longer being interested in attacking, leaving the castle be',
          'defenses of the castle were breached. It is rumoured that they were sabotaged',
          'the gates were breached, and the invaders took no survivors'
        ],
        castleWin: [
          "the castle's walls held, breaking the spirit of the invaders",
          'the castle was overrun, and surrendered',
          'the castle caught fire, resulting in their prompt surrender',
          'the invaders had a mutiny in their ranks, breaking the siege',
          'others came to the defender\'s aid, resulting in a resounding victory',
          'the invading army was called to aid another siege, leaving the castle alone',
          'a midnight covert ops killed off the invading leadership'
        ],
        other: [
          'the peasants revolted, uprising against the nobles yet still somehow managing to win the siege',
          'the nobles bartered a truce',
          'a truce was struck after hours of negotiation',
          'a stalemate became apparent, both sides having sustained heavy casualties',
          'it was a Pyrrhic victory for the invaders',
          'it was a Pyrrhic victory for the defenders',
          'a third army joined the fray, easily defeating both weary armies',
          'a hit squad of elite soldiers from another country killed the enemy leadership in exchange for coin',
          'a monster that fed on the bodies of the fallen forced a truce to be bartered in order for both sides to survive'
        ]
      }
    },
    defense: {
      reason: [
        'the surrounding land is excellent for growing crops',
        'the nearby mines are rich in ores or gems',
        'the surrounding land is excellent for grazing livestock',
        'the nearby pass is the easiest way to cross the mountains',
        'the nearby harbor is important for trade',
        'the nearby river is important for trade',
        'the nearby source of freshwater is precious is in this region',
        'the wild lands beyond are full of threats',
        'the surrounding lands are part of a long-standing territorial dispute',
        'the surrounding land is held sacred',
        'the nearby lands are home to a rare herb, tree, or creature that has magical uses'
      ],
      outerWalls: [
        'very high stone walls',
        'incredibly thick stone walls',
        'a series of curtain walls and gatehouses',
        'a treacherous climb to reach the castle walls',
        'a moat filled with putrescent water',
        'a moat filled with thick, boot-sucking mud',
        'a moat filled with sharp spikes',
        'a moat that is home to one or more dangerous aquatic beasts',
        'an immense barbican',
        'a narrow footbridge to reach the postern'
      ],
      innerWalls: [
        'hundreds of arrow slits',
        "one of the world's largest dual-portcullis gates",
        'a winding climb to reach the entrance',
        'several covered parapets with murder holes under which intruders must pass',
        'a wide courtyard surrounded by flanking towers in the curtain wall',
        'an unusual or hidden means of entry'
      ]
    },
    rollData: {
      condition: [
        'perfect; upkeep has been fastidious',
        'good; it been well-maintained',
        'decent; there are only a few cracks in the walls, but the place can withstand a siege',
        'fair; the castle has seen better days',
        'poor; the walls and towers are in dire need of repairs',
        'decrepit; the place is practically a ruin'
      ],
      age: [
        'in a past age',
        'hundreds of years ago',
        'a few decades ago',
        'within the past decade'
      ]
    },
    dungeon: {
      knownFor: [
        'many prisoners dying in a terrible plague',
        'a mass escape in the past',
        'the escape of a famous criminal',
        'being the final home of a famous criminal',
        'being the final home of a legendary hero',
        'being haunted by vengeful ghosts',
        'its horrific torture pits',
        'never suffering a successful escape',
        'its quirky jailer',
        'the quality of its meals'
      ],
      secret: [
        'a secret tunnel to the outside',
        'the bones of a long-lost hero',
        'the preserved head of an ancient villain',
        'a terrible beast to which prisoners are fed',
        'a missing lord or lady',
        'a famous jewel by a notorious prisoner',
        'a unique and terrible torture device',
        'the bones of a deposed king or queen'
      ],
      location: [
        'in a tower set apart from the main castle',
        'beneath the keep',
        'in a flanking tower of the castle',
        'beneath flanking tower in the castle',
        'in a corner tower of the castle',
        'beneath the corner tower'
      ],
      age: [
        'as part of the original castle',
        'as a later addition',
        'for another purpose originally',
        'long before most of the castle'
      ],
      format: [
        'a sprawling maze of twisting passages',
        'a sprawling maze of narrow passages',
        'organized into small, neat rows of cells or pits',
        'organized around a large central cell block or pit',
        'only a few rooms',
        'an endless series of long corridors',
        'an endless series of small rooms and staircases',
        'a series of corridors with very low ceilings'
      ],
      cells: {
        prisoners: {
          treatment: [
            // the prisoners are treated ____
            'humanely; they receive reasonable meals, some exercise, and healing when needed',
            'like dogs; they receive poor quality meals and enough healing to keep them alive',
            'like rats; they receive terrible meals and are plagued by sickness',
            'like they don’t exist; occasionally they receive food'
          ]
        },
        condition: [
          'well-maintained; the walls are solid',
          'aging, but sturdy; the walls have some cracks',
          'decrepit; the walls are crumbling',
          'so dark it’s difficult to say'
        ],
        format: [
          'individual cells, in complete isolation',
          'individual cells, but they can see and hear other prisoners',
          'individual cells, but they can hear other prisoners',
          'cells that accommodate up to two prisoners',
          'cells that accommodate up to two prisoners, each shackled to the wall',
          'cells that accommodate up to four prisoners',
          'cells that accommodate up to four prisoners, each shackled to the wall',
          'a large chamber with many other prisoners, each shackled to the wall',
          'individual pits or wells, open at the top',
          'one or more huge pit with many other prisoners'
        ]
      },
      rooms: {
        type: [
          'a dungeon cell',
          'another dungeon cell',
          'a passageway connecting cell blocks',
          'a guardroom',
          'the barracks',
          'the jailer’s quarters',
          'a yard or large indoor space for exercise',
          'a small dining room',
          'an interrogation room',
          'a torture chamber'
        ],
        feature: [
          'a wooden door reinforced with steel bands',
          'steel bars where you expected a stone wall',
          'empty manacles along the wall',
          'an empty sconce to hold a torch',
          'distant torchlight',
          'the floor is uneven',
          'a crack in the stone floor',
          'a mouse skittering underfoot',
          'the stench of rotting flesh',
          'the scent of stale urine',
          'a putrid smell',
          'a dank and moldy odor',
          'an uncomfortable groaning',
          'a faint scratching sound',
          'an odd tapping sound',
          'the squeaking of rats',
          'the shouting of distant voices',
          'howls of agony',
          'horrific screams',
          'the clanking of chains'
        ]
      }
    }

  }
}
