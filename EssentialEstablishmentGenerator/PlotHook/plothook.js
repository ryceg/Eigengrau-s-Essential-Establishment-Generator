/* global setup */
setup.plothooks = {
  'The Magic Duel': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        dndClass: ['sorcerer', 'wizard', 'warlock'].random(),
        gender: 'man'
      })
      return "<<guard $town.guard>> think the party's mage is responsible for a magical duel fought atop the cathedral roof last night. Can the party find the " + setup.profile(npc, 'real culprit') + ' before they are hunted down themselves? Do they dare, knowing that the criminal dispatched his last opponent with a frighteningly high level spell?'
    }
  },
  'The Falling Woman': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        dndClass: 'rogue',
        gender: 'man'
      })
      return 'A woman falls into the street from the second story window in front of the party and dies on impact. Soon after, a PC notices a ' + setup.profile(npc, 'hooded figure') + ' skillfully dropping, uninjured, from another second story window facing into the alley. The figure quickly disappears into a maze of side streets.'
    }
  },
  'The Godfather': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'criminal'
      })
      return 'The party stops to witness a funeral procession for a ' + setup.profile(npc, 'crime lord') + '. Soon after passing, the party hears an explosion and sees a gigantic smoking fireball rise into the sky a block away.'
    }
  },
  'The Cage': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'noble'
      })
      return 'The party is invited to a manor by an ' + setup.profile(npc, 'important socialite') + ' for a potential job opportunity. When they arrive, they are told to wait in an empty room. Soon after entering the room, the party realizes they are locked in with a magical ward.'
    }
  },
  'The Metal Dog': {
    probability: 5,
    type: 'event',
    questGiver: {
      object: 'building',
      type: 'tavern'
    },
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        gender: 'woman',
        ageStage: 'child',
        background: 'orphan'
      })
      return 'As you step out of the tavern, a ' + setup.profile(npc, 'disheveled girl') + " smashes into you. 'Wilkenson's dog is loose again!' she exclaims as she attempts to hide behind you. You turn back in the direction she came to see a metal construct resembling a dog charging toward you."
    }
  },
  'The Pregnant Woman': {
    probability: 5,
    type: 'event',
    questGiver: {
      object: 'building',
      type: 'market'
    },
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        gender: 'woman',
        background: 'commoner',
        note: 'Is currently pregnant.'
      })
      return 'The PCs spot a ' + setup.profile(npc, 'pregnant woman') + " walking through the bazaar. As she passes the baker's stall she quickly grabs a loaf of bread and keeps walking, favouring one of the PCs with a wink as she goes. Is she a thief or the wife of the store owner?"
    }
  },
  'The Carriage Caretakers': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'noble',
        gender: 'man'
      })
      return 'The party is mistaken by a ' + setup.profile(npc, 'wealthy man') + " as carriage caretakers in a shantytown neighborhood. He hands them money to protect his vehicle. The legitimate caretakers challenge the PCs and try to steal the wealthy wagon. Does the party protect the rich man's vehicle or do they leave the locals to do as they please, risking later persecution by the noble client?"
    }
  },
  'The Zoo': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      return 'The city has a zoo filled with wondrous and dangerous creatures brought from far places. Just recently, some of the creatures escaped and now there is a royal reward for recovering the rare animals unharmed. How can this be done?'
    }
  },
  'The Plague': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      return 'The sector of the city lies under quarantine after an outbreak of a mysterious fever. The party is being kept inside, and one of its members is starting to show symptoms of the illness. Do they try to escape, risking further contagion, or do they try to find a cure from the inside?'
    }
  },
  'Indie': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'noble',
        gender: 'man',
        profession: 'museum curator',
        lastName: 'Jones'
      })
      return 'One member of the party is seen carrying an exotic weapon and the authority of the local museum is told about it. This ' + setup.profile(npc, 'museum curator') + " has been an adventurer and masters some kind of whip weapon. He prepares an ambush to steal the exotic weapon, yelling at the PCs on sight, 'That belongs in a museum!'"
    }
  },
  'The Tourist': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'noble',
        gender: 'man',
        weight: 'obese',
        profession: 'tourist'
      })
      return 'The PCs have messed up (possibly been framed) in the eyes of the King and have been apprehended. The King will release the party, if they allow a wealthy, influential, and obese ' + setup.profile(npc, 'merchant') + ' to come along on a dungeon delve, where there are sure to be many tight spaces.'
    }
  },
  'The Blacksmith Competition': {
    probability: 5,
    type: 'event',
    questGiver: {
      object: 'building',
      type: 'smithy'
    },
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var blacksmith = town.smithy.random().blacksmith
      var npc = setup.createNPC(town, {
        gender: 'man',
        profession: 'blacksmith',
        background: 'blacksmith'
      })
      return 'Two blacksmiths, ' + setup.profile(blacksmith) + ' and ' + setup.profile(npc) + " are in competition to create better melee weapons for the King's army and only one can win the contract. " + npc.firstName + ' approaches the PCs to try the weapons and plead their virtues to the King. He also claims his competitors are playing dirty.'
    }
  },
  'Kindergarten Magic': {
    probability: 5,
    type: 'event',
    questGiver: {
      object: 'faction',
      type: 'wizards'
    },
    exclusions: function (town) {
      if (town.population > 3000 && town.roll.wealth < 90) {
        return true
      }
    },
    function: function (town) {
      var faction = setup.factionsForType(town, 'type', 'wizards')
      var npc = setup.createNPC(town, {
        background: 'scholar',
        dndClass: 'wizard',
        gender: 'man'
      })
      return 'Street urchins are rumored to have special powers. A ' + setup.profile(npc, 'representative') + ' of <<link ' + JSON.stringify(faction) + '>><<set $selected to {faction: ' + JSON.stringify(faction) + '}>><<goto "FactionProfile">><</link>> approaches your party to investigate. In reality, they are learning magic from an unknown source. The children have less inhibition and magical control, but have much more mana and capability of replenishing mana, making them dangerous magic users.'
    }
  },
  'The Crystal Ball': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'merchant',
        gender: 'man',
        profession: 'merchant'
      })
      return "'Psst, do you want to buy a crystal ball that really works? It's cheap!' says a " + setup.profile(npc, 'shady character') + ' while sneaking up on the PCs from an alley. The price really is cheap, and you might even lead the PCs to believe the ball works when they try to use it for petty things, but it is unreliable, maybe even cursed. And the big problem is that one or more groups of NPCs badly want this crystal ball.'
    }
  },
  'The Coach Crash': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'noble',
        gender: 'man'
      })
      var secondNpc = setup.createNPC(town, {
        background: 'noble',
        gender: 'man'
      })
      return 'Two speeding coaches collide, leaving a bloody scene and angry families. The road is blocked, and the <<guards $town.guards>> seem disinterested in assisting with either clearing the road or arbitrating between a ' + setup.profile(npc, 'man') + ' and ' + setup.profile(secondNpc, 'man') + ' from the other coach.'
    }
  },
  'The One True God': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      return 'There is but one accepted religion in town. What about the party cleric who serves what is here deemed a false god?'
    }
  },
  'The Siege Ship': {
    probability: 5,
    type: 'event',
    questGiver: {
      object: 'building',
      type: 'docks'
    },
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      return "A fast ship in the bay is bombarding the helpless port with siege engines. It's out of range for the locals to deal with, and possibly not alone."
    }
  },
  'The Werewolf Maiden': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'commoner',
        gender: 'woman',
        note: 'Is a werewolf.'
      })
      return 'The PCs hear shrieks from a dark alley where a ' + setup.profile(npc, 'young woman') + ' just went. Under the full moon, she is painfully turning into a werewolf for the first time.'
    }
  },
  'The Disturbed Cemetary': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        dndClass: 'wizard',
        gender: 'man'
      })
      return 'There have long been rumours of the cemetery being desecrated by someone stealing the corpses. One night the PCs chance upon the ' + setup.profile(npc, 'necromancer') + ' walking home with newly animated undead.'
    }
  },
  'The Convalescent': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'noble',
        gender: 'woman'
      })
      return setup.profile(npc) + " seeks the protection of the PCs. To grant it makes her enemies the PCs' enemies, and gives them the responsibility to protect a high-profile, fragile person who can't or won't leave town."
    }
  },
  'The Thieves Fun': {
    probability: 5,
    type: 'event',
    questGiver: {
      object: 'faction',
      type: ['thieves', 'assassins']
    },
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var faction = setup.factionsForType(town, 'type', 'wizards')
      return 'PCs are marked by a guild of thieves, <<link ' + JSON.stringify(faction) + '>><<set $selected to {faction: ' + JSON.stringify(faction) + '}>><<goto "FactionProfile">><</link>>, for a contest. Low-skill, would-be guild members keep targeting the party with attempts on their health or goods.'
    }
  },
  'The Spoiled Kid': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'noble',
        gender: 'man',
        ageStage: 'child'
      })
      return 'The ' + setup.profile(npc, 'spoiled child') + " of a noble finds a PC has something he just *has to have*. The noble's staff does what it can to acquire it, by nearly any means necessary."
    }
  },
  'The Bad Architect': {
    probability: 5,
    type: 'paper',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      return "A string of building construction accidents has occurred lately throughout the city. Fortunately, no one's been seriously hurt, but the accidents are increasing in size and damage. The local guild has put up flyers asking for help in solving their problem."
    }
  },
  'Pooh Sticks': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        gender: 'man',
        ageStage: 'child'
      })
      return 'As the PCs walk across a bridge over the river that cuts through town, they notice a couple of young boys standing near the edge of the bridge. They each have a large rock in their hands, and are watching one of the approaching river boats with smiles on their faces. As the boat gets closer, ' + setup.profile(npc, 'one of the boys') + ' raises his rock as if he is going to drop it.'
    }
  },
  // 'Nobody Hurts Ma': {
  //   probability: 5,
  //   exclusions: function (town) {
  //     return true
  //   },
  //   function: function (town) {
  //     var npc = setup.createNPC(town, {
  //       background: 'noble',
  //       gender: 'man',
  //       profession: 'blacksmith',
  //       background: 'blacksmith'
  //     })
  //     return "The PCs come upon a sobbing woman holding a teenage boy who looks to have been severely beaten. If the PCs ask the woman if they can help, she explains her youngest son was beaten up by a gang of toughs. Of more immediate danger though, is that her oldest son has gone off to exact revenge on them, and she's afraid of what they will do to him."
  //   }
  // },
  'The Corrupt Guards': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'soldier',
        gender: 'man',
        profession: 'guard'
      })
      return 'Down the dimly lit alley, two guards can be seen beating a kneeling man. ' + setup.profile(npc, 'One') + " rips a coin purse from the kneeling man's belt and says, 'Don't be late next month, old man.'"
    }
  },
  'The Umber Hulk': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      if (town.population > 3500) {
        return true
      }
    },
    function: function (town) {
      return 'As the PCs are travelling from one district to another they are confronted by a traffic jam. A building has fallen in and the umber hulk responsible is hiding, waiting for a snack to move near it.'
    }
  },
  'The Double Gunshot Suicide': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'noble',
        gender: 'man'
      })
      return setup.profile(npc, 'Someone') + " falls out the window of a high building. It wasn't suicide as he had his hands and feet bound together and three large sacks of gold tied around his neck. What will be more important, the murder or the money?"
    }
  },
  'The Generous Mark': {
    probability: 5,
    type: 'event',
    exclusions: function (town) {
      return true
    },
    function: function (town) {
      var npc = setup.createNPC(town, {
        background: 'noble',
        gender: 'man'
      })
      return 'A ' + setup.profile(npc, 'rich man') + ' walks through a bad part of town with obvious riches and money. If mugged, he gives it willingly. He has been doing this for the last three days.'
    }
  }
}
