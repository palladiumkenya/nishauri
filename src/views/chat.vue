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
// import JQuery from 'jquery'
import axios from 'axios'
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'

// let $ = JQuery
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
    this.load()
  },
  methods: {
    async load () {
      await axios.get('api/chats/recent')
        .then((res) => {
          console.log(res.data)
          let recent = []
          for (let i = 0; i < res.data.conversation.length; i++) {
            recent.push({roomId: res.data.conversation[i]._id,
              users: res.data.conversation[i].roomInfo,
              roomName: 'Room 1',

              lastMessage: {
                content: res.data.conversation[i].message.messagesText,
                senderId: 1234,
                username: '',
                timestamp: '10:20',
                saved: true,
                distributed: false,
                seen: false,
                new: true
              }
            })
            console.log(recent, res.data.conversation[i])
          }
          this.rooms = [
            {
              roomId: 1,
              roomName: 'Room 1',
              unreadCount: 4,
              lastMessage: {
                content: 'Last message received',
                senderId: 1234,
                username: 'John Doe',
                timestamp: '10:20',
                saved: true,
                distributed: false,
                seen: false,
                new: true
              },
              users: [
                {
                  _id: 1234,
                  username: 'John Doe',
                  avatar: 'assets/imgs/doe.png',
                  status: {
                    state: 'online',
                    lastChanged: 'today, 14:30'
                  }
                },
                {
                  _id: 4321,
                  username: 'John Snow',
                  avatar: 'assets/imgs/snow.png',
                  status: {
                    state: 'offline',
                    lastChanged: '14 July, 20:00'
                  }
                }
              ],
              typingUsers: [ 4321 ]
            }
          ]
        })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
