// uses setup.createNPC, setup.profile
setup.raiderTables = {
  intro: {
    create (town, base) {
      base.raidedVillager = setup.createNPC(town, { hasClass: false })
      // raiderLeader isn't used yet
      base.raiderLeader = setup.createNPC(town, { profession: 'barbarian', gender: 'man' })
      base.text = `${base.text} ${lib.articles.output(setup.profile(base.raidedVillager, ['disheveled looking villager', 'beat up looking peasant', 'dirty looking commoner', 'startled looking person'].random()))} runs up to you, and asks for you to help ${base.raidedVillager.himher}; apparently raiders have been tormenting ${town.name}. ${base.raidedVillager.heshe.toUpperFirst()} continues, saying `

      return setup.raiderTables.extort.create(town, base)
    }
  },

  extort: {
    create (town, base) {
      const amount = setup.raiderTables.extort.options.random()
      base.extortAmount = random(amount.min, amount.max)
      base.extortCurrency = amount.currency

      base.text = `${base.text}"They ask for ${base.extortAmount} ${base.extortCurrency} per week from each family`

      return setup.raiderTables.demand.create(town, base)
    },
    options: [
      { min: 2, max: 10, currency: 'cp' },
      { min: 5, max: 12, currency: 'cp' },
      { min: 2, max: 5, currency: 'sp' },
      { min: 1, max: 6, currency: 'sp' }
    ]
  },

  demand: {
    create (town, base) {
      base.demand = setup.raiderTables.demand.options.random()
      base.text = `${base.text}, and demand ${base.demand}. `

      return setup.raiderTables.torment.create(town, base)
    },
    options: [
      // they demand ___
      'that we give them half of all the food we grow',
      'that we provide free room and board whenever they travel through our territory',
      'that we give them the eldest son from each family to bolster their might',
      'that we perform free maintenance and repair of their equipment',
      'that we give them the fairest of our daughters to bear the children of their leader',
      'free food and drink at the tavern every time they come through town',
      'slave labor from the men in our village, who work all day building a new encampment',
      'a cut of all the goods that we produce here',
      'to be tipped off when merchants and travelers come through town',
      'that we store dangerous substances in our homes for them',
      'that we give them half of our livestock',
      'they we supply them with construction materials for a fort they are building',
      'the youngest child of each family as proof of loyalty',
      'a family heirloom from each family in town',
      'that we hand over any jewels our family may have',
      'that we forfeit control of the village to them',
      'that we help smuggle them into a nearby city via covered farmer wagons',
      'that we worship their leader like a god',
      'that we build a statue to their leader',
      'that we produce weapons for their forces'
    ]
  },

  torment: {
    create (town, base) {
      base.torment = setup.raiderTables.torment.options.random()
      base.text = `${base.text}They torment us by ${base.torment}`

      return setup.raiderTables.punish.create(town, base)
    },
    options: [
      'forcing us to grovel like dogs when they come through town',
      'making many of us impart cruel abuses on our loved ones',
      'forcing us to watch as they debase our wives and daughters',
      'making our children fight for their amusement',
      'making us burn our clothing and shave our heads',
      'ordering us to make our children sleep in barns with the livestock',
      'making us eat manure and other foul substances',
      'ordering us to lick their boots clean',
      'forcing us to dance for their amusement',
      'brutally violating the men and boys of our village',
      'forcing our children to kick helpless animals to death',
      'relieving themselves in our well',
      'forcing us to violate our livestock',
      'making us watch as they destroy our market stands',
      'making us smile and sing as they whip us',
      'beating our loved ones while we helplessly watch',
      'urinating on our feet',
      'desecrating our church and assaulting the priest',
      'defiling the graves of our loved ones',
      'painting our bodies with crude obscenities and making us march through town'
    ]
  },

  punish: {
    create (town, base) {
      base.punishment = setup.raiderTables.punish.options.random()
      base.text = `${base.text}, and if we disobey or act out, they ${base.punishment}. `

      return setup.raiderTables.finally.create(town, base)
    },
    options: [
      'hold our children hostage until we give them what they want',
      'destroy our harvest and starve us',
      'kill one of us every day until we give in',
      'make our children suffer for our disobedience',
      'release a dangerous beast into the home of any family that challenges them',
      'make a bloody and public example of any family that disobeys them',
      'slaughter our livestock',
      'poison our well',
      'skin the wife of any man who challenges them alive, and make him listen to her screams',
      'construct a gallows and hang any troublemakers in the center of town',
      'drag any who challenge them behind their horses',
      'take our children as slaves, and kill everyone else',
      'burn our homes to the ground, one by one, until we give in',
      'cut off the right hand of any who defy them',
      'mutilate the faces of our wives',
      'force the children of any who challenge them to drink acid',
      'draw and quarter those who defy them',
      'gouge out the eyes and cut out the tongue of any who stand against them',
      'bind any who defy them to a post, to be eaten by dogs',
      'nail those who defy them to a tree, to suffer and die of exposure'
    ]
  },

  finally: {
    create (town, base) {
      base.finally = setup.raiderTables.finally.options.random()
      base.text = `${base.text}${base.finally}`

      // this is the last clause
      return base
    },
    options: [
      'We have never challenged these fiends. We are powerless to stop them.',
      'A small group of adventurers came through and heard our plight. They sought to help, but the raiders cut them down. We were severely punished.',
      "One family couldn't pay their dues to the raiders. Not two days passed before those bastards made good on their threats.",
      'Some of the men in our village sought to drive out our tormentors. They failed, and the raiders made good on their threats.',
      'We routinely miss payments, and the raiders have yet to carry out their ultimate threat. However, they have punished us in less severe ways.',
      'We managed to drive the raiders off, but fear that they will soon return in greater numbers to make us pay for our defiance.',
      "We haven't dared to challenge them yet, but suspect that they wouldn't actually follow through on their threats. They seem to be more bark than bite.",
      "We've always complied with their demands, but they recently began warring with another raider encampment nearby. Now, they ask us for more and more! If it doesn't stop, we'll have nothing left to give.",
      'Recently, they have stopped coming to collect their payments. We do not know why, and fear to press our luck by investigating.',
      "A second group of raiders has recently arrived, and they, too, demand tribute! We can't possibly pay both.",
      'A stranger passed through town recently, and ended up killing several raiders in a tavern fight. He has already left, and we now fear retaliation.',
      "The raiders have a new leader, now, and this one is even more demanding and cruel than the last. We can't take this anymore!",
      'In spite of their abuses, they seem to spend more time backstabbing each other than enforcing their threats upon us. I can only imagine what it would be like without their in-fighting dividing them.',
      "These raiders are ruthless. Even though we've never defied them, they parade the mutilated remains of travellers through town just to remind us what they're capable of.",
      'There are many among their group who are actually decent folk. They try to keep the abuses from their comrades to a minimum, but can only do so much. If we could bring those few to our defense, it could make all the difference.',
      "So long as we pay on time, the abuses are kept to a minimum. We should really just be thankful that they aren't asking for more.",
      'There is no end to this hell in sight, and our spirits are broken. We keep nothing for ourselves, and are little better than slaves under the brutal rule of these raiders.',
      "We've had enough, and are preparing an ambush.",
      "It's hard to make our payments, but that's just how things work out here. We'd rather not risk inciting the raiders to anger.",
      "Just when we thought things couldn't get worse, one of our daughters was found murdered and brutalized. Enough is enough!"
    ]
  }
}

setup.createRaiders = function (town) {
  const raiderStory = setup.raiderTables.intro.create(town, { text: '' })
  // There are a lot of variables here that can be used in the future
  lib.logger.info(raiderStory)
  return raiderStory.text.toUpperFirst()
}
