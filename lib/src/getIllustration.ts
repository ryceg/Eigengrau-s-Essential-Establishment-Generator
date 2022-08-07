import { BuildingTypeName } from 'lib/buildings/_common'

type Illustration =
`${BuildingTypeName}-illustration`
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

export const getLocalImage = (illustration: Illustration, sizes: number[] = [640]) => {
  const img = document.createElement('img')
  img.id = 'illustration'
  img.src = `./static/hero/${illustration}.jpg`
  img.sizes = addLocalSizes(sizes)
  img.srcset = addLocalSourceSet(illustration, sizes)
  img.alt = `An image depicting ${lib.articles.output(illustration)}, created by artist Juho Huttunen.`
  return img.outerHTML
}
