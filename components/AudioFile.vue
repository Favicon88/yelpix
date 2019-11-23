<template>
  <button :class="{ play: isPlay }" @click="playSound" class="sound-on">
    <!-- <span class="txt">Audio</span> -->
    <span class="icon">
      <span class="icon-play">
        <svg
          id="Capa_1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 314 314"
          style="enable-background:new 0 0 314 314;"
          xml:space="preserve"
        >
          <path
            d="M180.761,32.99c-2.069-1.275-4.651-1.386-6.821-0.291L54.42,92.932H18.484C8.292,92.932,0,101.223,0,111.414v91.172
              c0,10.192,8.292,18.484,18.484,18.484H54.42l119.52,60.231c0.993,0.501,2.073,0.749,3.15,0.749c1.275,0,2.549-0.349,3.671-1.04
              c2.069-1.273,3.329-3.53,3.329-5.96V38.95C184.09,36.52,182.83,34.263,180.761,32.99z M14,202.586v-91.172
              c0-2.43,2.054-4.482,4.484-4.482h30.603v100.139H18.484C16.054,207.071,14,205.017,14,202.586z M170.09,263.685L63.088,209.762
              V104.241L170.09,50.316V263.685z"
          />
          <path
            d="M238.39,120.035c-2.756,2.711-2.792,7.143-0.081,9.899c6.754,6.866,10.628,16.73,10.628,27.064
              c0,10.334-3.874,20.201-10.629,27.069c-2.711,2.757-2.674,7.189,0.083,9.899c1.363,1.341,3.136,2.009,4.908,2.009
              c1.811,0,3.621-0.698,4.991-2.092c9.308-9.465,14.646-22.909,14.646-36.886c0-13.977-5.339-27.419-14.647-36.883
              C245.577,117.359,241.145,117.324,238.39,120.035z"
          />
          <path
            d="M291.577,100.451c-2.712-2.757-7.143-2.792-9.899-0.081c-2.756,2.711-2.792,7.143-0.081,9.899
              C293.292,122.159,300,139.191,300,156.998c0,17.81-6.708,34.845-18.403,46.736c-2.711,2.756-2.675,7.188,0.082,9.898
              c1.363,1.341,3.136,2.01,4.908,2.01c1.811,0,3.62-0.698,4.99-2.092C305.827,199.063,314,178.451,314,156.998
              C314,135.548,305.827,114.937,291.577,100.451z"
          />
        </svg>
      </span>
      <span class="icon-pause">
        <svg
          id="Capa_1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 314 314"
          style="enable-background:new 0 0 314 314;"
          xml:space="preserve"
        >
          <path
            d="M177.546,35.222c-2.068-1.274-4.651-1.386-6.821-0.291L53.495,94.009H18.267C8.194,94.009,0,102.203,0,112.276v89.449
            c0,10.072,8.194,18.267,18.267,18.267h35.225l117.233,59.078c0.993,0.501,2.073,0.749,3.15,0.749c1.275,0,2.549-0.349,3.671-1.04
            c2.069-1.273,3.329-3.53,3.329-5.96V41.182C180.875,38.752,179.615,36.495,177.546,35.222z M14,201.725v-89.449
            c0-2.313,1.954-4.267,4.267-4.267h29.893v97.982H18.267C15.954,205.991,14,204.037,14,201.725z M166.875,261.452L62.159,208.682
            V105.319l104.716-52.771V261.452z"
          />
          <path
            d="M285.915,157l26.035-26.035c2.733-2.733,2.733-7.165-0.001-9.899c-2.732-2.732-7.165-2.733-9.899,0.001l-26.033,26.034
            l-26.034-26.034c-2.733-2.732-7.166-2.733-9.899-0.001c-2.734,2.734-2.734,7.166-0.001,9.899L266.116,157l-26.034,26.035
            c-2.733,2.733-2.733,7.165,0.001,9.899c1.366,1.366,3.158,2.05,4.949,2.05s3.583-0.684,4.95-2.051l26.034-26.034l26.033,26.034
            c1.367,1.367,3.158,2.051,4.95,2.051c1.791,0,3.583-0.684,4.949-2.05c2.734-2.734,2.734-7.166,0.001-9.899L285.915,157z"
          />
        </svg>
      </span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'AudioFile',
  data() {
    return {
      isPlay: false,
      audio: ''
    }
  },
  mounted() {
    this.audio = new Audio('/fire.mp3')
    this.audio.loop = true
  },
  methods: {
    playSound() {
      if (!this.isPlay) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
      this.isPlay = !this.isPlay
    }
  }
}
</script>

<style lang="scss" scoped>
.sound-on {
  height: 63px;
  position: fixed;
  bottom: 0px;
  top: 0;
  margin: auto 0;
  right: 10px;
  border: 2px solid #fff;
  border-radius: 100%;
  padding: 15px;
  color: #fff;
  background-color: transparent;
  z-index: 7;
  display: -webkit-inline-flex;
  display: -moz-inline-flex;
  display: -ms-inline-flex;
  display: -o-inline-flex;
  display: inline-flex;
  -ms-align-items: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  box-shadow: none;
  outline: none;
}
.sound-on span.txt {
  margin-right: 10px;
}
.sound-on span.icon {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  overflow: hidden;
}
.sound-on span.icon span {
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
  display: block;
}
.sound-on span.icon span svg {
  height: 100%;
  width: 100%;
}
.sound-on span.icon span svg path {
  fill: #fff;
}
.sound-on.play span.icon span {
  transform: translateY(-100%);
}
.audio-file {
  position: fixed;
  z-index: -1;
}
</style>
