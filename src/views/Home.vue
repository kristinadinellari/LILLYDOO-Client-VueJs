<template>
  <div class="home">
    <h2>Wie es funktioniert</h2>
  </div>
</template>
<script>
  export default {
    name: 'home',
  }
</script>
<style lang="scss">
  @import '../assets/scss/app.scss';

  h2 {
    font-family: $font-family;
    @include fontSizes(20);
  }
</style>
