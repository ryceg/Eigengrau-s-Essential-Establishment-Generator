import { Town } from '@lib'

interface Setup {
  createTownSquare(town: Town, opts?: Partial<TownSquareOptions>): unknown
}

interface TownSquareOptions {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  newBuilding: typeof setup.createBuilding
}
