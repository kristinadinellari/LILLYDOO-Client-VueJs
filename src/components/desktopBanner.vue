<template>
  <div class="cover-image-holder">
    <div class="cover-image-desktop" :style="backgroundImageDesktop"></div>
    <div class="cover-image-mobile" :style="backgroundImageMobile"></div>
    <div class="content-holder">
      <section>
        <span v-html="content.title"></span>
        <button>{{content.button}}</button>
      </section>
      <section>
        <div class="cover-el-holder">
          <img class="cover-el" :src="el" alt="Cover image element">
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import { banner } from '@/mock/index'
  export default {
    data () {
      return {
        cover: banner.desktop,
        coverMobile: banner.mobile,
        el: banner.el,
        content: banner.content
      }
    },
    computed: {
      backgroundImageDesktop () {
        return {
          'background-image': `url(${this.cover})`
        }
      },
      backgroundImageMobile () {
        return {
          'background-image': `url(${this.coverMobile})`
        }
      }
    }
  }
</script>
