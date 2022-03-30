import { bakery } from './goodsAndServices/bakery'
import { confectionery } from './goodsAndServices/confectionery'
import { florist } from './goodsAndServices/florist'
import { tailor } from './goodsAndServices/tailor'
import { butcher } from './goodsAndServices/butcher'
import { cobbler } from './goodsAndServices/cobbler'
import { fletcher } from './goodsAndServices/fletcher'
import { jeweller } from './goodsAndServices/jeweller'
import { barber } from './goodsAndServices/barber'

export function populateGoodsAndServices (container) {
  container = {
    ...container,
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
  return container
}
