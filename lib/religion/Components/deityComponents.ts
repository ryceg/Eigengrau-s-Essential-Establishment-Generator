import { Deity, DeityStatus } from '../religion'

export function deityIsWas (status: DeityStatus): string {
  if (status === 'dead') return 'was'
  return 'is'
}

export function deityUsesUsed (status: DeityStatus): string {
  if (status === 'dead') return 'used'
  return 'uses'
}

export function deityStatus (deity: Deity): string {
  if (deity.status === 'dead') return `${deity.name} is currently dead.`
  if (deity.status === 'imprisoned') return `${deity.name} is currently imprisoned.`
  if (deity.status === 'dormant') return `${deity.name} is currently dormant.`
  if (deity.status === 'uncertain') return `${deity.name}'s status is currently not known.`
  return ''
}
