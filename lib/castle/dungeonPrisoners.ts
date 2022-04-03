import { NPC } from '@lib'
import jsonData from './dungeonPrisoners.data.json'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const dungeonPrisoners: {
  reasonForPunishment?: string
  base?: Partial<NPC>
}[] = jsonData
