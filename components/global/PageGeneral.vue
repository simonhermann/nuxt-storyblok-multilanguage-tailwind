<template>
  <div class="page" v-editable="story.content">
    <component
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    ></component>
  </div>
</template>

<script>
export default {
  props: ['story']
}
</script>