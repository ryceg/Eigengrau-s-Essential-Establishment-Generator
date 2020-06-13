setup.createHistory = (object, passageName, linkDescription) => {
  const history = State.variables.history
  passageName = passageName || object.passageName
  linkDescription = linkDescription || object.name
  // history.forEach(state => {
  //   const index = state.data.indexOf(object)
  //   if (index > -1) {
  //     history.splice(index)
  //   }
  // })
  history.push({ data: object, passageName, linkDescription })
}
