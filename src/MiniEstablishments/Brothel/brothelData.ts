import type { NPC, Town, Building, GenderName, AgeName, BackgroundName } from '@lib'
import { profile } from '../../Tools/profile'
import { createNPC } from '../../NPCGeneration/createNPC'
import { createRelationship } from '../../NPCGeneration/Relationships/createRelationship'
import { createParentage } from '../../NPCGeneration/Relationships/createFamilyMembers'

interface BrothelData {
  name: string[]
  /**
   * @example "Apparently, it specializes in ____"
   */
  specialty: string[]
  /**
   * @example "When people talk about the brothel, they say ____"
   */
  talk(): string[]
  /**
   * These are the brothel rumors for `BrothelOutput`.
   * @example "apparently _____"
   */
  rumour: string[]
  brothelColours: string[]
  brothelScents: string[]
  /**
   * These are the lines used to select the notice action in `BrothelOutput`.
   * @example "You notice _____"
   */
  notice(): string[]
  /**
   * These are the lines used to pick the pimp's idle action in `BrothelOutput`.
   * @example "The master/mistress is _____"
   */
  idle(): string[]
  pimp: Record<string, Partial<NPC>>
  harlot: HarlotData
}

interface HarlotData {
  create(town: Town, brothel: Building, base: Partial<NPC>): string
  type: Record<string, HarlotTypeData>
  feature: string[]
  skill: string[]
  physicalTrait: string[]
  flawSeverity: string[]
  looks: string[]
}

interface HarlotTypeData {
  gender: GenderName
  ageStage?: AgeName
  calmTrait?: string
  note?: string
  weight?: string
  background?: BackgroundName
  vocalPattern?: string
  callbackFunction?(town: Town, npc: NPC): void
}

