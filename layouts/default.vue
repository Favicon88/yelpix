<template>
  <div class="wrapper">
    <header class="header">
      <div class="container-fluid">
        <a class="logo" href="index.html"
          ><img src="/images/home/logo.png" alt="Optioning" />
        </a>
        <nav class="menu-wrp">
          <div class="mob-trigger"><span></span></div>
          <ul>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="assets.html">For Traders</a></li>
            <li class="submenu">
              <span>Documentation</span>
              <ul>
                <li>
                  <a href="terms-and-conditions.html"
                    >Terms & <br />Conditions</a
                  >
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy <br />Policy</a>
                </li>
                <li><a href="payment-policy.html">Deposit Promotion</a></li>
                <li>
                  <a href="withdrawal-policy.html">Withdrawal <br />Policy </a>
                </li>
                <li>
                  <a href="refund-policy.html">Refund <br />Policy</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="lang-wrp">
          <button
            id="dropdownMenuButton"
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            EN
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Kr</a>
            <a class="dropdown-item" href="#">中文</a>
          </div>
        </div>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles.scss';
</style>
