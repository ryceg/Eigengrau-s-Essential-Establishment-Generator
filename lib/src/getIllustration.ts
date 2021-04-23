type Illustration =
| 'general-store-illustration'
| 'tavern-illustration'
| 'town-illustration'
| 'city-illustration'

const getPath = () => {
  if (process.env.NODE_ENV === 'production' && location.origin !== 'file://') {
    return './'
  }
  return '../'
}

const addLocalSourceSet = (illustration: Illustration, sizes: string[] = ['360', '411', '500', '576', '768', '992', '1200']) => {
  let img = ''
  const path = getPath()
  for (const size of sizes) {
    img += `${path}src/Resources/img/hero/${illustration}-x${size}.jpg ${size}w, `
  }
  return img
}

export const getCustomImage = (url: URL) => {
  const img = document.createElement('img')
  img.id = 'illustration'
  img.src = url as unknown as string
  img.alt = 'A custom-defined image.'
  return img.outerHTML
}

export const getLocalImage = (illustration: Illustration) => {
  const img = document.createElement('img')
  const path = getPath()
  img.id = 'illustration'
  img.src = `${path}src/Resources/img/hero/${illustration}.jpg`
  if (process.env.NODE_ENV === 'production' && location.origin !== 'file://') img.srcset = `${addLocalSourceSet(illustration)} ${path}src/Resources/img/hero/${illustration}.jpg`
  img.alt = `An image depicting ${lib.articles.output(illustration)}, created by artist Juho Huttunen.`
  return img.outerHTML
}
