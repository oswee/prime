// import { offline } from '@redux-offline/redux-offline'
// import offlineConfig from '@redux-offline/redux-offline/lib/defaults'
import { createStore, IModuleStore } from 'redux-dynamic-modules-core'
import { applyMiddleware } from 'redux'
import { WebsocketMiddleware } from '@oswee/packages/websocket'
import { getSagaExtension } from 'redux-dynamic-modules-saga'

export const store: IModuleStore<any> = createStore({
  // enhancers: [offline(offlineConfig)],
  enhancers: [applyMiddleware(WebsocketMiddleware)],
  extensions: [getSagaExtension()],
})
