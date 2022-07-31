import { random } from './random'
import { assign } from './utils'
import { createTippyFull } from './tippy'

interface TreasureMap {
  one: string
  two: string
  three: string
  four: string
  five: string
  six: string
  seven: string
  readout: string
  tippyWord: string
}

export const treasureMap = {
  create: (base?: Partial<TreasureMap>): TreasureMap => {
    const map = {
      one: random(data.one()),
      two: random(data.two()),
      three: random(data.three()),
      four: random(data.four()),
      five: random(data.five()),
      six: random(data.six()),
      seven: random(data.seven()),
      ...base
    }

    assign(map, {
      readout: `${random(['Find the', 'Start at the'])} ${map.one} Then, ${map.two} until you find the ${map.three} Then, ${map.four} until you reach ${map.five} Then, ${map.six} You will find the treasure ${map.seven}`
    })

    assign(map, {
      tippyWord: createTippyFull(map.readout, 'map')
    })

    return map
  }
}

const data = {
  one: () => ['big cracked boulder.', 'lightning-blasted oak tree.', 'rock shaped like a horse.', 'stone wall with a piece of volcanic glass .', 'exact center of the village/town/city.', 'statue of a famous person.', 'shipwreck of an infamous pirate ship.', 'bones of the black dragon.', 'cavern near the waterfall.', 'top of the volcano.', 'exact center of the lake.', 'abandoned temple.', 'old fort.', 'old standing circle.', 'road marker leading south.', 'exact center of the longest bridge.', "hangman's scaffold.", "king's/queens throne room.", 'crossroads.', 'largest tomb in the cemetery.', 'last waterfall on the great river', 'big well', 'yellow barn outside of town'],
  two: () => [`go north for ${random(1, 4)} miles`, `go south for ${random(1, 4)} miles`, `go east for ${random(1, 4)} miles`, `go west for ${random(1, 4)} miles`, `go northeast for ${random(1, 4)} miles`, `go northwest for ${random(1, 4)} miles`, `go southeast for ${random(1, 4)} miles`, `go southwest for ${random(1, 4)} miles`],
  three: () => ['mountain shaped like a tooth.', 'hill shaped like a saddle.', 'cliffs of red stone.', 'tiny caves in a white hill.', 'old fortress ruins.', 'dried up creekbed.', 'swift-running river.', 'waterfall.', 'abandoned village.', 'tree with a large hole in it.', 'toppled statue of a deity.', 'landslide of shale and gravel.', 'steep-sided valley with blue flowers.', 'beach strewn with black seashells.', 'broken remains of a watchtower.', 'road marker pointing east.', "dilapidated hunter's shack.", 'crossroads.', 'hand-cut stairway into the hillside.', 'the canyon with natural stairs leading down.', 'white tree.', 'exposed dragon skull.', 'stone island in the center of a small lake.'],
  four: () => [`go north for ${random(1, 4)} miles`, `go south for ${random(1, 4)} miles`, `go east for ${random(1, 4)} miles`, `go west for ${random(1, 4)} miles`, `go northeast for ${random(1, 4)} miles`, `go northwest for ${random(1, 4)} miles`, `go southeast for ${random(1, 4)} miles`, `go southwest for ${random(1, 4)} miles`],
  five: () => ['rock shaped like a heart.', "mountain shaped like a bird's head.", 'petrified forest.', 'salt lake.', 'dried up swampland.', 'broken bridge.', 'old abandoned mill.', 'the ruined tower of a famous mage.', 'the ancient cemetery.', 'the mossy limestone cliffs.', 'the old granite quarry.', 'the abandoned campgrounds.', 'the vandalized statue of a former ruler.', 'the crossroads.', 'the road marker pointing west.', 'shipwreck of a well-known war ship.', 'minaret.', 'quicksand.', 'hills honeycombed with caves.', "old king's forest.", 'edge of the great desert.', 'great pine tree.', 'boulder split in two.', 'enormous sacrificial altar.', 'unholy temple to a forgotten god.', 'eternally burning campfire.'],
  six: () => [`go north for ${random(1, 4)} miles.`, `go south for ${random(1, 4)} miles.`, `go east for ${random(1, 4)} miles.`, `go west for ${random(1, 4)} miles.`, `go northeast for ${random(1, 4)} miles.`, `go northwest for ${random(1, 4)} miles.`, `go southeast for ${random(1, 4)} miles.`, `go southwest for ${random(1, 4)} miles.`],
  seven: () => ['buried at the foot of a cliff.', 'buried under a mighty oak tree.', 'buried under some tower ruins.', 'buried under a pile of skulls.', 'buried in the grave of a famous person.', 'hidden at the top of an old tower.', 'hidden behind an old painting.', "hidden at the bottom of an old rabbit's warren.", 'hidden in the bole of an ancient elm tree.', "hidden in a shipwreck's hold.", 'guarded by assassins.', 'guarded by monsters.', 'guarded by soldiers.', 'guarded by spirits.', 'guarded by a big monster.', 'protected by magical wards.', 'protected by astral locks.', 'protected by physical traps.', 'protected by necromantic curses.', 'protected by spiritual prayers.', 'protected by a terrible riddle.', 'locked behind a holy ward.', 'buried in an old latrine.', "mixed into a dragon's horde.", 'hidden at the bottom of the chasm.', 'locked behind arcane spells.', 'stuck at the top of a great elm tree.', 'buried in an iron chest.', 'in a wooden chest in the basement of the cabin.', 'stuffed in the crack between two boulders.', 'buried at the end of the black alleyway.']
}
