import { GeneralStore } from '../../../lib/general-store/_common'
import { Town } from '../../../lib/town/_common'

interface Setup {
  createGeneralStoreName(town: Town, generalStore?: Partial<GeneralStore>): string
}
