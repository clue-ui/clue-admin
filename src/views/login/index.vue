<template>
  <div class="app-login">
    <div class="login-form">

      <!-- title -->
      <h2 class="my-8">{{title}}</h2>

      <!-- login form -->
      <c-form>
        <c-form-item>
          <c-input placeholder="手机号或账号"></c-input>
        </c-form-item>

        <c-form-item>
          <c-input type="password" placeholder="输入密码"></c-input>
        </c-form-item>

        <c-form-item>
          <div class="text-right">忘记密码</div>
        </c-form-item>

        <c-form-item>
          <c-button
            type="primary"
            class="w-full"
            @click="onLogin"
          >登 陆</c-button>
        </c-form-item>
      </c-form>
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
  @apply min-h-screen;
  @apply text-center;

  // login form
  .login-form {
    @apply max-w-xs;
    @apply p-4 m-auto;
  }
}

@screen lg {
  .app-login {
    .login-form {
      @apply mt-12;
    }
  }
}
</style>
