import { NPC, Building, Town, RaceName, getRacesPercentile } from '@lib'

export const makeTippyTitle = (span: HTMLElement, obj: any) => {
  if (obj.objectType) {
    switch (obj.objectType) {
      case 'npc':
        $(span).attr('data-tippy-content', obj.tippyDescription || `${lib.articles.output(obj.descriptor).toUpperFirst()} called ${obj.name} who is ${lib.articles.output(obj.profession)}.`)
        break
      case 'building':
        $(span).attr('data-tippy-content', obj.tippyDescription || obj.description || `${lib.articles.output(obj.size).toUpperFirst()} ${obj.wordNoun || obj.type} that's ${obj.cleanliness}, and is known for ${obj.notableFeature}.`)
        break
      case 'room':
        $(span).attr('data-tippy-content', obj.tippyDescription || obj.description || `${lib.articles.output(obj.size).toUpperFirst()} ${obj.wordNoun || obj.type} that's ${obj.cleanliness}, and is known for ${obj.notableFeature}.`)
        break
      case 'faction':
        $(span).attr('data-tippy-content', obj.tippyDescription || obj.description || `${lib.articles.output(obj.size).toUpperFirst()} ${obj.type} ${obj.wordNoun} called ${obj.name}`)
        break
      case 'road':
        $(span).attr('data-tippy-content', obj.tippyDescription || obj.description || `${obj.name}, ${lib.articles.output(obj.type)}. It is ${obj.materialDescription} ${obj.feature}.`)
        break
      case 'deity':
        $(span).attr('data-tippy-content', obj.tippyDescription || obj.description || `${obj.name}, ${obj.titles[0]}, who is ${lib.articles.output(obj.rank)} in the pantheon.`)
        break
      default:
        lib.logger.error(`Please report this bug! ${obj.name} the ${obj.type} ${obj.wordNoun} has not got a valid objectType`)
    }
  } else {
    $(span).attr('data-tippy-content', obj.tippyDescription || obj.name)
  }
}

export const profileAgeTooltip = (id: string, char: NPC) => {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      $(span).attr('data-tippy-content', `${char.ageYears} years, to be exact.`)
      tippy('[data-tippy-content]')
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

export const buildingTooltip = (id: string, building: Building) => {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      // FIXME
      // @ts-expect-error To be fixed at a later date.
      $(span).attr('data-tippy-content', building.tippyDescription || `${lib.articles.output(building.size).toUpperFirst()} ${building.wordNoun} that's ${building.cleanliness}, and is known for ${building.notableFeature}.`)
      tippy('[data-tippy-content]')
    }
  })
}

type SocioPoliticalIdeologies = 'politicalIdeology' | 'economicIdeology' | 'politicalSource'

export const politicsDescription = (town: Town, type: SocioPoliticalIdeologies) => {
  switch (type) {
    case 'politicalIdeology':
      return lib.townData.politicalIdeology[town.politicalIdeology].data.description
    case 'economicIdeology':
      return lib.townData.economicIdeology[town.economicIdeology].descriptors.tippy
    case 'politicalSource':
      if (town.politicalSource === 'absolute monarchy' || town.politicalSource === 'constitutional monarchy') {
        if (town.politicalIdeology === 'autocracy') {
          return lib.townData.politicalSource[town.politicalSource].autocracy.description
        }
        return lib.townData.politicalSource[town.politicalSource].default.description
      }
      return lib.townData.politicalSource[town.politicalSource].description
  }
}

export const politicsTooltip = (id: string, type: SocioPoliticalIdeologies, town: Town) => {
  jQuery(() => {
    const span = document.getElementById(id)
    if (span) {
      $(span).attr('data-tippy-content', politicsDescription(town, type))
      tippy('[data-tippy-content]')
    }
  })
}

export function assertHtmlExists (el: HTMLElement | undefined): asserts el is HTMLElement {
  if (el === undefined) {
    throw new Error('Element does not exist!')
  }
}

export const createPercentageTooltip = (source: HTMLElement, target: string, content: string) => {
  const tip = $(`<span class='tip dotted'>${content}</span>`)

  const element = tip.get(0)
  if (element) {
    tippy(element, {
      content: source,
      interactive: true,
      allowHTML: true
    })
  }

  // this isn't working properly with multiple elements on the same page with the same target
  // const htmlTarget = Array.from(document.getElementsByClassName(target))
  const htmlTarget = $(`.${target}`)

  for (const element of htmlTarget) {
    const tipGet = tip.get(0)
    if (tipGet) {
      $(tipGet).appendTo(element)
    }
  }
}

export function createRaceHTML (percentages: Record<RaceName, number>, target: string, content?: string) {
  if (!lib.isPercentile(percentages)) {
    percentages = getRacesPercentile(percentages)
  }
  const array = lib.sortArray(percentages).reverse()
  const list = lib.formatPercentile(array as [string, number][])
  const html = lib.formatArrayAsList(list)
  if (!html) return
  createPercentageTooltip(html, target, content || lib.getPredominantRace(percentages).amountDescriptive)
}

export function createReligionHTML (percentages: Record<string, number>, target: string, content?: string) {
  const html = lib.formatAsList(percentages)
  if (!html) return
  createPercentageTooltip(html, target, content || lib.getPredominantReligion(State.variables.town, percentages).amountDescriptive)
  const button = $('<button/>', {
    text: 'Edit',
    click () {
      setup.openDialog({
        header: 'Edit Pantheon',
        passage: 'EditPantheon',
        rerender: true
      })
    }
  })
  // .addClass('ignore-remove')
  $(button).appendTo(html)
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
tippy.setDefaultProps({
  delay: 50,
  interactive: true,
  followCursor: 'horizontal',
  animation: 'perspective',
  theme: 'blockquote',
  inlinePositioning: true,
  // theme: 'descriptive',
  allowHTML: true,
  // // uncomment the next two for manual tippy activation.
  // hideOnClick: 'toggle',
  // trigger: 'click',
  inertia: true
})
