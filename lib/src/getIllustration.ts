type Illustration =
| 'general-store-illustration'
| 'tavern-illustration'
| 'town-illustration'
| 'city-illustration'

export const getCustomImage = (src: string, id = 'illustration') => {
  const img = document.createElement('img')
  img.id = id
  img.src = src
  img.alt = 'A custom-defined image.'
  return img.outerHTML
}

export const getLocalImage = (illustration: Illustration) => {
  const img = document.createElement('img')
  img.id = 'illustration'
  img.src = `./static/hero/${illustration}.jpg`
  img.alt = `An image depicting ${lib.articles.output(illustration)}, created by artist Juho Huttunen.`
  return img.outerHTML
}
