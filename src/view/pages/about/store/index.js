import { Print } from '@/utils/helper'
import HTTP from '@/utils/http'

export default {
  namespaced: true,
  state: {
    asd: {}
  },
  getters: {
    asd: state => state.asd
  },
  actions: {
    async test ({commit}, payload) {
      try {
        const RES = await HTTP.post('test', {
          params: payload
        })
        Print('OK-test', RES)
        commit('TEST', RES.data)
        return RES
      } catch (err) {
        Print('ERROR-test', err, false)
        throw Error(err)
      }
    }
  },
  mutations: {
    TEST (state, data) {
      state.asd = data
    }
  }
}
