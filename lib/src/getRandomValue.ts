import { random } from './random'

/**
 * Fetches a random value from an object.
 * Used to fetch when it's not important which it fetches;
 * any random tavern, or any random Patreon character.
 */
export function getRandomValue<Value> (target: Record<string | number, Value>) {
  return random(Object.values(target))
}
