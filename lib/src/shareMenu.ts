export const shareMenu = () => {
  const shareBtn = document.querySelector('#menu-item-share > a') as Element
  const ogBtnContent = shareBtn.textContent

  shareBtn.addEventListener('click', () => {
    const examples: {
      title: string
      text: string
    }[] = [
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
    ]
    const { title, text } = lib.random(examples)
    const url = 'https://eigengrausgenerator.com'
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url
      }).then(() => {
        showMessage(shareBtn, 'Thanks! 😄')
      })
        .catch(err => {
          showMessage(shareBtn, `Couldn't share 🙁: ${err}`)
        })
    }
  })

  function showMessage (element: Element | null, msg: string) {
    if (element) {
      element.textContent = msg
      setTimeout(() => {
        element.textContent = ogBtnContent
      }, 2000)
    }
  }
}
