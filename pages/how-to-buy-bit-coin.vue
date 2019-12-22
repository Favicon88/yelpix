<template>
  <main class="content">
    <AudioFile />
    <section class="about1 top-sec">
      <div class="container">
        <div class="section-heading text-center h1c m2">
          <h1>How to Buy Bitcoin?</h1>
        </div>
        <div class="row">
          <div class="col-lg-1 my-auto"></div>
          <div class="col-lg-10 guide-tabs my-auto text-center">
            <div id="outerTab" class="nav nav-tabs nav-fill" role="tablist">
              <a
                id="nav-home-tab"
                v-for="tab in tabs"
                :key="tab"
                :class="[
                  'nav-item',
                  'nav-link',
                  { active: currentTab === tab }
                ]"
                @click="currentTab = tab"
                data-toggle="tab"
                role="tab"
                >{{ tab }}</a
              >
            </div>
            <div class="card-body tab-content">
              <!-- eslint-disable -->
              <keep-alive>
                <component
                  v-bind:is="currentTabComponent"
                ></component>
              </keep-alive>
              <!-- eslint-enable -->
            </div>
          </div>
          <div class="col-lg-1 my-auto"></div>
        </div>
      </div>
    </section>

    <section class="payment text-center">
      <div class="payment-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 my-auto">
              <h2>Payment Methods:</h2>
            </div>
            <div class="col-lg-2 my-auto">
              <img src="/images/other/payment-icon-1.png" class="img-fluid" />
            </div>
            <div class="col-lg-2 my-auto">
              <img src="/images/home/alipay-logo.png" class="img-fluid" />
            </div>
            <div class="col-lg-2 my-auto">
              <img src="/images/home/unionpay-logo.png" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import AudioFile from '@/components/AudioFile'
import TabOTC from '@/components/HowToBuyBitCoin/TabOTC'
import TabCredit from '@/components/HowToBuyBitCoin/TabCredit'
export default {
  name: 'HowToBuyBitCoin',
  /* eslint-disable */
  components: {
    AudioFile,
    TabOTC,
    TabCredit
  },
  /* eslint-enable */
  layout: 'defaultLk',
  data() {
    return {
      currentTab: 'OTC',
      tabs: ['OTC', 'Credit']
    }
  },
  computed: {
    currentTabComponent() {
      return 'Tab' + this.currentTab
    }
  }
}
</script>

<style lang="scss" scoped>
.nav .nav-link {
  cursor: pointer;
  color: #b52c49;
}

.nav-tabs .nav-link:hover {
  color: #1b1947;
  background-color: #f5f5f5;
  border-color: #dddfeb #dddfeb #fff;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #1b1947;
  background-color: #f5f5f5;
  border-color: #dddfeb #dddfeb #fff;
}
</style>
