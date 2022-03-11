// uses setup.createNPC

import { Building, BuildingOpts } from '@lib'
import { NPC } from '../../lib/npc-generation/_common'
import { Town } from '../../lib/town/_common'
import { docksData } from './docks'

export interface Docks extends Building {
  notableFeature: string
  notice: string
  associatedNPC: NPC
  ships: Record<string, Ship>
  size: string
  cleanliness: string
  activity: string
  cleanlinessDescriptive: string
  sizeDescriptive: string
  activityDescriptive: string
}

export interface Ship {
  name: string
  type: string
  captainType: string
  hull: string
  detail: string
  event: string
  roll: {
    size: number
    cleanliness: number
  }
  captain: NPC
  size: string
  cleanliness: string
}

export const createDocks = (town: Town, opts?: BuildingOpts) => {
  const docks = lib.createBuilding(town, 'docks', opts?.building) as unknown as Docks
  lib.assign(docks, {
    notableFeature: lib.random(docksData.notableFeature),
    notice: lib.random(docksData.notice),
    passageName: 'DocksOutput',
    initPassage: 'DocksOutput',
    buildingType: 'docks',
    objectType: 'building',
    needsWordNoun: false,
    associatedNPC: setup.createNPC(town, Object.assign({
      isShallow: true,
      profession: 'stevedore'
    }, opts?.npc)),
    wordNoun: lib.random(['docks', 'pier', 'wharf', 'dockyard', 'shipyard', 'quay', 'staithe', 'marina', 'jetty', 'harbor', 'berth', 'port', 'seaport', 'dockyard']),
    ships: {}
  })
  lib.createReciprocalRelationship(town, docks, docks.associatedNPC, { relationship: 'stevedore', reciprocalRelationship: 'place of employment' })

  docks.name = lib.toTitleCase(lib.random([
    `The ${lib.random(['Old', 'New', '', ''])} ${lib.random([`${town.name}`, `${town.name}`, '', '', ''])} ${docks.wordNoun}`,
    `${lib.random([
      docks.associatedNPC.lastName,
      `${docks.associatedNPC.firstName}'s`,
      `${lib.random([
        docks.associatedNPC.firstName,
        docks.associatedNPC.lastName
      ])} Beach`
    ])} ${docks.wordNoun}`
  ]))

  const rollDataVariables = ['size', 'cleanliness', 'activity'] as const
  for (const propName of rollDataVariables) {
    lib.defineRollDataGetter(docks, docksData.rollData[propName].rolls, propName)
  }

  lib.defineRollDataGetter(docks, docksData.rollData.size.rolls, 'sizeDescriptive', 'size', 2)
  lib.defineRollDataGetter(docks, docksData.rollData.cleanliness.rolls, 'cleanlinessDescriptive', 'cleanliness', 2)
  lib.defineRollDataGetter(docks, docksData.rollData.activity.rolls, 'activityDescriptive', 'activity')
  docks.tippyDescription = `${lib.articles.output(docks.wordNoun).toUpperFirst()} that's ${docks.size}. It is ${docks.cleanliness}, and is known for ${docks.notableFeature}.`
  docksData.ships.create(town, docks)

  return docks
}
