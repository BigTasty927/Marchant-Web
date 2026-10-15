<template>
  <div>
    <section class="page-intro container">
      <p class="eyebrow">Thomas Clarke</p>
      <h1 class="display">
        <span v-for="line in home.headline" :key="line" class="headline-line">{{ line }}</span>
      </h1>
      <p class="lede">{{ home.description }}</p>
      <div class="actions">
        <NuxtLink class="button" to="/work">Explore Work</NuxtLink>
        <NuxtLink class="button button--ghost" to="/contact">Contact</NuxtLink>
      </div>
    </section>

    <section class="section container" aria-labelledby="selected-work">
      <div class="section__header">
        <h2 id="selected-work">Selected work</h2>
        <NuxtLink class="text-link" to="/work">View all work</NuxtLink>
      </div>
      <div class="card-grid">
        <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project"/>
      </div>
    </section>

    <section class="section container split" aria-label="About and North Star">
      <div class="prose">
        <h2>About</h2>
        <p>{{ about.headline }}</p>
        <p><NuxtLink class="text-link" to="/about">About</NuxtLink></p>
      </div>
      <div class="prose">
        <h2>{{ northStar.title }}</h2>
        <p>{{ northStar.paragraphs[0] }}</p>
        <p><NuxtLink class="text-link" :to="about.northStar.to">{{ about.northStar.label }}</NuxtLink></p>
      </div>
    </section>
  </div>
</template>

<script setup>
import {home} from '~/content/site'
import {about} from '~/content/about'
import {northStar} from '~/content/north-star'
import {featuredProjects} from '~/content/projects'

useSeoMeta({
  title: 'Home',
  description: home.description,
})
</script>

<style scoped>
.headline-line {
  display: block;
}
</style>
