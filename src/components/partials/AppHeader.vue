<template lang="html">
  <b-navbar id="template-header" class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
            toggleable="md">
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <router-link class="navbar-brand brand-logo" to="/">
        <img src="../../assets/images/logo.png" alt="logo"/>
      </router-link>
      <router-link class="navbar-brand brand-logo-mini" to="/">
        <img src="../../assets/images/logo_small.png" alt="logo"/>
      </router-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
      <button class="navbar-toggler navbar-toggler align-self-center" type="button" @click="collapedSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
      <b-navbar-nav class="navbar-nav navbar-nav-left header-links d-none d-md-flex">
      </b-navbar-nav>
      <b-navbar-nav class="navbar-nav-right ml-auto">
        <form class="mr-auto search-form d-none d-md-block" action="#">
        </form>
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
          </template>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img src="../../assets/images/faces/face10.jpg" alt="image" class="img-sm profile-pic">
            </div>
            <div class="preview-item-content flex-grow py-2">
              <p class="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
              <p class="font-weight-light small-text"> The meeting is cancelled </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img src="../../assets/images/faces/face12.jpg" alt="image" class="img-sm profile-pic">
            </div>
            <div class="preview-item-content flex-grow py-2">
              <p class="preview-subject ellipsis font-weight-medium text-dark">David Grey</p>
              <p class="font-weight-light small-text"> The meeting is cancelled </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img src="../../assets/images/faces/face1.jpg" alt="image" class="img-sm profile-pic">
            </div>
            <div class="preview-item-content flex-grow py-2">
              <p class="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins</p>
              <p class="font-weight-light small-text"> The meeting is cancelled </p>
            </div>
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right class="preview-list user-dropdown">
          <template slot="button-content">
            <div class="d-flex align-items-center">
              <img class="img-xs rounded-circle" src="../../assets/images/dashboard/img_3.jpg" alt="Profile image">
            </div>
          </template>
          <b-dropdown-item>
            <div class="dropdown-header text-center w-100">
              <img class="img-md rounded-circle" src="../../assets/images/dashboard/img_3.jpg" alt="Profile image">
              <p class="mb-1 mt-3 font-weight-semibold">{{ user.data[0].first_name }} {{ user.data[0].last_name }}</p>
              <p class="font-weight-light text-muted mb-0">{{ user.data[0].msisdn }}</p>
              <template v-if="user.data[0].CCCNo > 2">
                <p class="font-weight-light text-muted mb-0">{{ user.data[0].current_facility }}</p>
              </template>
            </div>
          </b-dropdown-item>
          <b-dropdown-item>  <a class="nav-link" @click="signOut">Sign out</a></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <button class="navbar-toggler navbar-toggler-right align-self-center" type="button"
              @click="collapedMobileSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </b-navbar>
</template>

<script lang="js">
// eslint-disable-next-line
import JQuery from 'jquery'
import {mapActions, mapGetters} from 'vuex'

let $ = JQuery
export default {
  name: 'app-header',
  computed: {
    ...mapGetters({
      authenticated: 'auth/isAuthenticated',
      user: 'auth/user'
    })
  },
  methods: {
    ...mapActions({
      signOutAction: 'auth/LogOut'
    }),
    collapedSidebar: function () {
      $('body').toggleClass('sidebar-icon-only')
    },
    collapedMobileSidebar: function () {
      $('#sidebar').toggleClass('active')
    },
    signOut () {
      this.signOutAction()
      this.$router.replace({name: 'Login'})
    }
  }
}
</script>

<style scoped lang="scss">
.app-header {
}
</style>
