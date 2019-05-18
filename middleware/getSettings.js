export default function ({ app, isServer, route, store, isDev }) {
  let version = route.query._storyblok || isDev ? 'draft' : 'published'
  let language = route.params.language || 'de'

  if (isServer) {
    store.commit('setCacheVersion', app.$storyapi.cacheVersion)
  }

  // if (!store.state.settings._uid || language !== store.state.language) {
    // store.commit('setLanguage', language)
if (true) {
  return store.dispatch('loadSettings', {version: version, language: language})

}
  // }
}