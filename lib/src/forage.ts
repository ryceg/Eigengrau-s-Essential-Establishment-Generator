import { NPC } from '@lib'
import localforage from 'localforage'

export const addNPC = (npcs: Record<string, NPC>) => {
  localforage.setItem('npcs', npcs).then(function (value) {
    alert('yay!')
  }).catch(function (err) {
    console.error(err)
  })
}

export const retrieveNPC = (key: string): NPC => {
  alert(`test key of ${key}`)
  localforage.getItem('npcs').then(function (value: Record<string, NPC>) {
    alert(`${value[key].name} is working!`)
    return value[key]
  }).catch(function (err) {
    // This code runs if there were any errors
    console.error(err)
  })
}
