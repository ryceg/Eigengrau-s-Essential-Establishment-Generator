// General function for inserting individual relatives.
// Returns the corresponding relative, or undefined
setup.createRelative = function (town, family, base, force = false) {
  // sanity-check
  if (base.ageYears <= 0) return undefined
  if (base.race === 'devil') return undefined
  if (!base.lastName) delete base.lastName

  // Avoid secondary NPC spam
  if (!force) {
    if (random(1, 100) <= setup.familyData.absencePercent) {
      return undefined
    }
    if (setup.isOfAge('elderly', base.race, base.ageYears)) {
      if (random(1, 100) <= setup.familyData.oldAbsencePercent) return undefined
      if (base.ageYears >= setup.npcData.raceTraits[base.race].ageTraits.ageDescriptors[0]) {
        if (random(1, 100) <= setup.familyData.veryOldAbsencePercent) return undefined
      }
    }
  }

  const relative = setup.createNPC(town, base)
  family.members[relative.key] = {
    key: relative.key,
    parentMarriage: undefined,
    marriages: undefined,
    canRemarry: true
  }

  return relative
}

setup.createParentage = function (town, family, npc, forceFather = false, forceMother = false) {
  const node = family.members[npc.key]
  if (node.parentMarriage === undefined) {
    if (random(1, 100) <= setup.familyData.orphanPercent &&
      (!forceFather) && (!forceMother)) {
      node.parentMarriage = null
    } else {
      const marriage = {
        parents: [],
        children: [npc.key]
      }

      const { motherRace, fatherRace, lineage } = setup.findParentRaces(npc)
      npc.parentalLineage = lineage
      const { fatherSurname, motherSurname } = setup.getParentSurnames(marriage)

      const fatherBase = Object.assign({}, setup.familyData.relativeBase(npc), {
        gender: 'man',
        ageYears: npc.ageYears + setup.familyData.parentAgeDelta(npc),
        race: fatherRace,
        lastName: fatherSurname,
        socialClass: setup.relativeSocialClass(npc.socialClass)
      })
      const motherBase = Object.assign({}, setup.familyData.relativeBase(npc), {
        gender: 'woman',
        ageYears: npc.ageYears + setup.familyData.parentAgeDelta(npc),
        race: motherRace,
        lastName: motherSurname,
        socialClass: setup.relativeSocialClass(npc.socialClass)
      })

      // TODO finish support for non-heterosexual marriages
      const father = setup.createRelative(town, family, fatherBase, forceFather)
      const mother = setup.createRelative(town, family, motherBase, forceMother)
      if (father) {
        marriage.parents.push(father.key)
        family.members[father.key].marriages = [marriage]
      }
      if (mother) {
        marriage.parents.push(mother.key)
        family.members[mother.key].marriages = [marriage]
      }

      marriage.socialClass = setup.familySocialClass(marriage)
      setup.createChildren(town, family, npc, marriage, motherRace, fatherRace, setup.familyData.siblingRoll())

      node.parentMarriage = marriage
      node.siblings = marriage.children
    }
  }
}

setup.createChildren = function (town, family, npc, marriage, motherRace, fatherRace, amount, force = false) {
  if (!force) amount -= marriage.children.length
  console.log(`Creating ${amount} siblings...`)

  const surname = setup.getChildSurname(marriage)
  const siblingClass = marriage.socialClass

  const inserted = []
  for (let k = 0; k < amount; k++) {
    const siblingBase = Object.assign({}, setup.familyData.relativeBase(npc), {
      race: setup.findChildRace(town, motherRace, fatherRace),
      gender: ['man', 'woman'].seededrandom(),
      ageYears: npc.ageYears + setup.familyData.siblingAgeDelta(npc),
      lastName: surname,
      socialClass: siblingClass
    })

    if (setup.isOfAge('young adult', siblingBase.race, siblingBase.ageYears)) { siblingBase.socialClass = setup.relativeSocialClass(siblingClass) }

    const sibling = setup.createRelative(town, family, siblingBase, force)
    if (sibling) {
      marriage.children.push(sibling.key)
      inserted.push(sibling.key)
      family.members[sibling.key].parentMarriage = marriage
      family.members[sibling.key].siblings = marriage.children
    }
  }

  return inserted
}

setup.createMarriage = function (town, family, npc, force = false) {
  const marriageMin = setup.npcData.raceTraits[npc.race].ageTraits['young adult'].baseAge
  const newMarriage = {
    parents: [npc.key],
    children: []
  }

  // TODO finish support for non-heterosexual marriages
  const partnerBase = Object.assign({}, setup.familyData.relativeBase(npc), {
    gender: setup.npcData.gender[npc.gender].oppositeGender,
    ageYears: npc.ageYears + setup.familyData.partnerAgeDelta(npc),
    race: setup.findPartnerRace(town, npc),
    socialClass: setup.relativeSocialClass(setup.relativeSocialClass(npc.socialClass))
  })
  partnerBase.ageYears = Math.max(partnerBase.ageYears, marriageMin)

  const partner = setup.createRelative(town, family, partnerBase, force)

  if (partner) {
    setup.setAsPartners(npc, partner)
    newMarriage.parents.push(partner.key)
    family.members[partner.key].marriages = [newMarriage]
  }

  newMarriage.socialClass = setup.familySocialClass(newMarriage)
  setup.createChildren(town, family, npc, newMarriage, npc.race, partnerBase.race, setup.familyData.siblingRoll())

  return newMarriage
}
