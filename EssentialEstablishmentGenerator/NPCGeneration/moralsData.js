setup.getMoralsData = function (npc) {
  setup.moralsData = [
    // Ambition/Contentment
    {
      'name': 'ambitionRoll',
      'note': [
        npc.firstName + ' has big plans, and ' + npc.hisher + ' ambition is ' + npc.hisher + ' main driving force.',
        npc.firstName + ' has little interest in grandiose plans- ' + npc.heshe + ' is happy with ' + npc.hisher + ' current lot in life.'
      ].random()
    },
    // Bravery/Cowardice
    {
      'name': 'braveryRoll',
      'note': [
        'As brave as could be, ' + npc.firstName + ' never backs down in the face of adversity.',
        'A coward through and through, ' + npc.firstName + ' is unlikely to take any risks likely to put ' + npc.himherself + ' in any peril.'
      ].random()
    },
    // Charity/Avarice
    {
      'name': 'charityRoll',
      'note': [
        npc.firstName + ' is greedy, and loves all that glitters.'
      ].random()
    },
    // Chastity/Lust
    {
      'name': 'chastityRoll',
      'note': [
        'Like the wood chopping competition, everyone seems to get a turn on ' + npc.firstName + '.'
      ].random()
    },
    // Diligence/Sloth
    {
      'name': 'diligenceRoll',
      'note': [
        'It is rare for ' + npc.firstName + ' to lift a finger except where absolutely necessary.'
      ].random()
    },
    // Gregariousness/Shyness
    {
      'name': 'gregariousnessRoll',
      'note': [
        'It takes a long time for ' + npc.firstName + ' to open up. ' + npc.heshe.toUpperFirst() + ' is naturally quite shy.'
      ].random()
    },
    // Honesty/Deceit
    {
      'name': 'honestyRoll',
      'note': [
        'It seems that ' + npc.firstName + ' always has an agenda, and ' + npc.heshe + ' has no qualms about lying through ' + npc.hisher + ' teeth to get what ' + npc.heshe + ' wants.'
      ].random()
    },
    // Humility/Pride
    {
      'name': 'humilityRoll',
      'note': [
        npc.firstName + ' loves to boast, and is extremely prideful.'
      ].random()
    },
    // Justness/Arbitrariness
    {
      'name': 'justnessRoll',
      'note': [
        npc.firstName + ' is ruled by a whim, and has no consistency in ' + npc.hisher + ' sense of righteousness.'
      ].random()
    },
    // Kindness/Envy
    {
      'name': 'kindnessRoll',
      'note': [
        npc.firstName + ' cannot help but covet what others have.'
      ].random()
    },
    // Patience/Wrath
    {
      'name': 'patienceRoll',
      'note': [
        npc.firstName + ' has a temper, and is quick to lash out in wrath.'
      ].random()
    },
    // Temperance/Gluttony
    {
      'name': 'temperanceRoll',
      'note': [
        'There is nothing that ' + npc.firstName + ' loves more than ' + npc.hisher + ' food and drink. Gluttony rules ' + npc.himher + '.'
      ].random()
    },
    // Zeal/Cynicism
    {
      'name': 'zealRoll',
      'note': [
        'A constant skeptic, ' + npc.firstName + ' is always pointing out flaws wherever possible.'
      ].random()
    }
  ]
  return setup.moralsData
}
