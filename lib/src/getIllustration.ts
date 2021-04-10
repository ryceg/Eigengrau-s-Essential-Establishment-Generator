import { Town } from '../town/_common'

type Illustration =
| 'general-store-illustration'
| 'tavern-illustration'
| 'town-illustration'
| 'city-illustration'

export const getIllustration = (illustration: Illustration, alt: string) => {
  let img = '<img '
  img += 'id="illustration" '
  const path = getPath()

  img += `src="${path}src/Resources/img/hero/${illustration}.jpg" `
  // If it's in production, then we can add the srcset options, otherwise we might as well omit it.
  if (process.env.NODE_ENV === 'production' && location.origin !== 'file://') img += `srcset="${path}src/Resources/img/hero/${illustration}-x360.jpg 360w, ${path}src/Resources/img/hero/${illustration}-x411.jpg 411w, ${path}src/Resources/img/hero/${illustration}-x500.jpg 500w, ${path}src/Resources/img/hero/${illustration}-x576.jpg 576w, ${path}src/Resources/img/hero/${illustration}-x768.jpg 768w, ${path}src/Resources/img/hero/${illustration}-x992.jpg 992w, ${path}src/Resources/img/hero/${illustration}-x1200.jpg 1200w, ${path}src/Resources/img/hero/${illustration}.jpg" `
  img += `alt="${alt || `An image depicting ${lib.articles.output(illustration)}, created by artist Juho Huttunen.`}" `
  img += '/>'
  return img
}

const getPath = () => {
  if (process.env.NODE_ENV === 'production' && location.origin !== 'file://') {
    return './'
  }
  return '../'
}

// It would obviously be preferable to output actual <img>s instead of having it render via SugarCube.
// Unfortunately, I am not a clever man, and cannot figure it out.
export const getImage = (illustration: Illustration) => {
  const img = document.createElement('img')
  const path = getPath()
  img.id = 'illustration'
  img.src = `${path}src/Resources/img/hero/${illustration}.jpg`
  img.srcset = `${path}src/Resources/img/hero/${illustration}-x360.jpg 360w, ${path}src/Resources/img/hero/${illustration}-x411.jpg 411w, ${path}src/Resources/img/hero/${illustration}-x500.jpg 500w, ${path}src/Resources/img/hero/${illustration}-x576.jpg 576w, ${path}src/Resources/img/hero/${illustration}-x768.jpg 768w, ${path}src/Resources/img/hero/${illustration}-x992.jpg 992w, ${path}src/Resources/img/hero/${illustration}-x1200.jpg 1200w, ${path}src/Resources/img/hero/${illustration}.jpg`
  img.alt = `An image depicting ${lib.articles.output(illustration)}, created by artist Juho Huttunen.`
  return img
}

export const townOrCity = (town: Town) => {
  if (town.type === 'city' || town.type === 'town') return 'city-illustration'
  return 'town-illustration'
}
