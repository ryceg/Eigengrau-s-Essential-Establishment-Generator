import { Smithy } from './createSmithy'

interface Setup {
  smithy: {
    get: {
      customers: Customer[]
      expertise(smithy: Smithy): Expertise
    }
  }
}

interface Expertise {
  expertise: number
  wealth: number
  note: string
}
