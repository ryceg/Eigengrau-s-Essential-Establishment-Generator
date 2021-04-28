import { Building } from '../../../lib/buildings/_common'
import { Town } from '../../../lib/town/_common'
import { Options } from '../../Castle/createCastle'

interface Setup {
  createTemple(town: Town, opts?: Partial<Options>): Building
}
