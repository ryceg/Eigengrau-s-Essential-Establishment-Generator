setup.createLeaderGroup = function (faction) {
  const meetingAccessibilityRoll = dice(2, 50)
  const meetingRegularityRoll = dice(2, 50) + Math.fairmath(faction.roll.stability, -50)
  faction.leaderGroupSizeRoll = dice(3, 4)

  if (meetingRegularityRoll > 95) {
    faction.meetingRegularity = 'every day, at 5pm sharp'
  } else if (meetingRegularityRoll > 90) {
    faction.meetingRegularity = 'every other day'
  } else if (meetingRegularityRoll > 80) {
    faction.meetingRegularity = 'every third day'
  } else if (meetingRegularityRoll > 70) {
    faction.meetingRegularity = 'every week'
  } else if (meetingRegularityRoll > 60) {
    faction.meetingRegularity = 'every ten days'
  } else if (meetingRegularityRoll > 55) {
    faction.meetingRegularity = 'whenever a meeting is called'
  } else if (meetingRegularityRoll > 50) {
    faction.meetingRegularity = 'once a fortnight'
  } else if (meetingRegularityRoll > 45) {
    faction.meetingRegularity = 'once every three weeks'
  } else if (meetingRegularityRoll > 40) {
    faction.meetingRegularity = 'once a month'
  } else if (meetingRegularityRoll > 30) {
    faction.meetingRegularity = 'whenever a leader calls them'
  } else if (meetingRegularityRoll > 20) {
    faction.meetingRegularity = 'whenever three of the leaders happen to be together'
  } else if (meetingRegularityRoll > 10) {
    faction.meetingRegularity = 'once in a blue moon'
  } else if (meetingRegularityRoll <= 5) {
    faction.meetingRegularity = 'at literally any time'
  } else {
    faction.meetingRegularity = "when there's an issue that needs discussion"
  }

  if (meetingAccessibilityRoll > 95) {
    faction.meetingAccessibility = 'announced well ahead of time and are open to anyone'
  } else if (meetingAccessibilityRoll > 90) {
    faction.meetingAccessibility = 'announced ahead of time and are open to anyone'
  } else if (meetingAccessibilityRoll > 80) {
    faction.meetingAccessibility = 'are open to anyone'
  } else if (meetingAccessibilityRoll > 70) {
    faction.meetingAccessibility = 'are open to senior members'
  } else if (meetingAccessibilityRoll > 60) {
    faction.meetingAccessibility = 'are open to members'
  } else if (meetingAccessibilityRoll > 55) {
    faction.meetingAccessibility = 'are open to people accompanied by a member'
  } else if (meetingAccessibilityRoll > 50) {
    faction.meetingAccessibility = 'are not usually open to non-members'
  } else if (meetingAccessibilityRoll > 45) {
    faction.meetingAccessibility = 'are not open to non-members'
  } else if (meetingAccessibilityRoll > 40) {
    faction.meetingAccessibility = 'are held behind closed doors'
  } else if (meetingAccessibilityRoll > 30) {
    faction.meetingAccessibility = 'are open to those that can find them'
  } else if (meetingAccessibilityRoll > 20) {
    faction.meetingAccessibility = 'are invite-only'
  } else if (meetingAccessibilityRoll > 10) {
    faction.meetingAccessibility = 'closed to all'
  } else if (meetingAccessibilityRoll <= 5) {
    faction.meetingAccessibility = 'closed and held in secret'
  } else {
    faction.meetingAccessibility = 'are open to members'
  }

  if (faction.leaderGroupSizeRoll > 11) {
    faction.leaderGroupTitle = 'cabinet'
  } else if (faction.leaderGroupSizeRoll > 8) {
    faction.leaderGroupTitle = 'board'
  } else if (faction.leaderGroupSizeRoll > 3) {
    faction.leaderGroupTitle = 'committee'
  } else if (faction.leaderGroupSizeRoll === 3) {
    faction.leaderGroupTitle = 'triumvirate'
  } else if (faction.leadershipType === 'individual') {
    faction.leaderGroupTitle = 'leader'
  }
  return faction
}
