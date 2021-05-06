const sequence = [
  {
    target: 'passage-header',
    description: 'This is the breadcrumb navbar. It is your primary method of getting around, and retracing your steps.'
  },
  {
    target: 'brief-description',
    description: 'This is the brief description of the town; you can hover over the dotted parts to bring up tooltips with additional context or info.'
  },
  {
    target: 'quick-scenario-generator',
    description: 'This is the quick scenario generator, which is for quick non-combat focused encounters.'
  },
  {
    target: 'quick-scenario-generator',
    description: 'This is the quick scenario generator, which is for quick non-combat focused encounters.'
  },
  {
    target: 'detailed-description',
    description: 'This hyperlink takes you to the detailed town description, which outlines how the town functions, along with some stats.'
  }
]

const tourButton = () => {
  // const button = document.createElement('button')
  // button.textContent = 'Next'
  // button.style.marginTop = '0'
  // button.style.marginBottom = '0'
  // button.onclick = (ev) => {
  //   alert('Yay!')
  // }
  const button = $('<button/>', {
    text: 'Next',
    click () {
      setup.openDialog({
        header: 'Edit Pantheon',
        passage: 'EditPantheon',
        rerender: true
      })
    }
  })
  button.css('marginTop', 0)
  button.css('marginBottom', 0)
  return button.get(0).outerHTML
}

export const tippyTutorial = () => {
  const count = 0
  const obj = sequence[count]
  if (document.getElementById(obj.target)) {
    const tip = $(`#${obj.target}`)
    tippy(tip.get(0), {
      content: `<p style='margin-top: 0px'>${obj.description}</p>${tourButton()}`,
      animation: 'shift-toward',
      showOnCreate: true,
      arrow: true,
      duration: [100, 1000000],
      interactive: true
    })
  }
}
