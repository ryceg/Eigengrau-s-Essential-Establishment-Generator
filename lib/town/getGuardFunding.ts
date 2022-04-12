import { assert } from '../src/utils'
import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { Town } from './_common'

export function getGuardFunding (town: Town): string {
  const roll = town.roll.guardFunding
  const fundingTable: ThresholdTable = [
    [90, 'The guards are extremely well funded, and are extensively armed. They regularly have training exercises, and their officers are held to extremely high standards.'],
    [80, 'The guards are well funded, and are armed more than adequately. They regularly have training exercises, and their officers are held to high standards.'],
    [70, 'The guards are well funded, and are armed. They perform annual training exercises, and their officers are held to high standards.'],
    [60, 'The guard is well funded, and armed according to budget. They have training exercises, and their officers are held accountable for their actions.'],
    [50, 'The guard is funded and armed according to the town budget. Their officers are held accountable for their actions.'],
    [40, `The guard is slightly underfunded, and their equipment sometimes falls into slight disrepair. Their officers are held accountable for their actions, though ${town.guard.name} does not have the funding to perform regular training exercises.`],
    [30, `The guard is underfunded, and their equipment is always in slight disrepair. Their officers are held accountable for their actions when public pressure fors for it, though ${town.guard.name} does not have the funding to perform training exercises.`],
    [20, `The guard is quite underfunded, and their equipment is always in disrepair. Their officers are held accountable for their actions only when public pressure calls for it, though ${town.guard.name} does not have the funding to perform any training exercises.`],
    [0, `The guard is severely underfunded, and their equipment is always in disrepair. Their officers are held accountable for their actions only when ${town.rulerType} calls for it, though ${town.guard.name} does not have the funding to train their recruits, resulting in bullies being commonplace.`]
  ]
  const result = getRolledFromTable(fundingTable, roll)
  assert(typeof result === 'string')
  return result
}
