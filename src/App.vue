<template>
  <Header/>
  <main>
    <router-view></router-view>
  </main>
  <Footer/>
  <notifications position="top center" />
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    },
    created() {
      if(this.$isMobile) {
        document.body.classList.add("is-mobile");
      }
    }
  }
</script>

<style lang="scss">
  #app {
    main {
      padding-top: calc(#{$header-height} + 25px);
    }
  }
</style>
