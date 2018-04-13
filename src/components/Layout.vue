<template>
  <div>
    <loader :loading="loading"/>
    <server-error v-if="hasError"/>
    <template v-if="!loading && !hasError">
      <header class="header container-fluid">
        <div class="row">
          <div class="col">
            <router-link :to="{ name: 'home' }">
              <div class="logo"></div>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <h2>Em construção!</h2>
            <p>
              Para mais informações ligue ou mande mensagem no WhatsApp!<br>
              <span>(51) 9 9231-7467</span>
            </p>
          </div>
        </div>
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

const path = function () {
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

  return seo[slug]
}

export default {
  data: () => ({
    loading: true,
    hasError: false,
    currentDateYear: (new Date()).getFullYear(),
    menu: [
      { name: 'mago', label: 'Mago' },
      { name: 'servicos', label: 'Serviços' },
      { name: 'blog', label: 'Blog' },
      { name: 'contato', label: 'Contato' }
    ],
    facebookUrl: '',
    twitterUrl: '',
    googlePlusUrl: ''
  }),
  async mounted () {
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
      inner: path().title,
      separator: '-',
      complement: path().index ? '' : 'Alemão Aula para Habilitados'
    },
    meta: [
      { name: 'description', content: path().description },
      { name: 'robots', content: 'index, follow' },
      { rel: 'canonical', content: path().canonical },
      { property: 'publisher', content: 'REDE SOCIAL' },
      { property: 'og:site_name', content: 'Alemão Aula para Habilitados' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:title', content: path().title },
      { property: 'og:description', content: path().description },
      { property: 'og:image', content: path().openGraph },
      { property: 'og:url', content: path().canonical },
      { property: 'og:type', content: 'website' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'google-site-verification', content: 'U09ALDM16y0dahQ2g-xGsh6pG4-BzIy49_IVHE7YI8k' }
    ],
    base: [
      { href: path().canonical }
    ],
    link: [
      { rel: 'canonical', content: path().canonical },
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
  body
    background: #008c23 !important

  .header
    padding: 15px
    background: #008c23
    height: 385px
    position: absolute
    top: 0
    bottom: 0
    margin: auto

  .logo
    background: url("../assets/logotipo.png")
    width: 256px
    height: 250px
    margin: auto

  h2
    color: #fff
    font-weight: bold

  p
    color: #ffffff
    font-size: 18px

    span
      font-weight: bold
      font-size: 22px

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
