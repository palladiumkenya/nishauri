// store/modules/auth.js
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    user: null,
    token: null
  },
  getters: {
    isAuthenticated: state => state.user && state.token,
    user: state => state.user

  },
  mutations: {
    setUser (state, data) {
      state.user = data
    },
    setToken (state, token) {
      state.token = token
    },
    LogOut (state) {
      state.user = null
      state.token = null
    }

  },
  actions: {
    async LogIn ({dispatch}, User) {
      await axios.post('api/token/login/', User)
        .then(resp => {
          console.log(resp)
          return dispatch('attempt', resp.data.auth_token)
        })
        .catch(err => {
          return err
          // console.log(err)
        })
    },
    async attempt ({commit, state}, token) {
      if (token) {
        commit('setToken', token)
      }
      if (!state.token) {
        return
      }
      await axios.get('api/user/auth')
        .then(resp => {
          commit('setUser', resp.data)
        })
        .catch(() => {
          commit('setUser', null)
          commit('setToken', null)
        })

      console.log(token)
    },
    async LogOut ({commit, state}) {
      await axios.post('api/token/logout/', {Headers: {'Authorization': 'Token ' + state.token}})
      commit('setUser', null)
      commit('setToken', null)
      localStorage.removeItem('vuex')
      localStorage.removeItem('token')
    }

  }
}
