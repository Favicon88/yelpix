<template>
  <section id="screen_4" class="screen">
    <div class="parallax-scene">
      <div class="background">
        <img src="/images/home/screen-4/background.png" alt="" />
      </div>
      <div class="background lines">
        <img src="/images/home/screen-4/background-lines.png" alt="" />
      </div>
      <div class="scene-element lights">
        <div class="lights-item">
          <div class="item-light">
            <img src="/images/home/screen-4/light-1.png" alt="" />
            <div class="icon">
              <img src="/images/home/screen-4/icon-info.png" alt="" />
            </div>
          </div>
          <div class="item-body">
            <img src="/images/home/screen-4/light-body.png" alt="" />
          </div>
          <div class="logos">
            <img src="/images/home/alipay-logo.png" alt="" />
          </div>
        </div>
        <div class="lights-item">
          <div class="item-light">
            <img src="/images/home/screen-4/light-2.png" alt="" />
            <div class="icon">
              <img src="/images/home/screen-4/icon-protect.png" alt="" />
            </div>
          </div>
          <div class="item-body">
            <img src="/images/home/screen-4/light-body.png" alt="" />
          </div>
        </div>
        <div class="lights-item">
          <div class="item-light">
            <img src="/images/home/screen-4/light-3.png" alt="" />
            <div class="icon">
              <img src="/images/home/screen-4/icon-safe.png" alt="" />
            </div>
          </div>
          <div class="item-body">
            <img src="/images/home/screen-4/light-body.png" alt="" />
          </div>
          <div class="logos">
            <img src="/images/home/unionpay-logo.png" alt="" />
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="head">
          <div class="h1">
            Simple and Reliable Deposit & Withdrawal Systems
          </div>
        </div>
      </div>
      <div class="scene-element bottom-coin">
        <div :class="{ on: activeSection }" class="coin">
          <img src="/images/home/screen-4/coin.png" alt="" />
        </div>
        <a class="button" href="#">Try now</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section4',
  data() {
    return {
      coinOn: false
    }
  },
  computed: {
    activeSection() {
      if (this.$store.getters.getActiveSection === 3 && this.coinOn === false) {
        this.coinOnTrue()
        return true
      } else if (this.coinOn === true) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    coinOnTrue() {
      this.coinOn = true
    }
  }
}
</script>

<style lang="scss" scoped>
#screen_4 {
  height: 100vh;
  position: relative;
  width: 100%;
  overflow: hidden;
}

#screen_4 .background img {
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

#screen_4 .scene-element .coin.on {
  right: calc(50% - 150px);
}

#screen_4 .background img {
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

#screen_4 .container,
#screen_4 .container-fluid {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  z-index: 5;
  left: 0;
  right: 0;
  margin: 0 auto;
}

#screen_4 .container .head,
#screen_4 .container-fluid .head {
  position: relative;
  padding-top: 150px;
  text-align: center;
}

#screen_4 .container .head .h1,
#screen_4 .container .head h1,
#screen_4 .container-fluid .head .h1,
#screen_4 .container-fluid .head h1 {
  color: #fff;
}

#screen_4 .container .text-wrp,
#screen_4 .container-fluid .text-wrp {
  width: 100%;
  position: relative;
  padding-bottom: 300px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding-top: 200px;
}

#screen_4 .container .text-wrp .text,
#screen_4 .container-fluid .text-wrp .text {
  position: relative;
  padding: 40px 70px;
  max-width: 650px;
  background-color: rgba(3, 9, 77, 0.53);
}

#screen_4 .container .text-wrp .text p,
#screen_4 .container-fluid .text-wrp .text p {
  position: relative;
  display: block;
  width: 100%;
  color: #fff;
  font-size: 42px;
  line-height: 62px;
}

#screen_4 .parallax-scene {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: block;
}

#screen_4 .background {
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

#screen_4 .scene-element {
  position: absolute;
  left: 0;
}

#screen_4 .scene-element.bottom-coin {
  z-index: 5;
  width: 100%;
  display: block;
  bottom: 250px;
  height: 300px;
}

#screen_4 .scene-element.bottom-coin .button {
  position: absolute;
  width: 265px;
  top: 100%;
  left: 0;
  right: 0;
  margin: 40px auto 0;
  background-color: #b52c49;
  border-color: #b52c49;
  color: #fff;
}

#screen_4 .scene-element.lights {
  bottom: 500px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: center;
  flex-wrap: wrap;
}

#screen_4 .scene-element.lights .lights-item {
  position: relative;
  height: 704px;
  display: block;
}

#screen_4 .scene-element.lights .lights-item:not(:last-child) {
  margin-right: 50px;
}

#screen_4 .scene-element.lights .lights-item .item-light {
  height: 477px;
  position: relative;
  top: 40px;
  z-index: 0;
  text-align: center;
}

#screen_4 .scene-element.lights .lights-item .item-light > img {
  -webkit-animation: blink 1.5s linear infinite;
  animation: blink 1.5s linear infinite;
}

#screen_4 .scene-element.lights .lights-item .item-light .icon {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 75px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-animation: float 1.5s linear infinite;
  animation: float 1.5s linear infinite;
}

#screen_4 .scene-element.lights .lights-item .item-light .icon img {
  width: auto;
  height: auto;
  max-width: 150px;
  max-height: 150px;
}

#screen_4 .scene-element.lights .lights-item .item-body {
  height: 338px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  text-align: center;
}

#screen_4 .scene-element .coin {
  height: 296px;
  width: 296px;
  position: absolute;
  right: -150px;
  top: 0;
  bottom: 0;
  z-index: 0;
  margin: auto 0;
  transition-delay: 0.5s;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  transition: all 2s;
}

