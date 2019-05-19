<template>
  <header class="TheHeader">
    <nav class="nav container">
      <ul class="nav__ul">
        <nuxt-link tag="li" class="nav__li homelink" to="/">
          <a>Home</a>
        </nuxt-link>
        <nuxt-link
          tag="li"
          class="nav__li"
          v-for="(navitem, index) in $store.state.settings.main_nav"
          :key="index"
          :to="'/' + navitem.link.cached_url"
        >
          <a>{{ navitem.name }}</a>
        </nuxt-link>
        <li class="nav__li"><a @click="changeLanguage('de')">DE</a></li>
        <li class="nav__li"><a @click="changeLanguage('en')">EN</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$store.commit('setLanguage', lang)
    }
  },
}
</script>


<style lang='scss' scoped>
.TheHeader {
}
.nav {
}
.nav__ul {
  list-style: none;
  padding: 1rem 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: row;
}
.nav__li {
  margin-right: 1rem;

  &.nuxt-link-active:not(.homelink),
  &.nuxt-link-exact-active.homelink {
    box-shadow: inset 0 -0.35rem 0 var(--c-2);
  }

  a:hover {
    text-decoration: none;
    box-shadow: inset 0 -1.2em 0 var(--c-2);
    color: var(--c-light);
  }
}
</style>