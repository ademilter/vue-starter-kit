import HTTP from '@/utils/http'
import Messages from '../model'
import { startLoading, endLoading } from '@/utils/loader'

export default {
  namespaced: true,
  state: {
    messages: new Messages()
  },
  getters: {
    messages: state => state.messages.list
  },
  actions: {
    async getMessages ({ commit, dispatch }) {
      try {
        startLoading(dispatch, 'loading messages')
        const RES = await HTTP.get('contact')
        commit('GET_MESSAGES', RES.data)
        return RES
      } catch (err) {
        throw Error(err)
      } finally {
        endLoading(dispatch, 'loading messages')
      }
    },
    async sendMessage ({ commit, dispatch }, newMessage) {
      try {
        startLoading(dispatch, 'sending message')
        const RES = await HTTP.post('contact', newMessage)
        commit('SEND_MESSAGE', RES.data)
        return RES
      } catch (err) {
        throw Error(err)
      } finally {
        endLoading(dispatch, 'sending message')
      }
    }
  },
  mutations: {
    GET_MESSAGES (state, data) {
      state.messages.addMessages(data)
    },
    SEND_MESSAGE (state, data) {
      state.messages.addMessage(data)
    }
  }
}
