setup.createClass = (town, npc) => {
  console.log(`assigning class traits to ${npc.name}...`)
  let professionOrigin
  let background
  let classWeapon

  const dndClassTraits = lib.classTraits[npc.dndClass]
  const professionTraits = lib.professionTraits[npc.profession]

  if (npc.hasClass !== false && typeof dndClassTraits !== 'undefined') {
    background = Array.isArray(dndClassTraits.background)
      ? dndClassTraits.background.random()
      : professionTraits
        ? professionTraits.background.random()
        : 'commoner'
    classWeapon = Array.isArray(dndClassTraits.weapon)
      ? dndClassTraits.weapon.random()
      : professionTraits
        ? professionTraits.weapon.random()
        : 'a dagger'
  } else if (npc.hasClass === false && professionTraits) {
    background = professionTraits.background.random()
    classWeapon = professionTraits.weapon.random()
  } else {
    console.log(`${npc.name} the ${npc.dndClass} did not have a valid class.`)
    professionOrigin = `My circumstances kept me from doing more than being ${lib.articles.output(npc.profession)}`
    background = 'commoner'
    classWeapon = 'a dagger'
  }

  if (!npc.professionOrigin) {
    npc.professionOrigin = getProfessionOrigin(npc, town)
  }

  npc.professionOrigin = npc.professionOrigin || professionOrigin
  npc.background = npc.background || background
  npc.weapon = npc.weapon || classWeapon
}

function getProfessionOrigin (npc, town) {
  const profession = lib.findProfession(town, npc)

  if (Array.isArray(profession.professionOrigin)) {
    return lib.random(profession.professionOrigin)
  }

  const professionWithArticle = lib.articles.output(npc.profession)

  /** @type {[number, string][]} */
  const originWage = [
    [-25, `I've tried to do a good job as ${professionWithArticle} but am just rubbish at it. I don't think I'm good at anything, really.`],
    [-20, `I've been trying to make it as ${professionWithArticle} but suck at it. I'm beginning to think I was never meant to be ${professionWithArticle}.`],
    [-15, `I've been trying to make it as ${professionWithArticle} but just can't seem to hack it. I think I'll quit.`],
    [-10, `I've had trouble as ${professionWithArticle}. I guess some people are born with it- I'm sure as hell not.`],
    [-5, `I've had a bit of a downturn as ${professionWithArticle}. If it keeps up for much longer, I'm going to begin losing hope.`],
    [0, `I'm working as ${professionWithArticle}. The work is alright, ${['and I enjoy it', 'though it can be a bit tedious', 'I\'ve certainly had worse jobs', 'if a little dull', 'if a little dull at times'].random()}`],
    [5, `I'm on the upswing as ${professionWithArticle}. Things are looking better.`],
    [10, `I'm doing really well as ${professionWithArticle}! Maybe it's luck, maybe a natural talent, I don't know.`],
    [15, `It turns out that I'm pretty good at being ${professionWithArticle}! I enjoy the work.`],
    [20, `It turns out that I'm really good at being ${professionWithArticle}. It's actually kinda easy.`],
    [25, `Not to brag, but I'm a born natural at being ${professionWithArticle}. It's fun, very rewarding work.`]
  ]

  const professionTrait = lib.professionTraits[npc.profession]
  if (typeof professionTrait !== 'undefined') {
    return lib.random(professionTrait.professionOrigin)
  }

  const wageVariation = npc.roll.wageVariation(town)
  for (const [amount, origin] of originWage) {
    if (amount >= wageVariation) return origin
  }

  throw new Error('Could not get profession origin.')
}
