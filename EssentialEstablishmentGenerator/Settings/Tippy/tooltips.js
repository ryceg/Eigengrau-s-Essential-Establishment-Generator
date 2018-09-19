setup.profileTooltip = function (id, ch) {
  var char = ch
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      span.title = 'A ' + char.weight + ' ' + char.malefemale + ' ' + char.raceAdjective + ' ' + char.dndClass + ' with ' + char.physicalTrait + ' called ' + char.name
      tippy('#' + span.id)
    }
  })
}

setup.profileAgeTooltip = function (id, ch) {
  var char = ch
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      span.title = char.ageRoll + ' years, to be exact.'
      tippy('#' + span.id)
    }
  })
}

setup.profileHeightTooltip = function (id, ch) {
  var char = ch
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      if (settings.showMetric === true) {
        span.title = (char.heightRoll * 0.0254).toFixed(2) + 'm tall'
        tippy('#' + span.id)
      } else {
        var feet = Math.trunc(char.heightRoll / 12)
        var inches = Math.round(char.heightRoll - (Math.trunc(feet * 12)))
        if (inches === 0) {
          span.title = feet + 'ft. '
        } else {
          span.title = feet + 'ft. ' + inches + '"'
        }

        tippy('#' + span.id)
      }
    }
  })
}

setup.profileWeightTooltip = function (id, ch) {
  var char = ch
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      if (settings.showMetric === true) {
        span.title = (char.weightRoll / 2.2046).toFixed(1) + 'kg (with a BMI of ' + char.bmi + ')'
        tippy('#' + span.id)
      } else {
        span.title = char.weightRoll + 'lbs. (with a BMI of ' + char.bmi + ')'
      }

      tippy('#' + span.id)
    }
  }
  )
}

setup.buildingTooltip = function (id, building, type) {
  jQuery(function () {
    var span = document.getElementById(id)
    var notableFeature
    switch (type) {
      case 'tavern':
        switch (building.draw) {
          case '$tavern.roughness atmosphere':
            // notableFeature = 'its ' + building.roughness + ' atmosphere'
            break
          default:
            // notableFeature = 'its ' + building.draw
        }
        break
      case 'smithy':
        notableFeature = 'its ' + building.expertise + ' armour and weapons'
        break
      case 'alchemist':
        notableFeature = ['its love potions', 'its herbal remedies', 'its magical potions', 'its wonderful tonics', 'its fantastic ointments'].random()
        break
      case 'general store':
        notableFeature = 'its wide range of goods on sale'
        break
      case 'brothel':
        notableFeature = building.specialty + ' and being owned by ' + building.owner
        break
      case 'market':
        notableFeature = 'its ' + building.draw
        break
    }
    if (span) {
      span.title = 'A ' + building.size + ' ' + type + " that's " + building.cleanliness + ', and is known for ' + notableFeature + '.'
      tippy('#' + span.id)
    }
  })
}
