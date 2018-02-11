import { createActionHelpers } from 'vuex-loading'

const { startLoading, endLoading } = createActionHelpers({
  moduleName: 'loading'
})

export { startLoading, endLoading }
