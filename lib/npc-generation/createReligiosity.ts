import { fm, dice, closestMatch } from '..'
import { ThresholdTable } from '../src/rollFromTable'
import { Town } from '../town/_common'
import { NPC } from './_common'
import { random } from '../src/random'

export type ReligionStrength =
'fanatical true believer' |
'unshakingly devoted believer' |
'conspicuously faithful believer' |
'outspoken believer' |
'quiet true believer' |
'casual observer' |
'open-minded seeker' |
'cautious listener' |
'critical student' |
'outspoken cynic' |
'broken heretic'

export const religion = {
  strength: [
    // npc.name is a _______
    [100, 'fanatical true believer'],
    [90, 'unshakingly devoted believer'],
    [80, 'conspicuously faithful believer'],
    [70, 'outspoken believer'],
    [60, 'quiet true believer'],
    [50, 'casual observer'],
    [40, 'open-minded seeker'],
    [30, 'cautious listener'],
    [20, 'critical student'],
    [10, 'outspoken cynic'],
    [0, 'broken heretic']
  ] as ThresholdTable<ReligionStrength>,
  abstractGod: [
    'Our Lady', 'Our Mother', 'the Ancient Flame', 'the Ancient Oak', 'the Autumn Singer', 'the Bat', 'the Battle-Lord', 'the Bear', 'the Beast', 'the Beast-Tamer', 'the Beast-Wife', 'the Beauty Queen', 'the Blood-Bringer', 'the Burning Man', 'the Crone', 'the Cruel King', 'the Dark Lady', 'the Dark Lord', 'the Dark Prophet', 'the Death Harbinger', 'the Doom Harbinger', 'the Doom-Maker', 'the Eagle', 'the Earth-Mother', 'the Earth-Queen', 'the Enemy', 'the Eternal Light', 'the Eternal Sage', 'the Fair Maiden', 'the Fatespinner', 'the Felled Tree', 'the Fire Dragon', 'the Forest Keeper', 'the Frog', 'the Gloom-Spider', 'the Goddess', 'the Grain-Grower', 'the Great Huntress', 'the Great Protector', 'the Great Smith', 'the Horned One', 'the Judge', 'the King Beneath the Waves', 'the Lawgiver', 'the Life-Keeper', 'the Life-Tree', "the Light's Son", 'the Magic-Maid', 'the Messenger', 'the Mighty Hunter', 'the Mighty One', 'the Mighty Warrior', 'the Mischief-Maker', 'the Moon-Witch', 'the Mountain Forger', 'the Night Queen', 'the Oathkeeper', 'the Oracle', 'the Prophet', 'the Sacred Grove', 'the Savior', 'the Scorpion', 'the Sea Dragon', 'the Sea God', 'the Sea Queen', 'the Seductress', 'the Shadow', 'the Shadowkeeper', 'the Shadow-Serpent', 'the Shield-Maiden', 'the Ship-Taker', 'the Sky Father', 'the Soothsayer', 'the Soul-Collector', 'the Soul-Eater', 'the Spider', 'the Spring Maiden', 'the Starfinder', 'the Stone Dragon', 'the Storm Dragon', 'the Storm King', 'the Storm-Bringer', 'the Summer Mistress', 'the Sunkeeper', 'the Sword-Prince', 'the Thief', 'the Tormenter', 'the Tree Spirit', 'the Undying Light', 'the Unnamed One', 'the Unyielding Tyrant', 'the Voice', 'the Wandering Rogue', 'the War-Maker', 'the Watcher', 'the Watchful Eye', 'the Wind King', 'the Winemaker', 'the Winter Lady', 'the Wolf'
  ],
  saint: [
    'Almar the Holy', 'Amaya the Seeress', 'Bahak the Preacher', 'Bahruz the Prophet', 'Lira the Flamekeeper', 'Mozar the Conqueror', 'Prince Tarunal', 'Queen Kalissa', 'Rahal the Sunsoul', 'Raham the Lightbringer', 'St. Aemilia', 'St. Albus', 'St. Anglos', 'St. Antonia', 'St. Antonus', 'St. Austyn', 'St. Bardo', 'St. Beatrix', 'St. Berta', 'St. Bettius', 'St. Bryenn', 'St. Buttercup', 'St. Carolo', 'St. Cedrick', 'St. Cordelia', 'St. Cowhan', 'St. Cumberbund', 'St. Dorys', 'St. Dreddos', 'St. Dwayn', 'St. Edwynna', 'St. Elayne', 'St. Falstyus', 'St. Farcas', 'St. Florenzo', 'St. Gabrella', 'St. Gaiorgus', 'St. Goodkynd', 'St. Hal', 'St. Halcincas', 'St. Haroldus', 'St. Hemingwar', 'St. Heraclora', 'St. Hermioninny', 'St. Hieronymus', 'St. Inigo', 'St. Jordyn', 'St. Katrynn', 'St. Lannus', 'St. Leo', 'St. Leryo', 'St. Londyn', 'St. Magio', 'St. Marius', 'St. Markuz', 'St. Martyn', 'St. Matromus', 'St. Morrsona', 'St. Morwayne', 'St. Murkel', 'St. Mychel', 'St. Nyneva', 'St. Paolo', 'St. Parrinus', 'St. Perseon', 'St. Petyr', 'St. Podryck', 'St. Polly', 'St. Pratchytt', 'St. Rawynn', 'St. Regus', 'St. Ricarddos', 'St. Roberts', 'St. Robinus', 'St. Rowhan', 'St. Rowlynna', 'St. Sansima', 'St. Sessimus', 'St. Severus', 'St. Stynebick', 'St. Symeon', 'St. Theseon', 'St. Thoryn', 'St. Tolkkyn', 'St. Twayn', 'St. Xavos', 'the Deliverer', 'the Doomcaller', 'the Doomsayer', 'the Lawgiver', 'the Oracle', 'the Prophet', 'the Savior', 'the Seeker', 'the Shadowseer', 'the Soothsayer', 'the Starwatcher', 'the Truthsayer', 'the Voice', 'Zefar the Sorcer'
  ]
}

