<template>
  <ul class="">
    <li><div>aaa-11</div></li>
    <li><div>aaa-22</div></li>
    <li><div>aaa-33</div></li>

    <aside-menu-item>123</aside-menu-item>
  </ul>
</template>

<script>
import AsideMenuItem from './aside-menu-item'
export default {
  name: 'aside-menu',
  components: {
    AsideMenuItem
  }
}
</script>
