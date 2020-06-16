import { random } from '../src/random'
import { createTippyFull } from '../src/tippy'

interface DetailedBookTitle {
  title: string
  category: string
  contents: string
}

type BookTitle = DetailedBookTitle | string

export const miscBooks = {
  create: () => {
    const book = random(random<BookTitle[]>([
      miscBooks.detailedTitles,
      miscBooks.titles,
      miscBooks.titles,
      miscBooks.puns
    ]))

    const condition = miscBooks.getCondition()
    const cover = miscBooks.getCover()

    const createContent = () => {
      if (typeof book === 'string') {
        const readout = `'${book}' is ${condition} The cover is ${cover}`
        return createTippyFull(book, readout)
      }

      const readout = `'${book.title}' is ${condition} The cover is ${cover}${book.contents}`
      return createTippyFull(book.title, readout)
    }

    return `a book titled "${createContent()}"`
  },
  getCondition: () => random([
    // the book is...
    'worn and tattered.',
    'in poor condition. An ink stain obscures a fair amount of the pages.',
    'accidentally damaged. Various water damage around the edges but readable.',
    'vandalized. It appears that a good dozen pages have been ripped out.',
    `deliberately damaged. Towards the middle there is a section hollowed out. In this hiding place, you find a ${random(['locket', 'knife', 'small hammer', 'small scroll', 'vial of mysterious liquid', 'ring'])}`,
    'badly damaged. A lot of the ink has run through water damage and it is nearly illegible.',
    'ancient. The pages crumble as they turn.',
    'strange. Some of the pages are blank?',
    'in good condition, but used. There are handwritten notes in the margins of the pages.',
    'pristine. You can smell the ink drying.',
    "really wet for no discernable reason. It doesn't seem to be damaged at all though.",
    'printed upside-down.',
    'beautifully illuminated in gold leaf and vibrant paints.',
    'glowing with a soft radiance.',
    'warm to the touch. The text glows like the embers of a fire.',
    'tattered and torn. Many pages are ripped and unreadable.',
    'poorly made, and the handwriting is illegible in most places.',
    'completely clean, as if it was magically preserved.',
    'massive. Easily two feet wide and three feet tall, it weighs nearly 50 pounds'
  ]),
  getCover: () => random([
    'missing. The pages are bound with string woven through holes near the spine.',
    'stained leather. Some sign of wear.',
    'wooden. The title is carved into the spine.',
    'paperback.',
    'animal hide. The fur is still on.',
    'stone. Iron rings hold it together.',
    'cast Iron. Hinges keep it bound.',
    'leather with gemstones embedded in it.',
    'leather with the title branded on it.',
    'leather with gilding on the spine.',
    "torn off. It's kept together by a leather belt.",
    'tree bark. Dried vine bind it.',
    'a thin metal foil; surprisingly strong and light.',
    'dark metal embossed with swirling runes.',
    'patchwork leather of multiple different creatures.',
    'dragonscale with gold decorations.',
    'wood and iron, with a large padlock holding the covers together.'
  ]),
  detailedTitles: [
    {
      title: "Let's play dead",
      category: 'non-fiction',
      contents: 'This 100 or so page volume consists of a childlike representation with several brightly coloured pictures of various recipes to prepare the dead for undeath.'
    },
    {
      title: 'The Taste of Victory',
      category: 'non-fiction',
      contents: 'The book details a fencing techniques, with focus on various dirty tricks you can use to win a duel and get away with it.'
    },
    {
      title: 'Shock and Awe',
      category: 'non-fiction',
      contents: 'The book contains 100 basic campfire recipes, which are described in great detail and accompanied by multitude of illustrations. Anybody can use this book to craft one of the 0 meals, all of which make use of venision or other meat.'
    },
    {
      title: "Smuggler's Teachings",
      category: 'non-fiction',
      contents: 'The collected teachings of a dozen master blacksmiths, armorers, and artificers, walks the reader step by step through the art of metalwork, from the most basic of tools to the creation of magic weapons and armor. The text is accompanied by dozens of intricatly detailed plates showing tools and techniques.'
    },
    {
      title: 'Liber ex Vasis',
      category: 'non-fiction',
      contents: "A rather thin volume about the comestible plant life found in the Underdark and the different ways to prepare them. The author begins by explaining his firsthand experience tasting and testing all the recipes and flora available to the underdark. After detailing a few recipes, the writings become more rambly and saccaded. A certain plant begins to come up in several of the recipes towards the end of the book. The final page is just a repetition of that same plant's name over and over again until the words just trail off the page."
    },
    {
      title: "A Herbalist's Guide to Surviving",
      category: 'non-fiction',
      contents: 'This diary details the accounts a famous halfling smuggler, who was best known for smuggling his home made rum into kingdoms throughout the world during the great alcohol depression. With proper study the reader can reproduce the famous Sweetfoot Rum recipe from the different mentions, hints and references scattered across the pages of this book.'
    },
    // HISTORY
    {
      title: 'For the good of the nation',
      category: 'history',
      contents: "Autobiography of a wandering merchant, who often found himself in war torn countries and always had something to sell, even if he hadn't."
    },
    {
      title: "The Dragon's Downfall",
      category: 'history',
      contents: 'This argumentative text, written by one Colonel Tavon Coyle, stresses the importance of overwhelming force when responding to foreign attacks. (“When the world is watching, one must prove that an attack upon oneself or one’s nation is folly.”) It is typically used to defend the use of downright vile acts during times of war by invoking a sense of patriotism and community. It has been criticised for dehumanising the enemy, and for being far too eager when it comes to giving carte blache authority to military commanders.'
    },
    {
      title: 'The Elemental Chaos and the resulting Planes',
      category: 'history',
      contents: "This tome, bound in dragon scales, will only show its true contents to to those it deems worthy. To the unworthy, it consists of a rather somber description of a period of time in which the dragon's ruled the Forgotten Realms and their inevitable downfall where the dragons were taken down by an army of the combined forces of the world's humanoid races. However, to a worthy lector, the script changes entirely and, in draconic, a tale is woven of the truw downfall. The humanoid races were powerless to the dragons, but the chromatics grew vain and the metallics could no longer tolerate their greed. Thus, the metallics aided the humanoids to stage an uprising and the chromatics were banished to the Inner Planes. But, the humanoids grew greedy and tricked the metallics banishing them with their kindred. The tale ends on an ominous note of plans for the dragons' imminent return."
    },
    {
      title: 'The True Rulers of Our Countries',
      category: 'history',
      contents: 'A controversial document in and of its own right, this book talks about the creation of the Prime Material and Inner planes. A thin volume which only containspieces of paper, however these papers are magically enchanted to pass through the thousands of pages of content which this book holds. The author of the document seems almost too knowing on the subject, almost as if he were there...'
    },
    {
      title: 'The Secret Heroes and Abominations',
      category: 'history',
      contents: "The original manuscript of the much-reproduced text, its well-reputed author's final work. The chronicle itself passingly mentions a rumored artifact, the legendary Laddle of the Chef (commonly believed to be myth) as though its existence is fact. Careful reading might uncover second text that lays below the current one, scraped out, but not gone completely."
    },
    {
      title: 'Tales of times past',
      category: 'history',
      contents: 'This book contains recipes for various desserts and esseys on their historical perspective and impacts.'
    },
    {
      title: 'The Fall of the Empire',
      category: 'history',
      contents: "On the surface, this appears to merely be a recounting of the opulent Haloan Empire's fall from power centuries ago. Some claim, however, that careful analysis reveals it as a scathing commentary on the notoriously corrupt court of King Judicus, written in code to keep the author from harm."
    },
    {
      title: 'Gold in Ashes',
      category: 'history',
      contents: "A historical analysis of the last attacks on the primaterial plane by both the gith and the modrons. The focus of it is a comparison of their vastly different tactics and what little the defenders learned of their invader's cultures."
    },
    // ARCANE STUDIES
    {
      title: 'The Forgotten Art',
      category: 'arcane studies',
      contents: 'This massive tome is a fine source of information about all things undead, and was written by one Lord Zeiram, who later ascended to lichhood. It has long been rumored that it is a good starting point for a would-be lich, and it has thus been banned in many a juristiction, but truth be told it is of little use when it comes to becoming a lich, unless one counts the potential benefit of more effective minions.'
    },
    {
      title: 'From Beyond the Veil',
      category: 'arcane studies',
      contents: 'This introductory tome is required reading at many a magical academy, but is of relatively little value in regards to the truly esoteric. Introduces the various elements and elementals, and discusses the purpose/traits of the various elemental planes and the elemental chaos.'
    },
    {
      title: 'Edicts of Incantations',
      category: 'arcane studies',
      contents: "This book is a standalone work from eccentric elven author Marybeth Hight, a scholar of the Feywild and its denizens. It was originally intended as a primer for would-be plane shifters and astral travellers, but the manuscript was partially destroyed in a fire and now the contents are damaged. The current owner has gone mildly insane trying to piece the manuscript back together, and has scrawled almost two year's worth of ramblings and half-thoughts in the margins of the text. While the work no longer primes the reader for the act of travelling to the Feywild, the combination of reading materials contained within the folio binding now prep the reader's mind for the bewildering and maddening magics encountered there (giving advantage against the enchantment and illusion effects created by denizens of the Feywild)"
    },
    {
      title: 'Arcane Secrets',
      category: 'arcane studies',
      contents: 'A generous manuscript contains description of inner workings of various contraptions and automatons and instruction manual to programing automatons, allowing any intermediate transmuter to create their very own contraptions!'
    },
    {
      title: 'Sinister Discoveries',
      category: 'arcane studies',
      contents: 'Reading this little book takes about an hour. It contains complete instructions how to cast two cantrips from the wizard list of spells, allowing the reader to cast them for the remainder of the day.'
    },
    {
      title: 'Theatrical Uses of Illusion',
      category: 'arcane studies',
      contents: 'A dry but informative text detailing the blending of Positive Energy and Negative Energy (which he refers to as “the Holy Antipodes”) to better access healing and harming magics. It’s an insightful work for healers and necromancers alike, but those who read carefully and follow Sahl’s train of logic may unlock a new path of power (read gain access to a prestige class).'
    },
    {
      title: 'Antipodean Harmonies',
      category: 'arcane studies',
      contents: 'Written by the mage playwright Rodger Goldhammer, this semi autobiography shows how the famed thespian worked intricate illusion spells into his plays. Chapters included "Combining natural and magical light", "Canned vs conjured thunder: a discussion", and "Loss of concentration, or why it is vital to wear undergarments beneath an illusionary costume".'
    },
    {
      title: "A children's guide to necromancy",
      category: 'arcane studies',
      contents: 'This book contains procedures regarding conjuring and exorcising acient horrors of the deep seas.'
    },
    {
      title: "Skritzlbon's Contraptions",
      category: 'arcane studies',
      contents: 'Rather well known and a piece of every wizard’s library, this book contains instructions on divination basics, and tips how to not anger the customers with unfortunate events to come.'
    },
    {
      title: 'Liminal Zones and You',
      category: 'arcane studies',
      contents: "When opened, this book creates an spectral dog that starts reproducing the book contents with the skill of experienced rhetorician. Given it's a dog, it's speech consists of different barks, whines and howls. The actual contets are studies regarding blink dogs. Why this book was named the way it was is a mystery not even the author knows answer to."
    },
    {
      title: 'Elements and Elementals',
      category: 'arcane studies',
      contents: 'A collection of stories and essays focusing on a first-hand account of the journey from life to death told to the author by a ghost, a resurrected individual or a soul called forth from the other realms. Critics suggest she sensationalizes the tales a bit to make death sound more frightening than it is, to which she challenges them to explore death on their own and then come back to talk about it.'
    },
    {
      title: 'From Ghouls to Ghosts',
      category: 'arcane studies',
      contents: 'The book is chaotic and hard to understand, written in an unkown dialect which makes it very slow to read. Contained within are the studies of a powerful necromancer on how interplanar travel might be used to achieve functional immortality.'
    },
    // ANATOMY
    {
      title: 'Cultures Unknown',
      category: 'anatomy',
      contents: "This truly massive tome features everything from text heavy pages without a hint of illustration, to brilliant anatomical illustrations that cover multiple pages. It is the magnum opus of a brilliant wizard known for her astute observations and nigh unhealthy obsession with dragons, who sadly perished during a wyvern attack while searching for a dragon graveyard in an isolated mountain chain; had she not perished she would likely have continued revising her work, as she had done for many decades beforehand. Some rarer versions have even been known to feature moving pictures, especially those of dragons in flight and their breath. While it contains a staggering amount of information, it is also very academically challenging and quite rare; as a result it is rarely found outside of restricted library sections, wizards' libraries, and the hoards of academically inclined dragons, especially blue and silver ones."
    },
    {
      title: 'Short essey on the subject of marine life',
      category: 'anatomy',
      contents: 'An exhaustive exploration of the bodies of goblins, hobgoblins, and bugbears. It appears highly reputable, but no other surgeon has ever been willing to replicate the results presented here.'
    },
    {
      title: 'What those guts told me.',
      category: 'anatomy',
      contents: 'Not only does this book go in-depth on the history of these creatures and their faraway worlds, it also tells that they are really into gardening and the various flowers, vegetables and fruits they have cultivated.'
    },
    {
      title: 'Codex Draconis',
      category: 'anatomy',
      contents: 'A detailed biological survey of aquatic species in a lake near the authors residence.'
    },
    // BOTANY
    {
      title: 'Our Friend the Cactus',
      category: 'botany',
      contents: 'Written by a dwarf wizard by the name of Daven Wraithmail, this treatise explains the growth and upkeep of a Gulthias Tree as well as several manners to corrupt seeds of other trees in order to create a suitable vessel. An entire chapter is dedicated to the domestication of the resulting blights which sprout from said tree and their training to better protect your new sapling.'
    },
    {
      title: 'The Inner Workings of a Gulthias Tree',
      category: 'botany',
      contents: 'A dense academic treaty on the biology of cacti. If one has the patience it is very interesting in its own way. The book also details a large number of edible cacti, as well as those that can be used as water sources in the harsh deserts.'
    },
    // COLLECTED TALES
    {
      title: "The Night's Embrace",
      category: 'botany',
      contents: 'A book about the primordial titans, mostly legend and myth, collected by an eccentric young wizard who traveled the planes looking for information about them. This book is highly frustrating to scholars because the last entry is the beginning of a summary of an actual historical document, which has never been found. The book is unfinished and the wizard has not been seen for hundreds of years.'
    },
    {
      title: 'Collected Work of Reginald of Urholm',
      category: 'botany',
      contents: "Collection of seven orc legends, written in simple language that is easy to read. It can be used to each someone to read Orkish. The stories include: a tale of Gor'tak the Plunderer, who conquered an elven city and was brought down when he stole a cursed axe; the tale of Gor'tak's son Mur'nal, who tried to break the axe and two and ended up with two cursed axes; two stories about the half-orc twins Robald and Eron and their contests of strength (like when Eron tried to lift a mountain, but his feet didn't find any grip and he sunk away in the mud); and finally, three stories of the voyages of Zyarr the drunken priest and the times he ended up in a roc's nest, a frozen cave stocked with booze (all frozen solid), and Asmodeus' bathtub."
    },
    {
      title: "Egdemort's Travels",
      category: 'botany',
      contents: 'A very fun collection of fairytales where half the time the protagonist dies horribly.'
    },
    {
      title: 'The Best Tales of Nameless Cults',
      category: 'botany',
      contents: "This set of tales centers on a bard of yore who had a collection of magical tuning forks. These he assembled in the form of the instrument he dubbed the Octarion, which, when played by his expert thumping produced a temporary Portal to other worlds. The book details his wanderings and adventures in these other worlds and sadly ends with his fatal wounding at an unfortunate tea-party turned duel in the Feylands. The epilogue reveals that the tales are penned by his companion, the priest Lucedol of Tuftsburg who met the bard on his first adventure (in this book) in fact freeing him from the clutches of the dreaded Lugomorphs of Artuick-Fell. The two became inseparable friends who ever after had the other's back... until that day."
    },
    {
      title: 'Stories from the Orkholds',
      category: 'botany',
      contents: "A collection of poems written by an orcish adventurer and skald. The majority of the book is an epic saga, recounting the various deeds of the adventuring party the poet was a part of, with later short poems about specific aspects of adventurers' lifestyle. The later poems touch on a wide array of topics, such as the joys of a shared victory, longing for hearth and home, and the simple pleasure of splitting a foe in half lengthwise."
    },
    {
      title: "Children's Tales of Death and Hugs",
      category: 'botany',
      contents: "A series of romantic novels featuring romance between vampires and humans which tries to cast vampires as villified people who just want to live in peace, while simultaneously overlooking their intense thirst for blood and blithe disregard for the lives of others. Parts of the books have been described as downright obvious attempts at convincing the reader that formally inviting strangers into ones' home is common courtes and that sunlight is highly overrated. It conveniently fails to mention the vampiric weakness to running water, while simultaniously trying to spread awareness about potamophobia (the fear of rivers or running water)."
    },
    // TALES AND LEGENDS
    {
      title: "A Sheep's Tail",
      category: 'tales and legends',
      contents: 'A propagandic tale featuring two main characters: A delusional young man who joins an order of paladins and sets about “restoring good and order to the world” and a young necromancer who only wants to help people. The story ends with the paladin murdering the necromancer, as the necromancer had spent his magical powers healing some innocent villagers who were hurt in a goblin raid. It has been theorised that the story might have been written and distrubuted by an ancient vampire wizard as part of his smear campaign against so called "good" organised religions and militant orders, but this has never been conclusively proven.'
    },
    {
      title: 'Tale of Cons and Scams',
      category: 'tales and legends',
      contents: "The first installment of Critter and his friends' adventures! Watch as they journey into the Underdark searching for some bountiful booty to bring back home. Critter and his friends soon discover that the denizens of the Underdark don't take kindly to guests. Read carefully as duergars, and drow pin Critter's friends' still live bodies to crosses while torturing their mutilated bodies for being the filthy thieves that they are! A journey of friendship, kindness, dark and unending wallows of despair, and bravery that's fun for the whole family!"
    },
    {
      title: 'A Night to Remember',
      category: 'tales and legends',
      contents: "Follow Critter and his new friends in their wacky adventures across the Forgotten Realms! They've been up to some crazy hijinxes together ever since they first met. In this latest installment, watch as Critter and his friends are pursued by the demons of the Nine Hells for betraying a pact with Lolth. Critter gets to watch in stunned horror as each of his friends is burnt to a crisp by a demonic army! Read carefully as they discover the value of friendship, kindness, fire, and bravery!"
    },
    {
      title: "The Stonemason's Son",
      category: 'tales and legends',
      contents: 'A young kobold falls for her laconic draconic master in this classic tale of love, taboo, discovery, and betrayal.'
    },
    {
      title: 'The Unaligned Monk',
      category: 'tales and legends',
      contents: "A story in the form of a collection of letters from a dwarf stonemason's son that left the trade to be an adventurer."
    },
    {
      title: 'The Story of Graye',
      category: 'tales and legends',
      contents: 'The story of a slave forced to be a pit-fighter who turned to meditation as an escape from his violent life. This book is not well written, and is probably an earlier work of a novice author that never reached wide spread fame.'
    },
    {
      title: 'The Creepy Crawly Cremation Story',
      category: 'tales and legends',
      contents: 'A short story that describes a case where the shadow realm spills into the material plane and haunts the small town of Graye.'
    },
    {
      title: 'The Cryptic Crystalline Crucifixion Story',
      category: 'tales and legends',
      contents: "A book filled with full-page illustrations with small captions (in an esoteric language) that tell the story of a man who seeks to fight criminals by dressing up and scaring them. If the reader doesn't know the language, it appears to be about a vampire."
    },
    {
      title: 'Most Holy of Knights',
      category: 'tales and legends',
      contents: "Written like a child's book with colorful pictures. Details a murderous sheep that is burned after slaying a whole town. Then reborn as an evil sheep spirit."
    },
    {
      title: 'Travellers Musings',
      category: 'tales and legends',
      contents: 'Within is what seems to be a collection of short stories. To anyone that can read the thieves cant, the book is a guide on how to gain membership to the thieves guilds.'
    },
    {
      title: 'Strange Creatures and How to Cook Them',
      category: 'anatomy',
      contents: 'This oddly warm book contains page upon page of recipes and descriptions of powerful and strange magical beasts. Both the monster descriptions and the recipes seem to be of dubious quality. Also is it dripping saliva? ARE THOSE TEETH!?'
    },
    {
      title: 'Live Your Best Life',
      category: 'history',
      contents: 'This recruitment pamphlet is scribbled in reddish ink on folded reeds, and details the benefits of living in a nearby druidic society. There is an address for a recruitment officer, along with instructions on how to join the druids.'
    }
  ],
  titles: [
    'A Study of Elementals: Volume 3: Pain and Tolerance of the Elements',
    'Typhory’s Guide To Abjurations: Rapid Adaptions To Opposing Forces',
    'Notes of Death and Undeath: Vykathar’s Endeavours in the Unholy',
    'The Credits of Lightning and Ice: Shifting Plans and their Collisions',
    'The Basics of Regeneration: Healing in Many instances',
    'Blood and the Foul Arts: Dark Practices of Necromancy',
    'Ethereal and Material: infusing Arcane and Steel',
    'The Warping of Broken Minds: Eteterveil’s Enchanting of the Mad',
    'The Walls That Won’t Change: Transmutation and the Laws of Exchange',
    'Magic in War: Scorched Earth and Seared Minds',
    'Gynthorn’s Research Notes of Arcane Fauna',
    'The Call of the Void: the Draw of the Yawning Nothing',
    'Tides of Chaos: Studies of the Broken Flows',
    'Null Zones: Hythen & Surich’s Research of Anti Magic Zone',
    'Compulsion: the Forcing of a Mind',
    'Seeing Beyond the Sight: Illusionary Hallmarks',
    'A Brief History of the Magically Corrupted Races',
    'Tyven’s Folly of Illusion and Enchantment influence - Vol. 3',
    'To Create and Channel, Evocation and Conjuration: a Study of Flows',
    'Sight Beyond the Realm: Divination Visions of Maliksin',
    'The Dangers of the Shadow Weave: Arch Mage Quilore’s Secret War',
    'The Decay of a Soul: a Study of Resurrection - Vol. 5',
    'A Study of Foci: To Shape Reality Upon the Physical',
    'A Fragile Balance: Nature and It’s Secrets',
    'The Findings of the Wyrm Cult of Asrigah',
    'Eterhen’s Study of Wyvern: the Lesser Dragons',
    'Ethereal Enchantments of Magical Materials: Gyhaki’s Work',
    'Blades of Light in the Howling Night: the Angel’s Decent',
    'The Hungry Abyss: What Lays Beneath Our Fears',
    'Blue Fire’s Wrath: Spell Plague Anthology',
    'Power in the Blood: Elven and Other Fey Descendants',
    'The Mirroring Planes: Fequries Enquiries To the Planes and their Shared Features',
    'A Walk Within the Dead Light of Cold Suns: Tales From the Old Ones',
    'The Study of Gems: Kurin’s Geology - Vol. 7',
    'The Parables of Circles: infinite Lines and Endless Angles. First Prints',
    'Salt and Chalk: the Mundane Script of the Arcane',
    'Chasing Echos: insanity From the Mundane',
    'The Scaled King: Regime of Shadow - Vol. 6',
    'The Winds of Change: From Empire To Dust. Gnome Chronicles 6',
    'Chaotic Minds and Iron Wills: Corruption in Golems',
    'Uses of the Soul: Vol 5: Soul Lightning',
    'Chi: the Energies of Balance',
    'Wyfen’s Advance: a One Man Conquest of the Silver Spires',
    'Tar’tari Tendary: the City of Cosmic Shadows',
    'Secrets and Riddles of the Weave: Vol 14',
    'Shadow and Dust: What Rots and Remains',
    'Fey Unbound: Study of Entrapped Creatures and their Release',
    'Evil’s Horde: Hugar and Juik’s Notes On Demons',
    'Asamokology: the Nature of What Is Fake',
    'Breaking the Cycle: the Written War Against the Gods - Vol. 146',
    'Losing Yourself To Be One: Mind Flayer and the Hive Mind',
    'Stone Eyes: the Myth of Aqytorky',
    'The Fire Within the Stone: A Divination Primer for Beginners',
    'You Can Call Me Gary: The Autobiography of Lord Gygax',
    'Two Runes and a Pentagram: Summoning Demons for Beginners',
    "The King's Consort - Vol. 8",
    'Back to Work Peasants! The Writings of The Bad King Quellix'
  ],
  puns: [
    'How to make Illusions and Charm People',
    'The Illithid by Homer',
    'Memoirs of a Genasi',
    "The 7 Habits of Highly Effective Peasants (The sequel to 'The Hunger Games: a True Story')",
    'Diary of a Wimpy Kobold',
    "A Handmaid's Tail: a collection of short stories by notable Tieflings",
    'Ready Mindflayer One',
    'Dragon Turtles All the Way Down',
    'The Lion, the Witch, and the War-forged',
    'Gone with the Healing Wind',
    'To Kill a Manticore',
    'Planar-shifting for People in a Hurry',
    "One Flew Over the Kenku's Nest",
    'The Brothers Dragonbornov',
    'For Whom the Behir Tolls',
    'The Power of Mimics: Why Certain Encounters Have Extraordinary Impact',
    'The Wizard of Ooze',
    'Fight. Club. - A Comprehensive Guide for Barbarians',
    'The Secret Life of Bards',
    'The Giving Treant',
    "Alice's Adventures in the Underdark",
    '50 Shades of Fey',
    'Sense Motive and Sensability',
    'As I Lay at Zero Hit Points',
    'Great Incantations',
    'The Amityville Hook Horror',
    "Dante's Infernal",
    'The Girl with the Dragonborn Tattoo',
    "Lolth's Web",
    'Satyrs and Sensibility',
    'Pride and Prestidigitation',
    'The Constant Scrivener',
    'The Left Hand Casts Darkness',
    'The Cockatrice in the Rye',
    'One Thousand and One Knights',
    'The Grapes of Wraith: Wining and Dining the Undead',
    'The Adventures of Nancy Druid',
    '1984 Orcs',
    'Of Kobolds and Men',
    'The Great Goliath',
    'Animals Farm, Gardening Tips From a Friendly Druid',
    "Little Women, A Female Halfling in a Human's World",
    'Lord of the Gnolls',
    'The Orc Man and the Sea',
    'Moby-Dick, or, the Kraken',
    "Hairy Kobold and the Sorcerer's Throne",
    'Hairy Kobold and the Chamber of Regrets',
    'Hairy Kobold and the Prisoner of Gundabad',
    'Hairy Kobold and the Hobbit of Fire',
    'Hairy Kobold and the Larder of the Phoenix',
    'Hairy Kobold and the Half-Elf Prince',
    'Hairy Kobold and the Deathly Horsemen',
    'The Giving Treent',
    'The Call of the Wildshape'
  ]
}
