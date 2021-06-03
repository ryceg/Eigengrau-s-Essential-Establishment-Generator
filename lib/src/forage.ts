/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NPC } from '@lib'
import * as db from 'localforage'

export const initDB = (init: string[]) => {
  for (const key of init) {
    db.setItem(key, {})
  }
}

export const addNPCs = (npcs: Record<string, NPC>) => {
  db.setItem('npcs', npcs).then(function (value) {
    alert(`Added NPCs! ${JSON.stringify(value)}`)
  }).catch(function (err) {
    console.error(err)
  })
}

export const addNPC = async (npc: NPC) => {
  db.getItem('npcs').then(value => {
    // @ts-ignore
    value[npc.key] = npc
    db.setItem('npcs', value).then(() => {
      alert(`Added ${npc.name}`)
    }).catch(function (err) {
      console.error(err)
    })
  })
  // try {
  //   let npcs: Record<string, NPC>
  //   const store: Promise<Record<string, NPC>> = await db.getItem('npcs')
  //   store.then(value => {
  //     npcs = value
  //     npcs[npc.key] = npc
  //   }).finally(() => {
  //     db.setItem('npcs', npcs)
  //   })
  // } catch (err) {
  //   console.error(err)
  // }
}

export const retrieveNPC = async (key: string) => {
  try {
    const npcs = await getNPCs()
    return npcs[key]
  } catch (err) {
    console.error(err)
  }
}

export const getNPCs = async () => {
  return getFromDB('npcs') as Promise<Record<string, NPC>>
}

export const getFromDB = async (key: string) => {
  try {
    const store = await db.getItem(key)
    return store
  } catch (err) {
    console.error(err)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addToDB = async (key: string, obj: any) => {
  try {
    const store = await db.setItem(key, obj)
    console.log(store)
  } catch (err) {
    // This code runs if there were any errors.
    console.error(err)
  }
}

export const getObjFromDB = (key: string, objKey = 'npcs') => {
  const store = getFromDB(objKey)
  const obj = store.then(val => {
    // @ts-ignore
    if (val[key]) return val[key]
  })
  return obj
}

export const flushDB = async () => {
  const keysToKeep = ['settings', 'pantheon']
  const flushedKeys: string[] = []
  db.iterate(function (_value, key) {
    if (!keysToKeep.includes(key)) {
      flushedKeys.push(key)
      db.removeItem(key)
    }
  }).then(function () {
    console.log(`Iteration has completed, flushed ${flushedKeys}`)
  }).catch(function (err) {
    console.log(err)
  })
}
