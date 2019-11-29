<template>
  <section id="screen_1" class="screen section active">
    <div class="parallax-scene">
      <div id="screen-one-svg" class="svg-wrap">
        <LineCoin />
      </div>
    </div>
  </section>
</template>

<script>
import LineCoin from '@/assets/line-coin.svg?inline'
export default {
  name: 'AboutUs',
  components: {
    LineCoin
  }
}
</script>

<style lang="scss" scoped>
#screen_1 {
  z-index: 1;
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
}
svg {
  width: 3300px;
  position: relative;
  left: -300px;
  margin: 0 auto;
  right: -300px;
  height: auto;
  fill: none;
}
</style>
