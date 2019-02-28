<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
    <Footer />
    <GoTop />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'

export default {
  components: {
    Navbar,
    Footer,
    GoTop
  }
}
</script>


<style lang="scss">
$blue: #3f72af;
$white: #f9f7f7;
$dark: #474547;

body, #app{ background-color: $white; color: $dark; }

a, .navbar-toggler{ outline: 0 !important; box-shadow: none !important; }

#app {
  position: relative;
  min-height: 100vh;
  font-family: 'Titillium Web', sans-serif;

  ._repo-info > span{
      background-color: $blue;
      color: $white;
      border-radius: 20px;
      padding: 5px 20px;
      margin: 0 5px;
      font-size: 16px;
      box-shadow: 2px 2px 6px rgba(#CCC, .95);
      cursor: pointer;
  }
}
</style>
