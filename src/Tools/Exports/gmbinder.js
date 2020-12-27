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
  const partIllustrations = {
    buildings: `
<img src='https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/blob/master/src/Resources/tavern-illustration.jpg?raw=true' class='cover-illustration'>

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0004.png' class='watercolour'>
`,
    NPCs: `
    <img src='https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/blob/master/src/Resources/general-store-illustration.jpg?raw=true' class='cover-illustration'>

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0004.png' class='watercolour'>
`,
    factions: `

<img src='https://cdnb.artstation.com/p/assets/images/images/019/755/997/large/juho-huttunen-bittervine-emissary.jpg?1564881662' class='cover-illustration' style="position:absolute; left:0; top:250px">

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0008.png' class='watercolour'>

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0005.png' class='watercolour'>

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0008.png' class='watercolour' style="transform:rotate(180deg)">

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0005.png' class='watercolour' style="transform:rotate(180deg)">

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0005.png' class='watercolour' style="transform:rotate(180deg)">`
  }
  let result = `<div class='partpage-dmg'>

  <h1>${type}</h1>
  
  `
  if (partIllustrations[type]) {
    result += partIllustrations[type]
  }
  result += `
  </div>
  `
  return result
}

function addGMBinderPosttext () {
  return `
  \\pagebreak
   
   <style>
     /** Change the p2 to whatever page number is the last page in your document **/
     .phb#p2:after { display:none; }
   </style>
   
   <div class='back-cover-image'></div>
   
   <div style='margin-top:20px;'></div>
   
   <div class='back-cover-header'>
   
  Made Using
  
  Eigengrau's
  
  Generator
   
   </div>
   
   <div class='back-cover-text'>
   
    ##### Made Using [A Generator Unlike Any Other](https://eigengrausgenerator.com)
    This (or parts of this document) was made using [Eigengrau's Generator](https://eeegen.com), an open source TTRPG generator developed by [Rhys Gray](http://rhysgraymusic.com).
  * Artwork by [Juho Huttunen](https://www.artstation.com/northernhermit "Juho takes commissions! I can recommend him highly.")
  * [Original seed used](https://eeegen.com/#healthyimpishhairstreak "Original source")
  * [Patreon](https://www.patreon.com/join/eigengrausgenerator?)
  * [Discord](https://discord.gg/4wYNwp2)
  * [GitHub](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/t)
    
   </div>
   
   <div class='back-cover-diamond' style='top: 679px;'></div>
   
   <div style='margin-top:35px;'></div>
   
   <div class='back-cover-close'>
   
  You're probably going to want to delete either this side or the following, which is in the right hand column so you can credit the other people that helped you make this. That's alright- but please do credit us!
   
   </div>
   
   
   
   <div class='back-cover-logo-link'>
   
   [EIGENGRAUSGENERATOR.COM](https://eigengrausgenerator.com)
   
   </div>
   
   \\columnbreak
   
   <div class='back-cover-right'>
   
   ##### Made Using [Eigengrau's Generator](https://eigengrausgenerator.com)
   
    This (or parts of this document) was made using [Eigengrau's Generator](https://eeegen.com), an open source TTRPG generator developed by [Rhys Gray](http://rhysgraymusic.com).
  * Artwork by [Juho Huttunen](https://www.artstation.com/northernhermit "Juho takes commissions! I can recommend him highly.")
  * Watercolour stains by [/u/flamableconcrete](https://watercolors.giantsoup.com/)
  * [Original seed used](https://eeegen.com/${location.hash} "Original source")
  * [Patreon](https://www.patreon.com/join/eigengrausgenerator?)
  * [Discord](https://discord.gg/4wYNwp2)
  * [GitHub](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/t)
    
   
   </div>
   `
}

function addGMBinderPretext () {
  return `<style>
  /* Background */
    .phb{ background-image: url('https://gmbinder.com/images/UCIUXyr.jpg') }
    .phb{ background-size: cover }
  
  /* Notes */
    .phb blockquote {background-color: #ebcec3}
    .phb hr + blockquote tr:nth-child(odd) td {background-color: #FDF1DC;}
  
  /* Tables */
    .phb hr+section blockquote tr:nth-child(odd) 
    td {background-color:transparent; }
  
  /* Footer */
    .phb .pageNumber {color: rgba(0, 0, 0, 0.6)}
    .phb .footnote {color: rgba(0, 0, 0, 0.6)}
    .phb:after{ background-image: url('https://gmbinder.com/images/EsLXSby.png') }
    
      .dotted {
      border-bottom: 1px dotted #000;
      text-decoration: none;
      cursor: help;
    }
    
    a {
        color: #111;
        text-decoration: none;
        font-weight: bold
    }
    a:hover {
      text-decoration: none;
    }
    
   .cover-illustration {
        width: 100%;
        position: relative;
        left: 0;
        right: 0;
        bottom: -65px;
    }
    
   .watercolour {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 816px;
        transform: rotate(180deg);
    }
  </style>

<div style='margin-top:450px;'></div>

# The ${State.variables.town.type} of ${State.variables.town.name}

<div style='margin-top:25px'></div>
<div class='wide'>

##### Created using [Eigengrau's Generator](https://eigengrausgenerator.com)

###### Developed by [Rhys Gray](http://rhysgraymusic.com)

Artwork by [Juho Huttunen](https://www.artstation.com/northernhermit "Juho takes commissions! I can recommend him highly.")


<img src='https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/blob/master/src/Resources/town-illustration.jpg?raw=true' class='cover-illustration' style="position:absolute; bottom:170px; left:0px">

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0004.png' class='watercolour' style="transform:rotate(0deg);">

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
