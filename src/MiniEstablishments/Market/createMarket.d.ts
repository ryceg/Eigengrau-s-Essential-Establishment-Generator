import { Options } from '../../Castle/createCastle'
import { Town } from '../../../lib/town/_common'
import { Building } from '../../../lib/buildings/_common'

interface Setup {
  createMarket(town: Town, opts?: Partial<Options>): Building
}
