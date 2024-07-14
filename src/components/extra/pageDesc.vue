<template>
    <div class="flex flex-col gap-[5px]">
        <div class="flex items-center gap-[10px]">
            <FileCode :size="35" />
            <component :is="luc" :size="35"></component>
            <p class="text-[35px]">{{title}}</p>
        </div>
        <span class="opacity-muted">{{about}}</span>
    </div>
    <hr>
</template>

<script setup>
import * as icons from 'lucide-vue-next';
import { computed } from 'vue';

const prop = defineProps({
    icon: String,
    title: String,
    about: String
})

const luc = computed(() => icons[prop.icon]);
</script>
