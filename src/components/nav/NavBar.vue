<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="md:mt-[48px] md:text-[20px] flex items-center justify-between max-md:fixed max-md:w-screen max-md:bg-dark max-md:border-b-2 max-md:py-5 max-md:px-4 max-md:border-white/15 z-10">
      <div class="flex items-center gap-[20px]">
        <img src="@/assets/decal/poto_bg_white.png" class="max-md:hidden rounded-full" width="50">
        <span>faiz_.da</span>
      </div>
      <div class="flex items-center gap-[40px] text-white/muted">
        <RouterLink to="/" class="transition ease-in hover:text-white/50">Projects</RouterLink>
        <RouterLink to="/contact" class="transition ease-in hover:text-white/50">Contact</RouterLink>
      </div>
    </div>
</template>

<style scoped>
  .router-link-active {
    @apply text-light
  }
</style>