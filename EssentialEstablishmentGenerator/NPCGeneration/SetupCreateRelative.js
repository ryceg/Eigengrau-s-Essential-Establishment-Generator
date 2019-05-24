setup.createRelative = function (town, npc, type, base) {
  console.groupCollapsed('Relative function called. Making a ' + type + ' for ' + npc.name + '...')
  console.log({ base })

  setup.relativeTypes = {
    'partner': function (town, npc, base) {
      console.groupCollapsed('Making a partner for ' + npc.name + '...')
      Object.assign(base, {
        gender: npc.partnerGenderProbability(npc),
        ageStage: base.ageStage || npc.ageStage,
        lastName: base.lastName || npc.lastName,
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.setAsPartners(npc, relative)
      setup.createRelationship(town, npc, relative, relative.marriageNoun, npc.marriageNoun)
      console.groupEnd()
      return relative
    },
    'husband': function (town, npc, base) {
      console.groupCollapsed('Making a husband for ' + npc.name + '...')
      Object.assign(base, {
        gender: 'man',
        ageStage: base.ageStage || npc.ageStage,
        lastName: base.lastName || npc.lastName,
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.setAsPartners(npc, relative)
      setup.createRelationship(town, npc, relative, relative.marriageNoun, npc.marriageNoun)
      console.groupEnd()
      return relative
    },
    'uncle': function (town, npc, base) {
      console.groupCollapsed('Making an uncle for ' + npc.name + '...')
      var parent = State.variables.npcs[setup.findInObj(npc.relationships, 'father')] || State.variables.npcs[setup.findInObj(npc.relationships, 'mother')]
      if (parent) {
        base.race = base.race || parent.race
        base.lastName = base.lastName || parent.lastName
      } else {
        base.race = base.race || npc.race
      }
      Object.assign(base, {
        gender: 'man',
        ageYears: npc.ageYears + dice(6, 6),
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.createRelationship(town, npc, relative, relative.niblingNoun, npc.niblingReciprocalNoun)
      console.groupEnd()
      return relative
    },
    'father': function (town, npc, base) {
      console.groupCollapsed('Making a father for ' + npc.name + '...')
      if (State.variables.npcs[setup.findInObj(npc.relationships, 'father')]) {
        console.log('Oh wait, ' + npc.name + ' already has one! How could you forget him?!')
        return State.variables.npcs[setup.findInObj(npc.relationships, 'father')]
      }
      base.race = base.race || State.variables.npcs[setup.findInObj(npc.relationships, 'mother')].race || npc.race
      var relative = setup.createNPC(town, Object.assign(base, {
        gender: 'man',
        lastName: base.lastName || npc.lastName,
        ageYears: npc.ageYears + dice(6, 6),
        socialClass: base.socialClass || npc.socialClass
      }))
      setup.createRelationship(town, npc, relative, relative.parentNoun, npc.childNoun)
      console.groupEnd()
      return relative
    },
    'son': function (town, npc, base) {
      console.groupCollapsed('Making a son for ' + npc.name + '...')
      if (!npc.partnerID) {
        console.log('Making a partner to procreate with first, though!')
        var partner = setup.relativeTypes['partner'](town, npc)
      }
      base.race = base.race || setup.halfbreedHandler(town, npc, State.variables.npcs[npc.partnerID]) || npc.race
      Object.assign(base, {
        gender: 'man',
        ageYears: Math.clamp(npc.ageYears - dice(6, 6), 1, npc.ageYears),
        lastName: base.lastName || npc.lastName,
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.createRelationship(town, npc, relative, relative.childNoun, npc.parentNoun)
      if (npc.partnerID || partner) {
        setup.createRelationship(town, State.variables.npcs[npc.partnerID], relative, relative.childNoun, State.variables.npcs[npc.partnerID].parentNoun)
      }
      console.groupEnd()
      return relative
    },
    'child': function (town, npc, base) {
      console.groupCollapsed('Making a child for ' + npc.name + '...')
      if (!npc.partnerID) {
        console.log('Making a partner to procreate with first, though!')
        var partner = setup.relativeTypes['partner'](town, npc)
      }
      base.race = base.race || setup.halfbreedHandler(town, npc, State.variables.npcs[npc.partnerID]) || npc.race
      Object.assign(base, {
        ageYears: Math.clamp(npc.ageYears - dice(6, 6), 1, npc.ageYears),
        lastName: base.lastName || npc.lastName,
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.createRelationship(town, npc, relative, relative.childNoun, npc.parentNoun)
      if (npc.partnerID || partner) {
        setup.createRelationship(town, State.variables.npcs[npc.partnerID], relative, relative.childNoun, State.variables.npcs[npc.partnerID].parentNoun)
      }
      console.groupEnd()
      return relative
    },
    'brother': function (town, npc, base) {
      console.groupCollapsed('Making a brother for ' + npc.name + '...')
      var parent = State.variables.npcs[setup.findInObj(npc.relationships, 'father')] || State.variables.npcs[setup.findInObj(npc.relationships, 'mother')]
      if (parent) {
        base.race = base.race || parent.race
        base.lastName = base.lastName || parent.lastName
      } else {
        base.race = base.race || npc.race
        base.lastName = base.lastName || npc.lastName
      }
      Object.assign(base, {
        gender: 'man',
        ageStage: base.ageStage || npc.ageStage,
        ageYears: npc.ageYears + Math.clamp(random(-12, 12), 1, 900),
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.createRelationship(town, npc, relative, relative.siblingNoun, npc.siblingNoun)
      console.groupEnd()
      return relative
    },
    'nephew': function (town, npc, base) {
      console.groupCollapsed('Making a nephew for ' + npc.name + '...')
      var parent = State.variables.npcs[setup.findInObj(npc.relationships, 'brother')] || State.variables.npcs[setup.findInObj(npc.relationships, 'sister')]
      if (parent) {
        base.race = base.race || parent.race
        base.lastName = base.lastName || parent.lastName
      } else {
        base.race = base.race || npc.race
      }
      Object.assign(base, {
        gender: 'man',
        ageYears: State.variables.npcs[parent].ageYears + dice(6, 6),
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.createRelationship(town, npc, relative, relative.niblingNoun, npc.niblingReciprocalNoun)
      console.groupEnd()
      return relative
    },
    'wife': function (town, npc, base) {
      console.groupCollapsed('Making a wife for ' + npc.name + '...')
      Object.assign(base, {
        gender: 'woman',
        ageStage: base.ageStage || npc.ageStage,
        lastName: base.lastName || npc.lastName,
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.setAsPartners(npc, relative)
      setup.createRelationship(town, npc, relative, relative.marriageNoun, npc.marriageNoun)
      console.groupEnd()
      return relative
    },
    'aunt': function (town, npc, base) {
      console.groupCollapsed('Making an aunt for ' + npc.name + '...')
      var parent = State.variables.npcs[setup.findInObj(npc.relationships, 'father')] || State.variables.npcs[setup.findInObj(npc.relationships, 'mother')]
      if (parent) {
        base.race = base.race || parent.race
        base.lastName = base.lastName || parent.lastName
      } else {
        base.race = base.race || npc.race
      }
      Object.assign(base, {
        gender: 'woman',
        ageYears: npc.ageYears + dice(6, 6),
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.createRelationship(town, npc, relative, relative.niblingNoun, npc.niblingReciprocalNoun)
      console.groupEnd()
      return relative
    },
    'mother': function (town, npc, base) {
      console.groupCollapsed('Making a mother for ' + npc.name + '...')
      if (State.variables.npcs[setup.findInObj(npc.relationships, 'mother')]) {
        console.log('Oh wait, ' + npc.name + ' already has one! How could you forget her?!')
        return State.variables.npcs[setup.findInObj(npc.relationships, 'mother')]
      }
      base.race = base.race || State.variables.npcs[setup.findInObj(npc.relationships, 'father')].race || npc.race
      Object.assign(base, {
        gender: 'woman',
        lastName: base.lastName || npc.lastName,
        ageYears: npc.ageYears + dice(6, 6),
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.createRelationship(town, npc, relative, relative.parentNoun, npc.childNoun)
      console.groupEnd()
      return relative
    },
    'daughter': function (town, npc, base) {
      console.groupCollapsed('Making a daughter for ' + npc.name + '...')
      if (!npc.partnerID) {
        console.log('Making a partner to procreate with first, though!')
        var partner = setup.relativeTypes['partner'](town, npc)
      }
      base.race = base.race || setup.halfbreedHandler(town, npc, State.variables.npcs[npc.partnerID]) || npc.race
      Object.assign(base, {
        gender: 'woman',
        ageYears: Math.clamp(npc.ageYears - dice(6, 6), 1, npc.ageYears),
        lastName: base.lastName || npc.lastName,
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.createRelationship(town, npc, relative, relative.childNoun, npc.parentNoun)
      if (npc.partnerID || partner) {
        setup.createRelationship(town, State.variables.npcs[npc.partnerID], relative, relative.childNoun, State.variables.npcs[npc.partnerID].parentNoun)
      }
      console.groupEnd()
      return relative
    },
    'sister': function (town, npc, base) {
      console.groupCollapsed('Making a sister for ' + npc.name + '...')
      var parent = State.variables.npcs[setup.findInObj(npc.relationships, 'father')] || State.variables.npcs[setup.findInObj(npc.relationships, 'mother')]
      if (parent) {
        base.race = base.race || parent.race
        base.lastName = base.lastName || parent.lastName
      } else {
        base.race = base.race || npc.race
        base.lastName = base.lastName || npc.lastName
      }
      Object.assign(base, {
        gender: 'woman',
        ageStage: base.ageStage || npc.ageStage,
        ageYears: npc.ageYears + Math.clamp(random(-12, 12), 1, 900),
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.createRelationship(town, npc, relative, relative.siblingNoun, npc.siblingNoun)
      console.groupEnd()
      return relative
    },
    'neice': function (town, npc, base) {
      console.groupCollapsed('Making a neice for ' + npc.name + '...')
      var parent = State.variables.npcs[setup.findInObj(npc.relationships, 'brother')] || State.variables.npcs[setup.findInObj(npc.relationships, 'sister')]
      if (parent) {
        base.race = base.race || parent.race
        base.lastName = base.lastName || parent.lastName
      } else {
        base.race = base.race || npc.race
        parent = npc
      }
      Object.assign(base, {
        gender: 'woman',
        ageYears: Math.clamp(parent.ageYears - dice(6, 6), 1, npc.ageYears),
        socialClass: base.socialClass || npc.socialClass
      })
      var relative = setup.createNPC(town, base)
      setup.createRelationship(town, npc, relative, relative.niblingNoun, npc.niblingReciprocalNoun)
      console.groupEnd()
      return relative
    }
  }

  if (!base) {
    base = {}
  }
  base.canBeCustom = base.canBeCustom || false
  base.isShallow = base.isShallow || true
  base.hasHistory = base.hasHistory || false
  console.groupEnd()
  return setup.relativeTypes[type](town, npc, base)
}
