setup.joinFaction = function (faction) {
  faction.joiningFeeRoll = dice(2, 50)

  var joiningRequirement = ['some social status', 'an excellent reputation', 'a favour to be done', 'to be called on for a favour', 'referral by an existing member', 'referral by several members', 'endorsement by the current leader', 'a display of loyalty', 'a display of skill', 'a display of bravery']
  var joiningInitiation = ['a secret task', 'a mission', 'a secret ritual', 'a simple form to be filled', 'nothing particularly interesting', 'an oath to be taken']
  // still to do: creating tasks for each type of guild, plus requirement

  switch (faction.type) {
    case 'thieves':
      joiningRequirement.push('referral by an existing member', 'referral by several members', 'endorsement by the current leader', 'a display of skill', 'a display of skill', 'a display of loyalty', 'a display of bravery')
      joiningInitiation.push('a heist', 'a secret task', 'a secret ritual', 'a secret ritual')
      break
    case 'merchants':
      joiningRequirement.push('some social status', 'an excellent reputation', 'some social status', 'an excellent reputation')
      joiningInitiation.push('a simple form to be filled', 'a simple form to be filled', 'an oath to be taken')
      break
    case 'wizards':
      joiningRequirement.push('some social status', 'a display of skill', 'a display of skill', 'a display of skill')
      joiningInitiation.push('a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual')
      break
    case 'rangers':
      joiningRequirement.push('some social status', 'referral by an existing member', 'a display of bravery', 'a display of bravery')
      joiningInitiation.push('a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual')
      break
    case 'seers':
      joiningRequirement.push('some social status', 'a display of skill', 'referral by an existing member', 'a display of skill', 'a display of skill')
      joiningInitiation.push('a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual')
      break
    case 'priests':
      joiningRequirement.push('some social status', 'referral by an existing member', 'a display of skill', 'a display of skill')
      joiningInitiation.push('a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual', 'an oath to be taken', 'a secret ritual')
      break
    case 'monks':
      joiningRequirement.push('some social status', 'referral by an existing member', 'a display of skill', 'a display of skill')
      joiningInitiation.push('a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual')
      break
    case 'assassins':
      joiningRequirement.push('referral by an existing member', 'referral by several members', 'endorsement by the current leader', 'a display of skill', 'a display of skill', 'a display of loyalty', 'a display of bravery')
      joiningInitiation.push('a secret task', 'an oath to be taken', 'a secret ritual', 'a secret task', 'an oath to be taken', 'a secret ritual')
      break
    case 'artisans':
      joiningRequirement.push('a display of skill', 'a display of skill', 'a display of skill', 'some social status', 'some social status', 'some social status', 'an excellent reputation', 'an excellent reputation', 'an excellent reputation')
      joiningInitiation.push('a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual')
      break
    case 'nobles':
      joiningRequirement.push('some social status', 'some social status', 'some social status', 'an excellent reputation', 'an excellent reputation', 'an excellent reputation')
      joiningInitiation.push('a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual')
      break
    case 'bards':
      joiningRequirement.push('a display of skill', 'a display of skill', 'a display of skill', 'some social status', 'some social status', 'some social status', 'an excellent reputation', 'an excellent reputation', 'an excellent reputation')
      joiningInitiation.push('a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual')
      break
    default:
      joiningRequirement.push()
      joiningInitiation.push('a simple form to be filled', 'a simple form to be filled', 'an oath to be taken', 'a secret ritual')
  }

  Object.assign(faction, {
    joiningRequirement: joiningRequirement.random(),
    joiningInitiation: joiningInitiation.random()
  })

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
    faction.joiningFee = 'absolutely anything; they could demand two thousand gold, or ' + ['a frog named Roberta', 'an egg from a rooster', "a sparrow's tooth", 'the head of a king', 'a hair off your head', 'a toenail'].random()
  } else {
    faction.joiningFee = 'about a hundred gold pieces'
  }

  //
  // if (faction.placeholderRoll > 95){
  //   faction.placeholder = "excellent";
  // } else if (faction.placeholderRoll > 90){
  //   faction.placeholder = "very good";
  // } else if (faction.placeholderRoll > 80){
  //   faction.placeholder = "quite good";
  // } else if (faction.placeholderRoll > 70){
  //   faction.placeholder = "good";
  // } else if (faction.placeholderRoll > 60){
  //   faction.placeholder = "above average";
  // } else if (faction.placeholderRoll > 55){
  //   faction.placeholder = "slightly above average";
  // } else if (faction.placeholderRoll > 50){
  //   faction.placeholder = "average";
  // } else if (faction.placeholderRoll > 45){
  //   faction.placeholder = "slightly below average";
  // } else if (faction.placeholderRoll > 40){
  //   faction.placeholder = "poor";
  // } else if (faction.placeholderRoll > 30){
  //   faction.placeholder = "quite poor";
  // } else if (faction.placeholderRoll > 20){
  //   faction.placeholder = "very poor";
  // } else if (faction.placeholderRoll > 10){
  //   faction.placeholder = "extremely poor";
  // } else if (faction.placeholderRoll <= 5){
  //   faction.placeholder = "abysmal";
  // } else {
  //   faction.placeholder = "average";
  // }

  return faction
}
