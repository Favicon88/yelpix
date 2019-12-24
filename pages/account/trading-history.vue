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
                    Trading History
                  </h6>
                  <p>History of your trading</p>
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

                          <div class="field col-md-3">
                            <label for="asset">Asset</label><br />
                            <select
                              id="asset"
                              class="ui asset dropdown"
                              name="asset"
                            >
                              <option value="">Asset</option>
                              <option value="all">All</option>
                              <option value="GBPAUD_B">GBP/AUD Option</option>
                              <option value="GBPJPY_B">GBP/JPY Option</option>
                              <option value="EURUSD_B">EUR/USD Option</option>
                              <option value="XAUUSD_B">XAU/USD Option</option>
                              <option value="XAGUSD_B">XAG/USD Option</option>
                              <option value="BTCUSD_B">BTC/USD Option</option>
                              <option value="GBPAUD_M">GBP/AUD Forex</option>
                              <option value="GBPJPY_M">GBP/JPY Forex</option>
                              <option value="EURUSD_M">EUR/USD Forex</option>
                              <option value="XAUUSD_M">XAU/USD Forex</option>
                              <option value="XAGUSD_M">XAG/USD Forex</option>
                              <option value="BTCUSD_M">BTC/USD Forex</option>
                            </select>
                          </div>

                          <div class="field col-md-3">
                            <label for="type">Deal type</label><br />
                            <select
                              id="type"
                              class="ui type dropdown"
                              name="type"
                            >
                              <option value="">Deal type</option>
                              <option value="all">All</option>
                              <option value="0">Low</option>
                              <option value="1">High</option>
                              <option value="3">Odd</option>
                              <option value="4">Even</option>
                              <option value="5">Zero</option>
                              <option value="7">Buy</option>
                              <option value="8">Sell</option>
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
                              <th>FX</th>
                              <th>Market</th>
                              <th>Type</th>
                              <th>Price</th>
                              <th>Order rate</th>
                              <th>Result rate</th>
                              <th>Refund rate</th>
                              <th>Creation time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>GBPAUD_B</td>
                              <td>usd</td>
                              <td>Low</td>
                              <td>100.00000000</td>
                              <td>1.79276000</td>
                              <td>1.79279000</td>
                              <td>73</td>
                              <td>2019-07-03 10:12:00</td>
                            </tr>
                            <tr>
                              <td>GBPAUD_B</td>
                              <td>usd</td>
                              <td>Low</td>
                              <td>100.00000000</td>
                              <td>1.79290000</td>
                              <td>1.79279000</td>
                              <td>73</td>
                              <td>2019-07-03 10:12:00</td>
                            </tr>
                            <tr>
                              <td>GBPAUD_B</td>
                              <td>usd</td>
                              <td>Low</td>
                              <td>100.00000000</td>
                              <td>1.79290000</td>
                              <td>1.79279000</td>
                              <td>73</td>
                              <td>2019-07-03 10:12:00</td>
                            </tr>
                            <tr>
                              <td>EURUSD_B</td>
                              <td>usd</td>
                              <td>Low</td>
                              <td>1000.00000000</td>
                              <td>1.12826000</td>
                              <td>1.12826000</td>
                              <td>77</td>
                              <td>2019-07-03 06:32:00</td>
                            </tr>
                            <tr>
                              <td>EURUSD_B</td>
                              <td>usd</td>
                              <td>Low</td>
                              <td>1000.00000000</td>
                              <td>1.12828000</td>
                              <td>1.12826000</td>
                              <td>77</td>
                              <td>2019-07-03 06:32:00</td>
                            </tr>
                            <tr>
                              <td>EURUSD_B</td>
                              <td>usd</td>
                              <td>High</td>
                              <td>1000.00000000</td>
                              <td>1.12831000</td>
                              <td>1.12826000</td>
                              <td>77</td>
                              <td>2019-07-03 06:31:00</td>
                            </tr>
                            <tr>
                              <td>EURUSD_B</td>
                              <td>usd</td>
                              <td>High</td>
                              <td>1000.00000000</td>
                              <td>1.12832000</td>
                              <td>1.12826000</td>
                              <td>77</td>
                              <td>2019-07-03 06:31:00</td>
                            </tr>
                            <tr>
                              <td>EURUSD_B</td>
                              <td>usd</td>
                              <td>High</td>
                              <td>1000.00000000</td>
                              <td>1.12836000</td>
                              <td>1.12835000</td>
                              <td>77</td>
                              <td>2019-07-03 06:30:00</td>
                            </tr>
                            <tr>
                              <td>EURUSD_B</td>
                              <td>usd</td>
                              <td>Low</td>
                              <td>1000.00000000</td>
                              <td>1.12847000</td>
                              <td>1.12851000</td>
                              <td>77</td>
                              <td>2019-07-03 06:28:00</td>
                            </tr>
                            <tr>
                              <td>BTCUSD_B</td>
                              <td>usd</td>
                              <td>Low</td>
                              <td>500.00000000</td>
                              <td>11416.31500000</td>
                              <td>11415.80000000</td>
                              <td>50</td>
                              <td>2019-07-03 06:26:00</td>
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
  name: 'TradingHistory',
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
