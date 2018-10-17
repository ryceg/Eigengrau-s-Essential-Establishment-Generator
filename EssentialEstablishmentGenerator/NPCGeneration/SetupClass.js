setup.createClass = function (npc) {
  switch (npc.dndClass) {
    case 'bartender':
      npc.dndClassOrigin = npc.dndClassOrigin || ['I came across $tavern.name as a youngster, and spent many a night here drinking with my buddies. When the old owner died, it went to auction, and I tried to kep the dream alive by buying it. One by one all my friends grew out of it, or moved away.', "Before I ran $tavern.name, it was my dad's. I kept the family business going to support him in his old age.", "When I first got to $town.name, it was practically a ghost town. We built $tavern.name as a social hub for the folk, and it's now what it is today.", 'The old owner was a problem gambler, and when they auctioned off $tavern.name, I jumped at it.', "The old owner thought that $tavern.name wasn't profitable. In the first six months of my stewardship, I turned it around, and have made it the best bloody pub in $town.name!", "Running $tavern.name was the family business, and it was always going to be my lot in life. I'm not angry or disappointed or anything, but I would like to see the world one day, and it stops me from doing that.", 'I was just a kitchen hand when this place started. The owner and I worked through thick and thin, and when his daughter died, he had nobody to leave it to, except for me.', "My parents bought this place as an investment. I don't know what they were thinking- when have you ever heard of a pub being profitable?"].random()
      npc.background = npc.background || ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a dagger'].random()
      npc.wealth += (dice('3d4') * 1000)
      break
    case 'blacksmith':
      npc.dndClassOrigin = npc.dndClassOrigin || ['I was an apprentice in $smithy.name, and took up the title when my old master passed on.', 'I was a tinkerer, and just drifted from town to town doing odd jobs for people until I came to $town.name. I fell in love with the place, and then settled here.', "I followed my love here, set up shop, and now we're happily married, with a steady job and a roof over our heads.", "My father was a blacksmith before me, and then I took up the trade to make him proud. Or at least, I hope I've made him proud. He passed before I opened up shop.", "I was an apprentice, and my old master bitterly despised me because my father married his love. I worked so hard to perfect my craft to impress him thinking that the issue was with me, and then the bastard had a heart attack. Left everything to her. What's my mum gonna do with a smithy?!", 'I spent a lot of time in the mountains with the Dwarves, and they taught me a thing or two while I was there.'].random()
      npc.background = npc.background || ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a dagger'].random()
      npc.wealth += (dice('2d4') * 1000)
      break
    case 'commoner':
      npc.dndClassOrigin = npc.dndClassOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", 'I had a bad string of bets which left me with no other choice than to skip town.', "I was born into a lowly family, and that's where I'll likely stay.", 'I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.', 'I was found guilty of a crime that I did not commit, and was sentenced to serfdom.', 'I grew up in a loving household, but all the love in the world could not pay the debts which we had.', 'I was one of seven children, and when I was old enough to work, my parents put me to it.', 'I was one of eight children, and had to work from a young age to support my family.', 'I was the eldest of four children, but when my father died, I had to leave school and work to support my family.'].random()
      npc.background = npc.background || ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger'].random()
      npc.wealth += (dice('2d4') * 100)
      break
    case 'merchant':
      npc.dndClassOrigin = npc.dndClassOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", 'I had a bad string of bets which left me with no other choice than to skip town.', "I was born into a lowly family, and that's where I'll likely stay.", 'I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.', 'I was found guilty of a crime that I did not commit, and was sentenced to serfdom.', 'I grew up in a loving household, but all the love in the world could not pay the debts which we had.', 'I was one of seven children, and when I was old enough to work, my parents put me to it.', 'I was one of eight children, and had to work from a young age to support my family.', 'I was the eldest of four children, but when my father died, I had to leave school and work to support my family.'].random()
      npc.background = npc.background || ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger'].random()
      npc.wealth += (dice('2d4') * 100)
      break
    case 'barmaid':
      npc.dndClassOrigin = npc.dndClassOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", 'I had a bad string of bets which left me with no other choice than to skip town.', "I was born into a lowly family, and that's where I'll likely stay.", 'I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.', 'I was found guilty of a crime that I did not commit, and was sentenced to serfdom.', 'I grew up in a loving household, but all the love in the world could not pay the debts which we had.', 'I was one of seven children, and when I was old enough to work, my parents put me to it.', 'I was one of eight children, and had to work from a young age to support my family.', 'I was the eldest of four children, but when my father died, I had to leave school and work to support my family.'].random()
      npc.background = npc.background || ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger'].random()
      npc.wealth += (dice('2d4') * 100)
      break
    default:
      var dndClassOrigin = Array.isArray(setup.npcData.classTraits[npc.dndClass].dndClassOrigin)
        ? setup.npcData.classTraits[npc.dndClass].dndClassOrigin.random()
        : 'My circumstances kept me from doing more than being a ' + npc.profession
      var background = Array.isArray(setup.npcData.classTraits[npc.dndClass].background)
        ? setup.npcData.classTraits[npc.dndClass].background.random()
        : 'commoner'
      var classWeapon = Array.isArray(setup.npcData.classTraits[npc.dndClass].weapon)
        ? setup.npcData.classTraits[npc.dndClass].weapon.random()
        : 'a dagger'

      npc.dndClassOrigin = npc.dndClassOrigin || dndClassOrigin
      npc.background = npc.background || background
      npc.weapon = npc.weapon || classWeapon
      // npc.wealth += typeof setup.npcData.classTraits[npc.dndClass].wealth === 'function'
      //   ? setup.npcData.classTraits[npc.dndClass].wealth()
      //   : dice(2, 50)

      // Object.assign(npc, {
      //   dndClassOrigin: npc.dndClassOrigin || setup.npcData.classTraits[npc.dndClass].dndClassOrigin.random() || 'My circumstances kept me from doing more than being a ' + npc.profession,
      //   background: npc.background || setup.npcData.classTraits[npc.dndClass].background.random() || 'commoner',
      //   weapon: npc.weapon || setup.npcData.classTraits[npc.dndClass].weapon.random() || 'a dagger',
      //   wealth: npc.wealth += setup.npcData.classTraits[npc.dndClass].wealth() || dice(2, 50)
      // })
      console.log(npc.name + ' the ' + npc.dndClass + ' with the origin of ' + npc.dndClassOrigin)
      console.log(npc)

      // var getDndClassOrigin = function (npc) {
      //   if (Object.keys(setup.npcData.classTraits).includes(npc.dndClass)) {
      //     npc.dndClassOrigin = setup.npcData.classTraits[npc.dndClass].dndClassOrigin.random()
      //   } else {
      //     npc.dndClassOrigin = 'My circumstances kept me from doing more than being a ' + npc.profession
      //   }
      //   return npc
      // }
      //
      // var getBackground = function (npc) {
      //   if (Object.keys(setup.npcData.classTraits).includes(npc.dndClass)) {
      //     npc.background = setup.npcData.classTraits[npc.dndClass].background.random()
      //   } else {
      //     npc.background = 'commoner'
      //   }
      //   return npc
      // }
      //
      // var getWeapon = function (npc) {
      //   if (Object.keys(setup.npcData.classTraits).includes(npc.dndClass)) {
      //     npc.weapon = setup.npcData.classTraits[npc.dndClass].weapon.random()
      //   } else {
      //     npc.weapon = 'a dagger'
      //   };
      //   return npc
      // }

      // npc.dndClassOrigin = npc.dndClassOrigin || getDndClassOrigin(npc)
      // npc.background = npc.background || getBackground(npc)
      // npc.weapon = npc.weapon || getWeapon(npc)
      // npc.wealth += setup.npcData.classTraits[npc.dndClass].wealth() || dice(5, 200)

      // npc.dndClassOrigin = npc.dndClassOrigin || setup.npcData.classTraits[npc.dndClass].dndClassOrigin.random() || 'My circumstances kept me from doing more than being a ' + npc.profession
      // npc.background = npc.background || setup.npcData.classTraits[npc.dndClass].background.random() || 'commoner'
      // npc.weapon = npc.weapon || setup.npcData.classTraits[npc.dndClass].weapon.random() || 'a dagger'
      // npc.wealth += setup.npcData.classTraits[npc.dndClass].wealth() || dice(2, 50)
  }
  return npc
}
