import { articles } from '../src/articles'
import { Town } from './_common'

export function getTownEconomics (town: Town): string {
  const roll = town.roll.economics
  const { name } = town
  const wealth = lib.getTownWealth(town.roll.wealth)

  if (roll > 90) return `Trade in ${name} is heavily regulated, with taxes, tariffs, and restrictions on what can be brought in and out of the ${town.type}, and people live ${articles.output(wealth)} existence because of it. The trade guild strictly enforces the rules, and costs of doing business in ${name} are high.`
  if (roll > 80) return `Trade in ${name} is regulated, with taxes and restrictions on what can be brought in and out of the ${town.type}, and people live ${articles.output(wealth)} existence because of it. The trade guild enforces rules, with stiff penalties and trade bans for rule-breakers.`
  if (roll > 70) return `Trade in ${name} is regulated, with taxes applied to all goods and services rendered, and people live ${articles.output(wealth)} existence because of it. The trade guild enforces rules, with penalties for rule-breakers.`
  if (roll > 60) return `Trade in ${name} is mostly free, with some taxes applied to goods and services rendered in the city. People live ${articles.output(wealth)} existence because of it.`
  if (roll > 50) return `Trade is reasonable in ${name}, and people live ${articles.output(wealth)} existence because of it; some taxes are applied to certain goods and services that are rendered in the city.`
  if (roll > 40) return `Trade is reasonable in ${name}, and people live ${articles.output(wealth)} existence because of it; some taxes are applied to certain goods and services that are rendered in the city, but the more creative entrepreneurs can find loopholes to make a better profit.`
  if (roll > 30) return `Trade is rather free in ${name}, and people live ${articles.output(wealth)} existence because of it. There are few taxes, and there is little regulation from the authorities on what merchants can and cannot sell.`
  if (roll > 20) return `Trade is free in ${name}, and people live ${articles.output(wealth)} existence because of it. There are no taxes or regulations to speak of.`
  return `Caveat emptor is the guiding philosophy of ${name}, and people live ${articles.output(wealth)} existence because of it. Without any taxes or regulations, the free market reigns supreme here.`
}
