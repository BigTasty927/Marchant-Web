<template>
  <section class="case-section" :aria-labelledby="section.id">
    <p class="eyebrow">{{ indexLabel }}</p>
    <h2 :id="section.id">{{ section.title }}</h2>
    <p v-if="section.lede" class="lede">{{ section.lede }}</p>
    <p v-if="section.note" class="case-note">{{ section.note }}</p>
    <ol class="workflow">
      <li v-for="(step, index) in section.steps" :key="step.title" class="workflow__step">
        <span class="workflow__index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
        <div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.detail }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup>
defineProps({
    section: {
        type: Object,
        required: true,
    },
    indexLabel: {
        type: String,
        required: true,
    },
})
</script>
