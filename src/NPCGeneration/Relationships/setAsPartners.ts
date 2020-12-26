import type { NPC } from '../../../lib/npc-generation/_common'

/**
 * @warn Uses State.variables.npcs
 */
function setAsPartners (npc1: NPC, npc2: NPC): void {
  const npcs = State.variables.npcs
  if (!npc1 || !npc2 || !npc1?.key || !npc2.key) {
    console.warn('Called setAsPartners() with a null/undefined argument')
    return
  }

  const npcsToClean: NPC[] = []

  if (npc1.partnerID && npcs[npc1.partnerID]) {
    /* NPC1 already had a valid partner; mark it for removal */
    npcsToClean.push(npcs[npc1.partnerID])
  }
  if (npc2.partnerID && npcs[npc2.partnerID]) {
    /* NPC2 already had a valid partner; mark it for removal */
    npcsToClean.push(npcs[npc2.partnerID])
  }

  /* Remove "old" partners first */
  for (const npc of npcsToClean) {
    npc.partnerID = ''
  }

  /* Link the two */
  npc1.partnerID = npc2.key
  npc2.partnerID = npc1.key
  console.log(`${npc1.name} and ${npc2.name} are officially a couple!`)
}

declare global {
  interface Setup {
    setAsPartners: typeof setAsPartners
  }
}

setup.setAsPartners = setAsPartners
