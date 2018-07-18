setup.createNPC = function (base) {
  // Tables used later
  var index = State.variables.npcs.size
  var baseName = 'NPC'
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
  var wealth = random(6, 26)
  var isThrowaway
  var firstname
  var name
  var note
  var owner
  var pubRumour = setup.createPubRumour()

  // Base random variables first - those that don't depend on others
  var npc = Object.assign({
    gender: ['man', 'woman'].random(),
    race: ['human', 'human', 'human', 'human', 'human', 'human', 'half-elf', 'half-elf', 'elf', 'elf', 'dwarf', 'dwarf', 'gnome', 'halfling', 'half-orc', 'dragonborn', 'tiefling'].random(),
    firstname: firstname,
    lastname: State.variables.name.last.random(),
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
  npc.name = npc.firstname + ' ' + npc.lastname
  setup.createHistory(npc)

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
    case 'nonbinary':
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

  var physicaltraitroll = Math.floor(Math.random() * 10) + 1
  if (physicaltraitroll > 8) {
    npc.physicaltrait = scar.random()
  } else if (physicaltraitroll > 6) {
    npc.physicaltrait = tattoo.random()
  } else if (physicaltraitroll <= 6) {
    npc.physicaltrait = npc.hair
  }

  switch (npc.race) {
    case 'human':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        raceplural: 'humans',
        raceadjective: 'human',
        racelanguage: 'Common',
        knownLanguages: ['Common'],
        height: ['tiny', 'short', 'short', 'slightly below average height', 'rather average height', 'slightly above average height', 'tall', 'tall', 'tall', 'giraffe-like'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'beefy', 'muscular', 'slightly underweight', 'slightly overweight', 'slightly overweight', 'round', 'tubby', 'portly'].random()
      })
      npc.racenote = npc.height + ' ' + npc.gender
      if (npc.gender === 'man') {
        npc.racesingular = 'man'
        if (npc.beardRoll >= 27) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      } else {
        npc.racesingular = 'woman'
      }
      break
    case 'elf':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        racesingular: 'elf',
        raceplural: 'elves',
        raceadjective: 'elfish',
        racelanguage: 'Elvish',
        knownLanguages: ['Common', 'Elvish'],
        height: ['rather average height', 'slightly above average height', 'tall', 'tall', 'tall'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'slightly underweight'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 87) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'dwarf':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'dark brown', 'hazel', 'green', 'blue', 'gray', 'brown', 'dark brown', 'hazel', 'green', 'blue', 'gray', 'aqua'].random(),
        racesingular: 'dwarf',
        raceplural: 'dwarves',
        raceadjective: 'dwarven',
        racelanguage: 'Dwarven',
        knownLanguages: ['Common', 'Dwarvish'],
        height: ['short', 'squat'].random(),
        weight: ['stocky', 'beefy', 'muscular', 'slightly underweight', 'slightly overweight', 'slightly overweight', 'round', 'tubby', 'portly'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 2) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'well-groomed beard going down to his chest', 'goatee', 'goatee that seems to be trying to level up into a beard', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'halfling':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        racesingular: 'halfling',
        raceplural: 'hobbits',
        raceadjective: 'halfling',
        racelanguage: 'Halfling',
        knownLanguages: ['Common', 'Halfling'],
        height: ['short', 'tiny', 'diminuitive', 'little'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'beefy', 'muscular', 'slightly underweight'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 92) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'half-orc':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'orange', 'brown', 'hazel', 'yellow', 'amber', 'orange', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red'].random(),
        racesingular: 'half-orc',
        raceplural: 'half-orcs',
        raceadjective: 'orcish', /* not "demiorcish"? */
        racelanguage: 'Orcish',
        knownLanguages: ['Common', 'Orc'],
        height: ['rather average height', 'slightly above average height', 'tall', 'tall', 'intimidatingly tall'].random(),
        weight: ['slightly underweight', 'stocky', 'beefy', 'muscular', 'extremely muscular', 'slightly overweight'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 75) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'dragonborn':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'aqua', 'red', 'purple', 'gold', 'gold'].random(),
        racesingular: 'drake',
        raceplural: 'drakes',
        raceadjective: 'draconian',
        racelanguage: 'Draconic',
        knownLanguages: ['Common', 'Draconic'],
        height: ['rather average height', 'slightly above average height', 'tall', 'tall', 'tall'].random(),
        weight: ['stocky', 'beefy', 'muscular', 'slightly underweight', 'extremely muscular', 'slightly overweight'].random()
      })
      npc.racenote = npc.race

      Object.assign(npc, {
        note: [[npc.firstname + ' is covered in glimmering red scales, which seem to turn a slight orange color in the sunlight.',
          npc.firstname + ' has several scales missing and a long gash running along ' + npc.hisher + ' face.',
          npc.firstname + ' has two long, spined and membranous ears.',
          npc.firstname + ' has a slightly off-center snout, akin to a poorly-reset broken nose.',
          npc.firstname + ' has two small bony nubs at ' + npc.hisher + ' shoulder blades- vestigial wings.',
          npc.firstname + ' has poor control over ' + npc.hisher + ' breath weapon, and when ' + npc.sheshe + ' is agitated, ' + npc.hisher + ' nostrils and mouth crackle with lightning/exude a green gas/smoke like chimneys drip green acid/breath puffs of frosty white air.',
          npc.firstname + ' has highly acidic saliva.',
          npc.firstname + ' has long overly curled horns.',
          npc.firstname + ' has a heart that glows bright enough to be seen beneath the scales.',
          npc.firstname + ' has spines that stick out from every joint.',
          'Smoke is always slowly rising from ' + npc.firstname + '’s nose and mouth.',
          npc.firstname + "'s scales are prismatic.",
          npc.firstname + ' has a tiny pair of unusable wings.',
          npc.firstname + ' has 2 inch retractable nail/talons on ' + npc.hisher + ' fingers and toes.',
          npc.firstname + ' has eyes that change color depending on ' + npc.hisher + ' emotions.',
          npc.firstname + ' appears to have had ' + npc.hisher + ' claws torn off, so a leather bound brace of daggers serves as their replacement.',
          npc.firstname + ' has random different colored scales glistening blue and white.',
          npc.firstname + ' has a crest of multicolored feathers atop ' + npc.hisher + ' head, resembling a hairdo.',
          npc.firstname + ' is branded on ' + npc.hisher + ' forehead with a strange, unknown symbol.',
          npc.firstname + ' only refers to themselves by a number emblazoned on ' + npc.hisher + ' gear (necklace, scabbard, belt, etc.).',
          npc.firstname + "'s acid breath clearly went wrong, as the flesh on the right side of " + npc.hisher + ' face, from the middle of ' + npc.hisher + ' neck to the top of ' + npc.hisher + ' mouth is burned off.',
          npc.firstname + ' is missing all of ' + npc.hisher + ' scales, revealing the pale skin beneath. The colour is only identified by a small patch of scales on ' + npc.hisher + ' cheek.',
          npc.firstname + ' has one or more hidden paths on ' + npc.hisher + ' skin where scales never developed.',
          npc.firstname + ' has traces of another colour (for example, little splotches of black scales on a green dragonborn).',
          npc.firstname + '‘s voice seems to come from within, rather than from ' + npc.hisher + ' lips and mouth moving when ' + npc.sheshe + ' talks.',
          npc.firstname + "'s eyes gleam red while in combat.",
          npc.firstname + ' is constantly drawn to live as a dragon and hoard all the loot.. for safe keeping of course.',
          npc.firstname + "'s fangs grow in the presents of injured enemies.",
          npc.firstname + ' has a cracked or broken snout horn.',
          npc.firstname + ' has a fake, steel nose horn.',
          npc.firstname + ' has transluscent or transparent patches of scales.',
          npc.firstname + ' has a frill running down the chin and neck.',
          npc.firstname + ' has a frill running up the snout, head, and the back of the neck.',
          npc.firstname + ' has 3 eyelids: 2 normal ones, and a thin, almost transparent one underneath that moves in a perpendicular direction to the other two.',
          npc.firstname + ' tends to hiss when speaking.',
          npc.firstname + ' has shiny blue scales. The darkness of the color is determined by the temperature.',
          npc.firstname + "'s breath weapon is always accompanied by a horrific, sickly sweet stench.",
          npc.firstname + ' has two large (possibly colorful) frills instead of horns.',
          npc.firstname + ' has albinism, making it hard to tell what exact kind of dragonborn ' + npc.sheshe + ' is.',
          npc.firstname + ' has a small patch of scales etched with scratches. It’s become a nervous habit to trace over them or scratch even more.',
          npc.firstname + "'s breath weapon is unusually colored (blue fire, red acid, green lightning, etc).",
          npc.firstname + "'s horns originate in the back of " + npc.hisher + ' head and curl around to face forward.',
          npc.firstname + ' has ears. They look elven in nature.',
          npc.firstname + "'s eyes have two pupils, with different colored irises.",
          npc.firstname + ' has a habit of chewing on gemstones, jewelry, and precious metals.',
          npc.firstname + ' has pits in ' + npc.hisher + ' face instead of an actual nose, similar to a snake’s.',
          npc.firstname + "'s scales are a dull, matte color.",
          npc.firstname + ' has 5 fingers and 5 toes, as opposed to the standard 3.',
          npc.firstname + ' has a long, serpentine tongue.',
          npc.firstname + "'s scales are bumpy, thick, and loose on " + npc.hisher + ' skin (think a gila monster).',
          npc.firstname + "'s scales are sleek and uniform, like a snake.",
          npc.firstname + "'s scales are incredibly uneven. Some are huge, others are tiny. This isn’t uncomfortable, just making interesting patterns on " + npc.hisher + ' skin.',
          npc.firstname + ' has a third eye. Doesn’t actually see but can distinguish changing levels of light above them.',
          npc.firstname + "'s mouth is brimming with bacteria that can kill in 5-7 days without treatment from a bite.",
          npc.firstname + ' has tail spikes like a stegosaurus.',
          npc.firstname + "'s scales are a dull faded red color, but glow bright red when " + npc.sheshe + ' is aroused or in love.',
          npc.firstname + ' has the power to make ' + npc.hisher + ' scales shine with bright neon colors on command.',
          npc.firstname + "'s singing voice is the exact opposite tone of " + npc.hisher + ' speaking voice (for example, if ' + npc.firstname + ' is female and has a higher voice, ' + npc.sheshe + ' will sing in a deep bass-baritone). It’s always a beautiful voice regardless, making them better performers.',
          npc.firstname + "'s scales are incredibly flexible, allowing " + npc.himher + ' to bend in near impossible positions (think contortionist).',
          npc.firstname + "'s hiccups are powerful bursts of freezing air.",
          npc.firstname + "'s scales shimmer like a rainbow in moonlight.",
          npc.firstname + ' has flaps of skin under ' + npc.hisher + ' armpits, almost like wings but they don’t do anything.',
          npc.firstname + ' has two frills on top of his head. Keeps ' + npc.himher + ' cool in hot temperatures.',
          npc.firstname + ' has scaly human-like ears.',
          npc.firstname + "'s breath weapon is incredibly uncomfortable, even painful, like puking. A few dry heaves beforehand, with a bit of tears and snot afterwards.",
          npc.firstname + "'s form was not made for the human world. Clawed fingers get in the way of delicate tasks; a head bumped on a low doorway will take some effort in order to pull the horns out. ",
          npc.firstname + ' has an above average sized tail to compensate for ' + npc.hisher + ' vestigial legs.',
          npc.firstname + ' has shorn horn stubs on the side of ' + npc.hisher + ' head- the horns were stolen by alchemists.',
          npc.firstname + ' has an odd scale discoloration that looks eerily similar to the crest of a very well known Elven god.',
          npc.firstname + ' can clean ' + npc.hisher + ' eyelids with ' + npc.hisher + ' forked tongue, but only does this as a party trick.',
          npc.firstname + ' can gallop quadrupedally by using ' + npc.hisher + ' tail for balance, and are also an effective climber.',
          npc.firstname + ' has impressive face whiskers like a carp.',
          npc.firstname + ' hates sweets, but is fond of anything that makes a satisfying loud crunch. Bananas are only tolerated with the peel still on.',
          npc.firstname + ' is patient to a fault and sometimes forgets that children and grandchildren cannot be judged by the actions of their parents.',
          npc.firstname + ' has a colorful dewlap on ' + npc.hisher + ' chin and neck.',
          npc.firstname + ' can move ' + npc.hisher + ' eyes independently of one another.',
          npc.firstname + "'s scales are of a much lighter tone than the skin, making them stand out even more.",
          npc.firstname + ' is overly formal and insists you call ' + npc.himher + ' by ' + npc.hisher + ' full name and title at all times.',
          npc.firstname + ' is covered in a sparkly paint that magically changes colour every few minutes, making it impossible to tell what ' + npc.hisher + ' natural colour is. ' + npc.firstname + ' is not particularly clever and has covered ' + npc.himherself + ' in glitter thinking it will make ' + npc.himher + ' look metallic.',
          npc.firstname + ' only speaks draconic, but has a pet talking lizard that sits on ' + npc.hisher + ' shoulder and translates for them.',
          npc.firstname + ' treats all other species like biological specimens that should be studied and are taking extensive notes on ' + npc.hisher + ' observations.',
          npc.firstname + ' is overly vain about ' + npc.hisher + ' scales and teeth and spend a long time every morning polishing and shining them.',
          npc.firstname + ' takes great pride in ' + npc.hisher + ' claws, and has intricate designs painted on them.',
          npc.firstname + ' is very elitist in terms of colour and classify other races into the dragon colour categories by hair colour, treating them accordingly.',
          npc.firstname + ' has a cold and keeps accidentally setting off a mild version of ' + npc.hisher + ' breath weapon every time ' + npc.sheshe + ' sneezes, which is often.',
          'Whenever ' + npc.sheshe + ' uses ' + npc.hisher + ' breath attack, ' + npc.hisher + ' eyes shine bright white.',
          npc.firstname + ' has weak and useless vestigial wings coming out of ' + npc.hisher + ' shoulders that ' + npc.sheshe + ' tries to keep hidden.',
          'When sleeping, ' + npc.sheshe + ' exhale harmless clouds of smoke from ' + npc.hisher + ' nostrils.',
          npc.firstname + ' refuses to eat any meat that isn’t cooked past well done.',
          npc.firstname + ' likes to cover themselves in mud constantly ‘to fight parasites’.',
          npc.firstname + ' has a bifurcated nose horn.',
          npc.firstname + ' has tiny useless T-Rex arms on ' + npc.hisher + ' shoulder blades.'
        ].random()]
      })
      break
    case 'tiefling':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray', 'violet red', 'aquamarine', 'deep blue', 'spring green', 'sea green', 'emerald green'].random(),
        racesingular: 'tiefling',
        raceplural: 'tieflings',
        raceadjective: 'devilish',
        racelanguage: 'Infernal',
        knownLanguages: ['Common', 'Infernal'],
        height: ['tiny', 'short', 'slightly below average height', 'rather average height', 'slightly above average height', 'tall', 'tall', 'tall', 'giraffe-like'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'beefy', 'muscular', 'slightly underweight'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 70) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'half-elf':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        racesingular: 'half-elf',
        raceplural: 'half-elves',
        raceadjective: 'elfish',
        racelanguage: 'Elven',
        knownLanguages: ['Common', 'Elvish'],
        height: ['rather average height', 'slightly above average height', 'tall', 'tall', 'tall'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'beefy', 'muscular', 'slightly underweight'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 57) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'gnome':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        racesingular: 'gnome',
        raceplural: 'gnomes',
        raceadjective: 'gnomish',
        racelanguage: 'Gnomish',
        knownLanguages: ['Common', 'Gnomish'],
        height: ['short', 'tiny'].random(),
        weight: ['slightly underweight', 'stocky', 'beefy', 'slightly overweight', 'slightly overweight', 'round', 'tubby'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 37) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    default:
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        racesingular: 'person',
        raceplural: 'humans',
        raceadjective: 'man',
        racelanguage: 'Common',
        height: ['tiny', 'short', 'slightly below average height', 'rather average height', 'slightly above average height', 'tall', 'tall', 'tall', 'giraffe-like'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'beefy', 'muscular', 'slightly underweight', 'slightly overweight', 'slightly overweight', 'round', 'tubby', 'portly'].random()
      })
      npc.racenote = npc.height + ' ' + npc.gender
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 27) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
  }

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

  if (npc.isThrowaway === 'undefined') {
    State.variables.npcs.set(baseName + ++index, npc)
  }

  if (npc.partnerID) {
    setup.setAsPartners(npc, State.variables.npcs[npc.partnerID])
  }

  return npc
}
