// uses setup.createNPC, setup.profile, setup.createRelationship
setup.initCastle = () => {
  setup.castle = {
    name: {
      unique: [
        'Falkerstone Hold',
        'Eastcairn Stronghold',
        'Wray Castle',
        'Dorgoil Palace',
        'The Fortress',
        'Castle Urrghh',
        'Darkmere Palace',
        'Guardswatch',
        'Humblerock Castle',
        'Evering Place',
        'Axiom Towers',
        'Cliffhaven Keep',
        'The Rock',
        'Dragonspire'
      ],
      wordNouns: [
        'keep',
        'castle',
        'fort',
        'fortress',
        'stronghold',
        'citadel',
        'hold'
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
        'dock',
        'cliff',
        'valor'
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
          'glen',
          'bre',
          'dal',
          'kin',
          'ern'
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
          'burn',
          'haven',
          'bury',
          'ford',
          'stead',
          'wick',
          'ton'
        ]
      }
    },
    location: {
      'seashore': {
        vignette: [
          'a hint of brine and seaweed is carried by the wind to your nose'
        ],
        defenseReason: [
          'the nearby harbor is important for trade',
          'the tactical advantage of its position by the sea is incredibly important'
        ]
      },
      'forest': {
        vignette: [
          'a hare dashes about, seemingly lost, unaware how to escape the confines of the castle',
          'A squirrel seems to be watching you from a nearby tree'
        ],
        defenseReason: [
          'the surrounding land is excellent for growing crops',
          'the surrounding land is excellent for grazing livestock'
        ]
      },
      'hills': {
        vignette: [
          'a cart rolls by, with the scent of livestock thick on it'
        ],
        defenseReason: [
          'the nearby mines are rich in ores or gems',
          'the nearby pass is the easiest way to cross the mountains',
          'the surrounding land is excellent for growing crops',
          'the surrounding land is excellent for grazing livestock'
        ]
      },
      'plains': {
        vignette: [
          'a cart rolls by, with the scent of livestock thick on it'
        ],
        defenseReason: [
          'the surrounding land is excellent for growing crops',
          'the surrounding land is excellent for grazing livestock',
          'it is an important reststop for armies'
        ]
      },
      'mountains': {
        vignette: [
          'an eagle flies in the distance, rising suddenly as it finds an updraft, soon flying well above the mountains that the castle is built on'
        ],
        defenseReason: [
          'the nearby mines are rich in ores or gems',
          'the nearby pass is the easiest way to cross the mountains',
          'the surrounding land is excellent for growing crops',
          'the surrounding land is excellent for grazing livestock'
        ]
      },
      'river coast': {
        vignette: [
          'a child walks along, drenched from playing in the river'
        ],
        defenseReason: [
          'the nearby river is important for trade',
          'the surrounding land is excellent for growing crops',
          'the surrounding land is excellent for grazing livestock'
        ]
      },
      'seacoast': {
        vignette: [
          'the scent of brine fills your noses, accompanied by the gentle lull of the waves'
        ],
        defenseReason: [
          'the nearby harbor is important for trade',
          'the tactical advantage of its position by the sea is incredibly important'
        ]
      },
      'jungle': {
        vignette: [
          'the buzz of mosquitos in the air fills your ears; even in this corner of civilisation in the jungle, nobody is safe from the tiny bloodsuckers.'
        ],
        defenseReason: [
          'the surrounding land is excellent for growing crops',
          'the nearby source of freshwater is precious is in this region',
          'the cleared area in the jungle renders an incredible tactical advantage'
        ]
      },
      'volcanic field': {
        vignette: [
          'the stench of sulphur seeps into your nostrils; it does not seem to bother any of the locals, but to your noses, this volcanic field stinks.'
        ],
        defenseReason: [
          'the nearby mines are rich in ores or gems',
          'the nearby pass is the easiest way to cross the mountains',
          'the volcanic field poses makes it difficult to attack',
          'the volcanic field is believed to be sacred',
          'the nearby source of freshwater is precious is in this region'
        ]
      },
      'wasteland': {
        vignette: [
          'a single bird flies overhead, and you see a man trying to take aim with a bow.'
        ],
        defenseReason: [
          'the nearby source of freshwater is precious in this region',
          'the wild lands beyond are full of threats',
          'the wasteland it is built upon used to be full of life',
          'the wasteland is dangerous, posing a tactical advantage for the defenders'
        ]
      },
      'oasis': {
        vignette: [
          'there is a woman carrying a jug of water, moving carefully so as to not spill anything.'
        ],
        defenseReason: [
          'the oasis provides incredibly precious water in the region',
          'the oasis renders long-term sieges incredibly difficult'
        ]
      },
      'desert': {
        vignette: [
          'there is a condensation trap set up, which a man is checking; a few precious drops have been collected.'
        ],
        defenseReason: [
          'the desert is a valuable tactical chokepoint'
        ]
      },
      'tundra': {
        vignette: [
          'you can see a man carrying a single hare, a seemingly inconsequential hunt, though the man is beaming from ear to ear.'
        ],
        defenseReason: [
          'the wild lands beyond are full of threats',
          'the fortified walls are an important tactical component'
        ]
      },
      'ice sheet': {
        vignette: [
          'you see a group of men huddling around a fire, warming their hands, complaining about the cold.'
        ],
        defenseReason: [
          'the nearby source of freshwater is precious in this region',
          'the nearby harbor is important for trade',
          'it is the only point of absolute safety amongst the ice sheets'
        ]
      }
    },
    builtBy: [
      'a wise king',
      'an ambitious lord',
      'an ambitious lady',
      'an evil tyrant',
      'a mighty warrior',
      'a conquering warlord',
      'a retired adventurer',
      'a celebrated war hero',
      'an unscrupulous king',
      'a vain lord or lady',
      'a powerful witch or wizard',
      'a beloved sovereign',
      'a prosperous merchant',
      'a member of an ancient noble house',
      'a group of well meaning citizens',
      'a wicked queen',
      'a gentle ruler',
      'a well off craftsperson',
      'a reclusive miser',
      'a paranoid noble',
      'a mysterious and unknown figure'
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
      'the quality of its meals',
      'the many hidden passages rumored to be within',
      'the uprising that once happened here',
      'the important part it played in a previous war',
      'always falling in sieges',
      'the excellent masonry',
      'the grand library hidden within',
      'the many artifacts it houses',
      'hosting many parties for foreign nobility'
    ],
    ruler: {
      getAcquisitionMethod (town, castle) {
        const methods = [
        // it was ____
          {
            acquisitionMethod: `acquired through canny negotiation to get its former owner out of debt to ${setup.profile(castle.associatedNPC, castle.associatedNPC.firstName)}`
          },
          {
            acquisitionMethod: 'passed down through the generations'
          },
          {
            acquisitionMethod: 'inherited several decades ago through a series of well-planned marriages'
          },
          {
            acquisitionMethod: 'inherited when the male heirs all coincidentally died a year after marriage'
          },
          {
            acquisitionMethod: 'won in a bet with a foolhardy drunkard king'
          },
          {
            acquisitionMethod: 'forcefully seized from a rival'
          },
          {
            acquisitionMethod: 'purchased for a hefty fee'
          }
        ]
        return methods.random()
      },
      lookingFor: [
        'an interesting date for an attendance at an elegant soiree for the ruler to show off at',
        'scapegoats for various nefarious schemes',
        'what is causing an awful smell in the cellar',
        'neutral mediators for a conflict with a neighboring ruler',
        'advice on the construction of a new tower that defends the castle against goblin tribes',
        'a criminal tailor that just sold a box of nothingfabric to the local tailor',
        'a large bugbear pelt to use as a rug in the main hall ',
        'a talented architect to design a new wing for the building',
        'a band of mercenaries to temporarily guard the area',
        'a master painter to create a portrait of them',
        'a talented sculptor to create a grand piece of art for the main hall',
        'a head chef to come handle the kitchen',
        'a new treasurer to handle the finances',
        'a very unique plant to use in the surrounding landscaping',
        'an experienced landscaper to take care of the grounds',
        'a new set of fine dishware for the dining hall',
        'a local vassal who went missing from the court',
        'a bard to write an epic song about them',
        'a new tailor to sew some fine tapestries to hang around',
        'a large collection of books for a planned library',
        'the keys to an old forgotten tower nearby',
        'an exterminator for a recent giant rat infestation',
        'a master archer to compete in an upcoming tournament',
        'an experienced commander to lead the local guard',
        'a powerful magic user to dispell a curse on them',
        'a way to get the funds needed to upkeep the building and staff',
        'more maids to take care of the grounds',
        'a talented seamstress to take care of their wardrobe'
      ],
      types: [
        // the castle is ruled by ____
        {
          probability: 150,
          base: {
            socialClass: 'aristocracy'
          }
        },
        {
          type: 'urchins who occupied a ruined castle, slowly rebuilding it',
          lookingFor: [
            'some help with a very large bit of stone which collapsed',
            'a way to decipher architect plans which are in a different language'
          ],
          acquisitionMethod: 'abandoned for many years until the urchins began to rebuild it',
          base: {
            ageStage: 'child',
            profession: 'urchin'
          }
        },
        {
          type: 'a rich and ambitious merchant who styles themselves a noble',
          lookingFor: [
            'somebody to show off in front of',
            'an exotic creature to show off at the next ball',
            'an impressive date to a high-class event',
            'a mecenary band to protect a large caravan of goods being sent to another town'
          ],
          acquisitionMethod: 'bought the castle as a way of showing off',
          base: {
            profession: 'merchant',
            socialClass: 'nobility'
          }
        },
        {
          type: 'the state, the castle is placed on the border to defend against invaders',
          lookingFor: [
            'a tactician able to improve the defenses',
            'a couple soldiers able to help withstand a forthcoming siege',
            'some laborers to help dig moats around the area',
            'a new blacksmith to forge better weapons for the local guard'
          ],
          acquisitionMethod: 'built as a tactical vantage point',
          base: {
            profession: 'general'
          }
        },
        {
          type: 'the people, after they rose up against an unjust ruler',
          lookingFor: [
            'a new form of governing that is fairer to all',
            'a creative way to punish their former ruler',
            'the best way to properly partition rooms to all the townsfolk'
          ],
          acquisitionMethod: 'wrested from its previous owner\'s control in a bloody revolt',
          base: {
            profession: 'prime minister',
            socialClass: 'peasantry'
          }
        },
        {
          type: 'a third child who inherited it after both their siblings died in the war',
          base: {
            ageStage: 'child'
          }
        },
        {
          type: 'a holy monastic order who were given a castle by a faithful prince',
          lookingFor: [
            'a sign that they are in their gods favour',
            'a holy relic',
            'an ancient holy tome',
            'an architect to help design a new chapel for the building',
            'a way to bring in more followers'
          ],
          acquisitionMethod: 'gifted to the order by a prince as a show of his faith',
          base: {
            profession: 'cardinal'
          }
        },
        {
          type: 'a holy order guarding something in the basement',
          lookingFor: [
            'a way to better contain whatever lies beneath the castle',
            'an excuse to escape from the castle',
            'new ways to protect their secrets'
          ],
          acquisitionMethod: 'built as a tactical vantage point',
          base: {
            profession: 'cardinal'
          }
        },
        {
          type: 'a lonely abandoned child of nobility, exiled into a castle on the edge of the kingdom',
          lookingFor: [
            'a friend',
            'someone to explain why nobody visits',
            'a visit from their parents'
          ],
          base: {
            ageStage: 'child'
          }
        },
        {
          type: 'a knight, guarding the border from something deep in the wilderness',
          lookingFor: [
            'someone to help hunt the thing',
            'someone to kill the creature',
            'assistance in repairing the defenses'
          ],
          base: {
            profession: 'knight'
          }
        },
        {
          type: 'an adventuring party who found a cursed keep with the symbol of a golden knight, questing to break the curse',
          lookingFor: [
            'an excuse to get out of the castle',
            'someone to pawn the castle off to',
            'a way to escape',
            'a way to break the curse of the keep'
          ],
          acquisitionMethod: 'found abandoned',
          base: {
            profession: 'paladin'
          }
        },
        {
          type: 'a family descended from a dragon who took the shape of a human',
          base: {
            note: 'Has dragon heritage.'
          }
        },
        {
          type: 'a banished prince, given a castle with the absolute minimum staff',
          lookingFor: [
            'some way to regain lost honour',
            'someone to have dinner with',
            'an interesting conversation to liven up an otherwise dull life',
            'a way to amass more funds and grow their realm',
            'a way to regain their honor'
          ],
          base: {
            profession: 'exile',
            background: 'noble',
            socialClass: 'aristocracy'
          }
        },
        {
          type: 'a bastard child who killed the legitimate heir, living in fear of being uncovered',
          lookingFor: [
            'the one person that knows the truth',
            'someone to kill off those that threaten to uncover the truth',
            'someone they can confide their sins to'
          ],
          base: {
            note: 'Killed the legitimate heir.'
          }
        },
        {
          type: 'an untrained bastard child who inherited the castle from their old and heirless parent',
          lookingFor: [
            'someone to train with',
            'an advisor to help manage affairs'
          ],
          base: {
            note: 'Inherited the castle.'
          }
        },
        {
          type: 'a band of magical fey, casting illusions to make people think the castle is full of people',
          lookingFor: [
            'trouble',
            'fun',
            'ways to cause even more mischief',
            'ways to reassure the folk that they mean no harm'
          ],
          acquisitionMethod: 'captured by the fey a long time ago',
          base: {
            note: 'Is actually a fey'
          }
        },
        {
          type: 'a band of raiders, hired by a lord to extort even more money out of people',
          lookingFor: [
            'the latest in torture methods',
            'treasure',
            'ways to extort even more money',
            'new ways to terrorize the local peasants'
          ],
          acquisitionMethod: 'brutally taken from the hands of the lord that previously owned it by force',
          base: {
            profession: 'bandit'
          }
        },
        {
          type: 'a band of deserters who captured the castle and have started styling themselves as nobles',
          lookingFor: [
            'a pardon from their general',
            'company to have dinner with',
            'somebody to impress',
            'recognition from the real local nobility',
            'respect from neighboring rulers'
          ],
          acquisitionMethod: 'taken over in the dead of night',
          base: {
            profession: 'deserter'
          }
        },
        {
          type: 'a garrison of soldiers who were part of a war that ended a long time ago but managed to keep hold of the castle',
          lookingFor: [
            'a change of posting',
            'something to liven up the place',
            'sparring partners',
            'reinforcements from their long fallen kingdom'
          ],
          acquisitionMethod: 'a tactical vantage in a long-since ended war',
          base: {
            profession: 'general'
          }
        },
        {
          type: 'a king and his court, frozen in time after angering a powerful magical being',
          lookingFor: [
            'a way to ensure that the being does not come after him again',
            'weapons to defend himself with',
            'magic users able to return him to his time',
            'someone that died long ago',
            'ways to recruit more demons into their keep'
          ],
          base: {
            gender: 'man',
            profession: 'king'
          }
        },
        {
          type: 'a demon and their retinue, disguising themselves as human, plotting to take over the kingdom',
          lookingFor: [
            'ways to corrupt the church',
            'ways to cause havoc',
            'someone to have for dinner'
          ],
          base: {
            note: 'Is actually a demon.'
          }
        },
        {
          type: 'a wizard, calling herself a lord, who created the castle with her magic',
          lookingFor: [
            'the latest in magical textbooks',
            'magical test subjects',
            'someone to tell her whether she is going mad',
            'other magic users to discuss magical studies with',
            'the local nobility to finally come to one of her magical balls'
          ],
          acquisitionMethod: 'created by a wizard',
          base: {
            profession: 'wizard',
            gender: 'woman'
          }
        },
        {
          type: 'a strange man who found the castle - it has followed him ever since',
          lookingFor: [
            'a way to get rid of the castle',
            'some way to escape the castle',
            'a way to legitimise his ownership of the castle',
            'a way to get the castle to stay put'
          ],
          acquisitionMethod: 'not always there, appearing several years ago',
          base: {
            gender: 'man'
          }
        },
        {
          type: 'a young orphan girl who wandered into the castle. Its previous owners all died until she was the only one left, and now she is the de facto ruler, and lives in luxury, served by various magical beings',
          lookingFor: [
            'someone to play with',
            'someone that is able to heal her cat, Tibbles',
            'a new servant'
          ],
          base: {
            ageStage: 'child',
            gender: 'woman'
          }
        },
        {
          type: 'an author, gifted a magical quill, and all that they write comes into being',
          lookingFor: [
            'some inspiration',
            'a good idea for a new novel',
            'a refill of the magic ink',
            'a way to undo a past mistake'
          ],
          acquisitionMethod: 'created by magic',
          base: {
            profession: 'writer',
            note: 'Owns a magical quill. It is not clear whether the magical properties come from the quill or the owner.'
          }
        },
        {
          type: 'the court fool, gifted the castle by a mad king',
          lookingFor: [
            'some juggling balls which were lost a long time ago',
            'some way to ensure that the next king does not take the castle back',
            'someone to test jokes out on',
            'someone to actually take him seriously'
          ],
          base: {
            profession: 'clown',
            gender: 'man'
          }
        }
      ]
    },
    lookingFor (town: Town, building: Building) {
      const reasons = [
        // the castle needs assistance ____
        function () {
          return 'divining the potential wealth of an ore vein nearby'
        },
        function () {
          return ' to fund its rapidly emptying coffers, in exchange for a place on council'
        },
        function () {
          return 'as counsel on where to spend some accumulated gold'
        },
        function (town) {
          const npc = setup.createNPC(town, { socialClass: 'nobility' })
          return `from someone able to act as an escort for a ${setup.profile(npc, 'covert envoy')} to another region`
        },
        function (town) {
          const npc = setup.createNPC(town, { socialClass: 'nobility' })
          return `tracking down a ${setup.profile(npc, 'VIP')} who has disappeared`
        },
        function (town) {
          const npc = setup.createNPC(town, { socialClass: 'nobility' })
          return `with the covert escape of an ${setup.profile(npc, 'individual')}`
        },
        function () {
          return 'from someone able to provide a magical ward or enchantment to the structure itself'
        },
        function () {
          return 'with purging of the undead that infest a part of it'
        },
        function () {
          const ghost = lib.ghost.create()
          return `with the exorcision of the ${ghost.readout} that is haunting it`
        },
        function () {
          return 'seeking out the source of a curse or hex that afflicts the inhabitants'
        }
      ]
      return lib.random(reasons)(town)
    },
    siege: {
      create (town, siege = {}) {
        const data = setup.castle.siege
        const result = Object.keys(data.result).random()
        lib.assign(siege, {
          causedBy: data.causedBy.random(),
          length: data.length.random(),
          event: data.event.random(),
          result: data.result[result].random(),
          namePrefix: data.namePrefix.random(),
          nameAdjective: data.nameAdjective.random(),
          nameNoun: data.nameNoun.random()
        })
        siege.name = [[`${siege.namePrefix} ${['$building.name', '$town.name'].random()}`], [`The ${siege.nameAdjective} ${siege.nameNoun}`]].random()
        siege.readout = `The siege was ${['caused by', 'instigated by', 'eventuated due to'].random()} ${siege.causedBy}, and lasted ${siege.length}, during which ${siege.event}. Eventually, ${siege.result}.`
        return siege
      },
      namePrefix: [
        'The Siege of',
        'The Sacking of',
        'The Battle of',
        'The Massacre of',
        'The Invasion of',
        'The Razing of'
      ],
      nameAdjective: [
        'Bloody',
        'Battered',
        'Ruined',
        'Red',
        'Broken'
      ],
      nameNoun: [
        'Walls',
        'Gates',
        'Halls',
        'Fields',
        'Siege',
        'Massacre'
      ],
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
        'all of the gold in the treasury went missing',
        'a plague ran rampant through the castle'
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
        'the surrounding lands are part of a long-standing territorial dispute',
        'the surrounding land is held sacred',
        'the nearby lands are home to a rare herb, tree, or creature that has magical uses'
      ],
      // Its outer walls are defended by ____
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
        'a narrow footbridge to reach the postern',
        'hidden pitfalls full of sharp spikes',
        'a retractable drawbridge over a muddy moat',
        'caged war dogs'
      ],
      // The inner walls feature ___
      innerWalls: [
        'hundreds of arrow slits',
        "one of the world's largest dual-portcullis gates",
        'a winding climb to reach the entrance',
        'several covered parapets with murder holes under which intruders must pass',
        'a wide courtyard surrounded by flanking towers in the curtain wall',
        'an unusual or hidden means of entry',
        'several heavy-duty, mounted balistas',
        'several mounted buckets of hot tar',
        'a set of trapped stairs going up to the entrance that can be turned into a ramp',
        'a set of heavy iron doors'
      ]
    },
    rollData: {
      condition: {
        description: 'What condition is the castle in?',
        preceding: 'Castle Condition:',
        rolls: [
          [90, 'perfect; upkeep has been fastidious'],
          [70, 'good; it been well-maintained'],
          [50, 'decent; there are only a few cracks in the walls, but the place can withstand a siege'],
          [40, 'fair; the castle has seen better days'],
          [20, 'poor; the walls and towers are in dire need of repairs'],
          [10, 'decrepit; the place is practically a ruin']
        ]
      },
      age: {
        description: 'When was the castle built?',
        preceding: 'Castle Age:',
        rolls: [
          [90, 'in a past age'],
          [80, 'a couple hundred years ago'],
          [70, 'hundreds of years ago'],
          [60, 'perhaps a hundred years ago'],
          [50, 'a few decades ago'],
          [40, 'within living memory'],
          [30, 'three score years ago'],
          [20, 'a couple of decades ago'],
          [10, 'three decades ago'],
          [0, 'within the past decade']
        ]
      },
      size: {
        description: 'How large is the castle?',
        preceding: 'Castle Size:',
        rolls: [
        // the castle is _____
          [100, 'towering', 'so unbelievably large that it looms over the landscape, jutting out of the horizon, with hundreds of rooms inside'],
          [90, 'imposingly big', 'incredibly large, looming over the landscape. It no doubt has hundreds of rooms'],
          [80, 'incredibly large', 'massive, even for a castle; there are hundreds of rooms, more than enough to get lost in'],
          [70, 'very big', 'very large, even by castle standards. Inside, there is no shortage of space for every type of room under the sun'],
          [60, 'large', 'large. There is more than enough space inside for all types of rooms and purposes'],
          [50, 'average sized', 'of an average size, for a castle, with space limited by the stonework that was available at the time of its construction'],
          [40, 'somewhat small', 'slightly smaller than average, with more modest sized dining halls and ball rooms'],
          [30, 'tactically sized', 'more modest than one would expect- space is used carefully inside the castle'],
          [20, 'small', 'rather small for a castle. The rooms inside are smaller than average, though it is the servants that suffer the most by the lack of space'],
          [10, 'tiny', 'very small indeed, lacking the space and amenities that most expect of a castle'],
          [0, 'miniature', 'uncomfortably small, with the luxury of space that one typically associates with a castle nowhere to be found']
        ]
      },
      landSize: {
        description: 'How large is the castle?',
        preceding: 'Castle Size:',
        rolls: [
        // the castle's lands are _____
          [100, 'all-encompassing', 'absolutely enormous, encompassing hundreds of acres'],
          [90, 'massive', 'extremely large, with plenty of fields that are used for training exercises'],
          [80, 'very large', 'quite big, with acres upon acres of land that can be retrofitted for crops in times of war'],
          [70, 'rather large', 'very spacious, with plenty of space for jousting and other pursuits'],
          [60, 'spacious', 'spacious, with land available for jousting and other sundry uses'],
          [50, 'roomy', 'roomy, with enough land not occupied by houses that space can be cleared for jousting when needed'],
          [40, 'somewhat cramped', 'mostly tied up with buildings; there are plenty of spaces, but none very large that aren\'t already being used'],
          [30, 'cramped', 'cramped, with buildings occupying most of the real estate'],
          [20, 'small', 'unfortunately, not that spacious. It is clear that poor planning is to blame, with buildings well established in places where they probably should not have been built'],
          [10, 'tiny', 'virtually non-existant; the walls defend the castle, with few buildings outside the castle proper'],
          [0, 'non-existant', 'non-existant; the walls are not part of the castle proper purely so it is easier to repair them, but there is no room for any buildings outside the castle']
        ]
      }
    },
    dungeon: {
      name: {
        unique: ['Crag Rock', "Hell's Hole", 'Ashburn Grave', "Hope's Lament", "Killer's Cradle", 'Tenth Hell', 'Bloodrock', 'Folly Hole', "Cerberus' Den", 'Necropolis', 'Blackthorn', 'The Spike'],
        adjectives: ['Dark', 'Cold', 'Penitence', 'Sorrowful', 'Death', 'Fear', 'Heart', 'Sunken', 'Revenant'],
        nouns: ['Blade', 'Blood', 'Door', 'Den', 'Pit', 'Jail', 'Prison', 'Cell'],
        verbs: ['Embrace', 'Kiss', 'Touch', 'Decay'],
        wordNoun: ['dungeon', 'oubliette', 'jail', 'prison']
      },
      jailer: {
        types: [
          {
            type: 'a bright-eyed youth, easily seduced',
            base: {
              ageStage: 'young adult',
              calmTrait: 'gullible'
            }
          },
          {
            type: "a noble's son, punished with the job for misconduct",
            base: {
              ageStage: 'young adult',
              gender: 'man',
              socialClass: 'nobility',
              background: 'noble'
            }
          },
          {
            type: 'a middle-aged woman, loyal to the job because she is providing for her family',
            base: {
              gender: 'woman',
              ageStage: 'settled adult',
              socialClass: 'commoner'
            }
          },
          {
            type: 'a deformed wretch of a person, forced to work in the dungeon to keep them out of the way',
            base: {
              physicalTrait: 'a hideous deformity'
            }
          },
          {
            type: 'a haunted woman who applied to job to ulitmately free their lover, only for them to die before she had the chance',
            base: {
              gender: 'woman',
              calmTrait: 'quiet',
              ageStage: 'settled adult'
            }
          },
          {
            type: 'a blind man who can hear every whispered plot the prisoners make',
            base: {
              gender: 'man',
              ageStage: 'settled adult',
              socialClass: 'commoner',
              physicalTrait: 'two glass eyes that never move',
              eyes: 'glass'
            }
          },
          {
            type: 'an old man who has seen every trick in the book - and has learnt how to stop them',
            base: {
              gender: 'man',
              ageStage: 'elderly',
              socialClass: 'commoner'
            }
          },
          {
            type: 'a holy man whose god demands they bind the wicked',
            base: {
              gender: 'man',
              ageStage: 'settled adult',
              socialClass: 'commoner',
              religion: {
                strength: 'unshakingly devoted believer'
              }
            }
          },
          {
            type: 'a repentant thief, who made a living jail-breaking, only to release the worst serial killer in the land',
            base: {
              background: 'criminal',
              profession: 'ex-criminal'
            }
          },
          {
            type: "a bard, who sings the worst songs to to the prisoners (who are referred to as 'the audience')",
            base: {
              background: 'entertainer'
            }
          },
          {
            type: 'a wizard, who has been promised both living subjects and cadavers for experimentation',
            base: {
              background: 'sage',
              profession: 'wizard'
            }
          },
          {
            type: 'an alchemist, who keeps the rowdy prisoners dosed with potions',
            base: {
              profession: 'alchemist'
            }
          },
          {
            type: 'an honour-bound warrior, who made a promise to the lord to do their bidding',
            base: {
              profession: 'fighter',
              calmTrait: 'solemnn'
            }
          },
          {
            type: 'a person whose family has been jailers for the past three centuries',
            base: {
              socialClass: 'commoner'
            }
          }
        ],
        base: {
          profession: 'jailer'
        }
      },
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
        // It is rumoured that hidden inside the dungeon is _____
        'a secret tunnel to the outside',
        'the remnants of a long-lost hero',
        'the preserved head of an ancient villain',
        'a terrible beast to which prisoners are fed',
        'a missing lord or lady',
        'a famous jewel by a notorious prisoner',
        'a unique and terrible torture device',
        'the corpse of a deposed king or queen'
      ],
      location: {
        castle: [
          // the dungeon is ____
          'in a tower set apart from the main castle',
          'beneath the keep',
          'in a flanking tower of the castle',
          'beneath the flanking tower in the castle',
          'in a corner tower of the castle',
          'beneath the corner tower'
        ],
        standalone: [
          'at the bottom of a deep ravine',
          'on top of a cliff with a long drop down',
          'on the inside of a bend in a river',
          'built inside of a tall mountain',
          'surrounded on three sides by mountains',
          'on top of a hill in the middle of a city',
          'suspended off of the underside of an overhang, dangling with a precarious path up to it',
          'in the middle of a salt pan',
          'deep into the steppes, days away from civilization',
          'submerged in the middle of a lake - halfway to the bottom',
          'chiseled into an enormous glacier',
          'buried underneath sand in a desert, with few markers of its location',
          'built into the branches of a series of trees',
          'built inside a hollowed out giant tree',
          'deep underground, near the bottom of a deep system of caverns',
          'clinging on the roof of a giant cave with one set of stairs leading to the top'
        ]
      },
      age: [
        // located _____, and was built _____
        'as part of the original castle',
        'as a later addition',
        'for another purpose originally',
        'long before most of the castle',
        'by the original owner of the castle'
      ],
      format: [
        // and consists of ____
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
          create (town, obj) {
            let imprisonmentLocation
            if (obj.parentKey) {
              imprisonmentLocation = obj.dungeon
            } else {
              imprisonmentLocation = obj
            }
            const selected = lib.weightedRandomFetcher(town, setup.castle.dungeon.cells.prisoners.npcs, imprisonmentLocation, null, 'object')
            const npc = setup.createNPC(town, selected.base)
            setup.createRelationship(town, npc, imprisonmentLocation.associatedNPC, { relationship: 'captor', reciprocalRelationship: 'prisoner' })
            lib.createReciprocalRelationship(town, imprisonmentLocation, npc, { relationship: 'prisoner', reciprocalRelationship: 'Is currently being held captive here', description: `${npc.firstName} ${selected.reasonForPunishment}` })
            return `${setup.profile(npc, npc.firstName)}, ${lib.articles.output(npc.descriptor)} who ${selected.reasonForPunishment}`
          },
          npcs: [
            {
              reasonForPunishment: 'was caught stealing a loaf of bread from a festival.',
              base: {
                socialClass: 'peasantry'
              }
            },
            {
              reasonForPunishment: 'was captured poaching deer.',
              base: {
                profession: 'poacher'
              }
            },
            {
              reasonForPunishment: 'offended the lord with an off-colour joke.',
              base: {
                socialClass: 'peasantry'
              }
            },
            {
              reasonForPunishment: 'offended the lord with a poorly played tune.',
              base: {
                profession: 'musician'
              }
            },
            {
              reasonForPunishment: 'was caught philandering with someone elses wife.',
              base: {
                socialClass: 'commoner'
              }
            },
            {
              reasonForPunishment: 'had too much to drink, and committed a minor crime.',
              base: {
                socialClass: 'peasantry'
              }
            },
            {
              reasonForPunishment: 'is believed to be a spy for the enemy.',
              base: {
                profession: 'spy'
              }
            },
            {
              reasonForPunishment: 'was caught impersonating a noble.',
              base: {
                background: 'charlatan'
              }
            },
            {
              reasonForPunishment: 'was caught impersonating a messenger.',
              base: {
                background: 'charlatan'
              }
            },
            {
              reasonForPunishment: 'was caught dodging taxes.',
              base: {
                socialClass: 'peasantry'
              }
            },
            {
              reasonForPunishment: 'was unable to pay taxes.',
              base: {
                socialClass: 'paupery'
              }
            },
            {
              reasonForPunishment: 'was caught attempting to poison someone.',
              base: {
                socialClass: 'commoner'
              }
            },
            {
              reasonForPunishment: 'was an embarassment with sub-standard cooking at an important feast.',
              base: {
                profession: 'chef'
              }
            },
            {
              reasonForPunishment: 'killed a noble.',
              base: {
                note: 'Was actually framed.'
              }
            },
            {
              reasonForPunishment: 'is an enemy who has been captured and is now being held for ransom.',
              base: {
                socialClass: 'aristocracy'
              }
            },
            {
              reasonForPunishment: 'was caught committing criminal acts.',
              probability: 30,
              base: {
                professionSector: 'crime'
              }
            },
            {
              reasonForPunishment: 'was caught attempting to rescue someone else from jail.',
              base: {
                background: 'criminal'
              }
            },
            {
              reasonForPunishment: 'stepped on the tail of the the lord\'s cat while delivering a package',
              base: {
                profession: 'courier'
              }
            },
            {
              reasonForPunishment: 'was caught attempting to sell a king a rotten cabbage.',
              base: {
                socialClass: 'peasantry'
              }
            },
            {
              reasonForPunishment: 'was caught while crossing the border on a stolen horse.',
              base: {
                socialClass: 'peasantry'
              }
            },
            {
              reasonForPunishment: 'is a prisoner of war.',
              base: {
                socialClass: 'commoner'
              }
            },
            {
              reasonForPunishment: 'was stealing from orphanages.',
              base: {
                background: 'criminal'
              }
            }
          ],
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
          'so dark it’s difficult to say what condition they are in'
        ],
        format: [
          // prisoners are kept in
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
          'the clanking of chains',
          'the distinct smell of stale blood'
        ]
      }
    }
  }
}
