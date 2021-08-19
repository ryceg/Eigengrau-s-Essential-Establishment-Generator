export const randomiseNPC = () => {
  return {
    gender: ['man', 'woman'].random(),
    race: Object.keys(lib.raceTraits).random(),
    ageStage: ['young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'].random()
  }
}
