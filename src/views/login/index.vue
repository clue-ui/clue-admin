<template>
  <div class="app-login">
    <div class="pt-24">
      <c-section class="login-form">

        <!-- title -->
        <h2 class="my-8">{{title}}</h2>

        <!-- login form -->
        <c-form>
          <c-form-item>
            <c-input placeholder="手机号或账号"></c-input>
          </c-form-item>

          <c-form-item>
            <c-input placeholder="输入密码"></c-input>
          </c-form-item>

          <c-form-item>
            <div class="text-right">忘记密码</div>
          </c-form-item>

          <c-form-item>
            <c-button
              type="primary"
              class="w-full"
              @click="onLogin"
            >登陆</c-button>
          </c-form-item>
        </c-form>
      </c-section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-login',
  data () {
    return {
      title: 'Welcome Clue - Admin'
    }
  },
  methods: {
    onLogin () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="scss" scoped>
.app-login {
  @apply h-screen;
  @apply text-center;
  @apply bg-grey;

  // login form
  .login-form {
    @apply max-w-sm;
    @apply bg-white;
    @apply px-12 py-4 m-auto;
  }
}
</style>
