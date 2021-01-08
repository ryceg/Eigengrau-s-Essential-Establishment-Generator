export const addGtagEvent = (options = {
  event_category: 'passage',
  event_action: 'loaded',
  event_label: passage()
}) => {
  // @ts-expect-error We expect it to not know the type of window.ga-disable-UA-119249239-1
  if (window['ga-disable-UA-119249239-1'] !== true && typeof gtag === 'function') {
    gtag('event', 'passage', options)
    gtag('event', 'passage', {
      event_category: 'seed',
      event_action: 'used',
      event_label: location.hash
    })
  }
}
