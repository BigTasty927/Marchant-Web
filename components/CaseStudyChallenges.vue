<template>
  <section class="case-section" :aria-labelledby="section.id">
    <p class="eyebrow">{{ indexLabel }}</p>
    <h2 :id="section.id">{{ section.title }}</h2>
    <p v-if="section.note" class="case-note">{{ section.note }}</p>
    <div class="decision-list">
      <article v-for="item in section.items" :key="item.title" class="decision">
        <h3>{{ item.title }}</h3>
        <dl>
          <div>
            <dt>Problem</dt>
            <dd>{{ item.problem }}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{{ item.approach }}</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>{{ item.result }}</dd>
          </div>
        </dl>
      </article>
    </div>
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
