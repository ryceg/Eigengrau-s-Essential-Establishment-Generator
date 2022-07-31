import { articles } from '../src/articles'
import { getTownWealth } from './townRender'
import { Town } from './_common'
import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { assert } from '../src/utils'

export function getTownEconomics (town: Town): string {
  const roll = town.roll.economics
  const { name } = town
  const wealth = getTownWealth(town.roll.wealth)
  const wealthTable: ThresholdTable = [
    [90, `Trade in ${name} is heavily regulated, with taxes, tariffs, and restrictions on what can be brought in and out of the ${town.type}, and people live ${articles.output(wealth)} existence because of it. The trade guild strictly enforces the rules, and costs of doing business in ${name} are high.`],
    [80, `Trade in ${name} is regulated, with taxes and restrictions on what can be brought in and out of the ${town.type}, and people live ${articles.output(wealth)} existence because of it. The trade guild enforces rules, with stiff penalties and trade bans for rule-breakers.`],
    [70, `Trade in ${name} is regulated, with taxes applied to all goods and services rendered, and people live ${articles.output(wealth)} existence because of it. The trade guild enforces rules, with penalties for rule-breakers.`],
    [60, `Trade in ${name} is mostly free, with some taxes applied to goods and services rendered in the city. People live ${articles.output(wealth)} existence because of it.`],
    [50, `Trade is reasonable in ${name}, and people live ${articles.output(wealth)} existence because of it; some taxes are applied to certain goods and services that are rendered in the city.`],
    [40, `Trade is reasonable in ${name}, and people live ${articles.output(wealth)} existence because of it; some taxes are applied to certain goods and services that are rendered in the city, but the more creative entrepreneurs can find loopholes to make a better profit.`],
    [30, `Trade is rather free in ${name}, and people live ${articles.output(wealth)} existence because of it. There are few taxes, and there is little regulation from the authorities on what merchants can and cannot sell.`],
    [20, `Trade is free in ${name}, and people live ${articles.output(wealth)} existence because of it. There are no taxes or regulations to speak of.`],
    [0, `Caveat emptor is the guiding philosophy of ${name}, and people live ${articles.output(wealth)} existence because of it. Without any taxes or regulations, the free market reigns supreme here.`]
  ]
  const result = getRolledFromTable(wealthTable, roll)
  assert(typeof result === 'string')
  return result
}
