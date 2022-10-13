import { dice } from '../src/dice'
import { random } from '../src/random'
import { NPC, NpcRelationship, Relationship } from './_common'
import { Town } from '../town/_common'
import { WeightRecord } from '../types'
import { BackgroundName } from './backgroundTraits'
import { SocialClassName } from './socialClass'

export type ProfessionType =
  | ''
  | 'family'
  | 'dndClass'
  | 'labourer'
  | 'recreation'
  | 'profession'
  | 'business'

export type ProfessionSector =
  | 'family'
  | 'adventuring'
  | 'agriculture'
  | 'government and law'
  | 'science'
  | 'craftsmanship'
  | 'hospitality'
  | 'mining'
  | 'construction'
  | 'arts'
  | 'business'
  | 'communication'
  | 'transportation'
  | 'religion'
  | 'magic'
  | 'military'
  | 'crime'
  | 'communications'
  | 'outcast'
  | 'unemployed'
  | 'self employed'
  | 'caregiver'
  | 'naval'

export type ProfessionName = keyof typeof professions

export interface Profession {
  /** the population required to support one person with this profession */
  sv: number
  type: ProfessionType
  sector: ProfessionSector
  /**
   * Any words that should be filtered into it.
   */
  synonyms?: string[]
  /**
   * Is something that somebody might do for fun, in their spare time.
   */
  isHobby?: boolean
  /**
   * Has additional data for backgrounds.
   */
  isBackground?: boolean
  /**
   * Uses another profession's data for background.
   */
  usesBackground?: string
  /**
   * Something succinct.
   */
  description: string
  /**
   * whether the profession is "dominant" or "submissive"
   */
  domSub?: 'dom' | 'sub'
  /**
   * Expressed in copper.
   */
  dailyWage: number
  socialClass: SocialClassName
  /** reason for becoming the profession */
  professionOrigin?: string[]
  function?(town: unknown, npc: NPC): void
  socialClassRoll(): number
  relationships?(town: Partial<Town>, npc: NPC): Record<string, Relationship>
  exclusions?(town: Town, npc: NPC): boolean | undefined
  background?: WeightRecord<BackgroundName>
}

