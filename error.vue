<template>
  <NuxtLayout>
    <section class="page-intro container">
      <p class="eyebrow">{{ error?.statusCode || 'Error' }}</p>
      <h1>Page not found</h1>
      <p class="lede">That address is not part of this site.</p>
      <div class="actions">
        <NuxtLink class="button" to="/">Back home</NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: null,
  },
})

useSeoMeta({
  title: 'Page not found',
})
</script>
