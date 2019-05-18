<template>
  <component :is="type" :to="to" :href="href" class="button">
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
    type() {
      if (this.to || this.href) {
        return 'AppLink'
      } else {
        return 'button'
      }
    }
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  margin: 0.5em 0;
  padding: 1em 2em;
  background: #fff;
  border: 2px solid var(--c-2);
  border-radius: 3px;
  color: var(--c-2);
  letter-spacing: 0.02em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  background: var(--c-2);
  color: #fff;
}
</style>
