<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/nav/NavBar.vue'
import FooterComp from '@/components/footer/FooterComp.vue'
</script>

<template>
  <main class="relative flex flex-col max-w-[950px] mx-auto md:px-4 overflow-clip">
    <img class="mx-auto absolute z-0 max-md:top-11" src="@/assets/decal/rays.png">
    <NavBar />
    <view class="mt-[85px] flex flex-col gap-[25px] max-md:px-4">
      <RouterView />
      <FooterComp />
    </view>
  </main>
</template>
