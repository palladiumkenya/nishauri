<template lang='html'>
  <section class='dashboard'>
    <!-- Page Title Header Starts-->
    <div class='row page-title-header'>
      <div class='col-12'>
        <div class='page-header'>
          <h4 class='page-title'>CHAT</h4>
        </div>
      </div>
    </div>
    <!-- Page Title Header Ends-->
    <template>
      <chat-window
        :current-user-id="currentUserId"
        :rooms="rooms"
        :messages="messages"
      />
    </template>
  </section>
</template>

<script lang='js'>
import JQuery from 'jquery'
import axios from 'axios'
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'

let $ = JQuery
export default {
  name: 'chat',
  data () {
    return {
      rooms: [],
      messages: [],
      currentUserId: 1234
    }
  },
  components: {
    ChatWindow
  },
  mounted () {
    // this.getNumbers()
    // this.load()
  },
  methods: {
  }
}
</script>

<style scoped lang='scss'>
</style>