export function getReligiosityDescription (town: Town, npc: NPC) {
  const selectedGod = npc.religion.deity
  const religionDescription = [
    {
      strength: 100,
      gregariousness: 100,
      note: `${npc.name} is unashamedly a follower of ${selectedGod}, but ${npc.hisher} fanaticism is tempered by ${npc.hisher} gregarious nature.`
    },
    {
      strength: 100,
      gregariousness: 80,
      note: `${npc.name} is unashamedly a follower of ${selectedGod}, but ${npc.heshe} knows better than to be preachy or annoying about it.`
    },
    {
      strength: 100,
      gregariousness: 60,
      note: `${npc.name} is unashamedly a follower of ${selectedGod}, and ${npc.heshe} sometimes can get a little preachy.`
    },
    {
      strength: 100,
      gregariousness: 40,
      note: `${npc.name} is unashamedly a follower of ${selectedGod}, and ${npc.heshe} can get pretty preachy.`
    },
    {
      strength: 100,
      gregariousness: 20,
      note: `${npc.name} is unashamedly a follower of ${selectedGod}, and ${npc.heshe} is often quite pushy in ${npc.hisher} proselytizing.`
    },
    {
      strength: 100,
      gregariousness: 0,
      note: `${npc.name} is unashamedly a follower of ${selectedGod}, and ${npc.heshe} will just not shut up about it.`
    },
    {
      strength: 80,
      gregariousness: 100,
      note: `${npc.firstName} is a follower of ${selectedGod}, but is quite capable of avoiding making others feel uncomfortable about it.`
    },
    {
      strength: 80,
      gregariousness: 80,
      note: `${npc.firstName} is a follower of ${selectedGod}, but knows better than to talk about it to the wrong people.`
    },
    {
      strength: 80,
      gregariousness: 60,
      note: `${npc.firstName} is a follower of ${selectedGod}, but keeps ${npc.hisher} mouth shut when not associating with those that do not share ${npc.hisher} religion.`
    },
    {
      strength: 80,
      gregariousness: 40,
      note: `${npc.firstName} is a follower of ${selectedGod}, and can sometimes be a little bit judgey about others' choices in deities.`
    },
    {
      strength: 80,
      gregariousness: 20,
      note: `${npc.firstName} is a follower of ${selectedGod}, and will sometimes chastise others for following "worse" gods.`
    },
    {
      strength: 80,
      gregariousness: 0,
      note: `${npc.firstName} is a follower of ${selectedGod}, and lacks the social grace to avoid differences of opinion.`
    },
    {
      strength: 60,
      gregariousness: 100,
      note: `${npc.firstName} is a quiet follower of ${selectedGod}, but does not draw much attention to ${npc.hisher} choice of deity.`
    },
    // TODO: complete the two dimensional array.
    {
      strength: 60,
      gregariousness: 80,
      note: `${npc.name} is a quiet follower of ${selectedGod}, but does not draw much attention to ${npc.hisher} choice of deity.`
    },
    {
      strength: 60,
      gregariousness: 60,
      note: `${npc.name} is a quiet follower of ${selectedGod}, but does not draw much attention to ${npc.hisher} choice of deity.`
    },
    {
      strength: 60,
      gregariousness: 40,
      note: `${npc.name} is a quiet follower of ${selectedGod}, but does not draw much attention to ${npc.hisher} choice of deity.`
    },
    {
      strength: 60,
      gregariousness: 20,
      note: `${npc.name} is a quiet follower of ${selectedGod}, but does not draw much attention to ${npc.hisher} choice of deity.`
    },
    {
      strength: 60,
      gregariousness: 0,
      note: `${npc.name} is a quiet follower of ${selectedGod}, but does not draw much attention to ${npc.hisher} choice of deity.`
    },
    {
      strength: 40,
      gregariousness: 100,
      note: `${npc.name} is a casual follower of ${selectedGod}`
    },
    {
      strength: 40,
      gregariousness: 80,
      note: `${npc.name} is a casual follower of ${selectedGod}`
    },
    {
      strength: 40,
      gregariousness: 60,
      note: `${npc.name} is a casual follower of ${selectedGod}`
    },
    {
      strength: 40,
      gregariousness: 40,
      note: `${npc.name} is a casual follower of ${selectedGod}`
    },
    {
      strength: 40,
      gregariousness: 20,
      note: `${npc.name} is a casual follower of ${selectedGod}`
    },
    {
      strength: 40,
      gregariousness: 0,
      note: `${npc.name} is a casual follower of ${selectedGod}`
    },
    {
      strength: 20,
      gregariousness: 100,
      note: `${npc.name} is critical of religion, but chooses to follow ${selectedGod}`
    },
    {
      strength: 20,
      gregariousness: 80,
      note: `${npc.name} is critical of religion, but chooses to follow ${selectedGod}`
    },
    {
      strength: 20,
      gregariousness: 60,
      note: `${npc.name} is critical of religion, but chooses to follow ${selectedGod}`
    },
    {
      strength: 20,
      gregariousness: 40,
      note: `${npc.name} is critical of religion, but chooses to follow ${selectedGod}`
    },
    {
      strength: 20,
      gregariousness: 20,
      note: `${npc.name} is critical of religion, but chooses to follow ${selectedGod}`
    },
    {
      strength: 20,
      gregariousness: 0,
      note: `${npc.name} is critical of religion, but chooses to follow ${selectedGod}`
    },
    {
      strength: 0,
      gregariousness: 100,
      note: `${npc.name} is a cynic and heretic in the eyes of the majority of the population of ${town.name}.`
    },
    {
      strength: 0,
      gregariousness: 80,
      note: `${npc.name} is a cynic and heretic in the eyes of the majority of the population of ${town.name}.`
    },
    {
      strength: 0,
      gregariousness: 60,
      note: `${npc.name} is a cynic and heretic in the eyes of the majority of the population of ${town.name}.`
    },
    {
      strength: 0,
      gregariousness: 40,
      note: `${npc.name} is a cynic and heretic in the eyes of the majority of the population of ${town.name}.`
    },
    {
      strength: 0,
      gregariousness: 20,
      note: `${npc.name} is a cynic and heretic in the eyes of the majority of the population of ${town.name}.`
    },
    {
      strength: 0,
      gregariousness: 0,
      note: `${npc.name} is a cynic and heretic in the eyes of the majority of the population of ${town.name}.`
    }

  ]
  return closestMatch(religionDescription, 'note', 'strength', 'gregariousness', npc.roll.religiosity, npc.roll.gregariousness)
}

