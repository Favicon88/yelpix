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
            <div class="col-12">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Balance History
                  </h6>
                  <p>History of your balance</p>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-12">
                      <!-- Start of table fields -->
                      <div class="ui form">
                        <div class="row hj4">
                          <div class="field col-md-3">
                            <label>Start date</label>
                            <div id="rangestart" class="ui calendar">
                              <div class="ui input left icon">
                                <input
                                  id="start-date"
                                  type="date"
                                  class="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="field col-md-3">
                            <label>End date</label>
                            <div id="rangeend" class="ui calendar">
                              <input
                                id="end-date"
                                type="date"
                                class="form-control"
                              />
                            </div>
                          </div>

                          <div class="field col-md-2">
                            <label for="market">Market</label><br />
                            <select
                              id="market"
                              class="ui market dropdown"
                              name="market"
                            >
                              <option value="">All</option>
                              <option value="usd">USD</option>
                              <option value="btc">BTC</option>
                            </select>
                          </div>

                          <div class="field col-md-4">
                            <label for="type">Transaction type</label><br />
                            <select
                              id="type"
                              class="ui type dropdown"
                              name="type"
                            >
                              <option value="">Transaction</option>
                              <option value="all">All</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="table-responsive">
                        <table
                          class="ui striped selectable data table"
                          style=""
                        >
                          <thead>
                            <tr>
                              <th>Market</th>
                              <th>Type</th>
                              <th>Amount</th>
                              <th>Creation time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>usd</td>
                              <td>Deposit</td>
                              <td>1.79276000</td>
                              <td>2019-07-03 10:12:00</td>
                            </tr>
                            <tr>
                              <td>usd</td>
                              <td>Deposit</td>
                              <td>1.79276000</td>
                              <td>2019-07-03 10:12:00</td>
                            </tr>
                            <tr>
                              <td>usd</td>
                              <td>Deposit</td>
                              <td>1.79276000</td>
                              <td>2019-07-03 10:12:00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- End of table fields -->
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
  name: 'BalanceHistory',
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
