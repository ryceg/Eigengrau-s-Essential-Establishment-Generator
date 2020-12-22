import { ThresholdTable } from './rollFromTable'

type CookingMethods =
| ''
| 'ingredient'
| 'raw'
| 'boiled'
| 'sauteed'
| 'roasted'
| 'pickled'
| 'braised'
| 'toasted'
| 'fried'
| 'fermented'
| 'spiced'

type DishTypes =
  'main'
| 'entree'
| 'dessert'
| 'side'

type IngredientNames = keyof typeof ingredients

/** The 'dairy', 'meat', 'seafood' and 'animal product' autoflag their non-vegan / vegetarian-ness. */
type IngredientCategories =
  'staple'
| 'grain'
| 'meat'
| 'dairy'
| 'seafood'
| 'animal product'
| 'fruit'
| 'vegetable'
| 'berry'
| 'spice'
| 'baking'
| 'alcohol'

type CookingElements =
  'sauce'
| 'crust'
| 'garnish'
| ''

type DishTastes =
  'savoury'
| 'sweet'

interface Dishes {
  /** Override, for when you want a fancy name for your dish. */
  name?: string
  /** Override, for when there are multiple variants (chicken curry vs chickpea curry)
   * The sub-dish needs to specify ingredients that are specific to it- common ingredients go in `ingredients`.
  */
  types?: Dishes[]
  /** Flagging `isVegan` will automatically flag `isVegetarian` as true. */
  isVegetarian?: boolean
  /** Flagging `isVegan` will automatically flag `isVegetarian` as true. */
  isVegan?: boolean
  /** Can be an array (fried rice can be a main or a side).
   * @default 'main'
  */
  dishType?: DishTypes[]
  /** For use in conjunction with cooking elements to distinguish between savoury sauces and sweet ones.
   * @default 'savoury'
  */
  dishTastes?: DishTastes
  /** Override- typically is derived from the cost of ingredients. Cooking surcharge is calculated later (to account for things like communist towns, etc.) */
  cost?: number
  /** For when there's a very difficult dish, or it's cheaper than the cost of the ingredients (i.e. spoiled bread, etc.)
   * Expressed as a multiplicative of the cost.
  */
  preparationSurcharge?: number
  /** List of ingredients that need to be available (i.e. in the area or imported).
   * If it's more than twice as expensive as it would be normally, it will not be feasible.
   *
   * If it is an array of arrays, then it will pick randomly.
   * The name will be derived from the first in the array.
   * */
  ingredients: IngredientNames[]
  /** Useful for genericizing descriptions- sauces and such can be generated randomly to go on top of a haunch of venison.  */
  elements?: CookingElements[]
  /** A description, using a threshold table based on expertise
   * @example [40, 'it looks to be slightly undercooked, but certainly still edible.']
   */
  description?: ThresholdTable<string>
}

interface Ingredients {
  /** for one serving's worth, expressed in copper. */
  cost: number
  /** Where would you find this ingredient in the supermarket? */
  category: IngredientCategories
  /**
   * @default true
   */
  isVegetarian?: boolean
  isVegan?: boolean
  /** For ingredients that need minimal preparation.
   * It needs at least one cooking method in order to be able to be generated. */
  cookingMethods?: CookingMethods[]
  /** Defaults to main. Can be multiple (fried rice can be a main or a side). */
  dishType?: DishTypes[]

}

export const ingredients: Record<string, Ingredients> = {
  bread: {
    category: 'grain',
    cost: 3,
    cookingMethods: ['', 'toasted']
  },
  flour: {
    category: 'grain',
    cost: 1
  },
  pasta: {
    category: 'grain',
    isVegan: false,
    cost: 2
  },
  eggs: {
    category: 'animal product',
    cost: 1
  },
  milk: {
    category: 'dairy',
    cost: 1
  },
  cheese: {
    category: 'dairy',
    cost: 2
  },
  cocoa: {
    category: 'baking',
    cost: 21
  },
  sugar: {
    category: 'spice',
    isVegan: true,
    cost: 4
  },
  saffron: {
    category: 'spice',
    isVegan: true,
    cost: 120
  },
  rice: {
    category: 'grain',
    isVegan: true,
    cost: 1,
    cookingMethods: ['', 'fried'],
    dishType: ['main', 'side']
  },
  chickpeas: {
    category: 'staple',
    cost: 2,
    cookingMethods: ['spiced']
  },
  tomatoes: {
    // don't gimme any grief over this...
    category: 'vegetable',
    cost: 2,
    cookingMethods: ['roasted']
  },
  beef: {
    category: 'meat',
    cost: 10,
    cookingMethods: ['roasted', 'braised']
  },
  chicken: {
    category: 'meat',
    cost: 10,
    cookingMethods: ['roasted', 'braised', 'fried']
  }
}

export const food: Record<string, Dishes> = {
  curry: {
    ingredients: ['rice'],
    types: [
      {
        name: 'beef curry',
        ingredients: ['beef']
      },
      {
        name: 'chickpea curry',
        ingredients: ['chickpeas']
      }
    ]
  },
  cake: {
    dishTastes: 'sweet',
    dishType: ['dessert'],
    ingredients: ['sugar', 'eggs', 'milk', 'flour'],
    types: [
      {
        name: 'chocolate cake',
        ingredients: ['cocoa']
      }
    ]
  }

}
