// Project related
export const baseName = 'nuxt-storyblok-tailwind'
export const shortName = 'SI Labs' // short name with mx 12 characters for nice display as PWA
export const baseUrl = 'http://www.example.com'
export const baseUrlSecure = 'https://www.example.com'
export const metaTitleAppendix = ' | ' + baseName
export const defaultLanguage = 'en'

// Colors for PWA
export const color = '#3eaf7c'
export const colorBg = '#1a1a1d'

// meta fallback
export const metaDescription = 'A descriptive text.'
export const metaTitle = baseName

// social media
export const twitterId = '00000'

// Storyblok - project-related
export const sbPublicToken = 'IlcTBWGkyhuuEAztxKR85gtt'
export const sbPreviewToken = 'LfbcDvgr4bx6yK5rdyN9Cwtt'
export const sbIndexPageId = '950289' // home page id (to exlude it from bein generated twice)
export const sbPageComponents = 'PageGeneral' // IMPORTANT! Add all Components that should be generated as pages (comma-separated)

// *** //

// Storyblok - general
export const sbAccessToken =
  process.env.NODE_ENV == 'production' ? sbPublicToken : sbPreviewToken
const sbVersion = process.env.NODE_ENV == 'production' ? 'published' : 'draft'

const sbApiUrl = 'https://api.storyblok.com/v1/cdn/stories'
export const sbGetUrl =
  sbApiUrl +
  '?version=' +
  sbVersion +
  '&token=' +
  sbAccessToken +
  '&cv=' +
  Math.floor(Date.now() / 1e3)
export const sbGetUrlProd =
  sbApiUrl +
  '?version=' +
  'published' +
  '&token=' +
  sbPublicToken +
  '&cv=' +
  Math.floor(Date.now() / 1e3)
