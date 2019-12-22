<template>
  <main class="content">
    <AudioFile />
    <section class="faq top-sec">
      <div class="container faqs">
        <div class="section-heading text-center h1c">
          <h1>Customer Support Center</h1>
        </div>
      </div>
    </section>
    <section class="faq1">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h4 class="te3">General Questions</h4>
            <div class="q-container">
              <div class="ques1">
                What is Optioning?
              </div>
              <div class="ans1">
                A trading platform that helps you start your journey as a
                trader. As of the current moment, we offer the following
                instruments - Options and Forex: GBP/AUD, GBP/JPY, EUR/USD,
                BTC/USD, and ETH/USD. <br /><br />
                You can start practicing on a demo account and continue trading
                with real funds.
              </div>
            </div>
            <div class="q-container">
              <div class="ques1">
                How much money can I make?
              </div>
              <div class="ans1">
                Success depends on skills and patience, trading strategy, and
                amount that you invest. You can first practice with a demo
                account.
              </div>
            </div>
            <!--           <a href="faq/general-questions.html">+9 Questions</a> -->
          </div>
          <div class="col-lg-6">
            <h4 class="te3">Depositing Funds</h4>
            <div class="q-container">
              <div class="ques1">
                How do I make a deposit?
              </div>
              <div class="ans1">
                For deposits, every deposit Optioning will only accept Bitcoin
                (BTC). The minimum deposit is 10 USD equivalent to BTC.
                <br /><br />
                No fees are charged by Optioning when you make a deposit or
                withdraw funds.
              </div>
            </div>
            <div class="q-container">
              <div class="ques1">
                What if I want to change the currency of my account?
              </div>
              <div class="ans1">
                After you make the first deposit attempt in BTC, United States
                Dollar (USD) will only be reflected in your trading balance.
              </div>
            </div>
            <!-- <a href="faq/depositing-funds.html">+2 Questions</a> -->
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <h4 class="te3">Trading</h4>
            <div class="q-container">
              <div class="ques1">
                What are the purchase time and the expiration time?
              </div>
              <div class="ans1">
                The chart shows two lines marking points in time - the purchase
                time is the white start line and the expiration time is the
                yellow finish line. After this purchase time, you can’t buy an
                option for the selected expiration time. When the transaction
                crosses this yellow finish line, it closes automatically and you
                take either a profit or a loss for the result.
              </div>
            </div>
            <div class="q-container">
              <div class="ques1">
                What is the minimum price of an option?
              </div>
              <div class="ans1">
                We want trading to be available to everyone. The minimum price
                of an option is $10.
              </div>
            </div>
            <!-- <a href="faq/trading.html">+12 Questions</a> -->
          </div>
          <div class="col-lg-6">
            <h4 class="te3">Withdrawing Funds</h4>
            <div class="q-container">
              <div class="ques1">
                How do I withdraw money?
              </div>
              <div class="ans1">
                For withdrawals, Optioning will process your requested amount
                from United States Dollar (USD) to Bitcoin (BTC).
                <br /><br />
                In order to withdraw funds, make a withdrawal request using the
                Withdrawal tab under Finances.
              </div>
            </div>
            <div class="q-container">
              <div class="ques1">
                Do I need to provide any documents to make a withdrawal?
              </div>
              <div class="ans1">
                Yes. You need to verify your identity in order to withdraw
                funds.<br /><br />
                Account verification is necessary in order to prevent fraudulent
                financial transactions on the account.
              </div>
            </div>
            <!-- <a href="faq/withdrawing-funds.html">+5 Questions</a> -->
          </div>
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
  name: 'CustomerSupportCenter',
  components: {
    AudioFile
  },
  layout: 'defaultLk'
}
</script>

<style lang="scss" scoped></style>
