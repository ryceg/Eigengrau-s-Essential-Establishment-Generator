import { GeneralStore, Town } from '@lib'

interface Setup {
  createGeneralStoreName(town: Town, generalStore?: Partial<GeneralStore>): string
}
