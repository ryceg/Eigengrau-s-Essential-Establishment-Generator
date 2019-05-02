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
    ['a stone', 'a wooden', 'an ivory', 'a jewel encrusted', 'an obsidian', 'a gold', 'a bronze', 'a copper', 'an iron', 'a glass', 'a ruby', 'an emerald', 'a marble'].random() + ' obelisk jutting out from the centre.',
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
    'streets made of ' + ['dirt and gravel.', 'course gravel.', 'packed down dirt and mud.', 'rough cut stone.', 'smooth, hand carved stone.', 'rough hewn bricks.', 'artisan quality bricks, laid in a detailed pattern.',
     'golden bricks that shine in the sun.', 'smooth stone encrusted with jewels.', 'jewel encrusted bricks.', 'well maintained cobblestone.', 'well worn cobblestones.', 'hard packed dirt.'].random()


  ],
  crowd: {
    'haggling': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' haggling with a street vendor for ' + ['a pile of fish.', 'a piece of pottery.', 'a fine piece of art.', 'a cheap looking statue.',
      'a tattered looking map.', 'a dyed roll of cloth.', 'a pair of fleece leggings.', 'a checker patterned tunic.', 'a dusty old tome.', 'a pair of scrolls.', 'a fresh loaf of bread.',
    'a shiny green apple.', 'a large cheese wheel.', 'a caged owl.', 'a large tanned hide.', 'a small crate of torches.', 'a crude looking dagger.', 'a fine looking sword.'].random()
      }
    },
    'colorfulRobes':{
    function: function (town) {
      var npc = setup.createNPC(town, {
        hasClass: true,
        dndClass: 'wizard'
      })
      return 'a ' + setup.profile(npc, npc.description) + ' wearing strange ' + ['indigo', 'rainbow', 'brown', 'red', 'blue', 'orange', 'yellow', 'gold', 'emerald', 'purple',
       'mauve', 'green', 'magenta', 'maroon', 'tan', 'cyan', 'olive', 'navy', 'aquamarine', 'turquoise', 'silver', 'lime', 'teal', 'violet', 'pearl', 'white', 'black', 'gray', 'cerulean', 'sky blue',
     'azure', 'chartreuse', 'amber', 'pink', 'peach', 'apricot', 'ochre', 'plum', 'beige', 'jade', 'pear', 'periwinkle', 'salmon', 'taupe'].random() + ' coloured robes.'
    }
  },
    'animal': {
      function: function (town) {
        return 'a large cage with ' + ['a bear', 'a lion', 'a tiger', 'a leopard', 'an ape', 'a gorilla', 'a hippo', 'a wyvern', 'an ostrich', 'an ox', 'a bull', 'an anaconda',
         'a crocodile', 'an alligator', 'an elephant', 'a mammoth', 'an eagle', 'a vulture', 'a giant tortoise', 'a giant otter', 'a hyena', 'a wolf', 'a kangaroo', 'a giant pangolin'].random() + ' inside of it.'
      }
    },
    'drunkard': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' clearly drunk off their ass just wandering about.'
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
        return 'a ' + setup.profile(npc, npc.descriptor) + ' and a ' + setup.profile(npc2, npc2.descriptor) + ' carrying a large and heavy looking chest.'
      }
    },
    'gawk': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is gawking at a nearby '+ ['beautiful woman.', 'handsome man.', 'rugged dwarf.', 'ethereal elf.'].random()
      }
    },
    'parcel': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is pushing through the square with an oddly shaped parcel in hand.'
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
    'pegleg': {
      function: function (town) {
        var npc = setup.createNPC(town, {
          note: 'Has a pegleg.'
        })
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is hobbling along with a pegleg.'
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
    'showoff': {
      function: function (town) {
        var npc = setup.createNPC(town, {
          background: 'noble',
          hasClass: false
        })
        return 'a ' + setup.profile(npc, 'noble') + ' attempting to show off to a group of lovely looking commoners.'
      }
    },
    'alley': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' ducking into an alley.'
      }
    },
    'store': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' stepping into a store.'
      }
    },
    'charity': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + [' toss a coin to a beggar.', ' give part of a loaf of bread to a small child.', ' feed some scraps to a mutt.',
         " drop some coins in a street performer's cup.", ' help an old woman cross the square.'].random()
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
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is '+ ['being chased by guards.', 'being beaten by guards.', 'being pushed into a cell by guards.', 'having their hands tied up by guards.',
      'being surrounded by several guards.', 'being told off by a guard.'].random()
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
    'ridingOtherAnimals': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + [' riding a camel.', ' riding an ox.', ' riding a cow.', ' riding a zebra.', ' riding an ostrich.', ' riding a reindeer.', ' riding a yak.',
      ' riding a giant tortoise.', ' riding a llama.', ' riding a water buffalo.', ' riding a large boar.', ' riding a hippo.', ' riding a lion.', ' riding an elephant.'].random()
      }
    },
    'chasingSomething': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is chasing a ' + ['child.', 'cat.', 'dog.', 'group of kids.', 'man holding a small bag.', 'woman holding a small chest.', 'horse.',
         'runaway cart.', 'chicken.', 'pig.', 'barrel rolling ahead of them.', 'piece of parchment blowing in the breeze.'].random()
      }
    },
    'Jewelry': {
      function: function (town) {
        var npc = setup.createNPC(town, {
          background: 'noble',
          note: 'Has some jewelry.'
        })
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is wearing some ' ['very nice jewelry.', 'incredibly gaudy jewelry.', 'cheap looking jewelry.', 'very fake looking jewelry.', 'very fine jewelry.',
      'jewelry that infers they may be royalty of some sort.', 'very ugly jewelry.', 'brilliantly radiant jewelry.'].random()
      }
    },
    'cart': {
      function: function (town) {
        var npc = setup.createNPC(town, {
          background: 'commoner'
        })
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is ' + ['pulling a cart.', 'pushing a cart stuck in a rut.', 'fixing a cart off to the side.', 'riding in a cart pulled by an ox.',
      'riding in a cart pulled by a horse.', 'riding in a large cart pulled by horses.', 'riding in a cart pulled by slaves.', 'loading a cart full of goods from the market.', 'unloading goods from a cart.'].random()
      }
    },
    'npcMovement': {
      function: function (town) {
        var npc = setup.createNPC(town)
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is ' + ['wandering aimlessly.', 'strutting with haste.', 'meandering through the crowds.', 'running through the square.', 'wandering as if lost.',
      'walking very slowly.', 'favoring their ' + ['right leg', 'left leg'].random() + ' as they limp by.', 'hastily walking past.'].random()
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
        return 'a ' + setup.profile(npc, npc.descriptor) + ' who is ' + ['singing off-key', 'singing a single note', 'humming a sweet tune', 'singing a lovely song',
        'singing soft and sweetly', 'singing loudly', 'singing terribly', 'humming off-key', 'singing very badly', 'singing a funny song'].random() + ' as ' + npc.heshe + ' walks along.'
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
