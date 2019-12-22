<template>
  <div id="tabc" class="tab-pane active" role="tabpanel">
    <ul id="innerTab" class="nav nav-tabs" role="tablist">
      <li v-for="(tab, key) in tabs" class="nav-item">
        <a
          :class="['nav-link', { active: currentTab === tab }]"
          @click="currentTab = tab"
          data-toggle="tab"
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
import TabHuobi from '@/components/HowToBuyBitCoin/TabCredit/TabHuobi'
import TabLocalBitcoin from '@/components/HowToBuyBitCoin/TabCredit/TabLocalBitcoin'
import TabOkex from '@/components/HowToBuyBitCoin/TabCredit/TabOkex'
import TabRemitano from '@/components/HowToBuyBitCoin/TabCredit/TabRemitano'
export default {
  name: 'TabOTC',
  /* eslint-disable */
  components: {
    TabHuobi,
    TabLocalBitcoin,
    TabOkex,
    TabRemitano
  },
  /* eslint-enable */
  data() {
    return {
      currentTab: 'Remitano',
      tabs: ['Remitano', 'LocalBitcoin', 'Huobi', 'Okex'],
      tabsName: [
        'Remitano (MYR)',
        'LocalBitcoin (MYR)',
        'Huobi (RMB)',
        'Okex (RMB)'
      ]
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
