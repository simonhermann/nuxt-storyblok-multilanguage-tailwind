<template>
  <section v-editable="blok" class="container">
    <!-- if file is an svg -->
    <v-lazy-image
      v-if="blok.file.image.endsWith('.svg')"
      :src="blok.file.image"
      :alt="blok.file.alt_tag"
    />
    <!-- else (for jpg, png, ...) -->
    <v-lazy-image
      v-else
      :src="$options.filters.transformImage(blok.file.image, '2400x0')"
      :alt="blok.file.alt_tag"
      use-picture
      :src-placeholder="
        blok.file.image | transformImage('100x0/filters:quality(10)')
      "
    >
      <source
        media="(max-width: 1200px)"
        :srcset="
          $options.filters.transformImage(
            blok.file.image,
            '2400x0/filters:format(webp)'
          ) +
            ' 2x, ' +
            $options.filters.transformImage(
              blok.file.image,
              '1200x0/filters:format(webp)'
            ) +
            ' 1x, '
        "
        type="image/webp"
      />
      <source
        media="(max-width: 1200px)"
        :srcset="
          $options.filters.transformImage(blok.file.image, '2400x0') +
            ' 2x, ' +
            $options.filters.transformImage(blok.file.image, '1200x0') +
            ' 1x, '
        "
        type="image/jpg"
      />
      <source
        media="(min-width: 1200px)"
        :srcset="
          $options.filters.transformImage(
            blok.file.image,
            '2400x0/filters:format(webp)'
          )
        "
        type="image/webp"
      />
      <source
        media="(min-width: 1200px)"
        :srcset="
          $options.filters.transformImage(blok.file.image, '2400x0')
        "
        type="image/jpg"
      />
    </v-lazy-image>
  </section>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
</style>
