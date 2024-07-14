<script setup>
import myProject from '@/json/projects.json'

import pageDesc from '@/components/extra/pageDesc.vue'
import projectCard from '@/components/card/projectCard.vue'
</script>

<template>
    <pageDesc icon="FileCode" title="Projects" about="This is a page for showcasing all of my projects!" />
    <div class="flex flex-wrap max-md:flex-col gap-[20px] justify-center">
        <projectCard v-for="(data, index) in myProject" :key="index" :image="data['thumb']" :name="data['name']" :website="data['website']" :github="data['github']" :lang="data['lang']" />
    </div>
</template>
