setup.createAdventure = (town, base) => {
  // Tables used later

  const adventure = {
    location: setup.adventure.location.random(),
    introduction: setup.adventure.introduction.random(),
    climax: setup.adventure.climax.random(),
    otherGoal: setup.adventure.otherGoal.random(),
    backdrop: setup.adventure.backdrop.random(),
    quandary: setup.adventure.quandary.random(),
    twist: setup.adventure.twist.random(),
    sidequest: setup.adventure.sidequest.random(),
    patron: setup.adventure.patron.random(),
    villain: setup.adventure.villain.random(),
    villainActions: setup.adventure.villainActions.random(),
    allyDescription: setup.adventure.allyDescription.random(),
    ...base
  }

  const SV = State.variables
  let adventureGoalNPC
  let adventureVillain
  let adventureAlly
  let adventurePatron

  switch (adventure.location) {
    case 'dungeon':
      adventure.goal = adventure.goal || ["stop the dungeon's monstrous inhabitants from raiding the surface world.", "foil a villain's evil scheme.", 'destroy a magical threat inside the dungeon.', 'acquire treasure.', 'find a particular item for a specific purpose.', 'retrieve a stolen item hidden in the dungeon.', 'find information needed for a special purpose.', 'rescue a captive.', 'discover the fate of a previous adventuring party.', 'find an npc who disappeared in the area.', 'slay a dragon or some other challenging monster.', 'discover the nature and origin of a strange location or phenomenon.', 'pursue fleeing foes taking refuge in the dungeon.', 'escape from captivity in the dungeon.', 'clear a ruin so it can be rebuilt and reoccupied.', 'discover why a villain is interested in the dungeon.', 'win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time.', 'parley with a villain in the dungeon.', 'hide from a threat outside the dungeon.'].random()
      break
    case 'wilderness':
      adventure.goal = adventure.goal || ['assess the scope of a natural or unnatural disaster.', 'escort an npc to a destination.', "arrive at a destination without being seen by the villain's forces.", 'stop monsters from raiding caravans and farms.', 'establish trade with a distant town.', 'protect a caravan traveling to a distant town.', 'map a new land.', 'find a place to establish a colony.', 'find a natural resource.', 'hunt a specific monster.', 'return home from a distant place.', 'obtain information from a reclusive hermit.', 'find an object that was lost in the wilds.', 'discover the fate of a missing group of explorers.', 'pursue fleeing foes.', 'assess the size of an approaching army.', 'escape the reign of a tyrant.', 'protect a wilderness site from attackers.'].random()
      break
    case 'other':
      adventure.goal = adventure.goal || ['seize control of a fortified location such as a fortress, town, or ship.', 'defend a location from attackers.', 'retrieve an object from inside a secure location in a settlement.', 'retrieve an object from a caravan.', 'salvage an object or goods from a lost vessel or caravan.', 'break a prisoner out of a jail or prison camp.', 'escape from a jail or prison camp.', 'successfully travel through an obstacle course to gain recognition or reward.', 'infiltrate a fortified location.', 'find the source of strange occurrences in a haunted house or other location.', 'interfere with the operation of a business.', 'rescue a character, monster, or object from a natural or unnatural disaster.'].random()
  }

  switch (adventure.goal) {
    case 'rescue a captive.':
      adventureGoalNPC = setup.createNPC(town)
      SV.adventureGoalNPC = adventureGoalNPC
      Object.assign(adventure, {
        adventureGoalNPC,
        goal: `rescue ${adventureGoalNPC.name}, ${lib.articles.output(adventureGoalNPC.raceNote)} who was captured and taken prisoner.`
      })
      break
    case 'discover the fate of a previous adventuring party.':
      adventureGoalNPC = setup.createNPC(town)
      SV.adventureGoalNPC = adventureGoalNPC
      Object.assign(adventure, {
        adventureGoalNPC,
        goal: `rescue ${adventureGoalNPC.name}, ${lib.articles.output(adventureGoalNPC.raceNote)} who was captured and taken prisoner.`
      })
      break
    case 'find an npc who disappeared in the area.':
      adventureGoalNPC = setup.createNPC(town)
      SV.adventureGoalNPC = adventureGoalNPC
      Object.assign(adventure, {
        adventureGoalNPC,
        goal: `find ${adventureGoalNPC.name}, ${lib.articles.output(adventureGoalNPC.raceNote)} who disappeared in the area.`
      })
      break
    case 'escort an npc to a destination.':
      adventureGoalNPC = setup.createNPC(town)
      SV.adventureGoalNPC = adventureGoalNPC
      Object.assign(adventure, {
        adventureGoalNPC,
        goal: `escort ${adventureGoalNPC.name}, ${lib.articles.output(adventureGoalNPC.raceNote)} who needs protection on the way to another place.`
      })
      break
    case 'discover the fate of a missing group of explorers.':
      adventureGoalNPC = setup.createNPC(town)
      SV.adventureGoalNPC = adventureGoalNPC
      Object.assign(adventure, {
        adventureGoalNPC,
        goal: `discover the fate of ${adventureGoalNPC.name} and ${adventureGoalNPC.hisher} exploring party, who disappeared in the area.`
      })
      break
    case 'break a prisoner out of a jail or prison camp.':
      adventureGoalNPC = setup.createNPC(town)
      SV.adventureGoalNPC = adventureGoalNPC
      Object.assign(adventure, {
        adventureGoalNPC,
        goal: `rescue ${adventureGoalNPC.name}, ${lib.articles.output(adventureGoalNPC.raceNote)} who was captured and taken prisoner.`
      })
      break
    case 'rescue a character, monster, or object from a natural or unnatural disaster.':
      adventureGoalNPC = setup.createNPC(town)
      SV.adventureGoalNPC = adventureGoalNPC
      Object.assign(adventure, {
        adventureGoalNPC,
        goal: `rescue ${adventureGoalNPC.name}, ${lib.articles.output(adventureGoalNPC.raceNote)} who was caught in a natural disaster.`
      })

      switch (adventure.villain) {
        case 'giant bent on plunder':
          adventureVillain = setup.createNPC(town, { height: 'huge', race: 'giant' })
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain
          })
          break
        case 'fey with a mysterious goal':
          adventureVillain = setup.createNPC(town, { race: 'fey' })
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain
          })
          break
        case 'humanoid cultist':
          adventureVillain = setup.createNPC(town, { profession: ['cleric', 'sorcerer', 'wizard'].random() })
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain,
            villain: `cultist called ${adventureVillain.name}`
          })
          break
        case 'humanoid conqueror':
          adventureVillain = setup.createNPC(town, { profession: ['barbarian', 'fighter', 'paladin'].random() })
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain,
            villain: `fearsome conqueror called ${adventureVillain.name}`
          })
          break
        case 'humanoid seeking revenge':
          adventureVillain = setup.createNPC(town)
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain,
            villain: `${adventureVillain.raceNote} called ${adventureVillain.name} hellbent on revenge.`
          })
          break
        case 'humanoid schemer seeking to rule':
          adventureVillain = setup.createNPC(town, { profession: ['sorcerer', 'rogue'].random() })
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain,
            villain: `conniving${adventureVillain.raceNote}called ${adventureVillain.name} who seeks power`
          })
          break
        case 'humanoid criminal mastermind':
          adventureVillain = setup.createNPC(town, { profession: ['sorcerer', 'rogue'].random() })
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain,
            villain: `conniving${adventureVillain.raceNote}called ${adventureVillain.name} who seeks to build a criminal empire`
          })
          break
        case 'humanoid raider or ravager':
          adventureVillain = setup.createNPC(town, { profession: ['barbarian', 'fighter'].random() })
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain,
            villain: `fearsome raider called ${adventureVillain.name}`
          })
          break
        case 'humanoid under a curse':
          adventureVillain = setup.createNPC(town)
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain,
            villain: `${adventureVillain.raceNote} called ${adventureVillain.name} who was placed under a curse`
          })
          break
        case 'misguided humanoid zealot':
          adventureVillain = setup.createNPC(town, { profession: 'cleric' })
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain,
            villain: `misguided${adventureVillain.raceNote}zealot called ${adventureVillain.name}`
          })
          break
        default:
          adventureVillain = setup.createNPC(town)
          SV.adventureVillain = adventureVillain
          Object.assign(adventure, {
            adventureVillain
          })

          switch (adventure.ally) {
            case 'young adventurer':
              adventureAlly = setup.createNPC(town, { age: 'relatively young' })
              SV.adventureAlly = adventureAlly
              Object.assign(adventure, {
                adventureAlly
              })
              break
            case 'enthusiastic commoner':
              adventureAlly = setup.createNPC(town, { profession: 'peasant' })
              SV.adventureAlly = adventureAlly
              Object.assign(adventure, {
                adventureAlly
              })
              break
            case 'soldier':
              adventureAlly = setup.createNPC(town, { profession: 'fighter', background: 'soldier' })
              SV.adventureAlly = adventureAlly
              Object.assign(adventure, {
                adventureAlly
              })
              break
            case 'priest':
              adventureAlly = setup.createNPC(town, { profession: 'cleric' })
              SV.adventureAlly = adventureAlly
              Object.assign(adventure, {
                adventureAlly
              })
              break
            case 'sage':
              adventureAlly = setup.createNPC(town, { profession: ['cleric', 'monk', 'druid', 'wizard'].random(), background: 'sage' })
              SV.adventureAlly = adventureAlly
              Object.assign(adventure, {
                adventureAlly
              })
              break
            case 'celestial ally':
              adventureAlly = setup.createNPC(town, { race: 'celestial being' })
              SV.adventureAlly = adventureAlly
              Object.assign(adventure, {
                adventureAlly
              })
              break
            case 'fey ally':
              adventureAlly = setup.createNPC(town, { race: 'fey' })
              SV.adventureAlly = adventureAlly
              Object.assign(adventure, {
                adventureAlly
              })
              break
            default:
              adventureAlly = setup.createNPC(town)
              SV.adventureAlly = adventureAlly
              Object.assign(adventure, {
                adventureAlly
              })
              break
          }

          switch (adventure.patron) {
            case 'retired adventurer':
              adventurePatron = setup.createNPC(town, { adventure: 'retired' })
              SV.adventurePatron = adventurePatron
              Object.assign(adventure, {
                adventurePatron
              })
              break
            case 'local ruler':
              adventurePatron = setup.createNPC(town, { profession: 'lord' })
              SV.adventurePatron = adventurePatron
              Object.assign(adventure, {
                adventurePatron
              })
              break
            case 'military officer':
              adventurePatron = setup.createNPC(town, { profession: ['fighter', 'paladin'].random(), background: 'soldier' })
              SV.adventurePatron = adventurePatron
              Object.assign(adventure, {
                adventurePatron
              })
              break
            case 'temple official':
              adventurePatron = setup.createNPC(town, { profession: ['cleric', 'cleric', 'cleric', 'paladin'].random(), background: 'sage' })
              SV.adventurePatron = adventurePatron
              Object.assign(adventure, {
                adventurePatron
              })
              break
            case 'sage':
              adventurePatron = setup.createNPC(town, { profession: ['cleric', 'cleric', 'cleric', 'paladin'].random(), background: 'sage' })
              SV.adventurePatron = adventurePatron
              Object.assign(adventure, {
                adventurePatron
              })
              break
            case 'respected elder':
              adventurePatron = setup.createNPC(town, { age: 'venerable' })
              SV.adventurePatron = adventurePatron
              Object.assign(adventure, {
                adventurePatron
              })
              break
            case 'deity or celestial':
              adventurePatron = setup.createNPC(town, { race: 'celestial being' })
              SV.adventurePatron = adventurePatron
              Object.assign(adventure, {
                adventurePatron
              })
              break
            case 'mysterious fey':
              adventurePatron = setup.createNPC(town, { race: 'fey' })
              SV.adventurePatron = adventurePatron
              Object.assign(adventure, {
                adventurePatron
              })
              break
            case 'former teacher':
              adventurePatron = setup.createNPC(town, { age: 'venerable' })
              SV.adventurePatron = adventurePatron
              Object.assign(adventure, {
                adventurePatron
              })
              break
            default:
              adventurePatron = setup.createNPC(town)
              SV.adventurePatron = adventurePatron
              Object.assign(adventure, {
                adventurePatron
              })
          }
          return adventure
      }
  }
}
