<template>
  <div class="wrapper">
    <Header class="header" />
    <nuxt />
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  padding: 20px 0;
}

.footer {
  position: relative;
  left: 0px;
  height: auto !important;
  background-color: #1b1947;
  padding: 100px 0;
}
</style>
