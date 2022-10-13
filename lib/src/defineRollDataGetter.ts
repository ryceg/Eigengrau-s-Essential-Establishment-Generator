import { logger } from '../logger'
import { last, assert } from './utils'
import { random } from './random'

interface Named {
  name?: string
}

interface Rolled {
  roll: Record<string, number>
}

export type RollArray = [number, ...unknown[]][]

export type RollData<T extends Rolled> = {
  readonly [P in keyof T['roll']]: RollArray
};

/**
 * This handles setting up getters and setters for attributes like wealth,
 * cleanliness and such.
 *
 * It expects the `obj` (the one that is getting the attributes), and the
 * `rolls` (the one that is providing the descriptions).
 *
 * It needs the propName to be exact, unless the optional `keyName` is specified.
 * This is for when you might want to tie several properties to the same attribute,
 * i.e. cleanliness controlling bedleanliness.
 *
 * The `index` is an optional argument, which tells the function to look at
 * a different location in the array for the string. This is most useful for
 * when you have multiple descriptions tied to the same thing
 * (long and short descriptions, or cleanliness controlling bedCleanliness as well.)
 */
export function defineRollDataGetter <T extends Rolled & Named> (obj: T, rolls: RollArray, propName: keyof T & string, keyName = propName, index = 1, rollLocation = obj.roll) {
  logger.openGroup('defineRollDataGetter')

  // eslint-disable-next-line prefer-rest-params
  logger.info(arguments)

  if (!obj[propName]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    obj[propName] = '' as any
  }

  Object.defineProperty(obj, propName, {
    get (this: T) {
      if (this.name) {
        logger.info(`Fetching ${this.name} ${propName}.`)
      }

      const rollArray = rolls

      let result = rollArray.find(desc => {
        if (rollLocation) {
          return desc[0] <= rollLocation[keyName]
        } else {
          return desc[0] <= this.roll[keyName]
        }
      })

      if (typeof result === 'undefined') {
        logger.info(`Failed to get a descriptor that matched the roll of ${this.roll[propName]} for ${propName}.`)
        result = last(rollArray)
      }

      const resultValue = result[index]

      if (Array.isArray(resultValue)) {
        result[index] = random(resultValue)
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this[`_${propName}`] = resultValue || result
      return this[`_${propName}` as keyof typeof obj]
    },
    set (val) {
      logger.info(`Setting ${this.name} ${propName}.`)
      const rollArray = rolls
      assert(Array.isArray(rollArray))

      let result = rollArray.find(desc => {
        if (rollLocation) {
          return desc[0] <= rollLocation[keyName]
        } else {
          return desc[0] <= this.roll[keyName]
        }
      })

      if (result === undefined) {
        logger.info(`Failed to get a descriptor that matched the roll of ${this.roll[propName]} for ${propName}.`)
        result = last(rollArray)
      }

      this[`_${propName}`] = val || result[index]
      return this[`_${propName}`]
    }
  })

  logger.closeGroup()
}
