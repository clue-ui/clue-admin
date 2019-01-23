// layouts mixin
import { storeApp } from '@/mixins/store'

const mixin = {
  mixins: [storeApp],
  props: {
    // todo
  },
  methods: {
    asideSwitch () {
      let asideVisible = this.storeApp.asideVisible

      // if (asideVisible === 'auto') {
      //   asideVisible = true | false
      // }

      this.$store.dispatch('app/setAside', !asideVisible)
    }
  }
}

export default mixin