export const professions: Record<string, Profession> = {
  'peasant': {
    sv: 20,
    isBackground: true,
    type: 'labourer',
    sector: 'agriculture',
    description: 'a peasant.',
    dailyWage: 14,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 30 + dice(8, 6)
    },
    relationships () {
      return {
        lord: {
          relationship: 'lord',
          reciprocalRelationship: 'labourer',
          exclusions (town, npc) {
            return town.npcRelations?.[npc.key]?.some(r => r.relation === 'lord')
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'mountaineer': {
    sv: 1500,
    isHobby: true,
    type: 'recreation',
    sector: 'adventuring',
    description: 'a person living in a mountainous area.',
    dailyWage: 50,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'barbarian': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a warrior who gets lost in the craze of battle.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'My devotion to my people lifted me in battle, and I learned to control my bloodlust.',
      'The spirits of my ancestors called out to me to complete a task, so I took up the way of the barbarian.',
      'I lost control in battle one day, as if something else was guiding me as I slaughtered my enemies.',
      'I went on a spiritual journey to find myself, and discovered the inner rage that I had could be tamed, used, and controlled.',
      "I was struck by lightning, but miraculously lived. Ever since that day, I've been stronger, faster, and able to push through any struggle.",
      'I needed an outlet to channel my anger, otherwise I would have snapped, and killed an innocent person.'
    ],
    background: {
      'charlatan': 1,
      'criminal': 1,
      'folk hero': 1,
      'hermit': 5,
      'outlander': 5,
      'soldier': 4,
      'urchin': 1
    }
  },
  'bard': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'uses their artistic talents to induce magical effects.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'I awakened my latent bardic abilities through trial and error.',
      'I was a gifted performer, and eventually attracted the attention of a legendary bard, who decided to teach me to further my talents into the realm of magic.',
      'I joined a society of scholars and orators, who helped teach me how to harness my music and turn it into magic.',
      'I felt a great calling to recount the tales of heros past, and bring them alive through song and stories.',
      'I joined one of the great colleges to learn old lore, and did music as an elective.',
      'I picked up an instrument one day, and found that I could play it perfectly.'
    ],
    background: {
      'charlatan': 2,
      'criminal': 1,
      'entertainer': 6,
      'folk hero': 2,
      'guild artisan': 2,
      'noble': 1,
      'outlander': 1,
      'sailor': 1,
      'soldier': 1,
      'urchin': 1
    }
  },
  'cleric': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'has devoted their entire being to the will of their god, thus gaining magical powers.',
    domSub: 'sub',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'My god called on me to serve the faith as a cleric, so I abandoned my previous life, and set out for the nearest temple.',
      "I saw the injustice and horrors of the world, and felt that I couldn't live without trying to do something about it.",
      "My god gave me a sign that I was needed to do something important, some time in the future. I'm still waiting for my time to serve, but when it happens, I'll be ready.",
      "I've always been devout, but it wasn't until I completed a pilgrimage to a sacred site that I found my true calling.",
      'I used to serve in the beauracracy of the church, but found the work unrewarding. Being able to spread the message to the farthest corners of the land is much more satisfying work.'
    ],
    background: {
      'acolyte': 5,
      'charlatan': 1,
      'criminal': 1,
      'entertainer': 1,
      'folk hero': 3,
      'guild artisan': 2,
      'hermit': 2,
      'noble': 3,
      'sage': 4,
      'sailor': 1,
      'soldier': 1,
      'urchin': 1
    }
  },
  'druid': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a mage attuned to the magical forces of nature, able to shapeshift, call on the elements, communicate with flora and fauna, etc.',
    domSub: 'sub',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'I found a place among a group of druids after I fled a catastrophe.',
      'I saw too much devastation in the wilds where I used to play for days as a child, and decided to protect the wilderness.',
      'I have always had an affinity with animals, so I decided to explore it, and found that I had a gift to converse with them.',
      'I befriended a druid that frequented an old pub, and he convinced me that the world needed me to carry on his work as a druid.',
      'Whiie l was growing up, I saw spirits all around me— entities no one else could perceive. I sought out the druids to help me understand the visions, and communicate with these beings.'
    ],
    background: {
      'acolyte': 3,
      'charlatan': 1,
      'folk hero': 3,
      'hermit': 5,
      'noble': 2,
      'outlander': 4,
      'sage': 3,
      'sailor': 1,
      'soldier': 1,
      'urchin': 1
    }
  },
  'fighter': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a common warrior.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'I wanted to hone my combat skills, and so I joined a war college',
      'I  grew up fighting, and I refined my talents by defending myself against people who crossed me.',
      'I squired for a knight, who taught me how to fight, care for my steed, and conduct myself with honor. I decided to take up that path for myself.',
      'Monster attacks led me to believe that there was no other way for me to be able to defend my family.',
      'I joined the army, and learnt how to fight in a group as a team against a common enemy.',
      'I always had a knack for just about any weapon which I picked up.'
    ],
    background: {
      'acolyte': 1,
      'charlatan': 1,
      'criminal': 4,
      'entertainer': 1,
      'folk hero': 3,
      'guild artisan': 1,
      'hermit': 1,
      'noble': 1,
      'outlander': 2,
      'sage': 1,
      'sailor': 3,
      'soldier': 6,
      'urchin': 1
    }
  },
  'monk': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a warrior of a holy order.',
    domSub: 'sub',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'I stumbled into a portal and took refuge in a strange monastery, where I learned how to defend mysel fagainst the forces of darkness.',
      'I was chosen to study at a secluded monastery, where I learnt the fundamental techniques to set me on the path to eventual mastery.',
      'I sought out the instruction of a monk to gain a greater understanding of my world, and my purpose in it.',
      'I was overwhelmed with grief when I lost my sister, and found solace in meditation with the monks.',
      'I always felt a power within me, and sought out an order of monks to help me understand it and harness that energy for good.',
      'I was wild, and undisciplined as a child, until I realised the error of my ways. I sought out the monks to atone for my sins.'
    ],
    background: {
      'acolyte': 4,
      'charlatan': 1,
      'criminal': 1,
      'folk hero': 1,
      'guild artisan': 1,
      'hermit': 3,
      'noble': 2,
      'outlander': 1,
      'sage': 3,
      'soldier': 1,
      'urchin': 1
    }
  },
  'rogue': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'A sneaky person.',
    dailyWage: 250,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      "I've always been nimble and quick of wit, so I decided to use those talents to help me make my way in the world.",
      'A thief wronged me, so I focused my training on mastering those skills to better combat foes of that sort.',
      "Know thy enemy. I aim to learn everything there is to know about the Thieves' guild, and then I'll bring it all tumbling down.",
      'An experienced rogue saw something in me, and taught me several useful tricks.',
      'I took up with a group of ruffians, that taught me how to get what I want without direct confrontation.',
      "I'm a sucker for a shiny bauble or bag of coins, as long as I can get it without risking life and limb.",
      "I just love the thrill of the heist. There's nothing that makes me feel more alive than taking something from right under someone's nose."
    ],
    background: {
      'charlatan': 3,
      'criminal': 6,
      'folk hero': 2,
      'guild artisan': 2,
      'hermit': 1,
      'noble': 2,
      'outlander': 1,
      'sailor': 1,
      'soldier': 1,
      'urchin': 5
    }
  },
  'ranger': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'wanders or ranges over a particular area or domain.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'I always had a way with animals, and was able to calm them with a gentle touch and soothing word.',
      'I found purpose while I was honing my hunting skills by bringing dangerous beasts down from the outskirts of civilisation.',
      'I suffer from wanderlust, so I found the life of the ranger to be freeing; to me, wandering without a fixed home is freeing.',
      'I met a grizzled ranger who taught me the secrets of woodcraft and surviving in the wild.',
      'I served in the army, and led my division by scouting ahead, blazing trails and tracking our enemies.'
    ],
    background: {
      'acolyte': 2,
      'charlatan': 1,
      'criminal': 1,
      'entertainer': 1,
      'folk hero': 4,
      'guild artisan': 1,
      'hermit': 4,
      'outlander': 4,
      'sage': 1,
      'sailor': 1,
      'soldier': 3,
      'urchin': 1
    }
  },
  'paladin': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description:
      'a holy knight and divine spellcaster crusading in the name of their god.',
    dailyWage: 100,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'A magical being appeared before me, and called on me to undertake a holy quest.',
      'One of my ancestors left a holy quest unfulfilled, so I seek to rectify this.',
      'The world is a dark and terrible place. I seek to be a beacon of hope for those that may not have the courage to go on otherwise.',
      "I served as a paladin's squire, and admired his honesty and conduct. I decided to follow in his footsteps, and champion the good and decency that he represented.",
      'Evil must be opposed on all fronts, and I decided to be the first line of defense against such scum.',
      'Becoming a paladin was a natural consequence of my unwavering faith. I saw the need for the faith to be protected with sword and shield.'
    ],
    background: {
      'acolyte': 4,
      'charlatan': 1,
      'criminal': 1,
      'entertainer': 1,
      'folk hero': 4,
      'guild artisan': 1,
      'hermit': 1,
      'noble': 5,
      'outlander': 1,
      'sage': 1,
      'sailor': 1,
      'soldier': 5,
      'urchin': 4
    }
  },
  'sorcerer': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description:
      'magic user who derives their magical abilities innately rather than through study.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'When I was born, all of the milk turned to cheese. My family is convinced that it was a harbinger for my powers.',
      'I suffered a terrible strain, which brought forth my dormant powers. I have fought to control it ever since.',
      "My immediate family never spoke of my ancestors, and when I asked, they would change the subject. It wasn't until I started displaying strange talents that the full truth of my heritage came out.",
      'A monster attacked one of my friends when I was younger, and I lashed out in a burst of energy, saving my friend, but unlocking the torrent of power which I still struggle to control.',
      "After a magical conflagration, I realised that while I was unharmed, I had been fundamentally changed by the outburst of magical energy. I'm only just beginning to understand what has happened to me."
    ],
    background: {
      'acolyte': 4,
      'charlatan': 4,
      'criminal': 1,
      'entertainer': 2,
      'folk hero': 2,
      'guild artisan': 1,
      'hermit': 1,
      'noble': 3,
      'outlander': 1,
      'sage': 3,
      'sailor': 1,
      'soldier': 1,
      'urchin': 1
    }
  },
  'warlock': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description:
      'a mage who has gained their abilities by forming a pact with an otherworldly being.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'I was examining a strange tome I found in an abandoned library when the entity that would become my patron suddenly appeared before me.',
      'While wandering through a forbidden place, I came across a magical entity, which offered to form a pact with me.',
      'I stumbled into the clutches of my patron after I accidentally stepped through a magical doorway.',
      'During a crisis, I prayed for any being to help me. The creature that answered was my patron.',
      'My future patron visited me in my dreams, and offered great power in exchange for my servie.',
      'One of my ancestors had a pact with my patron, which bound me to the same fate.'
    ],
    background: {
      'acolyte': 6,
      'charlatan': 1,
      'criminal': 1,
      'entertainer': 1,
      'folk hero': 1,
      'guild artisan': 1,
      'hermit': 6,
      'noble': 3,
      'outlander': 1,
      'sage': 5,
      'sailor': 1,
      'soldier': 1,
      'urchin': 1
    }
  },
  'wizard': {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'derives their magical abilities through study.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'An old wizard chose me from among several candidates to serve an apprenticeship.',
      'When I became lost in a magical forest, a hedge wizard took me in, and taught me the fundamentals of magic so that I could navigate my way out.',
      'I grew up listening to tales of great wizards that could change reality with a flick of their hand. I knew from a young age that I wanted to hold that sort of power.',
      'One of my relatives was an accomplished wizard in their own right, and they recognised the same potential in me that their mentor saw in them.',
      'While exploring the restricted section of a library, I came across a magical tome, which sparked the interest in me.',
      'I was a prodigy that demonstrated mastery of the arcane arts at a very young age. When I became old enough to set out on my own, I did so to continue my studies and expand my powers.'
    ],
    background: {
      'acolyte': 6,
      'charlatan': 1,
      'criminal': 1,
      'entertainer': 1,
      'folk hero': 1,
      'guild artisan': 1,
      'hermit': 6,
      'noble': 3,
      'outlander': 1,
      'sage': 5,
      'sailor': 1,
      'soldier': 1,
      'urchin': 1
    }
  },
  'actor': {
    sv: 2500,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description:
      'impersonates characters, typically on stage in a theatrical production.',
    domSub: 'sub',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'I always loved playing make-believe; this is just the natural result of that.'
    ],
    relationships (town, npc) {
      return {
        patron: {
          relationship: 'patron',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'advocate': {
    sv: 3250,
    synonyms: ['lawyer'],
    type: 'profession',
    sector: 'government and law',
    description: 'practices or studies law, typically an attorney or a counselor.',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'I have always had a strong moral compass, and wanted to defend those that I thought needed defending.'
    ],
    relationships (town, npc) {
      return {
        client: {
          relationship: 'client',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {}
        }
      }
    }
  },
  'advisor': {
    sv: 780,
    type: 'profession',
    sector: 'government and law',
    description: 'advises some sort of government official on a specific area of governing.',
    domSub: 'dom',
    dailyWage: 230,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'Becoming an advisor was simply a matter of being in the right place at the right time.'
    ]
  },
  'animal handler': {
    sv: 250,
    type: 'labourer',
    sector: 'agriculture',
    description:
      'works with different animals for a variety of tasks, typically livestock.',
    domSub: 'sub',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: ['I have always had a knack for animal handling.']
  },
  'apothecarist': {
    sv: 450,
    type: 'business',
    sector: 'science',
    description: 'prepares and sells medicines, drugs, and potions.',
    domSub: 'sub',
    dailyWage: 160,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: ['I was taught apothecary at a young age.']
  },
  'architect': {
    sv: 550,
    type: 'profession',
    sector: 'construction',
    description: 'designs buildings or landscapes and in many cases supervises their construction.',
    domSub: 'dom',
    dailyWage: 600,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      "I had an apprenticeship, drafting up plans for houses. I made improvements to my master's plans. Now, I do it for a living."
    ],
    relationships (town, npc) {
      return {
        client: {
          relationship: 'client',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'archivist': {
    sv: 2450,
    type: 'profession',
    sector: 'science',
    description: 'maintains and is in charge of some sort archives.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'I love ordering things, and archiving suits me perfectly.',
      'Everything being in its place suits me very well.',
      'I have an amazing memory, and can find what someone is looking for almost instantly.'
    ]
  },
  'armorer': {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'specializes in making and repairing armor.',
    domSub: 'dom',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'I did an apprenticeship and fell into armoring as a result of that.'
    ]
  },
  'astrologer': {
    sv: 950,
    isHobby: true,
    type: 'profession',
    sector: 'science',
    description: 'uses astrology to tell others about their character or to predict their future.',
    domSub: 'dom',
    dailyWage: 450,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'I loved the stars as a kid, and made a career out of it.'
    ],
    relationships (town, npc) {
      return {
        client: {
          relationship: 'client',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {}
        }
      }
    }
  },
  'baker': {
    sv: 800,
    type: 'business',
    sector: 'hospitality',
    description: 'makes all sorts of baked goods.',
    domSub: 'sub',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      'Early risers like me are well suited to the life of a baker.',
      'I love bread!',
      'Watching yeast rise is meditative.'
    ]
  },
  'banker': {
    sv: 2250,
    type: 'business',
    sector: 'business',
    description: 'an officer or owner of a bank or group of banks.',
    domSub: 'dom',
    dailyWage: 800,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'I love money, so wanted to work as somebody that would be in charge of money.'
    ]
  },
  'barber': {
    sv: 350,
    type: 'business',
    sector: 'hospitality',
    description: 'cuts hair and shaves or trims beards.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'I have a steady hand, and like to think that I am a good conversationalist- barbering was a natural fit.'
    ]
  },
  'bartender': {
    sv: 450,
    synonyms: ['barkeep', 'tavern owner', 'innkeep'],
    type: 'business',
    sector: 'hospitality',
    description: 'pours drinks at taverns and other establishments.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        client: {
          relationship: 'drunkard',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {}
        }
      }
    },
    professionOrigin: [
      'I came across the tavern as a youngster, and spent many a night here drinking with my buddies. When the old owner died, it went to auction, and I tried to kep the dream alive by buying it. One by one all my friends grew out of it, or moved away.',
      "Before I ran the tavern, it was my dad's. I kept the family business going to support him in his old age.",
      "When I first got here, it was practically a ghost town. We built the tavern as a social hub for the folk, and it's now what it is today.",
      'The old owner was a problem gambler, and when they auctioned off the tavern, I jumped at it.',
      "The old owner thought that the tavern wasn't profitable. In the first six months of my stewardship, I turned it around, and have made it the best bloody pub in $town.name!",
      "Running the tavern was the family business, and it was always going to be my lot in life. I'm not angry or disappointed or anything, but I would like to see the world one day, and it stops me from doing that.",
      'I was just a kitchen hand when this place started. The owner and I worked through thick and thin, and when his daughter died, he had nobody to leave it to, except for me.',
      "My parents bought this place as an investment. I don't know what they were thinking- when have you ever heard of a pub being profitable?"
    ],
    background: {
      'commoner': 8,
      'noble': 3,
      'folk hero': 1,
      'soldier': 1,
      'urchin': 3
    }
  },
  'barmaid': {
    sv: 450,
    synonyms: ['waiter', 'waitress'],
    type: 'business',
    sector: 'hospitality',
    description: 'serves drinks and food in a bar as well as engaging with customers.',
    domSub: 'sub',
    dailyWage: 60,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: ['Bar work has been all that I have been able to find.']
  },
  'blacksmith': {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'forges and repairs things in metal, including weapons, armor, utensils, etc.',
    domSub: 'dom',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'I was an apprentice in the smithy, and took up the title when my old master passed on.',
      'I was a tinkerer, and just drifted from town to town doing odd jobs for people until I came to $town.name. I fell in love with the place, and then settled here.',
      "I followed my love here, set up shop, and now we're happily married, with a steady job and a roof over our heads.",
      "My father was a blacksmith before me, and then I took up the trade to make him proud. Or at least, I hope I've made him proud. He passed before I opened up shop.",
      "I was an apprentice, and my old master bitterly despised me because my father married his love. I worked so hard to perfect my craft to impress him thinking that the issue was with me, and then the bastard had a heart attack. Left everything to her. What's my mum gonna do with a smithy?!",
      'I spent a lot of time in the mountains with the Dwarves, and they taught me a thing or two while I was there.'
    ],
    background: {
      commoner: 8,
      soldier: 1,
      urchin: 3
    }
  },
  "blacksmith's assistant": {
    sv: 800,
    synonyms: ['smith apprentice', 'smithy apprentice'],
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'serves under a blacksmith learning the trade of forging.',
    domSub: 'dom',
    dailyWage: 50,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      "I'm doing an apprenticeship, I hope to be a full blacksmith one day."
    ],
    background: {
      commoner: 8,
      soldier: 1,
      urchin: 3
    }
  },
  'bookseller': {
    sv: 6300,
    type: 'business',
    sector: 'business',
    description: 'sells books from a shop or cart.',
    domSub: 'sub',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'brewer': {
    sv: 550,
    isHobby: true,
    type: 'business',
    sector: 'craftsmanship',
    description: 'brews ale.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: ['I started out as a hobbyist, but then went fulltime.']
  },
  'brickmason': {
    sv: 650,
    type: 'labourer',
    sector: 'construction',
    description: 'builds with mineral products such as stones, bricks, cinder blocks, or tiles, usually with the use of mortar as a bonding agent.',
    domSub: 'dom',
    dailyWage: 70,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'pimp': {
    sv: 850,
    synonyms: ['whoremonger'],
    type: 'business',
    sector: 'business',
    description: 'controls prostitutes and arranges clients for them, taking part of their earnings in return.',
    domSub: 'dom',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      "Being a pimp is all about connections- it's all about who you know. With good clients comes good money."
    ],
    relationships (town, npc) {
      return {
        client: {
          relationship: 'client',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {}
        },
        prostitute: {
          relationship: 'prostitute',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {
            profession: 'prostitute'
          }
        }
      }
    },
    exclusions (town, npc) {
      return !town.disableNSFW
    }
  },
  'buccaneer': {
    sv: 1350,
    type: 'profession',
    sector: 'adventuring',
    description: 'a kind of privateer or free sailor.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'butcher': {
    sv: 1150,
    type: 'business',
    sector: 'hospitality',
    description: 'cuts up and sells meat.',
    domSub: 'dom',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      'I had an apprenticeship, and have been butchering ever since.',
      "There's nothing quite like a nice sausage, right? Well, I'm picky, and like sausages my way."
    ],
    relationships (town, npc) {
      return {
        client: {
          relationship: 'client',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {}
        },
        supplier: {
          relationship: 'supplier',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {
            profession: 'cowherd'
          }
        }
      }
    }
  },
  'captain': {
    sv: 550,
    type: 'profession',
    sector: 'military',
    description: 'an army officer of high rank in charge of commanding squadrons of soldiers.',
    domSub: 'dom',
    dailyWage: 160,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'I rose through the ranks, receiving awards for my bravery during battle, eventually landing at the position of captain.'
    ]
  },
  'caravanner': {
    sv: 1450,
    type: 'labourer',
    sector: 'transportation',
    description: 'travels or lives in a caravan.',
    dailyWage: 50,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'carpenter': {
    sv: 550,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs wooden objects and structures.',
    domSub: 'dom',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'cartographer': {
    sv: 1950,
    type: 'profession',
    sector: 'science',
    description: 'a scholar and illustrator of maps.',
    domSub: 'dom',
    dailyWage: 240,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'I love maps, and have a good hand for drawing. Cartography is the natural intersection of the two.'
    ]
  },
  'chandler': {
    sv: 700,
    type: 'business',
    sector: 'business',
    description: 'deals in provisions and supplies.',
    dailyWage: 90,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'chef': {
    sv: 1850,
    type: 'labourer',
    sector: 'hospitality',
    description: 'a professional cook trained in the culinary arts.',
    domSub: 'dom',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'child': {
    sv: 10000,
    type: 'family',
    sector: 'family',
    synonyms: ['twenty one year old', 'twenty year old', 'nineteen year old', 'surprisingly young', 'eighteen year old', 'barely adult aged', 'adolescent', 'late teenager', 'teenager', 'young teenager', 'young', 'youngster', 'prepubescent', 'toddler', 'young child', 'kid', 'baby', 'newborn'],
    description: 'a child, specifically one that is not working.',
    dailyWage: 4,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: ['I want to be somebody important when I grow up!']
  },
  'clergyman': {
    sv: 40,
    type: 'profession',
    sector: 'religion',
    description: 'a member of the clergy attached to a private chapel, institution, ship, branch of the armed forces, etc.',
    domSub: 'dom',
    dailyWage: 190,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'clock maker': {
    sv: 4550,
    isHobby: true,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs clocks.',
    domSub: 'dom',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'craftsman': {
    sv: 4550,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs things.',
    domSub: 'dom',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'cobbler': {
    sv: 1550,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs footwear.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'cook': {
    sv: 450,
    type: 'labourer',
    sector: 'hospitality',
    description: 'prepares food for eating.',
    domSub: 'sub',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'cooper': {
    sv: 700,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes and repairs casks and barrels.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'courtesan': {
    sv: 1950,
    type: 'labourer',
    sector: 'hospitality',
    description: 'a prostitute with wealthy and noble clients.',
    domSub: 'sub',
    dailyWage: 220,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'client',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'courtier': {
    sv: 1950,
    type: 'profession',
    sector: 'government and law',
    description:
      'attends court as a companion or adviser to the king or queen.',
    domSub: 'sub',
    dailyWage: 320,
    socialClass: 'nobility',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'cowherd': {
    sv: 250,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'supervises grazing cattle.',
    domSub: 'dom',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'dancer': {
    sv: 2250,
    type: 'profession',
    sector: 'arts',
    description:
      'moves their body rhythmically with or without musical accompaniment.',
    domSub: 'sub',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'diplomat': {
    sv: 3450,
    type: 'profession',
    sector: 'government and law',
    description: 'an official representing a country abroad.',
    domSub: 'dom',
    dailyWage: 440,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'diver': {
    sv: 3250,
    type: 'labourer',
    sector: 'agriculture',
    description:
      'dives down deep to collect precious things from the sea floors.',
    domSub: 'dom',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'domestic partner': {
    sv: 50,
    type: 'family',
    sector: 'family',
    description:
      'a spouse that stays at home, cooking, cleaning, and caring for the family.',
    domSub: 'sub',
    dailyWage: 4,
    socialClass: 'peasantry',
    exclusions (town, npc) {
      if (!npc.partnerID) return false
    },
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'farmer': {
    sv: 150,
    type: 'labourer',
    sector: 'agriculture',
    description: 'operates a farm or cultivates land.',
    domSub: 'dom',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'fisherman': {
    sv: 170,
    type: 'labourer',
    sector: 'agriculture',
    description: 'catches fish.',
    domSub: 'dom',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'fishmonger': {
    sv: 250,
    type: 'business',
    sector: 'business',
    description: 'sells fish.',
    domSub: 'sub',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        coworker: {
          relationship: 'supplier',
          reciprocalRelationship: 'client',
          probability: 20,
          base: {
            profession: 'fisherman'
          }
        }
      }
    }
  },
  'furrier': {
    sv: 250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'prepares furs for adornment.',
    domSub: 'dom',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'gardener': {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'tends and cultivates a garden.',
    domSub: 'sub',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'general': {
    sv: 2250,
    type: 'profession',
    sector: 'military',
    description: 'the chief commander of an army.',
    domSub: 'dom',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'gladiator': {
    sv: 3250,
    type: 'profession',
    sector: 'arts',
    description:
      'fights against other people, wild animals, or monsters in an arena.',
    domSub: 'dom',
    dailyWage: 210,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'glovemaker': {
    sv: 2400,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs gloves.',
    domSub: 'dom',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'goldsmith': {
    sv: 6550,
    type: 'business',
    sector: 'craftsmanship',
    description: 'a smith who specializes in precious metals.',
    domSub: 'dom',
    dailyWage: 400,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'grocer': {
    sv: 450,
    type: 'business',
    sector: 'business',
    description: 'a food merchant.',
    domSub: 'dom',
    dailyWage: 105,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'guard': {
    sv: 150,
    isBackground: true,
    synonyms: ['guardsman', 'guard', 'watchman', 'town guard'],
    type: 'profession',
    sector: 'military',
    description:
      'a person who keeps watch, especially a soldier or other person formally assigned to protect a person or to control access to a place.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'Keeping the peace is easy enough. Might as well get paid for it.'
    ]
  },
  'guildmaster': {
    sv: 4150,
    type: 'profession',
    sector: 'business',
    description:
      'leads an economically independent producer (a “guild,” an association of craftsmen or merchants that often holds considerable bureaucratic power).',
    domSub: 'dom',
    dailyWage: 900,
    socialClass: 'nobility',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'hatter': {
    sv: 950,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs headwear.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'healer': {
    sv: 950,
    type: 'profession',
    sector: 'magic',
    description: 'able to cure a disease or injury using magic.',
    dailyWage: 170,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'herald': {
    sv: 550,
    type: 'labourer',
    sector: 'communications',
    description: 'a messenger who carries important news.',
    domSub: 'dom',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'herbalist': {
    sv: 850,
    type: 'business',
    sector: 'science',
    description: 'practices healing by the use of herbs.',
    domSub: 'sub',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'hermit': {
    sv: 950,
    isBackground: true,
    type: 'profession',
    sector: 'outcast',
    description:
      'lives in solitude, typically as a religious or spiritual discipline.',
    dailyWage: 40,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'historian': {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description:
      'an expert in or student of history, especially that of a particular period, geographical region, or social phenomenon.',
    dailyWage: 230,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'hunter': {
    sv: 250,
    isHobby: true,
    type: 'labourer',
    sector: 'self employed',
    description: 'hunts game or other wild animals.',
    domSub: 'dom',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'ice seller': {
    sv: 1950,
    type: 'labourer',
    sector: 'agriculture',
    description: 'collects and sells ice.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'inventor': {
    sv: 2250,
    type: 'profession',
    sector: 'business',
    description:
      'invented a particular process or device, or invents things as an occupation.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'jailer': {
    sv: 1250,
    type: 'labourer',
    sector: 'military',
    description: 'supervises a jail and the prisoners in it.',
    domSub: 'dom',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      'I know that jailing is not a pretty profession, but somebody has to do it- might as well be me, right?'
    ],
    relationships (town, npc) {
      return {
        prisoner: {
          relationship: 'prisoner',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {
            profession: 'prisoner'
          }
        }
      }
    }
  },
  'jester': {
    sv: 2250,
    type: 'profession',
    sector: 'arts',
    description: 'professional joker.',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'jeweller': {
    sv: 400,
    type: 'business',
    sector: 'craftsmanship',
    description:
      'designs, makes, and repairs necklaces, bracelets, rings, etc., often containing jewels.',
    domSub: 'dom',
    dailyWage: 240,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'judge': {
    sv: 850,
    type: 'profession',
    sector: 'government and law',
    description: 'decides cases in a court of law.',
    domSub: 'dom',
    dailyWage: 650,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'knight': {
    sv: 1150,
    type: 'profession',
    sector: 'government and law',
    description:
      'serves his or her sovereign after being bestowed a rank of royal honor.',
    domSub: 'dom',
    dailyWage: 350,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'lady': {
    sv: 1550,
    type: 'profession',
    sector: 'government and law',
    description: 'some sort of noble.',
    domSub: 'sub',
    dailyWage: 350,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    exclusions (town, npc) {
      if (npc.gender !== 'woman') return false
    }
  },
  'leatherworker': {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes items from leather such as pouches, scabbards, straps, etc.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'librarian': {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'administers or assists in a library.',
    domSub: 'sub',
    dailyWage: 160,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'linguist': {
    sv: 5150,
    type: 'profession',
    sector: 'science',
    description: 'studies the essence of communication, including the units, nature, structure, and modification of language.',
    domSub: 'dom',
    dailyWage: 260,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'locksmith': {
    sv: 1900,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs locks.',
    domSub: 'dom',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'lord': {
    sv: 1150,
    type: 'profession',
    sector: 'government and law',
    description: 'some sort of noble.',
    domSub: 'dom',
    dailyWage: 400,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'lumberjack': {
    sv: 350,
    type: 'labourer',
    sector: 'agriculture',
    description: 'fells trees, cuts them into logs, and transports them to a sawmill.',
    domSub: 'dom',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'maid': {
    sv: 250,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'a domestic servant of a household.',
    domSub: 'sub',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'masseur': {
    sv: 1550,
    type: 'profession',
    sector: 'business',
    description: 'performs massages.',
    domSub: 'sub',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'merchant': {
    isBackground: true,
    sv: 650,
    type: 'business',
    sector: 'business',
    description: 'sells and trades goods.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      'I grew up poor. I learnt to hock stuff off to feed myself.',
      'Some people just have the gift of the gab- I have a talent for sales.',
      'I love gold. Unashamedly, I really do. So what? Selling is an honest living. Sue me.',
      'I spent my youth selling whatever scraps I could find, never got tired of it.'
    ],
    background: {
      'commoner': 8,
      'charlatan': 2,
      'noble': 3,
      'folk hero': 1,
      'soldier': 1,
      'urchin': 3
    }
  },
  'messenger': {
    sv: 1250,
    type: 'labourer',
    sector: 'communications',
    description: 'carries messages between recipients.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      'I was always good at running- being a messenger was a natural extension of that.'
    ]
  },
  'midwife': {
    sv: 650,
    type: 'labourer',
    sector: 'science',
    description: 'assists in childbirth and the care of women giving birth.',
    domSub: 'sub',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      "I have always loved children, and can't bear the thought of a woman being alone during childbirth."
    ]
  },
  'miller': {
    sv: 650,
    type: 'business',
    sector: 'agriculture',
    description: 'owns or works in a grain mill.',
    domSub: 'dom',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'miner': {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works underground in mines in order to obtain minerals such as coal, diamonds, or gold.',
    domSub: 'dom',
    dailyWage: 60,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'minister': {
    sv: 950,
    type: 'profession',
    sector: 'government and law',
    description: 'assists with the administration of business.',
    domSub: 'dom',
    dailyWage: 190,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'minstrel': {
    sv: 1450,
    type: 'profession',
    sector: 'arts',
    description: 'recites lyric or heroic poetry for nobility.',
    domSub: 'dom',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'friar': {
    sv: 1450,
    type: 'profession',
    sector: 'religion',
    description: 'a member of a religious community of men, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.',
    domSub: 'dom',
    dailyWage: 30,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    },
    exclusions (town, npc) {
      if (npc.gender !== 'man') return false
    }
  },
  'mortician': {
    sv: 650,
    type: 'profession',
    sector: 'science',
    description: 'prepares dead bodies for burial or cremation and makes arrangements for funerals.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'necromancer': {
    sv: 6150,
    type: 'profession',
    sector: 'magic',
    description: 'communicates with and conjures the spirits of the dead.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'noble': {
    sv: 3150,
    isBackground: true,
    synonyms: ['nobleman', 'noblewoman'],
    type: 'profession',
    sector: 'government and law',
    description: 'a person belonging to a class with high social or political status.',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'My family has owned lands for centuries.',
      'I was bestowed an estate for my service.',
      'I earnt my place as a noble, working tirelessly day in, day out.',
      "Nepotism may have had a small part to play for my current position, I'll admit."
    ]
  },
  'nun': {
    sv: 2150,
    type: 'profession',
    sector: 'religion',
    description: 'a member of a religious community of women, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.',
    dailyWage: 50,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    },
    exclusions (town, npc) {
      if (npc.gender !== 'woman') return false
    }
  },
  'nurse': {
    sv: 1150,
    type: 'profession',
    sector: 'science',
    description: 'cares for the sick or infirm, especially in a hospital.',
    domSub: 'sub',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'painter': {
    sv: 1500,
    isHobby: true,
    type: 'business',
    sector: 'arts',
    description: 'paints pictures using a variety of different substances.',
    domSub: 'sub',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'patissier': {
    sv: 1500,
    type: 'business',
    sector: 'hospitality',
    description: 'maker or seller of pastries and cakes.',
    domSub: 'sub',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'perfumer': {
    sv: 3150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'expert on creating perfume compositions.',
    dailyWage: 160,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'philosopher': {
    sv: 7150,
    type: 'profession',
    sector: 'science',
    description: 'a scholar of the fundamental nature of knowledge, reality, and existence.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'physician': {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'a qualified practitioner of medicine.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'pilgrim': {
    sv: 5150,
    type: 'labourer',
    sector: 'outcast',
    description: 'journeys to some sacred place as an act of religious devotion, occasionally to settle there.',
    dailyWage: 50,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'politician': {
    sv: 4000,
    type: 'profession',
    sector: 'government and law',
    description: 'holding or seeking office in government.',
    domSub: 'dom',
    dailyWage: 800,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'I dared to dream that I could change the world, and rise above the others.',
      'I became furious with the corruption in politics, so I decided to enter the rat-race myself.',
      'I thought that I could do a better job than the last guy. I was right.'
    ],
    background: {
      'commoner': 8,
      'noble': 13,
      'folk hero': 4,
      'soldier': 3,
      'urchin': 2
    }
  },
  'prime minister': {
    sv: 4000,
    synonyms: ['governor'],
    type: 'profession',
    sector: 'government and law',
    description: 'democratically holds the highest position of office.',
    domSub: 'dom',
    dailyWage: 800,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      "I was elected as the prime minister. It's both an honour and a true burden to serve.",
      "I got elected, and now I'm the top brass. Everyone else will realise soon enough that things run differently when the adults are in charge!",
      'I think that the election was rigged against me, but I managed to beat those crooks anyways!'
    ],
    background: {
      'commoner': 3,
      'noble': 7,
      'folk hero': 4,
      'soldier': 3,
      'urchin': 1
    }
  },
  'potter': {
    sv: 1150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes pots, bowls, plates, etc., out of clay.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'priest': {
    sv: 600,
    type: 'profession',
    sector: 'religion',
    description: 'has the authority to perform certain rites and administer certain sacraments.',
    domSub: 'dom',
    dailyWage: 190,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      'I heard the calling of priesthood from a very young age- my path was never in question.',
      "I was initially going to be a chef- but then, one day, I felt the urge to go to church. I've never looked back."
    ]
  },
  'privateer': {
    sv: 1150,
    type: 'labourer',
    sector: 'military',
    description: 'engages in maritime warfare under a commission of war.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'professor': {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'a teacher of the highest rank in a college or university.',
    domSub: 'dom',
    dailyWage: 350,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'roofer': {
    sv: 1800,
    type: 'labourer',
    sector: 'construction',
    description: 'builds and repairs roofs.',
    domSub: 'dom',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'ropemaker': {
    sv: 1850,
    type: 'business',
    sector: 'craftsmanship',
    description: 'braids rope.',
    domSub: 'sub',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'rugmaker': {
    sv: 1850,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs rugs by braiding, hooking, weaving, etc.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'saddler': {
    sv: 1000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs saddlery.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'sailor': {
    sv: 150,
    isBackground: true,
    type: 'labourer',
    sector: 'transportation',
    description: 'works as a member of the crew of a commercial or naval ship or boat.',
    domSub: 'dom',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      'I can handle the rough seas, and the pay is alright, so here I am, a sailor.',
      "I don't like the sea all that much, but the pay is okay.",
      'I love the sea, and would feel homesick on land. The sea is where I belong.'
    ],
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'sculptor': {
    sv: 2500,
    type: 'business',
    sector: 'arts',
    description: 'crafts art by carving or casting blocks of marble, stones, or other hardened minerals.',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'scavenger': {
    sv: 350,
    type: 'labourer',
    sector: 'unemployed',
    description: 'searches for and collects discarded items.',
    domSub: 'sub',
    dailyWage: 30,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'scholar': {
    sv: 2250,
    type: 'profession',
    sector: 'science',
    description: 'a specialist in a particular branch of study who pursues the acquisition of knowledge.',
    domSub: 'dom',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'seamstress': {
    sv: 450,
    type: 'labourer',
    sector: 'craftsmanship',
    description:
      'makes, alters, repairs, as well as occasionally designing garments.',
    domSub: 'sub',
    dailyWage: 190,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'seer': {
    sv: 3500,
    type: 'profession',
    sector: 'magic',
    description: 'able to see what the future holds through supernatural insight.',
    domSub: 'dom',
    dailyWage: 400,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'servant': {
    sv: 350,
    type: 'labourer',
    sector: 'hospitality',
    description: 'performs duties for others, especially a person employed in a house or as a personal attendant.',
    domSub: 'sub',
    dailyWage: 100,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    },
    professionOrigin: [
      "Believe it or not, I didn't exactly hope to be a servant- terrible hours, awful pay, and having to work for some stuck up noble? Ugh.",
      'Being a servant was all the work that I could find.'
    ],
    relationships () {
      return {
        coworker: {
          relationship: 'employer',
          reciprocalRelationship: 'servant',
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'shaman': {
    sv: 750,
    type: 'profession',
    sector: 'magic',
    description: 'accesses and influences the world of good and evil spirits.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'shepherd': {
    sv: 150,
    type: 'labourer',
    sector: 'agriculture',
    description: 'herds, tends, and guards sheep.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      'Being a shepherd is easy enough- sheep are good company, if you take the time to get to know them.'
    ]
  },
  "ship's captain": {
    sv: 950,
    type: 'profession',
    sector: 'military',
    description: 'commands a ship.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'shoemaker': {
    sv: 150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes shoes out of different materials.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'silversmith': {
    sv: 1250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'a smith who specializes in precious metals.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'slave': {
    sv: 150,
    type: 'labourer',
    sector: 'outcast',
    description: 'a person who is the legal property of another and forced to obey them.',
    dailyWage: 0,
    socialClass: 'indentured servitude',
    socialClassRoll () {
      return 5
    },
    professionOrigin: [
      'I was born into slavery; this is the only life that I have ever known.',
      'I was forced into slavery.',
      'I was sold into slavery after being captured.'
    ],
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'slaver',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('slaver')
              }
            }
          },
          probability: 20,
          base: {
            profession: 'slaver'
          }
        }
      }
    },
    exclusions (town, npc) { return !town.bans.includes('slavery') }
  },
  'slaver': {
    sv: 650,
    type: 'business',
    sector: 'business',
    description: 'deals with or owns slaves.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'slave',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {
            profession: 'slave'
          }
        }
      }
    },
    exclusions (town, npc) { return !town.bans.includes('slavery') }
  },
  'soldier': {
    sv: 1000,
    isBackground: true,
    type: 'profession',
    sector: 'military',
    description: 'serves in an army.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'conscripted soldier': {
    sv: 1000,
    isBackground: true,
    type: 'profession',
    sector: 'military',
    description: 'serves in an army against their will.',
    domSub: 'dom',
    dailyWage: 2,
    socialClass: 'indentured servitude',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'spice merchant': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'sells different kinds of spices.',
    dailyWage: 250,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'squire': {
    sv: 950,
    type: 'profession',
    sector: 'military',
    description: 'acts as an attendant to a knight before attempting to become a knight themselves.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            gender: 'man',
            profession: 'knight'
          }
        }
      }
    }
  },
  'stablehand': {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works in a stable.',
    dailyWage: 80,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'stevedore': {
    sv: 550,
    synonyms: ['ship worker', 'dock worker'],
    type: 'labourer',
    sector: 'naval',
    description: 'loads and unloads cargo from ships.',
    domSub: 'dom',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'stonemason': {
    sv: 750,
    type: 'business',
    sector: 'construction',
    description: 'cuts and prepares stone for use in construction.',
    domSub: 'dom',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'steward': {
    sv: 950,
    type: 'profession',
    sector: 'government and law',
    description: 'supervises both the estate and household of his lord or lady while they are away.',
    domSub: 'sub',
    dailyWage: 250,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'street seller': {
    sv: 550,
    type: 'business',
    sector: 'business',
    description: 'hocks goods on the street.',
    domSub: 'sub',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'street sweeper': {
    sv: 450,
    type: 'labourer',
    sector: 'government and law',
    description: 'cleans streets of a town.',
    domSub: 'sub',
    dailyWage: 60,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'student': {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'attends school or learns under other to enter and pursue a particular subject.',
    domSub: 'sub',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'surgeon': {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'practices surgery.',
    domSub: 'dom',
    dailyWage: 380,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'surveyor': {
    sv: 1150,
    type: 'profession',
    sector: 'business',
    description: 'establishes maps and boundaries for ownership or other purposes required by government or civil law.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'tailor': {
    sv: 250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes, alters, repairs, as well as occasionally designing garments.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'tanner': {
    sv: 200,
    type: 'business',
    sector: 'craftsmanship',
    description: 'treats the skins and hides of animals to produce leather.',
    dailyWage: 70,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'shopkeep': {
    sv: 450,
    type: 'business',
    sector: 'business',
    description: 'owns or runs a shop.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    professionOrigin: [
      "Selling goods is easy enough. Selling for a profit? That's harder."
    ]
  },
  "shopkeep's assistant": {
    sv: 200,
    type: 'business',
    sector: 'business',
    description: 'runs or assists in running a shop.',
    domSub: 'sub',
    dailyWage: 25,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'tax collector': {
    sv: 1850,
    type: 'profession',
    sector: 'government and law',
    description: 'collects unpaid taxes from people, guilds, or businesses.',
    domSub: 'dom',
    dailyWage: 250,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'teacher': {
    sv: 1450,
    type: 'profession',
    sector: 'science',
    description: 'instructs on a particular skill or subject.',
    domSub: 'sub',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'thatcher': {
    sv: 350,
    type: 'labourer',
    sector: 'construction',
    description: 'builds and repairs roofs.',
    domSub: 'dom',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'thief': {
    sv: 850,
    type: 'profession',
    sector: 'crime',
    description: 'steals peoples property, especially by stealth and without using force or violence.',
    dailyWage: 120,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'torturer': {
    sv: 1850,
    type: 'profession',
    sector: 'military',
    description: 'inflicts severe pain on someone as a punishment or in order to force them to do or say something.',
    domSub: 'dom',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      "I don't expect you to understand why I'm a torturer. It's a job, alright?"
    ],
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    },
    exclusions (town, npc) { return !town.disableNSFW }
  },
  'town crier': {
    sv: 750,
    type: 'labourer',
    sector: 'communications',
    description: 'makes public announcements in the streets or marketplace.',
    dailyWage: 60,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'toymaker': {
    sv: 2500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs toys.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'vendor': {
    sv: 1150,
    type: 'business',
    sector: 'business',
    description: 'deals items in the street.',
    domSub: 'sub',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'veterinarian': {
    sv: 1250,
    type: 'profession',
    sector: 'agriculture',
    description: 'treats diseased or injured animals.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'vintner': {
    sv: 850,
    type: 'profession',
    sector: 'agriculture',
    description: 'engages in winemaking, especially with monitoring and harvesting the grapes.',
    domSub: 'dom',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'weaver': {
    sv: 600,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes fabric by weaving fiber together.',
    domSub: 'sub',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'wetnurse': {
    sv: 350,
    type: 'labourer',
    sector: 'family',
    description: "a woman employed to suckle another woman's child.",
    domSub: 'sub',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    exclusions (town, npc) {
      return Boolean(npc.gender === 'woman')
    },
    professionOrigin: [
      "I sell my body for what it is worth. It is what it is- at least it's just an innocent baby."
    ],
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'woodcarver': {
    sv: 2450,
    type: 'business',
    sector: 'craftsmanship',
    description: 'fashions wood into various shapes.',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'wood seller': {
    sv: 2150,
    type: 'business',
    sector: 'business',
    description: 'sells wood, typically logs.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'wrestler': {
    sv: 6150,
    isHobby: true,
    type: 'labourer',
    sector: 'arts',
    description: 'performs in matches involving grappling and grappling-type techniques.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'writer': {
    sv: 7150,
    type: 'profession',
    sector: 'arts',
    description: 'commits his or her thoughts, ideas, etc., into written language.',
    domSub: 'dom',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'animal/Monster Handler': {
    sv: 5000,
    type: 'profession',
    sector: 'agriculture',
    description: 'responsible for the safe keeping, dietary care, and exercise of animals or monsters.',
    domSub: 'dom',
    dailyWage: 90,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'arborist': {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'maintains and cares for trees, often by surgically removing dying limbs.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'baler': {
    sv: 800,
    type: 'profession',
    sector: 'agriculture',
    description: 'bales hay, or in the mills, wool and cotton goods.',
    domSub: 'dom',
    dailyWage: 40,
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'beekeeper': {
    sv: 2000,
    type: 'profession',
    sector: 'agriculture',
    description: 'owns and breeds bees, especially for their honey.',
    domSub: 'sub',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'breeder': {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'breeds livestock, animals, or monsters.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'dairymaid': {
    sv: 500,
    type: 'profession',
    sector: 'agriculture',
    description: 'milks cows and makes cheese and butter.',
    domSub: 'sub',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        coworker: {
          relationship: 'co-worker',
          reciprocalRelationship: 'co-worker',
          probability: 20,
          base: {
            profession: 'cowherd'
          }
        }
      }
    }
  },
  'falconer': {
    sv: 4000,
    type: 'profession',
    sector: 'agriculture',
    description: 'keeps, trains, and hunts with falcons, hawks, or other birds of prey.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'florist': {
    sv: 3500,
    isHobby: true,
    type: 'business',
    sector: 'agriculture',
    description: 'grows and arranges plants and cut flowers.',
    domSub: 'sub',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'forager': {
    sv: 500,
    type: 'profession',
    sector: 'agriculture',
    description: 'searches for food in the wild.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'forester': {
    sv: 1000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'supervises the wellbeing of a forest.',
    dailyWage: 240,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'fowler': {
    sv: 750,
    type: 'profession',
    sector: 'agriculture',
    description: 'catches or ensnares birds.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        supplier: {
          relationship: 'client',
          reciprocalRelationship: 'supplier',
          probability: 20,
          base: {
            profession: 'plumer'
          }
        }
      }
    }
  },
  'gamekeeper': {
    sv: 4500,
    type: 'profession',
    sector: 'agriculture',
    description: 'breeds and protects game, typically for a large estate.',
    dailyWage: 230,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'groom': {
    sv: 2500,
    type: 'profession',
    sector: 'agriculture',
    description: 'cleans and brushes the coats horses, dogs, or other animals.',
    domSub: 'sub',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'herder': {
    sv: 100,
    type: 'profession',
    sector: 'agriculture',
    description: 'supervises a herd of livestock or makes a living from keeping livestock, especially in open country.',
    domSub: 'dom',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      "Livestock are simple. Feed 'em, keep 'em warm, then come slaughter time, you slaughter them. It's people that are hard."
    ],
    relationships () {
      return {
        coworker: {
          relationship: 'co-worker',
          reciprocalRelationship: 'co-worker',
          probability: 20,
          base: {
            profession: 'cowherd'
          }
        }
      }
    }
  },
  'horse trainer': {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'tends to horses and teaches them different disciplines.',
    dailyWage: 210,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'master-of-Horses': {
    sv: 5000,
    type: 'profession',
    sector: 'agriculture',
    description: 'supervises and commands all horses under a jurisdiction.',
    domSub: 'dom',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'master-of-Hounds': {
    sv: 7500,
    type: 'profession',
    sector: 'agriculture',
    description: 'maintains a pack of hounds and their associated staff, equipment, and hunting arrangements.',
    domSub: 'dom',
    dailyWage: 900,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'pathfinder': {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'scouts ahead and discovers a path or way for others.',
    domSub: 'dom',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'plumer': {
    sv: 2000,
    type: 'profession',
    sector: 'agriculture',
    description: 'hunts birds for their plumes.',
    domSub: 'dom',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'prospector': {
    sv: 500,
    type: 'labourer',
    sector: 'mining',
    description: 'searches for mineral deposits, especially by drilling and excavation.',
    domSub: 'dom',
    dailyWage: 80,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'renderer': {
    sv: 3500,
    type: 'profession',
    sector: 'agriculture',
    description: 'converts waste animal tissue into usable materials.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      'Apologies for the smell. Rendering is not a pleasant profession, believe me, I know.'
    ]
  },
  'thresher': {
    sv: 300,
    type: 'labourer',
    sector: 'agriculture',
    description: 'separates grain from the plants by beating.',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    professionOrigin: [
      "Believe it or not, I don't do this backbreaking work for fun- it's all I could find."
    ],
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'trapper': {
    sv: 800,
    type: 'profession',
    sector: 'agriculture',
    description: 'traps wild animals, especially for their fur.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'zookeeper': {
    sv: 10000,
    type: 'profession',
    sector: 'agriculture',
    description: 'maintains and cares for animals or monsters in a zoo.',
    domSub: 'dom',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'construction Worker': {
    sv: 300,
    type: 'labourer',
    sector: 'construction',
    description: 'a laborer in the physical construction of a built environment and its infrastructure.',
    domSub: 'dom',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'general contractor': {
    sv: 5000,
    type: 'profession',
    sector: 'construction',
    description: 'supervises a construction site, manages its vendors and trades, and communicates information to all involved parties.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'glazier': {
    sv: 500,
    type: 'labourer',
    sector: 'construction',
    description: 'fits glass into windows and doors.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'plasterer': {
    sv: 750,
    type: 'labourer',
    sector: 'construction',
    description: 'applies plaster to walls, ceilings, or other surfaces.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'roadlayer': {
    sv: 3000,
    synonyms: ['streetlayer', 'street layer'],
    type: 'labourer',
    sector: 'construction',
    description: 'paves roads or streets.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'acrobat': {
    sv: 2500,
    type: 'profession',
    sector: 'arts',
    description: 'performs spectacular gymnastic feats.',
    domSub: 'sub',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'trapezist': {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'performs acrobatics high above the ground on a tightrope or trapeze.',
    domSub: 'sub',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'arranger': {
    sv: 2000,
    type: 'profession',
    sector: 'arts',
    description: 'adapts a musical composition for performance.',
    domSub: 'sub',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'athlete': {
    sv: 500,
    type: 'profession',
    sector: 'arts',
    description: 'proficient in sports and other forms of physical exercise.',
    domSub: 'dom',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'busker': {
    sv: 2000,
    type: 'profession',
    sector: 'outcast',
    description: 'performs in a public place, often for money.',
    dailyWage: 50,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'celebrity': {
    sv: 10000,
    type: 'profession',
    sector: 'arts',
    description: 'a famous person.',
    domSub: 'dom',
    dailyWage: 1000,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    professionOrigin: [
      "I became famous after I received a lot of attention. Now, I live off that. It's a sweet gig, you should try it!"
    ]
  },
  'choirmaster': {
    sv: 1000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'trains a choir and orchestrates their singing when they perform.',
    domSub: 'sub',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'clown': {
    sv: 3000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'comic entertainer who wears a traditional costume and exaggerated makeup.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'comedian': {
    sv: 5000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'entertainer whose act is designed to make an audience laugh.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'conductor': {
    sv: 8000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'directs the performance of an orchestra.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'contortionist': {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'twists and bends their body into strange and unnatural positions.',
    domSub: 'sub',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'curator': {
    sv: 2500,
    isHobby: true,
    type: 'business',
    sector: 'arts',
    description: 'keeper and custodian of a museum or other collections of precious items.',
    domSub: 'dom',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'costumer': {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'makes theatrical costumes.',
    domSub: 'sub',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'equilibrist': {
    sv: 3000,
    type: 'profession',
    sector: 'arts',
    description: 'performs balancing feats.',
    domSub: 'sub',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'fashion designer': {
    sv: 5000,
    isHobby: true,
    type: 'business',
    sector: 'arts',
    description: 'applies design, aesthetics and natural beauty to garments and their accessories.',
    domSub: 'sub',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'glasspainter': {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'produces colorful designs on or in glass.',
    dailyWage: 160,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'juggler': {
    sv: 3000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'keeps several objects in motion in the air at the same time by alternately tossing and catching them.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'limner': {
    sv: 7000,
    type: 'profession',
    sector: 'arts',
    description:
      'paints and calligraphs to adorn or enlighten scrolls and manuscripts.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'makeup artist': {
    sv: 4500,
    type: 'profession',
    sector: 'arts',
    description: 'applies cosmetics to models, actors, nobles, etc.',
    domSub: 'sub',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        employer: {
          relationship: 'employer',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('employer')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility',
            profession: random(['model', 'actor', 'noble'])
          }
        }
      }
    }
  },
  'artisan': {
    sv: 4500,
    isHobby: true,
    synonyms: ['artist', 'art maker'],
    type: 'profession',
    sector: 'arts',
    description: 'creates some form of art.',
    domSub: 'sub',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 40 + dice(8, 6)
    }
  },
  'model': {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'poses as a subject for an artist, fashion designer, or sculptor.',
    domSub: 'sub',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'musician': {
    sv: 800,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'plays a musical instrument.',
    domSub: 'sub',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'band mate',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'playwright': {
    sv: 2500,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'writes plays or musicals.',
    domSub: 'sub',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'poet': {
    sv: 3500,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'writes ballads, epics, sonnets, or other forms of poetry.',
    domSub: 'sub',
    dailyWage: 110,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'ringmaster': {
    sv: 3500,
    type: 'business',
    sector: 'arts',
    description: 'master of ceremony who introduces the circus acts to the audience.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'ropewalker': {
    sv: 4000,
    synonyms: ['trapeze artist'],
    type: 'profession',
    sector: 'arts',
    description: 'walks along a tightrope to entertain others.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'singer': {
    sv: 2000,
    type: 'profession',
    sector: 'arts',
    description: 'sings with or without instrumental accompaniment.',
    domSub: 'sub',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'band mate',
          probability: 20,
          base: {
            profession: random([npc.profession, 'musician'])
          }
        }
      }
    }
  },
  'skald': {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'composes and recites poems honoring heroes and their deeds.',
    domSub: 'sub',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'stage magician': {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'deceives their audience with seemingly impossible feats while using only natural means.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'stuntman': {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'performs dangerous stunts for their audience.',
    domSub: 'dom',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'tattooist': {
    sv: 3000,
    type: 'business',
    sector: 'arts',
    description: 'illustrates the skin with indelible patterns, pictures, legends, etc.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'theater director': {
    sv: 5000,
    type: 'business',
    sector: 'arts',
    description: 'supervises and orchestrates the mounting of a theatre production by unifying various endeavors and aspects of production.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'accountant': {
    sv: 3000,
    type: 'business',
    sector: 'business',
    description: 'keeps and inspects financial accounts.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'actuary': {
    sv: 6000,
    type: 'business',
    sector: 'government and law',
    description: 'compiles and analyzes statistics and uses them to calculate risk.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'animal collector': {
    sv: 10000,
    isHobby: true,
    type: 'business',
    sector: 'agriculture',
    description: 'collects and deals in rare and exotic animals and monsters.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'business owner': {
    sv: 500,
    type: 'business',
    sector: 'business',
    description: 'owns a business entity in an attempt to profit from its successful operations.',
    domSub: 'dom',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'debt collector': {
    sv: 3500,
    type: 'business',
    sector: 'business',
    description: 'recovers money owed on delinquent accounts.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'draper': {
    sv: 2500,
    type: 'business',
    sector: 'business',
    description: 'an alcohol merchant.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        supplier: {
          relationship: 'client',
          reciprocalRelationship: 'supplier',
          probability: 20,
          base: {
            profession: 'bartender'
          }
        }
      }
    }
  },
  'appraiser': {
    sv: 5000,
    type: 'profession',
    sector: 'business',
    description: 'assesses the monetary value of something.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'auctioneer': {
    sv: 4500,
    type: 'profession',
    sector: 'business',
    description: 'conducts auctions by accepting bids and declaring goods sold.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'bagniokeeper': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'owner of a bath house or brothel.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'bookkeeper': {
    sv: 2500,
    type: 'business',
    sector: 'business',
    description: 'keeps records of financial affairs.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'collector': {
    sv: 3000,
    isHobby: true,
    type: 'business',
    sector: 'business',
    description: 'collects things of a specified type, professionally or as a hobby.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'entrepreneur': {
    sv: 5000,
    isHobby: true,
    type: 'business',
    sector: 'business',
    description: 'organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'nobility',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'moneychanger': {
    sv: 2500,
    type: 'business',
    sector: 'government and law',
    description: 'exchanges one currency for another.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'moneylender': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'lends money to others who pay interest.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'peddler': {
    sv: 350,
    type: 'business',
    sector: 'business',
    description: 'travels from place to place selling assorted items.',
    dailyWage: 80,
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'plantation owner': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'an owner of an estate on which crops are cultivated by resident labor, typically slave labor.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships () {
      return {
        slave: {
          relationship: 'slave',
          reciprocalRelationship: 'owner',
          probability: 20,
          base: {
            profession: 'slave'
          }
        }
      }
    },
    exclusions (town, npc) { return !town.bans.includes('slavery') }
  },
  'speculator': {
    sv: 9000,
    isHobby: true,
    type: 'profession',
    sector: 'business',
    description: 'invests in stocks, property, or other ventures in the hope of making a profit.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'thrift dealer': {
    sv: 800,
    type: 'business',
    sector: 'business',
    description: 'deals in secondhand items.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'tradesman': {
    sv: 500,
    type: 'business',
    sector: 'business',
    description: 'deals exclusively in bartering.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'billboard poster': {
    sv: 1000,
    type: 'labourer',
    sector: 'business',
    description: 'a person who puts up notices, signs and advertisements.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'courier': {
    sv: 300,
    type: 'labourer',
    sector: 'business',
    description: 'transports packages and documents.',
    dailyWage: 50,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'interpreter': {
    sv: 5000,
    synonyms: ['translator'],
    type: 'profession',
    sector: 'business',
    description: 'interprets language and its meaning, especially within ancient manuscripts.',
    dailyWage: 190,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'coinsmith': {
    sv: 10000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes currency for the government.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'bookbinder': {
    sv: 5000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'binds books and wraps scrolls.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        colleague: {
          relationship: 'colleague',
          probability: 20,
          base: {
            profession: 'librarian'
          }
        }
      }
    }
  },
  'bottler': {
    sv: 3000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'bottles drinks and other liquids.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'bowyer': {
    sv: 500,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes bows and crossbows.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'broom Maker': {
    sv: 4500,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes brooms and brushes.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'candlemaker': {
    sv: 2000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes candles and wax from honey and tallow.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'cartwright': {
    sv: 500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes and repairs carts and wagons.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'cutler': {
    sv: 7500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes cutlery.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'dyer': {
    sv: 5000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'dyes cloth and other materials.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'embroiderer': {
    sv: 2500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'ornaments with needlework.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'engraver': {
    sv: 1000,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'incises a design onto a hard surface by cutting grooves into it.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'farrier': {
    sv: 2000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: "trims and shoes horse's hooves.",
    domSub: 'dom',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'fletcher': {
    sv: 1500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs arrows.',
    domSub: 'dom',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'furniture artisan': {
    sv: 2500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs furniture.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'glassworker': {
    sv: 5000,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'blows glass planes and items.',
    domSub: 'dom',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'instrument Maker': {
    sv: 7500,
    isHobby: true,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs musical instruments.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'lapidary': {
    sv: 5000,
    isHobby: true,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'turns stone, minerals, or gemstones into decorative items such as cabochons, engraved gems, and faceted designs.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'luthier': {
    sv: 8500,
    isHobby: true,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs stringed instruments.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'mercer': {
    sv: 2500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'weaves textile fabrics, especially silks, velvets, and other fine materials.',
    domSub: 'sub',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'optician': {
    sv: 6500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs eyeglasses.',
    domSub: 'dom',
    dailyWage: 190,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'printer': {
    sv: 2000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'a person who applies pressure to an inked surface resting upon a print medium (such as paper or cloth), thereby transferring the ink to manufacture a text.',
    dailyWage: 140,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'restorer': {
    sv: 10000,
    isHobby: true,
    type: 'profession',
    sector: 'arts',
    description: 'repairs or renovates a work of art so as to return it to its original condition.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'soaper': {
    sv: 3000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes soap from accumulated mutton fat, wood ash, and natural soda.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'taxidermist': {
    sv: 4000,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'prepares, stuffs, and mounts the skins of animals.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'tinker': {
    sv: 3000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'travels from place to place mending utensils.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'weaponsmith': {
    sv: 2500,
    type: 'business',
    sector: 'craftsmanship',
    description: 'specializes in making and repairing weapons.',
    domSub: 'dom',
    dailyWage: 190,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'wheelwright': {
    sv: 1500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes and repairs wooden wheels.',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'assassin': {
    sv: 5000,
    type: 'profession',
    sector: 'crime',
    description: 'murders through stealth for reasons pertaining to money, politics, or religion.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'bandit': {
    sv: 8000,
    type: 'profession',
    sector: 'crime',
    description: 'a robber or outlaw belonging to a gang and typically operating in an isolated or lawless area.',
    domSub: 'dom',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'fellow bandit',
          reciprocalRelationship: 'fellow bandit',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'burglar': {
    sv: 500,
    type: 'profession',
    sector: 'crime',
    description: 'illegally enters buildings and steals things.',
    domSub: 'dom',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'conman': {
    sv: 750,
    type: 'profession',
    sector: 'crime',
    description: 'tricks people by gaining their trust and persuading them to believe something that is not true in order to benefit from the encounter.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'gamefighter': {
    sv: 2000,
    type: 'profession',
    sector: 'crime',
    description: 'engages in arena matches in which animals or monsters are pitted against one another, typically to the death.',
    domSub: 'dom',
    dailyWage: 190,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'crime boss': {
    sv: 6000,
    type: 'profession',
    sector: 'crime',
    description: 'controls and supervises a criminal organization.',
    domSub: 'dom',
    dailyWage: 400,
    socialClass: 'nobility',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'cutpurse': {
    sv: 500,
    type: 'profession',
    sector: 'crime',
    description: 'a pickpocket or thief.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'drug dealer': {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'dealer of illegal substances.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'drug lord': {
    sv: 6000,
    type: 'profession',
    sector: 'crime',
    description: 'controls a network of persons involved in the illegal drugs trade and transactions.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships () {
      return {
        coworker: {
          relationship: 'buyer',
          reciprocalRelationship: 'drug supplier',
          probability: 20,
          base: {
            profession: 'drug dealer'
          }
        }
      }
    }
  },
  'extortioner': {
    sv: 2000,
    type: 'profession',
    sector: 'crime',
    description: 'extorts money from someone by threatening to expose embarrassing information about them.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'fence': {
    sv: 10000,
    type: 'profession',
    sector: 'crime',
    description: 'deals in stolen goods.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'forger': {
    sv: 10000,
    type: 'profession',
    sector: 'crime',
    description: 'produces fraudulent copies or imitations.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'fugitive': {
    sv: 2500,
    type: 'labourer',
    sector: 'crime',
    description: 'a person who has escaped from a place or is in hiding, especially to avoid arrest or persecution.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'highwayman': {
    sv: 500,
    type: 'profession',
    sector: 'crime',
    description: 'robs travelers on a road.',
    domSub: 'dom',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'kidnapper': {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'abducts people and holds them captive, typically to obtain a ransom.',
    domSub: 'dom',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'loan shark': {
    sv: 4500,
    type: 'profession',
    sector: 'crime',
    description: 'charges extremely high rates of interest for moneylending, typically under illegal conditions.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'pirate': {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'attacks and robs ships at sea.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'wannabe pirate': {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'dreams of becoming a full fledged pirate, but currently is just a rowdy sailor.',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'poacher': {
    sv: 5000,
    type: 'labourer',
    sector: 'crime',
    description: 'hunts illegal game.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'poisoner': {
    sv: 7000,
    type: 'business',
    sector: 'crime',
    description: 'makes poisons to harm or kill.',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'marauder': {
    sv: 3000,
    type: 'profession',
    sector: 'crime',
    description: 'makes sudden, unprompted attacks against defenseless or near-defenseless settlements.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'smuggler': {
    sv: 2500,
    type: 'profession',
    sector: 'crime',
    description: 'manages the import or export of goods secretly, in violation of the law, especially without payment of legal duty.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'affeeror': {
    sv: 10000,
    type: 'profession',
    sector: 'government and law',
    description: 'determines the values of fines and amercements.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'agister': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'affords pasture to the livestock of others for a price.',
    dailyWage: 120,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'alderman': {
    sv: 1000,
    type: 'profession',
    sector: 'government and law',
    description: 'a civic dignitary in the local council ranked below the mayor.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'alienist': {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'assesses the competence of a defendant in a court of law.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        client: {
          relationship: 'client',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {}
        }
      }
    }
  },
  'assay master': {
    sv: 10000,
    type: 'profession',
    sector: 'government and law',
    description: 'oversees the testing of currency.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'baron': {
    sv: 2500,
    type: 'profession',
    sector: 'government and law',
    description: 'a member of the lowest order of the nobility.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'baroness': {
    sv: 2500,
    type: 'profession',
    sector: 'government and law',
    description: 'a member of the lowest order of the nobility.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    exclusions (_, npc) { return npc.gender === 'woman' }
  },
  'chancellor': {
    sv: 5000,
    type: 'profession',
    sector: 'government and law',
    description: 'a senior state or legal official.',
    domSub: 'dom',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'chief': {
    sv: 9000,
    type: 'profession',
    sector: 'government and law',
    description: 'leads or rules a people or clan.',
    domSub: 'dom',
    dailyWage: 100,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'conservationist': {
    sv: 3000,
    isHobby: true,
    type: 'profession',
    sector: 'government and law',
    description: 'advocates for the protection and preservation of the environment and wildlife.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'count': {
    sv: 7000,
    type: 'profession',
    sector: 'government and law',
    description: 'a nobleperson ranking above a viscount and below a marquess.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'countess': {
    sv: 7000,
    type: 'profession',
    sector: 'government and law',
    description: 'a nobleperson ranking above a viscount and below a marquess.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    exclusions (_, npc) { return npc.gender === 'woman' }
  },
  'duke': {
    sv: 15000,
    type: 'profession',
    sector: 'government and law',
    description: 'rules over a duchy and is of the highest rank below the monarch.',
    domSub: 'dom',
    dailyWage: 900,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'duchess': {
    sv: 15000,
    type: 'profession',
    sector: 'government and law',
    description: 'rules over a duchy and is of the highest rank below the monarch.',
    domSub: 'dom',
    dailyWage: 900,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    exclusions (_, npc) { return npc.gender === 'woman' }
  },
  'emperor': {
    sv: 25000,
    type: 'profession',
    sector: 'government and law',
    description: 'the supreme sovereign ruler of an extensive group of states or countries under a single authority.',
    domSub: 'dom',
    dailyWage: 2400,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'empress': {
    sv: 25000,
    type: 'profession',
    sector: 'government and law',
    description: 'the supreme sovereign ruler of an extensive group of states or countries under a single authority.',
    domSub: 'dom',
    dailyWage: 2400,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    exclusions (_, npc) { return npc.gender === 'woman' }
  },
  'king': {
    sv: 20000,
    type: 'profession',
    sector: 'government and law',
    description: 'the ruler of an independent state and its people.',
    domSub: 'dom',
    dailyWage: 2400,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'queen': {
    sv: 20000,
    type: 'profession',
    sector: 'government and law',
    description: 'the ruler of an independent state and its people.',
    domSub: 'dom',
    dailyWage: 2400,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    exclusions (_, npc) { return npc.gender === 'woman' }
  },
  'lady-in-Waiting': {
    sv: 3000,
    type: 'labourer',
    sector: 'government and law',
    description: 'attends a queen, princess, or other high-ranking feminine nobleperson.',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility',
            gender: 'woman'
          }
        }
      }
    },
    exclusions (town, npc) {
      if (npc.gender !== 'woman') return false
    }
  },
  'marquess': {
    sv: 5000,
    type: 'profession',
    sector: 'government and law',
    description: 'a nobleperson ranking above a count and below a duke.',
    dailyWage: 600,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    exclusions (town, npc) {
      if (npc.gender !== 'woman') return false
    }
  },
  'master-of-Coin': {
    sv: 7500,
    type: 'profession',
    sector: 'government and law',
    description: 'supervises the royal treasury, advises the monarch on financial matters, and is responsible for raising money through taxation.',
    domSub: 'dom',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'master-of-the-Revels': {
    sv: 1000,
    type: 'profession',
    sector: 'government and law',
    description: 'responsible for overseeing royal festivities.',
    domSub: 'dom',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'notary': {
    sv: 3000,
    isHobby: true,
    type: 'profession',
    sector: 'government and law',
    description: 'performs certain legal formalities, especially to draw up or certify contracts, deeds, and other documents for use in other jurisdictions.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'orator': {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'makes statements on behalf of a group or individual nobleperson.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'page': {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'a young attendant to a person of noble rank.',
    domSub: 'sub',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        noble: {
          relationship: 'employer',
          reciprocalRelationship: 'page',
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'prince': {
    sv: 6000,
    type: 'profession',
    sector: 'government and law',
    description: 'the direct descendant of a monarch.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'princess': {
    sv: 6000,
    type: 'profession',
    sector: 'government and law',
    description: 'the direct descendant of a monarch.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    exclusions (_, npc) { return npc.gender === 'woman' }
  },
  'senator': {
    sv: 5000,
    type: 'profession',
    sector: 'government and law',
    description: 'partakes in governmental decision-making after being elected.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'sheriff': {
    sv: 4500,
    type: 'profession',
    sector: 'government and law',
    description: 'the chief executive officer in a county, having various administrative and judicial functions.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'spymaster': {
    sv: 10000,
    type: 'profession',
    sector: 'government and law',
    description: 'directs a network of subordinate espionage agents for a state, kingdom, or empire.',
    domSub: 'dom',
    dailyWage: 800,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'tourist': {
    sv: 9000,
    type: 'profession',
    isHobby: true,
    sector: 'hospitality',
    description: 'Travels for a living, perhaps as a scout for royal visits.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'viscount': {
    sv: 7000,
    type: 'profession',
    sector: 'government and law',
    description: 'a nobleperson ranking above a baron and below a count.',
    domSub: 'dom',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'viscountess': {
    sv: 7000,
    type: 'profession',
    sector: 'government and law',
    description: 'a nobleperson ranking above a baron and below a count.',
    domSub: 'dom',
    dailyWage: 700,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    },
    exclusions (_, npc) { return npc.gender === 'woman' }
  },
  'ward': {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'a member of a noble house who has been taken in by another noble family to be raised for a time.',
    dailyWage: 100,
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },
  'acater': {
    sv: 3000,
    type: 'profession',
    sector: 'hospitality',
    description: 'provides and prepares foodstuffs or delicacies for events such as festivals.',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'tunner': {
    sv: 5000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'fills casks in a brewery or winery.',
    dailyWage: 30,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'butler': {
    sv: 2000,
    type: 'profession',
    sector: 'hospitality',
    description: 'the chief servant of a household.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        noble: {
          relationship: 'employer',
          reciprocalRelationship: 'butler',
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'caregiver': {
    sv: 1000,
    type: 'profession',
    sector: 'hospitality',
    description: 'looks after a sick, elderly, or disabled person.',
    domSub: 'sub',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        noble: {
          relationship: 'client',
          reciprocalRelationship: 'carer',
          probability: 20,
          base: {
            socialClass: 'nobility',
            ageStage: 'elderly'
          }
        }
      }
    }
  },
  'charcoal Maker': {
    sv: 2500,
    type: 'labourer',
    sector: 'business',
    description: 'manufactures charcoal by carbonizing wood in a kiln.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'chatelaine': {
    sv: 3000,
    type: 'profession',
    sector: 'hospitality',
    description: 'a person in charge of a large household.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        noble: {
          relationship: 'employer',
          reciprocalRelationship: 'employee',
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('employer')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'chimney sweeper': {
    sv: 2500,
    type: 'labourer',
    sector: 'business',
    description: 'a person, typically a child, who ascends chimneys to clean them.',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'clerk': {
    sv: 5000,
    type: 'profession',
    sector: 'business',
    description: 'undertakes routine administrative duties in a business or bank.',
    domSub: 'sub',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'copyist': {
    sv: 3000,
    type: 'profession',
    sector: 'communication',
    description: 'makes copies of handwritten documents or music.',
    domSub: 'sub',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'croupier': {
    sv: 1500,
    type: 'profession',
    sector: 'hospitality',
    description: 'runs a gaming table by gathering in and paying out money or tokens.',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'exterminator': {
    sv: 2000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'exterminates unwanted rodents and insects.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'food and drink taster': {
    sv: 3500,
    type: 'profession',
    sector: 'hospitality',
    description: 'ingests food that was prepared for someone else to confirm it is safe to eat.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        noble: {
          relationship: 'employer',
          reciprocalRelationship: 'food taster',
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('employer')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'gongfarmer': {
    sv: 800,
    type: 'labourer',
    sector: 'agriculture',
    description: 'digs out and removes excrement from privies and cesspits.',
    domSub: 'dom',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'gravedigger': {
    sv: 500,
    type: 'labourer',
    sector: 'religion',
    description: 'digs graves for the purposes of a funeral ceremony.',
    domSub: 'dom',
    dailyWage: 40,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'groundskeeper': {
    sv: 1000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'maintains an athletic field, a park, or the grounds of a graveyard or other institution.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'kitchen drudge': {
    sv: 500,
    type: 'labourer',
    sector: 'business',
    description: 'performs menial work in a kitchen.',
    dailyWage: 50,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'knacker': {
    sv: 2000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'disposes of dead or unwanted animals.',
    dailyWage: 40,
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'lamplighter': {
    sv: 5000,
    type: 'labourer',
    sector: 'business',
    description: 'lights street or road lights at dusk.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'laundry worker': {
    sv: 2500,
    type: 'labourer',
    sector: 'business',
    description: 'a laborer who takes part in the washing, drying, and ironing of clothes and other fabric items.',
    domSub: 'sub',
    dailyWage: 40,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'lector': {
    sv: 4000,
    type: 'profession',
    sector: 'communications',
    description: 'reads to others while they work for entertainment.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        noble: {
          relationship: 'employer',
          reciprocalRelationship: 'employee',
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('employer')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'commoner'
          }
        }
      }
    }
  },
  'nanny': {
    sv: 800,
    type: 'labourer',
    sector: 'caregiver',
    description: 'a servant employed to look after a young child or children.',
    domSub: 'sub',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        charge: {
          relationship: 'charge',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('charge')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility',
            ageStage: 'child'
          }
        }
      }
    }
  },
  'operator': {
    sv: 2500,
    type: 'labourer',
    sector: 'construction',
    description: 'a laborer who operates equipment, typically in construction.',
    domSub: 'dom',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'pastry chef': {
    sv: 1500,
    type: 'profession',
    sector: 'hospitality',
    description: 'makes desserts, especially cakes and pastries.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'plumber': {
    sv: 3000,
    type: 'profession',
    sector: 'construction',
    description: 'installs and repairs the fittings of water supply and sanitation.',
    domSub: 'dom',
    dailyWage: 110,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'porter': {
    sv: 3000,
    type: 'profession',
    sector: 'agriculture',
    description: 'carries luggage and other loads.',
    domSub: 'dom',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'harlot': {
    sv: 400,
    synonyms: ['prostitute', 'lady of the night', 'call girl', 'sex worker'],
    type: 'profession',
    sector: 'business',
    description: 'engages in sexual activity for payment.',
    domSub: 'sub',
    dailyWage: 120,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    },
    exclusions (town, npc) { return !town.disableNSFW }
  },
  'quarryman': {
    sv: 1200,
    type: 'labourer',
    sector: 'construction',
    description: 'quarries stone.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'stagehand': {
    sv: 2500,
    type: 'labourer',
    sector: 'arts',
    description: 'moves scenery or props before or during the performance of a theatrical production.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'street cleaner': {
    sv: 4000,
    type: 'labourer',
    sector: 'construction',
    description: 'cleans streets and alleyways after dark.',
    domSub: 'sub',
    dailyWage: 50,
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'talent scout': {
    sv: 7000,
    type: 'profession',
    sector: 'arts',
    description:
      'searches for talented individuals who can be employed or promoted.',
    domSub: 'sub',
    dailyWage: 110,
    socialClass: 'nobility',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'trainer': {
    sv: 5000,
    isHobby: true,
    type: 'profession',
    sector: 'adventuring',
    description: 'trains someone in a particular skill, usually physical, for money.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        client: {
          relationship: 'client',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('client')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'water bearer': {
    sv: 200,
    type: 'labourer',
    sector: 'agriculture',
    description: 'brings water from rivers, wells, and lakes back to their settlement.',
    dailyWage: 40,
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'abjurer': {
    sv: 5000,
    type: 'profession',
    sector: 'magic',
    description: 'a mage focused in protective spells.',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'alchemist': {
    sv: 2000,
    type: 'profession',
    sector: 'science',
    description: 'transforms or creates something within nature through the magical and scientific manipulation of chemicals.',
    dailyWage: 1500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'archmage': {
    sv: 15000,
    type: 'profession',
    sector: 'magic',
    description: 'an extremely powerful mage.',
    domSub: 'dom',
    dailyWage: 1800,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'artificer': {
    sv: 7500,
    type: 'profession',
    sector: 'magic',
    description: 'unlocks magic in everyday objects as well as being an inventor.',
    dailyWage: 700,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },

  'conjuror': {
    sv: 7000,
    type: 'profession',
    sector: 'magic',
    description: 'conjures spirits or familiars.',
    dailyWage: 600,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'elementalist': {
    sv: 8000,
    type: 'profession',
    sector: 'magic',
    description: 'manipulates nature’s elements to their will.',
    dailyWage: 600,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'enchanter': {
    sv: 7500,
    type: 'profession',
    sector: 'magic',
    description: 'uses sorcery to put someone or something under a spell.',
    dailyWage: 3000,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'evoker': {
    sv: 8000,
    type: 'profession',
    sector: 'magic',
    description: 'manipulates energy or taps into an unseen source of power in order to produce a desired kinetic end.',
    dailyWage: 2300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'hearth witch': {
    sv: 6000,
    type: 'profession',
    sector: 'magic',
    description: 'incorporates spells and enchantments in cooking.',
    dailyWage: 1800,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'illusionist': {
    sv: 7500,
    type: 'profession',
    sector: 'magic',
    description: 'performs tricks and spells that deceive the senses.',
    dailyWage: 400,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'mage': {
    sv: 5000,
    type: 'profession',
    sector: 'magic',
    description: 'a magic-user.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'medium': {
    sv: 8000,
    type: 'profession',
    sector: 'magic',
    description: 'uses extrasensory perception, magic, or divine powers to identify information hidden from the normal senses.',
    dailyWage: 400,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'meteorologist': {
    sv: 1000,
    type: 'profession',
    sector: 'magic',
    description: 'forecasts and manipulates weather.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'ritualist': {
    sv: 4000,
    type: 'profession',
    sector: 'magic',
    description: 'practices or advocates the observance of ritual (formula intended to trigger a magical effect on a person or objects).',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'runecaster': {
    sv: 10000,
    type: 'profession',
    sector: 'magic',
    description: 'uses special alphabets to create runes (symbols possessing magical effects capable of being used multiple times).',
    dailyWage: 600,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'sage': {
    sv: 10000,
    isBackground: true,
    type: 'profession',
    sector: 'magic',
    description: 'a wise and experienced magic-user.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'shapeshifter': {
    sv: 7000,
    type: 'profession',
    sector: 'magic',
    description: 'a person with the ability to change their physical form.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'summoner': {
    sv: 8000,
    type: 'profession',
    sector: 'magic',
    description: 'a mage able to summon forth magical beasts, creatures, and monsters.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'transmuter': {
    sv: 8000,
    type: 'profession',
    sector: 'magic',
    description: 'alters matter in form, appearance, or nature.',
    dailyWage: 600,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'witchdoctor': {
    sv: 3500,
    type: 'profession',
    sector: 'magic',
    description: 'a tribal mage with powers of healing, divination, and protection against the magic of others.',
    dailyWage: 190,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'witch': {
    sv: 4000,
    type: 'profession',
    sector: 'magic',
    description: 'a woman who has supernatural powers and practices sorcery, typically in solitude.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'wordsmith': {
    sv: 9000,
    type: 'profession',
    sector: 'magic',
    description: 'draws their power from language and casts by dictation.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'admiral': {
    sv: 1000,
    type: 'profession',
    sector: 'military',
    description: 'commands a fleet or naval squadron.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'bailiff': {
    sv: 5000,
    type: 'profession',
    sector: 'military',
    description: 'looks after prisoners.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        prisoner: {
          relationship: 'prisoner',
          reciprocalRelationship: npc.profession,
          probability: 20,
          base: {}
        }
      }
    }
  },
  'bodyguard': {
    sv: 3000,
    type: 'profession',
    sector: 'adventuring',
    description: 'escorts and protects another person, especially a dignitary.',
    domSub: 'dom',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        noble: {
          relationship: 'employer',
          reciprocalRelationship: 'employee',
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('employer')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'bouncer': {
    sv: 2500,
    type: 'profession',
    sector: 'adventuring',
    description: 'prevents troublemakers from entering or to eject them from the premises of an establishment.',
    domSub: 'dom',
    dailyWage: 170,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'castellan': {
    sv: 8000,
    type: 'profession',
    sector: 'government and law',
    description: 'the governor of a castle.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'cavalier': {
    sv: 2000,
    type: 'profession',
    sector: 'military',
    description: 'a skilled horseback rider.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'city watch': {
    sv: 4500,
    type: 'profession',
    sector: 'military',
    description: 'an officer of law enforcement who resides in larger towns or cities.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'commissar': {
    sv: 7500,
    type: 'profession',
    sector: 'military',
    description: 'teaches principles and policies to military units.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'constable': {
    sv: 500,
    type: 'profession',
    sector: 'military',
    description: 'an officer with limited policing authority, typically in a small town.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'investigator': {
    sv: 5000,
    type: 'profession',
    sector: 'business',
    description: 'investigates and solves crimes.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'fifer': {
    sv: 3000,
    type: 'profession',
    sector: 'military',
    description: 'a non-combatant foot soldier who sounds signals for changes in formation in combat.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'duelist': {
    sv: 3000,
    isHobby: true,
    type: 'profession',
    sector: 'adventuring',
    description: 'skilled in one-on-one combat.',
    domSub: 'dom',
    dailyWage: 250,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'executioner': {
    sv: 2500,
    type: 'profession',
    sector: 'military',
    description: 'carries out a sentence of death on a legally condemned person.',
    domSub: 'dom',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'firefighter': {
    sv: 500,
    type: 'labourer',
    sector: 'government and law',
    description: 'extinguishes fires.',
    dailyWage: 80,
    socialClass: 'paupery',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'inspection officer': {
    sv: 4000,
    type: 'profession',
    sector: 'military',
    description: 'responsible for the inspection of military units to ensure they meet appropriate standards of training and efficiency.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'intelligence Officer': {
    sv: 10000,
    type: 'profession',
    sector: 'military',
    description: 'collects, compiles and organizes information about the enemy.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'lieutenant': {
    sv: 2000,
    type: 'profession',
    sector: 'military',
    description: 'an officer of middle rank in the armed forces.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'marksman': {
    sv: 800,
    type: 'profession',
    sector: 'military',
    description: 'in long-range weapons, such as the bow, crossbow, sling, etc. to inflict damage from afar.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'marshall': {
    sv: 5000,
    type: 'profession',
    sector: 'military',
    description: 'has the charge of the cavalry in the household of a monarch.',
    domSub: 'dom',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'medic': {
    sv: 600,
    type: 'profession',
    sector: 'military',
    description: 'a medical practitioner equipped for the battlefield.',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'mercenary': {
    sv: 800,
    type: 'profession',
    sector: 'adventuring',
    description: 'a soldier without allegiance who works for money, typically a member of a company or guild.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'quartermaster': {
    sv: 3500,
    type: 'profession',
    sector: 'military',
    description: 'responsible for providing quarters, rations, clothing, and other supplies.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'royal Guard': {
    sv: 5000,
    type: 'profession',
    sector: 'military',
    description: 'responsible for the protection of a royal person.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'runner': {
    sv: 750,
    type: 'labourer',
    sector: 'military',
    description: 'carries information between lines in wartime.',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'sapper': {
    sv: 5000,
    type: 'labourer',
    sector: 'military',
    description: 'a soldier responsible for tasks such as building and repairing roads and bridges, laying and clearing mines, etc.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'sergeant': {
    sv: 8000,
    type: 'profession',
    sector: 'military',
    description: 'an officer instructed with a protective duty, typically worth more than other officers.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'sergeant-at-arms': {
    sv: 5000,
    type: 'profession',
    sector: 'military',
    description: 'charged with keeping order during meetings and, if necessary, participates in battle.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'scout': {
    sv: 5000,
    type: 'profession',
    sector: 'military',
    description: "sent ahead of a main force so as to gather information about the enemy's position, strength, or movements.",
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'siege artillerist': {
    sv: 10000,
    type: 'profession',
    sector: 'military',
    description: 'works the artillery machines of an army.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'slave driver': {
    sv: 1500,
    type: 'profession',
    sector: 'agriculture',
    description: 'oversees and urges on slaves at work.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    exclusions (town, npc) { return !town.bans.includes('slavery') }
  },
  'special force soldier': {
    sv: 6000,
    type: 'profession',
    sector: 'military',
    description: 'carries out special operations.',
    domSub: 'dom',
    dailyWage: 300,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'spy': {
    sv: 4500,
    type: 'profession',
    sector: 'military',
    description: 'secretly collects and reports information on the activities, movements, and plans of an enemy or competitor.',
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'tactician': {
    sv: 7000,
    type: 'profession',
    sector: 'military',
    description: 'uses a carefully planned military strategy to achieve a specific end.',
    domSub: 'dom',
    dailyWage: 400,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'tollkeeper': {
    sv: 2000,
    type: 'profession',
    sector: 'government and law',
    description: 'collects tolls at a bridge, road etc. where a charge is made.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'warden': {
    sv: 5000,
    type: 'profession',
    sector: 'government and law',
    description: 'responsible for the supervision of a particular place or thing or for ensuring that regulations associated with it are obeyed.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'warmage': {
    sv: 10000,
    type: 'profession',
    sector: 'military',
    description: 'a soldier skilled in destructive battle magic.',
    domSub: 'dom',
    dailyWage: 700,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'abbot': {
    sv: 6000,
    type: 'profession',
    sector: 'religion',
    description: 'the head of an abbey of monks.',
    domSub: 'dom',
    dailyWage: 700,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(85, 100)
      }
    },
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'acolyte': {
    sv: 3000,
    type: 'profession',
    sector: 'religion',
    description: 'assists the celebrant in a religious service or procession.',
    dailyWage: 200,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'almoner': {
    sv: 1500,
    type: 'profession',
    sector: 'religion',
    description: 'distributes money and food to poor people.',
    domSub: 'dom',
    dailyWage: 70,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'archbishop': {
    sv: 10000,
    type: 'profession',
    sector: 'religion',
    description: 'responsible for an archdiocese, their surrounding district.',
    domSub: 'dom',
    dailyWage: 900,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(80, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'bishop': {
    sv: 5000,
    type: 'profession',
    sector: 'religion',
    description: 'a senior member of the clergy, usually in charge of a diocese and empowered to confer holy orders.',
    domSub: 'dom',
    dailyWage: 600,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(80, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'cantor': {
    sv: 2000,
    isHobby: true,
    type: 'profession',
    sector: 'religion',
    description: 'sings liturgical music and leads prayer in a synagogue.',
    domSub: 'sub',
    dailyWage: 150,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'cardinal': {
    sv: 6500,
    type: 'profession',
    sector: 'religion',
    description: 'a leading dignitary of a church, nominated by the highest official.',
    domSub: 'dom',
    dailyWage: 600,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'nobility',
    socialClassRoll () {
      return 75 + dice(8, 6)
    }
  },

  'confessor': {
    sv: 4000,
    isHobby: true,
    type: 'profession',
    sector: 'religion',
    description: 'hears confessions and gives absolution and spiritual counsel.',
    domSub: 'dom',
    dailyWage: 120,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'cultist': {
    sv: 2000,
    type: 'profession',
    sector: 'religion',
    description: 'a member of a cult who generally lives outside of conventional society and worships an unorthodox patron.',
    dailyWage: 100,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(90, 100)
      }
    },
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        noble: {
          relationship: 'cult leader',
          reciprocalRelationship: 'cult follower',
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('cult leader')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility',
            profession: 'cult leader'
          }
        }
      }
    }
  },
  'cult leader': {
    sv: 6000,
    type: 'profession',
    sector: 'religion',
    description: 'the organizational leader of a cult who is occasionally also the founder.',
    domSub: 'dom',
    dailyWage: 400,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(95, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships () {
      return {
        cult: {
          relationship: 'follower',
          reciprocalRelationship: 'cult leader',
          probability: 20,
          base: {
            profession: 'cultist'
          }
        }
      }
    }
  },
  'deacon': {
    sv: 800,
    type: 'profession',
    sector: 'religion',
    description: 'an ordained minister of an order ranking below that of priest.',
    domSub: 'dom',
    dailyWage: 200,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'diviner': {
    sv: 9000,
    type: 'profession',
    sector: 'religion',
    description: 'seeks ultimate divination in order to further understand or meet godly substance.',
    domSub: 'dom',
    dailyWage: 300,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(90, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'exorcist': {
    sv: 6000,
    type: 'profession',
    sector: 'religion',
    description: 'expels or attempts to expel evil spirits from a person or place.',
    domSub: 'dom',
    dailyWage: 300,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'high priest': {
    sv: 15000,
    type: 'profession',
    sector: 'religion',
    description: 'the chief priest of a religion.',
    domSub: 'dom',
    dailyWage: 500,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'inquisitor': {
    sv: 3000,
    type: 'profession',
    sector: 'religion',
    description: 'seeks to eliminate heresy and other things contrary to the doctrine or teachings of their faith.',
    domSub: 'dom',
    dailyWage: 400,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(90, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'missionary': {
    sv: 2000,
    isHobby: true,
    type: 'profession',
    sector: 'religion',
    description: 'goes on a religious mission to promote their faith in a foreign place.',
    domSub: 'sub',
    dailyWage: 50,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(80, 100)
      }
    },
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'pardoner': {
    sv: 700,
    type: 'profession',
    sector: 'religion',
    description: 'raises money for religious works by soliciting offerings and granting indulgences.',
    domSub: 'dom',
    dailyWage: 120,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'prophet': {
    sv: 8000,
    type: 'profession',
    sector: 'religion',
    description: 'regarded as an inspired teacher or proclaimer of the will of God.',
    domSub: 'dom',
    dailyWage: 10000,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = 100
      }
    },
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'sexton': {
    sv: 800,
    type: 'labourer',
    sector: 'religion',
    description: 'looks after a church and churchyard, sometimes acting as bell-ringer and formerly as a gravedigger.',
    domSub: 'dom',
    dailyWage: 80,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(70, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'templar': {
    sv: 500,
    type: 'profession',
    sector: 'military',
    description: 'fights in a religious military order.',
    domSub: 'dom',
    dailyWage: 200,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(90, 100)
      }
    },
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        coworker: {
          relationship: 'co-worker',
          probability: 20,
          base: {
            profession: npc.profession
          }
        }
      }
    }
  },
  'abecedarian': {
    sv: 1500,
    isHobby: true,
    type: 'profession',
    sector: 'science',
    description: 'teaches the illiterate.',
    dailyWage: 60,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'anthropologist': {
    sv: 5000,
    type: 'profession',
    sector: 'science',
    description: 'studies the customs, beliefs, and relationships of humanoids and intellectually and culturally advanced creatures.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'apprentice': {
    sv: 200,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'studies a trade under a skilled employer.',
    dailyWage: 70,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    },
    relationships () {
      return {
        coworker: {
          relationship: 'mentor',
          reciprocalRelationship: 'teacher',
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('mentor')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'commoner'
          }
        }
      }
    }
  },
  'archaeologist': {
    sv: 2000,
    type: 'profession',
    sector: 'science',
    description: 'studies humanoid history and prehistory through the excavation of sites and the analysis of artifacts and other physical remains.',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'assayer': {
    sv: 2000,
    type: 'profession',
    sector: 'science',
    description: 'determiner of the proportions of metal in ore and the amount of copper, silver, gold, or platinum in coins.',
    dailyWage: 230,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },

  'astronomer': {
    sv: 5000,
    type: 'profession',
    sector: 'science',
    description: 'makes observations of celestial and scientific phenomena within the material plane.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'bloodletter': {
    sv: 3000,
    type: 'profession',
    sector: 'science',
    description: "surgically removes some of a patient's blood for therapeutic purposes.",
    domSub: 'dom',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'botanist': {
    sv: 2000,
    isHobby: true,
    type: 'profession',
    sector: 'science',
    description: 'an expert in or student of the scientific study of plants.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'chemist': {
    sv: 3500,
    isHobby: true,
    type: 'profession',
    sector: 'science',
    description: 'engaged in chemical research or experiments.',
    domSub: 'dom',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'dean': {
    sv: 8000,
    type: 'profession',
    sector: 'science',
    description: 'the head of a college or university.',
    dailyWage: 500,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'drakologist': {
    sv: 10000,
    type: 'profession',
    sector: 'science',
    description: 'studies or is an expert in the branch of zoology concerned with dragons.',
    domSub: 'dom',
    dailyWage: 190,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'engineer': {
    sv: 5000,
    type: 'profession',
    sector: 'science',
    description: 'designer of a machine or structure.',
    domSub: 'dom',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'entomologist': {
    sv: 6000,
    type: 'profession',
    sector: 'science',
    description: 'studies or is an expert in the branch of zoology concerned with insects.',
    dailyWage: 175,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'horologist': {
    sv: 8000,
    type: 'profession',
    sector: 'science',
    description: 'a scholar of time and entropy.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'mathematician': {
    sv: 5000,
    isHobby: true,
    type: 'profession',
    sector: 'science',
    description:
      'a scholar of the abstract science of number, quantity, and space.',
    dailyWage: 230,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'optometrist': {
    sv: 3000,
    type: 'profession',
    sector: 'science',
    description: 'examines the eyes for visual defects and prescribes eyeglasses.',
    dailyWage: 210,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'scribe': {
    sv: 2000,
    type: 'profession',
    sector: 'business',
    description: 'copies out manuscripts.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'theologian': {
    sv: 6000,
    type: 'profession',
    sector: 'science',
    description: 'engages in the study of the nature of God and religious belief.',
    dailyWage: 130,
    socialClass: 'commoner',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'tutor': {
    sv: 600,
    type: 'profession',
    sector: 'science',
    description: 'charged with the instruction and guidance of another.',
    domSub: 'sub',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships () {
      return {
        noble: {
          relationship: 'employer',
          reciprocalRelationship: 'tutor',
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('employer')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'zoologist': {
    sv: 3500,
    type: 'profession',
    sector: 'science',
    description: 'an expert in or a student of the behavior, physiology, classification, and distribution of animals.',
    dailyWage: 140,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'boatman': {
    sv: 500,
    type: 'profession',
    sector: 'naval',
    description: 'mans a small seacraft.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'bosun': {
    sv: 1000,
    type: 'profession',
    sector: 'naval',
    description: 'in charge of organizing the equipment and crew of a ship.',
    domSub: 'dom',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'wagoner': {
    sv: 400,
    type: 'profession',
    sector: 'transportation',
    description: 'drives a horse-drawn wagon.',
    dailyWage: 90,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'cabin boy': {
    sv: 9000,
    type: 'profession',
    sector: 'naval',
    description: 'waits on the orders of a ships officers and passengers.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'charioteer': {
    sv: 3000,
    type: 'profession',
    sector: 'military',
    description: 'drives a chariot.',
    dailyWage: 80,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'carter': {
    sv: 500,
    type: 'business',
    sector: 'transportation',
    description: 'transports goods by cart.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'ferryman': {
    sv: 2500,
    type: 'profession',
    sector: 'naval',
    description: 'operates a ferry.',
    dailyWage: 80,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'first mate': {
    sv: 1000,
    type: 'profession',
    sector: 'naval',
    description: 'the deck officer second in command to the master of a ship.',
    domSub: 'dom',
    dailyWage: 230,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'helmsman': {
    sv: 2000,
    type: 'profession',
    sector: 'naval',
    description: 'steers a ship or boat.',
    domSub: 'dom',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'navigator': {
    sv: 1500,
    type: 'profession',
    sector: 'naval',
    description: 'directs the route or course of a ship or other form of transportation, especially by using instruments and maps.',
    domSub: 'dom',
    dailyWage: 180,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'purser': {
    sv: 2500,
    type: 'profession',
    sector: 'naval',
    description: 'keeps the accounts of a ship, especially as the head steward on a passenger vessel.',
    domSub: 'dom',
    dailyWage: 210,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'shipwright': {
    sv: 3500,
    type: 'profession',
    sector: 'naval',
    description: 'a carpenter skilled in ship construction and repair.',
    domSub: 'dom',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'adventurer': {
    sv: 2000,
    type: 'profession',
    sector: 'adventuring',
    description: 'wanders the world in search of knowledge, treasure, fame, glory or a multitude of additional wants and desires.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'beggar': {
    sv: 2500,
    type: 'profession',
    sector: 'outcast',
    description: 'lives by asking for money or food.',
    dailyWage: 10,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'monster hunter': {
    sv: 4500,
    isHobby: true,
    type: 'profession',
    sector: 'adventuring',
    description: 'takes on jobs to hunt down and kill or capture dangerous creatures.',
    dailyWage: 230,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'bounty hunter': {
    sv: 3500,
    isHobby: true,
    type: 'profession',
    sector: 'adventuring',
    description: 'pursues a criminal or fugitive for whom a reward is offered.',
    domSub: 'dom',
    dailyWage: 180,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'crossing sweeper': {
    sv: 6500,
    type: 'profession',
    sector: 'outcast',
    description: 'sweeps a path ahead of people crossing dirty urban streets in exchange for a gratuity.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'deserter': {
    sv: 3500,
    type: 'profession',
    sector: 'outcast',
    description: 'a member of the armed forces who has deserted.',
    domSub: 'dom',
    dailyWage: 15,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        'former sergeant': {
          relationship: 'former sergeant',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('former sergeant')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility',
            profession: 'sergeant'
          }
        }
      }
    }
  },
  'disgraced noble': {
    sv: 5000,
    type: 'profession',
    sector: 'outcast',
    description: 'a person of high birth who has since loss their respect, honor, or esteem in some or all noble circles.',
    dailyWage: 100,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    relationships (town, npc) {
      return {
        liege: {
          relationship: 'liege',
          reciprocalRelationship: npc.profession,
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('liege')
              }
            }
          },
          probability: 20,
          base: {
            socialClass: 'nobility'
          }
        }
      }
    }
  },
  'drunkard': {
    sv: 550,
    type: 'profession',
    sector: 'outcast',
    description: 'a person who is habitually drunk and considers themselves a professional in the task.',
    dailyWage: 25,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'dungeon delver': {
    sv: 5500,
    type: 'profession',
    sector: 'adventuring',
    description: 'navigates underground labyrinths in search of any treasure they may find.',
    dailyWage: 150,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'elder': {
    sv: 600,
    type: 'profession',
    sector: 'hospitality',
    description: 'a person of a greater age, especially one with a respected position in society.',
    dailyWage: 200,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    },
    exclusions (town, npc) {
      if (npc.ageYears < 80) return false
    }
  },
  'exile': {
    sv: 750,
    type: 'profession',
    sector: 'outcast',
    description: 'lives away from their native country, either from choice or compulsion.',
    dailyWage: 30,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'explorer': {
    sv: 3500,
    type: 'profession',
    sector: 'adventuring',
    description: 'explores unfamiliar areas in search of geographical or scientific information.',
    domSub: 'dom',
    dailyWage: 120,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'ex-criminal': {
    sv: 1200,
    type: 'profession',
    sector: 'outcast',
    description: 'a person who has been convicted of a crime and has since served their sentence, or who has preemptively given up their life of crime.',
    dailyWage: 60,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'folk hero': {
    sv: 4000,
    isBackground: true,
    type: 'profession',
    sector: 'adventuring',
    description: 'a celebrity who is greatly admired by many people of a particular kind or in a particular place.',
    dailyWage: 80,
    socialClass: 'commoner',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'gambler': {
    sv: 800,
    isHobby: true,
    type: 'profession',
    sector: 'crime',
    description: 'bets money on sports, card games, or games of chance in the hope of a profit.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'grave robber': {
    sv: 5000,
    type: 'profession',
    sector: 'crime',
    description: 'steals valuables from graves and tombs.',
    dailyWage: 130,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'heretic': {
    sv: 2500,
    type: 'profession',
    sector: 'outcast',
    description: 'differs in opinion from established religious dogma.',
    dailyWage: 80,
    function (town, npc) {
      if (npc.roll.religiosity < 70 || !npc.roll.religiosity) {
        npc.roll.religiosity = random(0, 5)
      }
    },
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'housewife': {
    sv: 150,
    type: 'profession',
    sector: 'hospitality',
    description: 'cares for her family by managing household affairs and completing housework.',
    exclusions (town, npc) {
      return !!(npc.gender === 'woman' && npc.partnerID)
    },
    domSub: 'sub',
    dailyWage: 40,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 50 + dice(8, 6)
    }
  },
  'prisoner': {
    sv: 350,
    type: 'profession',
    sector: 'crime',
    description: 'held in confinement as a punishment for crimes they have been convicted of.',
    dailyWage: 2,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(2, 6)
    }
  },
  'rag-and-Bone Man': {
    sv: 750,
    type: 'labourer',
    sector: 'business',
    description: 'collects unwanted household items and sells them to merchants.',
    dailyWage: 25,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'political dissident': {
    sv: 4500,
    isHobby: true,
    type: 'labourer',
    sector: 'government and law',
    description: 'rises in opposition or armed resistance against an established government or ruler.',
    dailyWage: 100,
    socialClass: 'peasantry',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'refugee': {
    sv: 5000,
    type: 'profession',
    sector: 'outcast',
    description: 'left their home in order to escape war, persecution, or natural disaster.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () {
      return 20 + dice(8, 6)
    }
  },
  'runaway Slave': {
    sv: 3000,
    type: 'labourer',
    sector: 'outcast',
    description: 'a slave who has left their master and traveled without authorization.',
    dailyWage: 100,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    },
    relationships () {
      return {
        exmaster: {
          relationship: 'ex-master',
          reciprocalRelationship: 'escaped slave',
          exclusions (town, npc) {
            if (town.npcRelations) {
              if (town.npcRelations[npc.key]) {
                return !town.npcRelations[npc.key].map((r: NpcRelationship): string => { return r.relation }).includes('ex-master')
              }
            }
          },
          probability: 20,
          base: {
            profession: 'slaver'
          }
        }
      }
    },
    exclusions (town, npc) { return !town.bans.includes('slavery') }
  },
  'squatter': {
    sv: 800,
    type: 'profession',
    sector: 'crime',
    description: 'unlawfully occupies an uninhabited building or unused land.',
    dailyWage: 15,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(4, 6)
    }
  },
  'vagabond': {
    sv: 1000,
    type: 'profession',
    sector: 'outcast',
    description: 'wanders from place to place without a permanent home or job.',
    dailyWage: 15,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    }
  },
  'urchin': {
    sv: 500,
    isBackground: true,
    type: 'profession',
    sector: 'outcast',
    description: 'a child who lives or spends most of their time in the streets, occasionally working as a thief or pickpocket.',
    dailyWage: 5,
    socialClass: 'paupery',
    socialClassRoll () {
      return 5 + dice(8, 6)
    },
    exclusions (town, npc) {
      return npc.ageStage === 'child'
    }
  }
}
