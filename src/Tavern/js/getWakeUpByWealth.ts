/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NPC, Tavern } from '@lib'
import { profile } from '../../Tools/profile'

export const getWakeUpByWealth = (tavern: Tavern): string => {
  const bartender = tavern.associatedNPC as NPC

  if (tavern.wealth === 'kingly') {
    return `In the morning, you're awakened to a knock on the door; apparently ${tavern.name} comes with a complimentary breakfast in bed. You get dressed and open the door, and one of the ${profile(tavern.barmaid, 'barmaids')} comes in wheeling a trolley, upon which is laden with toast, fruits, cured meats, porridge, and all kinds of cheeses with breads.`
  }

  if (tavern.wealth === 'aristocratic') {
    return `In the morning, you're awakened to the sound of a bell. Going downstairs to the bar area, you see that a continental breakfast has been set out for you. ${profile(bartender, bartender.firstName)} is standing behind the counter, pouring a beer which ${bartender.heshe} hands to you, asking if you slept well.`
  }

  if (tavern.wealth === 'wealthy') {
    return `When you wake, you pack your things and head downstairs to see that ${profile(bartender, bartender.firstName)} is waiting there, in case you wanted any breakfast before you left; ${bartender.heshe} says that there's hot porridge, breads and cheeses, and fruit if you'd like to pay the nominal fee of one silver for the breakfast.`
  }

  if (tavern.wealth === 'modest') {
    return `You head down after packing your things, and see that ${profile(bartender, bartender.firstName)} is sitting at one of the benches, chewing on a hunk of bread with cheese. The ${bartender.weight} ${bartender.manwoman} nods at you, and pauses, finishing chewing. When ${bartender.heshe} does finish, ${bartender.heshe} tells you that there's some bread and cheese left, if you want to pay the three copper for it.`
  }

  if (tavern.wealth === 'poor') {
    return [
      `You make your way down out of the ${tavern.wordNoun} and see ${bartender.name} has fallen asleep at a bowl of porridge. From the kitchen, you can smell something burning`,
      `You make your way down, and as you're leaving ${tavern.name}, you accidentally knock a cup over. From behind the bar, you hear ${profile(bartender, bartender.firstName)} yell out obscenities at you for disturbing ${bartender.hisher} slumber.`,
      `You start to make your way out of ${tavern.name}, careful not to disturb the patrons that have fallen asleep at their tables.`,
      `You smell something burning, and make your way down to check; when you get down to the kitchen of ${tavern.name}, you find ${profile(bartender, bartender.firstName)} sitting, chewing angrily over a bowl of burnt porridge.`
    ].random() as string
  }

  return [
    `You start to make your way out of the ${tavern.cleanliness} ${tavern.wordNoun}, and smell something burning, and make your way down to check; when you get down to the kitchen of ${tavern.name}, you find ${profile(bartender, bartender.firstName)} sitting, chewing angrily over a bowl of burnt porridge.`,
    `You can't help but shake the feeling that there's a smell clinging to your clothes after staying the night at ${tavern.name}.`
  ].random() as string
}
