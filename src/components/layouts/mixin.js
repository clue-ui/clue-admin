// layouts mixin
import { storeApp } from '@/mixins/store'

const mixin = {
  mixins: [storeApp],
  props: {
    // todo
  },
  methods: {
    asideSwitch () {
      let asideId = this.storeApp.asideId
      let asideDom = document.getElementById(asideId)

      if (asideDom) {
        let style = this.$utils.getComputedStyle(asideDom)

        // set style.display
        let display = style.display === 'block' ? 'none' : 'block'
        asideDom.style.display = display

        // update aside display
        this.storeApp.asideDisplay = display
      }
    }
  }
}

export default mixin
