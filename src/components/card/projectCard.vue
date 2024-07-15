<script setup lang="ts">
import { GithubIcon, Globe } from 'lucide-vue-next';
import LangBadge from '../extra/langBadge.vue';

defineProps({
    image: String,
    name: String,
    website: String,
    github: String,
    lang: Array
})
</script>

<template>
  <div class="flex flex-col overflow-clip bg-dark rounded-[20px] border border-white/muted md:w-[289px] max-md:flex-1">
    <img :src="image" />

    <div class="flex flex-col p-[15px] gap-[10px]">
        <div class="flex justify-between items-center">
            <span class="text-[20px] overflow-hidden text-ellipsis">{{ name }}</span>
            <div class="flex gap-2">
                <a v-if="github.length >= 1" :href="github" class="transition ease-in hover:bg-white/muted rounded-lg border border-white/muted p-[10px]">
                    <GithubIcon :size="20" />
                </a>
                <a v-if="website.length >= 1" :href="website" class="transition ease-in hover:bg-white/muted rounded-lg border border-white/muted p-[10px]">
                    <Globe :size="20" />
                </a>
            </div>
        </div>
        <div v-if="lang.length >= 1" class="scroll-hide flex max-md:flex-wrap gap-[15px] w-full overflow-auto">
            <LangBadge v-for="(data, index) in lang" :name="data['name']" :color="data['color']" :key="index" />
        </div>
    </div>
  </div>
</template>