type Illustration =
| 'general-store-illustration'
| 'tavern-illustration'
| 'town-illustration'

export const getIllustration = (illustration: Illustration, alt: string) => {
  let img = '<img '
  img += 'id="illustration" '
  img += `src="./src/Resources/img/hero/${illustration}.jpg" `
  // If it's in production, then we can add the srcset options, otherwise we might as well omit it.
  if (process.env.NODE_ENV === 'production' && location.origin !== 'file://') img += `srcset="./src/Resources/img/hero/${illustration}-x360.jpg 360w, ./src/Resources/img/hero/${illustration}-x411.jpg 411w, ./src/Resources/img/hero/${illustration}-x500.jpg 500w, ./src/Resources/img/hero/${illustration}-x576.jpg 576w, ./src/Resources/img/hero/${illustration}-x768.jpg 768w, ./src/Resources/img/hero/${illustration}-x992.jpg 992w, ./src/Resources/img/hero/${illustration}-x1200.jpg 1200w, ./src/Resources/img/hero/${illustration}.jpg" `
  img += `alt="${alt || `An image depicting ${lib.articles.output(illustration)}, created by artist Juho Huttunen.`}" `
  img += '/>'
  return img
}

// It would obviously be preferable to output actual <img>s instead of having it render via SugarCube.
// Unfortunately, I am not a clever man, and cannot figure it out.
export const getImage = (illustration: Illustration) => {
  const img = document.createElement('img')
  img.id = 'illustration'
  img.src = `./src/Resources/img/hero/${illustration}.jpg`
  img.srcset = `./src/Resources/img/hero/${illustration}-x360.jpg 360w, ./src/Resources/img/hero/${illustration}-x411.jpg 411w, ./src/Resources/img/hero/${illustration}-x500.jpg 500w, ./src/Resources/img/hero/${illustration}-x576.jpg 576w, ./src/Resources/img/hero/${illustration}-x768.jpg 768w, ./src/Resources/img/hero/${illustration}-x992.jpg 992w, ./src/Resources/img/hero/${illustration}-x1200.jpg 1200w, ./src/Resources/img/hero/${illustration}.jpg`
  img.alt = `An image depicting ${lib.articles.output(illustration)}, created by artist Juho Huttunen.`
  return img
}
