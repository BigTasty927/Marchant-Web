<template>
  <article :id="project.id" class="project-card">
    <p class="todo">TODO</p>
    <h3>{{ project.name }}</h3>
    <p v-if="project.summary">{{ project.summary }}</p>
    <p v-else>Description, technologies, and outcomes are not documented yet.</p>
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
