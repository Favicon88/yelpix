<template>
  <main class="content">
    <AudioFile />
    <section class="about1 assets top-sec">
      <div class="container">
        <div class="section-heading text-center h1c">
          <h1>Assets</h1>
        </div>
        <div class="row">
          <div class="col-lg-1 my-auto"></div>
          <div class="col-lg-10 my-auto text-center">
            <div class="text-center">
              <!-- TradingView Widget BEGIN -->
              <div class="tradingview-widget-container">
                <div class="tradingview-widget-container__widget"></div>
                <div class="tradingview-widget-copyright">
                  <a
                    href="https://www.tradingview.com/markets/currencies/forex-cross-rates/"
                    rel="noopener"
                    target="_blank"
                    ><span class="blue-text">Forex Rates</span></a
                  >
                  by TradingView
                </div>
                <script
                  type="text/javascript"
                  src="https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"
                  async
                >
                  {
                    "width": "100%",
                    "height": "100%",
                    "currencies": [
                    "EUR",
                    "USD",
                    "JPY",
                    "GBP",
                    "AUD"
                    ],
                    "locale": "en"
                  }
                </script>
              </div>
              <!-- TradingView Widget END -->
              <script src="https://widgets.coingecko.com/coingecko-coin-list-widget.js"></script>
              <coingecko-coin-list-widget
                coin-ids="bitcoin,ethereum"
                currency="usd"
                locale="en"
              ></coingecko-coin-list-widget>
            </div>
            <div class="text-center cta2">
              <a href="#" class="button btn-red">Start Trading</a>
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
export default {
  name: 'Assets',
  components: {
    AudioFile
  },
  layout: 'defaultLk'
}
</script>

<style lang="scss" scoped></style>
