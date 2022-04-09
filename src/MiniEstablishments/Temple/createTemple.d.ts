
import { Town, Building } from '@lib'
import { Options } from '../../Castle/createCastle'

interface Setup {
  createTemple(town: Town, opts?: Partial<Options>): Building
}
