import { mapState } from 'vuex'
// import { mapMutations } from 'vuex'

/**
 * store 配置
 *
 * example:
 * import { storeApp, storeUser } from 'src/mixins/store'
 * export default {
 *   mixins: [ storeApp, storeUser ],
 *   methods: {
 *     print () {
 *       console.log(storeApp)
 *     }
 *   }
 * }
 */

let storeApp = {
  computed: mapState({
    storeApp: state => state.app,
  })
}

let storeUser = {
  computed: mapState({
    storeUser: state => state.user,
  })
}

// export
export {
  storeApp,
  storeUser
}
