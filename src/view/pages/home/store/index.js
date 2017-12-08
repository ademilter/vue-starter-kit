import { Print } from '@/utils/helper'
import { startLoading, stopLoading } from '@/utils/loading'
import HTTP from '@/utils/http'

export default {
  namespaced: true,
  state: {
    user: {},
    org: {}
  },
  getters: {
    user: state => state.user,
    org: state => state.org
  },
  actions: {
    async loginUser ({ commit, dispatch }, user) {
      console.log(user)
      try {
        const RES = await startLoading(dispatch, 'loginUser', () => {
          return HTTP.post('Customer/customer', {
            params: user
          })
        })
        Print('OK-loginUser', RES)
        commit('LOGIN_USER', RES.data)
        return RES
      } catch (err) {
        // stopLoading(dispatch, 'loginUser')
        Print('ERROR-loginUser', err, false)
        throw Error(err)
      }
    },
    async loginOrganization ({ commit, dispatch }, org) {
      try {
        const RES = await startLoading(dispatch, 'loginOrganization', () => {
          return HTTP.post('organization', org)
        })
        Print('OK-loginOrganization', RES)
        commit('LOGIN_ORGANIZATION', RES.data)
        return RES
      } catch (err) {
        stopLoading(dispatch, 'loginOrganization')
        Print('ERROR-loginOrganization', err, false)
        throw Error(err)
      }
    }
  },
  mutations: {
    LOGIN_USER (state, user) {
      state.user = user
    },
    LOGIN_ORGANIZATION (state, org) {
      state.org = org
    }
  }
}
