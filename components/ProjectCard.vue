<template>
  <NuxtLink v-if="project.href" :id="project.id" :to="project.href" class="project-card project-card--link">
    <ProjectCardBody :project="project"/>
  </NuxtLink>
  <article v-else :id="project.id" class="project-card">
    <ProjectCardBody :project="project"/>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
