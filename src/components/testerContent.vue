<template>
  <div class="tester-container-component common-content common-height">
    <div class="common-title"> {{datas.title}}</div>
    <div class="tester-holder">
      <div class="tester-container" v-for="(data, index) in datas.items" :key="index">
        <div class="img-holder">
          <img :src="data.img ? data.img : image" alt="test">
        </div>
        <div class="content">
          <div class="title big-screen">{{data.title}}</div>
          <div class="title mobile">{{data.titleMobile}}</div>
          <div class="description" v-for="(detail, index) in data.details" :key="index">
            <div class="point"></div>
            <p>{{detail}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { testerContent as datas } from '@/mock/index'

  export default {
    data () {
      return {
        datas
      }
    },
    computed: {
      ...mapGetters([
        'imgKey'
      ]),
      image () {
        return require(`@/assets/images/sizes/ww${this.imgKey}.jpg`)
      }
    }
  }
</script>
