setup.createRivalsList = function (groupList, faction) {
  switch (faction.type) {
    case 'thieves': groupList.push('priests', 'priests', 'priests', 'commoners', 'commoners', 'commoners', 'commoners')
    case 'merchants': groupList.push('commoners', 'commoners', 'priests', 'priests', 'assassins', 'assassins', 'assassins')
    case 'wizards': groupList.push('seers', 'priests', 'priests', 'priests', 'priests', 'assassins', 'assassins')
    case 'rangers': groupList.push('bandits', 'bandits', 'bandits', 'bandits', 'mercenaries', 'mercenaries', 'mercenaries')
    case 'seers': groupList.push('scholars', 'scholars', 'scholars', 'scholars', )
    case 'priests': groupList.push('artisans', 'bandits', 'bandits', 'bandits', 'bandits', )
    case 'monks': groupList.push('artisans', 'priests', 'priests', 'bandits', 'bandits', 'bandits', )
    case 'assassins': groupList.push('scholars', 'scholars', 'mercenaries', 'mercenaries', 'mercenaries')
    case 'artisans': groupList.push('nobles', 'commoners', 'bandits', 'bandits', 'bandits', 'bandits', 'assassins', 'assassins', 'assassins')
    case 'nobles': groupList.push('commoners', 'commoners', 'commoners', 'commoners', 'commoners', 'bandits', 'bandits', 'bandits', 'bandits', 'assassins', 'assassins', 'assassins', 'assassins')
    case 'bards': groupList.push('bandits', 'bandits', 'bandits', 'bandits', )
    case 'mercenaries': groupList.push('bandits', 'bandits', 'bandits', 'assassins', 'assassins', 'assassins', 'assassins')
    case 'bandits': groupList.push('commoners', 'commoners', 'commoners', 'commoners', 'commoners', 'bandits', 'bandits', 'bandits', 'mercenaries', 'mercenaries', 'mercenaries', 'mercenaries', 'mercenaries')
    case 'craftsmen': groupList.push('commoners', 'commoners', 'bandits', 'bandits', 'bandits', )
    case 'scholars':groupList.push('seers', 'priests', 'priests', 'priests', 'commoners', 'bandits', 'bandits', 'bandits', 'assassins', 'assassins', 'assassins')
  }
  return groupList
}
