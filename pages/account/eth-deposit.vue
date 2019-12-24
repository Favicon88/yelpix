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
                  <h6 class="m-0 font-weight-bold text-primary">
                    BTC 구매 안내
                  </h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-12">
                      <p>
                        비트코인 구매 대행 업체입니다. 거래소 및 코인 구매가
                        어려우신 분들은 아래 대행 업체를 통해 구매하시면 됩니다.
                      </p>
                      <ol>
                        <li>
                          <a target="_blank" href="https://bitproxy.kr/"
                            >https://bitproxy.kr/</a
                          >
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.bestcoin.co.kr/blank-2/"
                            >https://www.bestcoin.co.kr/blank-2/</a
                          >
                        </li>
                      </ol>

                      <p>
                        *본사는 해당 업체들을 통해 발생한 문제에 대해 어떠한
                        책임도 지지 않습니다.
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
  name: 'EthDeposit',
  components: {
    SidebarLk
  },
  layout: 'defaultLk'
}
</script>

<style lang="scss">
@import url('assets/css/new-age.css');
</style>

<style lang="scss" scoped>
a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  background-color: transparent;
}
</style>
