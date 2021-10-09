import { Town } from '@lib'

interface Plague {
  /** The name of the disease. */
  name: string
  /** The symptoms of the disease. */
  symptoms: string
  /** If there is a cure, what it is. */
  cure?: string | null
  /** The severity of the disease. */
  severity?: number
}

export const createPlague = (_town: Town): Plague => {
  const plagueData = {
    unique: [
      [
        {
          name: 'Red Rot',
          symptoms: 'A disease that is contracted by direct contact with a red ooze. The ooze attaches itself to the skin of the person and slowly rots the flesh away at the point of contact.',
          cure: ''
        },
        {
          name: 'Gambling Addiction',
          symptoms: 'Will save or compelled to gamble when presented with opportunity.',
          cure: ''
        },
        {
          name: 'The Screaming Sickness',
          symptoms: 'The victim moans and screams in their sleep, making it hard for those sleeping near the victim to get a good night’s rest.',
          cure: ''
        },
        {
          name: 'Slate Fever',
          symptoms: 'An uncommon sickness that causes skin to become hard and brittle. Originating from the underdark and eventually making its way to the surface, Slate Fever propagates through contact with mosses and fungi contaminated with the disease, as well as through contact with the affected skin of those with the sickness. Early symptoms include a slight grey discoloration of skin tone, uncomfortable stiffness, and unusual amounts of neck and back cracking when moving. The symptoms eventually progress to the point where the diseased becomes noticeably grey and stiff, causing them to move in small, jerk-like motions and have their speed reduced by half. In addition, the diseased develops exceptionally brittle skin that cracks easily and painfully. This gives them vulnerability to bludgeoning damage and causes them to frequently make Constitution saving throws to avoid taking 1d4 damage from shattering parts of their skin with excessive contact. The disease itself usually passes by itself over the course of one week resting and recuperating, but can be cured within 2 days if the diseased is properly treated with a combination of various tree saps. Catching this disease once results in the diseased being more vulnerable to it in the future.',
          cure: ''
        },
        {
          name: "Spectre's Decay",
          symptoms: "The victim's soul and body separate but continue to move in unison. Without a soul the body rapidly degenerates and decays over the course of a year, however wherever the flesh forms holes or rips the ghost of the person continues to stand. This continues until the body has completely decomposed and the ghost is left to wander the earth, unable to pass into an afterlife. This disease can rarely be contracted through contact with undead who have lingering souls.",
          cure: ''
        },
        {
          name: 'Summoning Sickness',
          symptoms: 'Due to a teleportation spell gone wrong, your stomach and head are all turned around. Disadvantage on ability checks and saving throws until all your parts manage to realign properly.',
          cure: ''
        },
        {
          name: 'Casters Cough',
          symptoms: 'Due to a nasty infection having spent too much time in a component pouch, you have a nasty magical cough. Whenever you cast a spell there is a 25 percent chance that you must roll on the Wild Surge Table.',
          cure: ''
        },
        {
          name: 'Goblinitis',
          symptoms: 'every hour you have a 50% chance of alternating between your normal form and that of a goblin.',
          cure: ''
        },
        {
          name: 'Hydrophobia',
          symptoms: 'you are afraid of any body of water larger than a small puddle. Disadvantage on ability checks when in or on water.',
          cure: ''
        },
        {
          name: "Begger's Pox",
          symptoms: 'weeping sores break out over your face, making you hard to look upon. Disadvantage in charisma checks without some form of face covering.',
          cure: ''
        },
        {
          name: 'Drunken Fool',
          symptoms: 'slurred speech and perpetual dizziness make you appear drunk, disadvantage on acrobatics checks and charisma checks unless engaged with someone drinking alcohol.',
          cure: ''
        },
        {
          name: 'Sewer Rat Flu',
          symptoms: 'When bitten by a sewer rat, the effect is just like the regular flu, but 3 times worse. PC vomits through out most of the day. To determine when PC vomits, roll a percentile die every 30 minutes in game, If even then vomit, if odd, nothing happens. Vomiting will force the PC to stop what ever action they are doing, and breaks concentration. Vomiting every 3rd time will also cough up blood. Roll 1d4 to calculate damage. The cure is to drink very hard alcohol, and let it dissolve the stomach acid poison. Another option is to survive 10 hours. A lesser restoration spell automatically cures it. Orcs, Half-orcs, and Drow are immune to this.',
          cure: ''
        },
        {
          name: 'Transmutation Overload',
          symptoms: 'this can happen if multiple transmutation spells occur on the same time on the same subject or subjects. it deforms the subject to something in the middle of all of them, but also makes the sick immune to transmutation spells, no more room for magic on this body! (based on the wonderful manga dorohedoro)',
          cure: ''
        },
        {
          name: 'Magical Discord',
          symptoms: "You begin to lose connection to the forces of magic. Each day your spellcasting ability drops by 1 point until you're cured.",
          cure: ''
        },
        {
          name: "Vorel's Phage",
          symptoms: "Disease starts by imposing one Exhaustion level on the affected creature, in which small patches of bumps errupt on the inflicted creature's skin and the joints swell painfully. After an incubation period of 1d4-1 nights, the creature gains another level of Exhaustion and the bumps become raised and fungal looking. On the firstboccurance of a new moon after the incubation period, the infected creature gains 2 more Exhaustion levels. If this kills the creature, it rises again after 1d4-1 nights as a wight. If a blood moon occurs at any point after incubation, the creature instead just succeed in a DC 15 Constitution saving throw or die immediately, raising in a minute as a wight. Exhaustion levels gained by this disease reappear every morning and only a miracle, wish or some other similar magic can permanently remove them without curing the disease.",
          cure: ''
        },
        {
          name: "Swordbearer's Bane",
          symptoms: "The disease is contracted by contact with an infected creature's blood. After the incubation period of 1d4 days, the hands and feet of the infected creature begin to swell and become tender. This causes the creature to lose 5ft of movement and imposes disadvantage on Dexterity (Slight of hand) checks. After another 7-1d4 days, the infection causes the hosts extremities to go numb. The infected creature's movement speed is halved and the creature is treated as if it were under the effect of a Bane spell until it is cured.",
          cure: ''
        },
        {
          name: 'The Turquoise Death',
          symptoms: 'This disease is contracted by contact with a creatures bodily fluids, and the disease remains infectious weeks after the fluid has evaporated, but only if rehydrated. After the initial 1d3 day incubation period the infected will start to notice heart palpitations, and will note slow recovery rates. The infected creature can no longer remove levels of exhaustion, and failed death saving throws permanently reduce the number of death saving throws the creature can fail in the future before death occurs. Both effects are permanent after the creature has gone without treatment for more than a month.',
          cure: ''
        },
        {
          name: 'Hippogryff Hives',
          symptoms: 'A an itchy rash that makes it unbearable to wear armor or heavy clothing until it’s treated. Highly contagious via skin to skin contact.',
          cure: ''
        },
        {
          name: 'Tapeworm',
          symptoms: 'Unnoticeable for the first month, for three months after must eat twice as much as normal each day. After three months, receives a penalty to constitution as you can no longer extract enough nutrients before the parasite consumes the food.',
          cure: ''
        },
        {
          name: 'Monstrous Tapeworm',
          symptoms: 'As above, but after six months, it eats it way out of the stomache, kills, then finally consumes the host. Treatment is recommended before that happens.',
          cure: ''
        },
        {
          name: 'Brain Fever',
          symptoms: 'caught from proximity to Underdark denizens. Causes paranoia (disadvantage on Charisma checks due to distrustfulness)',
          cure: ''
        },
        {
          name: 'Carrion Fever',
          symptoms: 'Causes migraines and an intense craving of raw meat.',
          cure: ''
        },
        {
          name: 'Acidblight',
          symptoms: 'Slowly causes blood and other bodily fluids to become more and more corrosive, dealing acid damage slowly over time.',
          cure: ''
        },
        {
          name: 'The Yellow Plague',
          symptoms: "Pus and bile ooze from the afflicted's pores. They gain a level of fatigue every day it is untreated.",
          cure: ''
        },
        {
          name: "Ser Avidore's Fire",
          symptoms: 'Magical multi-colored rashing of the skin. Can sometimes flare up and deal a type of magical damage to those afflicted. Common among magic users.',
          cure: ''
        },
        {
          name: 'Cobblestone Sickness',
          symptoms: 'After a bite from a cockatrice, the body will slowly turn to stone.',
          cure: ''
        },
        {
          name: 'Two-Left-Feet Syndrome',
          symptoms: 'Any kind of saving throw is disadvantaged as well as -4 for any number for any roll.',
          cure: ''
        },
        {
          name: 'The Common Cold',
          symptoms: 'Just a cold. You’ll cough and sneeze, but that’s about it',
          cure: ''
        },
        {
          name: "Conjurer's Mania",
          symptoms: "A mental illness that worsens over time. The afflicted believes that they are able to create life, and seeks out new ways to do so. Becomes obsessed with anything that they have 'created.' If the afflicted has no means for creating life, magically or otherwise, they may start to irrationally believe that inanimate objects are their living creations. May start believing other 'summoners' creations' are their own creations that have been stolen. May eventually progress to compulsion to steal newborn animals, monsters, or humanoids, or become unstable when seeing another magic user summoning a creature.",
          cure: ''
        },
        {
          name: 'Third Eye Blind',
          symptoms: 'Unable to communicate telepathically, but also unable to be targeted telepathically and is unaffected by any method that would not work on a creature without an intelligence. Recalling images from memory become hazy and unreliable. Penalties to any checks to recall visual information from memory. This disease tends to present itself in those who have been the target of many unwanted telepathic intrusions. Some humanoids are hereditarily predisposed to this disease, and may be afflicted upon after their first telepathic intrusion.',
          cure: ''
        },
        {
          name: 'Desert Fever',
          symptoms: 'Skin takes on a red tinge, fever & bouts of cold sweat. Treat unusually warm or cold weather as hazardous temperatures. Often a physical ailment caused by interacting with malicious djinn magic. May be transmitted orally.',
          cure: ''
        },
        {
          name: "Displacer's Malalignment",
          symptoms: "Appears to be the common cold, but is actually a disease that can be deadly for magic users & planar travelers. Afflicted must make a check to succeed any teleportation spell or ability. On a failed check, will move the afflicted 1d6ft in a random direction. Afflicted may be damaged or killed if teleported into a solid object. (If playing DnD, use the Teleportation spell's Mishap rules) This disease often causes magic users to be incredibly wary of those presenting symptoms of the common cold. Spread through ingesting of bodily fluids, most commonly from the sneezes or runny nose of the afflicted.",
          cure: ''
        },
        {
          name: 'Woodland Mania',
          symptoms: 'Afflicted believes to have gained the ability to speak with animals. The animals that they believe they are talking to may or may not exist, and all conversations tend to cause paranoia. Spread through bites, may be transmitted by animals.',
          cure: ''
        },
        {
          name: 'Other-Otherworldy Whispers',
          symptoms: 'A mental illness that causes the afflicted to believe that they are receiving knowledge from another dimension. In truth, the advice & knowledge that they get are delusional. The Afflicted tends to become a know-it-all, and the whispers encourage & bolster their cockiness.',
          cure: ''
        },
        {
          name: 'Slippery sickness',
          symptoms: "Your skin constantly oozes a greasy fluid. Without shoes, you're liable to trip. Without gloves, you're liable to drop objects. The upside is that monsters will have a hard time grabbing your skin.",
          cure: ''
        },
        {
          name: 'Brilliant Urine Disease',
          symptoms: 'You get dehydrated twice as quickly as usual, and your urine glows neon yellow, brightly enough that a pint glass of it could substitute for a torch. Spread through pollen in heavy forests, this disease is the bane of scouts, spies, and hunters.',
          cure: ''
        },
        {
          name: 'Wild Stench',
          symptoms: 'You give off an odor that is undetectable to humans and many other humanoid species like dwarves and orcs, but can be smelled by most mammals, fish, and insects from far away. They find it highly offensive and will flee from it. Only the bravest scent hounds can be convinced to track such a scent. It is rumored that wild stench is the partly successful result of a magical experiment to keep crops safe from wild animals. Curiously, dragons find it pleasant and may ask where you got that enchanting perfume.',
          cure: ''
        },
        {
          name: 'Beard Agnosia',
          symptoms: "You lose the ability to recognize a beard. You have great difficulty recalling or describing a beard, or noticing that somebody has grown or shaved a beard. In advanced cases, sufferers of beard agnosia can be looking at themselves in the mirror and be unable to tell whether they just shaved off their beard or they've gone a month without shaving it. Fortunately, this disease is less common in men than women. Unfortunately, it is more common in dwarves.",
          cure: ''
        },
        {
          name: 'Puffs',
          symptoms: "Fungi based parasite. Creature becomes infected after inhaling airborne spores. First sign of symptoms appears to be nothing more than mild acne. Soon, several of the 'zits' begin to grow larger. Not unnaturally large for such blemishes. Finally, a single 'puff' quickly grows to the size of a grape and bursts into a small cloud of spores that quickly spread in a breeze, infecting those around the host, as well as leaving a large 'pockmark' in it's place. The fungus, while growing inside the host, causes ever growing feelings of loss and loneliness, pushing the host to seek out more and more companionship. If the fungus is allowed to reach fruition and spore, the sense of loneliness transitions into a permanent and inconsolable state of depression.",
          cure: ''
        },
        {
          name: 'Tiny Devil',
          symptoms: 'when having an unprotected sexual intercourse with dwarfes you have a 35% possibility of getting this disease. Tieflings and succubusses are immune to this disease. Dwarfes do not suffer the effects of this disease but can infect other humanoids. If you have the Tiny Devil, your skin becomes very dry and making Athletics checks, Acrobatics checks and Dex sabing throws gives you 1d4 slashing damage(little wounds forms on your limbs, they can be cured only by magic). If you are a male, your ding ding dong burns very bad(no damage suffered unless you have sex. If so you take 1d4 fire damage per minute). To get rid of this disease: female: this disease will go away in 1d12 months. male: you need to cut your THING of infect 4d10 humanoids with this disease.',
          cure: ''
        },
        {
          name: 'Death Luck',
          symptoms: 'if you fail a saving throw with a 1 you have 10% chance of getting this disease(1d100, from 90-100). While you are infected you produce one Wild Magic effect every 2d12 hours and your skin hardenes(you have disadvantage on Dex checks aka all skills that count on dexterity and all saving throws but you gain +1 to your AC). This disease is contagious and can be transmitted through touch. It can be cured with 25 days of resting doing nothing but eating, drinking(alcohol might help) and sleeping.',
          cure: ''
        },
        {
          name: 'The Dreaded Mallergy',
          symptoms: 'Few have survived the infliction of this fabled contagion. Not much is understood about the Mallergy, but patients are struck with a deep sense of dread as they become bedridden and sweat constantly. 48 hours after the disease has set in they can no longer move. If they do not fight off the infection they succumb to asphyxiation and perish.',
          cure: ''
        },
        {
          name: 'The Wariness',
          symptoms: 'PCs develop this disease though interactions/attacks from psychic creatures. All insight checks result in the PC believing that others are lying to or trying to harm them.',
          cure: ''
        },
        {
          name: 'The Illusionary Insomnia',
          symptoms: 'The first symptom is an inability to sleep through non magical means. After 2 days the patient begins to hallucinate. After three days these hallucinations begin to manifest as magical illusions. As the patient nears a week without sleep, the illusions become more physical as their mental state deteriorates. The user finally falling asleep through magical means is the only known cure.',
          cure: ''
        },
        {
          name: 'Marked Blood',
          symptoms: 'After swimming in any sort of sewage, under a city or in a refuse dump, microscopic creatures have sublimated into your blood stream. They lie dormant until you move to a different sewage system. Once there you have to succeed in DC x wisdom saving throw or you use your action to slash yourself till your blood pours out.',
          cure: ''
        },
        {
          name: 'Wraith Eyes',
          symptoms: 'The person goes blind for random d20 periods of d10 minutes.',
          cure: ''
        },
        {
          name: 'Necrotic Blight',
          symptoms: 'The disease causes double the amount of necrotic damage to be dealt to this infected person.',
          cure: ''
        },
        {
          name: 'Happy Cancer',
          symptoms: 'This disease causes people to slowly die over a d20 period of days. At the end the infected is over joyed with the sweet release of death.',
          cure: ''
        },
        {
          name: 'Ogre Poisoning',
          symptoms: 'Turns the infected humanoid into a Ogre after d20 days of being infected without treatment.',
          cure: ''
        },
        {
          name: 'Winter Insomnia',
          symptoms: "When the temperature around the infected person drops below fifty degrees, the person will pass out and won't awake until the temperature increases.",
          cure: ''
        },
        {
          name: 'Hostile Cough',
          symptoms: "When someone infected coughs on another humanoid who isn't infected that person becomes hostile toward the person who coughed on them.",
          cure: ''
        },
        {
          name: 'Soft Bones',
          symptoms: "The player's AC drops two points until cured.",
          cure: ''
        },
        {
          name: 'Golden Tumor',
          symptoms: "The tumor starts as a small gold tumor then advances to the rest of the body. Once the disease has ran its course the subjects body is completely made of gold. Bet you didn't known were gold coins came from.",
          cure: ''
        },
        {
          name: 'Swamp Rage',
          symptoms: 'Pissed off about swamp people.',
          cure: ''
        },
        {
          name: 'Beer Depression',
          symptoms: 'When the infected person drinks more than 2d6 cups of beer they become depressed for 4d4 hours.',
          cure: ''
        },
        {
          name: 'Demon Ears',
          symptoms: 'This person can only hear what demons tell it.',
          cure: ''
        },
        {
          name: 'Zombie Delirium',
          symptoms: 'Becomes Delirious about the undead.',
          cure: ''
        },
        {
          name: 'Rabbit Panic',
          symptoms: "This person can't eat rabbit without being panicked for 2d8 hours.",
          cure: ''
        },
        {
          name: 'Hemophilia',
          symptoms: 'double bleed damage',
          cure: ''
        },
        {
          name: 'Tetanus',
          symptoms: 'disadvantage on dex throws after 1 day, total paralysis after 4 days, death check every day after the 7th day',
          cure: ''
        },
        {
          name: 'Creeping cough',
          symptoms: 'disadvantage on infiltration throws',
          cure: ''
        },
        {
          name: 'Spasm of The Entrails',
          symptoms: 'the PC cannot regenerate health by eating and resting, can be caught when fighting against animal abominations',
          cure: ''
        },
        {
          name: 'Skin Rose',
          symptoms: 'a red mark that slowly spread around a wound like a flower, after 2 weeks spawns little parasites that will drain the PC of his energy (disadvantage on CON throws). the pattern has to be burned deeply to kill the parasites. Take care of your handsome heroes',
          cure: ''
        },
        {
          name: 'Leprosis',
          symptoms: "the PC's skin start to slowly deteriorate and wounds don't cicatrize anymore, the PC also becomes slowly immune to physical pain.",
          cure: ''
        },
        {
          name: 'Narcoleprosy',
          symptoms: 'Your limbs and digits have an extreme tendency to fall asleep in relaxing conditions. If left untreated, your arms, legs, fingers, and toes can become shortened and deformed, as cartilage is absorbed into the body.',
          cure: ''
        },
        {
          name: 'Humanoid Immunodeficiency Virus',
          symptoms: "The diseased person suffers general flu-like symptoms (runny nose, coughing, aches in joints) for a few days that eventually pass. The true danger of this disease comes later. If the underlying virus is left untreated, the affected's immune system degrades tremendously, temporarily losing one ability point in Constitution each month until the disease is treated, gaining all lost Constitution back on the next long rest. If left untreated, the affected will also suffer a permanent level of exhaustion every 6 months that does not go away even after the disease is treated.",
          cure: ''
        },
        {
          name: "Arboreal Petrification, or The Dryad's Rot",
          symptoms: 'They say to slay a dryad is bad luck. But killing a dryad who is ill or favored by the gods will surely inflict this disease should any of her sap touch your skin. First, blindness and deafness slowly takes you, soon followed by sluggishness and fatigue. Then, your body begins to painfully turn, inside out, into the hard, coarse bark of an old dying tree. Your body rejects food, so you begin to starve. You require ten times the amount of water you normally do, or you will die of thirst. Your limbs become too heavy to move and your skin takes the flaky, layered appearance of wood chips. Your throat will eventually become thick and you will die of asphyxiation, and finally your body will be grown over with bark, and you will become a misshapen pile of vile sap and wood.',
          cure: ''
        },
        {
          name: 'Hairasite',
          symptoms: 'Many of the entities hairs have been replaced by long, light worms, latching on to the victim’s scalp. Disadvantage on all charisma checks until the victim takes fire damage or is magically healed.',
          cure: ''
        },
        {
          name: 'Involuntary Mirror Touch Synthesia',
          symptoms: 'Whenever the victim sees someone take damage, they take 1d4 psychic damage. If the victim is the one attacking, they take an additional 1d4+1',
          cure: ''
        },
        {
          name: 'Chronic Shrinking',
          symptoms: 'A possible effect of transmutation magic gone wrong. The victim shrinks to one half their previous height every week until cured. This disease is contagious if anyone is near the victim for an extended period of time.',
          cure: ''
        },
        {
          name: 'Grave Grub',
          symptoms: "In infection given from maggots that have grown inside an undead creature that were transferred to a living humanoid during some close-quarters encounter. Causes the infected to make a DC 15 Constitution saving throw, on a failure the infected's movement is reduced by half, their Constitution & Charisma score lower by 1 point and and they get Disadvantage on Persuasion checks due to visible greenish rot growing out of their ears, mouth, nostrils, and eye sockets. Every midnight they can make another Constitution saving throw, if they fail 3 in a row the humanoid suffers the effects permanently.",
          cure: ''
        },
        {
          name: 'Magic Allergy',
          symptoms: 'You experience a mild allergic reaction to prolonged exposure to anything even slightly magical. "Oh is that an achoo everburning torch? achoo"',
          cure: ''
        },
        {
          name: 'Cheatersbane',
          symptoms: 'you vomit vigorously when attempting sexual contact. May be made to explicitly allow intimacy with one particular person. Intended for suspicious spouses, but accidentally found a cult following among emetophiles.',
          cure: ''
        },
        {
          name: 'Noblewind',
          symptoms: 'you fart uncontrollably, but it smells sweet. Everybody notices.',
          cure: ''
        },
        {
          name: 'Polychromia',
          symptoms: 'each of your eyes view the world as if through a randomly-colored sheet of glass. Every day, the colors change.',
          cure: ''
        },
        {
          name: "Bard's Revenge",
          symptoms: 'your ears constantly hear a repeating brief tune.',
          cure: ''
        },
        {
          name: 'The Twisted Tongue',
          symptoms: "The patient begins to swear and insult others by chance. They can't controll it.",
          cure: ''
        },
        {
          name: 'The Paralyzed Tongue',
          symptoms: 'The patient is not able to move his tongue while talking. Very often they let their tongue stick out to of their mouth get rid of their pain too.',
          cure: ''
        },
        {
          name: 'The Shaking Parrot',
          symptoms: 'Whenever a trigger word comes up during a conversation (said by the patient or someone else). The patient repeats the word out loud. Sometimes they repeat the trigger word combined with a whole sentence (always the same). While they are triggered they jump around or shake their body or repeat one specific movement again and again.',
          cure: ''
        },
        {
          name: "The Soldier's Fear",
          symptoms: 'Whenever fear or high stress manifests in the mind of a warrior they begin to see illusions. If the fighter spots an enemy his will is testet (DC10 or DC15 if the infection is older that 2 weeks). If his mind fails he sees multiple enemys or enemys in a different more dangerous form.',
          cure: ''
        },
        {
          name: 'The Golden Vision',
          symptoms: 'One becomes obsessed with gold. The patient recognises the true worth of everything. They try to take possession of everything valuable to sell it for gold. They stop at nothing. They steal or use force. However if they get only a glace on gold pieces they lose the ability to count and just want to take the money with them and leave. They often begin to store their gold in a hidden place or bury it.',
          cure: ''
        },
        {
          name: 'Oil of Ferrosix',
          symptoms: 'Slowly turns those infected into mindless Warforged. Highly contagious but can be cured or halted by golems and Warforged.',
          cure: ''
        },
        {
          name: 'Animaseperatism',
          symptoms: 'Over the course of 1d6 days, your soul slowly exits the body. Over this time you may lose interest in a hobby or lose motivation in fighting the big bad, it can be stopped if you meet a cleric fast enough, but if not, you must acquire a vessel for the soul and roll disadvantage on all skill checks for 1d6 days.',
          cure: ''
        },
        {
          name: 'Cephalogorgonism',
          symptoms: 'colloquially referred to as getting medusaed, your hair turns to snake (yes all hair). The only known treatments are a buzzcut or using a lot of shampoo.',
          cure: ''
        },
        {
          name: 'Medusa Rash',
          symptoms: 'A slow growing petrification. Lasting as short a month to as long as several years the rash will slowly spread causing the flesh to turn to stone. The disease is 100% fatal with the disadvantages becoming more pronounced as full limbs become petrified.',
          cure: ''
        },
        {
          name: 'The Vanishing Plague',
          symptoms: 'Turns people invisible, highly contagious.',
          cure: ''
        },
        {
          name: 'Tinder Sickness',
          symptoms: 'Gives you a dry cough and vulnerability to fire damage, you explode if you are dropped to zero hit points by fire damage.',
          cure: ''
        },
        {
          name: 'Slime stomach',
          symptoms: 'A slime is in your stomach. It could have crawled in when you were sleeping, or maybe it was a spore in something you ate. It causes major pain, gives you bad acid reflux, and devours your food, leaving you malnourished. The only known solution is to swallow baking powder and pray to a god of healing.',
          cure: ''
        },
        {
          name: 'Burning passion',
          symptoms: 'A magical disease that causes you to get burns whenever you do something you love. first degree for eating your favorite food. Second degree for practicing your hobby. Third degree when you express love to your closest ones.',
          cure: ''
        },
        {
          name: 'Frogtongue',
          symptoms: "The afflicted's tongue gradually becomes malleable and sticky, like a ball of taffy, and the afflicted gradually loses the ability to pronounce words and enunciate. At its most advanced stages, the tongue can be protruded and retracted exactly as a frog's tongue, and the afflicted loses the ability to speak. Other symptoms include a craving for flies and an undying hatred for the wizard that crafted this ailment.",
          cure: ''
        },
        {
          name: 'Mindbane',
          symptoms: 'A magic psychic ailment passed by proximity with the afflicted, Mindbane shows those suffering it The Things Man Was Not Meant To See. Early stages of this ailment only seep into feverish nightmares, but later stages show unrelenting visions causing dissociation from reality, permanent psychosis, and even apparent death from insanity. This ailment can arise organically from contact with certain creatures from outside the mortal world.',
          cure: ''
        },
        {
          name: 'Green-Skinned Death',
          symptoms: "This disease causes the unfortunate afflicted's bones to decay inside their bodies, becoming brittle and snapping with regular usage and movement. The one tell-tale sign is that the afflicted's skin develops a pale green hue from the decay. The most common forms of death from this ailment are high blood toxicity and internal bleeding from a bone shard rupturing a vital organ.",
          cure: ''
        },
        {
          name: 'Bloodfungus',
          symptoms: "A parasitic mushroom spread by internal contact with spores, bloodfungus grows mycelium throughout the mortal body, feeding on the nutrients passed through the digestive tract and blood stream. After two months of relatively silent incubation, the mycelium will flower, bursting small fruiting-body stalks the size of an index finger from the skin along the afflicted's appendages, which flower in a day and quickly begin to release spores. Further, the mortal's nervous system is affected, producing extreme anxiety unless they seek out contact with other mortals.",
          cure: ''
        },
        {
          name: 'Devil Rot',
          symptoms: "A horrible disease caused by contact with devils and demons, the vicitm's flesh becomes hotter and hotter to the touch. While victims eventually spontaneously combust, in the meantime they gain resistance to fire and their touch does an additional 1d6 heat damage.",
          cure: ''
        },
        {
          name: 'Moor plague',
          symptoms: "An unplesant illness caused by scratches and cuts in foul swamps, this illness slowly turns the victim's skin green; additionally, the victim begins to emit the most unpleasant stench. Victims are Slowed while suffering this disease.",
          cure: ''
        },
        {
          name: 'Salt plague',
          symptoms: "This unpleasant disease feeds on the victim's salt levels. The victim eventually loses her humanity as her salt cravings become so intense that she becomes violent, seeking the salty blood of other victims.",
          cure: ''
        },
        {
          name: 'White Fog',
          symptoms: 'This illness attacks the eyes of the patient, slowly eroding his vision. Patients tend to see an increasingly opaque white fog obscuring their vision. Victims are Blind while suffering this disease.',
          cure: ''
        },
        {
          name: 'Wyrm Flu',
          symptoms: 'Supposedly an illness originally suffered by great dragons, this injury-transmitted disease is often suffered by those who survive attacks by wyrms and similar creatures. Victims are fatigued while suffering this disease.',
          cure: ''
        },
        {
          name: 'Dragon fever',
          symptoms: 'A magical disease contracted by being near Draconic influences for far too long. The symptoms start as a simple change in the eyes, making them take the look of a dragon, but other than that the paitent feels fine. If not treated then the second stage of the sickness begins, the patient becomes near obsessed with wealth and money, and will do anything to get it even at the expense of others. This may be subtle at first but once the third phase begins most people know exactly what has happened. The final phase involves a fever that if not treated constantly can kill the paitent. However if this last phase is survived, the patient finds themselves with some sign of Draconic nature, like horns or a small scales on parts of the body.',
          cure: ''
        },
        {
          name: 'Qi Disconnect Disorder',
          symptoms: 'You have advantage on physical skills made with just the right side of the body, disadvantage on all other attacks and skill checks. Cure with 1d4 days of meditation.',
          cure: ''

        }
      ]
    ]
  }
  const selected = lib.random(plagueData.unique)
  return selected
}
