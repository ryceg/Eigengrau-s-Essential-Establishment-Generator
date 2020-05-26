interface Setup {
  misc: SetupMisc
}

interface SetupMisc {
  riddles: Riddle[]
}

interface Riddle {
  answer: string
  question: string[]
}
