/* global setup */
setup.townSquare = {
  rollData: {
    cleanliness: [
      [80, 'astonishingly well-kempt'],
      [70, 'surprisingly clean'],
      [50, 'relatively tidy'],
      [40, 'somewhat dirty'],
      [30, 'rather dirty'],
      [20, 'riddled with refuse'],
      [10, 'overflowing with detritus']
    ],
    size: [
      [80, 'huge and hectic'],
      [70, 'large and bustling'],
      [50, 'relatively large'],
      [40, 'rather packed'],
      [20, 'somewhat cramped'],
      [10, 'little more than an empty lot']
    ]
  },
  feature: [
    // the town square features _______
    ['a stone', 'a wooden', 'an ivory', 'a jewel encrusted', 'an obsidian', 'a gold', 'a bronze', 'a copper', 'an iron', 'a glass', 'a ruby', 'an emerald', 'a marble'].random() + ' statue of an old ruler in the centre.',
    'stray dogs that run around, begging for scraps.',
    'feral cats that stalk through the streets, searching for scraps.',
    'a large gallows on a raised stage in the center.',
    'a raised executioners block in the middle.',
    'a large wooden pole in the center with ribbons hanging down from it. Several children are gathered around the pole dancing with the ribbons.',
    'an in-the-round style stage currently prepped for some sort of stage show',
    'several small ' + ['wooden', 'stone', 'jewel encrusted', 'obsidian', 'copper', 'bronze', 'iron', 'metal', 'glass'].random() + " statues of the town's patron placed in different corners.",
    'a huge old ' + ['pine', 'oak', 'elm', 'cypress', 'willow', 'juniper', 'poplar', 'maple', 'apple', 'cherry', 'birch', 'ash', 'redwood', 'spruce', 'fir'].random() + ' tree, which is home to hundreds of birds, filling the town square with the sounds of birdsong.',
    'an old, withered ' + ['pine', 'oak', 'elm', 'cypress', 'willow', 'juniper', 'poplar', 'maple', 'apple', 'cherry', 'birch', 'ash', 'redwood', 'spruce', 'fir'].random() + ' tree. Legend says that it will flower on the darkest day of the land, to give the people hope.',
    'a fountain that the common folk drink from despite the sanitation issues.',
    'an ornate fountain that several children are playing in.',
    'a large box with a slit in the top. The front of the box has "suggestions" scrawled across it.',
    'a small well that several shabbily dressed folk are waiting in line for.',
    'a large well with guards stationed around it.',
    'a wall almost entirely made out of posters; nobody ever took them down to start with, and now it seems that the years of posters are the only thing keeping the wall upright.',
    'streets made of ' + ['dirt and gravel.', 'course gravel.', 'packed down dirt and mud.', 'rough cut stone.', 'smooth, hand carved stone.', 'rough hewn bricks.', 'artisan quality bricks, laid in a detailed pattern.', 'golden bricks that shine in the sun.', 'smooth stone encrusted with jewels.', 'jewel encrusted bricks.', 'well maintained cobblestone.', 'well worn cobblestones.', 'hard packed dirt.'].random(),

  ],
  crowd: {
    'haggling': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' haggling with a street vendor.'
      }
    },
    'bag': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' carrying a large bag.'
      }
    },
    'chest': {
      function: function (town) {
        var npc = setup.createNPC(town)
        var npc2 = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + 'and a ' + setup.profile(npc2, npc2.descriptor) + ' carrying a large and heavy looking chest.'
      }
    },
    'hurry': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is clearly in a hurry.'
      }
    },
    'crutches': {
      function: function (town) {
        var npc = setup.createNPC(town, {
          note: 'Is on crutches.'
        })
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is hobbling along on crutches.'
      }
    },
    'lost': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is obviously lost.'
      }
    },
    'noble': {
      function: function (town) {
        var npc = setup.createNPC(town, {
          background: 'noble',
          hasClass: false
        })
        return 'a ' + setup.profile(npc, 'noble') + ' strutting around, accompanied by a servant.'
      }
    },
    'alley': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' ducking into an alley.'
      }
    },
    'charity': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' toss a coin to a beggar.'
      }
    },
    'guardBait': {
      exclusions: function (town) {
        if (town.roll.guardFunding > 50 && town.roll.law > 50) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          background: 'criminal'
        })
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is being chased by guards.'
      }
    },
    'ridingMule': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' riding a mule.'
      }
    },
    'ridingHorse': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' riding a horse.'
      }
    },
    'chasingChild': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is chasing a child.'
      }
    },
    'expensiveJewelry': {
      function: function (town) {
        var npc = setup.createNPC(town, {
          background: 'noble',
          note: 'Has some very nice jewelry.'
        })
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is wearing some very nice jewelry.'
      }
    },
    'cart': {
      function: function (town) {
        var npc = setup.createNPC(town, {
          background: 'commoner'
        })
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is pulling a cart.'
      }
    },
    'wandering': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is wandering aimlessly.'
      }
    },
    'map': {
      function: function (town) {
        var map = setup.misc.treasureMap.create()
        var npc = setup.createNPC(town, {
          note: 'Has a ' + map.tippyWord
        })
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is looking at a ' + map.tippyWord + '.'
      }
    },
    'bumping': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who keeps bumping into people.'
      }
    },
    'singer': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is singing off-key as ' + npc.heshe + ' walks along.'
      }
    }
  },
  vignettes: {
    // there's _______
    // these are passive events. Not meant to be adventure seeds.
    'stray cat': {
      type: ['event'],
      function: function () {
        var cat = setup.misc.cat.create()
        return 'a stray ' + cat.tippyWord + ' that wanders around.'
      }
    },
    'homeless': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 300 && town.roll.wealth < 90 && town.roll.welfare < 70) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          background: 'urchin',
          hasClass: false,
          profession: 'beggar'
        })
        return 'a ' + setup.profile(npc, 'beggar') + ' who waves ' + npc.hisher + ' alms cup at you weakly.'
      }
    },
    'child': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population < 3000 && town.roll.wealth < 90) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          ageStage: 'child',
          hasClass: false
        })
        return 'a ' + setup.profile(npc, 'child') + ' who waves at you, clearly impressed by your weapons.'
      }
    },
    'kite': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population < 3000 && town.roll.wealth < 90) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          ageStage: 'child',
          hasClass: false
        })
        return 'a ' + setup.profile(npc, 'child') + ' who runs around, holding onto a kite, laughing with glee.'
      }
    },
    'childScammer': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 300 && town.roll.wealth < 90 && town.roll.guardFunding < 60) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          ageStage: 'child',
          hasClass: false
        })
        return 'a ' + setup.profile(npc, 'child') + ' who runs around, holding onto a kite, laughing with glee, and in ' + npc.hisher + ' haste, bumps into one of you.<blockquote>Another child attempts to pickpocket the player in the confusion.</blockquote>'
      }
    },
    'adultScammer': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 3000 && town.roll.wealth < 90 && town.roll.guardFunding < 60) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'charlatan',
          profession: 'scammer'
        })
        return 'a ' + setup.profile(npc, npc.description) + ' who calls out to you, and says "You look lost. Do you know your way around the city? I can guide you, for just <<money 50>>". <blockquote>' + npc.heshe.toUpperFirst() + ' will lead the players down an alley where ' + npc.hisher + ' compatriots will attempt to rob the players.</blockquote>'
      }
    },
    'preacher': {
      type: ['event'],
      function: function (town) {
        var god = [setup.misc.religion.namedGod.random(), setup.misc.religion.abstractGod.random()].random()
        var npc = setup.createNPC(town, {
          hasClass: true,
          dndClass: 'cleric',
          note: 'Worships ' + god + '.'
        })
        return 'a ' + setup.profile(npc, npc.description) + ' who is preaching the good word of ' + god + '.'
      }
    },
    'parlourWizard': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 1000 && town.roll.arcana > 40) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: true,
          dndClass: 'wizard'
        })
        return 'a ' + setup.profile(npc, npc.description) + ' who is doing conjuring tricks for an appreciative audience.'
      }
    },
    'bardImprov': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 1000 && town.roll.wealth > 40) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: true,
          dndClass: 'bard'
        })
        return 'a ' + setup.profile(npc, npc.description) + ' that is singing songs, improvising off of words that the audience call out to ' + npc.himher + '.'
      }
    },
    'sheep': {
      type: ['event'],
      function: function (town) {
        return 'a flock of sheep, being herded through by a dutiful dog, with the shepherd nowhere in sight.'
      }
    },
    'dead frog': {
      type: ['event'],
      function: function (town) {
        return 'some children that are playing with a dead frog.'
      }
    },
    'tourist': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 1000 && town.roll.wealth > 40) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          profession: 'tourist',
          background: 'noble',
          lastName: 'Twoflower',
          note: 'GNU Terry Pratchett. '
        })
        return 'a ' + setup.profile(npc, 'tourist') + ' wandering about, looking very lost, and out of place with ' + npc.hisher + ' wide brimmed hat and colourful shirt.'
      }
    },
    'drunk': {
      type: ['event'],
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'commoner'
        })
        return 'a ' + setup.profile(npc, 'drunk') + " that's obviously waiting to be let back in to the tavern."
      }
    },
    'guards': {
      type: ['event'],
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'commoner',
          profession: 'guard'
        })
        return 'a ' + setup.profile(npc, 'guard') + " that's eyeing the players suspiciously."
      }
    },
    'mercs': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 2000) {
          return true
        }
      },
      function: function (town) {
        var mercenaries = setup.createMercenaries(town)
        return 'some ' + mercenaries.tippyWord + ' that are talking, waiting for their commander to get back from a meeting.'
      }
    },
    'haggling': {
      type: ['event'],
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'commoner'
        })
        return 'a ' + setup.profile(npc, npc.description) + ' who is arguing with a man over something.'
      }
    },
    'politicalCandidate': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 300 && town.politicalSource === 'republic') {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'commoner',
          profession: 'political candidate'
        })
        return 'a ' + setup.profile(npc, 'political candidate') + ' who is arguing with a man over something.'
      }
    },
    'politicalCandidateBullied': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 300 && town.politicalSource === 'republic' && town.roll.guardFunding > 50) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'commoner',
          profession: 'political candidate'
        })
        return 'a ' + setup.profile(npc, 'political candidate') + " that's being shouted at by a member of <<guard $town.guard>>."
      }
    },
    'bureaucrat': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 500) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'commoner',
          profession: 'political'
        })
        return 'a ' + setup.profile(npc, 'beuraucrat') + " that's trying to calm an angry crowd."
      }
    },
    'looseHorse': {
      type: ['event'],
      function: function (town) {
        return 'a horse that is running amok amidst the crowds of people.'
      }
    },
    'carriage': {
      type: ['event'],
      exclusions: function (town) {
        if (town.population > 500) {
          return true
        }
      },
      function: function (town) {
        return 'an expensive looking carriage with armed guards that are warning people to get out of the way as it rolls by.'
      }
    },
    'theatre': {
      type: ['event'],
      exclusions: function (town) {
        if (town.roll.wealth > 20) {
          return true
        }
      },
      function: function (town) {
        return 'a theatre troupe advertising their show tonight with an impromptu preview of their performance.'
      }
    },
    'doomsayer': {
      type: ['event'],
      exclusions: function (town) {
        if (town.roll.wealth > 20) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          ageStage: 'elderly',
          background: 'commoner',
          profession: 'doomsayer'
        })
        return 'an exasperated ' + setup.profile(npc, 'haggard old man') + ' trying to convince passerby’s that god had told him something terrible was about to happen. He’s not entirely sure what he is supposed to do about it.'
      }
    },
    'guardFriend': {
      type: ['event'],
      exclusions: function (town) {
        if (town.roll.military < 50) {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'commoner',
          profession: 'guard'
        })
        return 'a ' + setup.profile(npc, 'guard') + " that's wrestling with one of the villagers. It looks like a friendly bout."
      }
    },
    'guardThieves': {
      probability: 10,
      type: ['event'],
      exclusions: function (town) {
        if (town.politicalIdeology === 'kleptocracy') {
          return true
        }
      },
      function: function (town) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'commoner',
          profession: 'guard'
        })
        if (town.roll.law > 50) {
          return 'a ' + setup.profile(npc, 'guard') + " that is talking to a man, who seems to be in some sort of trouble. It becomes clear that the man hasn't paid his dues to the Thieve's Guild that controls " + town.name + ', and is summarily taken away by two hooded figures.'
        } else {
          return 'a ' + setup.profile(npc, 'guard') + ' who watches as a man gets mugged. The man takes a hit to the groin, and the guard chuckles to ' + npc.himherself + '.'
        }
      }
    }
  }
}
