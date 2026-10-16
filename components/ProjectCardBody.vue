<template>
  <div class="project-card__body">
    <p :class="statusClass">{{ statusLabel }}</p>
    <h3>{{ project.name }}</h3>
    <p v-if="project.summary">{{ project.summary }}</p>
    <p v-else>Description, technologies, and outcomes are not documented yet.</p>
    <ul v-if="project.focus?.length" class="chip-list" :aria-label="`${project.name} focus`">
      <li v-for="item in project.focus" :key="item">{{ item }}</li>
    </ul>
    <p v-if="project.href" class="project-card__cue">Case study</p>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const statusLabel = computed(() => {
  if (props.project.status === 'todo') {
    return 'TODO'
  }
  if (props.project.status === 'in-development') {
    return 'In development'
  }
  return props.project.statusLabel || props.project.status
})

const statusClass = computed(() => {
  return props.project.status === 'todo' ? 'status status--todo' : 'status'
})
</script>
