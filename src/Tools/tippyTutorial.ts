import Shepherd from 'shepherd.js'

export const tippyTutorial = () => {
  const tour = new Shepherd.Tour({
    modalContainer: document.getElementById('passage-start'),
    useModalOverlay: true,
    stepsContainer: document.getElementById('passages'),
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      },
      buttons: [
        {
          action () {
            return this.back()
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action () {
            return this.next()
          },
          text: 'Next'
        }
      ],
      scrollTo: true,
      classes: 'descriptive'
      // scrollTo: true
      // scrollTo: { behavior: 'smooth', block: 'center' }
    },
    steps: [
      {
        title: 'Brief Overview',
        text: 'This is the brief description of the town; you can hover over the dotted parts to bring up tooltips with additional context or info.',
        attachto: {
          element: '#story-title',
          on: 'bottom'
        }
      },
      {
        title: 'Quick Scenarios',
        text: 'This is the quick scenario generator, which is for quick non-combat focused encounters.',
        attachto: {
          element: '#quick-scenario-generator',
          on: 'auto'
        }
      },
      {
        title: 'Town Description',
        text: 'This hyperlink takes you to the detailed town description, which outlines how the town functions, along with some stats.',
        attachto: {
          element: '#detailed-description',
          on: 'auto'
        }
      },
      {
        title: 'Sidebar menu',
        text: 'The sidebar menu is where you can access saving, the toolbox (a collection of standalone tools), and export to Foundry.',
        attachTo: {
          element: '#menu-story',
          on: 'right'
        },
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 300] } }]
        }
      },
      {
        title: 'Breadcrumb',
        text: 'This is the breadcrumb, and is used to navigate around.',
        attachTo: {
          element: '#passage-header',
          on: 'bottom'
        }
      }
    ]
  })

  tour.start()
}
