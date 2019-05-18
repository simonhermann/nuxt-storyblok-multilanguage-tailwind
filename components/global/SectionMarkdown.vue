<template>
  <section v-editable="blok" class="container">
    <HtmlParser
      class="markdown"
      :content="$options.filters.markdown(blok.content)"
    />
  </section>
</template>

<script>
import HtmlParser from '@/components/HtmlParser.vue'

export default {
  components: {
    HtmlParser
  },
  props: ['blok']
}
</script>

