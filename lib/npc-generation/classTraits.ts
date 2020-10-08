import { dice } from '../src/dice'

export type ClassName = 'barbarian' | 'bard' | 'cleric' | 'druid' | 'fighter' | 'monk' | 'paladin' | 'ranger' | 'rogue' | 'sorcerer' | 'warlock' | 'wizard'

interface ClassTraits {
  professionOrigin: string[]
  background: string[]
  weapon: string[]
  wealth(): number
}

export const classTraits: Record<ClassName, ClassTraits> = {
  barbarian: {
    professionOrigin: [
      'My devotion to my people lifted me in battle, and I learned to control my bloodlust.',
      'The spirits of my ancestors called out to me to complete a task, so I took up the way of the barbarian.',
      'I lost control in battle one day, as if something else was guiding me as I slaughtered my enemies.',
      'I went on a spiritual journey to find myself, and discovered the inner rage that I had could be tamed, used, and controlled.',
      "I was struck by lightning, but miraculously lived. Ever since that day, I've been stronger, faster, and able to push through any struggle.",
      'I needed an outlet to channel my anger, otherwise I would have snapped, and killed an innocent person.'
    ],
    background: ['charlatan', 'criminal', 'folk hero', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'outlander', 'outlander', 'outlander', 'outlander', 'outlander', 'sailor', 'soldier', 'soldier', 'soldier', 'urchin'],
    weapon: ['a huge greataxe', 'a battleaxe', 'a greatsword', 'two handaxes', 'two warhammers'],
    wealth: () => dice('2d4') * 1000
  },
  bard: {
    professionOrigin: [
      'I awakened my latent bardic abilities through trial and error.',
      'I was a gifted performer, and eventually attracted the attention of a legendary bard, who decided to teach me to further my talents into the realm of magic.',
      'I joined a society of scholars and orators, who helped teach me how to harness my music and turn it into magic.',
      'I felt a great calling to recount the tales of heros past, and bring them alive through song and stories.',
      'I joined one of the great colleges to learn old lore, and did music as an elective.',
      'I picked up an instrument one day, and found that I could play it perfectly.'
    ],
    background: ['charlatan', 'charlatan', 'criminal', 'entertainer', 'entertainer', 'entertainer', 'entertainer', 'entertainer', 'entertainer', 'folk hero', 'folk hero', 'guild artisan', 'guild artisan', 'noble', 'outlander', 'sailor', 'soldier', 'urchin'],
    weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a long bow', 'two daggers'],
    wealth: () => dice('5d4') * 1000
  },
  cleric: {
    professionOrigin: [
      'My god called on me to serve the faith as a cleric, so I abandoned my previous life, and set out for the nearest temple.',
      "I saw the injustice and horrors of the world, and felt that I couldn't live without trying to do something about it.",
      "My god gave me a sign that I was needed to do something important, some time in the future. I'm still waiting for my time to serve, but when it happens, I'll be ready.",
      "I've always been devout, but it wasn't until I completed a pilgrimage to a sacred site that I found my true calling.",
      'I used to serve in the beauracracy of the church, but found the work unrewarding. Being able to spread the message to the farthest corners of the land is much more satisfying work.'
    ],
    background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'guild artisan', 'hermit', 'hermit', 'noble', 'noble', 'noble', 'sage', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'],
    weapon: ['a mace', 'a mace', 'a morning star', 'a club', 'a quarterstaff', 'a crossbow'],
    wealth: () => dice('5d4') * 1000
  },
  druid: {
    professionOrigin: [
      'I found a place among a group of druids after I fled a catastrophe.',
      'I saw too much devastation in the wilds where I used to play for days as a child, and decided to protect the wilderness.',
      'I have always had an affinity with animals, so I decided to explore it, and found that I had a gift to converse with them.',
      'I befriended a druid that frequented an old pub, and he convinced me that the world needed me to carry on his work as a druid.',
      'Whiie l was growing up, I saw spirits all around me— entities no one else could perceive. I sought out the druids to help me understand the visions, and communicate with these beings.'
    ],
    background: ['acolyte', 'acolyte', 'acolyte', 'charlatan', 'folk hero', 'folk hero', 'folk hero', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'outlander', 'outlander', 'outlander', 'outlander', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'],
    weapon: ['a mace', 'a mace', 'a morning star', 'a club', 'a quarterstaff', 'a crossbow', 'a longbow', 'a longbow'],
    wealth: () => dice('2d4') * 1000
  },
  fighter: {
    professionOrigin: [
      'I wanted to hone my combat skills, and so I joined a war college',
      'I  grew up fighting, and I refined my talents by defending myself against people who crossed me.',
      'I squired for a knight, who taught me how to fight, care for my steed, and conduct myself with honor. I decided to take up that path for myself.',
      'Monster attacks led me to believe that there was no other way for me to be able to defend my family.',
      'I joined the army, and learnt how to fight in a group as a team against a common enemy.',
      'I always had a knack for just about any weapon which I picked up.'
    ],
    background: ['acolyte', 'charlatan', 'criminal', 'criminal', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'noble', 'outlander', 'outlander', 'sage', 'sailor', 'sailor', 'sailor', 'soldier', 'soldier', 'soldier', 'soldier', 'soldier', 'soldier', 'urchin'],
    weapon: ['a huge greataxe', 'a battleaxe', 'a greatsword', 'a long sword', 'a long sword', 'a long sword', 'a long sword', 'a long bow', 'a short sword', 'a war pick', 'a falcheon', 'a halberdier'],
    wealth: () => dice('5d4') * 1000
  },
  monk: {
    professionOrigin: [
      'I stumbled into a portal and took refuge in a strange monastery, where I learned how to defend mysel fagainst the forces of darkness.',
      'I was chosen to study at a secluded monastery, where I learnt the fundamental techniques to set me on the path to eventual mastery.',
      'I sought out the instruction of a monk to gain a greater understanding of my world, and my purpose in it.',
      'I was overwhelmed with grief when I lost my sister, and found solace in meditation with the monks.',
      'I always felt a power within me, and sought out an order of monks to help me understand it and harness that energy for good.',
      'I was wild, and undisciplined as a child, until I realised the error of my ways. I sought out the monks to atone for my sins.'
    ],
    background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'soldier', 'urchin'],
    weapon: ['fists', 'fists', 'fists', 'a quarterstaff', 'a quarterstaff'],
    wealth: () => dice('2d4') * 100
  },
  paladin: {
    professionOrigin: [
      'A magical being appeared before me, and called on me to undertake a holy quest.',
      'One of my ancestors left a holy quest unfulfilled, so I seek to rectify this.',
      'The world is a dark and terrible place. I seek to be a beacon of hope for those that may not have the courage to go on otherwise.',
      "I served as a paladin's squire, and admired his honesty and conduct. I decided to follow in his footsteps, and champion the good and decency that he represented.",
      'Evil must be opposed on all fronts, and I decided to be the first line of defense against such scum.',
      'Becoming a paladin was a natural consequence of my unwavering faith. I saw the need for the faith to be protected with sword and shield.'
    ],
    background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'noble', 'noble', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sailor', 'soldier', 'soldier', 'soldier', 'soldier', 'soldier', 'urchin', 'urchin', 'urchin', 'urchin'],
    weapon: ['a greatsword', 'a long sword', 'a long sword', 'a long sword', 'a short sword', 'a war pick', 'a falcheon', 'a halberdier'],
    wealth: () => dice('5d4') * 1000
  },
  ranger: {
    professionOrigin: [
      'I always had a way with animals, and was able to calm them with a gentle touch and soothing word.',
      'I found purpose while I was honing my hunting skills by bringing dangerous beasts down from the outskirts of civilisation.',
      'I suffer from wanderlust, so I found the life of the ranger to be freeing; to me, wandering without a fixed home is freeing.',
      'I met a grizzled ranger who taught me the secrets of woodcraft and surviving in the wild.',
      'I served in the army, and led my division by scouting ahead, blazing trails and tracking our enemies.'
    ],
    background: ['acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'hermit', 'outlander', 'outlander', 'outlander', 'outlander', 'sage', 'sailor', 'soldier', 'soldier', 'soldier', 'urchin'],
    weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a long bow', 'a long bow', 'a long bow', 'two daggers'],
    wealth: () => dice('4d4') * 1000
  },
  rogue: {
    professionOrigin: [
      "I've always been nimble and quick of wit, so I decided to use those talents to help me make my way in the world.",
      'A thief wronged me, so I focused my training on mastering those skills to better combat foes of that sort.',
      "Know thy enemy. I aim to learn everything there is to know about the Thieves' guild, and then I'll bring it all tumbling down.",
      'An experienced rogue saw something in me, and taught me several useful tricks.',
      'I took up with a group of ruffians, that taught me how to get what I want without direct confrontation.',
      "I'm a sucker for a shiny bauble or bag of coins, as long as I can get it without risking life and limb.",
      "I just love the thrill of the heist. There's nothing that makes me feel more alive than taking something from right under someone's nose."
    ],
    background: ['charlatan', 'charlatan', 'charlatan', 'criminal', 'criminal', 'criminal', 'criminal', 'criminal', 'criminal', 'folk hero', 'folk hero', 'guild artisan', 'guild artisan', 'hermit', 'noble', 'noble', 'outlander', 'sailor', 'soldier', 'urchin', 'urchin', 'urchin', 'urchin', 'urchin'],
    weapon: ['a long sword', 'a long sword', 'two daggers', 'two daggers', 'two daggers', 'two daggers', 'a crossbow', 'a crossbow', 'a crossbow'],
    wealth: () => dice('4d4') * 1000
  },
  sorcerer: {
    professionOrigin: [
      'When I was born, all of the milk turned to cheese. My family is convinced that it was a harbinger for my powers.',
      'I suffered a terrible strain, which brought forth my dormant powers. I have fought to control it ever since.',
      "My immediate family never spoke of my ancestors, and when I asked, they would change the subject. It wasn't until I started displaying strange talents that the full truth of my heritage came out.",
      'A monster attacked one of my friends when I was younger, and I lashed out in a burst of energy, saving my friend, but unlocking the torrent of power which I still struggle to control.',
      "After a magical conflagration, I realised that while I was unharmed, I had been fundamentally changed by the outburst of magical energy. I'm only just beginning to understand what has happened to me."
    ],
    background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'charlatan', 'charlatan', 'charlatan', 'criminal', 'entertainer', 'entertainer', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'],
    weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a long bow', 'two daggers', 'a dagger', 'a dagger'],
    wealth: () => dice('3d4') * 1000
  },
  warlock: {
    professionOrigin: [
      'I was examining a strange tome I found in an abandoned library when the entity that would become my patron suddenly appeared before me.',
      'While wandering through a forbidden place, I came across a magical entity, which offered to form a pact with me.',
      'I stumbled into the clutches of my patron after I accidentally stepped through a magical doorway.',
      'During a crisis, I prayed for any being to help me. The creature that answered was my patron.',
      'My future patron visited me in my dreams, and offered great power in exchange for my servie.',
      'One of my ancestors had a pact with my patron, which bound me to the same fate.'
    ],
    background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'],
    weapon: ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a dagger', 'a dagger', 'a dagger'],
    wealth: () => dice('4d4') * 1000
  },
  wizard: {
    professionOrigin: [
      'An old wizard chose me from among several candidates to serve an apprenticeship.',
      'When I became lost in a magical forest, a hedge wizard took me in, and taught me the fundamentals of magic so that I could navigate my way out.',
      'I grew up listening to tales of great wizards that could change reality with a flick of their hand. I knew from a young age that I wanted to hold that sort of power.',
      'One of my relatives was an accomplished wizard in their own right, and they recognised the same potential in me that their mentor saw in them.',
      'While exploring the restricted section of a library, I came across a magical tome, which sparked the interest in me.',
      'I was a prodigy that demonstrated mastery of the arcane arts at a very young age. When I became old enough to set out on my own, I did so to continue my studies and expand my powers.'
    ],
    background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'],
    weapon: ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a longsword', 'a longsword', 'a dagger'],
    wealth: () => dice('4d4') * 1000
  }
}
