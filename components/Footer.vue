<template>
  <section class="section footer">
    <div class="container-fluid">
      <div class="menu-side">
        <div class="item">
          <div class="ttl">Optioning</div>
          <ul>
            <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
          </ul>
        </div>
        <div class="item">
          <div class="ttl">For Traders</div>
          <ul>
            <li><nuxt-link to="/assets">For Traders</nuxt-link></li>
            <li>
              <nuxt-link to="/customer-support-center"
                >Customer Support Center</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/how-to-buy-bit-coin"
                >How to Buy Bitcoin</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="item">
          <div class="ttl">Documentation</div>
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
        </div>
      </div>
      <div class="info-side">
        <div class="lang-wrp">
          <div class="txt">Switch Language:</div>
          <div class="dropdown lang-sw">
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
        <div class="risk">
          <div class="ttl">General Risk Warning</div>
          <div class="text">
            Binary Options Trading is of high risk nature and may lead to full
            or partial loss of money invested. That is why Binary Options may be
            suitable not for all traders. The Company recommends its clients to
            invest in Binary Options only such an amount of funds that will not
            cause seriouse material damage in case of its loss. The Company is
            not liable for results of clients trading operations. Clients should
            determine acceptable degree of risk beforehand and don't invest in
            options trading amounts bigger than they can afford. Market data,
            educational and analytical materials available on the site are not
            direct instructions for trading actions.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  top: 400%;
  left: 0px;
  height: auto !important;
  background-color: #1b1947;
  padding: 100px 0;
}

.footer .container,
.footer .container-fluid {
  padding: 0 60px;
  display: flex;
  -ms-align-items: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer .container > div,
.footer .container-fluid > div {
  width: 50%;
  position: relative;
  text-align: left;
}

.footer a,
.footer div {
  color: #c4c9d0;
}

.footer .info-side {
  padding-left: 20px;
}

.footer .info-side .lang-wrp {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.footer .info-side .lang-wrp .txt {
  position: relative;
  display: inline-block;
  width: auto;
  font-size: 22px;
  line-height: 28px;
  text-transform: uppercase;
  padding-left: 20px;
}

.footer .info-side .lang-wrp .dropdown {
  margin-left: auto;
  margin-right: 0;
  position: relative;
  display: block;
  width: 65px;
  margin-right: 15px;
}

.footer .info-side .lang-wrp button {
  font-size: 22px;
  line-height: 28px;
  position: relative;
  display: inline-block;
  color: #c4c9d0;
  text-transform: uppercase;
  right: 0;
  background-color: transparent;
  border: none;
}

.footer .info-side .lang-wrp .dropdown a {
  font-size: 22px;
  line-height: 28px;
  position: relative;
  display: inline-block;
  color: #c4c9d0;
  text-transform: uppercase;
}

.footer .info-side .risk {
  padding: 20px;
  border: 2px solid #c4c9d0;
  font-size: 18px;
  line-height: 24px;
}

.footer .menu-side .item {
  position: relative;
  width: 100%;
}

.footer .menu-side .item:not(:last-child) {
  margin-bottom: 50px;
}

.footer .menu-side .ttl {
  text-transform: uppercase;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 20px;
}

.footer .menu-side ul {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
}

.footer .menu-side ul li,
.one-scroll #screen_1 .container .buttons {
  position: relative;
  display: inline-block;
}

.footer .menu-side ul li:not(:last-child) {
  margin-right: 20px;
}

.footer .menu-side ul li a {
  font-size: 20px;
  line-height: 28px;
  position: relative;
  display: inline-block;
}

.footer .menu-side ul li a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  transition: all 0.3s;
  background-color: #fff;
  height: 1px;
}

.footer .menu-side ul li a:hover,
.one-scroll #screen_2 .container .head h1,
.one-scroll #screen_2 .container-fluid .head h1 {
  color: #fff;
}

@media screen and (max-width: 1600px) {
  .footer .info-side .lang-wrp .dropdown {
    height: 22px;
    width: 70px;
  }

  .footer .menu-side ul li a {
    font-size: 18px;
    line-height: 26px;
  }
}

@media screen and (max-width: 1399px) {
  .footer .info-side .lang-wrp .txt {
    font-size: 18px;
    line-height: 24px;
  }

  .footer .info-side .risk {
    font-size: 16px;
    line-height: 22px;
  }

  .footer .menu-side .item:not(:last-child) {
    margin-bottom: 30px;
  }

  .footer .menu-side .ttl {
    font-size: 30px;
    line-height: 30px;
  }

  .footer .menu-side ul li a {
    font-size: 16px;
    line-height: 22px;
  }
}

@media screen and (max-width: 1200px) {
  .footer .menu-side ul {
    flex-wrap: wrap;
  }

  .footer .menu-side ul li {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 1024px) {
  .footer .container,
  .footer .container-fluid {
    padding: 0 30px;
  }

  .footer .menu-side ul li {
    display: block;
    width: 100%;
  }

  .footer .menu-side ul li:nth-child(1) br,
  .footer .menu-side ul li:nth-child(2) br,
  .footer .menu-side ul li:nth-child(4) br,
  .footer .menu-side ul li:nth-child(5) br {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .footer .container > div,
  .footer .container-fluid > div {
    width: 100%;
  }

  .not-index .footer {
    max-height: initial;
    height: 100%;
    min-height: 100%;
    overflow: inherit;
  }

  .footer .info-side .lang-wrp .dropdown {
    width: 70px;
  }

  .footer {
    max-height: 100vh;
    overflow: auto;
  }

  .footer .container,
  .footer .container-fluid {
    padding: 0 15px;
  }

  .footer .container > div {
    width: 100%;
  }

  .footer .info-side {
    padding-left: 0;
  }

  .footer .info-side .lang-wrp .txt {
    padding-left: 0;
  }
}
</style>