#screen_4 .scene-element .coin img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 2000px) {
  #screen_4 .scene-element .coin.on {
    right: calc(50% - 75px);
  }

  #screen_4 .container .head,
  #screen_4 .container-fluid .head {
    padding-top: 100px;
  }

  #screen_4 .scene-element.bottom-coin {
    height: 200px;
    bottom: 150px;
  }

  #screen_4 .scene-element.bottom-coin .button {
    top: 85%;
  }

  #screen_4 .scene-element.lights {
    bottom: 250px;
  }

  #screen_4 .container .text-wrp .text p {
    font-weight: 400;
    font-style: normal;
    font-family: 'OpenSans Regular', sans-serif;
  }

  #screen_4 .scene-element.lights .lights-item {
    height: 570px;
  }

  #screen_4 .scene-element.lights .lights-item .item-light {
    height: 350px;
    top: 0;
  }

  #screen_4 .scene-element.lights .lights-item .item-light img {
    height: 100%;
    width: auto;
  }

  #screen_4 .scene-element.lights .lights-item .item-body {
    height: 250px;
    position: absolute;
    width: 330px;
    margin: 0 -22px;
  }

  #screen_4 .scene-element.lights .lights-item .item-body img {
    height: 100%;
    width: auto;
  }

  #screen_4 .scene-element .coin {
    width: 150px;
    height: 150px;
  }
}

@media screen and (max-width: 1600px) {
  #screen_4 .scene-element.lights {
    bottom: 120px;
  }

  #screen_4 .scene-element.lights .lights-item {
    width: 350px;
    height: 550px;
  }

  #screen_4 .scene-element.lights .lights-item .item-body {
    margin: 0;
    width: auto;
  }
}

@media screen and (max-width: 1200px) {
  #screen_4 .container .head,
  #screen_4 .container-fluid .head {
    padding-top: 150px;
  }

  #screen_4 .scene-element.lights {
    padding: 0 30px;
  }

  #screen_4 .scene-element.lights .lights-item {
    width: calc((100% - 60px) / 3);
  }

  #screen_4 .scene-element.lights .lights-item:not(:last-child) {
    margin-right: 30px;
  }
}

@media screen and (max-width: 1024px) {
  #screen_4 .scene-element.bottom-coin {
    bottom: 100px;
  }

  #screen_4 .scene-element.bottom-coin .button {
    width: 200px;
  }

  #screen_4 .scene-element.lights {
    padding: 0;
    bottom: auto;
    height: 200px;
    top: 30%;
  }

  #screen_4 .scene-element.lights .icon {
    bottom: 0 !important;
    top: 0;
    margin: auto 0;
  }

  #screen_4 .scene-element.lights:after,
  #screen_4 .scene-element.lights:before {
    content: '';
    position: absolute;
    bottom: -350px;
    width: 250px;
    height: 250px;
    background-image: url(/images/home/screen-4/lights-mobile.png);
    background-repeat: no-repeat;
    z-index: 0;
    background-size: contain;
    background-position: center bottom;
  }

  #screen_4 .scene-element.lights:before {
    left: -90px;
    transform: rotate(35deg);
  }

  #screen_4 .scene-element.lights:after {
    right: -90px;
    transform: rotate(145deg) scale(-1, -1);
  }

  #screen_4 .scene-element.lights .lights-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    width: calc((100%-30px) / 3);
    margin: 0 !important;
  }

  #screen_4 .scene-element.lights .lights-item:not(:last-child) {
    margin-right: 15px;
  }

  #screen_4 .scene-element.lights .lights-item:nth-child(1):before,
  #screen_4 .scene-element.lights .lights-item:nth-child(3):before {
    transform: rotate(90deg);
    left: -10px;
    right: auto;
  }

  #screen_4 .scene-element.lights .lights-item .item-light {
    height: 100%;
    width: 100%;
  }

  #screen_4 .scene-element.lights .lights-item .item-light .icon img {
    max-width: 100px;
    max-height: 100px;
  }

  #screen_4 .scene-element.lights .lights-item .item-body {
    display: none;
  }

  #screen_4 .scene-element.lights .lights-item .item-light > img {
    display: none;
  }

  #screen_4 .scene-element.lights .lights-item .item-body img {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  #screen_4 .scene-element .coin.on {
    right: calc(50% - 27.5px);
  }

  #screen_4 .container .head,
  #screen_4 .container-fluid .head {
    padding-top: 150px;
  }

  #screen_4 .scene-element.bottom-coin {
    height: 100px;
  }

  #screen_4 .scene-element.lights {
    height: 100px;
    top: 40%;
    width: 100%;
  }

  #screen_4 .scene-element.lights:after,
  #screen_4 .scene-element.lights:before {
    width: 200px;
    height: 200px;
    bottom: -250px;
  }

  #screen_4 .scene-element.lights .lights-item {
    width: calc((100%-30px) / 3);
  }

  #screen_4 .scene-element.lights .lights-item:not(:last-child) {
    margin-right: 15px;
  }

  #screen_4 .scene-element.lights .lights-item:before {
    width: 200px;
    height: 200px;
    display: none;
  }

  #screen_4 .scene-element.lights .lights-item .item-light .icon {
    bottom: 0;
    top: 0;
    margin: auto 0;
  }

  #screen_4 .scene-element.lights .lights-item .item-light .icon img {
    max-width: 55px;
    max-height: 55px;
  }

  #screen_4 .scene-element .coin {
    max-width: 55px;
    max-height: 55px;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    bottom: -50px;
  }
}

@media screen and (max-height: 700px) and (min-width: 768px) {
  #screen_4 .scene-element.lights {
    bottom: 0;
  }

  #screen_4 .scene-element.bottom-coin {
    bottom: 100px;
  }
}
</style>
