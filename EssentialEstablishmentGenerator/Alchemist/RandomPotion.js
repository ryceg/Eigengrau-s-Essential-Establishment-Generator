import { link } from '../../src/engine/html'
import { set } from '../../src/engine/story'

export function RandomPotion () {
  return `${link('<h4>Generate a random potion!</h4>', () => {
    const $randomPotion = set('$randomPostion', setup.createAlchemy({ type: 'potion' }))

    return `
<div class='descriptive'><h3>${$randomPotion.titleReadout}</h3>${$randomPotion.descriptionReadout}</div>
<blockquote>${$randomPotion.effectReadout}</blockquote>
<<replace "#randpotion">>
<div class='descriptive'><h3>${$randomPotion.titleReadout}</h3>${$randomPotion.descriptionReadout}</div>
<blockquote>${$randomPotion.effectReadout}</blockquote>
<</replace>>`
  })}
<span id="randpotion"></span>`
}
