setup.createAlliesList = function (groupList, faction) {
  switch (faction.type) {
    case 'thieves': groupList.push('thieves', 'thieves', 'thieves', 'urchins', 'hitmen', 'hitmen', 'urchins', 'urchins', 'assassins', 'assassins', 'bandits', 'bandits', 'bandits')
    case 'merchants': groupList.push('priests', 'priests', 'hitmen', 'hitmen', 'hitmen', 'nobles', 'nobles', 'nobles', 'artisans', 'artisans', 'artisans', 'mercenaries', 'mercenaries', 'mercenaries', 'mercenaries', 'craftsmen', 'craftsmen', 'craftsmen', 'craftsmen', 'commoners', 'commoners')
    case 'wizards': groupList.push('nobles', 'nobles', 'artisans', 'artisans', 'seers')
    case 'rangers': groupList.push('priests', 'priests', 'nobles', 'nobles', 'seers', 'seers')
    case 'seers': groupList.push('priests', 'priests', 'priests', 'priests', 'nobles', 'nobles', 'nobles', 'nobles')
    case 'priests': groupList.push('nobles', 'nobles', 'nobles', 'artisans', 'artisans')
    case 'monks': groupList.push('priests', 'priests', 'priests', 'priests', 'artisans', 'artisans')
    case 'assassins': groupList.push('thieves', 'thieves', 'thieves', 'urchins', 'urchins', 'urchins', 'bandits', 'bandits', 'bandits')
    case 'artisans': groupList.push('hitmen', 'hitmen', 'nobles', 'nobles', 'nobles', 'nobles')
    case 'nobles': groupList.push('hitmen', 'hitmen', 'hitmen', 'hitmen', 'seers', 'seers', 'seers')
    case 'bards': groupList.push('priests', 'urchins', 'urchins', 'nobles', 'nobles', 'nobles')
    case 'mercenaries': groupList.push('hitmen', 'hitmen', 'hitmen', 'hitmen', 'nobles', 'nobles', 'nobles', 'nobles', 'bandits', 'bandits', 'bandits')
    case 'bandits': groupList.push('hitmen', 'hitmen', 'hitmen', 'hitmen', 'urchins', 'urchins')
    case 'craftsmen': groupList.push('priests', 'nobles', 'nobles', 'nobles', 'artisans', 'artisans', 'seers', 'commoners', 'commoners', 'commoners')
    case 'scholars':groupList.push('priests', 'priests', 'priests', 'nobles', 'nobles', 'artisans', 'artisans', 'seers')
  }
  return groupList
}
