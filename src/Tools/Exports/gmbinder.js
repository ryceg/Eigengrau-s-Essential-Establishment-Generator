setup.outputGMBinder = () => {
  const output = setup.outputEverything()
  let string = addGMBinderPretext()
  string += output.town
  string += addPageBreak()
  string += `<h1>Overview of the buildings in ${State.variables.town.name}</h1>`
  string += output.start
  string += addPageBreak()
  const target = {
    buildings: 'buildings',
    factions: 'factions',
    NPCs: 'NPCs'
  }
  for (const type in target) {
    string += addGMBinderPart(type)
    string += addPageBreak()
    for (const page in output[type]) {
      string += `<h2>${output[type][page].name}</h2>${output[type][page].output}`
      string += addPageBreak()
    }
    string += addPageBreak()
  }
  string += addGMBinderPosttext()
  return string
}

function addGMBinderPart (type) {
  return `<div class='partpage-dmg'>

<h1>${type}</h1>

</div>`
}

function addGMBinderPosttext () {
  return `
  > ##### Made Using Eigengrau's Generator
  > This (or parts of this document) was made using [Eigengrau's Generator](https://eeegen.com), an open source TTRPG generator. 
  >
  > * [Original seed used](https://eeegen.com/${location.hash} "Original source")
  > * [Patreon](https://www.patreon.com/join/eigengrausgenerator?)
  > * [Discord](https://discord.gg/4wYNwp2)
  > * [GitHub](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/t)
  `
}

function addGMBinderPretext () {
  return `<style>
  .phb#p1{ text-align:center; }
  .phb#p1:after{ display:none; }
  .dotted {
    border-bottom: 1px dotted #000;
    text-decoration: none;
    cursor: help;
  }
</style>

<div style='margin-top:450px;'></div>

# The ${State.variables.town.type} of ${State.variables.town.name}

<div style='margin-top:25px'></div>
<div class='wide'>

##### Created using Eigengrau's Generator

</div>

\\pagebreakNum


`
}

function addPageBreak () {
  return `

\\pagebreakNum

`
}

// function addColumnBreak () {
//   return `

// \\columnbreak

// `
// }

// function addBreaks (text) {
//   const tokenizer = new RegExp('\\S+(?:\\s+|$)', 'g')
//   State.temporary.countColumns = 0
//   let match = null
//   let newText = ''
//   let lastBrokenIndex = 0
//   while (match = tokenizer.exec(text)) {
//     if (match.index - lastBrokenIndex > 1780) {
//       newText += pageOrColumnBreak()
//       lastBrokenIndex = match.index
//     }
//     newText += match[0]
//   }
//   return newText
// }

// /**
//  * Discriminates between adding a page or column break.
//  * @returns {string}
//  */
// function pageOrColumnBreak () {
//   State.temporary.countColumns++
//   if (State.temporary.countColumns % 2 === 0) return addPageBreak()
//   return addColumnBreak()
// }
