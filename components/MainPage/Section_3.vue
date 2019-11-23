<template>
  <section id="screen_3" class="screen">
    <div class="parallax-scene">
      <div class="background">
        <img src="/images/home/screen-3/background.jpg" alt="" />
      </div>
      <div class="background lines">
        <img src="/images/home/screen-3/background-lines.png" alt="" />
      </div>
      <div class="scene-element lights">
        <div class="lights-item">
          <div class="item-light">
            <img src="/images/home/screen-3/light.png" alt="" />
            <div class="icon">
              <img src="/images/home/screen-3/icon-globe.png" alt="" />
            </div>
            <div class="item-text">
              Trusted. <br />
              International Platform
            </div>
          </div>
          <div class="item-body">
            <img src="/images/home/screen-3/light-body.png" alt="" />
          </div>
        </div>
        <div class="lights-item">
          <div class="item-light">
            <img src="/images/home/screen-3/light.png" alt="" />
            <div class="icon">
              <img src="/images/home/screen-3/icon-laptop.png" alt="" />
            </div>
            <div class="item-text">24/7 Customer Service</div>
          </div>
          <div class="item-body">
            <img src="/images/home/screen-3/light-body.png" alt="" />
          </div>
        </div>
        <div class="lights-item">
          <div class="item-light">
            <img src="/images/home/screen-3/light.png" alt="" />
            <div class="icon">
              <img src="/images/home/screen-3/icon-chipset.png" alt="" />
            </div>
            <div class="item-text">Fastest Liquidity</div>
          </div>
          <div class="item-body">
            <img src="/images/home/screen-3/light-body.png" alt="" />
          </div>
        </div>
        <div class="lights-item">
          <div class="item-light">
            <img src="/images/home/screen-3/light.png" alt="" />
            <div class="icon">
              <img src="/images/home/screen-3/icon-cube.png" alt="" />
            </div>
            <div class="item-text">
              Simple Deposit & Withdrawal System
            </div>
          </div>
          <div class="item-body">
            <img src="/images/home/screen-3/light-body.png" alt="" />
          </div>
        </div>
      </div>
      <div class="scene-element bottom-tube">
        <img src="/images/home/screen-3/tube-bottom.png" alt="" />
      </div>
      <div class="scene-element top-tube">
        <img src="/images/home/screen-3/tube-top.png" alt="" />
        <div class="coin">
          <img src="/images/home/screen-3/coin.png" alt="" />
        </div>
        <div class="text-wrp">
          <form id="start-trading-form" class="text" name="start-trading-form">
            <div class="h1">Start Trading Online RIght Now</div>
            <div class="fields">
              <div class="field">
                <input
                  id="start-trading-email"
                  type="email"
                  placeholder="Email Address"
                  name="start-trading-email"
                  required
                />
              </div>
              <div class="field">
                <input
                  id="start-trading-password"
                  type="password"
                  placeholder="Password"
                  name="start-trading-password"
                  required
                />
              </div>
              <div class="field wide">
                <input
                  id="term-agree"
                  type="checkbox"
                  required
                  name="term-agree"
                />
                <label for="term-agree"
                  >You agree to the Terms & Conditions</label
                >
              </div>
            </div>
            <button class="button" type="submit">Try now</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section3'
}
</script>

<style lang="scss" scoped>
#screen_3 {
  height: 100vh;
  position: relative;
  width: 100%;
  overflow: hidden;
}

#screen_3 .coin.on {
  -webkit-animation: coinGo 1.5s linear 1;
  animation: coinGo 1.5s linear 1;
}

#screen_3 .parallax-scene {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: block;
}

#screen_3 .background {
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

#screen_3 .scene-element {
  position: absolute;
  left: 0;
}

#screen_3 .scene-element.lights {
  bottom: 312px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;
}

#screen_3 .scene-element.lights .lights-item {
  position: relative;
  height: 886px;
  width: 523px;
  display: block;
}

#screen_3 .scene-element.lights .lights-item .item-light {
  height: 346px;
  position: relative;
  top: 40px;
}

#screen_3 .scene-element.lights .lights-item .item-light > img {
  -webkit-animation: blink 1.5s linear infinite;
  animation: blink 1.5s linear infinite;
  width: 100%;
}

#screen_3 .scene-element.lights .lights-item .item-light .icon {
  padding: 30px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-animation: float 1.5s linear infinite;
  animation: float 1.5s linear infinite;
}

#screen_3 .scene-element.lights .lights-item .item-light .icon img {
  width: auto;
  height: auto;
  max-width: 150px;
  max-height: 150px;
}

#screen_3 .fields {
  width: 100%;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 350px;
}

#screen_3 .fields .field {
  width: calc((100% - 40px) / 2);
  position: relative;
  display: inline-block;
}

#screen_3 .fields .field.wide {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

#screen_3 .field input[type='email'],
#screen_3 .field input[type='password'] {
  width: 100%;
  position: relative;
  padding: 15px;
  border-radius: 0;
  border: none;
  background-color: #fff;
}

