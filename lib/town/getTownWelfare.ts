import { Town } from './_common'
import { getTownWealth } from './townRender'

export function getTownWelfare (town: Town) {
  const welfareRoll = town.roll.welfare
  const wealthRoll = town.roll.wealth

  if (welfareRoll > 90 && wealthRoll > 50) {
    return 'Welfare is excellent. Citizens can expect free healthcare, education, child care, death services, safety nets, and other programs beneficial to the health of the public.'
  }
  if (welfareRoll > 90) {
    return `Welfare is as good as it possibly can be, given the wealth of ${town.name}. Citizens can expect healthcare, education, child care, and death services.`
  }
  if (welfareRoll > 80 && wealthRoll > 50) {
    return 'Welfare is very good. Citizens can expect education, subsidised healthcare, death services, safety nets, and other programs beneficial to the health of the public.'
  }
  if (welfareRoll > 80) {
    return `Welfare is very good, considering the wealth of ${town.name}. Citizens can expect education, somewhat subsidised healthcare, death services, and other programs beneficial to the health of the public.`
  }
  if (welfareRoll > 70 && wealthRoll > 50) {
    return 'Welfare is good. Citizens can expect death services, and other services such as healthcare and education, provided they are able to pay for it.'
  }
  if (welfareRoll > 70) {
    return 'Welfare is good, all things considered. Citizens can expect death services, and other services such as healthcare and education, provided they are able to pay for it.'
  }
  if (welfareRoll > 60 && wealthRoll > 40) {
    return `Welfare is above average, considering the ${getTownWealth(town.roll.wealth)} quality of life. Citizens can expect a decent education, provided they can pay for it. Healthcare is overtaxed and underfunded, though.`
  }
  if (welfareRoll > 60) {
    return 'Welfare is above average. Citizens can expect a decent education, provided they can pay for it. Healthcare is overtaxed and underfunded.'
  }
  if (welfareRoll > 50) {
    return 'Welfare is average. Citizens can find an education, provided they can pay for it. Healthcare is overtaxed and underfunded, and the government hides behind layers of bureaucracy to dodge complaints.'
  }
  if (welfareRoll > 40) {
    return 'Welfare is below average. Citizens are largely left to their own fate except in extreme cases. Healthcare is neglected, and education is an afterthought. Most citizens would have better luck from private benefactors or the church than relying on the government.'
  }
  if (welfareRoll > 30) {
    return 'Welfare is bad. Citizens can expect the bare minimum of death services. Healthcare and education are fringe cases, and citizens would do better to seek a private benefactor than try and receive treatment from the government.'
  }
  if (welfareRoll > 20) {
    return "Welfare is terrible. Citizens can expect the absolute bare minimum of death services. Healthcare and education are ignored, and those unable to fend for themselves would go hungry if it weren't for private benefactors."
  }
  return 'Welfare is non existent. Citizens can expect the absolute bare minimum of death services. Healthcare and education are totally ignored, and those unable to fend for themselves starve.'
}
