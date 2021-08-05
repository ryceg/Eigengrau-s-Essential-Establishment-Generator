// export const shareMenu = () => {
const shareBtn = document.querySelector('.share-btn')
const ogBtnContent = shareBtn.textContent

const url = document.querySelector('link[rel=canonical]')?.textContent ||
            window.location.href

shareBtn.addEventListener('click', () => {
  const title = lib.random([
    "Eigengrau's Generator: A Town Generator Unlike Any Other",
    'Automate the boring bits of city generation',
    'Just found this cool town generator app!'
  ])
  if (navigator.share) {
    navigator.share({
      title,
      url
    }).then(() => {
      showMessage(shareBtn, 'Thanks! 😄')
    })
      .catch(err => {
        showMessage(shareBtn, `Couldn't share 🙁: ${err}`)
      })
  } else {
    showMessage(shareBtn, 'Not supported 🙅‍')
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
