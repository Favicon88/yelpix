<template>
  <!-- Sidebar -->
  <ul
    id="accordionSidebar"
    :class="{ toggled: toggled }"
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  >
    <!-- Sidebar - Brand -->
    <!-- Divider -->
    <hr class="sidebar-divider my-0" />
    <div class="currencies">
      <!-- Currencies - Dashboard -->
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-dollar-sign"></i>
          <span>15 000</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fab fa-btc"></i>
          <span>15 000</span></a
        >
      </li>
    </div>
    <a href="#" class="btn">Start Trading</a>
    <a href="#" class="btn">체험하기</a>
    <!-- Divider -->
    <!-- Nav Item - Personal info Collapse Menu -->
    <li class="nav-item">
      <a
        @click.prevent="collapseUtilities = !collapseUtilities"
        :class="{ collapsed: !collapseUtilities }"
        class="nav-link"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-controls="collapseUtilities"
      >
        <span>Deposit</span>
      </a>
      <div
        id="collapseUtilities"
        :class="{ show: collapseUtilities }"
        class="collapse"
        data-parent="#accordionSidebar"
      >
        <div class="py-2 sub-bg collapse-inner rounded">
          <nuxt-link
            :to="localePath('account-btc-deposit')"
            class="collapse-item"
            >BTC Deposit</nuxt-link
          >
          <nuxt-link
            :to="localePath('account-eth-deposit')"
            class="collapse-item"
            >BTC 구매 안내</nuxt-link
          >
        </div>
      </div>
    </li>

    <li class="nav-item">
      <nuxt-link :to="localePath('account-withdraw-funds')" class="nav-link"
        ><span>Withdraw Funds</span></nuxt-link
      >
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath('account-exchange')" class="nav-link"
        ><span>Exchange</span></nuxt-link
      >
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath('account-balance-history')" class="nav-link"
        ><span>Balance History</span></nuxt-link
      >
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath('account-trading-history')" class="nav-link"
        ><span>Trading History</span></nuxt-link
      >
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath('account-profits-loss')" class="nav-link"
        ><span>Profits and Loss</span></nuxt-link
      >
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath('login')" class="nav-link"
        ><span>Log Out</span></nuxt-link
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button
        id="sidebarToggle"
        @click.prevent="toggled = !toggled"
        class="rounded-circle border-0"
      ></button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
export default {
  name: 'SidebarLk',
  data() {
    return {
      collapseUtilities: false,
      toggled: false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-link {
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
}

a.btn:after,
a.collapse-item:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  background-color: transparent;
}

.sidebar .nav-item .collapse .collapse-inner,
.sidebar .nav-item .collapsing .collapse-inner {
  padding: 0.5rem 0;
  min-width: 10rem;
  font-size: 1.4rem;
  margin: 0 0 1rem 0;
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
}

.sidebar.toggled .nav-item .collapse .collapse-inner {
  font-size: 1.1rem;
}
</style>
