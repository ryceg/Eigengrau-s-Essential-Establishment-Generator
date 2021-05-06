import introJs from 'intro.js'

// const tourButton = () => {
//   // const button = document.createElement('button')
//   // button.textContent = 'Next'
//   // button.style.marginTop = '0'
//   // button.style.marginBottom = '0'
//   // button.onclick = (ev) => {
//   //   alert('Yay!')
//   // }
//   const button = $('<button/>', {
//     text: 'Next',
//     click () {
//       alert('test')
//     }
//   })
//   button.css('marginTop', 0)
//   button.css('marginBottom', 0)
//   return button.get(0).outerHTML
// }

export const tippyTutorial = () => {
  // const count = 0
  // const obj = sequence[count]
  // if (document.getElementById(obj.target)) {
  // const tip = $(`#${obj.target}`)
  console.log('intro js')
  introJs().setOptions({
    steps: [
      {
        element: '#passage-header',
        intro: 'This is the breadcrumb navbar. It is your primary method of getting around, and retracing your steps.'
      },
      {
        element: '#brief-description',
        intro: 'This is the brief description of the town; you can hover over the dotted parts to bring up tooltips with additional context or info.'
      },
      {
        element: '#quick-scenario-generator',
        intro: 'This is the quick scenario generator, which is for quick non-combat focused encounters.'
      },
      {
        element: '#quick-scenario-generator',
        intro: 'This is the quick scenario generator, which is for quick non-combat focused encounters.'
      },
      {
        element: '#detailed-description',
        intro: 'This hyperlink takes you to the detailed town description, which outlines how the town functions, along with some stats.'
      }
    ]
    // tippy(tip.get(0), {
    //   // content: `<p style='margin-top: 0px'>${obj.description}</p>${tourButton()}`,
    //   content: obj.description,
    //   animation: 'shift-toward',
    //   showOnCreate: true,
    //   arrow: true,
    //   delay: [300],
    //   duration: [100, 1000000],
    //   hideOnClick: true
    //   // interactive: true
    // })
  }).start()
}
