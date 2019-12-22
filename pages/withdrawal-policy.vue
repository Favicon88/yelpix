<template>
  <main class="content">
    <AudioFile />
    <section class="top-sec">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 my-auto"></div>
          <div class="col-lg-7 my-auto">
            <div class="section-heading text-center h1c">
              <h1>Withdrawal Policy</h1>
            </div>
            <p>
              To withdraw funds from his/her account, the Client should send a
              withdrawal request through his/her personal profile.
              <br /><br />In order to fill in the withdrawal form correctly, the
              Client shall insert the bitcoin wallet to which he wants to
              receive the funds.
            </p>
            <p>
              After the Client creates an application, the size of the amount
              withdrawn is not deducted from the balance of their account until
              the moment of the direct payment. <br /><br />Withdrawals applied
              by the Client are non-refundable and cannot be appealed. Minimum
              withdrawal amount is 0.002 BTC.
            </p>
            <p>
              When a withdrawal request is submitted, it may take up to 1
              business day to process the request. <br /><br />When your
              application is approved, funds are immediately sent and
              transactions are available on blockchain.info.
            </p>
            <p>
              The Company reserves the right to increase the processing time; in
              this case, the Company will notify the Client via any contact
              method indicated by the Client in his/her profile.
            </p>
            <p>
              In case the trader has violated the accepted rules of the
              platform, the broker reserves the right not to withdraw the traded
              funds from the promotion, or depending on the magnitude of the
              violation, their current trading balance in the platform.
            </p>
            <p>
              The Client is totally responsible for the information he/she
              provides to the Company through the withdrawal form.
            </p>
          </div>
          <div class="col-lg-2 my-auto"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import AudioFile from '@/components/AudioFile'
export default {
  name: 'WithdrawalPolicy',
  components: {
    AudioFile
  },
  layout: 'defaultLk'
}
</script>

<style lang="scss" scoped></style>
