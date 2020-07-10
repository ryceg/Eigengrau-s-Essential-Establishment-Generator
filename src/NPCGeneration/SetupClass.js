setup.createClass = (town, npc) => {
  console.log(`assigning class traits to ${npc.name}...`)
  let professionOrigin
  let background
  let classWeapon

  if (npc.hasClass !== false && typeof lib.classTraits[npc.dndClass] !== 'undefined') {
    background = Array.isArray(lib.classTraits[npc.dndClass].background)
      ? lib.classTraits[npc.dndClass].background.random()
      : Array.isArray(setup.npcData.professionTraits[npc.profession].background)
        ? setup.npcData.professionTraits[npc.profession].background.random()
        : 'commoner'
    classWeapon = Array.isArray(lib.classTraits[npc.dndClass].weapon)
      ? lib.classTraits[npc.dndClass].weapon.random()
      : Array.isArray(setup.npcData.professionTraits[npc.profession].weapon)
        ? setup.npcData.professionTraits[npc.profession].weapon.random()
        : 'a dagger'
  } else if (npc.hasClass === false && typeof setup.npcData.professionTraits[npc.profession] !== 'undefined') {
    background = Array.isArray(setup.npcData.professionTraits[npc.profession].background)
      ? setup.npcData.professionTraits[npc.profession].background.random()
      : 'commoner'
    classWeapon = Array.isArray(setup.npcData.professionTraits[npc.profession].weapon)
      ? setup.npcData.professionTraits[npc.profession].weapon.random()
      : 'a dagger'
  } else {
    console.log(`${npc.name} the ${npc.dndClass} did not have a valid class.`)
    professionOrigin = `My circumstances kept me from doing more than being ${lib.articles.output(npc.profession)}`
    background = 'commoner'
    classWeapon = 'a dagger'
  }

  const profession = lib.findProfession(town, npc)

  const originWage = [
    [-25, `I've tried to do a good job as ${lib.articles.output(npc.profession)} but am just rubbish at it. I don't think I'm good at anything, really.`],
    [-20, `I've been trying to make it as ${lib.articles.output(npc.profession)} but suck at it. I'm beginning to think I was never meant to be ${lib.articles.output(npc.profession)}.`],
    [-15, `I've been trying to make it as ${lib.articles.output(npc.profession)} but just can't seem to hack it. I think I'll quit.`],
    [-10, `I've had trouble as ${lib.articles.output(npc.profession)}. I guess some people are born with it- I'm sure as hell not.`],
    [-5, `I've had a bit of a downturn as ${lib.articles.output(npc.profession)}. If it keeps up for much longer, I'm going to begin losing hope.`],
    [0, `I'm working as ${lib.articles.output(npc.profession)}. The work is alright, ${['and I enjoy it', 'though it can be a bit tedious', 'I\'ve certainly had worse jobs', 'if a little dull', 'if a little dull at times'].random()}`],
    [5, `I'm on the upswing as ${lib.articles.output(npc.profession)}. Things are looking better.`],
    [10, `I'm doing really well as ${lib.articles.output(npc.profession)}! Maybe it's luck, maybe a natural talent, I don't know.`],
    [15, `It turns out that I'm pretty good at being ${lib.articles.output(npc.profession)}! I enjoy the work.`],
    [20, `It turns out that I'm really good at being ${lib.articles.output(npc.profession)}. It's actually kinda easy.`],
    [25, `Not to brag, but I'm a born natural at being ${lib.articles.output(npc.profession)}. It's fun, very rewarding work.`]
  ]

  if (!npc.professionOrigin) {
    if (Array.isArray(profession.professionOrigin)) {
      npc.professionOrigin = profession.professionOrigin.random()
    } else if (typeof setup.npcData.professionTraits[npc.profession] !== 'undefined') {
      npc.professionOrigin = setup.npcData.professionTraits[npc.profession].professionOrigin.random()
    } else {
      const wageVariation = npc.roll.wageVariation(town)
      const wageArray = originWage.find(desc => {
        return desc[0] >= wageVariation
      })
      npc.professionOrigin = wageArray[1]
    }
  }

  npc.professionOrigin = npc.professionOrigin || professionOrigin
  npc.background = npc.background || background
  npc.weapon = npc.weapon || classWeapon

  return npc
}
