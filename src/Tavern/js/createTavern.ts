/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Building, NPC, Tavern, Town } from '@lib'
import { createNPC } from '../../NPCGeneration/createNPC'
import { createRelationship } from '../../NPCGeneration/Relationships/createRelationship'
import { createBartender } from './createBartender'

interface Options {
  newBuilding?(town: Town, type: string): Building
  newBartender?(town: Town, tavern: Building, base?: Partial<NPC>): NPC
  associatedNPC?: Partial<NPC>
}

export const createTavern = (town: Town, opts: Options = {}): Tavern => {
  // FIXME
  // @ts-expect-error Reassuring TS that it's okay that the function doesn't populate it perfectly is unfortunately beyond me.
  const tavern: Tavern = (opts.newBuilding || lib.createBuilding)(town, 'tavern', opts)

  tavern.name = lib.createTavernName()
  lib.logger.openGroup(tavern.name)

  lib.assign(tavern, {
    associatedNPC: (opts.newBartender || createBartender)(town, tavern, opts.associatedNPC)
  })

  lib.assign(tavern, {
    bartender: tavern.associatedNPC
  })

  lib.assign(tavern, {
    barmaid: createNPC(town, {
      isShallow: true,
      gender: 'woman',
      background: 'commoner',
      hasClass: false,
      profession: 'barmaid'
    })
  })

  createRelationship(town, tavern.associatedNPC, tavern.barmaid, { relationship: 'employee', reciprocalRelationship: 'employer' })
  lib.createReciprocalRelationship(town, tavern, tavern.barmaid, {
    relationship: 'employee',
    reciprocalRelationship: 'place of employment'
  })

  lib.assign(tavern, {
    passageName: 'TavernOutput',
    initPassage: 'InitTavern',
    buildingType: 'tavern',
    objectType: 'building',
    localImage: 'tavern-illustration',
    lighting: lib.random(['poorly lit', 'somewhat dark', 'dimly lit', 'well lit', 'brightly lit', 'well lit', 'brightly lit', 'bright and welcoming', 'fire-lit']),
    // @ts-ignore
    stageDescriptor: lib.random(setup.tavern.stageDescriptor),
    wordNoun: lib.random(['tavern', 'tavern', 'tavern', 'tavern', 'pub', 'pub', 'pub', 'inn', 'inn', 'bar', 'bar', 'bar', 'watering hole', 'drinkery']),
    shortages: ['wine', 'booze', 'grog', 'whiskey', 'mutton', 'lamb', 'carrots', 'mugs', 'forks', 'frogs', 'bread', 'mushrooms', 'salt', 'silver pieces', 'chairs', 'eggs', 'potatoes'],
    // @ts-ignore
    fun: lib.random(setup.tavern.fun),
    type: 'tavern',
    tavernType: lib.random([
      'quiet and low-key bar',
      'regular',
      'regular',
      'regular',
      'regular',
      'raucous dive',
      'raucous dive',
      'raucous dive',
      'raucous dive',
      "thieves' guild hangout",
      'gathering place for a secret society',
      'high-end dining club',
      'high-end dining club',
      'gambling den',
      'gambling den',
      `${tavern.associatedNPC.race} only club`,
      "guild-member's only club",
      "guild-member's only club",
      'members-only club',
      'brothel',
      'brothel'
    ]),
    // @ts-ignore
    // patrons: setup.tavern.patrons.random(),
    // @ts-ignore
    game: lib.random(setup.tavern.games)
  })

  lib.assign(tavern.roll, {
    bedCleanliness: random(1, 100)
  })

  // @ts-ignore
  lib.assign(tavern, setup.tavern.get.draws(town, tavern))

  if (tavern.draw === 'proximity to the church') {
    if (['gambling den', 'proximity to the brothel', 'raucous dive'].includes(tavern.type)) {
      tavern.draw = 'proximity to the brothel'
    } else if (tavern.type === 'brothel') {
      tavern.draw = 'cheap prices for customers'
    }
  }
  switch (tavern.draw) {
    case "tavern.reputation + ' atmosphere'":
      tavern.notableFeature = `its ${tavern.reputation} atmosphere`
      break
    default:
      tavern.notableFeature = `its ${tavern.draw}`
  }
  lib.tavernModifiers(town, tavern)

  lib.assign(tavern, {
    lodging: 0,
    colour1: getRandomTavernColour(),
    colour2: getRandomTavernColour(),
    // @ts-ignore
    // Define entertainment if large enough
    entertainment: tavern.roll.size >= 30 ? setup.tavern.get.entertainment(tavern) : ''
  })

  // Define tavern feature based on wealth
  if (tavern.roll.wealth <= 35) {
    // @ts-ignore
    tavern.feature = setup.tavern.get.cheapFeature(tavern)
  } else if (tavern.roll.wealth <= 65) {
    // @ts-ignore
    tavern.feature = setup.tavern.get.averageFeature(tavern)
  } else if (tavern.roll.wealth > 65) {
    // @ts-ignore
    tavern.feature = setup.tavern.get.wealthyFeature(tavern)
  }
  // Sets up building structure and creates building description
  lib.createStructure(town, tavern)
  tavern.structure.descriptor = `${tavern.structure.material.wealth} ${tavern.structure.material.noun} ${tavern.wordNoun} with ${lib.articles.output(tavern.structure.roof.verb)} roof`

  const rollDataVariables = ['wealth', 'size', 'cleanliness', 'roughness', 'reputation']
  for (const propName of rollDataVariables) {
    // @ts-ignore
    lib.defineRollDataGetter(tavern, lib.tavernRollData[propName].rolls, propName)
  }
  // tavernRender(tavern)
  tavern.tippyDescription = `${lib.articles.output(tavern.size).toUpperFirst()} ${tavern.wordNoun} that's ${tavern.cleanliness}, and is known for ${tavern.notableFeature}.`
  lib.logger.info(tavern)
  lib.logger.closeGroup()
  return tavern
}

function getRandomTavernColour () {
  const { colours } = lib
  const available = [colours.yellow, colours.orange, colours.red, colours.purple, colours.blue, colours.green, colours.brown, colours.black, colours.white]
  const selected = lib.random(available)
  return lib.random(selected.colour)
}
