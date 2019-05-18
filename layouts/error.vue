<template>
  <div class="container">
    <!-- TODO: -->
    <div class="mb-20 text-center">
      <h1 v-if="error.statusCode === 404">
        404. <br />
        <span class="text-base"
          >The page you were loking for could not be found.</span
        >
      </h1>

      <h1 v-else>Something went wrong..(Error {{ statusCode }})</h1>
      <br />
      <em>Celebrate this failure!</em> <br />
      <small class="text-base">or</small> <br />
      <nuxt-link to="/">return Home page</nuxt-link>
    </div>
    <hr />
    <div class="mt-20 text-xs">
      <p>
        In case you see a developer, show them this gibberish:
      </p>
      <pre><code>{{ message }}</code></pre>
    </div>
  </div>
</template>
<script>
export default {
  props: ['error'],
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || `<%= messages.client_error %>`
    }
  }
}
</script>