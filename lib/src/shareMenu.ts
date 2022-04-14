import { logger } from '../logger'
import { random } from './random'

export function shareMenu () {
  const shareButton = document.querySelector('#menu-item-share > a')

  if (shareButton == null) {
    logger.warn('Could not find share button.')
    return
  }

  const originalButtonText = shareButton.textContent

  shareButton.addEventListener('click', () => {
    const { title, text } = random([
      {
        title: 'Town Generator',
        text: 'Automates the boring bits of town generation, ready to read out'
      },
      {
        title: 'Eigengrau\'s Generator',
        text: 'A town generator that does pretty much everything you could think of!'
      },
      {
        title: 'Just found this town generator app!',
        text: 'Automatically generates a whole town, ready to use immediately'
      }
    ])

    if (navigator.share) {
      navigator.share({ title, text, url: 'https://eigengrausgenerator.com' })
        .then(() => {
          showMessage(shareButton, 'Thanks! 😄')
        })
        .catch(error => {
          showMessage(shareButton, `Couldn't share 🙁: ${error}`)
        })
    }
  })

  function showMessage (element: Element | null, message: string) {
    if (element) {
      element.textContent = message
      setTimeout(() => {
        element.textContent = originalButtonText
      }, 2000)
    }
  }
}
