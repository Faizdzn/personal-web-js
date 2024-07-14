<template>
  <pageDesc icon="MailIcon" title="Contact" about="Click one of the box to contact me!" />
  <div class="flex flex-wrap max-md:flex-col gap-[25px] justify-center">
    <contactCard icon="Mail" title="Email" content="faizadhiski@faizda.my.id" href="mailto:faizadhiski@faizda.my.id" />
    <contactCard icon="Instagram" title="Instagram" content="@faiz_.da" href="https://instagram.com/faiz_.da" />
    <contactCard icon="Twitter" title="Twitter/X" content="@FaizArt7" href="https://x.com/FaizArt7" />
  </div>
</template>

<script setup>
import pageDesc from '@/components/extra/pageDesc.vue';
import contactCard from '@/components/card/contactCard.vue';
</script>
