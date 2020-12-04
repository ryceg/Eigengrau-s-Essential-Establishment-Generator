/* global setup tippy jQuery settings */
setup.profileTooltip = function (id, obj) {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      if (obj.objectType) {
        switch (obj.objectType) {
          case 'npc':
            span.title = `${lib.articles.output(obj.descriptor).toUpperFirst()} called ${obj.name} who is ${lib.articles.output(obj.profession)}.`
            break
          case 'building':
            span.title = obj.tippyDescription || `${lib.articles.output(obj.size || obj._size).toUpperFirst()} ${obj.wordNoun || obj.type} that's ${obj.cleanliness || obj._cleanliness}, and is known for ${obj.notableFeature}.`
            break
          case 'room':
            span.title = obj.tippyDescription || `${lib.articles.output(obj.size || obj._size).toUpperFirst()} ${obj.wordNoun || obj.type} that's ${obj.cleanliness || obj._cleanliness}, and is known for ${obj.notableFeature}.`
            break
          case 'faction':
            span.title = obj.tippyDescription || `${lib.articles.output(obj.size).toUpperFirst()} ${obj.type} ${obj.wordNoun} called ${obj.name}`
            break
          case 'road':
            span.title = obj.description || `${obj.name}, ${lib.articles.output(obj.type)}. It is ${obj.materialDescription} ${obj.feature}.`
            break
          default:
            console.error(`Please report this bug! ${obj.name} the ${obj.type} ${obj.wordNoun} has not got a valid objectType`)
        }
      } else {
        span.title = obj.tippyDescription || obj.name
      }
      tippy(`#${span.id}`)
    }
  })
}

setup.itemTooltip = function (id, item) {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      span.title = item.description || item
      tippy(`#${span.id}`)
    }
  })
}

/** @param {NPC} char */
setup.profileAgeTooltip = function (id, char) {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      span.title = `${char.ageYears} years, to be exact.`
      tippy(`#${span.id}`)
    }
  })
}

/**
 * @param {number} height
 * @param {boolean} isMetric
 */
setup.metricHeight = (height, isMetric) => {
  if (isMetric === true) {
    return `${(height * 0.0254).toFixed(2)}m`
  } else {
    const feet = Math.trunc(height / 12)
    const inches = Math.round(height - Math.trunc(feet * 12))
    if (inches === 0) {
      return `${feet}ft. `
    } else {
      return `${feet}ft. ${inches}″`
    }
  }
}

/**
 * @param {NPC} npc
 * @param {boolean} isMetric
 */
setup.metricWeight = (npc, isMetric) => {
  if (isMetric === true) {
    return `${(npc.weightRoll / 2.2046).toFixed(1)}kg (with a BMI of ${npc.bmi})`
  } else {
    return `${npc.weightRoll}lbs. (with a BMI of ${npc.bmi})`
  }
}

/**
 * @param {NPC} char
 * @param {number} heightVar
 */
setup.profileHeightTooltip = function (id, char, heightVar) {
  if (heightVar) {
    char.heightRoll = heightVar
  }
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      if (settings.showMetric === true) {
        span.title = `${(char.heightRoll * 0.0254).toFixed(2)}m`
        tippy(`#${span.id}`)
      } else {
        const feet = Math.trunc(char.heightRoll / 12)
        const inches = Math.round(char.heightRoll - Math.trunc(feet * 12))
        if (inches === 0) {
          span.title = `${feet}ft. `
        } else {
          span.title = `${feet}ft. ${inches}"`
        }
        tippy(`#${span.id}`)
      }
    }
  })
}

setup.profileWeightTooltip = function (id, char) {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      if (settings.showMetric === true) {
        span.title = `${(char.weightRoll / 2.2046).toFixed(1)}kg (with a BMI of ${char.bmi})`
        tippy(`#${span.id}`)
      } else {
        span.title = `${char.weightRoll}lbs. (with a BMI of ${char.bmi})`
      }

      tippy(`#${span.id}`)
    }
  }
  )
}

setup.buildingTooltip = function (id, building) {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      span.title = building.tippyDescription || `${lib.articles.output(building.size || building._size).toUpperFirst()} ${building.wordNoun} that's ${building.cleanliness || building._cleanliness}, and is known for ${building.notableFeature}.`
      tippy(`#${span.id}`)
    }
  })
}

/**
 * @param {Town} town
 * @param {string} type
 * */
setup.politicsDescription = (town, type) => {
  let description
  switch (type) {
    case 'politicalIdeology':
      description = lib.townData.politicalIdeology[town.politicalIdeology].data.description
      break
    case 'economicIdeology':
      description = lib.townData.economicIdeology[town.economicIdeology].descriptors.tippy
      break
    case 'politicalSource':
      if (town.politicalSource === 'absolute monarchy' || town.politicalSource === 'constitutional monarchy') {
        if (town.politicalIdeology === 'autocracy') {
          description = lib.townData.politicalSource[town.politicalSource].autocracy.description
        } else {
          description = lib.townData.politicalSource[town.politicalSource].default.description
        }
      } else {
        description = lib.townData.politicalSource[town.politicalSource].description
      }
  }
  return description
}

/** @param {Town} town */
setup.politicsTooltip = function (id, type, town) {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      span.title = setup.politicsDescription(town, type)
      tippy(`#${span.id}`)
    }
  })
}
