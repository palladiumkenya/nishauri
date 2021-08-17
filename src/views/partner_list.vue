<template lang="html">

  <section class="tables">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Partner List</h4>
            <p class="card-description">
              Partner List
            </p>
            <b-table responsive :items="items" :fields="fields"></b-table>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios'

export default {
  name: 'basicTables',
  data () {
    return {
      items: [
      ],
      fields: {
        last_name: {
          label: 'Person last name',
          sortable: true
        },
        first_name: {
          label: 'Person first name',
          sortable: false
        },
        msisdn: {
          // This key overrides `foo`!
          key: 'msisdn',
          label: 'Mobile number',
          sortable: true
        }
      }
    }
  },
  created () {
    this.clientlist()
  },
  methods: {
    async clientlist () {
      let a = await axios.get('api/web/clients/reg')
      this.items = a.data.clients
    }
  }
}
</script>

<style scoped lang="scss">
.tables {
}
</style>
