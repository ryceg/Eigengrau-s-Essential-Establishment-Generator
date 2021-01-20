import type { Town } from '@lib'

export const getGuardFunding = (town: Town) => {
  const roll = town.roll.guardFunding

  if (roll > 90) return 'The guards are extremely well funded, and are extensively armed. They regularly have training exercises, and their officers are held to extremely high standards.'
  if (roll > 80) return 'The guards are well funded, and are armed more than adequately. They regularly have training exercises, and their officers are held to high standards.'
  if (roll > 70) return 'The guards are well funded, and are armed. They perform annual training exercises, and their officers are held to high standards.'
  if (roll > 60) return 'The guard is well funded, and armed according to budget. They have training exercises, and their officers are held accountable for their actions.'
  if (roll > 50) return 'The guard is funded and armed according to the town budget. Their officers are held accountable for their actions.'
  if (roll > 40) return `The guard is slightly underfunded, and their equipment sometimes falls into slight disrepair. Their officers are held accountable for their actions, though ${town.guard.name} does not have the funding to perform regular training exercises.`
  if (roll > 30) return `The guard is underfunded, and their equipment is always in slight disrepair. Their officers are held accountable for their actions when public pressure fors for it, though ${town.guard.name} does not have the funding to perform training exercises.`
  if (roll > 20) return `The guard is quite underfunded, and their equipment is always in disrepair. Their officers are held accountable for their actions only when public pressure calls for it, though ${town.guard.name} does not have the funding to perform any training exercises.`
  return `The guard is severely underfunded, and their equipment is always in disrepair. Their officers are held accountable for their actions only when ${town.rulerType} calls for it, though ${town.guard.name} does not have the funding to train their recruits, resulting in bullies being commonplace.`
}
