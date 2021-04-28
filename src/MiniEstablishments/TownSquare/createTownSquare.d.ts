import { Town } from '../../../lib/town/_common'

interface Setup {
  createTownSquare(town: Town, opts?: Partial<TownSquareOptions>): unknown
}

interface TownSquareOptions {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  newBuilding: typeof setup.createBuilding
}
