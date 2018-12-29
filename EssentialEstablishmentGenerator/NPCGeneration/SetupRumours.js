var PersonalInformation, LocalInformation, ItemInformation, Faction, MinorBane, MinorBoon, MinorQuest, MinorEnemy, MajorBane, MajorBoon, MajorQuest, MajorEnemy, OnTheRun, Vendetta, BuyingOrSelling, GoodDeeds, EvilDeeds, Haunted, Cursed, Treasure, Emergency, Warning, SocialEvents, PoliticalEvents, ReligiousEvents, FaithTouched, WeaveTouched, MysteryCult

setup.createRumour = function (town) {
  var Rnd = random(1, 2), Rumour
  switch (Rnd) {
    case 1:
      Rumour = Motivations() + '. ' + PersonalInformation()
      break
    case 2:
      Rumour = Motivations() + '. ' + LocalInformation()
      break
    default:
      Rumour = Motivations() + '. ' + PersonalInformation()
  }

  function Motivations () {
    return [
      'I ' + OnTheRun() + ' from ' + [MinorEnemy(), MinorEnemy(), MajorEnemy()].random() + ' for ' + [GoodDeeds(), GoodDeeds(), GoodDeeds(), EvilDeeds(), EvilDeeds()].random(),
      'I have a vendetta- ' + Vendetta() + ' against ' + [MinorEnemy(), MinorEnemy(), MajorEnemy()].random(),
      "I'm searching for information pertaining to " + [PersonalInformation(), LocalInformation(), ItemInformation()].random(),
      ["I'm ", "I'm ", 'I was '].random() + ['buying ', 'selling '].random() + BuyingOrSelling() + [' at ', ' near ', ' quite a ways from ', ' at '].random() + State.variables.town.name,
      "I'm on a quest to " + MinorQuest(),
      "I'm on a quest to " + [MinorQuest(), MinorQuest(), MajorQuest()].random() + ' for ' + MinorEnemy(),
      "I'm on a great quest, to " + MajorQuest()
    ].random()
  }

  // A - Personal Information
  function PersonalInformation () {
    return [
      'gives a secret about ' + MinorBoon(),
      'a family emergency; ' + Emergency(),
      'passes along a rumor (check Ladder) about the PC as told by a ' + ['friend', 'friend', MinorEnemy()].random(),
      '<blockquote>Gives information that confirms a suspicion held by the PC or the Party</blockquote>',
      'It will concern you that ' + Warning(),
      '<blockquote>Gives Exact Knowledge about information the PC or Party has been investigating</blockquote>',
      'It will concern you greatly that ' + Warning()].random()
  }

  // B – Local Information
  function LocalInformation () {
    return [
      'tells of ' + MajorBoon() + ' concerning the area',
      'tells of emergency ' + Emergency(),
      'passes along knowledge of a ' + SocialEvents(),
      'gives information about ' + [MinorEnemy(), MajorEnemy()].random() + ' threat',
      'passes along information of a ' + PoliticalEvents(),
      'gives information about a ' + ReligiousEvents(),
      'tells of ' + MajorBane()].random()
  }

  // C – Item information
  function ItemInformation () {
    return [
        ['artifact'],
      ['jewelry', 'chest', 'map', 'bucket', 'lantern', 'jar'].random(),
      ['piece of armor', 'piece of armor', 'piece of armor', 'piece of armor', 'piece of armor', 'piece of armor', 'piece of armor', 'piece of armor', 'piece of armor', 'set of armor'].random(),
      ['common', 'common', 'common', 'common', 'common', 'common', 'rare', 'rare', 'rare', 'valuable'].random() + ['longsword', 'longbow', 'short sword', 'dagger', 'greataxe', 'crossbow'].random(),
      ['rod', 'staff', 'wand', 'sceptre', 'crown', 'gemstone'].random(),
      ['statue', 'painting', 'instrument', 'sheet music', 'article of clothing'].random(),
      ['replacement body part', 'replacement body part', 'replacement body part', 'organ'].random()
    ].random()
  }

  // D – Faction
  function Faction () {
    return [
      'mystery cult that ' + MysteryCult(),
      'slavers',
      'brutal overlords',
      'religious warriors',
      'clerics',
      'law and justice officers or warriors',
      'corrupt mercenaries',
      'rogues',
      'merchants guild',
      'cabal of mages'].random()
  }

  // E – Minor Bane
  function MinorBane () {
    return [
      'disease and pestilence',
      'buildings destroyed',
      'a ' + [MinorEnemy(), MajorEnemy()].random() + ' of the party is actively opposing them',
      'loss of items of value',
      'a curse of ' + Curse() + ' has been activated',
      'people have been injured',
      Haunted()].random()
  }

  // F – Major Bane
  function MajorBane () {
    return [
      'bad luck (random penalties[disadvantage] to random die rolls) for 1 month or 10 combats',
      'outbreak of large plague or pestilence',
      'a large loss of monetary wealth',
      'many items of value have been lost or destroyed',
      'many buildings have been damaged or the land has been damaged',
      'many people have been killed',
      'pc or party has attracted the attention of ' + [MinorEnemy(), MajorEnemy()].random()].random()
  }

  // G – Minor Boon
  function MinorBoon () {
    return [
      'enemy (q) (r) has been temporarily thwarted',
      'minor magic item obtained',
      'small amount of money or resources obtained',
      'magicked gemstone obtained (use 0-level or cantrip effect, 1/day, as level 1 caster)',
      'a minor property is awarded or an improvement to a minor property is granted',
      'personal relationship established with potential ally or social status increases with ally',
      'for one day, all activities are easier. +1 to checks'].random()
  }

  // H – Major Boon
  function MajorBoon () {
    return [
      'divine intervention grants a ' + Treasure(),
      'true knowledge of a treasure ' + Treasure() + ' location is obtained',
      'large amount of monetary wealth is granted',
      'an existing skill or knowledge is improved (+1) or a new skill is obtained',
      'a personal relationship is improved',
      ['a major property is awarded ', 'an improvement to a major property is granted'].random(),
      'PC or party is pointed towards an artifact ' + ItemInformation() + " ('specific' on the rumor ladder)"].random()
  }

  // I – Vendetta
  function Vendetta () {
    return [
      'wrongfully jailed or persecuted',
      'racial crusade',
      'revenge for theft or deception',
      'revenge for personal death(s)',
      'religious crusade (local or part of a faithquest)',
      'political persecution',
      'social status destroyed or socially exiled'].random()
  }

  // J – On The Run
  function OnTheRun () {
    return [
      'committed political crime',
      'escaped from detention for crime',
      'committed minor crime of theft, fraud or assualt',
      'committed major crime of theft, murder or rape',
      'committed religious crime',
      'got tangled up with a mystery cult ' + MysteryCult(),
      'unjustly accused'].random()
  }

  // K – Buying Or Selling
  function BuyingOrSelling () {
    return [
      'cloth: raw or finished',
      'wood: raw, finished, furniture, containers, paper',
      'food',
      'beverages: brewed (ales), distilled (spirits), raw (juice) or water',
      'spice: salt, random spice, random herb, il(legal) drugs, or medicine',
      'minerals: raw or refined or gems',
      'luxury: art, rare commodity or masterwork items/weapons/armor'].random()
  }

  // M – Minor Quest
  function MinorQuest () {
    return [
      'commune with avatar',
      'map a location',
      'deliver a message',
      'recover a minor treasure ' + Treasure(),
      'deliver a package',
      ['destroy a minor monster', 'cleanse a tainted area'].random(),
      'rediscover a local forgotten place'].random()
  }

  // N – Major Quest
  function MajorQuest () {
    return [
      'awaken a sleeping NPC called ' + State.setVar('Quest', setup.createNPC(town)),
      ['recover', 'destroy'].random() + ' an artifact ' + ItemInformation(),
      ['aid', 'slay'] + State.setVar('Quest', setup.createNPC(town)),
      'slay a monster',
      ['liberate', 'enslave'] + State.setVar('Quest', setup.createNPC(town)),
      'discover a lost foreign land',
      'save or destroy the world'].random()
  }

  // O – Good Deeds
  function GoodDeeds () {
    return [
      'freeing an innocent from imprisonment',
      'correct a long-standing error',
      'helping unfortunates with financial aid',
      'spreading a charitable political message or religious doctrine',
      'helping local children or relatives to overcome oppression',
      'heal the sick and comfort the dying',
      'using an artifact ' + ItemInformation() + ' to spread goodwill'].random()
  }

  // P – Evil Deeds
  function EvilDeeds () {
    return [
      'humiliate and torture a rival',
      "collect an extortion's payoff and punish the offender",
      'steal from friends or family',
      'badly beat or kill a rival',
      'destroy a business, financially or physically',
      'agitate a harmful ' + ['political message', 'religious doctrine'].random(),
      'spread lies and rumors against an individual or group of a shocking nature'].random()
  }

  // Q – Minor Enemy
  function MinorEnemy () {
    return [
      'a snubbed ex-friend',
      'a school bully',
      'a business rival',
      'a local thug',
      'a romantic rival',
      'a spiteful boss or teacher',
      'a family member'].random()
  }

  // R – Major Enemy
  function MajorEnemy () {
    return [
      'a politician or political group',
      'a powerful rogue/thug/assassin',
      "a noble's family",
      'a religious ' + ['cult', 'sect', 'group', 'temple'].random(),
      'a powerful ' + ['mage', 'cabal'],
      'a mercenary group',
      'a mysterious stranger named Morgoleth'].random()
  }

  // S – Haunted
  function Haunted () {
    return [
      'spirits locked in battle',
      'a tortured revenant who must relive its brutal murder',
      'a benign phantom who provides small comforts and messages',
      'a crazed banshee',
      'a spiteful haunt, who appears as dead loved ones and friends',
      'a playful poltergeist, a childish trickster',
      'an evil ghost, driven to consume lifeforce in a bid to regain life'].random()
  }

  // T – Cursed
  function Cursed () {
    return ['time moves at a different speed',
      'sleep and rest is impossible',
      'extreme heat or cold',
      'an overwhelming aura of helplessness and suffering',
      'plagues of vermin',
      'foul weather',
      'corruption of reality'].random()
  }

  // U – Treasure
  function Treasure () {
    return ['potions',
      'gems',
      'weapons or armor',
      'coins',
      'wands, rods, and staves',
      'clothing',
      'artifact ' + ItemInformation()].random()
  }

  // V – Emergency
  function Emergency () {
    return ['political power is dead or arrested/exiled',
      'business in trouble',
      'family friend ill or mad or dead',
      'hometown has been ' + ['attacked', 'enslaved', 'destroyed'].random(),
      "there's a disease epidemic",
      'my ' + ['close relative', 'spouse'].random() + ' has done something terrible',
      'all resources or income has been stolen or destroyed'].random()
  }

  // W – Warning
  function Warning () {
    return ['a powerful enemy is coming for you',
      'an enemy is plotting against you',
      'the government is investigating you',
      'a ' + ['friend', 'lover', 'ally', 'friend'].random() + ' is lying to you',
      'a ' + ['friend', 'co-worker', 'ally', 'friend'].random() + ' is stealing from you',
      'a rival is spreading terrible lies and rumors',
      'an avatar is coming'].random()
  }

  // X – Social Events
  function SocialEvents () {
    return ['an invitation to an upcoming ' + ['party', 'play', 'banquet', 'festival', 'party', 'dinner'].random() + ' given by a mysterious stranger.',
      'a local revival of religious followers is nearby, and drawing crowds',
      'a challenge has been issued by ' + State.variables.townLeader + ', calling for feats of ' + ['strength', 'wit', 'creativity', 'genius', 'dexterity', 'constitution'].random(),
      'the (guild-house) is permitting new members to join, decided by a contest',
      'a circus has come to town. Rumors are they are taking on workers and performers',
      'a fancy dress party for ' + State.variables.townLeader + 'has drawn all the wealthy in the area',
      "the marriage/birth/death/divorce/something else of (local ruler) or (ruler's family/spouse)"].random()
  }

  // Y – Political Events
  function PoliticalEvents () {
    return ['opposition gains control through a coup',
      'a downshift in the support of financial backers has driven prices way up',
      'a noble is accused of a terrible crime',
      'a marriage between noble houses has been announced, rumors of treachery persist',
      "a shift in the government's stance on taxes has been taken badly by the populace",
      'corruption rumors abound, and evidence of murder and treachery is begin sought',
      'powerful figure has been killed or exiled or worse'].random()
  }

  // Z – Religious Events
  function ReligiousEvents () {
    return ['avatar issues sanctions',
      'open warfare against temple enemies is now public knowledge',
      'new ' + ['edict', 'sanction'].random() + " is announced, causing a radical shift in the local population's mood",
      'an expedition to the heathen lands has been announced',
      'temple leaders have declared a peace agreement and a summit of faith is announced.',
      'an artifact or holy relic has been ' + ['destroyed', 'found', 'found'] + ' and a call to the faithful has gone out',
      'avatar appears and denounces/blesses the faithful and punishes/rewards with a bane/boon'].random()
  }

  // AA – Faith Touched
  function FaithTouched () {
    return ['dreams of the lives of those who gave their lives in sacrifice for the faith',
      'all skills relating to the practice of the faith are more easily accomplished. +1',
      "hallucinations of the landscape of the deity's plane haunt the waking mind",
      'those not of the faith will be psionically attacked by the environment, driving them out',
      'animal servants of the deity roam the grounds here, protecting from heathen intruders',
      'all divine spells are cast here as if the caster was 1 level higher.',
      'manifestation of an avatar. its mood depends on the pcs interaction'].random()
  }

  // BB – Weave Touched
  function WeaveTouched () {
    return ['a living mask of a jester can be found here, hidden, but waiting. the parasite sleeps.',
      'all skills relating to the practice of the arcane mysteries are more easily accomplished. +1',
      'time and space are on vacation here. Non-causality is a possibility. Dimensionally weird. Non-euclidian geometry abounds.',
      'all arcane objects are recharged here, but can only be used once per item per location',
      'astral and ethereal creatures are feeding from this bountiful font. They are hostile',
      'all arcane spells are cast here as if the caster were 1 level higher',
      'wild magic regularly spawns here, bathing the area with random level spells and duration'].random()
  }

  // CC – Mystery Cult
  function MysteryCult () {
    return ['trying to return/exile/free/enslave/destroy/rebirth a minor/major deity',
      'collecting objects to trade to a deity for power',
      'thralls under a larger power, acquiring resources, knowledge, manpower for a larger plan',
      'disaffected people angry at inequality. they have resorted to violence and rhetoric',
      'animal worshipers, devoted to returning humanity to a more primal lifestyle',
      'outsiders stealing/killing/trading/enslaving/helping the local populace',
      'wealthy cannibals and defilers, seeking only pleasure for themselves'].random()
  }
  return Rumour
}
