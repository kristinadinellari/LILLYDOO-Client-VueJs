<template>
  <div class="test-package-component common-height">
    <section>
      <img :src="testT" alt="Test package">
    </section>
    <section>
      <div class="title">{{content.title}}</div>
      <div class="subtitle">{{content.subtitle}}</div>
      <div class="sizes">
        <div class="size" v-for="(size, index) in content.sizes" :key="index"
             :class="size.imgKey === imgKey ? 'activeSize' : ''"
             @click="getKey(size.imgKey)">
          <span>{{index + 1}}</span>
          <span>( {{size.imgKey}} KG )</span>
        </div>
      </div>
      <p class="description">{{content.description}}</p>
      <div class="detailed-description" v-for="(detail, index) in content.details" :key="index">
        <div class="point"></div>
        <p v-html="detail"></p>
      </div>
      <button>
        In den warenkorb legen
      </button>
    </section>
  </div>
</template>
<script>
  import { mapMutations, mapGetters} from 'vuex'
  import { testPackage } from "@/mock/index";

  export default {
    data () {
      return {
        content: testPackage
      }
    },
    computed: {
      ...mapGetters([
        'imgKey'
      ]),
      testT() {
        return require(`../assets/images/sizes/tp${this.imgKey}.jpg`)
      }
    },
    methods: {
      ...mapMutations([
        'setImgKey'
      ]),
      getKey (key) {
        this.setImgKey(key)
      }
    }
  }
</script>
