<template>
  <header class="case-hero">
    <p class="eyebrow">{{ study.type }}</p>
    <h1 class="display">{{ study.name }}</h1>
    <p class="lede">{{ study.tagline }}</p>
    <p v-if="study.summary" class="case-overview">{{ study.summary }}</p>
    <p v-if="study.overview" class="case-overview">{{ study.overview }}</p>
    <dl class="case-meta">
      <div>
        <dt>Role</dt>
        <dd>{{ study.role.join(' · ') }}</dd>
      </div>
      <div>
        <dt>Focus</dt>
        <dd>{{ study.focus.join(' · ') }}</dd>
      </div>
      <div>
        <dt>Status</dt>
        <dd>{{ study.status }}</dd>
      </div>
      <div>
        <dt>Timeline</dt>
        <dd>{{ study.timeline }}</dd>
      </div>
    </dl>
    <figure v-if="study.image" class="case-figure">
      <img :src="study.image.src" :alt="study.image.alt">
    </figure>
    <figure v-else class="case-figure case-figure--empty">
      <figcaption>
        <span class="eyebrow">Image needed</span>
        {{ study.imageLabel }}
      </figcaption>
    </figure>
  </header>
</template>

<script setup>
defineProps({
    study: {
        type: Object,
        required: true,
    },
})
</script>
