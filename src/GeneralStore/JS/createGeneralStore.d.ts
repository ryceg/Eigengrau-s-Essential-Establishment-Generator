import { GeneralStore } from '../../../lib/general-store/_common'

interface Setup {
  createGeneralStore(town: Town, opts?: Partial<GeneralStore>): GeneralStore
}
