<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="a in 1, 3" :key=a>
      {{a}} - aside
    </p>
    <c-button type="info">12313</c-button>
  </div>
</template>
