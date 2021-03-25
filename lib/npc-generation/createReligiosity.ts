import { fm, dice, closestMatch, ReligionStrength, rankProbabilities, compareRollToTarget, addIfDefined } from '../'
import { Town } from '../town/_common'
import { NPC } from './_common'
import { random } from '../src/random'
import { Virtues } from './traits/getTraits'

export function getReligiosityDescription (town: Town, npc: NPC) {
  const selectedGod = npc.religion.deity
  const religionDescription = [
    {
      strength: 100,
      gregariousness: 100,
      note: `${npc.name} is a fervent devotee of ${selectedGod}, but ${npc.heshe} is as kind and welcoming to followers of other gods as of ${npc.hisher} own.`
    },
    {
      strength: 100,
      gregariousness: 80,
      note: `${npc.name} is a fervent devotee of ${selectedGod}, but ${npc.heshe} only tries to preach to those who seem sincerely interested in learning about ${npc.hisher} god.`
    },
    {
      strength: 100,
      gregariousness: 60,
      note: `${npc.name} is a fervent devotee of ${selectedGod}, and ${npc.heshe} can get a bit preachy, but doesn't try to pressure unwilling people into converting.`
    },
    {
      strength: 100,
      gregariousness: 40,
      note: `${npc.name} is a fervent devotee of ${selectedGod}, and ${npc.heshe} doesn't always know when to stop proselytizing.`
    },
    {
      strength: 100,
      gregariousness: 20,
      note: `${npc.name} is a fervent devotee of ${selectedGod}, and ${npc.heshe} seems to enjoy nothing more than preaching to followers of other religions.`
    },
    {
      strength: 100,
      gregariousness: 0,
      note: `${npc.name} is a fervent devotee of ${selectedGod}, and ${npc.heshe} is fiercely committed to converting literally everybody ${npc.heshe} ever meets, whether they like it or not.`
    },
    {
      strength: 80,
      gregariousness: 100,
      note: `${npc.firstName} is a faithful follower of ${selectedGod}, but is very accepting of those of different faiths.`
    },
    {
      strength: 80,
      gregariousness: 80,
      note: `${npc.firstName} is a faithful follower of ${selectedGod}, but never makes others feel umcomfortable when it comes to ${npc.hisher} faith.`
    },
    {
      strength: 80,
      gregariousness: 60,
      note: `${npc.firstName} is a faithful follower of ${selectedGod}, but tries not to talk about ${npc.hisher} chosen deity with those who do not share ${npc.hisher} faith.`
    },
    {
      strength: 80,
      gregariousness: 40,
      note: `${npc.firstName} is a faithful follower of ${selectedGod}, and can sometimes be a little bit judgey about others' choices in deities.`
    },
    {
      strength: 80,
      gregariousness: 20,
      note: `${npc.firstName} is a faithful follower of ${selectedGod}, and will sometimes chastise others for following 'worse' gods.`
    },
    {
      strength: 80,
      gregariousness: 0,
      note: `${npc.firstName} is a faithful follower of ${selectedGod}, and enjoys confronting others to challenge beliefs that differ from ${npc.hisher} own.`
    },
    {
      strength: 60,
      gregariousness: 100,
      note: `${npc.firstName} is a quiet follower of ${selectedGod}, but does not draw much attention to ${npc.hisher} choice of deity.`
    },
    {
      strength: 60,
      gregariousness: 80,
      note: `${npc.name} is a quiet follower of ${selectedGod}, but does not often bring up ${npc.hisher} choice of deity unless prompted.`
    },
    {
      strength: 60,
      gregariousness: 60,
      note: `${npc.name} is a quiet follower of ${selectedGod}, and is not shy ${npc.hisher} about praying or worshipping in public, but rarely tries to proselytize or convert others.`
    },
    {
      strength: 60,
      gregariousness: 40,
      note: `${npc.name} is usually a quiet follower of ${selectedGod}, but loves to talk up how great ${npc.hisher} chosen deity is to anyone who expresses interest.`
    },
    {
      strength: 60,
      gregariousness: 20,
      note: `${npc.name} is usually a quiet follower of ${selectedGod}, but can be quite rude to anyone who criticizes ${npc.hisher} choice of deity.`
    },
    {
      strength: 60,
      gregariousness: 0,
      note: `${npc.name} is a quiet follower of ${selectedGod}, and is not shy about criticizing followers of other gods.`
    },
    {
      strength: 40,
      gregariousness: 100,
      note: `${npc.name} is a casual follower of ${selectedGod}, but ${npc.heshe} is respectful of and interested in learning about all other religions.`
    },
    {
      strength: 40,
      gregariousness: 80,
      note: `${npc.name} is a casual follower of ${selectedGod}, but ${npc.heshe} is accepting of those who practice all faiths.`
    },
    {
      strength: 40,
      gregariousness: 60,
      note: `${npc.name} is a casual follower of ${selectedGod}, and is generally private about ${npc.hisher} faith, in the hopes of not offending those who practice other religions.`
    },
    {
      strength: 40,
      gregariousness: 40,
      note: `${npc.name} is a casual follower of ${selectedGod}, and can act a bit prickly towards those who openly practice other faiths.`
    },
    {
      strength: 40,
      gregariousness: 20,
      note: `${npc.name} is a casual follower of ${selectedGod}, and can be quite rude towards those who worship 'inferior' gods.`
    },
    {
      strength: 40,
      gregariousness: 0,
      note: `${npc.name} is a casual follower of ${selectedGod}, and ${npc.heshe} likes to provoke heated 'debates' with people who follow other religions.`
    },
    {
      strength: 20,
      gregariousness: 100,
      note: `${npc.name} is critical of religion, but is nominally a follower of ${selectedGod}. Despite ${npc.hisher} doubts, ${npc.heshe} is always very diplomatic when it comes to conversations about religion, either ${npc.hisher} own or others'.`
    },
    {
      strength: 20,
      gregariousness: 80,
      note: `${npc.name} is critical of religion, but is nominally a follower of ${selectedGod}. Despite ${npc.hisher} doubts, ${npc.heshe} generally tries to avoid criticizing religion outside of private conversations with trusted friends.`
    },
    {
      strength: 20,
      gregariousness: 60,
      note: `${npc.name} is critical of religion, but is nominally a follower of ${selectedGod}. Because of ${npc.hisher} doubts, ${npc.heshe} is not shy about criticizing religion, but is always very polite about it, and criticizes ${npc.hisher} own faith as often as others'.`
    },
    {
      strength: 20,
      gregariousness: 40,
      note: `${npc.name} is critical of religion, but is nominally a follower of ${selectedGod}. Because of ${npc.hisher} doubts, ${npc.heshe} frequently criticizes others' faiths, while seemingly blind to the faults of ${npc.hisher} own religion.`
    },
    {
      strength: 20,
      gregariousness: 20,
      note: `${npc.name} is critical of religion, but is nominally a follower of ${selectedGod}. Because of ${npc.hisher} doubts, ${npc.heshe} enjoys spirited debates about the flaws of various religions – both other peoples' faiths and ${npc.hisher} own.`
    },
    {
      strength: 20,
      gregariousness: 0,
      note: `${npc.name} is critical of religion, but is nominally a follower of ${selectedGod}. Despite ${npc.hisher} supposed faith, ${npc.heshe} enjoys ragging on any and all religions, and will openly criticize any faithful people ${npc.heshe} meets.`
    },
    {
      strength: 0,
      gregariousness: 100,
      note: `${npc.name} openly refuses to pledge ${npc.hisher} faith to any one deity. However, ${npc.heshe} is always willing to listen graciously to the beliefs of ${npc.hisher} faithful friends and neighbors, and ${npc.heshe} is still well-liked even among the faithful of ${town.name}.`
    },
    {
      strength: 0,
      gregariousness: 80,
      note: `${npc.name} openly refuses to pledge ${npc.hisher} faith to any one deity. While ${npc.heshe} resists conversion to any of the religions practised in ${town.name}, ${npc.heshe} does not criticize her neighbors' faith, and ${npc.heshe} is generally accepted by the residents of ${town.name}.`
    },
    {
      strength: 0,
      gregariousness: 60,
      note: `${npc.name} openly refuses to pledge ${npc.hisher} faith to any one deity. While ${npc.heshe} refuses to listen to anyone who tries to preach to ${npc.himher}, ${npc.heshe} also avoids starting debates about religion where others can hear.`
    },
    {
      strength: 0,
      gregariousness: 40,
      note: `${npc.name} is a faithless heretic in the eyes of the majority of the population of ${town.name}. When others try to convert ${npc.himher} to one of the predominant religions in ${town.name}, ${npc.heshe} does not hesitate to shut them down immediately.`
    },
    {
      strength: 0,
      gregariousness: 20,
      note: `${npc.name} is a faithless heretic in the eyes of the majority of the population of ${town.name}, and ${npc.heshe} openly scoffs about the foolishness of the more faithful residents of ${town.name}.`
    },
    {
      strength: 0,
      gregariousness: 0,
      note: `${npc.name} is a faithless heretic in the eyes of the majority of the population of ${town.name}, and no one would be caught dead speaking to ${npc.himher} because of it.`
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
  npc.religion.deity = pickDeity(npc.roll.gender, getDeityProbabilities(town, npc))
}

export function getDeityProbabilities (town: Town, npc: NPC, deities = lib.getFallbackDeities(town)): Record<string, {
  probability: number,
  name: string
}> {
  const conformityMargin = 30
  if (npc.roll.conformity - town.roll.religiosity > conformityMargin) {
    const townDeity = {
      [town.religion.deity]: { name: town.religion.deity, probability: 100 }
    }
    return townDeity
  } else {
    const probabilities: Record<string, {
      probability: number,
      name: string
    }> = {}
    for (const deity of deities) {
      probabilities[deity.name] = {
        probability: deity?.probabilityWeightings?.npc?.race?.[npc.race] || rankProbabilities[deity.rank] || 10,
        name: deity.name
      }
      for (const prop in deity?.personality) {
        if (!prop) break
        const trait = prop as Virtues
        addIfDefined(
          compareRollToTarget(
            deity?.personality[trait],
            npc.roll.traits[trait],
            {
              bonus: 5,
              tolerance: 'both',
              maxDistance: 20
            }
          ),
          probabilities[deity.name].probability)
      }
    }
    return probabilities
  }
}

export const pickDeity = (deityPicker: number, pool: Record<string, {
  probability: number,
  name: string
}>) => {
  for (const item in pool) {
    deityPicker -= pool[item].probability
    if (deityPicker < 0) {
      return item
    }
  }
  return pool[Object.keys(pool)[0]].name
}

function getReligiosity (religionStrength: ReligionStrength): number {
  for (const [threshold, strength] of lib.religion.strength) {
    if (strength === religionStrength) {
      return threshold + random(1, 5)
    }
  }
  return 0
}

function getReligionStrength (religiosityRoll: number): ReligionStrength {
  for (const [threshold, strength] of lib.religion.strength) {
    if (threshold <= religiosityRoll) {
      return strength
    }
  }
  return 'quiet true believer'
}
