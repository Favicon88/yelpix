<template>
  <header class="header">
    <div class="container-fluid">
      <nuxt-link class="logo" to="/"
        ><img src="/images/home/logo.png" alt="Optioning"
      /></nuxt-link>
      <nav class="menu-wrp">
        <div class="mob-trigger"><span></span></div>
        <ul>
          <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
          <li><nuxt-link to="/assets">For Traders</nuxt-link></li>
          <li class="submenu">
            <span>Documentation</span>
            <ul>
              <li>
                <nuxt-link to="/terms-and-conditions"
                  >Terms & <br />Conditions</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/privacy-policy">Privacy <br />Policy</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/payment-policy">Deposit Promotion</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/withdrawal-policy"
                  >Withdrawal <br />Policy</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/refund-policy">Refund <br />Policy</nuxt-link>
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
</template>

<script>
export default {
  name: 'Header',
  head: {
    script: [{ src: '/js/snap.svg-min.js' }]
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  padding: 20px 0;
}

.header .mob-trigger,
svg#line-coin #trail {
  display: none;
}

.header,
.header .mob-trigger.active span {
  background-color: transparent;
}

.header .mob-trigger.active span:before {
  transform: translateY(0) rotate(45deg);
}

.header .mob-trigger.active span:after {
  transform: translateY(0) rotate(-45deg);
}

.header .logo {
  width: 450px;
  display: block;
}

.header .logo img {
  width: 100%;
  height: auto;
}

.header .lang-wrp {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  position: relative;
}

.header .lang-wrp .dropdown {
  margin-left: auto;
  margin-right: 0;
  position: relative;
  display: block;
  width: 65px;
  height: 48px;
  margin-right: 15px;
}

.header .lang-wrp button {
  font-size: 22px;
  line-height: 28px;
  position: relative;
  padding: 0;
  display: inline-block;
  color: #c4c9d0;
  text-transform: uppercase;
  right: 0;
  background-color: transparent;
  border: none;
}

.header .lang-wrp .dropdown a {
  font-size: 22px;
  line-height: 28px;
  position: relative;
  display: inline-block;
  color: #c4c9d0;
  text-transform: uppercase;
}

.header .menu-wrp {
  width: calc(100% - 960px);
  display: block;
}

.header .menu-wrp ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  transition: all 0.33s;
  position: relative;
}

.header .menu-wrp ul li {
  position: relative;
}

.header .menu-wrp ul li:not(:last-child) {
  margin-right: 105px;
}

.header .menu-wrp ul li.submenu {
  cursor: pointer;
}

.header .menu-wrp ul li a,
.header .menu-wrp ul li.submenu span {
  font-size: 30px;
  line-height: 48px;
  position: relative;
  display: inline-block;
  color: #fff;
}

.header .menu-wrp ul li a:after,
.header .menu-wrp ul li.submenu span:after {
  content: '';
  bottom: 0;
  height: 2px;
  width: 0;
  left: 0;
  transition: all 0.3s ease;
  position: absolute;
  background-color: #fff;
}

.header .menu-wrp ul li a:hover:after,
.header .menu-wrp ul li.submenu span:hover:after {
  width: 100%;
}

.header .menu-wrp ul li.submenu:hover ul {
  opacity: 1;
  visibility: visible;
}

.header .menu-wrp ul li.submenu:after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.header .menu-wrp ul li ul {
  position: absolute;
  left: 0;
  top: 100%;
  display: block;
  padding: 15px;
  background-color: #fff;
  width: 200px;
  opacity: 0;
  visibility: hidden;
}

.header .menu-wrp ul li ul li {
  margin: 10px 0;
  margin-right: 0 !important;
}

.header .menu-wrp ul li ul li a {
  font-size: 16px;
  line-height: 22px;
  color: #1b1947;
}

.header .menu-wrp ul li ul li a:after {
  background-color: #b52c49;
}

.header .menu-wrp ul li ul li a:hover {
  color: #b52c49;
}

.header .menu-wrp ul li ul li a br {
  display: none;
}

body.menu-open .header .menu-wrp > ul {
  opacity: 1;
  visibility: visible;
}

.index-page .container,
.header .container,
.header .container-fluid {
  z-index: 1;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
}

.index-page .container,
.header .container-fluid,
.index-page .container .head {
  width: 100%;
  position: relative;
}

@media screen and (max-width: 1199px) {
  .header .menu-wrp ul li:not(:last-child) {
    margin-right: 35px;
  }
}

@media screen and (max-width: 2000px) {
  .header .lang-wrp,
  .header .logo {
    width: 250px;
  }

  .header .menu-wrp {
    width: calc(100% - 500px);
  }
}

@media screen and (max-width: 1600px) {
  .header .logo img {
    max-width: 200px;
  }

  .header .lang-wrp .dropdown {
    height: 22px;
    width: 55px;
  }

  .header .menu-wrp ul li:not(:last-child) {
    margin-right: 75px;
  }

  .header .menu-wrp ul li a,
  .header .menu-wrp ul li.submenu span {
    font-size: 22px;
    line-height: 32px;
  }
}

@media screen and (max-width: 1200px) {
  .header .logo img {
    max-width: 175px;
  }

  .header .lang-wrp {
    margin-bottom: 0;
  }

  .header .menu-wrp ul li:not(:last-child) {
    margin-right: 40px;
  }
}

@media screen and (max-width: 1024px) {
  .header .mob-trigger {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 40px;
    position: relative;
  }

  .header .mob-trigger span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 30px;
    height: 2px;
    background-color: #fff;
    transition: all 0.3s;
  }

  .header .mob-trigger span:after,
  .header .mob-trigger span:before {
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    left: 0;
    margin: auto;
    background-color: #fff;
    transition: all 0.3s;
  }

  .header .mob-trigger span:before {
    transform: translateY(-8px);
  }

  .header .mob-trigger span:after {
    transform: translateY(8px);
  }

  .header .lang-wrp,
  .header .logo {
    width: 175px;
  }

  .header .menu-wrp {
    width: calc(100% - 500px);
  }

  .header .menu-wrp ul {
    top: 100%;
    position: absolute;
    width: 100%;
    left: 0;
    opacity: 0;
    visibility: hidden;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .header .menu-wrp ul li.submenu:hover ul {
    opacity: 0;
    visibility: hidden;
  }

  .header .menu-wrp ul li.submenu ul {
    left: auto;
    right: 0;
  }

  .header .menu-wrp ul li.submenu.open ul {
    opacity: 1;
    visibility: visible;
  }

  .header .container,
  .header .container-fluid {
    padding: 0 30px;
  }
}

@media screen and (max-width: 767px) {
  .header .container,
  .header .container-fluid,
  .one-scroll #screen_1 .container {
    padding: 0 15px;
  }

  .header .lang-wrp {
    width: 25%;
  }

  .header .logo {
    width: 50%;
  }

  .header .menu-wrp {
    width: 25%;
  }

  .header .menu-wrp ul {
    display: block;
    text-align: right;
  }

  .header .menu-wrp ul li {
    margin-right: 0 !important;
    margin-bottom: 10px;
  }
}
</style>
