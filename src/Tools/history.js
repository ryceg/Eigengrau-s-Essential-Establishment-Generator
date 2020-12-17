// uses State.variables.history
setup.history = (object, passageName, linkDescription) => {
  const history = State.variables.history
  passageName = passageName || object.passageName
  linkDescription = linkDescription || object.name
  if (Array.isArray(history)) {
    if (object.parentKey) {
      history.push({
        data: {
          key: object.parentKey,
          passageName: object.passageName || passageName,
          objectType: object.objectType,
          linkDescription: object.linkDescription || linkDescription
        },
        passageName: object.passageName,
        linkDescription: object.linkDescription
      })
    } else {
      history.push({
        data: {
          key: object.key,
          passageName: object.passageName || passageName,
          objectType: object.objectType,
          linkDescription: object.linkDescription || linkDescription
        },
        passageName,
        linkDescription
      })
    }
    // window.location.search = `${passageName}=${object.key}`
    setup.addGtagEvent()
  }
}
