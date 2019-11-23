<template>
  <div class="index-page">
    <AudioFile />
    <div class="content">
      <div id="one-scroll">
        <Section1 :class="{ active: activeSection == 0 }" class="section" />
        <Section2
          :class="{
            active: activeSection == 1,
            on: sectionArm
          }"
          class="section"
        />
        <Section3 :class="{ active: activeSection == 2 }" class="section" />
        <Section4 :class="{ active: activeSection == 3 }" class="section" />
      </div>
    </div>
  </div>
</template>

<script>
import AudioFile from '@/components/AudioFile'
import Section1 from '@/components/MainPage/Section_1'
import Section2 from '@/components/MainPage/Section_2'
import Section3 from '@/components/MainPage/Section_3'
import Section4 from '@/components/MainPage/Section_4'

export default {
  components: {
    AudioFile,
    Section1,
    Section2,
    Section3,
    Section4
  },
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStarty: 0,
      armSection: false
    }
  },
  computed: {
    sectionArm() {
      return this.armSection
    }
  },
  mounted() {
    this.calculateSectionOffsets()
    window.addEventListener('wheel', this.handleMouseWheelDOM, {
      passive: false
    }) // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }) // Other browsers
    window.addEventListener('touchstart', this.touchStart, {
      passive: false
    }) // mobile devices
    window.addEventListener('touchmove', this.touchMove, {
      passive: false
    }) // mobile devices
  },
  beforeDestroy() {},
  destroyed() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }) // Other browsers
    window.removeEventListener('wheel', this.handleMouseWheelDOM, {
      passive: false
    }) // Mozilla Firefox
    window.removeEventListener('touchstart', this.touchStart) // mobile devices
    window.removeEventListener('touchmove', this.touchMove) // mobile devices
  },
  methods: {
    calculateSectionOffsets() {
      const sections = document.getElementsByTagName('section')
      const length = sections.length
      for (let i = 0; i < length; i++) {
        const sectionOffset = sections[i].offsetTop
        this.offsets.push(sectionOffset)
      }
    },
    moveDown() {
      this.inMove = true
      this.activeSection--
      if (this.activeSection < 0) this.activeSection = 0
      this.scrollToSection(this.activeSection, true)
      if (this.activeSection === 1) this.armSection = true
    },
    moveUp() {
      this.inMove = true
      this.activeSection++
      if (this.activeSection > this.offsets.length - 1)
        this.activeSection = this.offsets.length - 1
      this.scrollToSection(this.activeSection, true)
      if (this.activeSection === 1) this.armSection = true
    },
    handleMouseWheelDOM(e) {
      if (e.deltaY > 0 && !this.inMove) {
        this.moveUp()
      } else if (e.deltaY < 0 && !this.inMove) {
        this.moveDown()
      }
      e.preventDefault()
      return false
    },
    handleMouseWheel(e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp()
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown()
      }
      e.preventDefault()
      return false
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false
      this.activeSection = id
      this.inMove = true
      document.getElementsByTagName('section')[id].scrollIntoView({
        behavior: 'smooth'
      })
      setTimeout(() => {
        this.inMove = false
      }, 500)
    },
    touchStart(e) {
      e.preventDefault()
      this.touchStartY = e.touches[0].clientY
    },
    touchMove(e) {
      if (this.inMove) return false
      e.preventDefault()
      const currentY = e.touches[0].clientY
      if (this.touchStartY < currentY) {
        this.moveDown()
      } else {
        this.moveUp()
      }
      this.touchStartY = 0
      return false
    }
  }
}
</script>

<style lang="scss">
.one-scroll .screen {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
.content {
  flex: 1 0 auto;
  overflow: hidden;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.one-scroll {
  position: relative;
  height: 100vh;
  transition: 1s cubic-bezier(0.5, 0, 0.5, 1);
}

.one-scroll #screen_3 .scene-element.lights .lights-item .item-text {
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  background-color: rgba(3, 9, 77, 0.4);
  padding: 10px;
  min-height: 84px;
  width: 100%;
  vertical-align: middle;
  display: inline-flex;
  -ms-align-items: center;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.one-scroll #screen_3 .scene-element.lights .lights-item .item-body {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

.one-scroll #screen_3 .scene-element.lights .lights-item .item-body img {
  width: 100%;
}

.one-scroll #screen_3 .scene-element.bottom-tube,
.one-scroll #screen_3 .scene-element.top-tube {
  bottom: 50px;
  height: 412px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 3;
  transition: all 0.5s;
}

.one-scroll #screen_3 .scene-element.bottom-tube img,
.one-scroll #screen_3 .scene-element.top-tube img {
  height: 100%;
  width: 100%;
  z-index: 1;
  position: relative;
}

.one-scroll #screen_3 .scene-element .coin {
  height: 296px;
  width: 296px;
  position: absolute;
  left: -150px;
  top: 0;
  bottom: 0;
  z-index: 0;
  margin: auto 0;
  transition: all 0;
  transition-delay: 0.5s;
}

.one-scroll #screen_3 .scene-element .text-wrp {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  width: 100%;
}

.one-scroll #screen_3 .scene-element .text-wrp .text {
  position: relative;
  display: inline-block;
  background-color: rgba(3, 9, 77, 0.33);
  padding: 15px 75px 50px;
}

.one-scroll #screen_3 .scene-element .text-wrp .h1,
.one-scroll #screen_3 .scene-element .text-wrp h1 {
  color: #fff;
}

.one-scroll #screen_3 .scene-element .text-wrp .button {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 265px;
  background-color: #b52c49;
  border-color: #b52c49;
  color: #fff;
}

.one-scroll #screen_3 .scene-element .text-wrp .button:hover,
.one-scroll #screen_4 .scene-element.bottom-coin .button:hover {
  background-color: transparent;
  color: #fff;
  border-color: #fff;
}
</style>
