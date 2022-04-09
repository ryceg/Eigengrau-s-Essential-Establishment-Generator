import { logger } from '../logger'
import { NPC } from '../npc-generation/_common'
import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { TownType } from '../town/townData'
import { Town } from '../town/_common'
import { Building } from './_common'

interface BuildingSells {
  default: string
  wealth: Record<TownType, ThresholdTable>
}

export function getSellingTalk (town: Town, building: Building, associatedNPC: NPC): string {
  //
  const talk: Record<string, BuildingSells> = {
    smithy: {
      default: '"Sure, what is it you\'re after?"',
      wealth: {
        city: [
          [90, `"Here at ${building.name}, we have everything you could possibly need- adventurers are our bread and butter."`],
          [70, '"We cater specifically to adventurers, so I think that we should be able to accomodate whatever it is you need!"'],
          [50, '"We love getting adventurers- plenty of good wares, if you have the coin."'],
          [40, '"If you\'re looking to commission something, I happen to have a slot free."'],
          [30, '"Please, look around and feel free to ask any questions. We would love your custom."'],
          [20, '"I was beginning to wonder if we would ever get any adventurers in! About time, the bills have been piling up."'],
          [10, '"We don\'t usually get adventurers that often, you\'re so often our biggest sales of the year!"'],
          [0, '"If you are in the market for commissioning something, we sure could use the money..."']
        ],
        town: [
          [90, `"As you can see, we are well stocked and happy to take on any commissions that you might have, assuming that we have the time, of course." ${associatedNPC.firstName} says somewhat flippantly- business seems to be booming.`],
          [70, '"Well, what is it that you need? We have a couple jobs to do, but I might be able to fit you in."'],
          [50, '"So, what can I do for you? We have a free slot, if you are looking to commission something."'],
          [40, `"Is there anything that you are looking for in particular?", the ${associatedNPC.age} ${associatedNPC.manwoman} says. "We could do a commission for you?" ${associatedNPC.heshe} adds, hopefully.`],
          [30, `"If there's anything that you need, please don't hesitate to ask." ${associatedNPC.firstName} says, making an effort to be attentive.`],
          [20, `"If you have any specific requests, we would love to be able to accomodate your business." ${associatedNPC.firstName} says.`],
          [10, `"As you might have noticed, we're not entertaining a lot of business at the moment." ${associatedNPC.firstName} says, adding "Unless you're looking to change that, of course."`],
          [0, `"As you can see, we don't exactly get a lot of custom." ${associatedNPC.firstName} says dryly, seemingly resigned to ${associatedNPC.hisher} bad business.`]
        ],
        village: [
          [90, '"Take a look yourself- I\'ve got some big orders to fill in the meantime."'],
          [70, `"Let me know if you have any questions." the ${associatedNPC.descriptor} says.`],
          [50, `"Let me know if there's anything you need help with!" The ${associatedNPC.descriptor} says chirpily.`],
          [40, `"Take a look around, it's all pretty typical stuff, really." The ${associatedNPC.descriptor} says.`],
          [30, `"Let me know if there's anything that you want, I'll be in the back." The ${associatedNPC.descriptor} says, leaving you to browse the wares.`],
          [20, `"If you see anything that's of interest, let me know.", the ${associatedNPC.age} ${associatedNPC.manwoman} says. "Or, I could probably do a commission, if the price is right."`],
          [10, `"I don't know if you're going to find anything terribly interesting, but feel free to look around." the ${associatedNPC.descriptor} says.`],
          [0, `"If you're in need of a good shovel, you've come to the right place." The ${associatedNPC.descriptor} says, apparently well aware that the smithy isn't exactly doing too well.`]
        ],
        hamlet: [
          [90, `"If you happen to find something that's of interest, then that's all dandy. I'm pretty busy with orders at the moment, though." The ${associatedNPC.descriptor} says. It appears ${associatedNPC.heshe} is quite busy indeed.`],
          [70, `"Let me know if you need any help- we've got the best hunting traps money can buy!" The ${associatedNPC.descriptor} says. It's not quite apparent whether ${associatedNPC.heshe} is being facetious.`],
          [50, `"If you happen to be in need of some horseshoes, you've come to the right place!" The ${associatedNPC.descriptor} says. It's not quite apparent whether ${associatedNPC.heshe} is being facetious.`],
          [40, '"I can\'t promise that there\'s much that you\'ll find terribly interesting."'],
          [30, `"There's not much, so don't expect much- I mostly work for the farmers, alright?" The ${associatedNPC.descriptor} says, seeming to preempt any complaints about the lack of variety.`],
          [20, `"It's not like we're a big fancy city blacksmith for bespoke armour or anything, so don't expect too much." The ${associatedNPC.descriptor} says reproachfully.`],
          [10, `"I can't say that there's a lot on offer, but feel free to browse around." The ${associatedNPC.descriptor} says, apparently well aware that the smithy isn't exactly doing too well.`],
          [0, `"I'm not sure what you might find of interest- just a bunch of horseshoes and nails. Be my guest, though." The ${associatedNPC.descriptor} says, apparently well aware that the smithy isn't exactly doing too well.`]
        ]
      }
    }
  }

  const buildingTalkType = talk[building.type]

  if (typeof buildingTalkType === 'undefined') {
    logger.error(`No building type of ${building.type} for selling chat!`)
    return "What is it you're looking for?"
  }

  const wealthTable = buildingTalkType.wealth[town.type]

  if (typeof wealthTable === 'undefined') {
    logger.error(`No town type of ${town.type} for selling chat for ${building.type}!`)
    return buildingTalkType.default
  }

  return getRolledFromTable(wealthTable, building.roll.wealth) || buildingTalkType.default
}
