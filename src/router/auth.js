import _isEmpty from 'lodash/isEmpty'
import _has from 'lodash/has'

export default (to, from, next) => {
  const STORE = JSON.parse(localStorage.vuex || '{}')

  if (to.matched.some(record => record.meta.requireLogin)) {
    if (_isEmpty(STORE) || !_has(STORE, 'Auth.customer.id')) {
      next({
        name: 'Customer'
      })
    } else {
      next()
    }
  } else {
    next()
  }
}
