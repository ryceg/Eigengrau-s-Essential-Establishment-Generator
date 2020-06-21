setup.joinFaction = function (faction) {
  console.log('determining joining...')

  const joiningRequirement = ['some social status', 'an excellent reputation', 'a favour to be done', 'to be called on for a favour', 'referral by an existing member', 'referral by several members', 'endorsement by the current leader', 'a display of loyalty', 'a display of skill', 'a display of bravery']
  const joiningInitiation = ['a secret task', 'a mission', 'a secret ritual', 'a simple form to be filled', 'nothing particularly interesting', 'an oath to be taken']

  // TODO: Create tasks for each type of guild, plus requirement
  joiningRequirement.push(...setup.factionData.type[faction.type].joiningRequirement)
  joiningInitiation.push(...setup.factionData.type[faction.type].joiningInitiation)

  Object.assign(faction, {
    joiningRequirement: joiningRequirement.random(),
    joiningInitiation: joiningInitiation.random()
  })

  faction.joiningFeeRoll = lib.dice(2, 50)

  if (faction.joiningFeeRoll > 95) {
    faction.joiningFee = 'a single copper, as a show of faith'
  } else if (faction.joiningFeeRoll > 90) {
    faction.joiningFee = 'a single gold piece'
  } else if (faction.joiningFeeRoll > 80) {
    faction.joiningFee = 'ten gold pieces'
  } else if (faction.joiningFeeRoll > 70) {
    faction.joiningFee = 'twenty gold pieces'
  } else if (faction.joiningFeeRoll > 60) {
    faction.joiningFee = 'fifty gold pieces'
  } else if (faction.joiningFeeRoll > 55) {
    faction.joiningFee = 'a hundred gold pieces'
  } else if (faction.joiningFeeRoll > 50) {
    faction.joiningFee = 'two hundred gold pieces'
  } else if (faction.joiningFeeRoll > 45) {
    faction.joiningFee = "two hundred gold pieces, provided there's an empty slot"
  } else if (faction.joiningFeeRoll > 40) {
    faction.joiningFee = "three hundred gold pieces, provided there's an empty slot"
  } else if (faction.joiningFeeRoll > 30) {
    faction.joiningFee = 'five hundred gold pieces'
  } else if (faction.joiningFeeRoll > 20) {
    faction.joiningFee = "five hundred gold pieces, provided there's an empty slot"
  } else if (faction.joiningFeeRoll > 10) {
    faction.joiningFee = 'five hundred gold pieces, plus a tremendous task'
  } else if (faction.joiningFeeRoll <= 5) {
    faction.joiningFee = `absolutely anything; they could demand two thousand gold, or ${['a frog named Roberta', 'an egg from a rooster', "a sparrow's tooth", 'the head of a king', 'a hair off your head', 'a toenail', "your lover's dreams", 'the leaf of a forgotten tree', 'an eyelash from a badger'].random()}`
  } else {
    faction.joiningFee = 'about a hundred gold pieces'
  }

  return faction
}
