<template>
  <main class="content">
    <AudioFile />
    <section class="top-sec">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 my-auto"></div>
          <div class="col-lg-7 my-auto">
            <div class="section-heading text-center h1c">
              <h1>Refund Policy</h1>
            </div>

            <p>
              1. The only exception is made if a client funds his or her account
              and does not trade. He or she is allowed to send a refund request.
            </p>
            <p>
              2. In case of detecting any abuses or fraudulent activities
              against the company policy, Optioning reserves the right to decide
              about the claimed refund based on the terms and conditions of the
              company.
            </p>
            <p>
              3. Optioning will not provide refunds for those clients’ losses
              due to any reasons.
            </p>
            <p>
              4. Due to the essence of business, this refund policy is for
              informing you that the company does not provide any refunds unless
              if a client funds his or her account and does not trade.
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
  name: 'RefundPolicy',
  components: {
    AudioFile
  },
  layout: 'defaultLk'
}
</script>

<style lang="scss" scoped></style>
