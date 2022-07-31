import { logger } from '../logger'
import { Town } from '../town/_common'
import { weightRandom } from '../src/weightRandom'
import { socialClass } from './socialClass'
import { articles } from '../src/articles'
import { findProfession } from '../src/findProfession'
import { random } from '../src/random'
import { ThresholdTable } from '../src/rollFromTable'
import { NPC } from './_common'
import { Profession } from './professions'
import { wageVariation } from './npcFinances'
import { BackgroundName } from './backgroundTraits'

export function createClass (town: Town, npc: NPC) {
  logger.info(`Assigning class traits to "${npc.name}".`)

  const profession = findProfession(town, npc)
  npc.professionOrigin ||= getProfessionOrigin(npc, town)
  npc.background ||= getProfessionBackground(profession, npc)
}

function getProfessionOrigin (npc: NPC, town: Town): string {
  const profession: Profession = findProfession(town, npc)

  if (profession.professionOrigin) {
    return random(profession.professionOrigin)
  }

  const professionWithArticle = articles.output(npc.profession)

  const originWage: ThresholdTable = [
    [-25, `I've tried to do a good job as ${professionWithArticle} but am just rubbish at it. I don't think I'm good at anything, really.`],
    [-20, `I've been trying to make it as ${professionWithArticle} but suck at it. I'm beginning to think I was never meant to be ${professionWithArticle}.`],
    [-15, `I've been trying to make it as ${professionWithArticle} but just can't seem to hack it. I think I'll quit.`],
    [-10, `I've had trouble as ${professionWithArticle}. I guess some people are born with it- I'm sure as hell not.`],
    [-5, `I've had a bit of a downturn as ${professionWithArticle}. If it keeps up for much longer, I'm going to begin losing hope.`],
    [0, `I'm working as ${professionWithArticle}. The work is alright, ${['and I enjoy it', 'though it can be a bit tedious', 'I\'ve certainly had worse jobs', 'if a little dull', 'if a little dull at times'].random()}`],
    [5, `I'm on the upswing as ${professionWithArticle}. Things are looking better.`],
    [10, `I'm doing really well as ${professionWithArticle}! Maybe it's luck, maybe a natural talent, I don't know.`],
    [15, `It turns out that I'm pretty good at being ${professionWithArticle}! I enjoy the work.`],
    [20, `It turns out that I'm really good at being ${professionWithArticle}. It's actually kinda easy.`],
    [25, `Not to brag, but I'm a born natural at being ${professionWithArticle}. It's fun, very rewarding work.`]
  ]

  for (const [amount, origin] of originWage) {
    if (amount >= wageVariation(town, npc)) return origin
  }

  logger.error('Could not find a suitable profession origin.')
  return originWage[5][1]
}

function getProfessionBackground (profession: Profession, npc: NPC): BackgroundName {
  if (profession.background) {
    return weightRandom(profession.background)
  }
  return weightRandom(socialClass[npc.socialClass].defaultBackground)
}
