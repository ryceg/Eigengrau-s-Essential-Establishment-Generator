import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { assert } from '../src/utils'
import { dice, fm } from '../src/dice'
import { Faction } from './_common'

export function createLeaderGroup (faction: Faction): void {
  if (faction.leadershipType !== 'group') {
    throw new Error('Incompatible faction leadership type.')
  }

  faction.roll.meetingAccessibility = dice(2, 50)
  faction.roll.meetingRegularity = dice(2, 50) + fm(faction.roll.stability, -50)

  faction.leaderGroupSize = dice(3, 4)
  faction.meetingRegularity = getMeetingRegularity(faction.roll.meetingRegularity)
  faction.meetingAccessibility = getMeetingAccessibility(faction.roll.meetingAccessibility)
  faction.leaderGroupTitle = getLeaderGroupTitle(faction.leaderGroupSize)
}

function getMeetingRegularity (roll: number): string {
  const meetingRegularity: ThresholdTable = [
    [95, 'every day, at 5pm sharp'],
    [90, 'every other day'],
    [80, 'every third day'],
    [70, 'every week'],
    [60, 'every ten days'],
    [55, 'whenever a meeting is called'],
    [50, 'once a fortnight'],
    [45, 'once every three weeks'],
    [40, 'once a month'],
    [30, 'whenever a leader calls them'],
    [20, 'whenever three of the leaders happen to be together'],
    [10, 'once in a blue moon'],
    [0, 'at literally any time']
  ]

  const result = getRolledFromTable(meetingRegularity, roll)
  assert(typeof result === 'string')
  return result
}

function getMeetingAccessibility (roll: number): string {
  const meetingAccessibility: ThresholdTable = [
    [95, 'announced well ahead of time and are open to anyone'],
    [90, 'announced ahead of time and are open to anyone'],
    [80, 'are open to anyone'],
    [70, 'are open to senior members'],
    [60, 'are open to members'],
    [55, 'are open to people accompanied by a member'],
    [50, 'are not usually open to non-members'],
    [45, 'are not open to non-members'],
    [40, 'are held behind closed doors'],
    [30, 'are open to those that can find them'],
    [20, 'are invite-only'],
    [10, 'closed to all'],
    [0, 'closed and held in secret']
  ]
  const result = getRolledFromTable(meetingAccessibility, roll)
  assert(typeof result === 'string')
  return result
}

function getLeaderGroupTitle (groupSize: number): string {
  const leaderGroupSize: ThresholdTable = [
    [11, 'cabinet'],
    [8, 'board'],
    [3, 'committee'],
    [2, 'triumvirate']
  ]
  const result = getRolledFromTable(leaderGroupSize, groupSize)
  assert(typeof result === 'string')
  return result
}
