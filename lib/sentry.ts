import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'
import { CaptureConsole } from '@sentry/integrations'
import { isLocalCopy } from './isLocalCopy'

if (process.env.NODE_ENV === 'production' && !isLocalCopy()) {
  Sentry.init({
    dsn: 'https://92c3fb4ac9054e9987d39969cc55969a@o365643.ingest.sentry.io/5469192',
    // Disable sentry if we're running locally, even if production.
    integrations: [
      new Integrations.BrowserTracing(),
      new CaptureConsole({
        levels: ['error']
      })
    ],
    tracesSampleRate: 0.2
  })
}
