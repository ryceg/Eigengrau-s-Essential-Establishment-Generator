setup.createNPC = function (base) {
  // Tables used later
  var index = State.variables.npcs.size
  var skinColours = ['translucent', 'white', 'pale', 'fair', 'light', 'light tan', 'tan', 'pale', 'fair', 'light', 'light tan', 'tan', 'dark tan', 'brown']
  var profession = ['actor', 'advocate', 'advisor', 'animal handler', 'apothecary', 'architect', 'archivist', 'armorer', 'astrologer', 'baker', 'banker', 'barber', 'barkeep', 'blacksmith', 'bookseller', 'brewer', 'bricklayer', 'brothel keeper', 'buccaneer', 'butcher', 'caravanner', 'carpenter', 'cartographer', 'chandler', 'chef', 'clock maker', 'cobbler', 'cook', 'counselor', 'courtesan', 'courtier', 'cowherd', 'dancer', 'diplomat', 'distiller', 'diver', 'farmer', 'fisherman', 'fishmonger', 'gardener', 'general', 'gladiator', 'glovemaker', 'goldsmith', 'grocer', 'guardsman', 'guildmaster', 'hatmaker', 'healer', 'herald', 'herbalist', 'hermit', 'historian', 'hunter', 'ice seller', 'innkeeper', 'inventor', 'jailer', 'jester', 'jeweler', 'judge', 'knight', 'lady', 'leatherworker', 'librarian', 'linguist', 'locksmith', 'lord', 'lumberjack', 'mason', 'masseur', 'merchant', 'messenger', 'midwife', 'miller', 'miner', 'minister', 'minstrel', 'monk', 'mortician', 'necromancer', 'noble', 'nun', 'nurse', 'officer', 'painter', 'patissier', 'perfumer', 'philosopher', 'physician', 'pilgrim', 'potter', 'priest', 'privateer', 'professor', 'roofer', 'ropemaker', 'rugmaker', 'saddler', 'sailor', 'scabbard maker', 'sculptor', 'scavenger', 'scholar', 'seamstress', 'servant', 'shaman', 'shepherd', "ship's captain", 'silversmith', 'slave', 'slaver', 'smith', 'soldier', 'spice merchant', 'squire', 'stablehand', 'stevedore', 'stonemason', 'steward', 'street seller', 'street sweeper', 'student', 'surgeon', 'surveyor', 'sailor', 'tanner', 'tavernkeeper', 'tax collector', 'teacher', 'thatcher', 'thief', 'torturer', 'town crier', 'toymaker', 'vendor', 'veterinarian', 'vintner', 'weaver', 'wetnurse', 'woodcarver', 'wood seller', 'wrestler', 'writer']
  var trait = ['fidgets', 'drinks too much', 'eats too much', 'swears often', 'has poor hygiene', 'cannot resist flirting', 'cannot stop staring at you', 'sweats profusely and easily', 'is a habitual liar', 'embellishes the truth', 'exaggerates details', 'has a short temper', 'is melodramatic', 'gossips about the most mundane things', 'cannot resist a juicy secret', 'chews with an open mouth', 'often sniffs audibly', 'is incredibly gullible', 'is skeptical of everything', 'paces about incessantly', 'makes poor eye contact', 'is a know it all', "corrects people's grammar when they speak", 'blinks constantly', 'bobs head back and forth when speaking', 'is often sarcastic', 'cannot resist making snide comments', 'loses train of thought easily', 'is always shaking']
  var idle = ['sitting, with a piece of bread in hand', 'sitting, mug in hand', 'poring over some map', 'reading some letter intently', 'reading a book', 'shuffling a pack of cards', 'chewing on a piece of hay', 'sharpening a knife', 'buffing a piece of armour', 'polishing a shield', 'sharpening the blade on a fearsome looking dagger', 'cutting an apple into bite sized pieces', 'biting into an apple', 'eating an apple while looking at some book', 'eating a hunk of cheese while reading a book', 'sipping out of a huge mug while reading a book', "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'"]
  var reading = ["a piece of history- my forefather's journal, detailing his life in $town.name when it was just a settlement.", 'my journal, from many years ago.', "my mother's journal, from just before she disappeared", 'a document which I received by postboy two days ago... I believe it is in code, and somebody is trying to tell me something.', "a traitor's memoirs, extremely rare... I thought it would be a good laugh, but some of what he says is concerningly accurate.", "some sort of spell, though I don't know how to read it.", 'a document I bought at the flea market; it looks to be a set of instructions on how to make a golem.', "a book which I bought, believing it to be blank, and suitable for a journal. However, now there's this strange foreign script that I can't read in it.", 'a book that I bought as a gift for my mother, who loves beautiful covers, despite not being able to read.']
  var currentmood = ['annoyed', 'scared', 'relaxed', 'concerned', 'bemused', 'stressed', 'amused', 'content', 'distracted', 'discontent']
  var scar = ['a jagged scar', 'a dark purple scar', 'an angry red scar', 'a long, thin scar running up the arm', 'a scar on the eye', 'a scar around the neck', 'a scar on the throat', 'a fiery red scar', 'a finger missing', 'two fingers missing', 'a chunk of left ear missing', 'a chunk of right ear missing', 'a scar through the eyebrow', 'a scar across the cheek', 'a scar on the nose', 'a scar down the forehead', 'a scar in the middle of the hand', 'a crooked scar along the jaw']
  var tattoo = ['a dagger tattoo', 'an arrow tattoo', 'an anchor tattoo', 'a skull tattoo', 'a pair of crossed bones tattoo', 'a snake tattoo', 'a scorpion tattoo', 'a spider web tattoo', 'a heart tattoo', 'a ring of thorns tattoo', 'a mermaid tattoo', 'a dragon tattoo']
  var beard
  var beardRoll = random(1, 99)
  var currentproject
  var knownLanguages
  var vocalPattern
  var descriptor
  var availableLanguages
  var standardLanguages = ['Common', 'Dwarvish', 'Elvish', 'Gnomish', 'Giant', 'Goblin', 'Halfling', 'Orc']
  var exoticLanguages = ['Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal', 'Primordial', 'Sylvan', 'Undercommon']
  var allLanguages = standardLanguages + exoticLanguages
  var inventory
  var mundane
  var isVillain
  var title
  var hasClass
  var partnerID
  var id
  var wealth = random(60, 260)
  var isThrowaway
  var firstname
  var lastname
  var name
  var note
  var owner
  var pubRumour = setup.createPubRumour()

  // Base random variables first - those that don't depend on others
  var npc = Object.assign({
    gender: ['man', 'woman'].random(),
    race: ['human', 'human', 'human', 'human', 'human', 'human', 'half-elf', 'half-elf', 'elf', 'elf', 'dwarf', 'dwarf', 'gnome', 'halfling', 'half-orc', 'dragonborn', 'tiefling'].random(),
    firstname: firstname,
    lastname: lastname,
    age: ['childlike', 'rather young', 'eighteen year old', 'surprisingly young', 'relatively young', 'relatively young', 'middle aged', 'middle aged', 'middle aged', 'middle aged', 'middle aged', 'relatively old', 'sun wizened', 'quite old', 'ancient'].random(),
    /* currentmood: ["annoyed", "scared", "relaxed", "concerned", "bemused", "stressed", "amused", "content", "distracted"], */
    demeanour: ['calm', 'moody', 'kind', 'conceited', 'cruel', 'mean', 'careful', 'polite', 'happy'].random(),
    calmtrait: ['compassionate', 'cheerful', 'reserved', 'outspoken', 'uninterested', 'gruff', 'eager', 'deceitful', 'foolish', 'strict', 'agreeable', 'mischeivious', 'angry', 'fearful', 'manipulative', 'devout', 'greedy', 'funny', 'dour', 'fun-loving', 'lazy', 'driven', 'boastful', 'artistic', 'assertive', 'carefree', 'cautious', 'confident', 'thoughtful', 'loyal', 'sophisticated', 'weak-willed'].random(),
    stresstrait: ['withdrawn', 'murderous', 'obsessive', 'authoritarian', 'determined', 'brave', 'spiteful', 'belligerent', 'caustic', 'reckless', 'argumentative', 'gluttonous', 'overly protective', 'angry', 'cowardly', 'meticulous', 'sarcastic', 'stubborn', 'destructive', 'practical', 'pushy', 'fanatical', 'secretive', 'scornful', 'courageous', 'impractical', 'calculating', 'industrious', 'manipulative', 'destructive', 'compulsive', 'intolerant'].random(),
    vocalPattern: vocalPattern,
    adventure: ['retired from adventuring', 'currently looking for an adventure', 'looking for assistance', 'recuperating from an adventure', 'on a holiday from adventuring', 'taking a short break from adventuring'].random(),
    haircolour: ['brunette', 'brunette', 'brown', 'brownish', 'auburn', 'amber', 'hazel', 'redhead', 'dark redhead', 'blonde', 'dark blonde', 'white', 'platinum', 'black', 'black'].random(),
    hairtype: ['thick', 'wispy', 'straight', 'straight', 'wavy', 'wavy', 'curly', 'wiry', 'oily', 'lush', 'poofy', 'long', 'braided', 'very long', 'greasy', 'unruly', 'unusually styled', 'short cropped hair'].random(),
    dndclass: ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'rogue', 'ranger', 'paladin', 'sorcerer', 'warlock', 'wizard'].random(),
    background: ['acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'noble', 'outlander', 'sage', 'sailor', 'soldier', 'urchin'].random(),
    pockets: ['5 cp', '6 cp', '15 cp', '22 cp', '27 cp', '5 sp', '5 sp', '6 sp', '7 sp', '2 gp', '34 cp and 4 sp', '12 sp and 7 gp', 'a clove of garlic', 'a vial of ink worth 8sp', 'hardtack', 'an explosive rune, dealing 2d4 fire damage', 'a palm-sized glass sphere', 'a wooden comb', 'fragments of a shattered sword', 'a deck of tarot cards', 'map of a nearby castle', 'map of the local area', 'a tin spoon', 'a mess kit', 'lacy undergarments', 'spectacles worth 5gp', 'a spool of thread', 'a piece of chalk', 'a necklace of animal teeth', "a headhunter's contract", 'a list of people in a nearby city', 'a worn leather strap', 'a ring of iron keys', 'a flask full of salt water', 'a box of candles', 'a vial of quicksilver', "a traveller's journal", 'a lead amulet', 'a signet ring for a noble house', 'a list of local taverns', 'a golden yellow topaz gem worth 50gp', 'a page torn from a spellbook', 'scraps of bad poetry', 'a pair of bloodstained gloves', 'thirteen mouse teeth', 'a pouch full of dried berries', 'an invitation to a wedding that happened a few weeks ago', 'a brass ring', 'a shopping list', 'the cork from a wine bottle', 'a scrap of paper with uninteligible writing on it', 'a smoking pipe', 'a pouch of ruby powder', 'a deed to a ruined tower', 'a bottle of honey', 'a sling with 10 bullets', 'a broken buckle', 'a knot of silk ribbons', 'a silver pearl worth 10gp', 'a potion of Polymorph Self worth 350gp', '1pp wrapped in a crude map', 'pocket sand', 'a wedge of cheese', 'a string of wooden prayer beads', 'a lock of hair', 'a dead mouse', 'a compass', 'an empty flask', '85gp', 'three diamonds worth 30gp each', 'a black pearl worth 50gp', 'a black opal worth 100gp'].random(),
    value: ['experience', 'family', 'progeny', 'learning', 'wealth', 'masterwork', 'revenge', 'intelligence', 'discovery', 'pilgrimage', 'invention', 'miracle', 'secret', 'martyrdom', 'collection', 'patronage', 'fame'].random(),
    drive: ['health', 'beauty', 'thrills', 'knowledge', 'power', 'partnership', 'networking', 'glory', 'entertainment', 'helpfulness', 'bravery', 'compassion', 'piety', 'solitude', 'relationships', 'hedonism', 'privacy'].random(),
    belief: ['piety', 'pragmatism', 'cleverness', 'stoicism', 'reason', 'self-deserving', 'dogma', 'forgiveness', 'learning', 'tough love', 'honor', 'loyalty', 'optimism', 'respect', 'self-discipline', 'integrity'].random(),
    profession: profession.random(),
    trait: trait.random(),
    currentmood: currentmood.random(),
    idle: idle,
    currentproject: currentproject,
    mundane: mundane,
    hasClass: hasClass,
    isVillain: isVillain,
    isThrowaway: isThrowaway,
    partnerID: partnerID,
    availableLanguages: availableLanguages,
    knownLanguages: knownLanguages,
    descriptor: descriptor,
    owner: owner,
    title: title,
    wealth: wealth,
    reading: reading,
    id: id,
    skinColours: skinColours.random(),
    pubRumour: pubRumour
  }, base)
  npc.hair = npc.hairtype + ' ' + npc.haircolour + ' hair'

  if (npc.hasClass === false) {
    npc.dndclass = npc.profession
  }

  if (random(1, 100) >= 60) {
    npc.vocalPattern = ['is incoherent except for a few key words', 'stutters', 'says ‘um’ a lot', 'says ‘like’ a lot', 'swears', "uses thee's and thou's", 'never stops to breathe', 'uses short, clipped sentences', 'talks in third person', "doesn't conjugate well (‘me make good soup’)", 'rolls R’s', 'never uses contractions', 'is whiny', 'obviously has a stuffy nose', 'tongue stuck to back of teeth', 'does so through clenched teeth', 'speaks in a sing-song voice', 'likes to rhyme', "spits on every 's' sound", 'makes all Th-sounds become Z-sounds', 'repeats the last few words of a sentence/thought (‘nice to meet you, meet you’)', 'uses full titles or descriptions of how he knows you (‘ellen-farmers-daughter is pretty’)', 'strings together adjectives/adverbs for more impact (‘wow, your dress is pretty-pretty!’ ‘I am short-short-short.’)', 'all non-proper nouns end with ‘en’/’sen’ (‘may I have some applesen?’ ‘I saw a big moosen!’)', 'all L-sounds become w-sounds', 'repeats the last word you say before responding', 'sings everything', 'does the wrong emphasis on the wrong syllables', 'pauses often', 'has a clipped pattern of speech', 'is rather monotonous', 'whistles on S-sounds', 'spits on Th-sounds and S-sounds (think Sylvester the cat from Looney toons)', 'has a light lisp', 'makes all r-sounds become w-sounds', 'has a severe underbite', 'has a severe overbite', 'speaks out of the corner of his mouth', 'is always pouting', 'makes ‘ar/er’ sounds become ‘aye’ sounds (fart will sound like fight, water will sound like watay)', 'makes soft letters elongated (‘ssssso, hhhhhhow are you?’)', 'slurs words', 'always has a full mouth while talking', 'sighs after each sentence', 'never uses am/is/are/was/were (‘I big.’ ‘She pretty.’)', 'responds in the form of questions', 'mutters'].random()
  }

  setup.createName(npc)

  setup.createAge(npc)

  setup.createRace(npc)

  switch (npc.gender) {
    case 'man':
      Object.assign(npc, {
        heshe: 'he',
        himher: 'him',
        himherself: 'himself',
        hisher: 'his',
        hisherself: 'hisself',
        boygirl: 'boy',
        manwoman: 'man',
        menwomen: 'men',
        malefemale: 'male',
        guygirl: 'guy'
      })
      break
    case 'woman':
      Object.assign(npc, {
        heshe: 'she',
        himher: 'her',
        himherself: 'herself',
        hisher: 'her',
        hisherself: 'herself',
        boygirl: 'girl',
        manwoman: 'woman',
        menwomen: 'women',
        malefemale: 'female',
        guygirl: 'girl'
      })
      break
    default:
      Object.assign(npc, {
        heshe: 'they',
        himher: 'their',
        himherself: 'themself',
        hisher: 'their',
        hisherself: 'theirself',
        boygirl: 'child',
        manwoman: 'person',
        menwomen: 'people',
        malefemale: 'person',
        guygirl: 'child'
      })
      break
  }

  var physicaltraitRoll = Math.floor(Math.random() * 10) + 1
  if (physicaltraitRoll > 8) {
    npc.physicaltrait = scar.random()
  } else if (physicaltraitRoll > 6) {
    npc.physicaltrait = tattoo.random()
  } else if (physicaltraitRoll <= 6) {
    npc.physicaltrait = npc.hair
  }

  setup.createHistory(npc)

  setup.createLifeEvents(npc)

  setup.createClass(npc)

  npc.availableLanguages = [allLanguages - npc.knownLanguages]

  setup.createBackground(npc)

  npc.descriptor = [npc.age + ' ' + npc.racesingular, npc.height + ' ' + npc.racesingular, npc.weight + ' ' + npc.racesingular, npc.height + ' ' + npc.gender + ' with ' + npc.physicaltrait]
  if (typeof beard !== 'undefined') {
    npc.descriptor.push(npc.racesingular + ' with a ' + npc.beard)
  }

  if (npc.hasClass === true) {
    npc.descriptor.push(npc.dndclass)
  }

  if (npc.isThrowaway === undefined) {
    State.variables.npcs.set(++index, npc)
  }

  npc.id = State.variables.npcs[State.variables.npcs.length - 1]

  if (npc.partnerID) {
    setup.setAsPartners(npc, State.variables.npcs[npc.partnerID])
  }

  return npc
}