export const brothelData: BrothelData = {
  name: [
    'Daisies', 'The Don', 'Blinkers', "The Prude's Suspenders", 'Gold’s Dust', 'The Velvet Fang', 'The Whisper Home', 'The Hook', 'Over the River', 'Slooshes', 'The Rapid Rascal', 'The Stoat',
    'The Fidgety Ferret', 'Long Shaft', 'The Guards', 'Chastity’s', 'The Mask', 'The Red Dress', 'Jewels', 'Silken Flute', 'The Nag’s Head', 'Drummers', 'Sailors Choice', 'Blacksmiths Envy',
    'The Nagging Wife', 'Colins Rubble', "Dron's Beat", 'The Wink', 'Maggie’s Horn', 'The Sun & Cider', 'The Oakworm', 'Tickle & Feather', 'The Mistress', "Madam Zersannies's", "The King's Court",
    'The Cursed Coin', 'Slit', 'The Maiden Head', 'The Rusty', 'The Silken Ferret', 'Long Legs', 'Elven Whispers', 'The Leg', 'False Suspenders', 'Aunt Fannies Bloomers', 'Final Rest', 'Cocks Crow',
    'The Unblinking Eye', 'The Bountiful Bosom', 'Tuskers', 'The Thrusting Gentleman', 'Tally Hoes', 'Rutting', 'Pigs in Blankets', 'The Delicate Touch', 'Aphrodite’s Wish', 'The Dirty Secret',
    'Long Locks', 'Sweat', 'The Plain Brothel', 'Taters', 'The Swift Finish', 'Cumberlands', 'The Missing Sausage', 'The Fools Frolic', 'Dragons', 'The Bushel', 'Farmers Oats', 'The Raised Brow',
    'Genies', 'The Farfetched Feather', 'Junk', 'The Connoisseur’s Choice', 'Colossus', 'The Smooth Ride', 'Bucking', 'The Great Big Globes', 'The Glimmeric', 'Loving Embrace', 'Chokers Necklace',
    "The Grand Madame's Emporium of Fine Delicacies Treats and the Exotic", 'Thug’s Retreat', "Warriors' Return", 'Gold Gobblers', 'Cackling Croons', 'The Warty', 'Bessie’s Best', 'Corset', 'Winkies',
    'The Shagger', 'Port of Call', 'The Home Away from Hoes', 'Smooth', 'The Maiden Fair', 'The Bit', 'Hosted', 'Glamourous Delights', 'Happily Ever After', 'Sultry Stare', 'The Full Flush',
    'The Lighted Candle', 'The Red Candle', 'The Raised Candle', 'The Dancing Flame', 'The Candlelight Resort', 'The Sweetest Cherry', "Cherry's", 'Cherry Pie', 'The Velvet Cherry', 'The Golden Cherry',
    'The Silk Curtain', 'The Red Curtain', 'The Lacy Curtain', 'The Welcoming Curtain', 'The Satin Curtain', 'Satin Dolls', 'Sweet Dolls', 'Porcelain Dolls', 'The Sugar Doll', 'Dancers and Dolls', 'The Red Door', 'The Golden Door', 'The Silver Door', "The Maiden's Door", "The Dancers' Door",
    "Lover's Embrace", "Lady's Embrace", 'The Sweetest Embrace', 'The Warmest Embrace', 'Welcoming Embrace', 'The Satin Glove', 'Silky Gloves', 'Lacy Gloves', "The Lady's Glove", "The Maiden's Glove",
    'The Shining Heart', 'Pink Hearts', 'Lacy Hearts', "Sweetheart's", "The Maiden's Heart", 'The Night House', 'The Pink House', 'The Porcelain House', 'The Welcoming House', 'The Cozy House', 'The Warmest Lamp',
    'The Red Lamp', 'The Pink Lamp', 'The Soft Lamp', "The Lady's Lamp", "The Lady's Kiss", "The Maiden's Kiss", "The Night's Kiss", 'Cozy Kisses', 'Satin Kisses', "Peach's Place", 'The Peach',
    'The Prettiest Peach', 'The Sweetest Peach', 'The Golden Peach', 'The Silky Purse', 'The Satin Purse', "The Lady's Purse", "The Dancer's Purse", 'The Pink Purse', "The Maiden's Room", "The Lovers' Room",
    'The Night Room', 'The Warm Room', 'The Red Room', 'The Silver Slipper', 'The Satin Slipper', 'The Silk Slipper', 'The Red Slipper', "The Dancer's Slipper", 'The Lacy Skirt', 'The Welcoming Skirt',
    'The Pink Skirt', "The Dancer's Skirt", "The Lady's Skirt", "The Maiden's Shoe", 'The Red Shoe', 'Cozy Shoes', "Lovers' Shoes", 'Silver Shoes', 'Silky Stockings', 'The Red Stocking', 'The Lacy Stocking',
    "The Lady's Stocking", 'The Softest Stockings', "The Maiden's Veil", 'The Lacy Veil', 'The Silk Veil', "The Lovers' Veil", 'The Veil of Night', 'Soft-Lighted Window', 'The Shining Window', 'The Lighted Window',
    'The Pink Window', 'The Welcoming Window', 'Pink Cheeks Sweets', 'Royal Tarts', 'Sweet Treats', 'Vixens', 'Bewitched', 'Bawdy House', 'Den of Iniquity', 'The Crowing Cock', 'Come Right Inn', 'Bards and the Bees',
    'Six Nickels', 'The Magic Mouth', 'The Open Purse', 'Layflower', 'Dungeon of Delights', 'The Cockatrice Inn', 'The Three-Legged-Halfling', 'The Tall Mast', "Rusty's Cutlass", 'The Shrieking Clam',
    "Dick's Halfway Inn", "Magic Molly's", "Madam's", 'The Nasty Nymph', 'The Shaved Kitty', 'Cathouse', 'The Burrow', 'Happy Harpy', 'Miracle Maid', 'The Unicorn Horn', 'The Nasty Naga', 'The Dancing Dryad',
    'Honeysuckle House', 'The Golden Touch', 'Hooziers Hooters', 'Lock and Key', 'The Full Nightingale', 'The Winking Mare', 'Ladies Grace', 'Naughty Narwal', 'Siren Song', 'The Horned Hen', 'The Rusty Flagpole',
    'The Witches Rack', 'The Sweet Canal', 'Pink Canary', 'Mugs n Tugs', "Madam Mary's Massage Parlor", 'Twigs n Berries', 'Pleasure Palace', 'The Dollhouse', 'Dolls', 'The Rose', 'Happy Horse',
    'The Kings Head', 'The Queens Head', 'The Red Lion', 'The Drunken Sailor', 'The Plough', 'The Dancing Dragon', 'Lusty Maidens', 'Mermaid Gait', 'Lone Wenches Inn', 'The Sour Sow', 'The Rusty Tub', 'The Lacy Curtain',
    'The Porcelain Candle', 'Golden Embrace', 'The Pink Petticoat', 'The Silky Kisses', 'The Red Slipper', "The Lady's Skirt"
  ],
  specialty: [
    'really weird stuff, for those with the most interesting fetishes',
    'illegal stuff. If this is found out, the place would be burnt down, and the owners hung. It is clearly kept in great secret',
    'performances involving food',
    'an outlet to live out violent fantasies',
    'exotic races',
    'slave trading. All the people here have a price.',
    'the most beautiful women and men. Not just a claim, it’s the gods’ honest truth',
    'an all-inclusive lump-sum deal—all the harlots, food, and drink you can handle!',
    'the sale of mind-altering drugs',
    'stuff with exotic/magical ingredients, potions, etc',
    'magical delights',
    'male escorts',
    'elaborate and erotic stage shows',
    'discrete service for high end clientele',
    'helping people live out their most twisted sexual fantasies',
    'incredibly dominant women'
  ],
  talk: () => [
    lib.random([
      'you can pay for services with things other than coin',
      'you can pay for the services by doing contract work',
      'you can pay for the services offered with criminal favors',
      'you can pay for services with things other than coin; namely goods, artworks, and other bartering items',
      'you can pay for the services with things other than coin. The primary currency used is secrets',
      'coin is the only thing they take'
    ]),
    'the girls are underpaid and poorly treated',
    "there's nothing really to talk about; it’s a neighborhood brothel",
    'a prominent noble or merchant is a regular',
    'the goddess of love and fertility blessed this place and all her followers must visit',
    'the usual stuff; a new girl is making a stir',
    'once a month it offers discounted services',
    'it is secretly the home to a dark cult',
    'all the harlots there are real sweet',
    'the place has really good chicken wings',
    'the buffet there is overpriced',
    'it has the best girls in town',
    'the booze is cheap and the women are busty',
    'the booze is cheap and the men are brawny',
    'all the inmates there are related',
    'nothing much; a popular girl is with child',
    "it's a front for a local merchant family",
    'it has the smuttiest girls in town',
    "it isn't worth the money",
    "you're more likely to get robbed than to get off",
    'the girls are well compensated for their dirty deeds',
    'the harlots there are treated like royalty',
    'the whores there are treated like slaves'
  ],
  rumour: [
    'a nobleman got one of the girls with child but refuses to acknowledge her or the baby',
    'someone slaughtered half of the workers and clients in the night',
    'a client was stabbed with a letter opener',
    'a man claiming to be a paragon of the god of love visited the place',
    'a group of outraged townsfolk has started protesting outside of the brothel, disgusted with what it does',
    'the oldest patron, who visited the brothel every day for the last fifty years has died. A day of mourning and celebration, along with a lavish funeral is being held for him',
    'one of the workers was strangled',
    'one of the workers has fallen madly in love with a client, but he or she is married',
    'a sinkhole has appeared in the basement. No one can see bottom, and the boss worries it might grow and do more damage',
    'several clients have caught a disease recently',
    'the boss owes several powerful nobles a lot of money',
    'one of the workers is said to be carrying the baby of a god',
    'a powerful amulet of lust is supposedly hidden there',
    'several high ranking nobles are said to frequent here',
    'many of the lesser known harlots have started disappearing in the night',
    "the mayor's daughter is said to work here",
    'the owner is actually a philanthropist and gives part of all the profits to a nearby orphanage',
    'only bottom of the barrel nobles and wannabes would be caught dead here',
    "the real owner of the brothel hasn't been seen in years because she was killed",
    'one of the harlots is actually a princess',
    'all the beds are infested with bedbugs',
    'the king himself once visited here and met one of his wives',
    'the whole brothel is actually a front for a black market organization',
    'several of the women working here are actually slaves forced into the trade',
    'one of the prostitutes is carrying the bastard child of a nearby king',
    'the bastard son of a nearby king is being hidden here',
    'many of the women here are also sellswords',
    'the harlots here can change their looks at will to suit others',
    'the prostitutes here were all orphans taken in by the original owner',
    'the brothel is actually a vampire haven who suck the blood of their patrons',
    'the brothel is actually a cult who sacrifice rude patrons to their dark god',
    'the entire building is haunted and ghosts will harass you as you try to enjoy your time',
    'the brothel has a secret backroom where all the really crazy stuff happens',
    'the brothel is just a front for a local gambling ring',
    'they water down all the drinks with horse piss'
  ],
  brothelColours: [
    'indigo', 'rainbow', 'brown', 'red', 'blue', 'orange', 'yellow', 'gold', 'emerald', 'purple', 'mauve', 'green', 'magenta', 'maroon', 'tan', 'cyan', 'olive', 'navy', 'aquamarine', 'turquoise', 'silver',
    'lime', 'teal', 'violet', 'pearl', 'white', 'black', 'gray', 'cerulean', 'sky blue', 'azure', 'chartreuse', 'amber', 'pink', 'peach', 'apricot', 'ochre', 'plum', 'beige', 'jade', 'pear',
    'periwinkle', 'salmon', 'taupe'
  ],
  brothelScents: [
    'vanilla', 'cinnamon', 'hazelnut', 'peppermint', 'pine', 'apple pie', 'salmon', 'the sea', 'cherry', 'oranges', 'clean linens', 'honeysuckle'
  ],
  notice: () => [
    'the scent of lavender in the air',
    'the scent of lilac perfume in the air',
    'the scent of ginger and cinnamon hanging in the air',
    'the scent of roses in the air',
    `scented candles burning cheerily on a counter. The smell of ${lib.random(brothelData.brothelScents)} wafts from where the candles burn`,
    `the soft ${lib.random(['red', 'orange', 'golden', 'dark blue', 'blue', 'indigo', 'violet', 'jade', 'green', 'purple', 'maroon', 'pink'])} glow from a shaded lamp in the room`,
    'a lamp burning dimly in the corner of the room',
    'a statue of two figures kissing in the corner of the room',
    'a statue of two figures coupling in the corner of the room',
    'a statue of a nude woman bathing in the corner of the room',
    'a statue of a nude man bathing in the corner of the room',
    'a painting of several nudes bathing hanging on the wall',
    'a painting of a pair of lovers hanging on the wall',
    'a tasteful nude of two women hanging on the wall',
    `several thick curtains of ${lib.random(brothelData.brothelColours)} colored beads`,
    `silky ${lib.random(brothelData.brothelColours)} colored curtains lining the walls`,
    `a plush and somewhat gaudy ${lib.random(brothelData.brothelColours)} colored carpet beneath your feet`,
    'a thick fur carpet beneath your feet',
    'the sound of distant, soft music playing in the background',
    'the sound of furniture creaking in one of the rooms above',
    'a lengthy, shrill scream',
    'a long moan emanating from a room above',
    'several deep shouts of pleasure from a distant room',
    'an eclectic collection of shoddy furniture strewn around the room',
    'an expensive looking collection of high class furniture laid about the room',
    `a rather distasteful tapestry hanging on the wall depicting ${lib.random(['a rather lewd act', 'a woman with both breasts hanging out', 'a man with his bits hanging out', 'some sort of sexual story', 'the greatest sexual deeds of the brothel owner'])}`,
    'the smell of sex lingering in the air',
    `the whole place smells oddly of ${lib.random(brothelData.brothelScents)}`,
    'the people here all look to be on some sort of drugs',
    'the sound of wood banging against wood echoing out from somewhere nearby',
    'thick velvet curtains cover all the windows in the room',
    'a stage with several women of different races dancing for a large group of men',
    'a stage with several men of different races dancing for a large group of women',
    'a stage with several women of different races dancing for a large group of women',
    'a stage with several men of different races dancing for a large group of men',
    'a thick smoke hangs in the air',
    'a hearth with a roaring fire. Several whores are laid out nude in front of the fireplace, their shadows flickering in the light',
    'the room is filled with plush, soft, slightly stained furniture',
    'several closed doors with soft moans seeping through them',
    'a large wardrobe of clothes hanging along one wall, likely to aid in roleplay',
    'several large cages with men and women of different races dancing inside',
    'several long metal poles with harlots dancing around them',
    'beds laid out in the open showing off all sorts of lewd acts',
    'several of the patrons of this establishment seem to be quite drunk',
    `a light ${lib.random(brothelData.brothelColours)} colored smoke hangs in the air`,
    'a small group of men eyeing up some women in the corner',
    'a small group of women eyeing up some men in the corner',
    "a board covered in pictures and names. It's all the different prostitutes currently available",
    'a nude bard stands on a small stage in one corner singing quite the raunchy song for the people in the room',
    `a bard clad in only his undergarments standing in one corner playing ${lib.random([
      'a sweet tune on a lute', 'a beat on a small wooden box', 'an off-key song on a lute', 'a bitter tune on a harp',
      'an interesting song on a sitar', 'a merry tune on a flute', 'a quick beat on a pair of drums', 'a fine song on a fiddle'
    ])} for the brothel patrons`,
    'several pieces of pottery with very vulgar acts painted on them',
    'a great many nude statues placed all around the room'
  ],
  idle: () => [
    'sitting, with a piece of bread in hand',
    'sitting, mug in hand',
    'casually looking over a letter',
    `pouring over a book titled ${lib.random([
      'The Lustful Practice', 'Helpful Harlot Hints', "From Rags to Wenches: A Pimp's Trip to the Top", 'Glory Holes', 'Venus and Adonis', 'The Seven Beauties',
      'Sappho and the Other Raunchy Poets', 'The Complete Works of Archilochus', 'Poetica Erotica', '50 Positions to Make Him Drop his Coin Sack', 'Sex and Sorcery', 'Toys for Boys'
    ])}`,
    'applying a generous layer of powdered makeup',
    `spraying a copious amount of ${lib.random(brothelData.brothelScents)} scented perfume`,
    `laying in a particularly plush looking ${lib.random(brothelData.brothelColours)} chaise lounge`,
    'taking a long drag from a nearby hookah',
    'showing a few of the local girls how to use a new toy',
    'giving tips to some of the workers on how to better please the patrons',
    'shouting at several patrons who were causing trouble',
    'gruffly shoving an unruly patron out of the brothel',
    'disciplining some of the harlots with a riding crop',
    'flirting with a wealthy looking patron',
    'engaging in some fun with one of the other whores',
    'currently up on a small stage putting on a show',
    'sitting and idly talking with an employee',
    'idly chatting with a patron',
    'telling a raunchy story to a few of the patrons',
    `putting on a long ${lib.random(brothelData.brothelColours)} lacey shawl`,
    'laying across a velvet sofa in the room being fed grapes by a beautiful woman',
    'nowhere to be seen at first, but then emerges from a back room covered by thick curtains',
    'sticking fake jewels on a feathery headdress',
    'sewing a patch onto some sparkling undergarments'
  ],
  pimp: {
    'a mean old madam': {
      age: 'venerable',
      gender: 'woman',
      calmTrait: 'mean',
      profession: 'pimp'
    },
    'a large madam with a no-nonsense attitude': {
      gender: 'woman',
      weight: 'plump',
      calmTrait: 'sensible',
      profession: 'pimp'
    },
    'a warm motherly figure': {
      gender: 'woman',
      weight: 'plump',
      calmTrait: 'kind',
      profession: 'pimp'
    },
    'a surly brute': {
      gender: 'man',
      weight: 'muscular',
      calmTrait: 'mean',
      profession: 'pimp'
    },
    'a tyrannical and cruel fellow': {
      gender: 'man',
      age: 'middle-aged',
      calmTrait: 'mean',
      profession: 'pimp'
    },
    'a sultry seductress': {
      gender: 'woman',
      age: 'relatively young',
      calmTrait: 'flirtatious',
      profession: 'pimp'
    },
    'a charming witch': {
      gender: 'woman',
      age: 'relatively young',
      dndClass: 'sorcerer',
      profession: 'pimp'
    },
    'an incredibly well endowed woman': {
      gender: 'woman',
      weight: 'plump',
      age: 'relatively young',
      calmTrait: 'flirtatious',
      profession: 'pimp'
    },
    'a rugged and grizzled rogue': {
      gender: 'man',
      calmTrait: 'mean',
      profession: 'pimp'
    }
  },
  /** Creates a new NPC with specific traits for readout in the BrothelOutput */
  harlot: {
    create (town, brothel, base = {}) {
      if (typeof brothel.associatedNPC === 'undefined') {
        throw new Error('Brothel does not have an associated NPC!')
      }

      const harlotType = lib.random(lib.keys(brothelData.harlot.type))
      const readout = {
        feature: brothelData.harlot.feature.random(),
        flawSeverity: brothelData.harlot.flawSeverity.random(),
        skill: brothelData.harlot.skill.random(),
        looks: brothelData.harlot.looks.random()
      }
      const harlotTraits: Partial<NPC> = {
        physicalTrait: lib.random(brothelData.harlot.physicalTrait),
        isShallow: true,
        hasClass: false,
        profession: 'harlot',
        ...base,
        ...brothelData.harlot.type[harlotType]
      }
      const harlot = createNPC(town, harlotTraits)
      createRelationship(town, harlot, brothel.associatedNPC, { relationship: 'employer', reciprocalRelationship: 'employee' })
      lib.createReciprocalRelationship(town, brothel, harlot, { relationship: 'worker', reciprocalRelationship: 'place of work' })
      return `This harlot is ${harlotType} called ${profile(harlot)}. She has ${readout.feature} and is particularly good at ${readout.skill}. However, she has ${harlot.physicalTrait}, which is ${readout.flawSeverity}. She is looking to ${readout.looks}.`
    },
    type: {
      'a veteran who may have been beautiful': {
        gender: 'woman',
        note: "A seasoned hand at the world's oldest trade."
      },
      'a passionate young woman': {
        gender: 'woman',
        ageStage: 'young adult',
        calmTrait: 'passionate'
      },
      'a homely young lady': {
        gender: 'woman',
        ageStage: 'young adult',
        calmTrait: 'kind'
      },
      'a friendly and plump woman': {
        weight: 'plump',
        gender: 'woman',
        calmTrait: 'friendly'
      },
      'the bastard daughter of a noble house': {
        background: 'noble',
        gender: 'woman',
        note: 'The bastard daughter of a noble house.',
        callbackFunction (town, npc) {
          if (!npc.family) lib.createFamily(town, npc)
          const newLocal = town.families[npc.family]
          createParentage(town, newLocal, npc, true)
        }
      },
      'a young foreigner': {
        background: 'outlander',
        gender: 'woman',
        ageStage: 'young adult',
        vocalPattern: 'has an interesting accent',
        note: 'From a far away land.'
      },
      'the boss’s favorite': {
        gender: 'woman',
        ageStage: 'young adult',
        calmTrait: 'passionate'
      },
      'an exotic beauty': {
        background: 'noble',
        ageStage: 'young adult',
        gender: 'woman',
        vocalPattern: 'an interesting accent',
        note: 'From a far away land.'
      },
      'new to the place and always in trouble': {
        gender: 'woman',
        ageStage: 'young adult',
        calmTrait: 'mischievous'
      },
      'new to the place and eager to please': {
        gender: 'woman',
        ageStage: 'young adult',
        calmTrait: 'eager to please'
      }
    },
    // She has __
    feature: ['a pretty smile', 'beautiful eyes', 'lovely, long eyelashes', 'lush, curly locks', 'short-cropped hair', 'a clean satin gown', 'broad shoulders', 'a slender jaw', 'thick, long hair', 'a very large bosom', 'a very curvaceous body', 'long slender hands'],
    // and is particularly good at __
    skill: ['listening and offering emotional support', 'bringing a smile to her clients’ faces as soon as she touches them', 'embroidery and sewing', 'cooking and cleaning', 'drinking and swearing', 'certain lewd oral activities', 'getting clients in the mood', 'juggling'],
    // However, she has __
    physicalTrait: ['a gimpy leg', 'trout lips', 'a missing hand', 'dirty, matted hair', 'quite strong body odor', 'a very hairy body', 'crooked teeth', 'an unsightly scar', 'an unfortunately shaped nose', 'a large mole on her face', 'crossed-eyes', 'a mustache', 'a large beauty mark', 'a large number of freckles'],
    // whish is __.
    flawSeverity: ['barely noticeable', 'well-concealed by make-up or practice', 'something you can look past', 'intimidating', 'not easily ignored', 'very prominent', 'incredibly distracting'],
    // She is looking to __
    looks: [
      'earn enough coin to get out of this place',
      'bring to light a scandal involving a rival',
      'secure a marriage to get out of this place',
      'hear word of a child given away',
      'hatch a plan for revenge against the man who ruined her life',
      'drink some wine and have a laugh',
      'seduce a noble and live a life of luxury',
      'learn more about the whorehouse practice for her erotic fiction',
      'leave this place with her bastard children',
      'learn a trade and get out of this dreadful line of work',
      'simply have all the sex her heart desires, and the gold is a nice bonus',
      'make connections with powerful people'
    ]
  }
}
