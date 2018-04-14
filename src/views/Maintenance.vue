<template>
  <div class="maintenance container-fluid">
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
  </div>
</template>

<style lang="sass">
  body
    background: #008c23 !important

  .maintenance
    padding: 15px
    background: #008c23s
    height: 385px
    position: absolute
    top: 0
    bottom: 0
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
</style>