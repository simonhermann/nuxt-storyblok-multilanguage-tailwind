<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :story="story"
      :is="story.content.component"
    ></component>
  </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import * as constants from '@/constants.js'

export default {
  data() {
    return { story: { content: {} } }
  },
  computed: {
    metaDescription() {
      return this.story.content.metadata.description
        ? this.story.content.metadata.description
        : constants.metaDescription
    }
  },

  head() {
    return {
      title:
        this.story.content.metadata.title +
        (this.$route.path == '/' ? '' : constants.metaTitleAppendix),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.metaDescription
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.metaDescription
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'page'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: constants.baseUrl + this.$route.path
        },
        {
          hid: 'og:secure_url',
          property: 'og:secure_url',
          content: constants.baseUrlSecure + this.$route.path
        },
        {
          hid: 'twitter:creator:id',
          property: 'twitter:creator:id',
          content: constants.twitterId
        }
      ],
      link: [
        // set canonical url to the one defined in constants.js
        {
          rel: 'canonical',
          href:
            constants.baseUrlSecure +
            (this.$route.path == '/' ? '' : this.$route.path)
        }
      ]
    }
  },
  asyncData(context) {
    let slug = context.route.path == '/' ? 'index' : context.route.path

    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    const relations = '' // IMPORTANT! related Storyblok content components, comma separated

    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${slug}`, {
        version: version,
        // resolve_relations: relations
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  mixins: [storyblokLivePreview]
}
</script>