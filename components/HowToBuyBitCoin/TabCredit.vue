<template>
  <div id="tabb" class="tab-pane" role="tabpanel">
    <ul id="innerTab" class="nav nav-tabs" role="tablist">
      <li v-for="(tab, key) in tabs" class="nav-item">
        <a
          :class="['nav-link', { active: currentTab === tab }]"
          @click="currentTab = tab"
          aria-expanded="true"
          >{{ tabsName[key] }}</a
        >
      </li>
    </ul>
    <div class="card-body tab-content tab-sub-g">
      <!-- eslint-disable -->
              <keep-alive>
                <component
                  v-bind:is="currentTabComponent"
                ></component>
              </keep-alive>
      <!-- eslint-enable -->
    </div>
  </div>
</template>

<script>
import TabBinanceCredit from '@/components/HowToBuyBitCoin/TabOTC/TabBinanceCredit'
import TabBuyHuobi from '@/components/HowToBuyBitCoin/TabOTC/TabBuyHuobi'
export default {
  name: 'TabCredit',
  /* eslint-disable */
  components: {
    TabBinanceCredit, TabBuyHuobi
  },
  /* eslint-enable */
  data() {
    return {
      currentTab: 'BinanceCredit',
      tabs: ['BinanceCredit', 'BuyHuobi'],
      tabsName: ['How to buy Credit in Huobi', 'Binance Credit']
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
.tab-content > .tab-pane {
  display: block;
}

.nav .nav-link {
  cursor: pointer;
}
</style>
