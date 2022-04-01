import { createReciprocalRelationship } from './createReciprocalRelationship'
import { Faction } from '../faction/_common'
import { NPC } from '../npc-generation/type-definitions'
import { Town } from '../town/_common'
import { Building } from './_common'
import { setRandom } from '../src/random'
import { setRandomFloat } from '../src/randomFloat'

beforeAll(() => {
  setRandom(Math.random)
  setRandomFloat(() => Math.random())
})

const townDefaults = Object.freeze({
  buildingRelations: [],
  factionRelations: []
})

// @TODO: One (or others) of the following:
// 1. Export the options interface out from `createReciprocalRelationship`
// 2. Define relationships more broadly in an NPC definition and export those out
interface Options {
  relationship: string
  reciprocalRelationship: string
  description?: string | ((entity: Building | Faction, npc: NPC) => string)
}

const getTown = (args = townDefaults) => ({ ...args } as unknown) as Town
const getBuilding = (args = {}) => ({ ...args }) as Building
// const getFaction = (args = {}) => ({ ...args }) as Faction
const getNPC = (args = {}) => ({ ...args }) as NPC
const getOptions = (args = { }) => ({ ...args }) as Options

describe('createReciprocalRelationship', () => {
  test.each([
    { type: 'entity', args: [getTown(), (null as unknown) as Building, getNPC(), getOptions()] },
    { type: 'npc', args: [getTown(), getBuilding(), (null as unknown) as NPC, getOptions()] },
    { type: 'options', args: [getTown(), getBuilding(), getNPC(), (null as unknown) as Options] }
  ])('when $type is falsy - throws Reference Error', (props) => {
    expect(() => {
      const [town, entity, npc, options] = props.args
      createReciprocalRelationship(town as Town, entity as Building, npc as NPC, options as Options)
    }).toThrow(ReferenceError)
  })
})
