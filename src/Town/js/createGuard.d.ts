interface Setup {
  createGuard(town: Town): Guard
}

interface Guard {
  associatedTown: string,
  objectType: string,
  captain: NPC,
  passageName: string,
  livery: string
}
