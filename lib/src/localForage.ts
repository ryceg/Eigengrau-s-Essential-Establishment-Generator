import localforage from 'localforage'

export const initLocalForace = () => {
  localforage.setItem(lib.getUUID(), {
    factions: {},
    NPCs: {},
    roads: {},
    buildings: {}
  })
}
