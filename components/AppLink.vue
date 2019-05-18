<template>
  <component
    v-if="href || to"
    :is="type"
    :to="to"
    :href="href"
    v-bind="linkProps()"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    isExternal() {
      if (this.to) {
        return false
      } else if (this.href) {
        return true
      }
    },
    type() {
      if (this.to) {
        return 'nuxt-link'
      } else if (this.href) {
        return 'a'
      }
    }
  },
  methods: {
    linkProps() {
      if (this.href) {
        return {
          target: '_blank',
          rel: 'noopener',
          class: 'link--external'
        }
      } else if (this.to) {
        return {
          class: 'link--internal'
        }
      }
    }
  }
}
</script>

