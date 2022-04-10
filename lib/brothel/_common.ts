import { Building } from '../buildings/_common'

export interface Brothel extends Building {
  specialty: string
  talk: string
  rumour: string
  notice: string
  idle: string
}
