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
  }),
  // methods: {
  //   increment (val) {
  //     this.$store.commit('app/increment', val)
  //   }
  // },
  // increment: function (val) {
  //   console.log(';;;', val)
  // }
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
