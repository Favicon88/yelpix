<template>
  <main class="content">
    <AudioFile />
    <section class="top-sec">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 my-auto"></div>
          <div class="col-lg-7 my-auto">
            <div class="section-heading text-center h1c">
              <h1>Payment Policy</h1>
            </div>
            <h4 class="te2">1. Payment Policy</h4>
            <p>
              The Company is financially responsible for clients account balance
              at any particular time. Company’s financial responsibility begins
              with the first data about customers funds deposit and continues up
              to the full withdrawal of customer's funds.<br />Client has the
              right to demand any amount of funds from the Company which is
              available in his account at the time of request.<br />The only
              official way of depositing and withdrawing are the ways which
              appear at the company’s official website. Client takes all the
              risks related to the usage of the payment methods, this as to the
              fact that the payment methods are not partners of the company and
              not in company’s accountability.
            </p>
            <p>
              The company is not responsible for any cancellation or delay of
              funds transaction which depends on the payment method. In case
              that client has any complaints related to any of the payment
              methods, it’s in his responsibility to contact the support center
              of this payment method and to notify the company about those
              complaints.<br />The Company will not be responsible for the
              operation of any third-party service providers, which the customer
              may use in order to make any deposit/withdrawal. The Company’s
              financial responsibility for the Client’s funds begins at the
              moment when the funds arrive to the Company’s Wallet or any other
              account belongs to the Company and that appears at Payment Methods
              page of the website.
            </p>
            <p>
              In case any fraud appears during a funds transaction or after it,
              the Company reserves the right to cancel this transaction and to
              freeze the Client's account. The Company’s responsibility as to
              the Client’s funds ends at those moment when the funds leave the
              Company’s Wallet or any other account belongs to the Company and
              that appears at Payment Methods page of the website. In case of
              any technical errors which may appear during the financial
              transaction the company saves the right to cancel those transfer
              and all other clients financial activity at the company’s website.
            </p>
            <h4 class="te2">2. Client’s Registration</h4>
            <p>
              By registering on the Website, the Client agrees to the processing
              of their personal data in accordance with the Privacy Policy. This
              processing is carried out for the purpose of providing services
              under the Agreement, as well as for the ease of use of the
              platform, prompt communication with the Client, protection of the
              Client's funds and prevention of fraud. This consent is valid for
              an unlimited period of time and can be withdrawn by sending a
              respective request to support@optioning.io.
            </p>
            <p>
              The process of collecting Client's personal data by the Company
              consists of collecting information about the Client's e-mail
              address, as well as collecting the data from cookies to gather
              statistics on the Client's interactions with the Website. All
              personal data provided to the Company by the Client is considered
              confidential and can be disclosed to third parties only with the
              consent of the Client.
            </p>
            <p>The Client registration procedure consists of one stage:</p>
            <ol class="tcb">
              <li>
                The procedure of Client registration on the Website of the
                Company;
              </li>
            </ol>
            <p>
              To complete the Client's registration on the Company's Website, it
              is necessary to perform the following steps:
            </p>
            <ol class="tcb">
              <li>Enter personal and contact details;</li>
              <li>Accept the terms of this Agreement and its annexes.</li>
            </ol>
            <h4 class="te2">3. Depositing Procedure</h4>
            <p>
              In order to make a deposit the client has to make a request from
              his personal profile. In order to complete the request the client
              has to fill initiation of payment with amount in bitcoins.<br />Then
              the client will be given a personal bitcoin wallet, to which
              client should send bitcoins.<br />It is important to send only
              bitcoins (BTC), any other cryptocurrency can not be received and
              the funds can be lost.<br />After 1 confirmation of blockchain
              network, bitcoins will be on the clients deposit.<br />Processing
              time of the request depends on the workload of the blockchain
              network, the company cannot regulate this processing time.
            </p>
            <h4 class="te2">4. Taxes</h4>
            <p>
              The company is not a tax agent and thus shall not provide clients'
              financial information to any third parties.<br />
              This information will not be disclosed unless officially requested
              by government authorities.
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
  name: 'PaymentPolicy',
  components: {
    AudioFile
  },
  layout: 'defaultLk'
}
</script>

<style lang="scss" scoped>
div {
  font-size: 18px;
  line-height: 24px;
  color: #fff;
}
</style>
