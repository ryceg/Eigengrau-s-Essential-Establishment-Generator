/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Town } from '@lib'
import { createNPC } from '../NPCGeneration/createNPC'
import { createRelationship } from '../NPCGeneration/Relationships/createRelationship'
import { factionsForType } from '../Tools/factionsForType'
import { profile } from '../Tools/profile'

export const plothooks = [
  {
    summary: 'Roleplay Questions',
    probability: 50,
    type: ['event'],
    function () {
      return `${[
        `Nothing much ${['happens', 'seems to be going on', 'is happening'].random()}`,
        `Nothing of note ${['happens', 'seems to be going on', 'is happening'].random()}`,
        'No items of interest occurs',
        'Nothing happens',
        'Nothing really happens'
      ].random()}. <blockquote>${[
        'Perhaps now is a good time to ask a player a question, such as ',
        'Now would be a good time to give a player a chance to roleplay something from their past. Ask a question, such as ',
        'This is a great opportunity to get players to roleplay. Ask them questions like ',
        'This would be a good chance to build on player backstory. Ask them questions such as '
      ].random()}'${lib.createRoleplayQuestion()}'` +
      '<<button "Create another question!">><<set _question to lib.createRoleplayQuestion()>><<replace "#question">><<print _question.toUpperFirst()>><</replace>><</button>><div id="question"></div></blockquote>'
    }
  },
  {
    summary: 'The Magic Duel',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        profession: ['sorcerer', 'wizard', 'warlock'].random(),
        gender: 'man'
      })
      return `<<profile $town.guard>> think the party's mage is responsible for a magical duel fought atop the cathedral roof last night. Can the party find the ${profile(npc, 'real culprit')} before they are hunted down themselves? Do they dare, knowing that the criminal dispatched his last opponent with a frighteningly high level spell?`
    }
  },
  {
    summary: 'The Falling Woman',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        profession: 'rogue',
        gender: 'man'
      })
      return `A woman falls into the street from the second story window in front of the party and dies on impact. Soon after, a PC notices a ${profile(npc, 'hooded figure')} skillfully dropping, uninjured, from another second story window facing into the alley. The figure quickly disappears into a maze of side streets.`
    }
  },
  {
    summary: 'The Godfather',
    type: ['event'],
    function (town: Town) {
      // @ts-ignore
      const npc = setup.createDeadNPC(town, {
        background: 'charlatan'
      })
      return `The party stops to witness a funeral procession for a ${profile(npc, 'crime lord')}. Soon after passing, the party hears an explosion and sees a gigantic smoking fireball rise into the sky a block away.`
    }
  },
  {
    summary: 'The Cage',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble'
      })
      return `The party is invited to a manor by an ${profile(npc, 'important socialite')} for a potential job opportunity. When they arrive, they are told to wait in an empty room. Soon after entering the room, the party realizes they are locked in with a magical ward.`
    }
  },
  {
    summary: 'The Metal Dog',
    type: ['event'],
    questGiver: {
      object: 'building',
      type: 'tavern'
    },
    function (town: Town) {
      const npc = createNPC(town, {
        gender: 'woman',
        ageStage: 'child',
        background: 'urchin'
      })
      return `As you step out of the tavern, a ${profile(npc, 'disheveled girl')} smashes into you. 'Wilkenson's dog is loose again!' she exclaims as she attempts to hide behind you. You turn back in the direction she came to see a metal construct resembling a dog charging toward you.`
    }
  },
  {
    summary: 'The Pregnant Woman',
    type: ['event'],
    questGiver: {
      object: 'building',
      type: 'market'
    },
    function (town: Town) {
      const npc = createNPC(town, {
        gender: 'woman',
        background: 'commoner',
        note: 'Is currently pregnant.'
      })
      return `The PCs spot a ${profile(npc, 'pregnant woman')} walking through the bazaar. As she passes the baker's stall she quickly grabs a loaf of bread and keeps walking, favouring one of the PCs with a wink as she goes. Is she a thief or the wife of the store owner?`
    }
  },
  {
    summary: 'The Carriage Caretakers',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        socialClass: 'nobility',
        gender: 'man'
      })
      return `The party is mistaken by a ${profile(npc, 'wealthy man')} as carriage caretakers in a shantytown neighborhood. He hands them money to protect his vehicle. The legitimate caretakers challenge the PCs and try to steal the wealthy wagon. Does the party protect the rich man's vehicle or do they leave the locals to do as they please, risking later persecution by the noble client?`
    }
  },
  {
    summary: 'The Zoo',
    type: ['event'],
    exclusions (town: Town) {
      return town.professions.zookeeper.population > 0 && town.roll.wealth > 50
    },
    function () {
      return 'The city has a zoo filled with wondrous and dangerous creatures brought from far places. Just recently, some of the creatures escaped and now there is a royal reward for recovering the rare animals unharmed. How can this be done?'
    }
  },
  {
    summary: 'The Plague',
    type: ['event'],
    function () {
      return 'The sector of the city lies under quarantine after an outbreak of a mysterious fever. The party is being kept inside, and one of its members is starting to show symptoms of the illness. Do they try to escape, risking further contagion, or do they try to find a cure from the inside?'
    }
  },
  {
    summary: 'Indie',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        gender: 'man',
        profession: 'curator',
        lastName: 'Jones'
      })
      return `One member of the party is seen carrying an exotic weapon and the authority of the local museum is told about it. This ${profile(npc, 'museum curator')} has been an adventurer and masters some kind of whip weapon. He prepares an ambush to steal the exotic weapon, yelling at the PCs on sight, 'That belongs in a museum!'`
    }
  },
  {
    summary: 'The Tourist',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        gender: 'man',
        weight: 'obese',
        profession: 'tourist'
      })
      return `The PCs have messed up (possibly been framed) in the eyes of the King and have been apprehended. The King will release the party, if they allow a wealthy, influential, and obese ${profile(npc, 'merchant')} to come along on a dungeon delve, where there are sure to be many tight spaces.`
    }
  },
  {
    summary: 'The Blacksmith Competition',
    type: ['event'],
    questGiver: {
      object: 'building',
      type: 'smithy'
    },
    function (town: Town) {
      // @ts-ignore
      const smithy = lib.findInArray(town.buildings, 'buildingType', 'smithy') || setup.createNewBuilding(town, 'smithy')
      const npc = createNPC(town, {
        profession: 'blacksmith'
      })
      createRelationship(town, npc, smithy.associatedNPC, { relationship: 'competitor on a contract' })
      lib.createReciprocalRelationship(town, smithy, npc, { relationship: 'competing blacksmith', reciprocalRelationship: 'competing business' })
      // TODO: fix this
      return `Two blacksmiths, ${profile(smithy.associatedNPC)} of ${smithy.name} and ${profile(npc)} are in competition to create better weapons for a lucrative contract. ${npc.firstName} approaches the PCs to try the weapons and plead their virtues to the King. He also claims his competitors are playing dirty.`
    }
  },
  {
    summary: 'Kindergarten Magic',
    type: ['event'],
    questGiver: {
      object: 'faction',
      type: 'wizards'
    },
    exclusions (town: Town) {
      return town.population > 3000 && town.roll.wealth < 90
    },
    function (town: Town) {
      const faction = factionsForType(town, 'type', 'wizards')
      const npc = createNPC(town, {
        background: 'sage',
        profession: 'wizard'
      })
      return `Street urchins are rumored to have special powers. A ${profile(npc, 'representative')} of ${profile(faction)} approaches your party to investigate. In reality, they are learning magic from an unknown source. The children have less inhibition and magical control, but have much more mana and capability of replenishing mana, making them dangerous magic users.`
    }
  },
  {
    summary: 'The Crystal Ball',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'merchant',
        gender: 'man',
        profession: 'merchant'
      })
      return `'Psst, do you want to buy a crystal ball that really works? It's cheap!' says a ${profile(npc, 'shady character')} while sneaking up on the PCs from an alley. The price really is cheap, and you might even lead the PCs to believe the ball works when they try to use it for petty things, but it is unreliable, maybe even cursed. And the big problem is that one or more groups of NPCs badly want this crystal ball.`
    }
  },
  {
    summary: 'The Coach Crash',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        gender: 'man'
      })
      const secondNpc = createNPC(town, {
        background: 'noble',
        gender: 'man'
      })
      return `Two speeding coaches collide, leaving a bloody scene and angry families. The road is blocked, and the <<profile $town.guard>> seem disinterested in assisting with either clearing the road or arbitrating between a ${profile(npc, 'man')} and ${profile(secondNpc, 'another man')} from the other coach.`
    }
  },
  {
    summary: 'The One True God',
    type: ['event'],
    function () {
      return 'There is but one accepted religion in town. What about the party cleric who serves what is here deemed a false god?'
    }
  },
  {
    summary: 'The Siege Ship',
    type: ['event'],
    questGiver: {
      object: 'building',
      type: 'docks'
    },
    function () {
      return "A fast ship in the bay is bombarding the helpless port with siege engines. It's out of range for the locals to deal with, and possibly not alone."
    }
  },
  {
    summary: 'The Werewolf Maiden',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'commoner',
        gender: 'woman',
        note: 'Is a werewolf.'
      })
      return `The PCs hear shrieks from a dark alley where a ${profile(npc, 'young woman')} just went. Under the full moon, she is painfully turning into a werewolf for the first time.`
    }
  },
  {
    summary: 'The Disturbed Cemetary',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        profession: 'wizard',
        gender: 'man'
      })
      return `There have long been rumours of the cemetery being desecrated by someone stealing the corpses. One night the PCs chance upon the ${profile(npc, 'necromancer')} walking home with newly animated undead.`
    }
  },
  {
    summary: 'The Convalescent',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        gender: 'woman'
      })
      return `${profile(npc)} seeks the protection of the PCs. To grant it makes her enemies the PCs' enemies, and gives them the responsibility to protect a high-profile, fragile person who can't or won't leave town.`
    }
  },
  {
    summary: 'The Thieves Fun',
    type: ['event'],
    questGiver: {
      object: 'faction',
      type: ['thieves', 'assassins']
    },
    function (town: Town) {
      const faction = factionsForType(town, 'type', 'thieves')
      return `PCs are marked by a ${profile(faction, 'guild of thieves')}, for a contest. Low-skill, would-be guild members keep targeting the party with attempts on their health or goods.`
    }
  },
  {
    summary: 'The Spoiled Kid',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        gender: 'man',
        ageStage: 'child',
        race: 'human'
      })
      return `The ${profile(npc, 'spoiled child')} of a noble finds a PC has something he just *has to have*. The noble's staff does what it can to acquire it, by nearly any means necessary.`
    }
  },
  {
    summary: 'The Bad Architect',
    type: ['paper'],
    function () {
      return "A string of building construction accidents has occurred lately throughout the city. Fortunately, no one's been seriously hurt, but the accidents are increasing in size and damage. The local guild has put up flyers asking for help in solving their problem."
    }
  },
  {
    summary: 'Pooh Sticks',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        gender: 'man',
        ageStage: 'child'
      })
      return `As the PCs walk across a bridge over the river that cuts through town, they notice a couple of young boys standing near the edge of the bridge. They each have a large rock in their hands, and are watching one of the approaching river boats with smiles on their faces. As the boat gets closer, ${profile(npc, 'one of the boys')} raises his rock as if he is going to drop it.`
    }
  },
  {
    summary: 'The Corrupt Guards',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'soldier',
        gender: 'man',
        profession: 'guard'
      })
      return `Down the dimly lit alley, two guards can be seen beating a kneeling man. ${profile(npc, 'One')} rips a coin purse from the kneeling man's belt and says, 'Don't be late next month, old man.'`
    }
  },
  {
    summary: 'The Umber Hulk',
    type: ['event'],
    exclusions (town: Town) {
      return town.population > 3500
    },
    function () {
      return 'As the PCs are travelling from one district to another they are confronted by a traffic jam. A building has fallen in and the umber hulk responsible is hiding, waiting for a snack to move near it.'
    }
  },
  {
    summary: 'The Double Gunshot Suicide',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        gender: 'man'
      })
      return `${profile(npc, 'Someone')} falls out the window of a high building. It wasn't suicide as he had his hands and feet bound together and three large sacks of gold tied around his neck. What will be more important, the murder or the money?`
    }
  },
  {
    summary: 'The Generous Mark',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        gender: 'man'
      })
      return `A ${profile(npc, 'rich man')} walks through a bad part of town with obvious riches and money. If mugged, he gives it willingly. He has been doing this for the last three days.`
    }
  },
  {
    summary: 'Doppelganger Dead Or Alive',
    type: ['paper'],
    function () {
      return "The piece of paper bears large block letters, stating 'WANTED', with an illustration underneath- the faces below bear a remarkable similarity to your own..."
    }
  },
  {
    summary: 'Eggs',
    type: ['paper'],
    function () {
      return "The paper has the headline 'HENS STOPPED LAYING, EGGS COST 2 SILVER! Apparently, all hens in the area have stopped laying eggs, and has driven the price of eggs sky high."
    }
  },
  {
    summary: 'Orc Captain',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        race: 'orc',
        hasClass: true,
        profession: 'barbarian',
        background: 'criminal'
      })
      return `Wanted Dead or Alive – ${profile(npc)}, Orc Chieftain to the south! Warning: very heavily armed and dangerous. Has many henchmen. Reward: <<money 100000>>’`
    }
  },
  {
    summary: 'Hubert',
    type: ['paper'],
    exclusions (town: Town) {
      return town.population > 3000
    },
    function (town: Town) {
      const faction = factionsForType(town, 'type', 'wizards')
      return `${'‘Missing: a large turtle named Hubert who has escaped from the research department at ' + '<<link "'}${JSON.stringify(faction.name)}">><<set $currentPassage to {faction: ${JSON.stringify(faction)}}>><<goto "FactionProfile">><</link>> . Please return if found!’`
    }
  },
  {
    summary: 'Big Chickens',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        gender: 'woman',
        profession: 'sorcerer'
      })
      const cabinTippy = lib.createAutoTippy(lib.cabin)
      return `Chicken Wrangler Needed! Some jerks smashed my coop and now 100 chickens are loose. <<money 100>>/chicken to return them, no questions asked.’ (Poster is True Neutral ${profile(npc, 'witch')} that lives in ${cabinTippy(lib.articles.output('cabin'))} in old haunted forest; all the chickens have been enlarged.)`
    }
  },
  {
    summary: 'Guard The Garlic',
    type: ['paper'],
    exclusions (town: Town) {
      return town.population > 500
    },
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        profession: 'noble',
        note: 'Is hosting a banquet for vampires.'
      })
      return `${profile(npc, 'I')} need men to form a small honour garrison for the banquet I am holding in my manor. Important people are involved, so discretion is mandatory. <<money 20000>> per person, payed upfront. No questions asked. (All the guests are vampires.)`
    }
  },
  {
    summary: 'Books',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'sage',
        profession: 'librarian'
      })
      return `${profile(npc, 'My')} book store has a shipment of rare books coming in and needs people to help unload them. Will pay 100 gold per person and not responsible for any injuries incurred on the job. (Caution: dangerous magic and pet books around.)`
    }
  },
  {
    summary: 'Rat Exterminator',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town)
      return `Exterminator needed: ${profile(npc, "I've")} got a mess of rats in my basement. Bring me 10 rat tails in return for payment. (Listed address has no basement and owner has no rat problem. The advert has a typo and should point to a house further down the way.)`
    }
  },
  {
    summary: 'Sunk Ore',
    type: ['paper'],
    function () {
      return 'Strong Swimmer Needed! My simpleton apprentice left my ore cart unattended on the bridge and the blasted thing tumbled into the river! Hopefully the ore is still in there somewhere, I’ll pay gold to anyone who can get me my ore!'
    }
  },
  {
    summary: 'Sick Granny',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        ageStage: 'elderly',
        gender: 'woman',
        hasClass: false
      })
      return `Sick Grandmother: My ${profile(npc, 'grandmother')} is sick and needs a shipment of medicine. Our normal courier has gone missing, so we desperately need it delivered. Expedited fee available with a bonus upon delivery (Grandma makes a mean elven bread.)`
    }
  },
  {
    summary: 'Squirrel Hunting',

    type: ['paper'],
    function () {
      return 'Squirrel Hunting: A squirrel has been seen in town stealing jewellery from citizens. We think there may be more than one squirrel involved — they always head west after the theft. They need to be captured or killed; a bonus available if stolen items are returned.'
    }
  },
  {
    summary: 'Stolen Earrings',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        gender: 'woman'
      })
      return `Earrings Stolen: ${profile(npc, 'My')} wagon was robbed by bandits in the eastern forest. Among the items taken where heirloom earrings that were given to me by my mother. Please find them. Reward available.`
    }
  },
  {
    summary: 'Magic Bakery',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        profession: 'baker',
        hasClass: false
      })
      return `TEST SUBJECT NEEDED! ${profile(npc, 'We')} at the Barrington Bakery are looking for subjects to test out our new magical breads. We infuse magic into the mixing process for a, hopefully, tasteful bread. You will need to taste each bread, and have our scholar review the side effects. You will be paid per day.`
    }
  },
  {
    summary: 'Trophy Arrow',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        profession: 'alchemist',
        hasClass: false
      })
      return `Lost Arrow: While practicing with a bow, my son lost a trophy arrow (he was not supposed to use). He was practicing in the Northern plains and thinks the arrow went into the forbidden forest. Please retrieve this arrow. As an ${profile(npc, 'alchemist')}, I will pay in healing potions.`
    }
  },
  {
    summary: 'Goblin Encampment',
    type: ['paper'],
    function () {
      const goblins = lib.goblins.create()
      const readout = lib.goblins.readout(goblins)
      return `Goblin encampment: A ${lib.createTippyFull(readout, 'goblin encampment')} has appeared in the Southern part of town across the ravine. They’ve been there for days and don’t seem to be aggressive, but we can’t be so sure. Find out what they’re doing — if they’re a threat, please dispatch with them.`
    }
  },
  {
    summary: 'Wandering Skeleton',
    type: ['paper'],
    function () {
      return 'Wandering Skeleton: Wandering Skeleton seen on the outskirts of town. It appears armed with a sword, shield and horned helmet. Dispatch this skeleton and we’ll offer you 10% off anything in town.'
    }
  },
  {
    summary: 'Kobold Flour',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        profession: 'alchemist',
        hasClass: false
      })
      return `Kobold Flour: ${profile(npc, 'Local baker')} seeks Kobold Flour for the upcoming Monster festival. This specialty item can only be found in Kobold encampments. Will pay <<money 1000>> per pound (maximum of 100 pounds).`
    }
  },
  {
    summary: 'Bard Wanted',
    type: ['paper'],
    function (town: Town) {
      // @ts-ignore
      const building = lib.findInArray(town.buildings, 'buildingType', 'tavern') || setup.createNewBuilding(town, 'Tavern')
      lib.logger.info('Taverns:', building)
      return `${profile(building)} is looking for a bard to entertain the crowds on Thursday Nights (mug for a copper night).`
    }
  },
  {
    summary: 'Armed Escort Needed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        profession: 'merchant',
        hasClass: false,
        background: lib.random(['noble', 'commoner'])
      })
      return `${profile(npc, 'Merchant')} looking for armed security to escort us to ${lib.createTownName()}.`
    }
  },
  {
    summary: 'Mushroom Forager',
    type: ['paper'],
    function () {
      return 'Our beloved mushroom forager, has not returned from the forest. He was last seen four days ago. Need help finding him(her?)!'
    }
  },
  {
    summary: 'Lost Mail',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        hasClass: false
      })
      return `Lost mail! Important documents might have been intercepted. The courier I’ve been expecting has not arrived. Please inquire at the City Hall, ask for ${profile(npc)}.`
    }
  },
  {
    summary: 'Sporting Match',

    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false
      })
      return `The town of ${lib.createTownName()} has challenged us to our annual match of Shinty (or similar sport). Let’s show them who’s best, and get that trophy back where it belongs! Contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Tarot Cards',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        profession: 'seer',
        gender: 'woman',
        hasClass: false
      })
      return `Lady ${profile(npc, npc.firstName)} will read your future in the cards. I know you will show up. Where am I? Don’t worry, dear. Fate will guide you.`
    }
  },
  {
    summary: 'Koboliam Ore',
    type: ['paper'],
    function (town: Town) {
      // FIXME
      // @ts-ignore
      const smithy = lib.findInArray(town.buildings, 'buildingType', 'smithy') || setup.createNewBuilding(town, 'Smithy')
      return `Koboliam Ore Needed: A local ${profile(smithy.associatedNPC, 'blacksmith')} needs Koboliam Ore, which is only found in the Myriad caves to the North. Once a Kobold stronghold, this abandoned cave is full of traps and possibly other dangers — will pay top gold for each block of Ore.`
    }
  },
  {
    summary: 'Burial Escort Needed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false
      })
      return `Burial Escort needed: Our recently deceased father needs to be buried in the family lot, six miles north through the badlands. A small party escort is required in case of trouble. Contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Bandit Kidnappers',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'noble',
        gender: 'woman',
        ageStage: lib.random(['child', 'young adult'])
      })
      return `Bandit Kidnappers! Our ${profile(npc, 'beloved daughter')} has been captured by Bandits! They have not made any demands, but we want her back. They were last seen Northwest of the old tower — a reward for our daughter (alive), plus a bonus for the head of each bandit.`
    }
  },
  {
    summary: 'Family Bandits',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: 'fighter',
        ageStage: lib.random(['child', 'young adult']),
        gender: 'man'
      })
      return `Family Bandits! My ${profile(npc, 'son')} and his two friends have left the village to become bandits. Find them and teach them the error of their ways. Reward if they return — must be alive.`
    }
  },
  {
    summary: 'Flying Monkeys',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Flying Monkeys: During a recent storm, Flying Monkeys came and took our poor family dog. They live in the Julliad mountains. Please bring back our precious dog — our children are lost without them. We don’t have much in money, but as farmers we can reward you with rations for all your travels. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Magnificent Seven',
    type: ['paper'],
    function () {
      const bandits = lib.createAutoTippy(lib.bandits)('bandits')
      return `Magnificent Seven: Our villagers overheard ${bandits} who plan on raiding our town in one week’s town. We seek seven or more strong warriors who will help defend us.`
    }
  },
  {
    summary: 'Traveling Bards',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: 'bard'
      })
      return `Troupe of traveling bards need a few strong individuals to help schlep and set up our equipment on our world tour. Can pay in booze and lodging. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Door to Door',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'merchant',
        note: 'Is definitely not involved in a pyramid scheme.'
      })
      return `Detail-oriented individuals needed to go door-to-door to market my magical floor-sucker-cleaner. Commission based. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Library Guards',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: 'wizard'
      })
      return `Book keepers needed! Not really. Bandit-wizards have been trying to steal from my personal library of arcane books. Need tough, preferably illiterate, bodies to defend collection until I can secure safer storage. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Destroy The Bell',
    type: ['paper'],
    exclusions (town: Town) {
      return town.population > 5000
    },
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false
      })
      return `Tower Demolition Sought: The four story bell tower has been deemed by the city council as a stain on the communities reputation, as it was built with ‘ill-gotten’ funds by the rencently disgraced and now former mayor, Cornul Glassen. The council is offering 500 gold to anyone who can reduce the bell tower, which was dedicated in his honor, to rubble without loss of life or other property in the town square. Plans must be approved by council before work can begin. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Bucket Festival',
    type: ['paper'],
    function () {
      const house = lib.createAutoTippy(lib.cabin)('house')
      return `Come join us for the first annual bucket festival! Bring a bucket and you favourite drinks to join in the festivities. Meet out back the delapited ${house} on the edge of town at any time. You know the one, you’ve seen it in your dreams.`
    }
  },
  {
    summary: 'Need Bartender',
    type: ['paper'],
    function (town: Town) {
      // @ts-ignore
      const building = lib.findInArray(town.buildings, 'buildingType', 'tavern') || setup.createNewBuilding(town, 'Tavern')
      return `Needed bartender. Looking to employ a bartender for my inn, ${profile(building)}. Must be able to listen to political rants on the slower days. NO GOBLINS`
    }
  },
  {
    summary: 'Weird Well Water',
    type: ['paper'],
    function () {
      return 'The well water has started tasting funny, someone should look into that.'
    }
  },
  {
    summary: 'Lost Boy',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        ageStage: 'child',
        gender: 'man'
      })
      return `LOST! Young boy named ${profile(npc, npc.firstName)}, he has been missing for over a week and was last seen going of to play by the river. Reward if found.`
    }
  },
  {
    summary: 'Lab Assistant',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: 'wizard'
      })
      return `Local ${profile(npc, 'spell caster')} looking for lab ‘assistant.’ Intelligence not required, but a high resistance to pain appreciated.`
    }
  },
  {
    summary: 'Mole Dispatch',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Mole Dispatch – a group of unusually large moles wreck our fields! We are in dire need of a someone who is getting rid of those pests. Payment in gold or products from our farmers market. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Sheep Disappearing',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        profession: 'farmer',
        background: 'commoner'
      })
      return `Sheep Numbers Dwindling – We don’t know who, or what, is killing our sheep, but we cant ignore it any longer. Over the last three months, we found several mother sheep and their newborns dead. We offer 10 gold coins for whoever finds out what has happened to our lifestock and ends this from happening again. Please contact ${profile(npc)} for details. (A were-sheep has been killing the other sheep, can be found out when the heard is observed, all sheep go away when this particular one comes close to them, or when the transformation happens during a clear moonlit night.)`
    }
  },
  {
    summary: 'Mines Hiring',
    type: ['paper'],
    function () {
      return 'A notice to those on hard times that the mines are hiring, the tag line on the bottom says ‘We’ve cleared out the danger that once struck our mine and threatened the safety of the miners, we are confident that resuming our operations shall be fruitful and safe for all.’ (Underneath that is a hand written note directly under the text, ‘So much for your confidence.’)'
    }
  },
  {
    summary: 'Deal of a Lifetime',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false
      })
      return `Deal of a lifetime! I’m willing to trade a lovely tin pot, painted with cornflowers and lilies (and showing a few holes, true, but that’s a plus, for you can add a few more and look at that, you’ve got a colander) for a cart. The cart needn’t be big, can even be tiny, in fact, just so that two, or better four, people could fit in it, with ample room for bags and sacks, if possible. Could be old, long as it rides well and has new wheels, and strong axles, so actually probably nothing made longer than a year or two ago would do. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Daughter Dying',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Cleric needed – Daughter Ill and Dying (A local ${profile(npc, 'father')} is worried because his daughter’s health has been rapidly declining. He needs someone with knowledge of medicine to determine what kind of illness… or poison or curse… is affecting her.)`
    }
  },
  {
    summary: 'Kobold Ate It',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true
      })
      return `Adventurers needed! Our Kobold in our previous adventuring party is currently missing and is in possession of an ancient and dangerous artifact. Problem is, he ate it. Please return the artifact in tact! The Kobold (Skrazz) can be returned dead, alive, or not at all for all we care. <<money 100000>> Reward. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Linguist Needed',
    type: ['paper'],
    function (town: Town) {
      const map = lib.treasureMap.create()
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        note: `has a ${map.tippyWord}`
      })
      return `Multi-Linguist Needed: While going through my pappy’s attic I found this really old ${map.tippyWord} that I’m pretty sure leads to something cool. The problem is, I can’t read it! Pretty sure it’s Celestial, Draconian or Elvish cuz the letters are all curly. If the map leads to some sweet treasure I’ll share it fairly with you! Please contact ${profile(npc, 'me')} for details.`
    }
  },
  {
    summary: 'Taste Tester',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'noble',
        profession: 'noble'
      })
      return `Taste-Tester Needed: Lord ${profile(npc, npc.lastName)} needs a qualified taste-tester for upcoming banquet to fill recently vacated position. Benefits include All you can eat food and drink, provided medical care, lodging and pay-per-taste. Dwarvish candidates preferred. Inquire at ${npc.lastName} Manor.`
    }
  },
  {
    summary: 'A Muse-ment',
    type: ['paper'],
    function (town: Town) {
      // @ts-ignore
      const building = lib.findInArray(town.buildings, 'buildingType', 'tavern') || setup.createNewBuilding(town, 'Tavern')
      const npc = createNPC(town, {
        hasClass: false,
        background: 'entertainer',
        profession: 'musician'
      })
      return `A Muse-ment Please: My brother, the head writer of our musical comedy duo is in a rut. He hasn’t been writing any good jokes for a while and I just can’t play backup to another lukewarm song like ‘there’s gnome place like home’. He needs something hilarious and inspiring to jump-start his creativity again. I’m taking him to ${profile(building)} tonight for drinks, and if you manage to orchestrate some weird and hilarious scene I’ll pay you <<money 1000>>. (by the way, don’t tell him I paid for this, just say I owe you money or something I don’t care) -${profile(npc)}`
    }
  },
  {
    summary: 'Strange Doll',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `FOUND: Stange child’s doll. Blue gingham dress, yellow yarn hair with blue satin bow, made of painted wood. Eyes are large and very lifelike, seeming to follow you around the room. IF YOU RECOGNIZE THIS DOLL PLEASE COME AND TAKE IT I’LL GIVE YOU <<money 500>>. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Lost Shorts',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `LOST SHORTS: please, this seems silly, but recently my favorite lucky shorts have gone missing! I’m sure someone stole them but I have no proof. I need them before the big poker tournament tomorrow and I will pay <<money 10000>> to whoever finds them! They are purple with green polka-dots and the back pocket has a recently-patched up rip. Also my name is written on the waistband. -${profile(npc)}, #4 Lake Park Ave. E`
    }
  },
  {
    summary: 'Who Am I',
    type: ['paper'],
    function (town: Town) {
      // @ts-ignore
      const building = lib.findInArray(town.buildings, 'buildingType', 'tavern') || setup.createNewBuilding(town, 'Tavern')
      const npc = createNPC(town, {
        hasClass: false,
        background: 'noble'
      })
      // #
      return `WHO AM I?: ${profile(npc, 'I')} woke up in a gutter this morning outside of ${profile(building)}. I do not remember who I am, where I am from, what my name is, anything. I have a large sack of gold on my person and I am currently renting at the Hill Street Inn and Tavern for the foreseeable future. If you assist me in regaining my lost memories I would be more than happy to properly compensate you, for it seems that whoever I am, it is a man of means.`
    }
  },
  {
    summary: 'Bouncers Needed',
    type: ['paper'],
    function (town: Town) {
      // @ts-ignore
      const building = lib.findInArray(town.buildings, 'buildingType', 'tavern') || setup.createNewBuilding(town, 'Tavern')
      // #
      return `${profile(building)} needs (at least one more) bouncer for annual all-you-can-drink QuaffFest Celebration tomorrow. Usual bouncer called in sick and can’t make it. Will pay 5s/hr and after your shift that evening all your drinks are free!`
    }
  },
  {
    summary: 'Bard for Hire',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: 'bard',
        gender: 'man'
      })
      return `BARD EXTRAORDINARE: Art is the purest expression of the soul, and no-one expresses themselves more eloquently than ${profile(npc)}, the hottest Bard to grace the realm. The Golem Guardian newspaper has called him, ‘A fresh voice, ${npc.name} will wow your tavern with his genre-bending style, and witty lyrics. A star in the making’. Send a pigeon and book him in now!`
    }
  },
  {
    summary: 'First Class Male',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        gender: 'man',
        note: 'Is very handsome.',
        profession: 'courier'
      })
      return `FIRST CLASS MALE: If you need a message that needs delivering, look no further than this ${profile(npc, 'First Class Male')}. With reasonable fees and lightning quick delivery, it’s not just the devilishly handsome good looks that make this the best way to tell someone you care. Speak to Dorian for more information.`
    }
  },
  {
    summary: 'Poor Pirate',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'sailor',
        profession: 'pirate'
      })
      return `Help wanted t’ return ${profile(npc, 'me')} property: Yesterday some o’ th’ young neighborhood scalawags stole me carved wooden leg while I were pissed in th’ gutter outside th’ Salty Strumpet. I can nah chase aft them t’ git it back ’cause me backup leg be mor’n ghastly. If’n ye can get back me leg I’ll pay ye 10 gold, it holds a lot o’ sentimental-type meanin’ t’ me.`
    }
  },
  {
    summary: 'Barghests Trap',
    type: ['paper'],
    function () {
      return 'BIG AWARD MONEY!! Near forest there is cave. In cave small monster. Need help with monster. WILL AWARD BIG MONEY!! (A barghest’s trap, prepared by goblins to lure adventurers in and devour them alive)'
    }
  },
  {
    summary: 'The Golden Goose',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Someone stole ${profile(npc, 'my')} chicken that lays all sort of metal eggs. Help me find it.`
    }
  },
  {
    summary: 'Secret About To Be Revealed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'noble'
      })
      return `My Family is about to find out about my secret. Good liars and problem solvers in need. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Bridge Collapsed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'merchant',
        profession: 'merchant'
      })
      return `The bridge collapsed again and I lost my wagon. Will pay good gold if bridge repaired, and more if wagon retrieved. Please contact ${profile(npc)} for reward. (Twist: Goblins have been booby trapping the bridge to steal the contents of wagons.)`
    }
  },
  {
    summary: 'Nothing Sexual',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'noble',
        gender: 'man'
      })
      return `What up? We’re three cool guys who are looking for other cool guys who want to hang out in our party mansion. Nothing sexual. Dudes in good shape encouraged. If you’re fat, you should be able to find humor in the little things. Again, nothing sexual. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Missing Pet',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Missing pet! My pet has been missing since three nights ago and has not returned home. If found return to ${profile(npc)}, whoever finds him will be rewarded greatly! (Twist: the missing pet is actually a small dragon.)`
    }
  },
  {
    summary: 'Basilisk Eggs Needed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: ['warlock', 'wizard'].random()
      })
      return `Need basilisk eggs for experiment! Big reward! Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Missing Skeletons',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: ['warlock', 'wizard'].random()
      })
      return `Missing: One (1) semi-intelligent skeleton. 5 feet 10 inches. Last seen wearing blue cloak. He was sent to the market for some groceries five days ago, and hasn’t come home. His creator misses him very much. <<money 5000>> & four (4) Stones of Farspeech upon return. Please contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Nice Guy',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Love of my life! Please, I need your help to make me look cool in front of the love of my life, so that I can win her heart! I could never hope to win her by normal means since I’m poor. I will give you all of my life savings in return. Bonus if you look scary! Please contact ${profile(npc)} for details. //DM note: The plan is to have the players perform as crooks flirting and trying to pick up the girl and in turn be chased away by the contract giver to make him look cool.`
    }
  },
  {
    summary: 'Be Your Own Boss',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Need to make silver quick? Why not platinum! Rent doesn’t pay itself ya’ know! Find ${profile(npc)} and ask him how you can become your own boss and never have to work a day in your life! (Can be a quest to thwart a predatory pyramid scheme OR be the starting branch in a murder investigation once Raul is found murdered, likely by one of the people he recruited.)`
    }
  },
  {
    summary: 'Work From Home',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `WORK FROM HOME: Easy money that anyone can do! Finally live your dream lifestyle! Be your own boss! Make thousands in your first week! Retire early! Don’t be left out! Contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Discrete Healer Needed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'noble',
        note: 'Runs a charity for helping disadvantaged or discriminated minorities.'
      })
      return `Open minded and discrete healer wanted. Must interview. Contact ${profile(npc)} for details. (Despite the suspicious wording, the job is treating people from discriminated-against ancestries or with embarrassing deformities that have been persecuted, passed over, or financially exploited by other healing organizations. The pay is low, but you make solid allegiances. Word of your kindness spreads among the hidden downtrodden and you may find welcome far away.`
    }
  },
  {
    summary: 'Incredible Opportunity',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Sales assistant wanted. Incredible pay! Contact ${profile(npc)} for details! It’s a multi-level marketing job. The job poster gives you a sales talk about their wonderful liniments and gizmos. They do work, but they are overpriced. You have to make a bulk purchase of the items and then try to resell them for a profit. You are unlikely to find the buyers needed to turn a profit and are stuck with too much stock.`
    }
  },
  {
    summary: 'Horsebreaker Needed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        profession: 'courier'
      })
      return `Horsebreaker needed! Inquire at the Post Office, ask for ${profile(npc)}. The job is preparing young horses to accept the saddle and harness so they can be ridden or pull carts. They must also be taught basic commands and gaits. The job is successful if the handler can get the horses to calmly accept riders and obey simple orders.`
    }
  },
  {
    summary: 'Jeweller Needed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'merchant',
        profession: 'jeweller'
      })
      return `Do you think you know your gems? A grand test awaits at ${profile(npc, npc.lastName)}'s` + ' Emporium. Only those who truly appreciate mines and minerals should apply! A local jeweller’s outfit acquired a large stock of specialty mineral samples and gems from a flash sale of unclaimed shipments. They need them identified but want someone, preferentially a dwarf, who isn’t going to undersell them. The first part of the job is a basic knowledge test and then they move onto the unusual samples. They pay in wholesale gems of the player’s choice.'
    }
  },
  {
    summary: 'Music Tutor Needed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Music tutor: My son wants to be a bard, but the kid has absolutely no talent. I want to enjoy my time at home without the shrieking of his horrible electric lute destroying the peace. I’ll pay you <<money 1000>> to give him some lessons, and if after a couple his ‘Music’ becomes less painful, I’ll give you a <<money 10000>> bonus. Contact ${profile(npc)} at 75 Leyton Ave.`
    }
  },
  {
    summary: 'Just No MIL',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Help! My mother-in-law is coming to town for a visit and ${profile(npc, 'I')} need someone professional to inflict me with some awful disease or other affliction so I have an excuse to stay in bed and not interact or be around her. Please no afflictions that cause perminant damage or death. Mildly life-threatening ok. Meet me at 10pm behind that bar that smells like old goat. You know the one. <<money 5000>> upon disease delivery.`
    }
  },
  {
    summary: 'Lost Hat',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        background: 'entertainer',
        profession: 'bard'
      })
      return `Help recovering property! This is your local bard, ${profile(npc)}, and if you’ve seen me lately you know that I haven’t quite been myself. The truth is I lost my prize peacock feather hat in a wager at the Lusty Mermaid two days ago. The man who won it from me said I could pay him back for the value of the hat, but when I went to the inn he was staying at I found he skipped town without even paying his tab! (And I found out he cheated at that game of cards by the by) Please, I need a skilled ranger or another who is good at tracking to get back my hat! I’ll pay you 4,000 gold to go with me to get it, and I’m willing increase the price to 5,000 if our quarry proves elusive.`
    }
  },
  {
    summary: 'Birthday Party',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'noble'
      })
      return `URGENT: It is my little pookums birthday and the entertainment cancelled! Anyone may apply as replacements at the ${profile(npc, npc.lastName)} estate.`
    }
  },
  {
    summary: 'Berate Me',
    type: ['paper'],
    function (town: Town) {
      // @ts-ignore
      const building = lib.findInArray(town.buildings, 'buildingType', 'tavern') || setup.createNewBuilding(town, 'Tavern')
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        note: 'For whatever reason, loves being abused.'
      })
      // #
      return `NEEDED: Someone competent in the ways of word to berate, yell, and speak ill of ${profile(npc, 'me')}. Willing to pay. Discretion is key. Meet me during the night 2 alleys up from ${profile(building)} in order to discuss terms.`
    }
  },
  {
    summary: 'Pirates Lost Stuff',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'sailor',
        profession: 'pirate'
      })
      // #
      return `LOST: 3 peg legs, a hook, 5 eye patches, and a talking parrot. If found please return to ${profile(npc)} of ‘The Luckiest Crew’ down at the pier.`
    }
  },
  {
    summary: 'Furniture Movers',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        ageStage: 'elderly',
        gender: 'woman',
        profession: lib.random(['sorcerer', 'warlock', 'warlock']),
        note: 'Is not a very nice witch.'
      })
      return `HELP WANTED: ${profile(npc, 'poor old widow')} requests the assistance of any strong and able persons to rearrange some furnishings. (She is a witch in a small town of elderly folks that help her trick strong strangers in order to preserve their own lives.)`
    }
  },
  {
    summary: 'Huckleberry',
    type: ['paper'],
    function (town: Town) {
      // @ts-ignore
      const building = lib.findInArray(town.buildings, 'buildingType', 'tavern') || setup.createNewBuilding(town, 'Tavern')
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      // #
      // <<link ' + JSON.stringify(tavern.name) + '>><<set $currentPassage to {key: "tavern", index: ' + JSON.stringify(tavernIndex) + ', building: ' + tavern + '}>><<run console.log("Set $currentPassage.")>><<set $building to ' + tavern + '>><<goto "TavernOutput">><</link>>
      return `Fence need painted. Good pay. Contact ${profile(npc)} at ${profile(building)}. Twist is, the fence is 10 feet tall and almost a mile long.`
    }
  },
  {
    summary: 'Teddy Wanted',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        gender: 'woman',
        race: 'half-orc'
      })
      return `ISO: Skilled toymaker, it’s my daughter’s birthday and she wants a teddy. I can compensate for any materials you use. (This was posted by an ${profile(npc, 'orc')} and her husband, there’s an address near the bottom with a smiley face. The 6-year old half-orc wants a GIANT teddy.)`
    }
  },
  {
    summary: 'Durable Idiot',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: 'wizard'
      })
      return `IN NEED OF DURABLE IDIOT, WILL BE WORKING WITH IMPOSSIBLE GEOMETRIES. IDIOCY NOT NEEDED BUT DESIRED. BRING FRIENDS. snacks provided! (This was wrote incredibly hastily by a ${profile(npc, 'desperate wizard')}, and his wife. The words ‘snacks provided’ are in much cleaner handwriting toward the bottom, obviously added as it was being posted.)`
    }
  },
  {
    summary: 'Candy Wanted',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        ageStage: 'child'
      })
      return `My brother an ${profile(npc, 'me')} want candy!!! (This note is barely legible and is tacked at the very bottom of the board.)`
    }
  },
  {
    summary: 'Book Stacking',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        profession: 'librarian',
        ageStage: 'elderly',
        gender: 'woman'
      })
      return `Having trouble stocking all these books! Will pay for some big and strong people to help me! (This was posted by a ${profile(npc, 'small old woman')} who owns the local library.)`
    }
  },
  {
    summary: 'Thieves Cant Thieve Here',
    type: ['paper'],
    function () {
      return 'A set of seemingly innocuous symbols is carved into the side of a barrel underneath the board, all in Thieves’ Cant. The symbols are being used for a purpose they’re very much not meant for, and the message is patchy and uncertain. ‘Dangerous Area.’ ‘Owner not home.’ ‘Owner is Vigilant.’ Meaning: One for the rogues! The local thieves’ guild has found that their missions in the area have ended… poorly. Their new recruits are raving about some kind of spirit, and the veterans insist that something just isn’t right.'
    }
  },
  {
    summary: 'Demolition Help Needed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        profession: 'construction Worker'
      })
      return `Need demolition help: A demolition company ${profile(npc, 'contractor')} is looking for outside help to clear out and then tear down a vacant house. The reward can be money or allowing the players to scavenge what they find inside the house. (What the company doesn’t tell the adventurers is that no one will do the job because of the powerful stench coming from the house. Exploring the house reveals a locked (mechanically or magically) wooden door leading to the basement of the house. The basement contains 1d4 Dretchs accidentally summoned by the previous owner.)`
    }
  },
  {
    summary: 'Mimic Hunt',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Mimic hunt! Mimics are running rampant throughout a house. Find and kill 2D6 mimics. 1-6 mimics gets <<money 10000>>, 7-11 gets <<money 30000>>, and 12 kills gets <<money 50000>>. Contact ${profile(npc)} for the location.`
    }
  },
  {
    summary: 'Crawling Claws',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Being followed by crawling claws. Kill 1D4 crawling claws. Reward of <<money 4000>>. Contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'More Rats',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `House is overrun with rats. Exterminate 4D10 rats and 2D4 dire rats. Reward of <<money 4500>>. Contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Lost Cat',
    type: ['paper'],
    function (town: Town) {
      const cat = lib.createAutoTippy(lib.cat)('cat')
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Help find my lost pet ${cat}! Reward of <<money 3000>> to anyone who finds him. Contact ${profile(npc)} for details on him.`
    }
  },
  {
    summary: 'Bakery Delivery',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        profession: 'baker'
      })
      return `The ${profile(npc, 'baker')} has put out a poster, looking for someone to deliver pastries to the mischievous yet kind faeiry dragon that watches over the town from its lair in the woods outside.`
    }
  },
  {
    summary: 'Riddle Maker Needed',
    type: ['paper'],
    function () {
      return 'Looking for riddle maker. You make riddles, we buy ’em! For more information contact your local Wizards Association.'
    }
  },
  {
    summary: 'Internship Wanted',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        profession: 'squire',
        note: 'Wants to be an adventurer.',
        ageStage: 'young adult'
      })
      return `WANTED: Internship with seasoned adventurers. I’ve admired heroes all my life and want to try my hand at it! I’m hardworking, loyal, and a team player. Can give references. Contact ${profile(npc)} for my resume.`
    }
  },
  {
    summary: 'Thieves Guild Movers Needed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'acolyte',
        profession: 'priest'
      })
      return `Victimless Instigators of Loot Extraction is seeking henchmen for transportation of merchandise. Some risk is involved. Must be capable of intercepting and stopping pursuers. If interested, head to Church of St. Deegho and ask for ${profile(npc)}.`
    }
  },
  {
    summary: 'Trapped',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: 'wizard'
      })
      const secondNpc = createNPC(town, {
        hasClass: true,
        gender: 'man'
      })
      createRelationship(town, npc, secondNpc, { relationship: 'friend' })
      return `Help! My good friend ${profile(secondNpc)} has been trapped! My scrying reveals he is stuck in a 10-foot room. He has a chest of valuables with him, but needs help getting it and him out of the dungeon safely! Come to the Tower Tisential if you are willing to help! -the Wizard ${profile(npc, npc.firstName)}.`
    }
  },
  {
    summary: 'Bardic Inspiration Needed',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        background: 'entertainer',
        profession: 'bard'
      })
      return `Seasoned adventurers needed! ${profile(npc, 'Bard')} here, tell me the tales of your great adventures, I need some inspiration for my books/songs. Payment will be determined by how good your stories are.`
    }
  },
  {
    summary: 'The Old Mill',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        profession: 'miller'
      })
      return `Just bought the old mill outside of town. But there’s something living in it. Will pay <<money 5000>> and free milling service for a year to anybody who clears out the infestation and makes it safe for our family to set up! Contact ${profile(npc)} for details.`
    }
  },
  {
    summary: 'Domain Lines',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'noble',
        race: 'elf'
      })
      const secondNpc = createNPC(town, {
        hasClass: false,
        background: 'noble',
        race: 'elf'
      })
      createRelationship(town, npc, secondNpc, { relationship: 'rival' })
      return `Help settle a minor dispute between two noble Elven houses! House ${profile(npc, npc.lastName)} is looking for adventurers to help draw the domain lines with the House ${profile(secondNpc, secondNpc.lastName)} border. If you are strong of arm and fleet of foot, inquire at the ${profile(npc, npc.lastName)} Manor.`
    }
  },
  {
    summary: 'The Cock-Fight',
    type: ['event'],
    exclusions (town: Town) {
      return town.population < 500 && town.roll.wealth < 10
    },
    function (town: Town) {
      const druid1 = createNPC(town, {
        hasClass: true,
        profession: 'druid',
        ageStage: 'settled adult'
      })
      const druid2 = createNPC(town, {
        hasClass: true,
        profession: 'druid',
        ageStage: 'settled adult'
      })
      const faction = factionsForType(town, 'type', 'druids')
      return `A dog and a large lizard are fighting each other in the center of town, surrounded by a crowd of onlookers. If asked, any of the bystanders will tell the party that these are two local druids who put on these shows in exchange for donations. The two druids, ${druid1} and ${druid2}, are more than happy to introduce the party to ${profile(faction)}.`
    }
  },
  {
    summary: 'The Painted Devil',
    type: ['event'],
    function (town: Town) {
      const npc = createNPC(town, {
        background: 'noble',
        race: 'elf'
      })
      return `A ${profile(npc, 'well dressed elf')} runs up to the party, desperately shouting something about a painting and a demon.`
    }
  },
  {
    summary: 'The Crack',
    type: ['event'],
    function (town: Town) {
      const faction = factionsForType(town, 'type', 'mercenaries')
      return `A huge crack has recently appeared in the center of the town square. ${profile(faction)} are keeping everyone away from the fissure, especially since it smells of sulfur and green fumes will occasionally puff out of it.`
    }
  },
  {
    summary: 'The Press Gang',
    type: ['event'],
    questGiver: {
      object: 'building',
      type: 'tavern'
    },
    function () {
      return 'Ten sailors come up to the party, laughing drunkenly. They seem interested in buying you all drinks, and are more than happy to chat and joke with anyone who seems jovial. If any PCs accept their offer of drinks, they will wake up to find themselves press-ganged into service on a pirate ship.'
    }
  },
  {
    summary: 'The Merchant Ship',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'soldier',
        profession: 'merchant'
      })
      return `Looking for adventure? Ready to leave this crummy town? Want to earn lots of gold? Ask for Captain ${profile(npc, npc.lastName)} at the docks.`
    }
  },
  {
    summary: 'A Lost Bunny',
    type: ['paper'],
    function (town: Town) {
      const bunny = lib.bunny.create()
      const readout = lib.bunny.readout(bunny)
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner'
      })
      return `Help find my lost rabbit ${lib.createTippyFull(readout, 'bunny')}! Reward of <<money 2>> to anyone who finds him. Contact ${profile(npc)} for details on him.`
    }
  },
  {
    summary: 'Dead or Alive',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: 'rogue',
        background: 'criminal'
      })
      return `‘Wanted Dead or Alive – ${profile(npc)}, master assassin! Warning: very heavily armed and dangerous. See attached picture. Reward: <<money 100000>>’`
    }
  },
  {
    summary: 'Brimstone!',
    type: ['paper'],
    function (town: Town) {
      const faction = factionsForType(town, 'type', 'clergy')
      return `Fire and brimstone! Eternal torture and damnation! That is what awaits those who reject ${profile(faction)}!`
    }
  },
  {
    summary: 'Experiment Subjects',
    type: ['paper'],
    function (town: Town) {
      const npc = createNPC(town, {
        hasClass: true,
        profession: 'wizard'
      })
      return `Local ${profile(npc, 'spell caster')} looking for willing test subjects. <<money 20000>> per experiment. <money 400000>> if you lose a limb.`
    }
  }
  // 'Help! Looking for druid to help persuade nature spirit to get out of my well. Water is poisoned.',
  // 'REPENT SINNERS - Temple of the Lady of Spring',
  // 'Attend the public execution of: Johnny "Two Heads" McGee, Kevin "The Fireball Kid" Laristan, and "Bob".'
]
