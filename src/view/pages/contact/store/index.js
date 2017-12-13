import { Print } from '@/utils/helper'
import HTTP from '@/utils/http'

export default {
  namespaced: true,
  state: {
    notes: []
  },
  getters: {
    notes: state => state.notes
  },
  actions: {
    async getNotes ({commit}) {
      try {
        const RES = await HTTP.get('contact')
        Print('OK-getNotes', RES)
        commit('GET_NOTES', RES.data)
        return RES
      } catch (err) {
        Print('ERROR-getNotes', err, false)
        throw Error(err)
      }
    },
    async sendMessage ({commit}, newMessage) {
      try {
        const RES = await HTTP.post('contact', newMessage)
        Print('OK-sendMessage', RES)
        commit('SEND_MESSAGE', RES.data)
        return RES
      } catch (err) {
        Print('ERROR-sendMessage', err, false)
        throw Error(err)
      }
    }
  },
  mutations: {
    GET_NOTES (state, data) {
      state.notes = data.reverse()
    },
    SEND_MESSAGE (state, data) {
      state.notes.unshift(data)
    }
  }
}
