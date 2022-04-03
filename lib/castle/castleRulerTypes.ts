
import { NPC } from '../npc-generation/_common'
import jsonData from './castleRulerTypes.data.json'

interface CastleRulerType {
  type: string
  probability?: number
  lookingFor?: string[]
  acquisitionMethod?: string
  base?: Partial<NPC>
}

// There's no real way to quash the typing error here;
// we can't specify the castleRuler.base.socialClass as having a narrower type than "string" in json,
// which means that we just have to trust that the data is correct.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - see above
export const castleRulerTypes: CastleRulerType[] = jsonData
