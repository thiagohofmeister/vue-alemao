<template>
  <div>
    <loader :loading="loading"/>
    <server-error v-if="hasError"/>
    <template v-if="!loading && !hasError">
      <header v-if="!isIndex">
        Teste
      </header>
      <router-view/>
    </template>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import ServerError from '@/components/ServerError'
import Icon from 'vue-awesome/components/Icon'
import seo from '@/api/seo'

const getSeo = function (value) {
  let url = window.location.href

  let slug = ''
  if (url.indexOf('#') !== -1) {
    const [, first, second] = url.split('#')[1].split('/')

    slug += first
    if (second !== undefined) {
      slug += '/' + second
    }
  }

  if (slug === '') {
    slug = '/'
  }

  if (seo[slug] !== undefined) {
    if (seo[slug][value]) {
      return seo[slug][value]
    }
  }

  return ''
}

export default {
  data: () => ({
    loading: true,
    hasError: false,
    isIndex: false,
    currentDateYear: (new Date()).getFullYear()
  }),
  async mounted () {
    this.isIndex = !!getSeo('index')
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
  components: {
    Loader,
    ServerError,
    Icon
  },
  head: {
    title: {
      inner: getSeo('title'),
      separator: getSeo('index') ? ' ' : '-',
      complement: getSeo('index') ? ' ' : 'Alemão Aula para Habilitados'
    },
    meta: [
      { name: 'description', content: getSeo('description') },
      { name: 'robots', content: 'index, follow' },
      { rel: 'canonical', content: getSeo('canonical') },
      { property: 'publisher', content: 'REDE SOCIAL' },
      { property: 'og:site_name', content: 'Alemão Aula para Habilitados' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:title', content: getSeo('title') },
      { property: 'og:description', content: getSeo('description') },
      { property: 'og:image', content: getSeo('openGraph') },
      { property: 'og:url', content: getSeo('canonical') },
      { property: 'og:type', content: 'website' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'google-site-verification', content: 'U09ALDM16y0dahQ2g-xGsh6pG4-BzIy49_IVHE7YI8k' }
    ],
    base: [
      { href: getSeo('canonical') }
    ],
    link: [
      { rel: 'canonical', content: getSeo('canonical') },
      { rel: 'publisher', content: 'REDE SOCIAL' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/static/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/static/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/static/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/static/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/static/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/static/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/static/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/static/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/static/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/static/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/static/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/static/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/static/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  }
}
</script>

<style lang="sass">
  .header
    padding: 15px
    background: #008c23
    height: 385px

  .logo
    background: url("../assets/logotipo.png")
    width: 256px
    height: 250px
    margin: auto

  .menu
    text-align: right
    background: #2f2e2e
    padding: 5px 0

  .menu-item
    display: inline-block
    padding: 0 10px
    color: #fff

    &:hover
      color: #00aeff
      text-decoration: none

    &:last-child
      padding-right: 0

  .footer
    background: #2f2e2e
    padding: 15px

    .rights
      font-size: 11px
      color: #fff
      margin: 0

    .socials
      color: #fff

      .icon
        font-size: 20px
        color: #fff

        &:hover
          color: #b7b7b7

        &:not(:last-child)
          margin-right: 10px
</style>
