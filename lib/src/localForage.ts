import { NPC, Road } from '@lib'
import { Deity, Pantheon } from 'lib/religion/religion'
import localforage from 'localforage'
import { Building, Faction } from 'src/setup'

type ForageTypes = NPC | Deity | Pantheon | Building | Faction | Road
export const initLocalForage = () => {
  initDB(
    [
      'town',
      'factions',
      'npcs',
      'roads',
      'buildings',
      'pantheon'
    ]
  )
}

export const initDB = (init: string[]) => {
  for (const key of init) {
    localforage.setItem(key, {})
  }
}

export const addNPCs = (npcs: Record<string, NPC>) => {
  const npcDBKey = 'npcs'
  localforage.setItem(npcDBKey, npcs).then(function (value) {
    alert(`Added NPCs! ${JSON.stringify(value)}`)
  }).catch(function (err) {
    console.error(err)
  })
}

export const addNPC = async (npc: NPC) => {
  const npcDBKey = 'npcs'
  localforage.getItem(npcDBKey).then(value => {
    Object.assign(value, {
      [npc.key]: npc
    })
    localforage.setItem(npcDBKey, value).then(() => {
      alert(`Added ${npc.name}`)
    })
  })
}

export const fetchNPC = async (key: string) => {
  try {
    const npcs = await fetchNPCs()
    return npcs[key]
  } catch (err) {
    console.error(err)
  }
}

export const fetchNPCs = () => {
  const npcDBKey = 'npcs'
  return fetchFromDB(npcDBKey) as Promise<Record<string, NPC>>
}

export const fetchFromDB = async (key: string) => {
  try {
    const store = await localforage.getItem(key)
    return store
  } catch (err) {
    console.error(err)
  }
}

export const addToDB = async (key: string, obj: ForageTypes) => {
  try {
    localforage.setItem(key, obj)
  } catch (err) {
    console.error(err)
  }
}

export const addToContainerDB = async (container: string, key: string, obj: ForageTypes) => {
  try {
    const value: Record<string, ForageTypes> | null = await localforage.getItem(container)
    if (value) {
      Object.assign(value, {
        [key]: obj
      })
      localforage.setItem(container, value).then(() => {
        // alert(`Added ${obj?.name}`)
        alert(JSON.stringify(Object.keys(value)))
      })
    }
  } catch (err) {
    if (err) console.error(err)
  }
}

export const fetchKeyObjFromDB = (key: string, objKey = 'npcs'): Promise<ForageTypes> => {
  const store = fetchFromDB(objKey)
  const obj = store.then(val => {
    if (val[key]) return val[key]
  })
  return obj
}

export const flushDB = async () => {
  const keysToKeep = ['settings', 'pantheon']
  const flushedKeys: string[] = []
  localforage.iterate(function (_value, key) {
    if (!keysToKeep.includes(key)) {
      flushedKeys.push(key)
      localforage.removeItem(key)
    }
  }).then(function () {
    console.log(`Iteration has completed, flushed ${flushedKeys}`)
  }).catch(function (err) {
    console.log(err)
  })
}
