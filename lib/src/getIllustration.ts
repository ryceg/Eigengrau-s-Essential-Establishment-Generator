type Illustration =
| 'general-store-illustration'
| 'tavern-illustration'
| 'town-illustration'
| 'city-illustration'

const addLocalSizes = (sizes: number[]) => {
  return sizes.map(size => `(max-width: ${size}px) ${size}px`).join(', ')
}

const addLocalSourceSet = (illustration: Illustration, sizes: number[]) => {
  const sources = sizes.map(size => {
    return `./static/hero/${illustration}-${size}.jpg ${size}w`
  })
  sources.push(`./static/hero/${illustration}.jpg`)
  return sources.join(', ')
}

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
  img.sizes = addLocalSizes([640])
  img.srcset = addLocalSourceSet(illustration, [640])
  img.alt = `An image depicting ${lib.articles.output(illustration)}, created by artist Juho Huttunen.`
  return img.outerHTML
}
