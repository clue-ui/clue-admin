<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{storeApp}}</h3>
    <p class="h-4"></p>
    <h3>{{storeUser}}</h3>
    <p v-for="a in 1, 3" :key=a>
      {{a}} - aside
    </p>
    <c-button type="info">12313</c-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { storeApp, storeUser } from '@/mixins/store'
export default {
  mixins: [storeApp, storeUser],
  watch: {
    storeApp: {
      deep: true,
      handler: (val) => {
        console.log('watch:', val)
      }
    }
  },
  mounted () {
    console.log('>>>options: ', storeApp)
    // console.log('>>>store: ', this.$store.state.app)
  }
}
</script>
