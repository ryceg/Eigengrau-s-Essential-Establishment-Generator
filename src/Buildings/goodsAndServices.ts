import { Town } from '../../lib/town/_common'
import { Building, BuildingTypeName } from '../../lib/buildings/_common'
import { bakery } from './goodsAndServices/bakery'
import { confectionery } from './goodsAndServices/confectionery'
import { florist } from './goodsAndServices/florist'
import { tailor } from './goodsAndServices/tailor'
import { butcher } from './goodsAndServices/butcher'
import { cobbler } from './goodsAndServices/cobbler'
import { fletcher } from './goodsAndServices/fletcher'
import { jeweller } from './goodsAndServices/jeweller'
import { barber } from './goodsAndServices/barber'
import { BuildingOpts } from 'lib/buildings/BuildingToCreate'
interface GoodsAndServices {
  default: {
    create(
      type: keyof GoodsAndServices
    ): (town: Town, opts?: BuildingOpts) => unknown
  }
  bakery: GoodsAndService & {
    name: {
      nounBakedGood: string[]
      beast: string[]
      foodAdjective: string[]
    }
  }
  confectionary: GoodsAndService & {
    name: {
      foodAdjective: string[]
    }
  }
  florist: GoodsAndService
  tailor: GoodsAndService
  butcher: GoodsAndService
  cobbler: GoodsAndService
  fletcher: GoodsAndService
  barber: GoodsAndService
  jeweller: GoodsAndService
}

export interface GoodsAndService {
  create(town: Town, building: Building, opts?: BuildingOpts): Building
  name: {
    function(town: Town, building: Building): string
    unique: string[]
    noun: string[]
    adjective: string[]
    wordNoun: string[]
    adjectivePerson: string[]
  }
  PassageFormat(): string[]
  profession: GoodsAndServicesProfession
  goods: GeneralGood[]
  type: string
  notableFeature: string[]
  specialty: string[]
}

interface GoodsAndServicesProfession {
  name: string
  opts: {
    profession: string
    hasClass: boolean
    idle: string[]
  }
}

interface GeneralGood {
  summary: string
  cost: number
  type?: string
  description: string
  exclusions?(town: Town, building: Building): boolean
}

export const goodsAndServices: GoodsAndServices = {
  default: {
    // this function is curried to be compatible with the buildingTypes array
    create: (type: BuildingTypeName) => (town: Town, opts?: BuildingOpts) => {
      // this is the template for the creation of generic buildings; i.e. those that are present in this list.
      // It is *not* for taverns, town squares, castles, or anything large scale.
      // this is why it is distinct from the lib.createBuilding() function; everything needs lib.createBuilding, not everything needs setup.goodsAndServices.default.create()
      console.groupCollapsed(`setup.goodsAndServices.default.create()ing ${lib.articles.output(type)}`)
      const building = Object.assign({
        type,
        buildingType: type,
        objectType: 'building',
        passageName: 'GenericPassage',
        initPassage: 'GenericPassage'
      }, lib.createBuilding(town, type, opts?.building))
      building.wordNoun ??= opts?.building?.wordNoun || lib.random(setup.goodsAndServices[building.type].name.wordNoun) || 'building'
      building.PassageFormat ??= opts?.building?.PassageFormat || setup.goodsAndServices[building.type].PassageFormat()
      setup.goodsAndServices[type].create(town, building, opts)
      lib.createStructure(town, building)

      console.groupEnd()
      return building
    }
  },
  bakery,
  confectionery,
  florist,
  tailor,
  butcher,
  cobbler,
  fletcher,
  jeweller,
  barber
}

export const initGoodsAndServices = () => {
  setup.goodsAndServices = goodsAndServices
}
