<template>
  <div>
    <header class="page-intro container">
      <p class="eyebrow">Work</p>
      <h1>Work</h1>
      <p class="lede">Case studies are not written yet. These names are here so projects can be documented one at a time.</p>
    </header>
    <section class="section container" aria-label="Projects">
      <div class="card-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
      </div>
    </section>
  </div>
</template>

<script setup>
import {projects} from '~/content/projects'

useSeoMeta({
  title: 'Work',
  description: 'Projects by Thomas Clarke. Case studies are not written yet.',
})
</script>
