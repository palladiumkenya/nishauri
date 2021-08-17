<template lang="html">

  <section class="tables">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Add Partner</h4>
            <p class="card-description">
              Add Partner
            </p>
            <div class="auto-form-wrapper">
              <form @submit.prevent="create">
                <div class="form-group">
                  <label class="label">First Name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" v-model="form.f_name" required placeholder="First Name">
                    <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">Last Name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" v-model="form.l_name" required placeholder="Last Name">
                    <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">Phone Number</label>
                  <div class="input-group">
                    <input type="text" class="form-control" v-model="form.msisdn" required placeholder="Phone Number">
                    <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">Partner</label>
                  <div class="input-group">
                    <b-select class="form-control" v-model="form.initial_facility" required :options="items"
                              value-field="id" text-field="name" placeholder="Partner">
                    </b-select>
                    <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">Password</label>
                  <div class="input-group">
                    <input type="password" class="form-control" v-model="form.password" required
                           placeholder="*********">
                    <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary submit-btn btn-block">Create Account</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios'

export default {
  name: 'add_partner',
  data () {
    return {
      items: [],
      form: {
        msisdn: null,
        f_name: '',
        l_name: '',
        password: '',
        acc_level: 2,
        initial_facility: null,
        termsAccepted: true
      }
    }
  },
  created () {
    this.partners()
  },
  methods: {
    async partners () {
      let a = await axios.get('api/web/partner/ushauri')
      this.items = a.data.partners
    },
    async create () {
      await axios.post('api/user/create', this.form)
        .then(res => {
          console.log(res)
          alert(res.data.data.user)
        })
        .catch(err => console.log(err))
      // this.items = a.data
    }
  }
}
</script>

<style scoped lang="scss">
.app-header {
}
</style>
