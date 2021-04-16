setup.createMarketSellers = (town, obj, number) => {
  // Nearby, a merchant is _____ "Buy this!"
  const shout = [
    'shouting out ',
    'calling ',
    'calling to any who would listen: ',
    'hawking goods, saying ',
    'shouting ',
    'beckoning ',
    'saying loudly ',
    'crying out',
    'loudly yelling',
    'bellowing at passersby',
    'frantically calling out'
  ]

  for (let i = 0; i < number; i++) {
    const npc = setup.createNPC(town, {
      profession: 'merchant',
      merchant: {
        selling: [
          `selling ${lib.market.vendors.selling.random()}`,
          `${shout.random()}"${lib.market.vendors.shouts.random()} ${lib.market.vendors.suffix.random()}"`
        ].random(),
        tent: lib.market.vendors.tent.random()
      },
      hasClass: false,
      isThrowaway: true,
      isShallow: true,
      canBeCustom: true
    })
    obj[npc.key] = npc.merchant
  }
  return obj
}
