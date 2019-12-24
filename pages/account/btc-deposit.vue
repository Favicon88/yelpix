<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <SidebarLk />
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->
          <div
            class="d-sm-flex align-items-center justify-content-between mb-4"
          >
            <h1 class="h3 mb-0 text-gray-800">My Page</h1>
          </div>

          <!-- Content Row -->

          <div class="row account">
            <!-- Area Chart -->
            <div class="col-xl-8 col-lg-7">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">BTC Deposit</h6>
                  <p>Deposit BTC Crypto Currency</p>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-12">
                      <h4>BTC Address</h4>
                      <p>
                        You can deposit a bit coin to the address below assigned
                        to you
                      </p>
                      <div class="form-row">
                        <div class="col-auto">
                          <input
                            type="text"
                            readonly
                            class="form-control"
                            value="fdhjd6764dhuh47887"
                          />
                        </div>
                        <div class="col-auto">
                          <button type="submit" class="btn btn-primary mb-2">
                            Copy
                          </button>
                        </div>
                      </div>

                      <p>
                        如需要其他的支付方式，请联系以下微信：<br />optioning01，optioning02
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->
</template>

<script>
import SidebarLk from '@/components/SidebarLk'
export default {
  name: 'BtcDeposit',
  components: {
    SidebarLk
  },
  layout: 'defaultLk'
}
</script>

<style lang="scss">
@import url('assets/css/new-age.css');
</style>

<style lang="scss" scoped></style>
