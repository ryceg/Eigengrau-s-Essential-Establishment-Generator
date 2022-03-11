/* eslint-disable function-call-context/call-in-function */
import { NPC, Town } from '@lib'
import { Docks } from '../createDocks'
import { docksData } from '../docks'

export class Ship {
  constructor (town: Town, docks: Docks, base: Partial<Ship>) {
    lib.assign(this, docksData.ships.type[this.type])
    this.captain = setup.createNPC(town, docksData.ships.captain[this.captainType])
    lib.assign(docks.ships[this.name], this)

    const rollDataVariables = ['size', 'cleanliness'] as const
    for (const propName of rollDataVariables) {
      lib.defineRollDataGetter(this, docksData.ships.rollData[propName].rolls, propName)
    }
  }

    name = lib.random(docksData.ships.name)
    type = lib.random(Object.keys(docksData.ships.type))
    captainType = lib.random(Object.keys(docksData.ships.captain))
    hull = lib.random(docksData.ships.hullDesc)
    detail = lib.random(docksData.ships.shipDetail)
    event = lib.random(docksData.ships.eventDetail)
    roll = {
      size: random(1, 100),
      cleanliness: random(1, 100)
    }

    captain: NPC
    size = ''
    cleanliness = ''
}
