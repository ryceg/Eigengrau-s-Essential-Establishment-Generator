interface Setup {
  createGuard(town: Town): Guard
}

interface Guard {
  objectType: string,
  captain: NPC,
  passageName: string,
  livery: string
}
