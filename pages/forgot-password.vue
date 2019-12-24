<template>
  <!-- Main -->
  <div class="d-md-flex h-md-100 align-items-center">
    <div class="col-md-5 p-0 bg-red h-md-100">
      <div
        class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center"
      >
        <div class="logoarea pt-5 pb-5">
          <p>
            <img class="logo-1" src="img/logo-account.png" />
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-7 p-0 bg-white h-md-100 loginarea">
      <div
        class="d-md-flex align-items-center h-md-100 p-5 justify-content-center"
      >
        <form method="POST" class="form-fields">
          <h3 class="mb-4 title-1">Forgot Your Password</h3>
          <div class="input-group">
            <input
              class="input--style-2"
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
            />
          </div>
          <div class="p-t-30 ls-box">
            <nuxt-link :to="localePath('login')" class="btn2">Send</nuxt-link>
            <nuxt-link :to="localePath('login')" class="link-login"
              >Login</nuxt-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  layout: 'defaultLk'
}
</script>

<style lang="scss" scoped>
@import url('assets/css/new-age.css');

.bg-red {
  background: #1b1947;
}

a.btn2:hover {
  background: transparent;
  color: #584c1a !important;
}

a.btn2 {
  background: #b52c49;
  color: #fff !important;
}

.form-control {
  height: 38px;
  font-size: 1.5rem;
}
</style>
