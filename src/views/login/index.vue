<template>
  <div class="app-login">
    <h1>This is an login page</h1>
    <c-form class="login-form">
      <c-form-item>
        <c-input placeholder="用户名/手机号"></c-input>
      </c-form-item>

      <c-form-item>
        <c-input placeholder="密码"></c-input>
      </c-form-item>

      <c-form-item>
        <c-button type="info">登陆</c-button>
      </c-form-item>
    </c-form>
  </div>
</template>

<style lang="scss" scoped>
.app-login {
  .login-form {
    width: 600px;
    @apply border;
    @apply m-auto;
  }
}
</style>