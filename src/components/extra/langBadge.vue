<template>
  <div class="overflow-clip relative flex border border-white/muted rounded-full px-[10px] py-[5px]">
      <span class="z-10 text-[12px]">{{ name }}</span>
      <div :style="`background-color: #${color};`" class="absolute left-[55px] bottom-[-110px] p-[130px] rounded-full blur-xl opacity-55"></div>
  </div>
</template>

<script setup>
defineProps({
    name: String,
    color: String,
})
</script>