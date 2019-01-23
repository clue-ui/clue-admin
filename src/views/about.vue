<template>
  <div class="about">
    <h2>Welcome to Your About Page</h2>

      <ul>
        <li v-for="a in 1, 114" :key="a">{{a}}</li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {}
  }
}
</script>
