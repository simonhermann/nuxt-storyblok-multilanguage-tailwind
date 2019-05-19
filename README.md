# nuxt-storyblok-multilanguage-tailwind

## Main Features
- [Nuxt.js](https://nuxtjs.org/) - The Vue.js App framework
- [Storyblok CMS](https://www.storyblok.com/) - Headless Component-Based CMS with a Visual Editor
    - with [field level i18n](https://www.storyblok.com/docs/internationalization) set up
- [Tailwind](https://tailwindcss.com/) - utility-first CSS framework
- Multiple Languages
- [PurgeCSS](https://github.com/Developmint/nuxt-purgecss) (CSS Tree Shaking) - Get rid of all unused CSS
- [PWA](https://pwa.nuxtjs.org/)
- Sitemap
- RSS Generation (WIP)

## Getting startet

### Setup Storyblok

Duplicate Space #59005

or:

1. Create a free [Storyblok account](https://www.storyblok.com/)
2. Create a new Space (name it however you like)
3. Go to Settings -> API Keys and create a new public token
4. Paste both, the preconfigured preview tokens and the public token to the corresponding fields in `./constants.js`
5. Create a new Component "PageGeneral"
    - Check "Act as content type"
    - Uncheck "Nestable"
    - Create a new schema key "metadata"
        - type: plugin -> select meta-fields
        - check "required"
    - Create a new schema key "body"
        - type: "Blocks"

### Build Setup

```bash
# install NVM 
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
# install and use current node version 
nvm install 12
# install yarn globally 
npm i -g yarn # or skip if you want to stick with npm
# install dependencies
$ yarn # or npm install
# serve with hot reload at localhost:3000
$ yarn dev # or npm dev

```

## Useful Links:

- Storyblok
  - https://www.storyblok.com/tp/headless-cms-nuxtjs
  - https://www.storyblok.com/tp/nuxt-js-multilanguage-website-tutorial
  - https://www.storyblok.com/docs/api/content-delivery
  - https://www.storyblok.com/docs/image-service
