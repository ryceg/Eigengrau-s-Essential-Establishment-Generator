import { dice, fm } from '../src/dice'
import { Faction } from './_common'

export function createLeaderGroup (faction: Faction) {
  if (faction.leadershipType !== 'group') {
    throw new Error('Incompatible faction leadership type.')
  }

  const meetingAccessibilityRoll = dice(2, 50)
  const meetingRegularityRoll = dice(2, 50) + fm(faction.roll.stability, -50)

  faction.leaderGroupSize = dice(3, 4)
  faction.meetingRegularity = getMeetingRegularity(meetingRegularityRoll)
  faction.meetingAccessibility = getMeetingAccessibility(meetingAccessibilityRoll)
  faction.leaderGroupTitle = getLeaderGroupTitle(faction.leaderGroupSize)
}

function getMeetingRegularity (roll: number): string {
  if (roll > 95) return 'every day, at 5pm sharp'
  if (roll > 90) return 'every other day'
  if (roll > 80) return 'every third day'
  if (roll > 70) return 'every week'
  if (roll > 60) return 'every ten days'
  if (roll > 55) return 'whenever a meeting is called'
  if (roll > 50) return 'once a fortnight'
  if (roll > 45) return 'once every three weeks'
  if (roll > 40) return 'once a month'
  if (roll > 30) return 'whenever a leader calls them'
  if (roll > 20) return 'whenever three of the leaders happen to be together'
  if (roll > 10) return 'once in a blue moon'
  return 'at literally any time'
}

function getMeetingAccessibility (roll: number): string {
  if (roll > 95) return 'announced well ahead of time and are open to anyone'
  if (roll > 90) return 'announced ahead of time and are open to anyone'
  if (roll > 80) return 'are open to anyone'
  if (roll > 70) return 'are open to senior members'
  if (roll > 60) return 'are open to members'
  if (roll > 55) return 'are open to people accompanied by a member'
  if (roll > 50) return 'are not usually open to non-members'
  if (roll > 45) return 'are not open to non-members'
  if (roll > 40) return 'are held behind closed doors'
  if (roll > 30) return 'are open to those that can find them'
  if (roll > 20) return 'are invite-only'
  if (roll > 10) return 'closed to all'
  return 'closed and held in secret'
}

function getLeaderGroupTitle (groupSize: number): string {
  if (groupSize > 11) return 'cabinet'
  if (groupSize > 8) return 'board'
  if (groupSize > 3) return 'committee'
  if (groupSize > 2) return 'triumvirate'
  return ''
}
