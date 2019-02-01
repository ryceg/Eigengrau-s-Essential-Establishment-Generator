setup.createPet = {
  function petAny(){
    let pets = setup.animalData.animals.filter(val => {
      return val.pet == true;
    })
    return pets.random()
  }
}
