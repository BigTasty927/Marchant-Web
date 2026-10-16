<template>
  <article class="case-study">
    <div class="container">
      <CaseStudyHero :study="study"/>

      <template v-for="(section, index) in study.sections" :key="section.id">
        <CaseStudyWorkflow
            v-if="section.type === 'workflow'"
            :section="section"
            :index-label="label(index)"
        />
        <CaseStudyChallenges
            v-else-if="section.type === 'challenges'"
            :section="section"
            :index-label="label(index)"
        />
        <section v-else class="case-section" :aria-labelledby="section.id">
          <p class="eyebrow">{{ label(index) }}</p>
          <h2 :id="section.id">{{ section.title }}</h2>
          <p v-if="section.lede" class="lede">{{ section.lede }}</p>
          <div v-if="section.paragraphs" class="prose">
            <p v-for="(paragraph, paragraphIndex) in section.paragraphs" :key="paragraphIndex">{{ paragraph }}</p>
          </div>
          <p v-if="section.note" class="case-note">{{ section.note }}</p>
          <ul v-if="section.type === 'technologies'" class="chip-list" aria-label="Technologies described in project materials">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
          <div v-if="section.type === 'results'" class="result-groups">
            <section v-for="group in section.groups" :key="group.title" class="result-group">
              <h3>{{ group.title }}</h3>
              <div v-if="group.paragraphs" class="prose">
                <p v-for="(paragraph, paragraphIndex) in group.paragraphs" :key="paragraphIndex">{{ paragraph }}</p>
              </div>
              <ul v-if="group.items" class="result-list">
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </section>
          </div>
          <div v-if="section.type === 'links' && section.links.length" class="actions">
            <a
                v-for="link in section.links"
                :key="link.href"
                class="button"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
            >{{ link.label }}</a>
          </div>
        </section>
      </template>

      <nav class="case-nav" aria-label="Project">
        <NuxtLink v-if="previous" class="text-link" :to="`/work/${previous.slug}`">{{ previous.name }}</NuxtLink>
        <NuxtLink class="button button--ghost" to="/work">All work</NuxtLink>
        <NuxtLink v-if="next" class="text-link" :to="`/work/${next.slug}`">{{ next.name }}</NuxtLink>
      </nav>
    </div>
  </article>
</template>

<script setup>
import {getCaseStudy, getCaseStudyNeighbors} from '~/content/case-studies'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const study = getCaseStudy(slug)

if (!study) {
    throw createError({statusCode: 404, statusMessage: 'Project not found', fatal: true})
}

const {previous, next} = getCaseStudyNeighbors(study.slug)

useSeoMeta({
    title: study.name,
    description: `${study.tagline} ${study.summary}`,
})

const label = (index) => String(index + 1).padStart(2, '0')
</script>
