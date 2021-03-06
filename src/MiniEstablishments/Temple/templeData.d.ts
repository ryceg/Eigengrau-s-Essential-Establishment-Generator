import { ThresholdTable } from '../../../lib/index'
import { Customer } from '../../setup'

interface Setup {
  temple: {
    name: {
      wordNoun: string[]
      soleNoun: string[]
      adjective: string[]
      plural: string[]
      colour: string[]
    }
    rollData: {
      wealth: ThresholdTable
      cleanliness: ThresholdTable
      size: ThresholdTable
      bedCleanliness: ThresholdTable
    }
    get: {
      customers: Customer[]
    }
    prayerSubject: string[]
    dedicated: string[]
    knownFor: string[]
    guardedBy: string[]
    floorPlan: string[]
    architect: string[]
    complex: string[]
    walls: string[]
    ceiling: string[]
    rooms: string[]
    features: string[]
    priestChat: string[]
    priestLook: string[]
    blessingConvey: string[]
    blessingGift: string[]
  }
}
