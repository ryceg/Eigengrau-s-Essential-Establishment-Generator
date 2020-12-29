import { NPC, Building, Faction, Road, Town } from '@lib'

/* global setup tippy jQuery settings */
export const profileTooltip = (id: string, obj: NPC | Building | Faction | Road) => {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      if (obj.objectType) {
        switch (obj.objectType) {
          case 'npc':
            span.title = `${lib.articles.output(obj.descriptor).toUpperFirst()} called ${obj.name} who is ${lib.articles.output(obj.profession)}.`
            break
          case 'building':
            span.title = obj.tippyDescription || obj.description || `${lib.articles.output(obj.size).toUpperFirst()} ${obj.wordNoun || obj.type} that's ${obj.cleanliness}, and is known for ${obj.notableFeature}.`
            break
          case 'room':
            span.title = obj.tippyDescription || obj.description || `${lib.articles.output(obj.size).toUpperFirst()} ${obj.wordNoun || obj.type} that's ${obj.cleanliness}, and is known for ${obj.notableFeature}.`
            break
          case 'faction':
            span.title = obj.tippyDescription || obj.description || `${lib.articles.output(obj.size).toUpperFirst()} ${obj.type} ${obj.wordNoun} called ${obj.name}`
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

export const profileAgeTooltip = (id: string, char: NPC) => {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      span.title = `${char.ageYears} years, to be exact.`
      tippy(`#${span.id}`)
    }
  })
}

export const metricHeight = (height: number, isMetric: boolean) => {
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

export const metricWeight = (npc: NPC, isMetric: boolean) => {
  if (isMetric === true) {
    return `${(npc.weightPounds / 2.2046).toFixed(1)}kg (with a BMI of ${npc.bmi})`
  } else {
    return `${npc.weightPounds}lbs. (with a BMI of ${npc.bmi})`
  }
}

/**
 * @param {NPC} char
 * @param {number} heightVar
 */
export const profileHeightTooltip = (id: string, char: NPC, heightVar: number) => {
  if (heightVar) {
    char.heightInches = heightVar
  }
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      if (settings.showMetric === true) {
        span.title = `${(char.heightInches * 0.0254).toFixed(2)}m`
        tippy(`#${span.id}`)
      } else {
        const feet = Math.trunc(char.heightInches / 12)
        const inches = Math.round(char.heightInches - Math.trunc(feet * 12))
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

export const profileWeightTooltip = (id: string, char: NPC) => {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      if (settings.showMetric === true) {
        span.title = `${(char.weightPounds / 2.2046).toFixed(1)}kg (with a BMI of ${char.bmi})`
        tippy(`#${span.id}`)
      } else {
        span.title = `${char.weightPounds}lbs. (with a BMI of ${char.bmi})`
      }

      tippy(`#${span.id}`)
    }
  }
  )
}

export const buildingTooltip = (id: string, building: Building) => {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      span.title = building.tippyDescription || `${lib.articles.output(building.size).toUpperFirst()} ${building.wordNoun} that's ${building.cleanliness}, and is known for ${building.notableFeature}.`
      tippy(`#${span.id}`)
    }
  })
}

/**
 * @param {Town} town
 * @param {string} type
 * */
export const politicsDescription = (town: Town, type: string) => {
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
export const politicsTooltip = (id: string, type: string, town: Town) => {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      span.title = setup.politicsDescription(town, type)
      tippy(`#${span.id}`)
    }
  })
}
