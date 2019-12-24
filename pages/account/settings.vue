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
                  <h6 class="m-0 font-weight-bold text-primary">
                    Account Settings
                  </h6>
                  <p>Manage your preferences</p>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-12">
                      <h4>Change Password</h4>
                      <p>
                        If you notice any suspicious activity, we recommend
                        changing your password.
                      </p>
                      <div class="form-row">
                        <div class="col-auto">
                          <button type="submit" class="btn btn-primary mb-2">
                            Change Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <h4>Temporary Closing Account</h4>
                      <p>
                        You can temporarily close your account. Once your
                        account is closed, you will not be able to log in or
                        make transactions. You can re-open your account by
                        contacting our Support Team.
                      </p>
                      <div class="form-row">
                        <div class="col-auto">
                          <button type="submit" class="btn btn-primary mb-2">
                            Close Account
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
  name: 'Settings',
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