// uses setup.npcData.religion.strength
export function createReligiosity (town: Town, npc: NPC) {
  console.log(`Creating religion strength for ${npc.name}`)
  npc.roll.religiosity = fm(dice(2, 40) + 10, town.roll.religiosity - 50)
  npc.roll.religiosity = Math.clamp(npc.roll.religiosity, 1, 100)
  if (npc.religion.strength) {
    npc.roll.religiosity = getReligiosity(npc.religion.strength)
  } else {
    npc.religion.strength = getReligionStrength(npc.roll.religiosity)
  }
  npc.religion.deity = getDeity(town, npc)
}

export function getDeity (town: Town, npc: NPC) {
  if (npc.roll.conformity > town.roll.religiosity) {
    return town.religion.deity
  } else {
    const godPool = [religion.abstractGod, religion.saint]
    return random(godPool[random(0, 1)])
  }
}

function getReligiosity (religionStrength: ReligionStrength): number {
  for (const [threshold, strength] of religion.strength) {
    if (strength === religionStrength) {
      return threshold + random(1, 5)
    }
  }
  return 0
}

function getReligionStrength (religiosityRoll: number): ReligionStrength {
  for (const [threshold, strength] of religion.strength) {
    if (threshold <= religiosityRoll) {
      return strength
    }
  }
  return 'quiet true believer'
}
