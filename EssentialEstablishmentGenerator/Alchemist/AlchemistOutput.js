import { link, replace, linkReplace } from '../../src/engine/html'
import { randomValue } from '../../src/engine/rolls'
import { set, get, unset } from '../../src/engine/story'

import { alchemist } from './js/alchemistData'
import { ChemistTalk } from './ChemistTalk'

const TownMicroEventsOutput = () => ''
const RandomPotion = () => ''
const AlchemistSell = () => ''

export function AlchemistOutput () {
  set('$brew', setup.createAlchemy({ type: 'brewing potion' }))

  unset('$selectedBuilding')

  const $town = get('$town')

  const $alchemist =
    $town.buildings.alchemist[get('$selected').key] ||
    $town.buildings.alchemist[get('$currentPassage').key]

  set('$alchemist', $alchemist)

  const $chemist = set('$chemist', get('$npcs')[$alchemist.chemist.key])

  function generatePlothook () {
    const $chemistPlot = set('$chemistPlot', setup.alchemistMission($town))

    replace('#chemistMission', () => {
      return `${randomValue([`When you say that you're adventurers, ${$chemist.hisher} ${$chemist.eyes} eyes light up, and ${$chemist.heshe} says`, `You chat for a while, and then ${$chemist.firstName} says `, `You discuss business, and when you talk about your adventures, ${$chemist.firstName} asks `])} ${$chemistPlot}`
    })
  }

  return `<h1>${$alchemist.name}</h1>${TownMicroEventsOutput()}<span class="firstcharacter">Y</span>ou enter ${$alchemist.name} and see the ${$chemist.descriptor} chemist is ${$chemist.idle.seededrandom()}. The ${$alchemist.size} room is ${$alchemist.cleanliness}. The ${$chemist.weight} chemist ${randomValue($chemist.greeting)}, and ${randomValue(['saunters', 'walks', 'strolls', 'walks', 'slowly walks', `drags ${$chemist.hisher} feet`, 'swaggers', 'shuffles', 'quickly walks', 'struts', 'comes'])} over to you and introduces ${$chemist.himherself} as <<profile $chemist>>, the ${$chemist.owner} of the shop, and asks what ${$chemist.heshe} can do for you.

${setup.closestMatch(alchemist.get.lookAround($alchemist), 'note', 'cleanliness', 'wealth', $alchemist.roll.cleanliness, $alchemist.roll.wealth)}
${linkReplace(`<h4>Talk with ${$chemist.name}</h4>`, `<h3>${$chemist.name}</h3>${ChemistTalk()}`)}
${link('<h4>Generate plothook</h4>', generatePlothook)}<span id="chemistMission"></span>
${RandomPotion()}
${AlchemistSell()}`
}
