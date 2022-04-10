import { Town, Building } from '@lib'
import { Options } from '../../Castle/createCastle'

interface Setup {
  createMarket(town: Town, opts?: Partial<Options>): Building
}
