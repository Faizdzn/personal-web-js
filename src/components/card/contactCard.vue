<script setup>
import * as icons from 'lucide-vue-next';
import { computed } from 'vue';

const prop = defineProps({
    icon: String,
    title: String,
    content: String,
    href: String
})

const luc = computed(() => icons[prop.icon]);
</script>

<template>
    <a :href="href" class="transition ease-in hover:bg-white/5 flex flex-col items-center overflow-clip bg-dark rounded-[20px] border border-white/muted md:w-[289px] max-md:flex-1 p-4">
        <component :is="luc" :size="50"></component>
        <div class="mt-[20px] flex flex-col items-center">
            <span class="text-xl">{{title}}</span>
            <span class="text-sm opacity-muted">{{ content }}</span>
        </div>
    </a>
</template>