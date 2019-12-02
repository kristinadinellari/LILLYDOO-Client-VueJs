<template>
  <div class="home">
    <BannerDesktop/>
    <TestPackage/>
    <HowItWorks/>
    <TesterContent/>
  </div>
</template>
<script>
  export default {
    name: 'home',
    components: {
      BannerDesktop: () => import('@/components/desktopBanner.vue'),
      HowItWorks: () => import('@/components/howItWorks.vue'),
      TestPackage: () => import('@/components/testPackage.vue'),
      TesterContent: () => import('@/components/testerContent.vue')
    }
  }
</script>
