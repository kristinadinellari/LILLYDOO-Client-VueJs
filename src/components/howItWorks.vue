<template>
  <div class="how-it-works-component common-height common-content">
    <div class="common-title">
      {{content.title}}
    </div>
    <div class="steps-holder">
      <div class="step" v-for="(step, index) in content.steps" :key="index">
        <img :src="step.icon" alt="">
        <h4>{{step.title}}</h4>
        <p>{{step.description}}</p>
        <p v-if="step.description2" class="description">{{step.description2}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { howItWorks } from '@/mock/index'
  export default {
    data () {
      return {
        content: howItWorks
      }
    }
  }
</script>
