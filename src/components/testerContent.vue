<template>
  <div class="tester-container-component">
    <div></div>
    <img :src="image" alt="">
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'imgKey'
      ]),
      image () {
        return require(`../assets/images/sizes/ww${this.imgKey}.jpg`)
      }
    }
  }
</script>
