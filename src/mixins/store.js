import { mapState } from 'vuex'
// import { mapMutations } from 'vuex'

// mixin app
let storeApp = {
  computed: mapState({
    storeApp: state => state.app,
  })
}

// mixin user
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
