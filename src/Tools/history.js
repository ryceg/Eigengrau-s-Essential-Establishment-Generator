setup.history = (object, passageName, linkDescription) => {
  const history = State.variables.history
  passageName = passageName || object.passageName
  linkDescription = linkDescription || object.name
  history.find(state => {
    if (state.data.key === object.key) {
      console.log('Existing object in the breadcrumb!')
      // history.splice(index)
    }
  })
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
    if (ga) {
      ga('send', {
        hitType: 'event',
        eventCategory: 'passage',
        eventAction: 'loaded',
        eventLabel: passageName
      })
      ga('send', {
        hitType: 'event',
        eventCategory: 'seed',
        eventAction: 'used',
        eventLabel: location.hash
      })
    }
  }
}
