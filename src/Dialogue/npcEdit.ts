import { NPC } from '@lib'

export const npcEdit = (npc: NPC) => {
  Dialog.setup(`Edit ${npc.name}`)
  Dialog.wiki(Story.get('NPCProfileEdit').processText())
  Dialog.open(undefined, setup.rerenderPage(passage()))
}
