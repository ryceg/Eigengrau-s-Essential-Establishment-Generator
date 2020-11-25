// uses State.variables.history
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
    // window.location.search = `${passageName}=${object.key}`
    if (window['ga-disable-UA-119249239-1'] !== true && typeof gtag === 'function') {
      gtag('event', 'passage', {
        event_category: 'passage',
        event_action: 'loaded',
        event_label: passageName
      })
      gtag('event', 'passage', {
        event_category: 'seed',
        event_action: 'used',
        event_label: location.hash
      })
    } else if (window['ga-disable-UA-119249239-1'] === true || typeof gtag !== 'function') {
    }
  }
}
