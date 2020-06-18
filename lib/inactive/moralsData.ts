import { random } from '../src/random'

export const getMoralsData = (npc: Record<string, unknown>) => [
  // Ambition/Contentment
  {
    name: 'ambitionRoll',
    note: random([
      `${npc.firstName} has big plans, and ${npc.hisher} ambition is ${npc.hisher} main driving force.`,
      `Not particularly ambitious, ${npc.firstName} is content with going with the wind.`,
      `${npc.firstName} has little interest in grandiose plans- ${npc.heshe} is happy with ${npc.hisher} current lot in life.`
    ])
  },
  // Bravery/Cowardice
  {
    name: 'braveryRoll',
    note: random([
      `As brave as could be, ${npc.firstName} never backs down in the face of adversity.`,
      `During moments of extreme stress, ${npc.firstName} pulls through, summoning the courage necessary.`,
      `A coward through and through, ${npc.firstName} is unlikely to take any risks likely to put ${npc.himherself} in any peril.`
    ])
  },
  // Charity/Avarice
  {
    name: 'charityRoll',
    note: random([
      `${npc.firstName} is selfless and charitable.`,
      `Not particularly charitable, but not greedy, ${npc.firstName} acts on a case-by-case basis.`,
      `${npc.firstName} is greedy, and loves all that glitters.`
    ])
  },
  // Chastity/Lust
  {
    name: 'chastityRoll',
    note: random([
      `${npc.firstName} is careful with who ${npc.heshe} chooses as a partner.`,
      `${npc.firstName} requires wining and dining, but has the occasional urge that needs satisfying.`,
      `Like the wood chopping competition, everyone seems to get a turn on ${npc.firstName}.`
    ])
  },
  // Diligence/Sloth
  {
    name: 'diligenceRoll',
    note: random([
      `A hard worker, ${npc.firstName} will not rest until the work is done.`,
      `An honest day's work is common for ${npc.firstName}, provided it's for a good cause.`,
      `It is rare for ${npc.firstName} to lift a finger except where absolutely necessary.`
    ])
  },
  // Gregariousness/Shyness
  {
    name: 'gregariousnessRoll',
    note: random([
      `Ever the affable type, ${npc.firstName} is quick to make friends.`,
      `${npc.firstName} loves making new friends`,
      `${npc.firstName} is a tad shy, and takes a while to open up.`,
      `It takes a long time for ${npc.firstName} to open up, as ${npc.heshe} is naturally quite shy.`,
      `Socially, ${npc.firstName} is not very adroit, though it doesn't bother ${npc.himher}- ${npc.heshe} is rather introverted.`
    ])
  },
  // Honesty/Deceit
  {
    name: 'honestyRoll',
    note: random([
      `${npc.firstName}'s word is ${npc.hisher} bond.`,
      `An earnest type, ${npc.firstName} believes that honesty is the best policy.`,
      `${npc.firstName} is unlikely to lie, unless there is an excellent reason for doing so.`,
      `It seems that ${npc.firstName} always has an agenda, and ${npc.heshe} has no qualms about lying through ${npc.hisher} teeth to get what ${npc.heshe} wants.`
    ])
  },
  // Humility/Pride
  {
    name: 'humilityRoll',
    note: random([
      `It is rare for ${npc.firstName} to boast about their achievements.`,
      `${npc.firstName} prefers for ${npc.hisher} achievements to do the talking.`,
      `${npc.firstName} likes to impress people.`,
      `${npc.firstName}'s insecurities make ${npc.himher} brag.`,
      `${npc.firstName} loves to boast, and is extremely prideful.`,
      `${npc.firstName}'s insecurities make ${npc.himher} brag about the most inconsequential things.`
    ])
  },
  // Justness/Arbitrariness
  {
    name: 'justnessRoll',
    note: random([
      `A strong internal moral compass guides ${npc.firstName}.`,
      `${npc.firstName} always tries to do what is right.`,
      `${npc.firstName} is ruled by a whim, and has no consistency in ${npc.hisher} sense of righteousness.`
    ])
  },
  // Kindness/Envy
  {
    name: 'kindnessRoll',
    note: random([
      `${npc.firstName} is kind, and builds people up rather than tear them down.`,
      `${npc.firstName} is kindly, meaning well to ${npc.hisher} fellow ${npc.racePlural}.`,
      `When others find success, ${npc.firstName} congratulates them, but secretly envies other's successes.`,
      `${npc.firstName} cannot help but covet what others have.`
    ])
  },
  // Patience/Wrath
  {
    name: 'patienceRoll',
    note: random([
      `Even with fools, ${npc.firstName} is patient.`,
      `It takes quite a bit to make ${npc.firstName} lose ${npc.hisher} temper.`,
      `${npc.firstName} is not especially patient with people, and can snap.`,
      `${npc.firstName} has a temper, and is quick to lash out in wrath.`
    ])
  },
  // Temperance/Gluttony
  {
    name: 'temperanceRoll',
    note: random([
      `While ${npc.firstName} does enjoy a ${random(['biscuit', 'nice hunk of cheese', 'freshly baked loaf', 'strong drink', 'nice wine', 'cold beer'])}, ${npc.heshe} does not indulge often.`,
      `Food and drink is oft appreciated by ${npc.firstName}, but not to excess.`,
      `Food and drink is oft appreciated by ${npc.firstName}.`,
      `There is nothing that ${npc.firstName} loves more than ${npc.hisher} food and drink. Gluttony rules ${npc.himher}.`
    ])
  },
  // Zeal/Cynicism
  {
    name: 'zealRoll',
    note: random([
      `${npc.firstName} is passionate about what ${npc.heshe} believes in.`,
      `${npc.firstName} is an ardent believer.`,
      `A constant skeptic, ${npc.firstName} is always pointing out flaws wherever possible.`
    ])
  }
]
