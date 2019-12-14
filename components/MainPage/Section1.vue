<template>
  <section id="screen_1" class="screen">
    <div class="parallax-scene">
      <div id="screen-one-svg" class="svg-wrap">
        <LineCoin />
      </div>
      <div class="background">
        <img src="/images/home/screen-1/background.jpg" alt="" />
      </div>
      <div class="scene-element top-man">
        <img src="/images/home/screen-1/man-top.png" alt="" />
      </div>
      <div class="scene-element sky"></div>
      <div class="scene-element back-buildings">
        <img src="/images/home/screen-1/back-buildings.png" alt="" />
      </div>
      <div class="scene-element top-buildings">
        <img src="/images/home/screen-1/top-buildings.png" alt="" />
      </div>
    </div>
    <div class="container">
      <div class="buttons">
        <a class="button filled" href="#">{{ $t('index.sign-up') }}</a
        ><a class="button rounded" href="#">{{ $t('index.login') }}</a>
      </div>
    </div>
    <div id="section-scroller-button"></div>
  </section>
</template>

<script>
import LineCoin from '@/assets/line-coin.svg?inline'
export default {
  name: 'HomeSection1',
  components: {
    LineCoin
  },
  data() {
    return {
      e: undefined
    }
  },
  /* eslint-disable */
  mounted() {
    const e = window.Snap('#line-coin')
    const a = e.select('#coin')
    const t = a.getBBox()
    const i = e.select('#trail')
    const n = window.Snap.path.getTotalLength(i.attr('d'))
    const o = i.getPointAtLength(0)
    a.attr({
      transform:
        't' +
        [o.x - t.h / 2, o.y - t.cy] +
        'r' +
        setInterval(function() {
          10
        }, 1)
    }),
      window.Snap.animate(
        0,
        n,
        function(e) {
          const n = i.getPointAtLength(e - 1)
          a.attr({
            transform:
              't' +
              [n.x - t.h / 2, n.y - t.cy] +
              'r' +
              setInterval(function() {
                2
              }, 1)
          })
        },
        3500,
        mina.easeout,
        function(e) {
          const n = i.getPointAtLength(e - 1)
          a.animate(
            {
              transform:
                't' +
                [n.x + t.h, n.y - t.cy] +
                'r' +
                setInterval(function() {
                  2
                }, 1)
            },
            300
          )
        }
      )
  },
  /* eslint-enable */
  methods: {}
}
</script>

<style lang="scss">
#screen_1 {
  position: absolute;
  top: 0%;
  left: 0px;
  z-index: 1;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.screen.active#screen_1 .svg-wrap {
  opacity: 1;
}

.screen.active#screen_1 .scene-element.top-man {
  transform: translateY(0);
}

.screen.active#screen_1 .scene-element.back-buildings,
.screen.active#screen_1 .scene-element.top-buildings {
  opacity: 1;
  transform: translateY(0);
}

.screen.active#screen_1 .scene-element.sky {
  opacity: 1;
}

#screen_1 .container {
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 150px;
  padding-bottom: 300px;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
  align-content: flex-end;
  z-index: 5;
  left: 0;
}

#screen_1 .container .buttons a:not(:last-child) {
  margin-right: 30px;
}

#screen_1 .svg-wrap {
  position: absolute;
  z-index: 4;
  left: 0;
  width: 100%;
  height: auto;
  transition: opacity 0.4s;
  opacity: 0;
  top: 100px;
}

#screen_1 .parallax-scene {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
}

#screen_1 .background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

#screen_1 .background img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  -o-object-fit: cover;
  object-fit: cover;
}

#screen_1 .scene-element {
  position: absolute;
  left: 0;
}

#screen_1 .container .buttons {
  position: relative;
  display: inline-block;
}

#screen_1 .scene-element.top-man {
  left: 30%;
  z-index: 5;
  transition: transform 0.5s;
  transform: translateY(-100%);
}

#screen_1 .scene-element.top-man img {
  width: auto;
  height: auto;
}

#screen_1 .scene-element.sky {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 3;
  background-image: url(/images/home/screen-1/sky.png);
  background-repeat: repeat-x;
  background-position: center center;
  background-size: contain;
  height: 300px;
  -webkit-animation: animatedBackground 100s linear infinite;
  animation: animatedBackground 100s linear infinite;
  transition: all 0.5s;
  opacity: 0;
}

#screen_1 .scene-element.back-buildings {
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  transition: all 0.5s;
  opacity: 0;
  transform: translateY(20%);
}

#screen_1 .scene-element.back-buildings img {
  width: 100%;
}

#screen_1 .scene-element.top-buildings {
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 5;
  transition: all 0.5s;
  opacity: 0;
  transform: translateY(10%);
}

#screen_1 .scene-element.top-buildings img {
  width: 100%;
}

svg#line-coin {
  width: 3300px;
  position: relative;
  left: -300px;
  margin: 0 auto;
  right: -300px;
  height: auto;
  fill: none;
}

svg#line-coin .st0 {
  fill: none;
  stroke: #00f7ff;
  stroke-width: 3.52;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 1.5;
}

svg#line-coin .st1 {
  fill: #00f7ff;
}

svg#line-coin .st2 {
  opacity: 0.38;
  fill: #0011d2;
  enable-background: new;
}

svg#line-coin .st3,
svg#line-coin .st4 {
  fill: none;
  stroke: #00f7ff;
  stroke-width: 3.5;
}

svg#line-coin .st4 {
  stroke-width: 3;
}

svg#line-coin .st5 {
  fill: #fff;
}

svg#line-coin .st6 {
  fill: none;
  stroke: #00f7ff;
  stroke-width: 3.35;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 12.56, 15.28, 0, 0;
}

svg#line-coin #trail {
  display: none;
}

.button.filled {
  color: #b2243c;
  background-color: #fff;
}

.button.filled:hover {
  color: #fff;
  background-color: transparent;
}

.button.rounded {
  color: #fff;
}

.button.rounded:hover {
  color: #b2243c;
  background-color: #fff;
}

@media screen and (max-width: 2000px) {
  #screen_1 .container {
    padding-right: 100px;
    padding-bottom: 200px;
  }

  #screen_1 .svg-wrap {
    bottom: 150px;
    top: auto;
  }

  #screen_1 .svg-wrap svg#line-coin {
    width: 2600px;
    left: -250px;
    right: -250px;
  }
}

@media screen and (max-width: 1600px) {
  .container {
    padding: 0 30px;
  }

  #section-scroller-button {
    width: 250px;
    bottom: 0;
  }

  #section-scroller-button .txt {
    font-size: 32px;
    line-height: 32px;
  }

  #section-scroller-button .icn img {
    max-height: 45px;
  }

  #screen_1 .svg-wrap {
    top: 0;
  }

  #screen_1 .svg-wrap svg#line-coin {
    width: 2200px;
    left: -250px;
    right: -150px;
  }
}

@media screen and (max-height: 700px) and (min-width: 768px) {
  #screen_1 .svg-wrap {
    bottom: 130px;
    top: auto;
  }

  .container .head {
    padding-top: 75px !important;
  }

  .container .text-wrp {
    padding-top: 100px !important;
  }
}
</style>
