import { RaceName } from '../../../lib/index'

interface Setup {
  marriagePools: any
  findParentRaces(npc: NPC): {
    motherRace: RaceName
    fatherRace: RaceName
    lineage: string
  }
  findChildRace(town: Town, motherRace: RaceName, fatherRace: RaceName): RaceName
  findPartnerRace(town: Town, npc: NPC): RaceName
}
