// layouts mixin
import { storeApp } from '@/mixins/store'

const mixin = {
  mixins: [storeApp],
  props: {
    // todo
  },
  methods: {
    asideSwitch () {
      let elAside = document.getElementById(1100)

      let style = getComputedStyle(elAside)
      console.log('>>>:', style)

      if (style.display === 'block') {
        elAside.style.display = 'none'
      } else {
        elAside.style.display = 'block'
      }
    //   let asideVisible = this.storeApp.asideVisible
    //   this.$store.dispatch('app/setAside', !asideVisible)
    }
  }
}

export default mixin
