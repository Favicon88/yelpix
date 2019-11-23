<template>
  <section id="screen_2" class="screen">
    <div class="parallax-scene">
      <div class="background">
        <img src="/images/home/screen-2/background.jpg" alt="" />
      </div>
      <div class="scene-element arm">
        <img src="/images/home/screen-2/arm.png" alt="" />
        <div class="coin">
          <img src="/images/home/screen-2/coin.png" alt="" />
        </div>
      </div>
      <div class="scene-element bottom-ct">
        <img src="/images/home/screen-2/bottom-ct.png" alt="" />
      </div>
      <div class="scene-element top-ct">
        <img src="/images/home/screen-2/top-ct.png" alt="" />
        <video
          id="myVideo"
          width="480"
          controls
          poster="/images/home/screen-2/top-ct.png"
          loop
          autoplay
          muted
        >
          <source src="/video/optioning-video.mp4" type="video/mp4" />
          <source src="/video/optioning-video.ogv" type="video/ogg" />
          <source src="/video/optioning-video.webm" type="video/webm" />
          Your browser doesn't support HTML5 video tag.
        </video>
      </div>
    </div>
    <div class="container-fluid">
      <div class="head">
        <h1>How Our Platform Works?</h1>
      </div>
      <div class="text-wrp">
        <div class="text">
          <p>
            Determine the market direction for the nearest future, is it going
            to go Higher or Lower?
          </p>
          <a class="button" href="#">Try now</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section2'
}
</script>

<style lang="scss" scoped>
#screen_2 {
  height: 100vh;
  position: relative;
  width: 100%;
  overflow: hidden;
}

#screen_2 .container,
#screen_2 .container-fluid {
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

#screen_2 .container .text-wrp .text p {
  font-weight: 400;
  font-style: normal;
  font-family: 'OpenSans Regular', sans-serif;
}

#screen_2 .background img {
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

#screen_2 .container .head,
#screen_2 .container-fluid .head {
  position: relative;
  padding-top: 150px;
  text-align: center;
}

#screen_2 .container .text-wrp,
#screen_2 .container-fluid .text-wrp {
  width: 100%;
  position: relative;
  padding-bottom: 300px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding-top: 200px;
}

#screen_2 .container .text-wrp .text,
#screen_2 .container-fluid .text-wrp .text {
  position: relative;
  padding: 40px 70px;
  max-width: 650px;
  background-color: rgba(3, 9, 77, 0.53);
}

#screen_2 .container .text-wrp .text p,
#screen_2 .container-fluid .text-wrp .text p {
  position: relative;
  display: block;
  width: 100%;
  color: #fff;
  font-size: 42px;
  line-height: 62px;
}

#screen_2 .container .text-wrp .text .button,
#screen_2 .container-fluid .text-wrp .text .button {
  margin-top: 40px;
  background-color: #b52c49;
  border-color: #b52c49;
  color: #fff;
}

#screen_2 .container .text-wrp .text .button:hover,
#screen_2 .container-fluid .text-wrp .text .button:hover {
  background-color: transparent;
  color: #fff;
  border-color: #fff;
}

#screen_2.on .scene-element.arm {
  -webkit-animation: armOff 2s linear 1;
  animation: armOff 2s linear 1;
}

#screen_2.on .scene-element.top-ct img {
  opacity: 0;
}

#screen_2.on .scene-element .coin {
  transform: translateY(100%);
  opacity: 0;
}

#screen_2 .parallax-scene {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: block;
}

#screen_2 .background {
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

#screen_2 .scene-element {
  position: absolute;
  left: 0;
}

#screen_2 .scene-element .coin {
  height: 296px;
  width: 296px;
  position: absolute;
  top: 24px;
  left: -148px;
  transition: all 0.3s;
  transition-delay: 0.8s;
}

#screen_2 .scene-element .coin img {
  width: 100%;
  height: 100%;
}

#screen_2 .scene-element.arm {
  left: 50%;
  top: 0;
  z-index: 4;
  height: 356px;
  transition: all 0.6s;
  transition-delay: 0.9s;
  transform: translateX(calc(100% + 148px));
}

#screen_2 .scene-element.arm img {
  height: 100%;
}

#screen_2 .scene-element.bottom-ct {
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 3;
  transition: all 0.5s;
}

#screen_2 .scene-element.bottom-ct img {
  width: 100%;
}

#screen_2 .scene-element.top-ct {
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 4;
  transition: all 0.3s;
  transition-delay: 1s;
}

#screen_2 .scene-element.top-ct img {
  position: relative;
  width: 100%;
}

#screen_2 .scene-element.top-ct {
  opacity: 1 !important;
  mask-image: url(/images/home/screen-2/top-ct.png);
  mask-position: center 0px;
  mask-size: cover;
}

video {
  transition: all 0.3s;
  opacity: 0;
  z-index: 0;
  width: 1200px;
  transform: translate(-8px, 22px);
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
}

#screen_2.on .scene-element.top-ct video {
  opacity: 1;
}

#screen_2 .container .head h1,
#screen_2 .container-fluid .head h1 {
  color: #fff;
}

#screen_2 .scene-element.top-ct > img {
  z-index: 1;
  transition: all 0.3s;
  transition-delay: 1s;
}

@media screen and (max-width: 2000px) {
  #screen_2 .container .text-wrp .text,
  #screen_2 .container-fluid .text-wrp .text {
    max-width: 500px;
    padding: 30px 50px;
  }

  #screen_2 .container .text-wrp .text p,
  #screen_2 .container-fluid .text-wrp .text p {
    font-size: 32px;
    line-height: 52px;
  }

  #screen_2 .scene-element .coin {
    width: 240px;
    height: 240px;
  }

  #screen_2 .scene-element.arm {
    height: 300px;
  }

  #screen_2 .scene-element.bottom-ct,
  #screen_2 .scene-element.top-ct {
    bottom: -200px;
  }

  #screen_2 video {
    width: 900px;
  }
}

@media screen and (max-width: 1600px) {
  #screen_2 video {
    width: 650px;
    transform: scaleY(1) translate(-35px, 10px);
  }

  #screen_2 .container .text-wrp .text,
  #screen_2 .container-fluid .text-wrp .text {
    max-width: 375px;
  }

  #screen_2 .container .text-wrp .text p,
  #screen_2 .container-fluid .text-wrp .text p {
    font-size: 22px;
    line-height: 32px;
  }

  #screen_2 .container .text-wrp .text .button,
  #screen_2 .container-fluid .text-wrp .text .button {
    margin-top: 20px;
  }

  #screen_2 .scene-element.bottom-ct,
  #screen_2 .scene-element.top-ct {
    bottom: -100px;
  }
}

@media screen and (max-width: 1399px) {
  #screen_2 video {
    width: 600px;
    transform: scaleY(1.08) translate(-25px, 12px);
  }
}

@media screen and (max-width: 1199px) {
  #screen_2 video {
    width: 500px;
    transform: scaleY(1.08) translate(-25px, 12px);
  }
}

@media screen and (max-width: 991px) {
  #screen_2 video {
    width: 400px;
    transform: scaleY(1.08) translate(-25px, 12px);
  }
}

@media screen and (max-width: 767px) {
  #screen_2 video {
    width: 250px;
    transform: scaleY(1.08) translate(-25px, 12px);
  }
}

@media screen and (max-height: 700px) and (min-width: 768px) {
  #screen_2 .scene-element.arm {
    z-index: 5;
  }

  .container .head {
    padding-top: 75px !important;
  }

  .container .text-wrp {
    padding-top: 100px !important;
  }
}
</style>
