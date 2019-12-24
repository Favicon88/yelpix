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
                <div class="card-header">
                  <h6 class="m-0 font-weight-bold text-primary">Exchange</h6>
                  <p>Exchange BTC or USD</p>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-12">
                      <h4>Request BTC exchange</h4>
                      <p>Request a currency exchange from BTC to USD.</p>
                      <div class="form-row">
                        <div class="col-auto">
                          <span class="pd33"><strong>Current BTC</strong></span>
                        </div>
                        <div class="col-6">
                          <input
                            type="text"
                            readonly
                            class="form-control"
                            value="0.00099"
                          />
                        </div>
                        <div class="col-auto">
                          <span class="pd33">BTC</span>
                        </div>
                      </div>
                      <hr />
                      <p>Exchange BTC by referring to blockchain.com.</p>
                      <div class="form-row">
                        <div class="col-6">
                          <input type="text" class="form-control" />
                        </div>
                        <div class="col-auto">
                          <span class="pd33">BTC</span>
                        </div>
                        <div class="col-auto">
                          <button type="submit" class="btn btn-primary mb-2">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="ft55" />
                  <div class="row">
                    <div class="col-lg-12">
                      <h4>Request USD exchange</h4>
                      <p>Request a currency exchange from USD to BTC.</p>
                      <div class="form-row">
                        <div class="col-auto">
                          <span class="pd33"><strong>Current USD</strong></span>
                        </div>
                        <div class="col-6">
                          <input
                            type="text"
                            readonly
                            class="form-control"
                            value="0.00099"
                          />
                        </div>
                        <div class="col-auto">
                          <span class="pd33">USD</span>
                        </div>
                      </div>
                      <hr />
                      <p>Exchange USD by referring to blockchain.com.</p>
                      <div class="form-row">
                        <div class="col-6">
                          <input type="text" class="form-control" />
                        </div>
                        <div class="col-auto">
                          <span class="pd33">USD</span>
                        </div>
                        <div class="col-auto">
                          <button type="submit" class="btn btn-primary mb-2">
                            Submit
                          </button>
                        </div>
                      </div>
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
  name: 'Exchange',
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
