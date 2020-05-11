setup.createMisc = function (faction) {
  const miscList = [
    'currently recruiting',
    'adjusting to a change in leadership',
    'extremely secretive',
    'for the current political regime',
    'against the current political regime',
    'highly involved in the local community',
    'involved with a certain bloodline',
    'recently associated in allegations of bribery',
    'distrusted by those in power',
    'distrusted by the people',
    'suspected in the disappearance of a well known figure',
    'rumoured to dabble in forbidden magics',
    'rumoured to be under investigation',
    'rumoured to own a powerful artifact',
    'rumoured to employ dangerous criminals',
    'rumoured to help lucky commoners'
  ]
  // miscList.concat(setup.factionData.type[type].misc)
  faction.misc = miscList.pluck()
  return faction
}
