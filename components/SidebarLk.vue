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
          <a class="collapse-item" href="account-btc-deposit.html"
            >BTC Deposit</a
          >
          <a class="collapse-item" href="account-eth-deposit.html"
            >BTC 구매 안내</a
          >
        </div>
      </div>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="account-withdraw-funds.html">
        <span>Withdraw Funds</span></a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="account-exchange.html">
        <span>Exchange</span></a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="account-balance-history.html">
        <span>Balance History</span></a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="account-trading-history.html">
        <span>Trading History</span></a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="account-profits-loss.html">
        <span>Profits and Loss</span></a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"> <span>Log Out</span></a>
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