@media screen and (max-width: 2000px) {
  #screen_3 .scene-element.lights {
    bottom: 200px;
  }

  #screen_3 .scene-element.lights .lights-item .item-light {
    height: 225px;
  }

  #screen_3 .scene-element.lights .lights-item .item-text {
    font-size: 32px;
    line-height: 42px;
  }

  #screen_3 .scene-element.lights .lights-item {
    height: 600px;
    width: 375px;
  }

  #screen_3 .scene-element.bottom-tube,
  #screen_3 .scene-element.top-tube {
    height: 300px;
  }

  #screen_3 .scene-element .coin {
    height: 150px;
    width: 150px;
  }

  #screen_3 .scene-element .text-wrp p {
    font-weight: 400;
    font-style: normal;
    font-family: 'OpenSans Regular', sans-serif;
  }

  #screen_3 .scene-element.lights .lights-item .item-text {
    font-weight: 400;
    font-style: normal;
    font-family: 'OpenSans BoldItalic', sans-serif;
  }

  #screen_3 .background img {
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

  #screen_3 .scene-element .text-wrp p {
    font-size: 32px;
    line-height: 42px;
  }

  #screen_3 .scene-element .text-wrp .button {
    margin-top: 25px;
  }
}

@media screen and (max-width: 1299px) {
  #screen_3 .fields {
    padding: 0 250px;
  }
}

@media screen and (max-width: 1200px) {
  #screen_3 .fields {
    padding: 0 150px;
  }
}

@media screen and (max-width: 991px) {
  #screen_3 .fields {
    padding: 0 50px;
  }
}

@media screen and (max-width: 767px) {
  #screen_3 .fields {
    padding: 0 15px;
  }

  #screen_3 .scene-element .text-wrp {
    bottom: 0 !important;
  }

  #screen_3 form.text {
    padding: 0 !important;
  }

  #screen_3 .fields .field {
    width: 100%;
    margin-bottom: 10px;
  }

  #screen_3 .field input[type='email'],
  #screen_3 .field input[type='password'] {
    padding: 8px 15px;
  }

  #screen_3 .fields .field.wide {
    padding-bottom: 50px;
  }

  #screen_3 .scene-element.lights {
    height: calc(100% - 250px) !important;
  }

  #screen_3 .scene-element .text-wrp .h1,
  #screen_3 .scene-element .text-wrp h1 {
    display: block !important;
  }

  #screen_3 .scene-element.lights {
    height: calc(100% - 100px);
    top: 0;
  }

  #screen_3 .scene-element.lights:after,
  #screen_3 .scene-element.lights:before {
    width: 200px;
    height: 200px;
  }

  #screen_3 .scene-element.lights .lights-item .item-light .icon img {
    max-width: 75px;
    max-height: 75px;
  }

  #screen_3 .scene-element.lights .lights-item .item-text {
    font-size: 16px;
    line-height: 22px;
  }

  #screen_3 .scene-element.lights .lights-item .icon {
    margin: auto 0 !important;
    top: 35px !important;
  }

  #screen_3 .scene-element.lights .lights-item:before {
    width: 100%;
    height: 100%;
    display: none !important;
  }

  #screen_3 .scene-element.lights .lights-item:nth-child(1):before {
    transform: rotate(90deg);
    left: 0;
    bottom: 0;
    margin: auto;
  }

  #screen_3 .scene-element.lights .lights-item:nth-child(3):before {
    transform: rotate(90deg);
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  #screen_3 .scene-element.lights .lights-item:nth-child(2):before {
    transform: rotate(-90deg);
    right: 0;
    bottom: 0;
    margin: auto;
  }

  #screen_3 .scene-element.lights .lights-item:nth-child(4):before {
    transform: rotate(-90deg);
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  #screen_3 .scene-element.lights .lights-item:nth-child(1):before,
  #screen_3 .scene-element.lights .lights-item:nth-child(2):before {
    top: 100px;
  }

  #screen_3 .scene-element.bottom-tube,
  #screen_3 .scene-element.top-tube {
    height: 75px;
  }

  #screen_3 .scene-element .coin {
    width: 55px;
    height: 55px;
  }

  #screen_3 .scene-element .text-wrp {
    top: auto;
    bottom: 75px;
  }

  #screen_3 .scene-element .text-wrp .text {
    padding: 15px;
    width: 100%;
  }

  #screen_3 .scene-element .text-wrp .h1,
  #screen_3 .scene-element .text-wrp h1 {
    display: none;
  }

  #screen_3 .scene-element .text-wrp p {
    display: none;
  }

  #screen_3 .scene-element .text-wrp .button {
    margin: -40px auto 0;
    width: 200px;
  }
}

@media screen and (max-height: 700px) and (min-width: 768px) {
  #screen_3 .scene-element.lights {
    bottom: 75px;
  }

  #screen_3 .scene-element.bottom-tube,
  #screen_3 .scene-element.top-tube {
    height: 250px;
  }
}
</style>
